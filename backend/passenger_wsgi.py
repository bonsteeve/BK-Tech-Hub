import os
import sys

# 1. Add the backend directory to sys.path
sys.path.insert(0, os.path.dirname(__file__))

# 2. Force load environment variables (Passenger often misses them)
from dotenv import load_dotenv
load_dotenv(os.path.join(os.path.dirname(__file__), '.env'))

# 3. Import the FastAPI app
# If your app instance is "app = FastAPI()" inside "server.py", use:
from server import app 
from a2wsgi import ASGIMiddleware

# 4. Create the WSGI callable named 'application' (to match your screenshot)
application = ASGIMiddleware(app)