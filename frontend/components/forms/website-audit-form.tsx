"use client";

import { useActionState } from "react";
import type { ReactNode } from "react";

import {
  initialWebsiteAuditState,
  submitWebsiteAudit,
} from "@/app/free-website-audit/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function WebsiteAuditForm() {
  const [state, action, pending] = useActionState(
    submitWebsiteAudit,
    initialWebsiteAuditState,
  );

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

      <Field label="Website URL" htmlFor="websiteUrl" required>
        <Input id="websiteUrl" name="websiteUrl" type="url" placeholder="https://" required />
      </Field>

      <Field label="Business type" htmlFor="businessType">
        <Input id="businessType" name="businessType" placeholder="e.g. Professional Services" />
      </Field>

      <Field label="Biggest website challenge" htmlFor="biggestChallenge">
        <Textarea
          id="biggestChallenge"
          name="biggestChallenge"
          placeholder="Example: low conversion rates, unclear messaging, poor search visibility"
        />
      </Field>

      <p className="text-xs text-muted-foreground">
        You will receive a concise audit report with prioritized recommendations and quick wins.
      </p>

      <Button type="submit" size="lg" disabled={pending}>
        {pending ? "Submitting..." : "Send My Free Audit Request"}
      </Button>

      {state.status !== "idle" ? (
        <p
          className={
            state.status === "success"
              ? "text-sm font-medium text-accent"
              : "text-sm font-medium text-red-300"
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
