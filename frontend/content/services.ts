export type Service = {
  name: string;
  slug: string;
  summary: string;
  description: string;
  image: string;
  imageAlt: string;
  accent: string;
  idealFor: string[];
  outcomes: string[];
  deliverables: string[];
  process: string[];
  faq: { question: string; answer: string }[];
};

export const services: Service[] = [
  {
    name: "Website Creation",
    slug: "website-creation",
    summary:
      "Premium, conversion-focused websites engineered for trust, speed, and qualified lead generation.",
    description:
      "BK Tech Hub designs and builds custom marketing websites that clearly communicate your offer, guide visitors to action, and perform well on every device. Pair your new site with BK Chat to capture WhatsApp leads the moment interest peaks.",
    image: "/images/marketing/service-websites.jpg",
    imageAlt: "Modern website design on a studio desk",
    accent: "Build a site that sells",
    idealFor: [
      "Businesses with outdated websites",
      "Founders launching a new offer",
      "Teams that need stronger conversion flow",
    ],
    outcomes: [
      "Higher qualified lead volume",
      "Improved trust and engagement",
      "Faster performance and clearer UX",
    ],
    deliverables: [
      "Conversion-led sitemap and wireframes",
      "Custom UI design system",
      "Responsive modern web implementation",
      "Analytics and conversion tracking",
      "Performance optimization",
    ],
    process: [
      "Discovery workshop and growth goals alignment",
      "UX strategy, content architecture, and visual direction",
      "Development with QA, performance, and accessibility checks",
      "Launch support and iteration roadmap",
    ],
    faq: [
      {
        question: "Do you redesign existing websites?",
        answer:
          "Yes. We optimize your current site or rebuild based on the ROI potential identified during discovery.",
      },
      {
        question: "Can this work with BK Chat?",
        answer:
          "Absolutely. Many clients combine a high-converting website with BK Chat WhatsApp automation.",
      },
    ],
  },
  {
    name: "Hosting",
    slug: "hosting",
    summary:
      "Reliable, secure hosting so your website stays fast, available, and ready for growth.",
    description:
      "We host and maintain business websites with uptime monitoring, SSL, backups, and performance-minded infrastructure — so you focus on customers, not servers.",
    image: "/images/marketing/service-hosting-seo.jpg",
    imageAlt: "Secure hosting and infrastructure environment",
    accent: "Stay fast. Stay online.",
    idealFor: [
      "Businesses launching a new site",
      "Teams tired of downtime or slow loads",
      "Companies wanting managed maintenance",
    ],
    outcomes: [
      "Better uptime and reliability",
      "Faster page loads",
      "Less technical overhead for your team",
    ],
    deliverables: [
      "Managed hosting setup",
      "SSL and security basics",
      "Backup and recovery routine",
      "Uptime monitoring",
      "Performance tuning",
    ],
    process: [
      "Audit current hosting and requirements",
      "Provision and configure environment",
      "Migrate or deploy your site",
      "Ongoing monitoring and support",
    ],
    faq: [
      {
        question: "Do you host sites you didn’t build?",
        answer: "Yes. We can migrate and host existing sites after a compatibility review.",
      },
      {
        question: "Is SSL included?",
        answer: "Yes. Secure HTTPS is part of our standard hosting setup.",
      },
    ],
  },
  {
    name: "SEO",
    slug: "seo",
    summary:
      "Technical and on-page SEO that helps your business rank for high-intent searches.",
    description:
      "We build a solid SEO foundation — structure, metadata, internal linking, and content hierarchy — so you earn sustainable visibility and qualified inbound traffic.",
    image: "/images/marketing/conversaos-lifestyle.jpg",
    imageAlt: "Growth-focused digital workspace for SEO strategy",
    accent: "Get found by the right customers",
    idealFor: [
      "Websites with low organic visibility",
      "Businesses expanding into new markets",
      "Teams publishing content without ranking gains",
    ],
    outcomes: [
      "Higher rankings for target topics",
      "Improved crawlability and indexing",
      "Better alignment between content and intent",
    ],
    deliverables: [
      "Technical SEO audit and action plan",
      "Metadata and schema implementation",
      "Internal link architecture",
      "Content structure recommendations",
      "Search performance tracking setup",
    ],
    process: [
      "Baseline audit and priority mapping",
      "High-impact technical fixes",
      "On-page optimization and content framework",
      "Monitoring and refinement cycle",
    ],
    faq: [
      {
        question: "How long until we see SEO results?",
        answer:
          "Initial improvements can appear in weeks; stronger ranking movement often builds over 3–6 months.",
      },
      {
        question: "Do you provide content guidance?",
        answer:
          "Yes. We provide practical content structure recommendations aligned to your services and search intent.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
