import os
import sys

# Ensure the backend directory is in the path
sys.path.insert(0, os.path.dirname(__file__))

# FastAPI needs a bridge to work with WSGI (Passenger)
from a2wsgi import ASGIMiddleware
from server import app 

application = ASGIMiddleware(app)