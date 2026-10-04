"use client";

import { useState, type FormEvent, type ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/lib/site-config";
import { getWhatsAppUrl } from "@/lib/whatsapp";

type Status = "idle" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    // Honeypot — bots fill this; humans never see it
    if (String(data.get("company_website") ?? "").trim()) {
      setStatus("success");
      setMessage("Thanks. Opening WhatsApp so you can send your message.");
      return;
    }

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const body = String(data.get("message") ?? "").trim();
    const businessName = String(data.get("businessName") ?? "").trim();
    const websiteUrl = String(data.get("websiteUrl") ?? "").trim();

    if (!name || !email || !body) {
      setStatus("error");
      setMessage("Please complete name, email, and message before submitting.");
      return;
    }

    const lines = [
      "Hello BK Tech Hub — new contact request from the website:",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      businessName ? `Business: ${businessName}` : null,
      websiteUrl ? `Website: ${websiteUrl}` : null,
      "",
      "Message:",
      body,
    ].filter((line): line is string => line !== null);

    const url = getWhatsAppUrl(lines.join("\n"));
    window.open(url, "_blank", "noopener,noreferrer");

    setStatus("success");
    setMessage("WhatsApp is opening with your message. Tap Send to deliver it.");
    form.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className="hidden" aria-hidden>
        <label htmlFor="company_website">Company website</label>
        <input id="company_website" name="company_website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Your name" htmlFor="name" required>
          <Input id="name" name="name" autoComplete="name" required />
        </Field>
        <Field label="Business email" htmlFor="email" required>
          <Input id="email" name="email" type="email" autoComplete="email" required />
        </Field>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Business name" htmlFor="businessName">
          <Input id="businessName" name="businessName" autoComplete="organization" />
        </Field>
        <Field label="Website URL" htmlFor="websiteUrl">
          <Input id="websiteUrl" name="websiteUrl" type="url" placeholder="https://" />
        </Field>
      </div>

      <Field label="What do you need help with?" htmlFor="message" required>
        <Textarea
          id="message"
          name="message"
          required
          placeholder="Tell us about your goals, current challenges, and timeline."
        />
      </Field>

      <p className="text-xs text-muted-foreground">
        Submit opens WhatsApp to {siteConfig.whatsapp} with your details filled in. Just tap Send
        in WhatsApp to deliver it.
      </p>

      <Button type="submit" size="lg">
        Send on WhatsApp
      </Button>

      {status !== "idle" ? (
        <p
          className={
            status === "success"
              ? "text-sm font-medium text-brand-blue"
              : "text-sm font-medium text-red-600"
          }
          role="status"
          aria-live="polite"
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}

type FieldProps = {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: ReactNode;
};

function Field({ label, htmlFor, required, children }: FieldProps) {
  return (
    <div className="space-y-2">
      <label htmlFor={htmlFor} className="text-sm font-medium text-foreground">
        {label}
        {required ? " *" : ""}
      </label>
      {children}
    </div>
  );
}
