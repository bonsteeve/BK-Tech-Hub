import os
import logging
from datetime import datetime
from typing import Optional

from fastapi import APIRouter, HTTPException, status, BackgroundTasks
from motor.motor_asyncio import AsyncIOMotorDatabase

from models.inquiry import InquiryCreate, Inquiry, InquiryResponse, InquiryStatusUpdate
from utils.google_sheets import append_to_sheet
from utils.email_service import send_email

logger = logging.getLogger(__name__)

# Tags for API documentation
router = APIRouter(prefix="", tags=["contact"])

# Global DB reference (maintained for Admin functionality)
db: Optional[AsyncIOMotorDatabase] = None

def set_db(database: AsyncIOMotorDatabase):
    global db
    db = database

# --- Helper Function for Background Emailing ---

def send_notification_emails(inquiry: Inquiry, timestamp: str):
    """
    Logic to send admin and user emails. 
    Running this in BackgroundTasks prevents the frontend from hanging.
    """
    admin_email = os.getenv("ADMIN_EMAIL")
    
    # 1. Admin Email Template
    admin_subject = f"New Contact Form Submission – {inquiry.name}"
    admin_body = (
        f"A new contact form submission was received.\n\n"
        f"Name: {inquiry.name}\n"
        f"Email: {inquiry.email}\n"
        f"Phone: {inquiry.phone or 'N/A'}\n\n"
        f"Message:\n{inquiry.message}\n\n"
        f"Submitted at (UTC): {timestamp}\n"
        f"Inquiry ID: {inquiry.id}"
    )

    # 2. User Email Template
    user_subject = "We’ve received your message – BK Tech Hub"
    user_body = (
        f"Hello {inquiry.name},\n\n"
        f"Thank you for contacting BK Tech Hub.\n\n"
        f"We have received your message and our team will review it shortly. "
        f"If required, we will reach out using the contact details you provided.\n\n"
        f"Best regards,\n"
        f"BK Tech Hub Team"
    )

    # Send to Admin
    if admin_email:
        success = send_email(admin_subject, admin_body, admin_email)
        if not success:
            logger.warning(f"Failed to send admin notification for {inquiry.id}")

    # Send to User
    success = send_email(user_subject, user_body, inquiry.email)
    if not success:
        logger.warning(f"Failed to send user confirmation for {inquiry.id}")


# --- Primary Contact Endpoint ---

@router.post(
    "/contact",
    # Matches the existing React frontend expectation
    response_model=InquiryResponse,
    status_code=status.HTTP_201_CREATED
)
async def create_inquiry(inquiry_data: InquiryCreate, background_tasks: BackgroundTasks):
    """
    Production-ready contact submission:
    1. Writes to Google Sheets (Port 443 - Bypass Hosting Block)
    2. Offloads Emailing to Background (Non-blocking)
    3. Returns immediate success to UI
    """
    try:
        # Create inquiry object (validates data and generates ID)
        inquiry = Inquiry(**inquiry_data.dict())
        timestamp = datetime.utcnow().strftime("%Y-%m-%d %H:%M:%S")

        # PERSISTENCE: Google Sheets (Source of Truth)
        # We do this 'await' or synchronously first because it's our primary storage
        append_to_sheet([
            timestamp,
            inquiry.name,
            inquiry.email,
            inquiry.phone or "",
            inquiry.message
        ])
        logger.info(f"Inquiry {inquiry.id} successfully saved to Google Sheets.")

        # NOTIFICATIONS: Handed off to FastAPI BackgroundTasks
        # The user receives their response while the SMTP server works in the background
        background_tasks.add_task(send_notification_emails, inquiry, timestamp)

        return InquiryResponse(
            success=True,
            message="Thank you for contacting us! We'll respond within 24 hours.",
            inquiryId=inquiry.id
        )

    except Exception as e:
        logger.error(f"CRITICAL: Contact form submission failed: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="We encountered an error processing your request. Please try again later."
        )

# --- Admin Endpoints (MongoDB Dependent) ---
# Note: These will return 500 errors if 27017 is blocked, but /contact will remain functional.

@router.get("/inquiries")
async def get_inquiries(status_filter: Optional[str] = None, limit: int = 50, skip: int = 0):
    if not db:
        raise HTTPException(status_code=503, detail="Database connection unavailable.")
    try:
        query = {"status": status_filter} if status_filter else {}
        total = await db.inquiries.count_documents(query)
        cursor = db.inquiries.find(query).sort("created_at", -1).skip(skip).limit(limit)
        inquiries = await cursor.to_list(length=limit)
        return {"success": True, "data": inquiries, "total": total}
    except Exception as e:
        logger.error(f"Admin fetch failed: {e}")
        raise HTTPException(status_code=500, detail="Failed to fetch from MongoDB.")

@router.patch("/inquiries/{inquiry_id}")
async def update_inquiry_status(inquiry_id: str, status_update: InquiryStatusUpdate):
    if not db:
        raise HTTPException(status_code=503, detail="Database connection unavailable.")
    try:
        result = await db.inquiries.update_one(
            {"id": inquiry_id},
            {"$set": {"status": status_update.status, "updated_at": datetime.utcnow()}}
        )
        if result.matched_count == 0:
            raise HTTPException(status_code=404, detail="Inquiry not found")
        return {"success": True, "message": "Status updated"}
    except Exception as e:
        logger.error(f"Admin update failed: {e}")
        raise HTTPException(status_code=500, detail="Update failed.")