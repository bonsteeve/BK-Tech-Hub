import type { Metadata } from "next";
import Link from "next/link";

import { BookDemoForm } from "@/components/forms/book-demo-form";
import { FadeIn } from "@/components/shared/fade-in";
import { Section } from "@/components/shared/section";
import { Button } from "@/components/ui/button";
import { createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = createPageMetadata({
  title: "Book a ConversaOS Demo",
  description:
    "Book a live demo of ConversaOS — AI-powered WhatsApp automation for replies, quotes, bookings, and reminders.",
  path: "/book-a-demo",
  keywords: ["ConversaOS demo", "WhatsApp automation demo", "Book a demo"],
});

export default function BookADemoPage() {
  return (
    <Section className="pt-16 md:pt-20">
      <div className="grid items-start gap-10 lg:grid-cols-2">
        <FadeIn className="space-y-6">
          <p className="inline-flex rounded-full border border-brand-yellow/50 bg-brand-yellow/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-navy">
            Book a Demo
          </p>
          <h1 className="font-heading text-4xl font-bold tracking-tight text-navy md:text-5xl">
            See ConversaOS on your WhatsApp workflows
          </h1>
          <p className="text-muted-foreground md:text-lg">
            In about 30 minutes we&apos;ll walk through AI replies, human takeover, quote generation,
            calendar booking, and reminders — mapped to your business.
          </p>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li>• Live product walkthrough tailored to your use cases</li>
            <li>• Practical next steps — no pressure</li>
            <li>• We typically confirm a slot within one business day</li>
          </ul>
          <p className="text-sm text-muted-foreground">
            Already have an account?{" "}
            <a href={siteConfig.signInUrl} className="font-semibold text-brand-blue hover:underline">
              Sign in
            </a>
          </p>
          <Button asChild variant="outline">
            <Link href="/conversaos">Back to ConversaOS</Link>
          </Button>
        </FadeIn>

        <FadeIn delay={0.08} className="rounded-3xl border border-border bg-card p-6 md:p-8">
          <h2 className="font-heading text-xl font-semibold text-navy">Request a demo slot</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Tell us about your business and we&apos;ll follow up with times.
          </p>
          <div className="mt-6">
            <BookDemoForm />
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
