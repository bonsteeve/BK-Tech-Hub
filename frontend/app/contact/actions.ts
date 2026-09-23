"use server";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
};

export const initialContactFormState: ContactFormState = {
  status: "idle",
  message: "",
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

  if (!name || !email || !message) {
    return {
      status: "error",
      message: "Please complete name, email, and message before submitting.",
    };
  }

  // CRM/server action integration hook:
  // Replace with your provider (HubSpot, Pipedrive, Airtable, custom API) as needed.
  // Example payload fields are intentionally explicit for easy mapping.
  const payload = {
    name,
    email,
    businessName: String(formData.get("businessName") ?? "").trim(),
    websiteUrl: String(formData.get("websiteUrl") ?? "").trim(),
    message,
  };

  try {
    console.info("Contact form payload", payload);

    return {
      status: "success",
      message: "Thanks. We received your message and will reply within one business day.",
    };
  } catch {
    return {
      status: "error",
      message: "Submission failed. Please try again or email info@bktechhub.com.",
    };
  }
}
