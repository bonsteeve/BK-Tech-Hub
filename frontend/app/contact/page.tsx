import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock3, Mail, MapPin, Phone } from "lucide-react";

import { ContactForm } from "@/components/forms/contact-form";
import { FadeIn } from "@/components/shared/fade-in";
import { Button } from "@/components/ui/button";
import { createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = createPageMetadata({
  title: "Contact",
  description:
    "Contact BK Tech Hub about BK Chat demos, website creation, hosting, or SEO. We typically reply within one business day.",
  path: "/contact",
  keywords: [
    "contact BK Tech Hub",
    "BK Chat demo",
    "website project inquiry",
    "Nairobi digital agency",
  ],
});

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative -mt-[5.25rem] min-h-[min(58vh,520px)] overflow-hidden bg-navy text-white sm:-mt-[5.75rem]">
        <Image
          src="/images/marketing/conversaos-lifestyle.jpg"
          alt=""
          fill
          priority
          className="object-cover opacity-40"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/88 to-navy/55" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-navy/40" aria-hidden />

        <div className="container relative flex min-h-[min(58vh,520px)] items-center py-20 md:py-24">
          <FadeIn className="max-w-2xl space-y-5">
            <p className="text-sm font-medium text-brand-yellow">Let’s talk</p>
            <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-balance sm:text-5xl md:text-6xl">
              Tell us what you’re building —{" "}
              <span className="text-brand-yellow">we’ll map the next step</span>
            </h1>
            <p className="max-w-xl text-base text-white/80 md:text-lg">
              BK Chat demos, websites, hosting, or SEO. Share your goals and we’ll reply with
              practical recommendations.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Form + details */}
      <section className="relative bg-white py-16 md:py-24">
        <div className="container grid items-start gap-12 lg:grid-cols-12 lg:gap-10">
          <FadeIn className="space-y-8 lg:col-span-5">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-blue">
                Get in touch
              </p>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-navy md:text-4xl">
                Direct lines
              </h2>
              <p className="mt-3 text-muted-foreground">
                Prefer email or WhatsApp? Reach us anytime — strategic inquiries are prioritized.
              </p>
            </div>

            <ul className="space-y-4">
              <ContactDetail
                icon={Mail}
                label="Email"
                value={siteConfig.email}
                href={`mailto:${siteConfig.email}`}
              />
              <ContactDetail
                icon={Phone}
                label="WhatsApp"
                value={siteConfig.whatsapp}
                href={getWhatsAppUrl()}
              />
              <ContactDetail
                icon={MapPin}
                label="Location"
                value={`${siteConfig.location.city}, ${siteConfig.location.country}`}
              />
              <ContactDetail
                icon={Clock3}
                label="Response time"
                value="Usually within half an hour"
              />
            </ul>

            <div className="relative hidden overflow-hidden rounded-[1.75rem] shadow-xl lg:block">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/images/marketing/conversaos-booking.jpg"
                  alt="BK Tech Hub — conversation-led growth"
                  fill
                  className="object-cover"
                  sizes="400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/20 to-transparent" />
                <p className="absolute bottom-5 left-5 right-5 font-heading text-xl font-bold text-white">
                  More leads. Less work.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.08} className="lg:col-span-7">
            <div className="rounded-[2rem] border border-border bg-muted/30 p-6 shadow-sm md:p-9">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-blue">
                Project inquiry
              </p>
              <h2 className="mt-3 font-heading text-2xl font-bold tracking-tight text-navy md:text-3xl">
                Send a message
              </h2>
              <p className="mt-2 text-muted-foreground">
                Tell us what you need — BK Chat, a website, hosting, SEO, or a mix.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Demo preference band */}
      <section className="relative overflow-hidden bg-navy py-16 text-white md:py-20">
        <div className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-brand-yellow/10 blur-3xl" aria-hidden />
        <div className="container relative grid items-center gap-10 lg:grid-cols-12">
          <FadeIn className="lg:col-span-7">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-yellow">
              Prefer a walkthrough?
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight md:text-4xl">
              Book a BK Chat demo instead
            </h2>
            <p className="mt-4 max-w-xl text-white/75 md:text-lg">
              See AI replies, human takeover, quotes, bookings, and reminders on workflows like yours —
              in about 30 minutes.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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
          <FadeIn delay={0.1} className="lg:col-span-5">
            <div className="relative aspect-[16/11] overflow-hidden rounded-[1.75rem] shadow-2xl">
              <Image
                src="/images/marketing/poster-conversaos.jpg"
                alt="BK Chat product preview"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

type ContactDetailProps = {
  icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
};

function ContactDetail({ icon: Icon, label, value, href }: ContactDetailProps) {
  const content = (
    <>
      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy text-brand-yellow">
        <Icon className="size-4" />
      </span>
      <span>
        <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
          {label}
        </span>
        <span className="mt-0.5 block font-medium text-navy">{value}</span>
      </span>
    </>
  );

  if (href) {
    return (
      <li>
        <a
          href={href}
          className="flex items-center gap-4 rounded-2xl border border-border bg-muted/40 px-4 py-3.5 transition-colors hover:border-brand-yellow/50 hover:bg-brand-yellow/10"
        >
          {content}
        </a>
      </li>
    );
  }

  return (
    <li className="flex items-center gap-4 rounded-2xl border border-border bg-muted/40 px-4 py-3.5">
      {content}
    </li>
  );
}
