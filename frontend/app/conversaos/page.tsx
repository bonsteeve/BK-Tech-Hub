import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Bot, CalendarDays, FileText, UserRound } from "lucide-react";

import { HeroVideo } from "@/components/product/hero-video";
import { WhatsAppPhoneMock } from "@/components/product/whatsapp-phone-mock";
import { JsonLd } from "@/components/seo/json-ld";
import { FadeIn } from "@/components/shared/fade-in";
import { Button } from "@/components/ui/button";
import { conversaosContent } from "@/content/conversaos";
import { homeContent } from "@/content/homepage";
import { buildFaqSchema } from "@/lib/schema";
import { createPageMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const metadata: Metadata = createPageMetadata({
  title: "BK Chat — AI-Powered WhatsApp Automation",
  description: conversaosContent.hero.summary,
  path: "/conversaos",
  keywords: [
    "BK Chat",
    "WhatsApp automation",
    "AI chatbot WhatsApp",
    "quote generation",
    "appointment booking",
  ],
});

const featureIcons = [Bot, UserRound, FileText, CalendarDays] as const;

export default function BKChatPage() {
  return (
    <>
      <JsonLd data={buildFaqSchema(conversaosContent.faq)} />

      {/* Full-bleed video hero with floating phone */}
      <section className="relative -mt-[5.25rem] min-h-[min(92vh,860px)] overflow-hidden bg-navy text-white sm:-mt-[5.75rem]">
        <HeroVideo
          variant="cover"
          src={homeContent.hero.heroVideoSrc}
          poster={homeContent.hero.heroVideoPoster}
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/40"
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-transparent to-navy/50" aria-hidden />

        <div className="container relative grid min-h-[min(92vh,860px)] items-center gap-12 py-20 lg:grid-cols-12 lg:gap-8 lg:py-24">
          <FadeIn className="space-y-6 lg:col-span-6 xl:col-span-5">
            <p className="text-sm font-medium text-brand-yellow">{conversaosContent.hero.subtitle}</p>
            <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-balance sm:text-5xl md:text-6xl">
              {conversaosContent.hero.titleBefore}
              <span className="text-brand-yellow">{conversaosContent.hero.titleHighlight}</span>
            </h1>
            <p className="max-w-xl text-base text-white/80 md:text-lg">
              {conversaosContent.hero.summary}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button asChild size="lg" variant="primary">
                <Link href={conversaosContent.hero.primaryCta.href}>
                  {conversaosContent.hero.primaryCta.label}
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <a
                  href={conversaosContent.hero.secondaryCta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {conversaosContent.hero.secondaryCta.label}
                </a>
              </Button>
            </div>
            <p className="text-lg italic text-brand-yellow">{conversaosContent.hero.microcopy}</p>
          </FadeIn>

          <FadeIn delay={0.12} className="relative lg:col-span-6 xl:col-span-7">
            <div className="pointer-events-none absolute -left-8 top-1/4 hidden h-64 w-64 rounded-full bg-brand-yellow/15 blur-3xl lg:block" aria-hidden />
            <div className="mx-auto max-w-[340px] lg:ml-auto lg:mr-4 xl:mr-12">
              <WhatsAppPhoneMock />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Problem — split with overlapping images */}
      <section className="relative overflow-hidden bg-white py-16 md:py-24">
        <div className="container grid items-center gap-12 lg:grid-cols-12">
          <FadeIn className="lg:col-span-5">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-blue">The problem</p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-navy text-balance md:text-4xl">
              {conversaosContent.problem.title}
            </h2>
            <p className="mt-4 text-muted-foreground md:text-lg">
              {conversaosContent.problem.summary}
            </p>
            <ul className="mt-8 space-y-3">
              {conversaosContent.problem.points.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-3 rounded-full border border-border bg-muted/50 px-4 py-2.5 text-sm text-navy"
                >
                  <span className="h-2 w-2 shrink-0 rounded-full bg-brand-yellow" />
                  {point}
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.1} className="relative lg:col-span-7">
            <div className="relative aspect-[16/11] overflow-hidden rounded-[2rem] shadow-2xl">
              <Image
                src="/images/marketing/conversaos-lifestyle.jpg"
                alt="Managing customer WhatsApp conversations"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 55vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-navy/40 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-8 left-6 hidden w-[46%] overflow-hidden rounded-2xl border-4 border-white shadow-xl sm:block lg:left-10">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/marketing/conversaos-booking.jpg"
                  alt="Booking confirmation on WhatsApp"
                  fill
                  className="object-cover"
                  sizes="320px"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Capabilities — alternating feature rows */}
      <section className="bg-muted/40 py-16 md:py-24">
        <div className="container">
          <FadeIn className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-blue">Capabilities</p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-navy md:text-4xl">
              What BK Chat does for your business
            </h2>
            <p className="mt-4 text-muted-foreground md:text-lg">
              AI WhatsApp automation with the controls your team actually needs.
            </p>
          </FadeIn>

          <div className="mt-16 space-y-20 md:space-y-28">
            {conversaosContent.features.map((feature, index) => {
              const Icon = featureIcons[index];
              const reverse = index % 2 === 1;
              return (
                <FadeIn key={feature.title} delay={0.04}>
                  <div
                    className={cn(
                      "grid items-center gap-10 lg:grid-cols-12",
                      reverse && "lg:[&>*:first-child]:order-2",
                    )}
                  >
                    <div className="lg:col-span-7">
                      <div
                        className={cn(
                          "relative overflow-hidden rounded-[1.75rem] shadow-xl",
                          index % 2 === 0 ? "aspect-[16/10]" : "aspect-[5/4] max-w-xl",
                          reverse && "ml-auto",
                        )}
                      >
                        <Image
                          src={feature.image}
                          alt={feature.imageAlt}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 55vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent" />
                      </div>
                    </div>
                    <div className={cn("lg:col-span-5", reverse ? "lg:pr-4" : "lg:pl-4")}>
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-navy text-brand-yellow">
                        <Icon className="size-5" />
                      </span>
                      <h3 className="mt-5 font-heading text-2xl font-bold text-navy md:text-3xl">
                        {feature.title}
                      </h3>
                      <p className="mt-4 text-muted-foreground md:text-lg">{feature.description}</p>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Journey — navy cinematic band */}
      <section className="relative overflow-hidden bg-navy py-16 text-white md:py-24">
        <div className="pointer-events-none absolute -left-20 top-20 h-72 w-72 rounded-full bg-brand-blue/25 blur-3xl" aria-hidden />
        <div className="pointer-events-none absolute -right-10 bottom-10 h-80 w-80 rounded-full bg-brand-yellow/10 blur-3xl" aria-hidden />
        <div className="container relative">
          <FadeIn className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-yellow">Journey</p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight md:text-4xl">
              Understand. Respond. Close.
            </h2>
            <p className="mt-4 text-white/70 md:text-lg">
              From first message to booked appointment — without the manual chaos.
            </p>
          </FadeIn>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {conversaosContent.journey.map((item, index) => (
              <FadeIn key={item.step} delay={index * 0.08}>
                <article className="group relative h-full overflow-hidden rounded-[1.75rem]">
                  <div className="relative aspect-[4/5]">
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/55 to-navy/10" />
                    <div className="absolute inset-0 flex flex-col justify-end p-6">
                      <span className="font-heading text-5xl font-bold text-brand-yellow/90">
                        {item.step}
                      </span>
                      <h3 className="mt-2 font-heading text-2xl font-bold">{item.title}</h3>
                      <p className="mt-2 text-sm text-white/75">{item.description}</p>
                    </div>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ with visual rail */}
      <section className="bg-white py-16 md:py-24">
        <div className="container grid gap-12 lg:grid-cols-12">
          <FadeIn className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-blue">FAQ</p>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-navy md:text-4xl">
                Questions before you book a demo
              </h2>
              <p className="mt-4 text-muted-foreground md:text-lg">
                Clear answers to help you evaluate BK Chat quickly.
              </p>
              <div className="relative mt-8 hidden aspect-[4/5] overflow-hidden rounded-[1.75rem] shadow-xl lg:block">
                <Image
                  src="/images/marketing/poster-conversaos.jpg"
                  alt="BK Chat product preview"
                  fill
                  className="object-cover"
                  sizes="400px"
                />
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.08} className="space-y-3 lg:col-span-7">
            {conversaosContent.faq.map((item) => (
              <details
                key={item.question}
                className="group rounded-2xl border border-border bg-muted/30 p-5 open:bg-white open:shadow-sm"
              >
                <summary className="cursor-pointer list-none pr-8 font-semibold text-navy marker:hidden">
                  {item.question}
                </summary>
                <p className="pt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {item.answer}
                </p>
              </details>
            ))}
            <div className="pt-6">
              <Button asChild size="lg" variant="navy">
                <Link href="/book-a-demo">
                  Book a Demo <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden pb-24 pt-4">
        <div className="container">
          <div className="relative min-h-[360px] overflow-hidden rounded-[2rem]">
            <Image
              src="/images/marketing/conversaos-booking.jpg"
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-navy/80" />
            <div className="relative z-10 flex min-h-[360px] flex-col items-center justify-center px-8 py-14 text-center text-white md:px-12">
              <h2 className="font-heading text-3xl font-bold tracking-tight text-balance md:text-4xl">
                {conversaosContent.finalCta.title}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-white/75">
                {conversaosContent.finalCta.summary}
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Button asChild size="lg" variant="primary">
                  <Link href={conversaosContent.finalCta.primaryCta.href}>
                    {conversaosContent.finalCta.primaryCta.label}
                  </Link>
                </Button>
                <Button asChild size="lg" variant="secondary">
                  <a
                    href={conversaosContent.finalCta.secondaryCta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {conversaosContent.finalCta.secondaryCta.label}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
