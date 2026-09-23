"use server";

export type WebsiteAuditState = {
  status: "idle" | "success" | "error";
  message: string;
};

export const initialWebsiteAuditState: WebsiteAuditState = {
  status: "idle",
  message: "",
};

export async function submitWebsiteAudit(
  _prevState: WebsiteAuditState,
  formData: FormData,
): Promise<WebsiteAuditState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const websiteUrl = String(formData.get("websiteUrl") ?? "").trim();

  if (!name || !email || !websiteUrl) {
    return {
      status: "error",
      message: "Please complete the required fields.",
    };
  }

  const payload = {
    name,
    email,
    websiteUrl,
    businessType: String(formData.get("businessType") ?? "").trim(),
    biggestChallenge: String(formData.get("biggestChallenge") ?? "").trim(),
  };

  try {
    console.info("Website audit payload", payload);

    return {
      status: "success",
      message:
        "Thanks. Your audit request is confirmed. We will send your website audit summary within 2 business days.",
    };
  } catch {
    return {
      status: "error",
      message: "Submission failed. Please try again or email info@bktechhub.com.",
    };
  }
}
