"use client";

import { useActionState } from "react";
import type { ReactNode } from "react";

import { initialBookCallState, submitBookCall } from "@/app/book-a-call/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function BookCallForm() {
  const [state, action, pending] = useActionState(submitBookCall, initialBookCallState);

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
        <Field label="Current website" htmlFor="websiteUrl">
          <Input id="websiteUrl" name="websiteUrl" type="url" placeholder="https://" />
        </Field>
      </div>

      <Field label="Budget range (optional)" htmlFor="budgetRange">
        <Input id="budgetRange" name="budgetRange" placeholder="e.g. $2,000 - $6,000" />
      </Field>

      <Field label="Main goal for this project" htmlFor="projectGoal" required>
        <Textarea
          id="projectGoal"
          name="projectGoal"
          required
          placeholder="Example: Increase qualified leads from our website and reduce manual follow-up work."
        />
      </Field>

      <p className="text-xs text-muted-foreground">
        Your details are only used to schedule and prepare your strategy call.
      </p>

      <Button type="submit" size="lg" disabled={pending}>
        {pending ? "Submitting..." : "Request My Strategy Call"}
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
