"use server";

import { notifyLead } from "@/lib/lead-notify";

export type BookDemoState = {
  status: "idle" | "success" | "error";
  message: string;
};

export async function submitBookDemo(
  _prevState: BookDemoState,
  formData: FormData,
): Promise<BookDemoState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const businessName = String(formData.get("businessName") ?? "").trim();
  const useCase = String(formData.get("useCase") ?? "").trim();
  const whatsappNumber = String(formData.get("whatsappNumber") ?? "").trim();

  if (!name || !email || !businessName || !useCase) {
    return {
      status: "error",
      message: "Please complete all required fields.",
    };
  }

  try {
    await notifyLead({
      formName: "Book a Demo",
      subject: `New ConversaOS demo request — ${businessName}`,
      fields: [
        { label: "Name", value: name },
        { label: "Email", value: email },
        { label: "Business", value: businessName },
        { label: "WhatsApp", value: whatsappNumber },
        { label: "Use case", value: useCase },
      ],
    });

    return {
      status: "success",
      message:
        "Thanks. We received your demo request and will confirm a slot within one business day.",
    };
  } catch (error) {
    console.error("Book demo submission failed", error);
    const detail = error instanceof Error ? error.message : "";
    const needsSetup =
      detail.includes("Email not configured") || detail.includes("SMTP_USER");
    return {
      status: "error",
      message: needsSetup
        ? "Lead email is not configured yet. Add a Gmail App Password to SMTP_PASS in frontend/.env.local, then restart the server."
        : "Demo request failed. Please try again or email info@bktechhub.com.",
    };
  }
}
