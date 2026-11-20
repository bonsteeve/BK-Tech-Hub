import Image from "next/image";
import Link from "next/link";

import { FadeIn } from "@/components/shared/fade-in";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { websiteCreationContent } from "@/content/website-creation";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const serviceImage = "/images/site/website-concept-bktechhub.png";

export function WebsiteCreationPage() {
  const content = websiteCreationContent;

  return (
    <>
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_35%,rgba(78,163,255,0.2),transparent_42%)]" aria-hidden />
        <div className="container relative grid min-h-[min(82vh,760px)] items-center gap-12 py-24 md:py-28 lg:grid-cols-12">
          <FadeIn className="space-y-6 lg:col-span-6">
            <p className="inline-flex rounded-full border border-brand-yellow/40 bg-brand-yellow/10 px-4 py-2 text-xs font-bold tracking-[0.14em] text-brand-yellow">
              {content.hero.eyebrow}
            </p>
            <h1 className="max-w-3xl font-heading text-4xl font-bold leading-[1.08] tracking-tight text-balance sm:text-5xl md:text-6xl">
              {content.hero.heading}
            </h1>
            {content.hero.paragraphs.map((paragraph) => (
              <p key={paragraph} className="max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
                {paragraph}
              </p>
            ))}
            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <Button asChild size="lg" variant="primary">
                <Link href="/contact">{content.hero.primaryCTA}</Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/services">{content.hero.secondaryCTA}</Link>
              </Button>
            </div>
            <p className="text-sm text-white/55">Thoughtful design. Clear communication. Built around your goals.</p>
          </FadeIn>

          <FadeIn delay={0.12} className="relative lg:col-span-6">
            <div className="absolute -inset-5 rounded-[2.5rem] bg-brand-blue/15 blur-3xl" aria-hidden />
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-white/15 shadow-2xl">
              <Image
                src={serviceImage}
                alt="Polished BK Tech Hub website displayed on a laptop"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
              <p className="absolute bottom-5 left-5 rounded-full border border-white/20 bg-navy/70 px-4 py-2 text-sm text-white backdrop-blur">
                Designed for your business and your customers
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="container">
          <FadeIn>
            <SectionHeading
              eyebrow={content.services.eyebrow}
              title={content.services.heading}
              description={content.services.description}
              align="center"
            />
          </FadeIn>
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {content.services.items.map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.04}>
                <article className="group h-full rounded-3xl border border-border bg-white p-6 transition duration-200 hover:-translate-y-1 hover:border-brand-blue/40 hover:shadow-xl md:p-7">
                  <span className="inline-flex size-10 items-center justify-center rounded-xl bg-navy text-sm font-bold text-brand-yellow">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-5 font-heading text-xl font-bold text-navy">{item.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{item.description}</p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F7F8FA] py-20 md:py-28">
        <div className="container">
          <FadeIn>
            <SectionHeading
              eyebrow="WEBSITE DESIGN EXAMPLES"
              title="Digital experiences made for real businesses"
              description="Explore sample directions for a business website, an e-commerce storefront, and a WhatsApp automation landing page."
              align="center"
            />
          </FadeIn>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "WhatsApp automation landing page",
                description: "A focused product page that explains the value and guides visitors to book a demo.",
                image: "/images/site/website-concept-bkchat.png",
                imageAlt: "Sample BKChat website shown on a laptop with WhatsApp automation messaging",
              },
              {
                title: "Corporate business website",
                description: "A professional company website introducing services and helping customers take the next step.",
                image: "/images/site/website-concept-bktechhub.png",
                imageAlt: "Sample BK Tech Hub business website design displayed on a laptop",
              },
              {
                title: "E-commerce storefront",
                description: "A product-led online store concept with categories, search, and a clear shopping journey.",
                image: "/images/site/website-concept-ecommerce.png",
                imageAlt: "Sample e-commerce website and product categories displayed on a laptop",
              },
            ].map((concept, index) => (
              <FadeIn key={concept.title} delay={index * 0.06}>
                <article className="group h-full overflow-hidden rounded-3xl border border-border bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-xl">
                  <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                    <Image
                      src={concept.image}
                      alt={concept.imageAlt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-blue">
                      Sample website design
                    </p>
                    <h3 className="mt-2 font-heading text-xl font-bold text-navy">{concept.title}</h3>
                    <p className="mt-2 leading-relaxed text-muted-foreground">{concept.description}</p>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-20 md:py-28">
        <div className="container">
          <FadeIn>
            <SectionHeading
              eyebrow={content.benefits.eyebrow}
              title={content.benefits.heading}
              description={content.benefits.description}
            />
          </FadeIn>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {content.benefits.items.map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.04}>
                <article className="h-full rounded-2xl border border-border bg-white p-5 shadow-sm">
                  <span className="text-sm font-bold text-brand-blue">0{index + 1}</span>
                  <h3 className="mt-4 font-heading text-lg font-bold leading-snug text-navy">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-navy py-20 text-white md:py-28">
        <div className="container grid gap-12 lg:grid-cols-12 lg:items-start">
          <FadeIn className="lg:col-span-5">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-yellow">
              {content.deliverables.eyebrow}
            </p>
            <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-balance md:text-4xl">
              {content.deliverables.heading}
            </h2>
            <p className="mt-5 leading-relaxed text-white/70 md:text-lg">
              {content.deliverables.description}
            </p>
          </FadeIn>
          <FadeIn delay={0.08} className="lg:col-span-7">
            <ul className="grid gap-3 sm:grid-cols-2">
              {content.deliverables.items.map((item) => (
                <li key={item} className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-relaxed text-white/85">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-yellow text-xs font-bold text-navy" aria-hidden>
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-5 border-l-2 border-brand-yellow/70 pl-4 text-sm leading-relaxed text-white/60">
              {content.deliverables.note}
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="container">
          <FadeIn>
            <SectionHeading
              eyebrow={content.ecosystem.eyebrow}
              title={content.ecosystem.heading}
              description={content.ecosystem.description}
              align="center"
            />
          </FadeIn>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {content.ecosystem.items.map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.06}>
                <article className="h-full rounded-3xl border border-border bg-muted/30 p-7">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-blue">
                    {index === 0 ? "01 / Infrastructure" : index === 1 ? "02 / Visibility" : "03 / Conversations"}
                  </p>
                  <h3 className="mt-4 font-heading text-xl font-bold text-navy">{item.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{item.description}</p>
                  {index === 2 ? (
                    <Button asChild variant="outline" className="mt-6">
                      <Link href="/conversaos">{content.ecosystem.cta}</Link>
                    </Button>
                  ) : (
                    <Link
                      className="mt-6 inline-flex font-semibold text-navy underline decoration-brand-yellow decoration-2 underline-offset-4"
                      href={index === 0 ? "/services/hosting" : "/services/seo"}
                    >
                      Explore {item.title}
                    </Link>
                  )}
                </article>
              </FadeIn>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-3xl text-center text-muted-foreground md:text-lg">
            {content.ecosystem.closing}
          </p>
        </div>
      </section>

      <section className="bg-muted/40 py-20 md:py-28">
        <div className="container">
          <FadeIn>
            <SectionHeading
              eyebrow={content.process.eyebrow}
              title={content.process.heading}
              description={content.process.description}
              align="center"
            />
          </FadeIn>
          <ol className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {content.process.steps.map((step, index) => (
              <FadeIn key={step.title} delay={index * 0.04} as="li">
                <article className="h-full rounded-3xl border border-border bg-white p-6">
                  <p className="font-heading text-4xl font-bold text-brand-blue/70">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-5 font-heading text-lg font-bold leading-snug text-navy">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                </article>
              </FadeIn>
            ))}
          </ol>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-20 md:py-28">
        <div className="absolute -right-32 top-0 size-96 rounded-full bg-brand-blue/10 blur-3xl" aria-hidden />
        <div className="container relative grid gap-12 lg:grid-cols-12 lg:items-center">
          <FadeIn className="lg:col-span-5">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-blue">
              {content.marketCoverage.eyebrow}
            </p>
            <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-balance text-navy md:text-4xl">
              {content.marketCoverage.heading}
            </h2>
          </FadeIn>
          <FadeIn delay={0.08} className="space-y-4 lg:col-span-7">
            {content.marketCoverage.paragraphs.map((paragraph) => (
              <p key={paragraph} className="leading-relaxed text-muted-foreground md:text-lg">
                {paragraph}
              </p>
            ))}
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="rounded-full border border-brand-blue/20 bg-brand-blue/5 px-4 py-2 text-sm font-semibold text-navy">
                Businesses across Kenya
              </span>
              <span className="rounded-full border border-brand-blue/20 bg-brand-blue/5 px-4 py-2 text-sm font-semibold text-navy">
                Remote collaboration
              </span>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-muted/40 py-20 md:py-28">
        <div className="container grid gap-12 lg:grid-cols-12">
          <FadeIn className="lg:col-span-4">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-blue">
              {content.faqs.eyebrow}
            </p>
            <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-navy text-balance md:text-4xl">
              {content.faqs.heading}
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Practical answers to help you plan your next website project.
            </p>
          </FadeIn>
          <div className="space-y-3 lg:col-span-8">
            {content.faqs.items.map((item, index) => (
              <FadeIn key={item.question} delay={index * 0.02}>
                <details className="group rounded-2xl border border-border bg-white p-5 open:shadow-sm md:p-6">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-semibold text-navy marker:hidden">
                    {item.question}
                    <span className="mt-0.5 text-xl leading-none text-brand-blue transition-transform group-open:rotate-45" aria-hidden>
                      +
                    </span>
                  </summary>
                  <p className="pt-4 leading-relaxed text-muted-foreground">{item.answer}</p>
                </details>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 md:px-6 md:pb-28">
        <div className="container">
          <div className="relative overflow-hidden rounded-[2rem] bg-navy px-6 py-16 text-center text-white md:px-12 md:py-20">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(78,163,255,0.24),transparent_55%)]" aria-hidden />
            <FadeIn className="relative mx-auto max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-yellow">
                Start your next chapter
              </p>
              <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-balance md:text-5xl">
                {content.finalCTA.heading}
              </h2>
              <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-white/75 md:text-lg">
                {content.finalCTA.description}
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Button asChild size="lg" variant="primary">
                  <Link href="/contact">{content.finalCTA.primaryCTA}</Link>
                </Button>
                <Button asChild size="lg" variant="secondary">
                  <a href={getWhatsAppUrl("Hi BK Tech Hub, I'm interested in a website quote.")} target="_blank" rel="noreferrer">
                    {content.finalCTA.secondaryCTA}
                  </a>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
