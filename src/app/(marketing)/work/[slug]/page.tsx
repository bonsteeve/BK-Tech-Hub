import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { HeroPage } from "@/components/sections/hero-page";
import { Container, Section } from "@/components/layout";
import { CTASection } from "@/components/sections";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { JsonLd } from "@/components/seo";
import { generateWebPageSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

const caseStudies: Record<
  string,
  {
    title: string;
    client: string;
    industry: string;
    services: string[];
    challenge: string;
    solution: string;
    results: Array<{ metric: string; value: string; description: string }>;
    testimonial: {
      quote: string;
      name: string;
      role: string;
    };
  }
> = {
  "techstart-redesign": {
    title: "E-Commerce Platform Redesign",
    client: "TechStart Inc.",
    industry: "E-commerce",
    services: ["Web Design", "Development", "SEO"],
    challenge:
      "TechStart's existing website was outdated, slow, and converting poorly. Their bounce rate was over 60% and they were losing potential customers to competitors with more modern experiences.",
    solution:
      "We redesigned the entire platform with a focus on performance and conversions. This included a new visual design, optimized product pages, streamlined checkout flow, and comprehensive technical SEO implementation.",
    results: [
      {
        metric: "Conversion Rate",
        value: "+150%",
        description:
          "Improved product page design and checkout flow dramatically increased conversions.",
      },
      {
        metric: "Bounce Rate",
        value: "-40%",
        description:
          "Faster load times and better UX kept visitors engaged longer.",
      },
      {
        metric: "Page Speed Score",
        value: "95/100",
        description:
          "Optimized images, code, and hosting resulted in near-perfect performance.",
      },
      {
        metric: "Organic Traffic",
        value: "+85%",
        description: "SEO improvements drove significant organic growth.",
      },
    ],
    testimonial: {
      quote:
        "BK Tech Hub didn't just build us a website—they built us a revenue engine. The results speak for themselves.",
      name: "Michael Chen",
      role: "CEO, TechStart Inc.",
    },
  },
  "growthfirst-automation": {
    title: "AI-Powered Lead Generation",
    client: "GrowthFirst Consulting",
    industry: "Consulting",
    services: ["AI Automation", "Lead Gen"],
    challenge:
      "GrowthFirst was spending too much time manually qualifying leads. Their sales team was overwhelmed with unqualified prospects, and valuable opportunities were slipping through the cracks.",
    solution:
      "We implemented an AI-powered chatbot and lead scoring system that automatically qualifies prospects, answers common questions, and routes high-value leads to the right team members.",
    results: [
      {
        metric: "Qualified Leads",
        value: "500+/mo",
        description:
          "AI chatbot now qualifies over 500 leads monthly with minimal human intervention.",
      },
      {
        metric: "Qualification Accuracy",
        value: "80%",
        description:
          "AI accurately identifies high-value prospects 80% of the time.",
      },
      {
        metric: "Time Saved",
        value: "20hrs/wk",
        description:
          "Sales team reclaimed 20+ hours weekly for high-value activities.",
      },
      {
        metric: "Response Time",
        value: "<1 min",
        description: "Instant responses 24/7 dramatically improved lead experience.",
      },
    ],
    testimonial: {
      quote:
        "The AI automation they implemented saves our team 20+ hours per week. The ROI was evident within the first month.",
      name: "James Kim",
      role: "Operations Director, GrowthFirst Consulting",
    },
  },
};

export async function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies[slug];

  if (!study) {
    return {
      title: "Case Study Not Found",
    };
  }

  return {
    title: `${study.title} | ${study.client}`,
    description: study.challenge,
    openGraph: {
      title: `${study.title} | BK Tech Hub`,
      description: study.challenge,
      url: `${siteConfig.url}/work/${slug}`,
    },
    alternates: {
      canonical: `${siteConfig.url}/work/${slug}`,
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = caseStudies[slug];

  if (!study) {
    notFound();
  }

  return (
    <>
      <JsonLd
        data={generateWebPageSchema({
          title: `${study.title} | BK Tech Hub`,
          description: study.challenge,
          url: `${siteConfig.url}/work/${slug}`,
        })}
      />

      <HeroPage
        badge={study.industry}
        title={study.title}
        description={`How we helped ${study.client} achieve exceptional results.`}
        breadcrumbs={[
          { name: "Work", href: "/work" },
          { name: study.client, href: `/work/${slug}` },
        ]}
      >
        <div className="flex flex-wrap gap-2 mt-4">
          {study.services.map((service) => (
            <Badge key={service} variant="outline" className="bg-primary/5">
              {service}
            </Badge>
          ))}
        </div>
      </HeroPage>

      {/* Results Overview */}
      <Section>
        <Container size="xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {study.results.map((result) => (
              <Card
                key={result.metric}
                className="bg-card/50 border-border/50 text-center"
              >
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-gradient mb-2">
                    {result.value}
                  </div>
                  <div className="font-medium mb-1">{result.metric}</div>
                  <p className="text-sm text-muted-foreground">
                    {result.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Challenge & Solution */}
      <Section variant="muted">
        <Container size="default">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display text-2xl font-bold mb-4">
                The Challenge
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {study.challenge}
              </p>
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold mb-4">
                Our Solution
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {study.solution}
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Testimonial */}
      <Section>
        <Container size="default">
          <Card className="bg-card/50 border-border/50">
            <CardContent className="p-8 md:p-12">
              <Quote className="w-12 h-12 text-primary/30 mb-6" />
              <blockquote className="text-xl md:text-2xl font-medium mb-6 leading-relaxed">
                &ldquo;{study.testimonial.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-4">
                <div
                  className={cn(
                    "w-12 h-12 rounded-full flex items-center justify-center",
                    "bg-gradient-to-br from-primary/20 to-secondary/20",
                    "text-primary font-semibold"
                  )}
                >
                  {study.testimonial.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <div className="font-medium">{study.testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {study.testimonial.role}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </Container>
      </Section>

      {/* Navigation */}
      <Section variant="muted" padding="sm">
        <Container size="xl">
          <div className="flex justify-between items-center">
            <Button asChild variant="ghost">
              <Link href="/work">
                <ArrowLeft className="mr-2 h-4 w-4" />
                All Case Studies
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/contact">
                Discuss Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
