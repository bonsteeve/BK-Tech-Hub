import type { Metadata } from "next";
import Link from "next/link";

import { Section } from "@/components/shared/section";
import { Button } from "@/components/ui/button";
import { caseStudies } from "@/content/case-studies";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Work / Case Studies",
  description:
    "Explore BK Tech Hub case studies and see how strategic websites, SEO, and automation deliver measurable business outcomes.",
  path: "/work",
  keywords: ["case studies", "digital project outcomes", "website redesign results"],
});

export default function WorkPage() {
  return (
    <>
      <Section className="pt-16 md:pt-20">
        <div className="max-w-4xl space-y-5">
          <p className="inline-flex rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-accent">
            Work
          </p>
          <h1 className="font-heading text-4xl font-semibold tracking-tight text-balance md:text-5xl">
            Case Studies with Real Business Outcomes
          </h1>
          <p className="text-lg text-muted-foreground">
            A sample of how BK Tech Hub combines design, technical execution, and growth strategy to improve lead generation and operational performance.
          </p>
        </div>
      </Section>

      <Section className="pt-4">
        <div className="grid gap-5 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <article key={study.slug} className="rounded-lg border border-border/70 bg-card/70 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">{study.industry}</p>
              <h2 className="mt-2 font-heading text-xl font-semibold tracking-tight">{study.title}</h2>
              <p className="mt-3 text-sm text-muted-foreground">{study.summary}</p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {study.impact.slice(0, 2).map((item) => (
                  <li key={item} className="rounded-md border border-border/70 bg-background/60 px-3 py-2">
                    {item}
                  </li>
                ))}
              </ul>
              <Button asChild variant="ghost" className="mt-5 px-0 text-accent hover:text-accent">
                <Link href={`/work/${study.slug}`}>Read full case study</Link>
              </Button>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
