import Link from "next/link";

import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import type { CaseStudy } from "@/content/case-studies";

type CaseStudyTemplateProps = {
  caseStudy: CaseStudy;
};

export function CaseStudyTemplate({ caseStudy }: CaseStudyTemplateProps) {
  return (
    <>
      <Section className="pt-16 md:pt-20">
        <div className="max-w-4xl space-y-5">
          <p className="inline-flex rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-accent">
            Case Study • {caseStudy.industry}
          </p>
          <h1 className="font-heading text-4xl font-semibold tracking-tight text-balance md:text-5xl">
            {caseStudy.title}
          </h1>
          <p className="text-lg text-muted-foreground">{caseStudy.summary}</p>
        </div>
      </Section>

      <Section className="pt-4">
        <div className="grid gap-6 lg:grid-cols-[1.4fr_0.9fr]">
          <article className="rounded-lg border border-border/70 bg-card/70 p-6">
            <h2 className="font-heading text-2xl font-semibold tracking-tight">Challenge</h2>
            <p className="mt-3 text-sm text-muted-foreground md:text-base">{caseStudy.challenge}</p>

            <h2 className="mt-8 font-heading text-2xl font-semibold tracking-tight">Solution</h2>
            <p className="mt-3 text-sm text-muted-foreground md:text-base">{caseStudy.solution}</p>

            <h2 className="mt-8 font-heading text-2xl font-semibold tracking-tight">Impact</h2>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {caseStudy.impact.map((item) => (
                <li key={item} className="rounded-md border border-border/70 bg-background/60 px-3 py-2">
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <aside className="space-y-5">
            <article className="rounded-lg border border-border/70 bg-card/70 p-6">
              <h2 className="font-heading text-xl font-semibold tracking-tight">Services Used</h2>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {caseStudy.servicesUsed.map((service) => (
                  <li key={service} className="rounded-md border border-border/70 bg-background/60 px-3 py-2">
                    {service}
                  </li>
                ))}
              </ul>
            </article>

            <figure className="rounded-lg border border-border/70 bg-card/70 p-6">
              <blockquote className="text-sm leading-relaxed text-foreground">
                “{caseStudy.testimonial.quote}”
              </blockquote>
              <figcaption className="mt-4 text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">{caseStudy.testimonial.author}</span>
                <span className="block">{caseStudy.testimonial.role}</span>
              </figcaption>
            </figure>

            <Button asChild size="lg" className="w-full">
              <Link href="/book-a-call">Discuss Similar Results</Link>
            </Button>
          </aside>
        </div>
      </Section>

      <Section className="bg-muted/20">
        <SectionHeading
          eyebrow="Next Step"
          title="Want This Level of Digital Performance?"
          description="Book a strategy call and get a practical roadmap based on your current digital funnel and goals."
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
