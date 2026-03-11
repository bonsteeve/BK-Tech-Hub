"use client";

import { useState } from "react";
import { Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

interface ContactFormProps {
  className?: string;
}

export function ContactForm({ className }: ContactFormProps) {
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
          <Send className="w-8 h-8 text-success" />
        </div>
        <h3 className="font-semibold text-xl mb-2">Message Sent!</h3>
        <p className="text-muted-foreground">
          Thanks for reaching out. We&apos;ll get back to you within 24 hours.
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

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="company" className="block text-sm font-medium mb-2">
              Company
            </label>
            <Input
              id="company"
              name="company"
              placeholder="Your company"
              className="bg-background"
            />
          </div>
          <div>
            <label htmlFor="service" className="block text-sm font-medium mb-2">
              Service Interested In
            </label>
            <select
              id="service"
              name="service"
              className="w-full h-10 rounded-lg border border-input bg-background px-3 py-2 text-sm"
            >
              <option value="">Select a service</option>
              <option value="web-design">Web Design & Development</option>
              <option value="seo">SEO Optimization</option>
              <option value="ai-automation">AI Automation</option>
              <option value="branding">Branding & Digital Presence</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Message *
          </label>
          <Textarea
            id="message"
            name="message"
            required
            placeholder="Tell us about your project..."
            rows={5}
            className="bg-background resize-none"
          />
        </div>

        <div className="flex items-start gap-3 text-sm text-muted-foreground">
          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
          <p>
            We respect your privacy. Your information will never be shared with
            third parties.
          </p>
        </div>

        <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Send Message
              <Send className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
