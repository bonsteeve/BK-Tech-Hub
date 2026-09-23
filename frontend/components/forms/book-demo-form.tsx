"use client";

import { useActionState } from "react";
import type { ReactNode } from "react";

import { initialBookDemoState, submitBookDemo } from "@/app/book-a-demo/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function BookDemoForm() {
  const [state, action, pending] = useActionState(submitBookDemo, initialBookDemoState);

  return (
    <form action={action} className="space-y-4" noValidate>
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
        Your details are only used to schedule and prepare your ConversaOS demo.
      </p>

      <Button type="submit" size="lg" disabled={pending}>
        {pending ? "Submitting..." : "Request My Demo"}
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
