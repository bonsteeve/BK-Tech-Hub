import type { Metadata } from "next";
import Link from "next/link";

import { BookCallForm } from "@/components/forms/book-call-form";
import { Section } from "@/components/shared/section";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Book a Call",
  description:
    "Book a strategy call with BK Tech Hub to discuss your website, SEO, and AI automation priorities.",
  alternates: { canonical: "/book-a-call" },
};

export default function BookCallPage() {
  return (
    <Section className="pt-16 md:pt-20">
      <div className="grid gap-8 lg:grid-cols-[1fr_1.05fr]">
        <div className="space-y-5">
          <p className="inline-flex rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-accent">
            Book a Strategy Call
          </p>
          <h1 className="font-heading text-4xl font-semibold tracking-tight text-balance md:text-5xl">
            Get a Focused Growth Plan for Your Website and Digital Funnel
          </h1>
          <p className="text-lg text-muted-foreground">
            In this session, we review your current setup, identify bottlenecks, and outline the highest-impact next steps.
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="rounded-md border border-border/70 bg-card/70 px-3 py-2">30-minute strategy-focused call</li>
            <li className="rounded-md border border-border/70 bg-card/70 px-3 py-2">Practical recommendations you can execute immediately</li>
            <li className="rounded-md border border-border/70 bg-card/70 px-3 py-2">No-pressure format, tailored to your goals and timeline</li>
          </ul>
          <Button asChild variant="secondary" size="lg">
            <Link href="/services">Review Services First</Link>
          </Button>
        </div>

        <div className="rounded-2xl border border-border/70 bg-card/70 p-6 md:p-8">
          <h2 className="font-heading text-2xl font-semibold tracking-tight">Request a Call Slot</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            We respond within one business day with the next available slots.
          </p>
          <div className="mt-6">
            <BookCallForm />
          </div>
        </div>
      </div>
    </Section>
  );
}
