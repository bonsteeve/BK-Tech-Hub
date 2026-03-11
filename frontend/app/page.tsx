import Link from "next/link";
import type { Metadata } from "next";

import { FadeIn } from "@/components/shared/fade-in";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { homeContent } from "@/content/homepage";

export const metadata: Metadata = {
  title: "Web Design, SEO, and AI Automation for SMEs",
  description:
    "BK Tech Hub helps growing businesses build modern websites, improve SEO visibility, and implement AI-powered automation for better lead generation.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <Section className="relative overflow-hidden pt-20 md:pt-28">
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-ambient-grid opacity-[0.08]"
          style={{ backgroundSize: "44px 44px" }}
          aria-hidden
        />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-hero-radial" aria-hidden />

        <div className="mx-auto max-w-5xl text-center">
          <FadeIn>
            <Badge className="mx-auto mb-5">{homeContent.hero.eyebrow}</Badge>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h1 className="font-heading text-4xl font-semibold leading-tight tracking-tight text-balance sm:text-5xl md:text-6xl">
              {homeContent.hero.title}
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mx-auto mt-6 max-w-3xl text-base text-muted-foreground md:text-xl">
              {homeContent.hero.summary}
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" variant="primary" className="w-full sm:w-auto">
                <Link href={homeContent.hero.primaryCta.href}>{homeContent.hero.primaryCta.label}</Link>
              </Button>
              <Button asChild size="lg" variant="secondary" className="w-full sm:w-auto">
                <Link href={homeContent.hero.secondaryCta.href}>
                  {homeContent.hero.secondaryCta.label}
                </Link>
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground">{homeContent.hero.microcopy}</p>
          </FadeIn>

          <FadeIn delay={0.25}>
            <ul className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-3 text-sm text-muted-foreground sm:grid-cols-3">
              {homeContent.hero.trustItems.map((item) => (
                <li key={item} className="rounded-full border border-border/80 bg-muted/50 px-4 py-2">
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </Section>

      <Section id="services">
        <SectionHeading
          eyebrow="Services"
          title="What We Build to Help You Grow"
          description="Integrated services designed to improve visibility, conversion, and operational efficiency."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {homeContent.services.map((service, index) => (
            <FadeIn key={service.href} delay={index * 0.05}>
              <article className="surface-glow h-full rounded-lg border border-border/70 bg-card/70 p-6">
                <h3 className="font-heading text-2xl font-semibold tracking-tight">{service.name}</h3>
                <p className="mt-3 text-sm text-muted-foreground md:text-base">{service.description}</p>
                <ul className="mt-4 flex flex-wrap gap-2 text-xs text-foreground/90">
                  {service.outcomes.map((outcome) => (
                    <li key={outcome} className="rounded-full border border-border bg-muted/70 px-3 py-1">
                      {outcome}
                    </li>
                  ))}
                </ul>
                <Button asChild variant="ghost" className="mt-6 px-0 text-accent hover:text-accent">
                  <Link href={service.href}>Explore service</Link>
                </Button>
              </article>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section className="bg-muted/20">
        <SectionHeading
          eyebrow="Ideal Clients"
          title="Built for SMEs and Growing Teams That Need Real Results"
          description="We partner with businesses that want a stronger digital presence and a dependable lead engine."
        />
        <div className="mt-8 flex flex-wrap gap-3">
          {homeContent.industries.map((industry) => (
            <span
              key={industry}
              className="rounded-full border border-border/75 bg-background/75 px-4 py-2 text-sm text-muted-foreground"
            >
              {industry}
            </span>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Why BK Tech Hub"
          title="A Premium Agency Experience Anchored in Business Outcomes"
          description="Clarity, speed, and execution quality across strategy, design, development, SEO, and automation."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {homeContent.differentiators.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.05}>
              <article className="rounded-lg border border-border/70 bg-card/55 p-6">
                <h3 className="font-heading text-xl font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground md:text-base">{item.description}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section id="work" className="bg-muted/20">
        <SectionHeading
          eyebrow="Featured Work"
          title="Selected Projects and Outcomes"
          description="Examples of how strategic design and technical implementation convert into growth metrics."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {homeContent.featuredWork.map((project, index) => (
            <FadeIn key={project.slug} delay={index * 0.06}>
              <article className="surface-glow rounded-lg border border-border/70 bg-background/70 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">{project.industry}</p>
                <h3 className="mt-2 font-heading text-xl font-semibold tracking-tight">{project.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{project.summary}</p>
                <Button asChild variant="ghost" className="mt-5 px-0 text-accent hover:text-accent">
                  <Link href={`/work/${project.slug}`}>Read case study</Link>
                </Button>
              </article>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section id="process">
        <SectionHeading
          eyebrow="Process"
          title="How We Deliver with Speed and Precision"
          description="A clear execution system designed to reduce risk and create momentum from week one."
        />
        <ol className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {homeContent.process.map((item, index) => (
            <FadeIn key={item.step} delay={index * 0.05}>
              <li className="rounded-lg border border-border/70 bg-card/70 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.13em] text-accent">Step {item.step}</p>
                <h3 className="mt-2 font-heading text-lg font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
              </li>
            </FadeIn>
          ))}
        </ol>
      </Section>

      <Section className="bg-muted/20">
        <SectionHeading
          eyebrow="Proof"
          title="What Clients Say"
          description="Trusted by growth-focused businesses that value execution quality and measurable outcomes."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {homeContent.testimonials.map((testimonial, index) => (
            <FadeIn key={testimonial.author} delay={index * 0.05}>
              <figure className="rounded-lg border border-border/70 bg-background/70 p-6">
                <blockquote className="text-sm leading-relaxed text-foreground md:text-base">
                  “{testimonial.quote}”
                </blockquote>
                <figcaption className="mt-4 text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">{testimonial.author}</span>
                  <span className="block">{testimonial.role}</span>
                </figcaption>
              </figure>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section id="faq">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions We Hear Before Engagement"
          description="Clear answers to help you evaluate fit quickly."
        />
        <div className="mt-10 space-y-3">
          {homeContent.faq.map((item) => (
            <details key={item.question} className="group rounded-lg border border-border/75 bg-card/70 p-5">
              <summary className="cursor-pointer list-none pr-8 font-medium text-foreground marker:hidden">
                {item.question}
              </summary>
              <p className="pt-3 text-sm text-muted-foreground">{item.answer}</p>
            </details>
          ))}
        </div>
      </Section>

      <Section className="pb-24">
        <div className="surface-glow rounded-3xl border border-border/70 bg-card/80 p-8 text-center md:p-12">
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-balance md:text-4xl">
            {homeContent.finalCta.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">{homeContent.finalCta.summary}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" variant="primary" className="w-full sm:w-auto">
              <Link href={homeContent.finalCta.primaryCta.href}>{homeContent.finalCta.primaryCta.label}</Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="w-full sm:w-auto">
              <Link href={homeContent.finalCta.secondaryCta.href}>
                {homeContent.finalCta.secondaryCta.label}
              </Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
