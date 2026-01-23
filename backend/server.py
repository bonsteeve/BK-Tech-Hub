import os
import sys
import logging
import uuid
from pathlib import Path
from datetime import datetime, timezone
from typing import List

from fastapi import FastAPI, APIRouter
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
from a2wsgi import ASGIMiddleware
from dotenv import load_dotenv
from pydantic import BaseModel, Field, ConfigDict

# ---------------------------------------------------------
# 1. PATH & ENVIRONMENT CONFIGURATION
# ---------------------------------------------------------
# Force the backend directory into sys.path to fix ModuleNotFoundError
ROOT_DIR = Path(__file__).parent.resolve()
sys.path.insert(0, str(ROOT_DIR))

# Load .env using absolute path
load_dotenv(ROOT_DIR / '.env')

# Configure Logging to catch errors in passenger.log
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
    handlers=[logging.StreamHandler(sys.stdout)]
)

# ---------------------------------------------------------
# 2. ROUTES IMPORT (Fixed to be loud on failure)
# ---------------------------------------------------------
# Ensure __init__.py exists in 'routes' and 'utils' folders
try:
    from routes import contact
except ImportError as e:
    logging.error(f"CRITICAL: Could not import routes. Check __init__.py. Error: {e}")
    raise e

# ---------------------------------------------------------
# 3. DATABASE CONNECTION
# ---------------------------------------------------------
mongo_url = os.getenv("MONGO_URL")
db_name = os.getenv("DB_NAME")

if not mongo_url:
    logging.error("MONGO_URL not found in environment variables!")

client = AsyncIOMotorClient(mongo_url)
db = client[db_name]

# ---------------------------------------------------------
# 4. APP SETUP
# ---------------------------------------------------------
app = FastAPI(title="BK-Tech-Hub API")

# ---------------------------------------------------------
# 5. MODELS
# ---------------------------------------------------------
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

# ---------------------------------------------------------
# 6. API ENDPOINTS
# ---------------------------------------------------------
api_router = APIRouter()

@api_router.get("/")
async def root():
    return {
        "status": "online", 
        "message": "BK-Tech-Hub Backend is fully operational",
        "database": "Connected" if mongo_url else "Missing Config",
        "environment": "Production (Passenger)"
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
            try:
                check["timestamp"] = datetime.fromisoformat(check["timestamp"])
            except ValueError:
                pass
    return status_checks

# ---------------------------------------------------------
# 7. REGISTER ROUTERS & MIDDLEWARE
# ---------------------------------------------------------
app.include_router(api_router)

# Inject database into the contact route and include it
if hasattr(contact, "set_db"):
    contact.set_db(db)
app.include_router(contact.router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get("CORS_ORIGINS", "*").split(","),
    allow_methods=["*"],
    allow_headers=["*"],
)

# ---------------------------------------------------------
# 8. LIFECYCLE & WSGI BRIDGE
# ---------------------------------------------------------
@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()

# WSGI bridge for Passenger
application = ASGIMiddleware(app)