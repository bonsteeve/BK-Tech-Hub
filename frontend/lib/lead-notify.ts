import nodemailer from "nodemailer";

import { siteConfig } from "@/lib/site-config";

export type LeadField = {
  label: string;
  value: string;
};

export type LeadNotificationInput = {
  /** Short label for the form, e.g. "Book a Demo" */
  formName: string;
  subject: string;
  fields: LeadField[];
};

function digitsOnly(value: string) {
  return value.replace(/\D/g, "");
}

function formatFieldsText(fields: LeadField[]) {
  return fields
    .filter((field) => field.value.trim().length > 0)
    .map((field) => `${field.label}: ${field.value}`)
    .join("\n");
}

function formatFieldsHtml(fields: LeadField[]) {
  const rows = fields
    .filter((field) => field.value.trim().length > 0)
    .map(
      (field) =>
        `<tr><td style="padding:6px 12px 6px 0;font-weight:600;vertical-align:top;">${escapeHtml(field.label)}</td><td style="padding:6px 0;">${escapeHtml(field.value).replace(/\n/g, "<br/>")}</td></tr>`,
    )
    .join("");

  return `
    <div style="font-family:Arial,sans-serif;font-size:14px;color:#001A33;line-height:1.5;">
      <p style="margin:0 0 16px;">New <strong>${escapeHtml(siteConfig.name)}</strong> lead</p>
      <table style="border-collapse:collapse;">${rows}</table>
    </div>
  `;
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

async function sendLeadEmail(input: LeadNotificationInput) {
  const to = process.env.LEAD_NOTIFY_EMAIL ?? siteConfig.leads.email;
  const text = `${input.subject}\n\n${formatFieldsText(input.fields)}\n`;
  const html = formatFieldsHtml(input.fields);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? siteConfig.url;

  const smtpUser = process.env.SMTP_USER ?? process.env.SMTP_USERNAME;
  const smtpPass = process.env.SMTP_PASS ?? process.env.SMTP_PASSWORD;
  const smtpHost = process.env.SMTP_HOST ?? "smtp.gmail.com";
  const smtpPort = Number(process.env.SMTP_PORT ?? "465");

  // Preferred: Gmail (or any) SMTP
  if (smtpUser && smtpPass) {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: { user: smtpUser, pass: smtpPass },
    });

    await transporter.sendMail({
      from: process.env.SMTP_FROM ?? `"BK Tech Hub" <${smtpUser}>`,
      to,
      subject: input.subject,
      text,
      html,
      replyTo: input.fields.find((f) => f.label.toLowerCase() === "email")?.value,
    });
    return;
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (apiKey) {
    const from =
      process.env.RESEND_FROM_EMAIL ?? "BK Tech Hub Leads <onboarding@resend.dev>";

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        subject: input.subject,
        text,
        html,
      }),
    });

    if (!response.ok) {
      const body = await response.text();
      throw new Error(`Resend email failed (${response.status}): ${body}`);
    }
    return;
  }

  // FormSubmit — use the random form id (not a naked email) after activating in inbox
  const formSubmitId = process.env.FORMSUBMIT_ID;
  if (formSubmitId) {
    const response = await fetch(`https://formsubmit.co/ajax/${formSubmitId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Origin: siteUrl,
        Referer: `${siteUrl}/book-a-demo`,
      },
      body: JSON.stringify({
        _subject: input.subject,
        _template: "table",
        form: input.formName,
        message: text,
        ...Object.fromEntries(input.fields.map((field) => [field.label, field.value])),
      }),
    });

    const bodyText = await response.text();
    let parsed: { success?: string | boolean; message?: string } = {};
    try {
      parsed = JSON.parse(bodyText) as typeof parsed;
    } catch {
      // non-JSON response
    }

    const success =
      parsed.success === true || parsed.success === "true" || response.ok;
    if (!success || parsed.success === false || parsed.success === "false") {
      throw new Error(
        `FormSubmit failed: ${parsed.message ?? (bodyText || String(response.status))}`,
      );
    }
    return;
  }

  throw new Error(
    "Email not configured. Set FORMSUBMIT_ID, or SMTP_USER + SMTP_PASS, or RESEND_API_KEY in .env.local",
  );
}

/**
 * WhatsApp alert to the team number.
 * Prefers WhatsApp Cloud API when configured; otherwise CallMeBot (simple personal alerts).
 * Returns "skipped" when no WhatsApp credentials are set (email-only mode).
 */
async function sendLeadWhatsApp(input: LeadNotificationInput): Promise<"sent" | "skipped"> {
  const phone = digitsOnly(process.env.LEAD_NOTIFY_WHATSAPP ?? siteConfig.leads.whatsapp);
  const text = `*${siteConfig.name} — ${input.formName}*\n\n${formatFieldsText(input.fields)}`;

  const cloudToken = process.env.WHATSAPP_ACCESS_TOKEN;
  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;
  const callMeBotKey = process.env.CALLMEBOT_API_KEY;

  if (!cloudToken && !phoneNumberId && !callMeBotKey) {
    console.warn(
      "Lead WhatsApp skipped — set CALLMEBOT_API_KEY (or WHATSAPP_ACCESS_TOKEN + WHATSAPP_PHONE_NUMBER_ID)",
    );
    return "skipped";
  }

  if (cloudToken && phoneNumberId) {
    const response = await fetch(
      `https://graph.facebook.com/v21.0/${phoneNumberId}/messages`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${cloudToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messaging_product: "whatsapp",
          to: phone,
          type: "text",
          text: { body: text.slice(0, 4000) },
        }),
      },
    );

    if (!response.ok) {
      const body = await response.text();
      throw new Error(`WhatsApp Cloud API failed (${response.status}): ${body}`);
    }
    return "sent";
  }

  if (!callMeBotKey) {
    throw new Error("WhatsApp Cloud API incomplete — missing token or phone number id");
  }

  const url = new URL("https://api.callmebot.com/whatsapp.php");
  url.searchParams.set("phone", phone);
  url.searchParams.set("text", text);
  url.searchParams.set("apikey", callMeBotKey);

  const response = await fetch(url.toString(), { method: "GET" });
  if (!response.ok) {
    const body = await response.text();
    throw new Error(`CallMeBot WhatsApp failed (${response.status}): ${body}`);
  }
  return "sent";
}

/**
 * Sends lead details to email and WhatsApp at the same time.
 * Email is required. WhatsApp is best-effort when configured.
 */
export async function notifyLead(input: LeadNotificationInput) {
  const [emailResult, whatsappResult] = await Promise.allSettled([
    sendLeadEmail(input),
    sendLeadWhatsApp(input),
  ]);

  if (emailResult.status === "rejected") {
    console.error("Lead email failed", emailResult.reason);
  }
  if (whatsappResult.status === "rejected") {
    console.error("Lead WhatsApp failed", whatsappResult.reason);
  }

  const emailOk = emailResult.status === "fulfilled";
  const whatsappOk =
    whatsappResult.status === "fulfilled" && whatsappResult.value === "sent";

  if (!emailOk) {
    throw new Error(
      emailResult.status === "rejected"
        ? String(emailResult.reason?.message ?? emailResult.reason)
        : "Lead email failed",
    );
  }

  return { emailOk, whatsappOk };
}
