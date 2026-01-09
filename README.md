# BK-Tech-Hub

## Project Description

BK-Tech-Hub is a full-stack web application for a digital agency, featuring a modern React frontend and a FastAPI backend. The project is designed to showcase company services, portfolios, testimonials, and pricing, and includes a contact form that stores user inquiries in a MongoDB database. The frontend uses Tailwind CSS for styling and Radix UI for accessible components, while the backend provides RESTful APIs for dynamic data handling.

---

## Project Structure

```
BK-Tech-Hub/
├── backend/
│   ├── requirements.txt         # Python dependencies
│   ├── server.py                # FastAPI app entry point
│   ├── models/
│   │   └── inquiry.py           # Pydantic models for inquiries
│   └── routes/
│       └── contact.py           # API routes for contact/inquiries
├── frontend/
│   ├── package.json             # React dependencies and scripts
│   ├── craco.config.js          # Craco/webpack config
│   ├── src/
│   │   ├── App.js               # Main React app
│   │   ├── components/          # UI components (About, Contact, etc.)
│   │   ├── hooks/               # Custom React hooks
│   │   ├── lib/                 # Utility functions
│   │   └── mock.js              # Static mock data
│   └── public/
│       └── index.html           # HTML template
├── tests/                       # Python test suite
├── backend_test.py              # Backend test entry
├── contracts.md                 # API/data contracts
├── README.md                    # Project documentation
└── test_result.md               # Test results
```

---

## How to Test Locally

### Prerequisites
- Node.js 18+ and Yarn
- Python 3.10+
- MongoDB running locally or a connection string

### 1. Setup Backend
```bash
cd backend
python -m venv venv
venv\Scripts\activate  # Windows
source venv/bin/activate #Linux
pip install -r requirements.txt
```
Create a `.env` file in `backend/`:
```
MONGO_URL=mongodb://localhost:27017
DB_NAME=bk_tech_hub
CORS_ORIGINS=http://localhost:3000
```

### 2. Setup Frontend
```bash
cd frontend
yarn install
```
Create a `.env` file in `frontend/`:
```
REACT_APP_BACKEND_URL=http://localhost:8000
```

### 3. Run Both Servers

**Backend (FastAPI):**
```bash
cd backend
python -m uvicorn server:app --reload --port 8000
```
Backend runs at `http://localhost:8000`

**Frontend (React):**
```bash
cd frontend
yarn start
```
Frontend runs at `http://localhost:3000`

### 4. Test the Application
1. Open `http://localhost:3000` in your browser
2. Use the contact form to submit an inquiry
3. You should see a success notification
4. Check MongoDB to verify the inquiry was stored

### 5. Verify Backend API
- Visit `http://localhost:8000/docs` for interactive API documentation
- Test endpoints directly in Swagger UI

---

For more details, see `contracts.md` for API contracts and data models.
