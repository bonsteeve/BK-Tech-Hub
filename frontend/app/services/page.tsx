import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  Check,
  Globe,
  Lightbulb,
  MessageCircle,
  Rocket,
  Search,
  Server,
  Settings,
  ShoppingCart,
} from "lucide-react";

import { FadeIn } from "@/components/shared/fade-in";
import { Button } from "@/components/ui/button";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...createPageMetadata({
    title: "Business Technology Services in Kenya | BK Tech Hub",
    description:
      "Explore BK Tech Hub's business technology services: website design and development, WhatsApp AI automation with BKChat, web hosting and SEO for businesses in Kenya and beyond.",
    path: "/services",
    keywords: [
      "business technology services Kenya",
      "website design and development Kenya",
      "WhatsApp AI automation",
      "web hosting Kenya",
      "search engine optimization Kenya",
      "BKChat",
    ],
  }),
  title: { absolute: "Business Technology Services in Kenya | BK Tech Hub" },
};

const serviceCards = [
  {
    title: "Website Design & Development",
    description:
      "Professional, responsive business websites designed to build trust, showcase your services and turn visitors into enquiries.",
    href: "/services/website-creation",
    image: "/images/marketing/website-design-cover.webp",
    imageAlt: "BK Tech Hub responsive website shown on a laptop, phone and tablet",
    Icon: Globe,
  },
  {
    title: "WhatsApp AI Automation (BKChat)",
    description:
      "Automate customer conversations, respond to enquiries, qualify leads, generate quotations and manage bookings through WhatsApp.",
    href: "/bkchat",
    image: "/images/marketing/conversaos-lifestyle.jpg",
    imageAlt: "Business owner managing customer conversations on WhatsApp",
    Icon: MessageCircle,
  },
  {
    title: "Web Hosting",
    description:
      "Reliable web hosting to keep your website accessible, secure and performing consistently.",
    href: "/services/hosting",
    image: "/images/marketing/service-hosting-seo.jpg",
    imageAlt: "Analytics dashboard on a tablet in a server environment",
    Icon: Server,
  },
  {
    title: "Search Engine Optimization",
    description:
      "Improve your website's search visibility through technical SEO, on-page optimization and search-focused improvements.",
    href: "/services/seo",
    image: "/images/marketing/seo-cover.webp",
    imageAlt: "Illustration of search optimization, rankings and website visibility",
    Icon: Search,
  },
] as const;

const websiteCategories = [
  {
    title: "Landing Pages",
    description: "Campaigns, promotions and lead generation.",
    Icon: Rocket,
  },
  {
    title: "Startup Websites",
    description:
      "Help startups establish their online presence and introduce their products or services.",
    Icon: Lightbulb,
  },
  {
    title: "Business Websites",
    description:
      "Professional websites for businesses showcasing their services, products and company information.",
    Icon: Briefcase,
  },
  {
    title: "E-commerce Websites",
    description: "Online stores that allow businesses to showcase products and receive orders online.",
    Icon: ShoppingCart,
  },
  {
    title: "Custom Websites",
    description:
      "Tailored websites with functionality designed around specific business requirements.",
    Icon: Settings,
  },
] as const;

const websiteIncludedItems = [
  "Professional, responsive design.",
  "Contact forms and WhatsApp integration where applicable.",
  "Basic on-page SEO setup.",
  "Deployment and domain connection.",
];

const bkchatHighlights = [
  "AI-powered customer responses around the clock.",
  "Product and pricing information.",
  "Lead qualification.",
  "Automated quotations and bookings.",
  "Human agent takeover.",
];

const approachPoints = [
  {
    title: "Integrated solutions",
    description: "Websites, hosting, SEO and automation from one technology partner.",
  },
  {
    title: "Business-focused approach",
    description: "Solutions built around real operational and customer engagement needs.",
  },
  {
    title: "Practical implementation",
    description: "Technology designed to support everyday business activities.",
  },
  {
    title: "Room to grow",
    description:
      "Start with the service you need and expand your digital capabilities over time.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="relative -mt-[5.25rem] overflow-hidden bg-navy text-white sm:-mt-[5.75rem]">
        <div
          className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full bg-brand-blue/20 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-brand-yellow/10 blur-3xl"
          aria-hidden
        />
        <div className="container relative grid items-center gap-12 py-16 md:py-20 lg:min-h-[min(70vh,640px)] lg:grid-cols-2 lg:gap-10 lg:py-20">
          <FadeIn className="max-w-2xl space-y-6">
            <p className="text-sm font-medium text-brand-yellow">
              BUSINESS TECHNOLOGY &amp; AUTOMATION
            </p>
            <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-balance sm:text-5xl md:text-6xl">
              Technology solutions built around your business.
            </h1>
            <p className="max-w-xl text-base text-white/80 md:text-lg">
              BK Tech Hub brings together professional websites, WhatsApp AI automation, reliable
              hosting and search engine optimization to help businesses attract customers,
              streamline operations and grow their digital presence.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" variant="primary">
                <Link href="#services">
                  Explore Our Services <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">Talk to Our Team</Link>
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.12} className="relative mx-auto w-full max-w-2xl lg:max-w-none">
            <div
              className="absolute -inset-3 rounded-[2rem] border border-brand-yellow/20"
              aria-hidden
            />
            <div className="relative aspect-video overflow-hidden rounded-[1.75rem] border border-white/15 shadow-2xl shadow-black/30">
              <Image
                src="/images/services_hero.webp"
                alt="BK Tech Hub services for website design, BKChat, web hosting and SEO"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1023px) calc(100vw - 2rem), 50vw"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-navy/10 via-transparent to-brand-blue/10"
                aria-hidden
              />
            </div>
            <div className="absolute -bottom-5 right-4 hidden rounded-xl border border-white/15 bg-navy/90 px-4 py-2 text-sm font-semibold text-brand-yellow shadow-xl backdrop-blur md:block">
              Websites · BKChat · Hosting · SEO
            </div>
          </FadeIn>
        </div>
      </section>

      <section id="services" className="scroll-mt-24 bg-white py-16 md:py-24">
        <div className="container">
          <FadeIn className="mb-10 max-w-3xl md:mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-blue">
              What we offer
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-navy md:text-4xl">
              Everything your business needs to grow digitally.
            </h2>
            <p className="mt-4 text-muted-foreground md:text-lg">
              From building your online presence to automating customer interactions and improving
              search visibility, our solutions help businesses make better use of technology.
            </p>
          </FadeIn>

          <div className="grid items-stretch gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {serviceCards.map(({ title, description, href, image, imageAlt, Icon }, index) => (
              <FadeIn key={href} delay={index * 0.05} className="h-full">
                <Link
                  href={href}
                  aria-label={`Learn more about ${title}`}
                  className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-border bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-4"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-navy">
                    <Image
                      src={image}
                      alt={imageAlt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 639px) 100vw, (max-width: 1279px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/65 via-transparent to-transparent" />
                    <span className="absolute bottom-4 left-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand-yellow text-navy">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-heading text-xl font-bold text-navy">{title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {description}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-blue">
                      Learn more{" "}
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="website-design-heading"
        className="relative overflow-hidden bg-muted/40 py-16 md:py-24"
      >
        <div
          className="pointer-events-none absolute -right-32 -top-24 size-[28rem] rounded-full bg-brand-blue/10 blur-3xl"
          aria-hidden
        />
        <div className="container relative">
          <div className="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
            <FadeIn className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-blue">
                Website Design &amp; Development
              </p>
              <h2
                id="website-design-heading"
                className="mt-3 font-heading text-3xl font-bold tracking-tight text-navy text-balance md:text-5xl"
              >
                Websites built to <span className="text-brand-blue">grow your business.</span>
              </h2>
              <p className="mt-5 text-muted-foreground md:text-lg">
                From a simple landing page to a fully featured e-commerce store, we design and
                develop professional, mobile-friendly websites that help businesses establish
                their online presence, reach more customers and generate opportunities.
              </p>
              <div className="mt-7 flex flex-wrap items-end gap-4">
                <div
                  aria-label="Starting website price: KSh 15,000"
                  className="rounded-2xl bg-brand-yellow px-5 py-3 text-navy shadow-lg shadow-brand-yellow/20"
                >
                  <p className="text-sm font-medium">From as low as</p>
                  <p className="font-heading text-3xl font-extrabold leading-tight sm:text-4xl">
                    KSh 15,000
                  </p>
                </div>
                <p className="max-w-xs pb-1 text-sm leading-relaxed text-muted-foreground">
                  Final pricing depends on project scope, pages, features and integrations.
                </p>
              </div>
              <Button asChild size="lg" variant="primary" className="mt-7">
                <Link href="/contact">
                  Get a Website Quote <ArrowRight className="size-4" />
                </Link>
              </Button>
            </FadeIn>

            <FadeIn delay={0.1} className="relative mx-auto w-full max-w-2xl lg:max-w-none">
              <div
                className="absolute -inset-4 rounded-[2rem] bg-brand-blue/15 blur-2xl"
                aria-hidden
              />
              <div className="relative aspect-video overflow-hidden rounded-[1.75rem] border-4 border-white shadow-2xl ring-1 ring-navy/10">
                <Image
                  src="/images/website.webp"
                  alt="Responsive website examples displayed on a laptop, tablet and mobile phone"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1023px) calc(100vw - 2rem), 52vw"
                />
              </div>
              <p className="absolute -bottom-4 left-4 rounded-xl border border-white/15 bg-navy px-4 py-2 text-sm font-semibold text-brand-yellow shadow-xl">
                Desktop · Tablet · Mobile
              </p>
            </FadeIn>
          </div>

          <div className="mt-14 md:mt-16">
            <h3 className="font-heading text-xl font-bold text-navy md:text-2xl">
              Website solutions we offer
            </h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {websiteCategories.map(({ title, description, Icon }, index) => (
                <FadeIn key={title} delay={index * 0.04} className="h-full">
                  <article className="h-full rounded-2xl border border-navy/10 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg">
                    <span className="inline-flex size-10 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <h4 className="mt-4 font-heading text-base font-bold text-navy">{title}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {description}
                    </p>
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>

          <div className="mt-6 rounded-[1.5rem] bg-navy p-4 text-white shadow-xl md:p-5">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
              <h3 className="shrink-0 rounded-xl bg-brand-yellow px-4 py-3 font-heading text-lg font-bold text-navy">
                What&apos;s included?
              </h3>
              <ul className="grid flex-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {websiteIncludedItems.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-white/90">
                    <Check className="mt-0.5 size-4 shrink-0 text-brand-yellow" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy py-16 text-white md:py-20">
        <div
          className="pointer-events-none absolute -right-16 top-0 h-72 w-72 rounded-full bg-brand-blue/20 blur-3xl"
          aria-hidden
        />
        <div className="container relative grid items-center gap-10 lg:grid-cols-12">
          <FadeIn className="lg:col-span-6">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-yellow">
              WhatsApp AI automation
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-balance md:text-4xl">
              Turn WhatsApp conversations into business opportunities.
            </h2>
            <p className="mt-4 text-white/75 md:text-lg">
              Customers expect quick responses. BKChat helps businesses stay responsive with
              AI-powered WhatsApp conversations that understand their products, services and
              business information.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {bkchatHighlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-3 text-sm text-white/85">
                  <Check className="mt-0.5 size-4 shrink-0 text-brand-yellow" aria-hidden="true" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" variant="primary">
                <Link href="/bkchat">
                  Discover BKChat <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/book-a-demo">Book a BKChat Demo</Link>
              </Button>
            </div>
          </FadeIn>
          <FadeIn delay={0.1} className="relative lg:col-span-6">
            <div className="relative aspect-[16/11] overflow-hidden rounded-[1.75rem] shadow-2xl">
              <Image
                src="/images/marketing/conversaos-lifestyle.jpg"
                alt="A business managing customer conversations with BKChat"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-navy/35 to-transparent" />
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-muted/40 py-16 md:py-24">
        <div className="container grid gap-10 lg:grid-cols-12 lg:gap-14">
          <FadeIn className="lg:col-span-5">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-blue">
              Our approach
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-navy text-balance md:text-4xl">
              Technology that solves real business challenges.
            </h2>
            <p className="mt-4 text-muted-foreground md:text-lg">
              We focus on practical technology solutions that help businesses improve their digital
              presence, serve customers better and simplify everyday operations.
            </p>
          </FadeIn>
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {approachPoints.map((point, index) => (
              <FadeIn
                key={point.title}
                delay={index * 0.05}
                className="rounded-2xl border border-border bg-white p-6"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-yellow/20 text-brand-blue">
                  <Check className="size-4" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-heading text-lg font-bold text-navy">{point.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {point.description}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:pb-24 md:pt-20">
        <div className="container">
          <div className="relative min-h-[320px] overflow-hidden rounded-[2rem]">
            <Image
              src="/images/marketing/service-hosting-seo.jpg"
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-navy/80" />
            <div className="relative z-10 flex min-h-[320px] flex-col items-center justify-center px-8 py-14 text-center text-white">
              <h2 className="font-heading text-3xl font-bold text-balance md:text-4xl">
                Let&apos;s find the right technology for your business.
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-white/75">
                Whether you need a professional website, reliable hosting, better Google visibility
                or WhatsApp automation, BK Tech Hub can help you identify the right technology for
                your business.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" variant="primary">
                  <Link href="/contact">Talk to BK Tech Hub</Link>
                </Button>
                <Button asChild size="lg" variant="secondary">
                  <Link href="#services">Explore Our Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
