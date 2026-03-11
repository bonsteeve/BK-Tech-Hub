import { Metadata } from "next";
import {
  Zap,
  Search,
  Smartphone,
  TrendingUp,
  Shield,
} from "lucide-react";
import { HeroPage } from "@/components/sections/hero-page";
import { Container, Section } from "@/components/layout";
import { AuditForm } from "@/components/forms";
import { Card, CardContent } from "@/components/ui/card";
import { JsonLd } from "@/components/seo";
import { generateWebPageSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/constants";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Free Website Audit",
  description:
    "Get a free comprehensive website audit. We'll analyze your site's performance, SEO, mobile experience, and conversion opportunities.",
  openGraph: {
    title: "Free Website Audit | BK Tech Hub",
    description:
      "Get a free comprehensive website audit with actionable recommendations.",
    url: `${siteConfig.url}/free-website-audit`,
  },
  alternates: {
    canonical: `${siteConfig.url}/free-website-audit`,
  },
};

const auditIncludes = [
  {
    icon: Zap,
    title: "Performance Analysis",
    description:
      "Page speed, load times, and Core Web Vitals assessment with specific recommendations.",
  },
  {
    icon: Search,
    title: "SEO Health Check",
    description:
      "Technical SEO review including meta tags, structure, and search visibility issues.",
  },
  {
    icon: Smartphone,
    title: "Mobile Experience",
    description:
      "Responsive design evaluation and mobile usability analysis.",
  },
  {
    icon: TrendingUp,
    title: "Conversion Opportunities",
    description:
      "CTA effectiveness, user journey analysis, and conversion rate improvement suggestions.",
  },
];

const socialProof = [
  { value: "500+", label: "Audits Completed" },
  { value: "48hrs", label: "Average Delivery" },
  { value: "100%", label: "Free" },
];

export default function FreeWebsiteAuditPage() {
  return (
    <>
      <JsonLd
        data={generateWebPageSchema({
          title: "Free Website Audit | BK Tech Hub",
          description:
            "Get a free comprehensive website audit with actionable recommendations.",
          url: `${siteConfig.url}/free-website-audit`,
        })}
      />

      <HeroPage
        badge="Free Resource"
        title="Get Your Free"
        titleHighlight="Website Audit"
        description="Discover what's holding your website back. We'll analyze your site and provide actionable recommendations to improve performance, SEO, and conversions."
        breadcrumbs={[{ name: "Free Website Audit", href: "/free-website-audit" }]}
      />

      <Section>
        <Container size="xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Info */}
            <div>
              <h2 className="font-display text-2xl font-bold mb-6">
                What&apos;s Included
              </h2>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {auditIncludes.map((item) => (
                  <Card
                    key={item.title}
                    className="bg-card/50 border-border/50"
                  >
                    <CardContent className="p-5">
                      <div
                        className={cn(
                          "w-10 h-10 rounded-xl flex items-center justify-center mb-3",
                          "bg-gradient-to-br from-primary/20 to-secondary/20"
                        )}
                      >
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="font-medium mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {socialProof.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl font-bold text-gradient">
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust Signals */}
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium mb-1">No Strings Attached</h4>
                      <p className="text-sm text-muted-foreground">
                        This audit is 100% free with no obligations. We believe
                        in providing value upfront. Whether you work with us or
                        not, you&apos;ll walk away with actionable insights.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Form */}
            <div>
              <h2 className="font-display text-2xl font-bold mb-6">
                Request Your Audit
              </h2>
              <AuditForm />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
