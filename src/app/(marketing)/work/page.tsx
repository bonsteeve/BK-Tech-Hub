import { Metadata } from "next";
import { JsonLd } from "@/components/seo";
import { generateWebPageSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/constants";
import { WorkPageContent } from "./work-page-content";

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
      <WorkPageContent />
    </>
  );
}
