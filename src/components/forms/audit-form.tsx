"use client";

import { useState } from "react";
import { CheckCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

interface AuditFormProps {
  className?: string;
}

export function AuditForm({ className }: AuditFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div
        className={cn(
          "rounded-2xl border border-border bg-card/50 p-8 text-center",
          className
        )}
      >
        <div className="w-16 h-16 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-success" />
        </div>
        <h3 className="font-semibold text-xl mb-2">Request Received!</h3>
        <p className="text-muted-foreground">
          We&apos;ll analyze your website and send your free audit within 48 hours.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "rounded-2xl border border-border bg-card/50 p-6 md:p-8",
        className
      )}
    >
      <div className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name *
            </label>
            <Input
              id="name"
              name="name"
              required
              placeholder="Your name"
              className="bg-background"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email *
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@company.com"
              className="bg-background"
            />
          </div>
        </div>

        <div>
          <label htmlFor="website" className="block text-sm font-medium mb-2">
            Website URL *
          </label>
          <Input
            id="website"
            name="website"
            type="url"
            required
            placeholder="https://yourwebsite.com"
            className="bg-background"
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium mb-2">
            Company Name
          </label>
          <Input
            id="company"
            name="company"
            placeholder="Your company"
            className="bg-background"
          />
        </div>

        <div>
          <label htmlFor="goals" className="block text-sm font-medium mb-2">
            What are your main goals? (Optional)
          </label>
          <Textarea
            id="goals"
            name="goals"
            placeholder="e.g., More traffic, better conversions, improved design..."
            rows={3}
            className="bg-background resize-none"
          />
        </div>

        <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
          <h4 className="font-medium mb-2">What you&apos;ll get:</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              Performance & speed analysis
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              SEO health check
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              Mobile responsiveness review
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              Conversion opportunity assessment
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              Actionable recommendations
            </li>
          </ul>
        </div>

        <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Submitting...
            </>
          ) : (
            "Get My Free Audit"
          )}
        </Button>

        <p className="text-xs text-center text-muted-foreground">
          100% free. No credit card required. No obligations.
        </p>
      </div>
    </form>
  );
}
