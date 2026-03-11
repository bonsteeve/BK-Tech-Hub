import Link from "next/link";

import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import type { Service } from "@/content/services";

type ServicePageTemplateProps = {
  service: Service;
};

export function ServicePageTemplate({ service }: ServicePageTemplateProps) {
  return (
    <>
      <Section className="pt-16 md:pt-20">
        <div className="max-w-4xl space-y-6">
          <p className="inline-flex rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-accent">
            Service
          </p>
          <h1 className="font-heading text-4xl font-semibold tracking-tight text-balance md:text-5xl">
            {service.name}
          </h1>
          <p className="text-lg text-muted-foreground">{service.summary}</p>
          <p className="text-base text-muted-foreground">{service.description}</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/book-a-call">Book a Strategy Call</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/free-website-audit">Get a Free Website Audit</Link>
            </Button>
          </div>
        </div>
      </Section>

      <Section className="bg-muted/20">
        <div className="grid gap-5 lg:grid-cols-3">
          <InfoList title="Ideal For" items={service.idealFor} />
          <InfoList title="Expected Outcomes" items={service.outcomes} />
          <InfoList title="What You Get" items={service.deliverables} />
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Process"
          title="How We Deliver This Service"
          description="A focused engagement model to move from strategy to measurable results."
        />
        <ol className="mt-10 grid gap-4 md:grid-cols-2">
          {service.process.map((step, index) => (
            <li key={step} className="rounded-lg border border-border/70 bg-card/70 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">Step {index + 1}</p>
              <p className="mt-2 text-sm text-muted-foreground">{step}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section className="bg-muted/20">
        <SectionHeading
          eyebrow="FAQ"
          title="Common Questions"
          description="Answers to help you evaluate service fit quickly."
        />
        <div className="mt-10 space-y-3">
          {service.faq.map((item) => (
            <details key={item.question} className="rounded-lg border border-border/75 bg-card/70 p-5">
              <summary className="cursor-pointer list-none font-medium text-foreground">{item.question}</summary>
              <p className="pt-3 text-sm text-muted-foreground">{item.answer}</p>
            </details>
          ))}
        </div>
      </Section>

      <Section>
        <div className="rounded-3xl border border-border/70 bg-card/80 p-8 text-center md:p-12">
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-balance md:text-4xl">
            Need a plan tailored to your business goals?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Share your current challenges and we will recommend the highest-impact next steps.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/book-a-call">Book a Call</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Contact BK Tech Hub</Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}

type InfoListProps = {
  title: string;
  items: string[];
};

function InfoList({ title, items }: InfoListProps) {
  return (
    <article className="rounded-lg border border-border/70 bg-card/70 p-5">
      <h2 className="font-heading text-xl font-semibold tracking-tight">{title}</h2>
      <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
        {items.map((item) => (
          <li key={item} className="rounded-md border border-border/70 bg-background/60 px-3 py-2">
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
