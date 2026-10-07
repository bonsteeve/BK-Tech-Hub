import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Bot, CalendarDays, FileText, Globe, Search, Server } from "lucide-react";

import { HeroVisual } from "@/components/product/hero-visual";
import { FadeIn } from "@/components/shared/fade-in";
import { Section } from "@/components/shared/section";
import { Button } from "@/components/ui/button";
import { homeContent } from "@/content/homepage";
import { createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  ...createPageMetadata({
    title: siteConfig.name,
    description: siteConfig.description,
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
  title: { absolute: siteConfig.name },
};

const featureIcons = {
  bot: Bot,
  calendar: CalendarDays,
  quote: FileText,
} as const;

const featureImages = [
  "/images/marketing/conversaos-lifestyle.jpg",
  "/images/marketing/conversaos-booking.jpg",
  "/images/marketing/poster-conversaos.jpg",
] as const;

const serviceIcons = {
  globe: Globe,
  server: Server,
  search: Search,
} as const;

const serviceVisuals = [
  "/images/marketing/service-websites.jpg",
  "/images/marketing/service-hosting-seo.jpg",
  "/images/site/service-seo.svg",
] as const;

export default function HomePage() {
  const isVideoHero = homeContent.hero.visual === "video";

  return (
    <>
      <section
        className={cn(
          "relative -mt-[5.25rem] overflow-hidden bg-navy text-white sm:-mt-[5.75rem]",
        )}
      >
        <div className="pointer-events-none absolute inset-0 bg-hero-radial opacity-90" aria-hidden />

        <div
          className={cn(
            "container relative grid items-center gap-12 py-16 md:py-24 lg:grid-cols-2",
            isVideoHero && "lg:min-h-[min(92vh,820px)]",
          )}
        >
          <FadeIn className={cn("space-y-6", isVideoHero && "max-w-2xl")}>
            <p className="font-heading text-sm font-extrabold uppercase tracking-[0.28em] text-brand-yellow sm:text-base">
              {homeContent.hero.brandLine}
            </p>
            <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-balance sm:text-5xl md:text-6xl">
              {homeContent.hero.titleBefore}
              <span className="text-brand-yellow">{homeContent.hero.titleHighlight}</span>
            </h1>
            <p className="max-w-xl text-base text-white/80 md:text-lg">{homeContent.hero.summary}</p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button asChild size="lg" variant="primary">
                <Link href={homeContent.hero.primaryCta.href}>
                  {homeContent.hero.primaryCta.label}
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <a
                  href={homeContent.hero.secondaryCta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {homeContent.hero.secondaryCta.label}
                </a>
              </Button>
            </div>
            <nav aria-label="What we offer" className="pt-1">
              <ul className="flex flex-wrap items-center gap-x-1 gap-y-2 text-sm text-white/55">
                {homeContent.hero.pillars.map((pillar, index) => (
                  <li key={pillar.label} className="inline-flex items-center gap-x-1">
                    {index > 0 ? <span className="mx-1 text-white/25" aria-hidden>·</span> : null}
                    <Link
                      href={pillar.href}
                      className="font-medium text-white/70 underline-offset-4 transition-colors hover:text-brand-yellow hover:underline"
                    >
                      {pillar.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </FadeIn>

          <HeroVisual
            mode={isVideoHero ? "video" : "phone"}
            videoSrc={homeContent.hero.heroVideoSrc}
            videoPoster={homeContent.hero.heroVideoPoster}
          />
        </div>
      </section>

      {/* Asymmetric product proof band */}
      <section className="relative overflow-hidden bg-white py-16 md:py-24">
        <div className="container">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
            <FadeIn className="relative lg:col-span-7">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] shadow-2xl">
                <Image
                  src="/images/marketing/conversaos-lifestyle.jpg"
                  alt="Business owner managing WhatsApp conversations with BK Chat"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  priority
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
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-blue">BK Chat</p>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-navy text-balance md:text-4xl">
                Built for WhatsApp sales conversations
              </h2>
              <p className="mt-4 text-muted-foreground md:text-lg">
                Reply faster, qualify leads, send quotes, and book meetings — without drowning in the inbox.
              </p>
              <ul className="mt-8 space-y-5">
                {homeContent.features.map((feature) => {
                  const Icon = featureIcons[feature.icon];
                  return (
                    <li key={feature.title} className="flex gap-4">
                      <span className="mt-0.5 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy text-brand-yellow">
                        <Icon className="size-5" />
                      </span>
                      <div>
                        <h3 className="font-heading text-lg font-semibold text-navy">{feature.title}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
              <Button asChild variant="navy" size="lg" className="mt-8">
                <Link href="/conversaos">
                  Explore BK Chat <ArrowRight className="size-4" />
                </Link>
              </Button>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Journey with staggered imagery */}
      <section className="relative overflow-hidden bg-navy py-16 text-white md:py-24">
        <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-brand-blue/20 blur-3xl" aria-hidden />
        <div className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-brand-yellow/10 blur-3xl" aria-hidden />
        <div className="container relative">
          <FadeIn className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-yellow">How it works</p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight md:text-4xl">
              Understand. Respond. Close.
            </h2>
            <p className="mt-4 text-white/70 md:text-lg">
              A simple journey that turns WhatsApp chats into booked revenue.
            </p>
          </FadeIn>

          <div className="mt-14 space-y-16 md:space-y-24">
            {homeContent.journey.map((item, index) => {
              const image = featureImages[index % featureImages.length];
              const reverse = index % 2 === 1;
              return (
                <FadeIn key={item.step} delay={index * 0.06}>
                  <div
                    className={cn(
                      "grid items-center gap-8 lg:grid-cols-12",
                      reverse && "lg:[&>*:first-child]:order-2",
                    )}
                  >
                    <div className={cn("lg:col-span-7", reverse && "lg:pl-8", !reverse && "lg:pr-8")}>
                      <div
                        className={cn(
                          "relative overflow-hidden rounded-[1.75rem] shadow-2xl",
                          index === 1 ? "aspect-[5/4] max-w-xl" : "aspect-[16/10]",
                          reverse && "ml-auto",
                        )}
                      >
                        <Image
                          src={image}
                          alt=""
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 55vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />
                        <span className="absolute bottom-5 left-5 font-heading text-5xl font-bold text-brand-yellow/90 md:text-6xl">
                          {item.step}
                        </span>
                      </div>
                    </div>
                    <div className="lg:col-span-5">
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-blue">
                        Step {item.step}
                      </p>
                      <h3 className="mt-3 font-heading text-3xl font-bold text-white">{item.title}</h3>
                      <p className="mt-4 text-lg text-white/70">{item.description}</p>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services mosaic */}
      <Section>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-blue">
              Automate the World
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-navy md:text-4xl">
              Websites, hosting & SEO alongside BK Chat
            </h2>
            <p className="mt-4 text-muted-foreground md:text-lg">
              Your full digital stack — so WhatsApp AI and your web presence work together.
            </p>
          </div>
          <Button asChild variant="outline" className="w-fit">
            <Link href="/services">
              View all services <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-12 md:grid-rows-2">
          {homeContent.services.map((service, index) => {
            const Icon = serviceIcons[service.icon];
            const isFeatured = index === 0;
            return (
              <FadeIn
                key={service.href}
                delay={index * 0.05}
                className={cn(
                  isFeatured ? "md:col-span-7 md:row-span-2" : "md:col-span-5",
                )}
              >
                <Link
                  href={service.href}
                  className={cn(
                    "group relative block overflow-hidden rounded-[1.75rem]",
                    isFeatured ? "min-h-[420px] md:h-full" : "min-h-[200px]",
                  )}
                >
                  <Image
                    src={serviceVisuals[index]}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes={isFeatured ? "(max-width: 768px) 100vw, 58vw" : "(max-width: 768px) 100vw, 42vw"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/45 to-navy/10" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                    <span className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand-yellow text-navy">
                      <Icon className="size-5" />
                    </span>
                    <h3 className="font-heading text-2xl font-bold text-white md:text-3xl">{service.name}</h3>
                    <p className="mt-2 max-w-md text-sm text-white/75 md:text-base">{service.description}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-yellow">
                      Learn more <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </FadeIn>
            );
          })}
        </div>
      </Section>

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
                    target="_blank"
                    rel="noopener noreferrer"
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
