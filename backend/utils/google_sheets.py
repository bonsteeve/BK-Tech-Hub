import os
from google.oauth2.service_account import Credentials
from googleapiclient.discovery import build


SCOPES = ["https://www.googleapis.com/auth/spreadsheets"]


def append_to_sheet(values: list):
    """
    Appends a single row to the Google Sheet.
    `values` must be a list matching the sheet columns order.
    """

    sheet_id = os.getenv("GOOGLE_SHEET_ID")
    creds_file = os.getenv("GOOGLE_SERVICE_ACCOUNT_FILE")

    if not sheet_id or not creds_file:
        raise RuntimeError("Google Sheets environment variables are not set")

    credentials = Credentials.from_service_account_file(
        creds_file,
        scopes=SCOPES
    )

    service = build("sheets", "v4", credentials=credentials)

    body = {
        "values": [values]
    }

    service.spreadsheets().values().append(
        spreadsheetId=sheet_id,
        range="A:E",
        valueInputOption="USER_ENTERED",
        insertDataOption="INSERT_ROWS",
        body=body
    ).execute()
