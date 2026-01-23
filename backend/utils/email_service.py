import smtplib
import logging
from email.message import EmailMessage
from os import getenv

SMTP_HOST = getenv("SMTP_HOST")
SMTP_PORT = int(getenv("SMTP_PORT", 587))
SMTP_USERNAME = getenv("SMTP_USERNAME")
SMTP_PASSWORD = getenv("SMTP_PASSWORD")
FROM_EMAIL = getenv("FROM_EMAIL")
ADMIN_EMAIL = getenv("ADMIN_EMAIL")

logger = logging.getLogger(__name__)

def send_email(subject: str, body: str, to_email: str) -> bool:
    try:
        msg = EmailMessage()
        msg["From"] = FROM_EMAIL
        msg["To"] = to_email
        msg["Subject"] = subject
        msg.set_content(body)

        if SMTP_PORT == 465:
            # SSL
            with smtplib.SMTP_SSL(SMTP_HOST, SMTP_PORT, timeout=10) as server:
                server.login(SMTP_USERNAME, SMTP_PASSWORD)
                server.send_message(msg)
        else:
            # STARTTLS (587)
            with smtplib.SMTP(SMTP_HOST, SMTP_PORT, timeout=10) as server:
                server.ehlo()
                server.starttls()
                server.ehlo()
                server.login(SMTP_USERNAME, SMTP_PASSWORD)
                server.send_message(msg)

        return True

    except Exception as e:
        logger.error(f"Email send failed to {to_email}: {e}")
        return False
