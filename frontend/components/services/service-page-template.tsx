import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { FadeIn } from "@/components/shared/fade-in";
import { Button } from "@/components/ui/button";
import type { Service } from "@/content/services";
import { cn } from "@/lib/utils";

type ServicePageTemplateProps = {
  service: Service;
};

export function ServicePageTemplate({ service }: ServicePageTemplateProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[min(72vh,680px)] overflow-hidden bg-navy text-white">
        <Image
          src={service.image}
          alt=""
          fill
          priority
          className="object-cover opacity-45"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/88 to-navy/50" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-transparent to-navy/35" aria-hidden />

        <div className="container relative flex min-h-[min(72vh,680px)] items-end pb-16 pt-28 md:items-center md:py-24">
          <FadeIn className="max-w-3xl space-y-5">
            <p className="text-sm font-medium text-brand-yellow">{service.accent}</p>
            <h1 className="font-heading text-4xl font-bold tracking-tight text-balance sm:text-5xl md:text-6xl">
              {service.name}
            </h1>
            <p className="max-w-2xl text-lg text-white/80">{service.summary}</p>
            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <Button asChild size="lg" variant="primary">
                <Link href="/book-a-demo">
                  Book a Demo <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Overview + image */}
      <section className="bg-white py-16 md:py-24">
        <div className="container grid items-center gap-12 lg:grid-cols-12">
          <FadeIn className="lg:col-span-5">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-blue">Overview</p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-navy md:text-4xl">
              Built for measurable growth
            </h2>
            <p className="mt-4 text-muted-foreground md:text-lg">{service.description}</p>
            <Button asChild variant="outline" className="mt-8">
              <Link href="/services">
                All services <ArrowRight className="size-4" />
              </Link>
            </Button>
          </FadeIn>
          <FadeIn delay={0.1} className="relative lg:col-span-7">
            <div className="relative aspect-[16/11] overflow-hidden rounded-[2rem] shadow-2xl">
              <Image
                src={service.image}
                alt={service.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-navy/25 to-transparent" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Ideal / outcomes / deliverables */}
      <section className="bg-muted/40 py-16 md:py-20">
        <div className="container grid gap-5 lg:grid-cols-3">
          <FadeIn>
            <InfoPanel title="Ideal for" items={service.idealFor} />
          </FadeIn>
          <FadeIn delay={0.06}>
            <InfoPanel title="Expected outcomes" items={service.outcomes} tone="yellow" />
          </FadeIn>
          <FadeIn delay={0.12}>
            <InfoPanel title="What you get" items={service.deliverables} />
          </FadeIn>
        </div>
      </section>

      {/* Process */}
      <section className="relative overflow-hidden bg-navy py-16 text-white md:py-24">
        <div className="pointer-events-none absolute -left-16 top-10 h-64 w-64 rounded-full bg-brand-blue/20 blur-3xl" aria-hidden />
        <div className="container relative">
          <FadeIn className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-yellow">Process</p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight md:text-4xl">
              How we deliver
            </h2>
            <p className="mt-4 text-white/70 md:text-lg">
              A focused engagement model from strategy to measurable results.
            </p>
          </FadeIn>

          <ol className="mt-12 grid gap-5 md:grid-cols-2">
            {service.process.map((step, index) => (
              <FadeIn
                key={step}
                as="li"
                delay={index * 0.05}
                className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                <p className="font-heading text-4xl font-bold text-brand-yellow/90">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-3 text-base text-white/85 md:text-lg">{step}</p>
              </FadeIn>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 md:py-24">
        <div className="container grid gap-12 lg:grid-cols-12">
          <FadeIn className="lg:col-span-4">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-blue">FAQ</p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-navy">
              Common questions
            </h2>
            <p className="mt-4 text-muted-foreground">
              Answers to help you evaluate fit quickly.
            </p>
          </FadeIn>
          <FadeIn delay={0.06} className="space-y-3 lg:col-span-8">
            {service.faq.map((item) => (
              <details
                key={item.question}
                className="rounded-2xl border border-border bg-muted/30 p-5 open:bg-white open:shadow-sm"
              >
                <summary className="cursor-pointer list-none pr-8 font-semibold text-navy marker:hidden">
                  {item.question}
                </summary>
                <p className="pt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {item.answer}
                </p>
              </details>
            ))}
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24 pt-4">
        <div className="container">
          <div className="relative min-h-[320px] overflow-hidden rounded-[2rem]">
            <Image
              src={service.image}
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-navy/80" />
            <div className="relative z-10 flex min-h-[320px] flex-col items-center justify-center px-8 py-14 text-center text-white">
              <h2 className="font-heading text-3xl font-bold tracking-tight text-balance md:text-4xl">
                Ready to move forward with {service.name.toLowerCase()}?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-white/75">
                Share your goals and we’ll recommend the highest-impact next steps.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" variant="primary">
                  <Link href="/book-a-demo">Book a Demo</Link>
                </Button>
                <Button asChild size="lg" variant="secondary">
                  <Link href="/contact">Contact BK Tech Hub</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

type InfoPanelProps = {
  title: string;
  items: string[];
  tone?: "default" | "yellow";
};

function InfoPanel({ title, items, tone = "default" }: InfoPanelProps) {
  return (
    <article
      className={cn(
        "h-full rounded-[1.75rem] border border-border bg-white p-6 shadow-sm md:p-7",
        tone === "yellow" && "border-brand-yellow/40 bg-brand-yellow/10",
      )}
    >
      <h2 className="font-heading text-xl font-bold tracking-tight text-navy">{title}</h2>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm text-muted-foreground md:text-base">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-blue" />
            <span className="text-navy/80">{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
