from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
from a2wsgi import ASGIMiddleware

import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List
import uuid
from datetime import datetime, timezone

# ------------------------
# Routes Import
# ------------------------
try:
    from routes import contact
except ImportError:
    contact = None
    logging.warning("Routes folder or contact.py not found.")

# ------------------------
# Environment & Database
# ------------------------
ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.getenv("MONGO_URL")
db_name = os.getenv("DB_NAME")

# Database Connection
client = AsyncIOMotorClient(mongo_url)
db = client[db_name]

# ------------------------
# App Setup
# ------------------------
app = FastAPI(
    title="BK-Tech-Hub API",
    root_path="/api"
)
api_router = APIRouter()

# ------------------------
# Models
# ------------------------
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

# ------------------------
# API Endpoints
# ------------------------
@api_router.get("/")
async def root():
    return {
        "status": "online", 
        "message": "BK-Tech-Hub Backend is fully operational",
        "database": "Connected" if mongo_url else "Missing Config"
    }

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_obj = StatusCheck(**input.model_dump())
    doc = status_obj.model_dump()
    doc["timestamp"] = doc["timestamp"].isoformat()
    await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    for check in status_checks:
        if isinstance(check["timestamp"], str):
            check["timestamp"] = datetime.fromisoformat(check["timestamp"])
    return status_checks

# ------------------------
# Register Routers
# ------------------------
app.include_router(api_router)

if contact:
    if hasattr(contact, "set_db"):
        contact.set_db(db)
    app.include_router(contact.router)

# ------------------------
# Middleware (CORS)
# ------------------------
app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get("CORS_ORIGINS", "*").split(","),
    allow_methods=["*"],
    allow_headers=["*"],
)

# ------------------------
# Lifecycle Events
# ------------------------
@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()

# ------------------------
# cPanel/WSGI Entry Point (CRITICAL)
# ------------------------
# This converts the ASGI FastAPI app into a WSGI app that cPanel can run.
application = ASGIMiddleware(app)
