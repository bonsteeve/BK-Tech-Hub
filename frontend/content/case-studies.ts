export type CaseStudy = {
  title: string;
  slug: string;
  industry: string;
  summary: string;
  image: string;
  imageAlt: string;
  challenge: string;
  solution: string;
  impact: string[];
  servicesUsed: string[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
};

export const caseStudies: CaseStudy[] = [
  {
    title: "FinServe Advisory Growth Site",
    slug: "finserve-advisory-growth-site",
    industry: "Financial Services",
    summary:
      "A complete website and messaging redesign that increased consultation leads by 68% in 90 days.",
    image: "/images/site/work-finserve.svg",
    imageAlt: "Financial services performance dashboard graphic from the FinServe case study.",
    challenge:
      "The previous website lacked clarity and trust signals, causing low lead conversion despite consistent traffic.",
    solution:
      "We rebuilt the information architecture, clarified offer positioning, introduced stronger social proof, and optimized CTA pathways with technical SEO improvements.",
    impact: [
      "+68% qualified consultation leads",
      "+42% average session duration",
      "-37% bounce rate on service pages",
    ],
    servicesUsed: ["Web Design & Development", "SEO Optimization", "Branding / Digital Presence"],
    testimonial: {
      quote:
        "We finally have a digital presence that reflects our level of service. Lead quality and confidence improved almost immediately.",
      author: "Grace N.",
      role: "Founder, FinServe Advisory",
    },
  },
  {
    title: "Apex Training Enrollment Engine",
    slug: "apex-training-enrollment-engine",
    industry: "Education",
    summary:
      "SEO-focused platform redesign that doubled monthly inbound applications in one quarter.",
    image: "/images/site/work-apex.svg",
    imageAlt: "Education platform card layout representing the Apex training enrollment project.",
    challenge:
      "Course pages were difficult to navigate and did not rank for high-intent topics, limiting discovery and conversion.",
    solution:
      "BK Tech Hub restructured course taxonomy, rebuilt key landing pages, optimized metadata, and added streamlined inquiry workflows.",
    impact: [
      "+2.1x monthly inbound applications",
      "+88% growth in organic impressions",
      "+54% growth in organic click-through rate",
    ],
    servicesUsed: ["Web Design & Development", "SEO Optimization"],
    testimonial: {
      quote:
        "The new website feels premium and practical. Prospective students find what they need faster and applications are up.",
      author: "David K.",
      role: "Director, Apex Training Institute",
    },
  },
  {
    title: "UrbanNest Showcase & Lead Funnel",
    slug: "urbannest-showcase-and-lead-funnel",
    industry: "Interior Design",
    summary:
      "Portfolio experience and automated lead routing system that cut response time by 75%.",
    image: "/images/site/work-urbannest.svg",
    imageAlt: "Interior design portfolio and lead funnel visual for the UrbanNest case study.",
    challenge:
      "The team spent too much time manually qualifying design inquiries and experienced inconsistent follow-up.",
    solution:
      "We built a visual-first portfolio journey with service-focused landing pages and implemented AI-assisted lead routing and response templates.",
    impact: [
      "-75% first-response time",
      "+49% project-fit lead quality",
      "-30% administrative time spent on inquiries",
    ],
    servicesUsed: ["Web Design & Development", "AI Automation for SMEs"],
    testimonial: {
      quote:
        "The automation workflows gave us breathing room and made our client onboarding much more consistent.",
      author: "Martha W.",
      role: "Operations Lead, UrbanNest Interiors",
    },
  },
];

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
