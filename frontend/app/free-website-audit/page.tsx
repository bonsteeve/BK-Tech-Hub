import type { Metadata } from "next";
import Link from "next/link";

import { WebsiteAuditForm } from "@/components/forms/website-audit-form";
import { FadeIn } from "@/components/shared/fade-in";
import { Section } from "@/components/shared/section";
import { Button } from "@/components/ui/button";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Free Website Audit",
  description:
    "Request a free website audit from BK Tech Hub and get prioritized recommendations for conversion, SEO, and performance.",
  path: "/free-website-audit",
  keywords: ["free website audit", "SEO audit", "conversion audit"],
});

export default function FreeWebsiteAuditPage() {
  return (
    <Section className="pt-16 md:pt-20">
      <div className="grid gap-8 lg:grid-cols-[1fr_1.05fr]">
        <FadeIn className="space-y-5">
          <p className="inline-flex rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-accent">
            Free Website Audit
          </p>
          <h1 className="font-heading text-4xl font-semibold tracking-tight text-balance md:text-5xl">
            See What Is Holding Your Website Back from Converting
          </h1>
          <p className="text-lg text-muted-foreground">
            We review your website and send a concise audit with quick wins and strategic opportunities.
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="interactive-chip rounded-md border border-border/70 bg-card/70 px-3 py-2">Conversion and messaging clarity review</li>
            <li className="interactive-chip rounded-md border border-border/70 bg-card/70 px-3 py-2">Technical SEO and page structure checks</li>
            <li className="interactive-chip rounded-md border border-border/70 bg-card/70 px-3 py-2">Performance and user-flow recommendations</li>
          </ul>
          <Button asChild variant="secondary" size="lg">
            <Link href="/book-a-demo">Need faster help? Book a call</Link>
          </Button>
        </FadeIn>

        <FadeIn delay={0.08} className="interactive-card rounded-2xl border border-border/70 bg-card/70 p-6 md:p-8">
          <h2 className="font-heading text-2xl font-semibold tracking-tight">Request Your Free Audit</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Your report is delivered within two business days.
          </p>
          <div className="mt-6">
            <WebsiteAuditForm />
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
