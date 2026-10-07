"use client";

import { useState, type FormEvent, type ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/lib/site-config";
import { getWhatsAppUrl } from "@/lib/whatsapp";

type Status = "idle" | "success" | "error";

export function BookDemoForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const businessName = String(data.get("businessName") ?? "").trim();
    const whatsappNumber = String(data.get("whatsappNumber") ?? "").trim();
    const useCase = String(data.get("useCase") ?? "").trim();

    if (!name || !email || !businessName || !useCase) {
      setStatus("error");
      setMessage("Please complete all required fields.");
      return;
    }

    const lines = [
      "Hello BK Tech Hub — I'd like to book a BK Chat demo:",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Business: ${businessName}`,
      whatsappNumber ? `WhatsApp: ${whatsappNumber}` : null,
      "",
      "What I'd like to automate:",
      useCase,
    ].filter((line): line is string => line !== null);

    window.open(getWhatsAppUrl(lines.join("\n")), "_blank", "noopener,noreferrer");
    setStatus("success");
    setMessage("WhatsApp is opening with your demo request. Tap Send to deliver it.");
    form.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full name" htmlFor="name" required>
          <Input id="name" name="name" autoComplete="name" required />
        </Field>
        <Field label="Business email" htmlFor="email" required>
          <Input id="email" name="email" type="email" autoComplete="email" required />
        </Field>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Business name" htmlFor="businessName" required>
          <Input id="businessName" name="businessName" autoComplete="organization" required />
        </Field>
        <Field label="WhatsApp number (optional)" htmlFor="whatsappNumber">
          <Input id="whatsappNumber" name="whatsappNumber" placeholder="+254..." />
        </Field>
      </div>

      <Field label="What do you want to automate?" htmlFor="useCase" required>
        <Textarea
          id="useCase"
          name="useCase"
          required
          placeholder="Example: Reply to WhatsApp leads, send quotes, and book consultations automatically."
        />
      </Field>

      <p className="text-xs text-muted-foreground">
        Submit opens WhatsApp to {siteConfig.whatsapp} with your demo request filled in. Tap Send
        in WhatsApp to deliver it.
      </p>

      <Button type="submit" size="lg">
        Request Demo
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
