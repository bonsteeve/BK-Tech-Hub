import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Target, Users, Zap, Heart } from "lucide-react";
import { HeroPage } from "@/components/sections/hero-page";
import { Container, Section } from "@/components/layout";
import { CTASection, Testimonials } from "@/components/sections";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { JsonLd } from "@/components/seo";
import { generateWebPageSchema, generateOrganizationSchema } from "@/lib/schema";
import { siteConfig, ctaLinks } from "@/lib/constants";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about BK Tech Hub - our mission, values, and the team behind your digital success. We're passionate about helping businesses thrive online.",
  openGraph: {
    title: "About Us | BK Tech Hub",
    description:
      "Learn about BK Tech Hub and the team behind your digital success.",
    url: `${siteConfig.url}/about`,
  },
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
};

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description:
      "We measure success by your success. Every project is designed to achieve measurable business outcomes.",
  },
  {
    icon: Users,
    title: "Client-Centered",
    description:
      "We listen first, then build. Your vision and goals guide every decision we make.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description:
      "We stay ahead of trends to give you cutting-edge solutions that stand the test of time.",
  },
  {
    icon: Heart,
    title: "Integrity",
    description:
      "Transparency and honesty in everything we do. No hidden agendas, just honest partnership.",
  },
];

const stats = [
  { value: "50+", label: "Projects Completed" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "200%", label: "Avg. Traffic Increase" },
  { value: "5+", label: "Years Experience" },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={[
          generateOrganizationSchema(),
          generateWebPageSchema({
            title: "About Us | BK Tech Hub",
            description:
              "Learn about BK Tech Hub and the team behind your digital success.",
            url: `${siteConfig.url}/about`,
          }),
        ]}
      />

      <HeroPage
        title="Your Partner in"
        titleHighlight="Digital Growth"
        description="We're a team of designers, developers, and strategists passionate about helping businesses build powerful digital presences that convert."
        breadcrumbs={[{ name: "About", href: "/about" }]}
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg">
            <Link href={ctaLinks.bookCall.href}>
              {ctaLinks.bookCall.text}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </HeroPage>

      {/* Mission Section */}
      <Section>
        <Container size="default">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We exist to help growing businesses compete and win in the digital
              landscape. By combining strategic thinking with technical excellence,
              we create digital experiences that don&apos;t just look great—they
              deliver real business results.
            </p>
          </div>
        </Container>
      </Section>

      {/* Stats */}
      <Section variant="muted" padding="sm">
        <Container size="xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Values Section */}
      <Section>
        <Container size="xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <Card
                key={value.title}
                className="bg-card/50 border-border/50 text-center"
              >
                <CardContent className="pt-8 pb-6">
                  <div
                    className={cn(
                      "w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4",
                      "bg-gradient-to-br from-primary/20 to-secondary/20"
                    )}
                  >
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Story Section */}
      <Section variant="muted">
        <Container size="default">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  BK Tech Hub was founded with a simple belief: every business
                  deserves a powerful digital presence, regardless of size.
                </p>
                <p>
                  We&apos;ve seen too many SMEs struggle with outdated websites,
                  confusing SEO practices, and missed automation opportunities.
                  We started this company to change that.
                </p>
                <p>
                  Today, we work with businesses across industries to create
                  digital solutions that actually move the needle—more traffic,
                  more leads, more revenue. No fluff, just results.
                </p>
              </div>
            </div>
            <div className="relative aspect-video md:aspect-square rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
              <Image
                src="/images/about/about-team.png"
                alt="BK Tech Hub team collaborating on digital solutions"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Approach Section */}
      <Section>
        <Container size="default">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Our Approach
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              How we work with clients to deliver exceptional results
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                title: "Strategy First",
                description:
                  "We don't jump into design or development. Every project starts with understanding your business, audience, and goals.",
              },
              {
                title: "Collaborative Process",
                description:
                  "You're involved every step of the way. Regular check-ins, feedback loops, and transparent communication.",
              },
              {
                title: "Data-Informed Decisions",
                description:
                  "We use analytics and research to guide our decisions, not just gut feelings or trends.",
              },
              {
                title: "Long-Term Partnership",
                description:
                  "We don't disappear after launch. We're here for ongoing optimization, support, and growth.",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className={cn(
                  "flex gap-6 p-6 rounded-xl",
                  "bg-card/50 border border-border/50"
                )}
              >
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold shrink-0">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Testimonials />
      <CTASection />
    </>
  );
}
