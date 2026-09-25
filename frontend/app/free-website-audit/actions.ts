"use server";

import { notifyLead } from "@/lib/lead-notify";

export type WebsiteAuditState = {
  status: "idle" | "success" | "error";
  message: string;
};

export async function submitWebsiteAudit(
  _prevState: WebsiteAuditState,
  formData: FormData,
): Promise<WebsiteAuditState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const websiteUrl = String(formData.get("websiteUrl") ?? "").trim();
  const businessType = String(formData.get("businessType") ?? "").trim();
  const biggestChallenge = String(formData.get("biggestChallenge") ?? "").trim();

  if (!name || !email || !websiteUrl) {
    return {
      status: "error",
      message: "Please complete the required fields.",
    };
  }

  try {
    await notifyLead({
      formName: "Website Audit",
      subject: `New website audit request — ${websiteUrl}`,
      fields: [
        { label: "Name", value: name },
        { label: "Email", value: email },
        { label: "Website", value: websiteUrl },
        { label: "Business type", value: businessType },
        { label: "Biggest challenge", value: biggestChallenge },
      ],
    });

    return {
      status: "success",
      message:
        "Thanks. Your audit request is confirmed. We will send your website audit summary within 2 business days.",
    };
  } catch (error) {
    console.error("Website audit submission failed", error);
    return {
      status: "error",
      message: "Submission failed. Please try again or email info@bktechhub.com.",
    };
  }
}
