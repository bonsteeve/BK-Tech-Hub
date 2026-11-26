import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  Check,
  Cog,
  Globe,
  Headphones,
  Layers,
  MessageCircle,
  Search,
  Server,
  Settings,
  Target,
  TrendingUp,
} from "lucide-react";

import { FadeIn } from "@/components/shared/fade-in";
import { Section } from "@/components/shared/section";
import { Button } from "@/components/ui/button";
import { homeContent } from "@/content/homepage";
import { createPageMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  ...createPageMetadata({
    title: "Business Automation, Websites & WhatsApp AI | BK Tech Hub",
    description:
      "BK Tech Hub helps businesses in Kenya & the world to grow with business websites, WhatsApp AI automation, web hosting and SEO. Streamline operations, generate leads and serve customers better.",
    path: "/",
    keywords: [
      "BK Tech Hub",
      "Automate the World",
      "BK Chat",
      "WhatsApp automation",
      "process automation",
      "website creation",
      "hosting",
      "SEO",
    ],
  }),
  title: { absolute: "Business Automation, Websites & WhatsApp AI | BK Tech Hub" },
};

const serviceIcons = {
  website: Globe,
  whatsapp: MessageCircle,
  hosting: Server,
  seo: Search,
} as const;

const outcomeIconMap = {
  presence: Globe,
  engagement: MessageCircle,
  operations: Cog,
  visibility: Search,
} as const;

const whyUsIcons = {
  integrated: Layers,
  business: Target,
  practical: Settings,
  growth: TrendingUp,
} as const;

const pillarIcons = {
  "Website Design": Globe,
  "WhatsApp AI": MessageCircle,
  "Web Hosting": Server,
  SEO: Search,
} as const;

export default function HomePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-white text-navy">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_34%_18%,rgba(59,130,246,0.12),transparent_44%)]"
          aria-hidden
        />

        <div className="container relative z-10 grid w-full max-w-none items-center gap-8 py-12 sm:py-16 lg:min-h-[min(748px,calc(100svh-5.75rem))] lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:py-6">
          <FadeIn className="max-w-[32rem] space-y-4 lg:col-start-1 lg:space-y-5">
            <p className="inline-flex rounded-full bg-brand-blue px-4 py-2 text-xs font-bold uppercase tracking-wide text-white sm:text-sm">
              {homeContent.hero.brandLine}
            </p>
            <h1 className="font-heading text-[2.6rem] font-extrabold leading-[1.05] tracking-tight text-balance text-[#080b14] sm:text-5xl lg:text-[3.2rem]">
              {homeContent.hero.titleBefore}
              <span className="text-brand-blue">{homeContent.hero.titleHighlight}</span>
            </h1>
            <div className="h-1 w-[min(25rem,88%)] -rotate-1 rounded-full bg-brand-yellow" aria-hidden />
            <p className="max-w-[30rem] text-base leading-[1.5] text-navy/90 sm:text-lg">
              {homeContent.hero.summary}
            </p>
            <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center">
              <Button
                asChild
                size="lg"
                variant="navy"
                className="bg-brand-blue hover:bg-blue-700"
              >
                <Link href={homeContent.hero.primaryCta.href}>
                  {homeContent.hero.primaryCta.label}
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-brand-blue text-navy">
                <Link href={homeContent.hero.secondaryCta.href}>
                  <Headphones className="size-4 text-brand-blue" />
                  {homeContent.hero.secondaryCta.label}
                </Link>
              </Button>
            </div>
            <nav aria-label="What we offer" className="pt-1">
              <ul className="flex flex-wrap items-center gap-y-2 text-sm text-navy">
                {homeContent.hero.pillars.map((pillar) => {
                  const Icon = pillarIcons[pillar.label];
                  return (
                    <li
                      key={pillar.label}
                      className="inline-flex items-center border-r border-brand-blue/40 px-2.5 first:pl-0 last:border-r-0 sm:px-3"
                    >
                      <Link
                        href={pillar.href}
                        className="inline-flex items-center gap-2 font-medium transition-colors hover:text-brand-blue"
                      >
                        <Icon className="size-5 shrink-0 text-brand-blue" aria-hidden />
                        <span className="max-w-20 leading-tight">{pillar.label}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </FadeIn>

        </div>

        <div className="relative isolate mx-auto mt-8 aspect-video w-full max-w-[42rem] lg:pointer-events-none lg:absolute lg:right-0 lg:top-1/2 lg:mt-0 lg:aspect-[5/4] lg:w-[min(54vw,700px)] lg:max-w-none lg:-translate-y-1/2 xl:w-[min(58vw,1000px)]">
          <div
            className="absolute inset-0 -z-10 hidden rounded-l-[50%] bg-brand-blue lg:block"
            aria-hidden
          />
          <div className="absolute inset-0 overflow-hidden rounded-[1.5rem] lg:inset-y-0 lg:left-3 lg:rounded-l-[50%]">
            <Image
              src="/images/marketing/home-hero.webp"
              alt="Business owner using a laptop, with BK Tech Hub services including WhatsApp AI, website design, hosting and SEO"
              fill
              priority
              sizes="(min-width: 1280px) min(58vw, 1000px), (min-width: 1024px) min(57vw, 740px), (min-width: 672px) 672px, 100vw"
              className="object-cover object-[78%_center] lg:scale-105 xl:scale-100 xl:object-[100%_center]"
            />
          </div>
          <svg
            className="pointer-events-none absolute inset-x-0 bottom-0 z-10 hidden h-16 w-full lg:block"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
            aria-hidden
          >
            <path d="M0 94 C320 92 710 48 1000 10 V100 H0Z" fill="#ffc107" />
            <path d="M0 100 C350 96 720 70 1000 38 V100 H0Z" fill="#0751bd" />
          </svg>
        </div>
      </section>

      <Section id="services" className="bg-muted/40">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-blue">Our Services</p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-navy text-balance md:text-4xl">
            {homeContent.servicesHeading}
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">{homeContent.servicesIntroduction}</p>
        </FadeIn>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {homeContent.services.map((service, index) => {
            const Icon = serviceIcons[service.icon];
            return (
              <FadeIn key={service.href} delay={index * 0.05} className="h-full">
                <Link
                  href={service.href}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <span className="mb-4 inline-flex size-10 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <h3 className="font-heading text-xl font-bold leading-snug text-navy">
                      {service.name}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-blue">
                      Learn more
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
                    </span>
                  </div>
                </Link>
              </FadeIn>
            );
          })}
        </div>
      </Section>

      <section className="relative overflow-hidden bg-white py-16 md:py-24">
        <div className="container">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
            <FadeIn className="relative lg:col-span-7">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] shadow-2xl">
                <Image
                  src="/images/marketing/conversaos-lifestyle.jpg"
                  alt="Business owner managing WhatsApp conversations with BKChat"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-navy/35 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-6 right-4 hidden w-[42%] overflow-hidden rounded-2xl border-4 border-white shadow-xl md:block lg:-right-4">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/images/marketing/conversaos-booking.jpg"
                    alt="WhatsApp booking confirmation on a phone"
                    fill
                    className="object-cover"
                    sizes="280px"
                  />
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.1} className="lg:col-span-5 lg:pl-6">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-blue">
                Featured solution · BKChat
              </p>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-navy text-balance md:text-4xl">
                {homeContent.bkchat.title}
              </h2>
              <p className="mt-4 text-muted-foreground md:text-lg">{homeContent.bkchat.summary}</p>
              <ul className="mt-7 space-y-3">
                {homeContent.bkchat.capabilities.map((capability) => (
                  <li key={capability} className="flex items-start gap-3 text-sm text-navy/85 md:text-base">
                    <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
                      <Check className="size-3.5" aria-hidden />
                    </span>
                    {capability}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="navy" size="lg" className="bg-brand-blue hover:bg-blue-700">
                  <Link href={homeContent.bkchat.primaryCta.href}>
                    {homeContent.bkchat.primaryCta.label}
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-brand-blue text-navy">
                  <Link href={homeContent.bkchat.secondaryCta.href}>
                    {homeContent.bkchat.secondaryCta.label}
                  </Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <Section className="bg-muted/40">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-blue">Business outcomes</p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-navy text-balance md:text-4xl">
            {homeContent.outcomes.title}
          </h2>
        </FadeIn>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {homeContent.outcomes.items.map((item, index) => {
            const Icon = outcomeIconMap[item.icon];
            return (
              <FadeIn key={item.title} delay={index * 0.05}>
                <article className="h-full rounded-2xl border border-navy/10 bg-white p-6 shadow-sm">
                  <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue">
                    <Icon className="size-6" aria-hidden />
                  </span>
                  <h3 className="mt-5 font-heading text-lg font-bold text-navy">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </Section>

      <section className="relative overflow-hidden bg-navy py-16 text-white md:py-24">
        <div className="pointer-events-none absolute -left-24 top-10 size-72 rounded-full bg-brand-blue/20 blur-3xl" aria-hidden />
        <div className="pointer-events-none absolute -right-16 bottom-0 size-80 rounded-full bg-brand-yellow/10 blur-3xl" aria-hidden />
        <div className="container relative">
          <FadeIn className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-yellow">Why BK Tech Hub?</p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-balance md:text-4xl">
              {homeContent.whyUs.title}
            </h2>
            <p className="mt-4 text-white/70 md:text-lg">{homeContent.whyUs.summary}</p>
          </FadeIn>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {homeContent.whyUs.items.map((item, index) => {
              const Icon = whyUsIcons[item.icon];
              return (
                <FadeIn key={item.title} delay={index * 0.05}>
                  <article className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                    <Icon className="size-7 text-brand-yellow" aria-hidden />
                    <h3 className="mt-5 font-heading text-lg font-bold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/70">{item.description}</p>
                  </article>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA with photo depth */}
      <section className="relative overflow-hidden pb-24 pt-4">
        <div className="container">
          <div className="relative overflow-hidden rounded-[2rem] min-h-[340px]">
            <Image
              src="/images/marketing/conversaos-lifestyle.jpg"
              alt=""
              fill
              className="object-cover object-center"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-navy/80" />
            <div className="relative z-10 flex h-full min-h-[340px] flex-col items-center justify-center px-8 py-14 text-center text-white md:px-12">
              <h2 className="font-heading text-3xl font-bold tracking-tight text-balance md:text-4xl">
                {homeContent.finalCta.title}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-white/75">{homeContent.finalCta.summary}</p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Button asChild size="lg" variant="primary">
                  <Link href={homeContent.finalCta.primaryCta.href}>
                    {homeContent.finalCta.primaryCta.label}
                  </Link>
                </Button>
                <Button asChild size="lg" variant="secondary">
                  <Link
                    href={homeContent.finalCta.secondaryCta.href}
                  >
                    {homeContent.finalCta.secondaryCta.label}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
