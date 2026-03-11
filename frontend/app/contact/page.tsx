import type { Metadata } from "next";
import Link from "next/link";

import { ContactForm } from "@/components/forms/contact-form";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = createPageMetadata({
  title: "Contact",
  description:
    "Contact BK Tech Hub to discuss your website redesign, SEO growth plan, or AI automation implementation.",
  path: "/contact",
  keywords: ["contact BK Tech Hub", "website project inquiry", "SEO consultation"],
});

export default function ContactPage() {
  return (
    <>
      <Section className="pt-16 md:pt-20">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.05fr]">
          <div className="space-y-5">
            <p className="inline-flex rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-accent">
              Contact
            </p>
            <h1 className="font-heading text-4xl font-semibold tracking-tight text-balance md:text-5xl">
              Talk to BK Tech Hub About Your Next Growth Move
            </h1>
            <p className="text-lg text-muted-foreground">
              Share your current website challenges, lead goals, and timeline. We will recommend clear next steps.
            </p>

            <div className="space-y-2 text-sm text-muted-foreground">
              <p>
                Email: <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </p>
              <p>
                Phone: <a href={`tel:${siteConfig.phone}`}>{siteConfig.phone}</a>
              </p>
              <p>
                Location: {siteConfig.location.city}, {siteConfig.location.country}
              </p>
            </div>

            <div className="rounded-lg border border-border/70 bg-card/70 p-5 text-sm text-muted-foreground">
              <p className="font-semibold text-foreground">Response commitment</p>
              <p className="mt-2">We typically reply within one business day. Strategic inquiries are prioritized.</p>
            </div>

            <Button asChild variant="secondary" size="lg">
              <Link href="/book-a-call">Prefer to talk live? Book a call</Link>
            </Button>
          </div>

          <div className="rounded-2xl border border-border/70 bg-card/70 p-6 md:p-8">
            <SectionHeading
              eyebrow="Project Inquiry"
              title="Send a Message"
              description="Tell us what you need and we will get back with practical recommendations."
            />
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
