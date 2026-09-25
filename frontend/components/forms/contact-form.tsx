"use client";

import { useActionState } from "react";
import type { ReactNode } from "react";

import { submitContactForm, type ContactFormState } from "@/app/contact/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const initialState: ContactFormState = { status: "idle", message: "" };

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContactForm, initialState);

  return (
    <form action={formAction} className="space-y-4" noValidate>
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
        By submitting this form, you agree to be contacted by BK Tech Hub about your request. No spam.
      </p>

      <Button type="submit" size="lg" disabled={pending}>
        {pending ? "Sending..." : "Send Message"}
      </Button>

      {state.status !== "idle" ? (
        <p
          className={
            state.status === "success"
              ? "text-sm font-medium text-brand-blue"
              : "text-sm font-medium text-red-600"
          }
          role="status"
          aria-live="polite"
        >
          {state.message}
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
