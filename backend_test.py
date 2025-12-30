#!/usr/bin/env python3
"""
Backend API Testing for Bonsteve Digital Hub Contact Form
Tests the POST /api/contact endpoint and related functionality
"""

import requests
import json
import os
from datetime import datetime
import uuid

# Get backend URL from frontend .env file
def get_backend_url():
    try:
        with open('/app/frontend/.env', 'r') as f:
            for line in f:
                if line.startswith('REACT_APP_BACKEND_URL='):
                    return line.split('=', 1)[1].strip()
    except Exception as e:
        print(f"Error reading frontend .env: {e}")
        return None

BACKEND_URL = get_backend_url()
if not BACKEND_URL:
    print("ERROR: Could not get REACT_APP_BACKEND_URL from frontend/.env")
    exit(1)

print(f"Testing backend at: {BACKEND_URL}")

# Test data
VALID_CONTACT_DATA = {
    "name": "John Doe",
    "email": "john.doe@example.com", 
    "phone": "+254712345678",
    "message": "I am interested in your web development services. Could you please provide more information about your pricing and timeline for a business website?"
}

VALID_CONTACT_NO_PHONE = {
    "name": "Jane Smith",
    "email": "jane.smith@example.com",
    "message": "Hello, I would like to discuss a potential project for my startup. We need a modern e-commerce website."
}

INVALID_DATA_TESTS = [
    {
        "name": "missing_name",
        "data": {
            "email": "test@example.com",
            "message": "This is a test message with more than 10 characters"
        },
        "expected_error": "name is required"
    },
    {
        "name": "missing_email", 
        "data": {
            "name": "Test User",
            "message": "This is a test message with more than 10 characters"
        },
        "expected_error": "email is required"
    },
    {
        "name": "missing_message",
        "data": {
            "name": "Test User",
            "email": "test@example.com"
        },
        "expected_error": "message is required"
    },
    {
        "name": "invalid_email",
        "data": {
            "name": "Test User",
            "email": "invalid-email",
            "message": "This is a test message with more than 10 characters"
        },
        "expected_error": "invalid email format"
    },
    {
        "name": "short_message",
        "data": {
            "name": "Test User", 
            "email": "test@example.com",
            "message": "short"
        },
        "expected_error": "message too short"
    },
    {
        "name": "short_name",
        "data": {
            "name": "A",
            "email": "test@example.com", 
            "message": "This is a test message with more than 10 characters"
        },
        "expected_error": "name too short"
    }
]

def test_api_health():
    """Test if the API is running"""
    print("\n=== Testing API Health ===")
    try:
        response = requests.get(f"{BACKEND_URL}/api/", timeout=10)
        if response.status_code == 200:
            print("✅ API is running and accessible")
            return True
        else:
            print(f"❌ API health check failed: {response.status_code}")
            return False
    except Exception as e:
        print(f"❌ API health check failed: {e}")
        return False

def test_valid_contact_submission():
    """Test valid contact form submission"""
    print("\n=== Testing Valid Contact Form Submission ===")
    
    try:
        response = requests.post(
            f"{BACKEND_URL}/api/contact",
            json=VALID_CONTACT_DATA,
            headers={"Content-Type": "application/json"},
            timeout=10
        )
        
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 201:
            data = response.json()
            if (data.get("success") == True and 
                "inquiryId" in data and 
                "message" in data):
                print("✅ Valid contact submission successful")
                print(f"   Inquiry ID: {data['inquiryId']}")
                print(f"   Message: {data['message']}")
                return True, data["inquiryId"]
            else:
                print("❌ Response format incorrect")
                return False, None
        else:
            print(f"❌ Expected 201, got {response.status_code}")
            return False, None
            
    except Exception as e:
        print(f"❌ Valid contact submission failed: {e}")
        return False, None

def test_valid_contact_no_phone():
    """Test valid contact form submission without phone"""
    print("\n=== Testing Valid Contact Form (No Phone) ===")
    
    try:
        response = requests.post(
            f"{BACKEND_URL}/api/contact",
            json=VALID_CONTACT_NO_PHONE,
            headers={"Content-Type": "application/json"},
            timeout=10
        )
        
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 201:
            data = response.json()
            if (data.get("success") == True and 
                "inquiryId" in data and 
                "message" in data):
                print("✅ Valid contact submission (no phone) successful")
                return True, data["inquiryId"]
            else:
                print("❌ Response format incorrect")
                return False, None
        else:
            print(f"❌ Expected 201, got {response.status_code}")
            return False, None
            
    except Exception as e:
        print(f"❌ Valid contact submission (no phone) failed: {e}")
        return False, None

def test_invalid_data():
    """Test validation with invalid data"""
    print("\n=== Testing Invalid Data Validation ===")
    
    validation_passed = True
    
    for test_case in INVALID_DATA_TESTS:
        print(f"\nTesting: {test_case['name']}")
        
        try:
            response = requests.post(
                f"{BACKEND_URL}/api/contact",
                json=test_case["data"],
                headers={"Content-Type": "application/json"},
                timeout=10
            )
            
            print(f"  Status Code: {response.status_code}")
            print(f"  Response: {response.text}")
            
            if response.status_code == 422:  # Validation error
                print(f"  ✅ Validation correctly rejected {test_case['name']}")
            elif response.status_code == 400:  # Bad request
                print(f"  ✅ Bad request correctly rejected {test_case['name']}")
            else:
                print(f"  ❌ Expected 422 or 400, got {response.status_code}")
                validation_passed = False
                
        except Exception as e:
            print(f"  ❌ Test {test_case['name']} failed: {e}")
            validation_passed = False
    
    return validation_passed

def test_database_verification(inquiry_ids):
    """Test if data is stored in MongoDB by checking admin endpoint"""
    print("\n=== Testing Database Storage Verification ===")
    
    if not inquiry_ids:
        print("❌ No inquiry IDs to verify")
        return False
    
    try:
        # Test the admin endpoint to see if inquiries are stored
        response = requests.get(
            f"{BACKEND_URL}/api/inquiries",
            timeout=10
        )
        
        print(f"Admin endpoint status: {response.status_code}")
        print(f"Admin endpoint response: {response.text}")
        
        if response.status_code == 200:
            data = response.json()
            if data.get("success") == True and "data" in data:
                inquiries = data["data"]
                print(f"✅ Found {len(inquiries)} inquiries in database")
                
                # Check if our test inquiries are in the database
                found_ids = [inq.get("id") for inq in inquiries if inq.get("id") in inquiry_ids]
                if found_ids:
                    print(f"✅ Verified {len(found_ids)} test inquiries in database")
                    return True
                else:
                    print("❌ Test inquiries not found in database")
                    return False
            else:
                print("❌ Admin endpoint response format incorrect")
                return False
        else:
            print(f"❌ Admin endpoint failed: {response.status_code}")
            return False
            
    except Exception as e:
        print(f"❌ Database verification failed: {e}")
        return False

def run_all_tests():
    """Run all backend tests"""
    print("🚀 Starting Backend API Tests for Bonsteve Digital Hub Contact Form")
    print("=" * 70)
    
    test_results = {
        "api_health": False,
        "valid_submission": False,
        "valid_no_phone": False,
        "validation": False,
        "database_verification": False
    }
    
    inquiry_ids = []
    
    # Test 1: API Health
    test_results["api_health"] = test_api_health()
    
    if not test_results["api_health"]:
        print("\n❌ API is not accessible. Stopping tests.")
        return test_results
    
    # Test 2: Valid submission with phone
    success, inquiry_id = test_valid_contact_submission()
    test_results["valid_submission"] = success
    if inquiry_id:
        inquiry_ids.append(inquiry_id)
    
    # Test 3: Valid submission without phone
    success, inquiry_id = test_valid_contact_no_phone()
    test_results["valid_no_phone"] = success
    if inquiry_id:
        inquiry_ids.append(inquiry_id)
    
    # Test 4: Validation tests
    test_results["validation"] = test_invalid_data()
    
    # Test 5: Database verification
    test_results["database_verification"] = test_database_verification(inquiry_ids)
    
    # Summary
    print("\n" + "=" * 70)
    print("📊 TEST SUMMARY")
    print("=" * 70)
    
    passed = sum(test_results.values())
    total = len(test_results)
    
    for test_name, result in test_results.items():
        status = "✅ PASS" if result else "❌ FAIL"
        print(f"{test_name.replace('_', ' ').title()}: {status}")
    
    print(f"\nOverall: {passed}/{total} tests passed")
    
    if passed == total:
        print("🎉 All tests passed! Contact form API is working correctly.")
    else:
        print("⚠️  Some tests failed. Please check the issues above.")
    
    return test_results

if __name__ == "__main__":
    results = run_all_tests()