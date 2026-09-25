"use server";

import { notifyLead } from "@/lib/lead-notify";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
};

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const honeypot = formData.get("company_website");

  if (honeypot) {
    return {
      status: "success",
      message: "Thanks. Your message has been received.",
    };
  }

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const businessName = String(formData.get("businessName") ?? "").trim();
  const websiteUrl = String(formData.get("websiteUrl") ?? "").trim();

  if (!name || !email || !message) {
    return {
      status: "error",
      message: "Please complete name, email, and message before submitting.",
    };
  }

  try {
    await notifyLead({
      formName: "Contact",
      subject: `New contact message — ${name}`,
      fields: [
        { label: "Name", value: name },
        { label: "Email", value: email },
        { label: "Business", value: businessName },
        { label: "Website", value: websiteUrl },
        { label: "Message", value: message },
      ],
    });

    return {
      status: "success",
      message: "Thanks. We received your message and will reply within one business day.",
    };
  } catch (error) {
    console.error("Contact form submission failed", error);
    return {
      status: "error",
      message: "Submission failed. Please try again or email info@bktechhub.com.",
    };
  }
}
