# Bonsteve Digital Hub - Backend Integration Contracts

## Overview
This document outlines the API contracts, data models, and integration plan for transitioning from frontend mock data to a fully functional full-stack application.

---

## Current Mock Data Analysis

### Static Data (No Backend Required)
The following data will remain in `mock.js` as they are static content:
- **services**: Company service offerings (6 items)
- **pricingPackages**: Pricing tiers (5 packages)
- **additionalServices**: Monthly services pricing (3 items)
- **portfolioImages**: Portfolio image URLs (10 images)
- **testimonials**: Client testimonials (4 items)
- **stats**: Company statistics (4 items)
- **companyInfo**: Company contact information

### Dynamic Data (Backend Required)
1. **Contact Form Submissions**: User inquiries need to be stored and processed

---

## Backend Implementation Plan

### 1. Contact Form Submissions

**Endpoint**: `POST /api/contact`

**Request Body**:
```json
{
  "name": "string (required)",
  "email": "string (required, valid email)",
  "phone": "string (optional)",
  "message": "string (required)"
}
```

**Response** (Success - 201):
```json
{
  "success": true,
  "message": "Thank you for contacting us! We'll respond within 24 hours.",
  "inquiryId": "uuid"
}
```

**Response** (Error - 400):
```json
{
  "success": false,
  "error": "Validation error message"
}
```

**Database Model** (MongoDB - `inquiries` collection):
```python
{
  "id": "uuid",
  "name": "string",
  "email": "string",
  "phone": "string | null",
  "message": "string",
  "status": "new" | "contacted" | "resolved",
  "created_at": "datetime",
  "updated_at": "datetime"
}
```

---

### 2. Get All Inquiries (Optional - Admin Panel)

**Endpoint**: `GET /api/inquiries`

**Query Parameters**:
- `status`: Filter by status (optional)
- `limit`: Number of results (default: 50)
- `skip`: Pagination offset (default: 0)

**Response** (Success - 200):
```json
{
  "success": true,
  "data": [
    {
      "id": "uuid",
      "name": "string",
      "email": "string",
      "phone": "string | null",
      "message": "string",
      "status": "new",
      "created_at": "datetime",
      "updated_at": "datetime"
    }
  ],
  "total": 10,
  "limit": 50,
  "skip": 0
}
```

---

### 3. Update Inquiry Status (Optional - Admin Panel)

**Endpoint**: `PATCH /api/inquiries/{inquiry_id}`

**Request Body**:
```json
{
  "status": "new" | "contacted" | "resolved"
}
```

**Response** (Success - 200):
```json
{
  "success": true,
  "message": "Inquiry status updated successfully",
  "data": {
    "id": "uuid",
    "status": "contacted",
    "updated_at": "datetime"
  }
}
```

---

## Frontend Integration Plan

### Files to Modify

#### 1. `/app/frontend/src/components/Contact.jsx`
**Changes**:
- Remove mock toast notification
- Add axios POST request to `/api/contact`
- Handle loading states during submission
- Display success/error messages from backend
- Keep form reset on successful submission

**Integration Code**:
```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  try {
    const response = await axios.post(`${API}/contact`, formData);
    
    toast({
      title: 'Message Sent!',
      description: response.data.message,
    });
    
    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' });
  } catch (error) {
    toast({
      title: 'Error',
      description: error.response?.data?.error || 'Failed to send message. Please try again.',
      variant: 'destructive'
    });
  } finally {
    setIsSubmitting(false);
  }
};
```

---

## Backend File Structure

### New Files to Create
1. `/app/backend/models/inquiry.py` - Pydantic models for inquiry data
2. `/app/backend/routes/contact.py` - Contact form endpoints

### Files to Modify
1. `/app/backend/server.py` - Include new router

---

## Implementation Steps

### Phase 1: Backend Core
1. ✅ Create inquiry Pydantic models
2. ✅ Implement POST /api/contact endpoint
3. ✅ Add validation and error handling
4. ✅ Test with curl/Postman

### Phase 2: Frontend Integration
1. ✅ Update Contact.jsx with API integration
2. ✅ Add loading states
3. ✅ Remove mock data dependency
4. ✅ Test form submission end-to-end

### Phase 3: Admin Features (Optional)
1. ⏸️ Implement GET /api/inquiries endpoint
2. ⏸️ Implement PATCH /api/inquiries/{id} endpoint
3. ⏸️ Create simple admin view component

### Phase 4: Testing
1. ✅ Backend API testing
2. ✅ Frontend form validation testing
3. ✅ End-to-end integration testing

---

## Notes
- Email notifications can be added later as an enhancement
- Admin panel is optional for MVP
- All inquiries are stored in MongoDB for future reference
- Form validation happens on both frontend and backend
