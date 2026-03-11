import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { JsonLd } from "@/components/seo/json-ld";
import { CaseStudyTemplate } from "@/components/work/case-study-template";
import { caseStudies, getCaseStudyBySlug } from "@/content/case-studies";
import { createPageMetadata } from "@/lib/seo";
import { buildBreadcrumbSchema } from "@/lib/schema";

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    return { title: "Case Study Not Found" };
  }

  return createPageMetadata({
    title: caseStudy.title,
    description: caseStudy.summary,
    path: `/work/${caseStudy.slug}`,
    keywords: ["case study", caseStudy.industry, "digital growth results"],
  });
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Work", path: "/work" },
          { name: caseStudy.title, path: `/work/${caseStudy.slug}` },
        ])}
      />
      <CaseStudyTemplate caseStudy={caseStudy} />
    </>
  );
}
