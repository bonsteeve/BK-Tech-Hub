"use server";

import { notifyLead } from "@/lib/lead-notify";

export type BookCallState = {
  status: "idle" | "success" | "error";
  message: string;
};

export async function submitBookCall(
  _prevState: BookCallState,
  formData: FormData,
): Promise<BookCallState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const businessName = String(formData.get("businessName") ?? "").trim();
  const projectGoal = String(formData.get("projectGoal") ?? "").trim();
  const websiteUrl = String(formData.get("websiteUrl") ?? "").trim();
  const budgetRange = String(formData.get("budgetRange") ?? "").trim();

  if (!name || !email || !businessName || !projectGoal) {
    return {
      status: "error",
      message: "Please complete all required fields.",
    };
  }

  try {
    await notifyLead({
      formName: "Book a Call",
      subject: `New call booking — ${businessName}`,
      fields: [
        { label: "Name", value: name },
        { label: "Email", value: email },
        { label: "Business", value: businessName },
        { label: "Website", value: websiteUrl },
        { label: "Project goal", value: projectGoal },
        { label: "Budget", value: budgetRange },
      ],
    });

    return {
      status: "success",
      message:
        "Thanks. We received your booking request and will confirm a call slot within one business day.",
    };
  } catch (error) {
    console.error("Book call submission failed", error);
    return {
      status: "error",
      message: "Booking request failed. Please try again or email info@bktechhub.com.",
    };
  }
}
