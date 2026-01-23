import os
import sys

# 1. Add the backend directory to sys.path so Python can find server.py
sys.path.insert(0, os.path.dirname(__file__))

# 2. Import the 'application' we already created at the bottom of server.py
# This 'application' is the ASGIMiddleware wrapper
from server import application