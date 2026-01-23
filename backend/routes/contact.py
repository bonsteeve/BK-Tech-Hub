from fastapi import APIRouter, HTTPException, status
from motor.motor_asyncio import AsyncIOMotorDatabase
from models.inquiry import InquiryCreate, Inquiry, InquiryResponse, InquiryStatusUpdate
from typing import Optional
import logging
from utils.google_sheets import append_to_sheet
from utils.email_service import send_email
from datetime import datetime
import os

logger = logging.getLogger(__name__)

# Changed prefix to "" because server.py/cPanel already handles the "/api" part
router = APIRouter(prefix="", tags=["contact"])

# Database injection (used by admin endpoints only)
def set_db(database: AsyncIOMotorDatabase):
    global db
    db = database


@router.post(
    "/contact",
    response_model=InquiryResponse,
    status_code=status.HTTP_201_CREATED
)
async def create_inquiry(inquiry_data: InquiryCreate):
    """
    Create a new contact inquiry

    - Validates request payload
    - Persists submission to Google Sheets
    - Sends admin notification email
    - Sends user confirmation email
    - Email failures NEVER block submission
    """
    try:
        # Validate and normalize inquiry data
        inquiry = Inquiry(**inquiry_data.dict())

        timestamp = datetime.utcnow().strftime("%Y-%m-%d %H:%M:%S")

        # Persist to Google Sheets (source of truth)
        append_to_sheet([
            timestamp,
            inquiry.name,
            inquiry.email,
            inquiry.phone or "",
            inquiry.message
        ])

        logger.info(f"Inquiry logged to Google Sheets: {inquiry.id}")

        # -------------------------
        # Email notifications
        # -------------------------

        admin_email = os.getenv("ADMIN_EMAIL")

        admin_email_body = f"""
A new contact form submission was received.

Name: {inquiry.name}
Email: {inquiry.email}
Phone: {inquiry.phone or "N/A"}

Message:
{inquiry.message}

Submitted at (UTC): {timestamp}
Inquiry ID: {inquiry.id}
"""

        user_email_body = f"""
Hello {inquiry.name},

Thank you for contacting BK Tech Hub.

We have received your message and our team will review it shortly.
If required, we will reach out using the contact details you provided.

Best regards,
BK Tech Hub Team
"""

        # Send admin notification (failure-safe)
        if admin_email:
            admin_sent = send_email(
                subject="New Contact Form Submission – BK Tech Hub",
                body=admin_email_body,
                to_email=admin_email
            )
            if not admin_sent:
                logger.warning(f"Admin email failed for inquiry {inquiry.id}")

        # Send user confirmation (failure-safe)
        user_sent = send_email(
            subject="We’ve received your message – BK Tech Hub",
            body=user_email_body,
            to_email=inquiry.email
        )
        if not user_sent:
            logger.warning(f"User email failed for inquiry {inquiry.id}")

        # -------------------------
        # API response (unchanged)
        # -------------------------

        return InquiryResponse(
            success=True,
            message="Thank you for contacting us! We'll respond within 24 hours.",
            inquiryId=inquiry.id
        )


    except Exception as e:
        logger.error(f"Error submitting inquiry: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Failed to submit inquiry: {str(e)}"
        )


# -------------------------
# Admin endpoints (MongoDB)
# -------------------------

@router.get("/inquiries")
async def get_inquiries(
    status_filter: Optional[str] = None,
    limit: int = 50,
    skip: int = 0
):
    """
    Get all inquiries (Admin endpoint)
    """
    try:
        query = {}
        if status_filter:
            query["status"] = status_filter

        total = await db.inquiries.count_documents(query)

        cursor = (
            db.inquiries
            .find(query)
            .sort("created_at", -1)
            .skip(skip)
            .limit(limit)
        )

        inquiries = await cursor.to_list(length=limit)

        return {
            "success": True,
            "data": inquiries,
            "total": total,
            "limit": limit,
            "skip": skip
        }

    except Exception as e:
        logger.error(f"Error fetching inquiries: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to fetch inquiries")

@router.patch("/inquiries/{inquiry_id}")
async def update_inquiry_status(
    inquiry_id: str,
    status_update: InquiryStatusUpdate
):
    """
    Update inquiry status (Admin endpoint)
    """
    try:
        result = await db.inquiries.update_one(
            {"id": inquiry_id},
            {
                "$set": {
                    "status": status_update.status,
                    "updated_at": datetime.utcnow()
                }
            }
        )

        if result.matched_count == 0:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Inquiry not found"
            )

        inquiry = await db.inquiries.find_one({"id": inquiry_id})

        logger.info(
            f"Inquiry {inquiry_id} status updated to {status_update.status}"
        )

        return {
            "success": True,
            "message": "Status updated",
            "data": {"id": inquiry["id"], "status": inquiry["status"]}
        }

    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error updating status: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to update status")
