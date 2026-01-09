from fastapi import APIRouter, HTTPException, status
from motor.motor_asyncio import AsyncIOMotorDatabase
from models.inquiry import InquiryCreate, Inquiry, InquiryResponse, InquiryStatusUpdate
from typing import List, Optional
import logging

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/api", tags=["contact"])


def set_db(database: AsyncIOMotorDatabase):
    """Set the database instance for the router"""
    global db
    db = database


@router.post("/contact", response_model=InquiryResponse, status_code=status.HTTP_201_CREATED)
async def create_inquiry(inquiry_data: InquiryCreate):
    """
    Create a new contact inquiry
    
    Args:
        inquiry_data: Contact form data
    
    Returns:
        InquiryResponse with success status and inquiry ID
    """
    try:
        # Create inquiry object
        inquiry = Inquiry(**inquiry_data.dict())
        
        # Save to database
        await db.inquiries.insert_one(inquiry.dict())
        
        logger.info(f"New inquiry created: {inquiry.id} from {inquiry.email}")
        
        return InquiryResponse(
            success=True,
            message="Thank you for contacting us! We'll respond within 24 hours.",
            inquiryId=inquiry.id
        )
    except Exception as e:
        logger.error(f"Error creating inquiry: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to submit inquiry. Please try again later."
        )


@router.get("/inquiries")
async def get_inquiries(
    status_filter: Optional[str] = None,
    limit: int = 50,
    skip: int = 0
):
    """
    Get all inquiries (Admin endpoint)
    
    Args:
        status_filter: Filter by status (optional)
        limit: Number of results to return
        skip: Number of results to skip (pagination)
    
    Returns:
        List of inquiries with pagination info
    """
    try:
        # Build query
        query = {}
        if status_filter:
            query["status"] = status_filter
        
        # Get total count
        total = await db.inquiries.count_documents(query)
        
        # Get inquiries
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
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to fetch inquiries"
        )


@router.patch("/inquiries/{inquiry_id}")
async def update_inquiry_status(inquiry_id: str, status_update: InquiryStatusUpdate):
    """
    Update inquiry status (Admin endpoint)
    
    Args:
        inquiry_id: ID of the inquiry to update
        status_update: New status
    
    Returns:
        Updated inquiry data
    """
    try:
        from datetime import datetime
        
        # Update the inquiry
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
        
        # Get updated inquiry
        inquiry = await db.inquiries.find_one({"id": inquiry_id})
        
        logger.info(f"Inquiry {inquiry_id} status updated to {status_update.status}")
        
        return {
            "success": True,
            "message": "Inquiry status updated successfully",
            "data": {
                "id": inquiry["id"],
                "status": inquiry["status"],
                "updated_at": inquiry["updated_at"]
            }
        }
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error updating inquiry status: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to update inquiry status"
        )
