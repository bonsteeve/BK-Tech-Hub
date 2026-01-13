from fastapi import APIRouter, HTTPException, status
from motor.motor_asyncio import AsyncIOMotorDatabase
from models.inquiry import InquiryCreate, Inquiry, InquiryResponse, InquiryStatusUpdate
from typing import List, Optional
import logging
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

logger = logging.getLogger(__name__)

# Changed prefix to "" because server.py/cPanel already handles the "/api" part
router = APIRouter(prefix="", tags=["contact"])

# Global DB variable to be set by server.py
db: Optional[AsyncIOMotorDatabase] = None

def set_db(database: AsyncIOMotorDatabase):
    """Set the database instance for the router"""
    global db
    db = database

@router.post("/contact", response_model=InquiryResponse, status_code=status.HTTP_201_CREATED)
async def create_inquiry(inquiry_data: InquiryCreate):
    """
    Create a new contact inquiry, save to DB, and send email notification
    """
    if db is None:
        logger.error("Database not initialized in contact.py")
        raise HTTPException(status_code=500, detail="Database connection missing")

    try:
        # 1. Prepare and Save to Database
        inquiry = Inquiry(**inquiry_data.dict())
        await db.inquiries.insert_one(inquiry.dict())
        logger.info(f"New inquiry saved to DB: {inquiry.id}")

        # 2. Attempt to Send Email Notification
        try:
            admin_email = os.getenv("ADMIN_EMAIL")
            mail_user = os.getenv("MAIL_USERNAME")
            mail_pass = os.getenv("MAIL_PASSWORD")
            mail_server = os.getenv("MAIL_SERVER", "smtp.gmail.com")
            mail_port = int(os.getenv("MAIL_PORT", 587))

            if all([admin_email, mail_user, mail_pass]):
                msg = MIMEMultipart()
                msg['From'] = mail_user
                msg['To'] = admin_email
                msg['Subject'] = f"🚀 New BK-Tech-Hub Inquiry: {inquiry_data.name}"
                
                body = (
                    f"You have a new contact form submission:\n\n"
                    f"Name: {inquiry_data.name}\n"
                    f"Email: {inquiry_data.email}\n"
                    f"Phone: {inquiry_data.phone}\n"
                    f"Message: {inquiry_data.message}\n\n"
                    f"View in DB: {inquiry.id}"
                )
                msg.attach(MIMEText(body, 'plain'))

                with smtplib.SMTP(mail_server, mail_port) as server:
                    server.starttls()
                    server.login(mail_user, mail_pass)
                    server.send_message(msg)
                logger.info("Notification email sent successfully.")
            else:
                logger.warning("Email variables missing. Skipping email send.")

        except Exception as email_err:
            # We don't crash the whole request if only the email fails
            logger.error(f"Email notification failed: {str(email_err)}")

        return InquiryResponse(
            success=True,
            message="Thank you for contacting us! We'll respond within 24 hours.",
            inquiryId=inquiry.id
        )

    except Exception as e:
        logger.error(f"Error in create_inquiry: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Failed to submit inquiry: {str(e)}"
        )

@router.get("/inquiries")
async def get_inquiries(
    status_filter: Optional[str] = None,
    limit: int = 50,
    skip: int = 0
):
    try:
        query = {}
        if status_filter:
            query["status"] = status_filter
        
        total = await db.inquiries.count_documents(query)
        cursor = db.inquiries.find(query).sort("created_at", -1).skip(skip).limit(limit)
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
async def update_inquiry_status(inquiry_id: str, status_update: InquiryStatusUpdate):
    try:
        from datetime import datetime
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
            raise HTTPException(status_code=404, detail="Inquiry not found")
        
        inquiry = await db.inquiries.find_one({"id": inquiry_id})
        return {
            "success": True,
            "message": "Status updated",
            "data": {"id": inquiry["id"], "status": inquiry["status"]}
        }
    except Exception as e:
        logger.error(f"Error updating status: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to update status")
