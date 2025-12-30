from pydantic import BaseModel, Field, EmailStr
from typing import Optional, Literal
from datetime import datetime
import uuid


class InquiryCreate(BaseModel):
    """Model for creating a new inquiry"""
    name: str = Field(..., min_length=2, max_length=100, description="Customer name")
    email: EmailStr = Field(..., description="Customer email address")
    phone: Optional[str] = Field(None, max_length=20, description="Customer phone number")
    message: str = Field(..., min_length=10, max_length=1000, description="Inquiry message")


class Inquiry(BaseModel):
    """Model for inquiry in database"""
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    phone: Optional[str] = None
    message: str
    status: Literal["new", "contacted", "resolved"] = "new"
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)


class InquiryResponse(BaseModel):
    """Response model for inquiry creation"""
    success: bool
    message: str
    inquiryId: str


class InquiryStatusUpdate(BaseModel):
    """Model for updating inquiry status"""
    status: Literal["new", "contacted", "resolved"]
