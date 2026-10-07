import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Globe, Search, Server } from "lucide-react";

import { FadeIn } from "@/components/shared/fade-in";
import { Button } from "@/components/ui/button";
import { services } from "@/content/services";
import { createPageMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const metadata: Metadata = createPageMetadata({
  title: "Services — Websites, Hosting & SEO",
  description:
    "BK Tech Hub services: website creation, hosting, and SEO — alongside BK Chat WhatsApp automation.",
  path: "/services",
  keywords: ["website creation", "hosting", "SEO", "BK Tech Hub services"],
});

const serviceIcons = {
  "website-creation": Globe,
  hosting: Server,
  seo: Search,
} as const;

export default function ServicesPage() {
  const [primary, ...rest] = services;

  return (
    <>
      {/* Hero */}
      <section className="relative -mt-[5.25rem] min-h-[min(70vh,640px)] overflow-hidden bg-navy text-white sm:-mt-[5.75rem]">
        <Image
          src="/images/marketing/service-websites.jpg"
          alt=""
          fill
          priority
          className="object-cover opacity-40"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/55" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-navy/40" aria-hidden />

        <div className="container relative flex min-h-[min(70vh,640px)] items-center py-20 md:py-28">
          <FadeIn className="max-w-2xl space-y-6">
            <p className="text-sm font-medium text-brand-yellow">Websites · Hosting · SEO</p>
            <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-balance sm:text-5xl md:text-6xl">
              Digital services that{" "}
              <span className="text-brand-yellow">grow with BK Chat</span>
            </h1>
            <p className="max-w-xl text-base text-white/80 md:text-lg">
              Build a high-converting website, keep it fast and secure, and get found by the right
              customers — then capture chats with BK Chat.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" variant="primary">
                <Link href="/book-a-demo">
                  Book a Demo <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/conversaos">Explore BK Chat</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Featured + mosaic */}
      <section className="bg-white py-16 md:py-24">
        <div className="container">
          <FadeIn className="mb-12 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-blue">What we offer</p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-navy md:text-4xl">
              Three services. One growth system.
            </h2>
          </FadeIn>

          <div className="grid gap-5 lg:grid-cols-12">
            <FadeIn className="lg:col-span-7">
              <Link
                href={`/services/${primary.slug}`}
                className="group relative block min-h-[420px] overflow-hidden rounded-[2rem] md:min-h-[520px]"
              >
                <Image
                  src={primary.image}
                  alt={primary.imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-navy/10" />
                <div className="absolute inset-0 flex flex-col justify-end p-7 md:p-10">
                  <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-yellow text-navy">
                    <Globe className="size-5" />
                  </span>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-yellow">
                    {primary.accent}
                  </p>
                  <h3 className="mt-2 font-heading text-3xl font-bold text-white md:text-4xl">
                    {primary.name}
                  </h3>
                  <p className="mt-3 max-w-lg text-white/75 md:text-lg">{primary.summary}</p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-yellow">
                    View details{" "}
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </FadeIn>

            <div className="flex flex-col gap-5 lg:col-span-5">
              {rest.map((service, index) => {
                const Icon = serviceIcons[service.slug as keyof typeof serviceIcons] ?? Server;
                return (
                  <FadeIn key={service.slug} delay={0.06 + index * 0.05} className="flex-1">
                    <Link
                      href={`/services/${service.slug}`}
                      className="group relative flex h-full min-h-[200px] overflow-hidden rounded-[1.75rem]"
                    >
                      <Image
                        src={service.image}
                        alt={service.imageAlt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 40vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/55 to-navy/15" />
                      <div className="relative z-10 flex flex-col justify-end p-6 md:p-7">
                        <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-yellow text-navy">
                          <Icon className="size-4" />
                        </span>
                        <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-brand-yellow">
                          {service.accent}
                        </p>
                        <h3 className="mt-1 font-heading text-2xl font-bold text-white">
                          {service.name}
                        </h3>
                        <p className="mt-2 text-sm text-white/75">{service.summary}</p>
                      </div>
                    </Link>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Pairing band with BK Chat */}
      <section className="relative overflow-hidden bg-navy py-16 text-white md:py-20">
        <div className="pointer-events-none absolute -right-16 top-0 h-72 w-72 rounded-full bg-brand-blue/20 blur-3xl" aria-hidden />
        <div className="container relative grid items-center gap-10 lg:grid-cols-12">
          <FadeIn className="lg:col-span-6">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-yellow">
              Better together
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight md:text-4xl">
              Pair your website with BK Chat
            </h2>
            <p className="mt-4 text-white/75 md:text-lg">
              When visitors are ready to talk, meet them on WhatsApp. BK Chat replies, quotes, and
              books — while your site does the selling.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" variant="primary">
                <Link href="/conversaos">
                  See BK Chat <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">Talk to us</Link>
              </Button>
            </div>
          </FadeIn>
          <FadeIn delay={0.1} className="relative lg:col-span-6">
            <div className="relative aspect-[16/11] overflow-hidden rounded-[1.75rem] shadow-2xl">
              <Image
                src="/images/marketing/conversaos-booking.jpg"
                alt="WhatsApp booking with BK Chat"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-navy/35 to-transparent" />
            </div>
            <div
              className={cn(
                "absolute -bottom-5 -left-2 hidden max-w-[220px] rounded-2xl border border-white/15",
                "bg-navy/90 p-4 text-sm text-white shadow-xl backdrop-blur md:block",
              )}
            >
              Website converts interest. BK Chat closes the conversation.
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16 md:pb-24 md:pt-20">
        <div className="container">
          <div className="relative min-h-[300px] overflow-hidden rounded-[2rem]">
            <Image
              src="/images/marketing/service-hosting-seo.jpg"
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-navy/80" />
            <div className="relative z-10 flex min-h-[300px] flex-col items-center justify-center px-8 py-14 text-center text-white">
              <h2 className="font-heading text-3xl font-bold md:text-4xl">Not sure where to start?</h2>
              <p className="mx-auto mt-4 max-w-xl text-white/75">
                Book a demo or tell us your goals — we’ll recommend the highest-impact next step.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" variant="primary">
                  <Link href="/book-a-demo">Book a Demo</Link>
                </Button>
                <Button asChild size="lg" variant="secondary">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
