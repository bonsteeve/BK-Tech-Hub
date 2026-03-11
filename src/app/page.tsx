import { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import {
  HeroHome,
  LogoCloud,
  ServicesGrid,
  FeaturedWork,
  WhyChooseUs,
  Process,
  Industries,
  Testimonials,
  FAQ,
  CTASection,
} from "@/components/sections";
import { JsonLd } from "@/components/seo";
import { generateOrganizationSchema, generateWebPageSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "BK Tech Hub | Digital Solutions for Growing Businesses",
  description:
    "We help SMEs and growing businesses generate more leads through stunning websites, strategic SEO, and AI-powered automation. Book a free strategy call today.",
  keywords: [
    "web design",
    "web development",
    "SEO services",
    "AI automation",
    "digital marketing",
    "lead generation",
    "business websites",
    "SME digital solutions",
  ],
  openGraph: {
    title: "BK Tech Hub | Build a Digital Presence That Converts",
    description:
      "We help SMEs and growing businesses generate more leads through stunning websites, strategic SEO, and AI-powered automation.",
    url: siteConfig.url,
    type: "website",
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={[
          generateOrganizationSchema(),
          generateWebPageSchema({
            title: "BK Tech Hub | Digital Solutions for Growing Businesses",
            description:
              "We help SMEs and growing businesses generate more leads through stunning websites, strategic SEO, and AI-powered automation.",
            url: siteConfig.url,
          }),
        ]}
      />

      <Header />

      <main>
        <HeroHome />
        <LogoCloud />
        <ServicesGrid />
        <FeaturedWork />
        <WhyChooseUs />
        <Process />
        <Industries />
        <Testimonials />
        <FAQ />
        <CTASection />
      </main>

      <Footer />
    </>
  );
}
