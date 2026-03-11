import { Metadata } from "next";
import { CheckCircle, Clock, Video, Shield } from "lucide-react";
import { HeroPage } from "@/components/sections/hero-page";
import { Container, Section } from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { JsonLd } from "@/components/seo";
import { generateWebPageSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/constants";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Book a Free Strategy Call",
  description:
    "Schedule a free 30-minute strategy call with BK Tech Hub. We'll discuss your goals, challenges, and how we can help you succeed online.",
  openGraph: {
    title: "Book a Free Strategy Call | BK Tech Hub",
    description:
      "Schedule a free 30-minute strategy call. Let's discuss your digital goals.",
    url: `${siteConfig.url}/book-a-call`,
  },
  alternates: {
    canonical: `${siteConfig.url}/book-a-call`,
  },
};

const benefits = [
  "Discuss your business goals and challenges",
  "Get expert insights on your current digital presence",
  "Explore potential solutions tailored to your needs",
  "Understand our process and how we work",
  "Get a custom project recommendation",
  "No pressure, no obligations",
];

const details = [
  { icon: Clock, text: "30 minutes" },
  { icon: Video, text: "Video call (Zoom/Google Meet)" },
  { icon: Shield, text: "100% free, no strings attached" },
];

export default function BookACallPage() {
  return (
    <>
      <JsonLd
        data={generateWebPageSchema({
          title: "Book a Free Strategy Call | BK Tech Hub",
          description:
            "Schedule a free 30-minute strategy call. Let's discuss your digital goals.",
          url: `${siteConfig.url}/book-a-call`,
        })}
      />

      <HeroPage
        badge="Free Consultation"
        title="Book Your Free"
        titleHighlight="Strategy Call"
        description="Let's talk about your business goals and explore how we can help you succeed online. No sales pressure, just helpful advice."
        breadcrumbs={[{ name: "Book a Call", href: "/book-a-call" }]}
      />

      <Section>
        <Container size="xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Info */}
            <div>
              <h2 className="font-display text-2xl font-bold mb-6">
                What to Expect
              </h2>

              <div className="space-y-4 mb-8">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 mb-8">
                {details.map((detail) => (
                  <div
                    key={detail.text}
                    className={cn(
                      "flex items-center gap-2 px-4 py-2 rounded-full",
                      "bg-muted/30 border border-border/50"
                    )}
                  >
                    <detail.icon className="w-4 h-4 text-primary" />
                    <span className="text-sm">{detail.text}</span>
                  </div>
                ))}
              </div>

              {/* Testimonial */}
              <Card className="bg-card/50 border-border/50">
                <CardContent className="p-6">
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;The strategy call was incredibly helpful. They took the time
                    to understand our challenges and provided actionable insights
                    even before we started working together.&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">
                      SK
                    </div>
                    <div>
                      <div className="font-medium text-sm">Sarah Kim</div>
                      <div className="text-xs text-muted-foreground">
                        Founder, TechStart Inc.
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Calendar Embed */}
            <div>
              <Card className="bg-card/50 border-border/50 overflow-hidden">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4">
                    Choose a Time That Works
                  </h3>
                  
                  {/* Placeholder for calendar embed */}
                  <div className="aspect-square rounded-xl bg-muted/30 border border-border flex items-center justify-center">
                    <div className="text-center p-8">
                      <p className="text-muted-foreground mb-4">
                        Calendar booking widget will be embedded here.
                      </p>
                      <p className="text-sm text-muted-foreground">
                        (Integrate with Calendly, Cal.com, or similar)
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-center text-muted-foreground mt-4">
                    All times shown in your local timezone
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
