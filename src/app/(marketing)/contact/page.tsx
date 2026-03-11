import { Metadata } from "next";
import Link from "next/link";
import { Mail, Clock, ArrowRight } from "lucide-react";
import { HeroPage } from "@/components/sections/hero-page";
import { Container, Section } from "@/components/layout";
import { ContactForm } from "@/components/forms";
import { Card, CardContent } from "@/components/ui/card";
import { JsonLd } from "@/components/seo";
import { generateWebPageSchema, generateLocalBusinessSchema } from "@/lib/schema";
import { siteConfig, ctaLinks } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with BK Tech Hub. Let's discuss your project and how we can help you achieve your digital goals.",
  openGraph: {
    title: "Contact Us | BK Tech Hub",
    description: "Get in touch with BK Tech Hub. Let's discuss your project.",
    url: `${siteConfig.url}/contact`,
  },
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
};

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "We'll respond within 24 hours",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: Clock,
    title: "Book a Call",
    description: "Schedule a free strategy call",
    value: "Choose your time",
    href: ctaLinks.bookCall.href,
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[
          generateLocalBusinessSchema(),
          generateWebPageSchema({
            title: "Contact Us | BK Tech Hub",
            description:
              "Get in touch with BK Tech Hub. Let's discuss your project.",
            url: `${siteConfig.url}/contact`,
          }),
        ]}
      />

      <HeroPage
        title="Let's Build Something"
        titleHighlight="Great Together"
        description="Ready to transform your digital presence? Get in touch and let's discuss how we can help you achieve your goals."
        breadcrumbs={[{ name: "Contact", href: "/contact" }]}
      />

      <Section>
        <Container size="xl">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Methods */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <h2 className="font-display text-2xl font-bold mb-4">
                  Get in Touch
                </h2>
                <p className="text-muted-foreground">
                  Choose the method that works best for you.
                </p>
              </div>

              {contactMethods.map((method) => (
                <Link key={method.title} href={method.href}>
                  <Card className="bg-card/50 border-border/50 hover:border-primary/30 transition-all group">
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                        <method.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium mb-1 group-hover:text-primary transition-colors">
                          {method.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-1">
                          {method.description}
                        </p>
                        <p className="text-sm text-primary">{method.value}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </CardContent>
                  </Card>
                </Link>
              ))}

              {/* Response Time */}
              <div className="p-4 rounded-xl bg-muted/30 border border-border/50">
                <h4 className="font-medium mb-2">Typical Response Time</h4>
                <p className="text-sm text-muted-foreground">
                  We respond to all inquiries within 24 hours during business days.
                  For urgent matters, book a call for faster response.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <h2 className="font-display text-2xl font-bold mb-6">
                Send Us a Message
              </h2>
              <ContactForm />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
