import { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { HeroPage } from "@/components/sections/hero-page";
import { Container, Section } from "@/components/layout";
import { CTASection } from "@/components/sections";
import { Badge } from "@/components/ui/badge";
import { JsonLd } from "@/components/seo";
import { generateWebPageSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Explore our portfolio of successful projects. See how we've helped businesses achieve their digital goals through web design, SEO, and automation.",
  openGraph: {
    title: "Our Work | BK Tech Hub",
    description:
      "Explore our portfolio of successful projects and case studies.",
    url: `${siteConfig.url}/work`,
  },
  alternates: {
    canonical: `${siteConfig.url}/work`,
  },
};

const caseStudies = [
  {
    slug: "techstart-redesign",
    title: "E-Commerce Platform Redesign",
    client: "TechStart Inc.",
    industry: "E-commerce",
    description:
      "Complete website overhaul resulting in 150% increase in conversions and 40% reduction in bounce rate.",
    services: ["Web Design", "Development", "SEO"],
    results: [
      { metric: "Conversions", value: "+150%" },
      { metric: "Bounce Rate", value: "-40%" },
      { metric: "Page Speed", value: "95/100" },
    ],
    featured: true,
  },
  {
    slug: "growthfirst-automation",
    title: "AI-Powered Lead Generation",
    client: "GrowthFirst Consulting",
    industry: "Consulting",
    description:
      "Implemented AI chatbot and automation system that qualified 500+ leads per month with 80% accuracy.",
    services: ["AI Automation", "Lead Gen"],
    results: [
      { metric: "Leads/Month", value: "500+" },
      { metric: "Accuracy", value: "80%" },
      { metric: "Time Saved", value: "20hrs/wk" },
    ],
    featured: true,
  },
  {
    slug: "brightideas-branding",
    title: "Complete Brand Transformation",
    client: "Bright Ideas Agency",
    industry: "Marketing",
    description:
      "Full rebrand and website redesign that positioned the agency as a premium service provider.",
    services: ["Branding", "Web Design", "Strategy"],
    results: [
      { metric: "Brand Recognition", value: "+200%" },
      { metric: "Premium Clients", value: "+60%" },
      { metric: "Revenue", value: "+85%" },
    ],
    featured: true,
  },
  {
    slug: "healthplus-seo",
    title: "Healthcare SEO Campaign",
    client: "HealthPlus Clinic",
    industry: "Healthcare",
    description:
      "Comprehensive SEO strategy that increased organic traffic by 300% and local search visibility.",
    services: ["SEO", "Content Strategy", "Local SEO"],
    results: [
      { metric: "Organic Traffic", value: "+300%" },
      { metric: "Local Rankings", value: "Top 3" },
      { metric: "Patient Inquiries", value: "+180%" },
    ],
    featured: false,
  },
];

export default function WorkPage() {
  return (
    <>
      <JsonLd
        data={generateWebPageSchema({
          title: "Our Work | BK Tech Hub",
          description:
            "Explore our portfolio of successful projects and case studies.",
          url: `${siteConfig.url}/work`,
        })}
      />

      <HeroPage
        title="Real Results for"
        titleHighlight="Real Businesses"
        description="Explore our portfolio of successful projects. See how we've helped businesses like yours achieve their digital goals."
        breadcrumbs={[{ name: "Work", href: "/work" }]}
      />

      <Section>
        <Container size="xl">
          {/* Filter Tags */}
          <div className="flex flex-wrap gap-2 mb-12">
            {["All", "Web Design", "SEO", "AI Automation", "Branding"].map(
              (filter) => (
                <Badge
                  key={filter}
                  variant={filter === "All" ? "default" : "outline"}
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {filter}
                </Badge>
              )
            )}
          </div>

          {/* Case Studies Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <Link
                key={study.slug}
                href={`/work/${study.slug}`}
                className="group"
              >
                <article className="rounded-2xl overflow-hidden bg-card border border-border/50 hover:border-primary/30 transition-all duration-300">
                  {/* Image Placeholder */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <span className="text-muted-foreground">
                        [Project Image]
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />

                    {/* Results Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                      {study.results.slice(0, 2).map((result) => (
                        <div
                          key={result.metric}
                          className="glass rounded-lg px-3 py-2"
                        >
                          <div className="text-lg font-bold text-primary">
                            {result.value}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {result.metric}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div>
                        <p className="text-sm text-primary mb-1">
                          {study.client} • {study.industry}
                        </p>
                        <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                          {study.title}
                        </h3>
                      </div>
                      <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                    </div>
                    <p className="text-muted-foreground mb-4 text-sm">
                      {study.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {study.services.map((service) => (
                        <Badge
                          key={service}
                          variant="outline"
                          className="text-xs bg-muted/50"
                        >
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
