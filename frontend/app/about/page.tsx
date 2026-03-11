import type { Metadata } from "next";
import Link from "next/link";

import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { aboutContent } from "@/content/about";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "About",
  description:
    "Learn how BK Tech Hub combines product strategy, premium design, frontend engineering, SEO, and automation to help businesses grow.",
  path: "/about",
  keywords: ["about BK Tech Hub", "digital agency", "web strategy team"],
});

export default function AboutPage() {
  return (
    <>
      <Section className="pt-16 md:pt-20">
        <div className="max-w-4xl space-y-5">
          <p className="inline-flex rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-accent">
            About BK Tech Hub
          </p>
          <h1 className="font-heading text-4xl font-semibold tracking-tight text-balance md:text-5xl">
            {aboutContent.hero.title}
          </h1>
          <p className="text-lg text-muted-foreground">{aboutContent.hero.summary}</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/book-a-call">Book a Strategy Call</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </Section>

      <Section className="bg-muted/20">
        <SectionHeading
          eyebrow="Principles"
          title="How We Work"
          description="The standards that guide every project we deliver."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {aboutContent.principles.map((principle) => (
            <article key={principle.title} className="rounded-lg border border-border/70 bg-card/70 p-6">
              <h2 className="font-heading text-xl font-semibold tracking-tight">{principle.title}</h2>
              <p className="mt-3 text-sm text-muted-foreground">{principle.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Approach"
          title="Our Delivery Framework"
          description="A practical model that keeps projects focused, transparent, and outcome-driven."
        />
        <ol className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {aboutContent.approach.map((item, index) => (
            <li key={item.title} className="rounded-lg border border-border/70 bg-card/70 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">Phase {index + 1}</p>
              <h3 className="mt-2 font-heading text-lg font-semibold tracking-tight">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.detail}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section className="bg-muted/20">
        <SectionHeading
          eyebrow="Trust"
          title="Why Clients Choose BK Tech Hub"
          description="High standards, technical depth, and strong strategic partnership."
        />
        <ul className="mt-10 grid gap-4 md:grid-cols-2">
          {aboutContent.trustPoints.map((point) => (
            <li key={point} className="rounded-lg border border-border/70 bg-background/70 p-5 text-sm text-muted-foreground">
              {point}
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <div className="rounded-3xl border border-border/70 bg-card/80 p-8 text-center md:p-12">
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-balance md:text-4xl">
            Let’s Build the Next Stage of Your Digital Growth
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Share your goals, current challenges, and timeline. We will recommend the highest-impact next moves.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/book-a-call">Book a Call</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
