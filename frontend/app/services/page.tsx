import type { Metadata } from "next";
import Link from "next/link";

import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { services } from "@/content/services";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Services",
  description:
    "Explore BK Tech Hub services: web design and development, SEO optimization, AI automation for SMEs, and branding support.",
  path: "/services",
  keywords: ["digital services", "web design service", "SEO optimization", "AI automation"],
});

export default function ServicesPage() {
  return (
    <>
      <Section className="pt-16 md:pt-20">
        <div className="max-w-4xl">
          <p className="inline-flex rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-accent">
            Services
          </p>
          <h1 className="mt-4 font-heading text-4xl font-semibold tracking-tight text-balance md:text-5xl">
            Strategy-Led Services for Digital Growth
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            BK Tech Hub helps businesses increase visibility, improve conversion, and streamline operations with modern digital systems.
          </p>
        </div>
      </Section>

      <Section className="pt-4">
        <div className="grid gap-5 md:grid-cols-2">
          {services.map((service) => (
            <article key={service.slug} className="rounded-lg border border-border/70 bg-card/70 p-6">
              <h2 className="font-heading text-2xl font-semibold tracking-tight">{service.name}</h2>
              <p className="mt-3 text-sm text-muted-foreground md:text-base">{service.summary}</p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {service.outcomes.slice(0, 3).map((outcome) => (
                  <li key={outcome} className="rounded-md border border-border/60 bg-background/60 px-3 py-2">
                    {outcome}
                  </li>
                ))}
              </ul>
              <Button asChild variant="ghost" className="mt-5 px-0 text-accent hover:text-accent">
                <Link href={`/services/${service.slug}`}>View service details</Link>
              </Button>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-muted/20">
        <SectionHeading
          eyebrow="Engagement"
          title="Not Sure Which Service Fits Best?"
          description="Book a strategy call and get a practical recommendation based on your goals, current website, and growth stage."
          align="center"
        />
        <div className="mt-8 flex justify-center">
          <Button asChild size="lg">
            <Link href="/book-a-call">Book a Strategy Call</Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
