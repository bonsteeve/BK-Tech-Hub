export type Service = {
  name: string;
  slug: string;
  summary: string;
  description: string;
  idealFor: string[];
  outcomes: string[];
  deliverables: string[];
  process: string[];
  faq: { question: string; answer: string }[];
};

export const services: Service[] = [
  {
    name: "Web Design & Development",
    slug: "web-design-development",
    summary:
      "Premium websites designed for trust, speed, and conversion with a modern technical architecture.",
    description:
      "We design and build custom marketing websites that clearly communicate your offer, guide users to action, and load quickly across devices. Every build includes conversion strategy, scalable components, and clean implementation standards.",
    idealFor: [
      "Businesses with outdated websites",
      "Founders launching a new offer",
      "Teams that need stronger conversion flow",
    ],
    outcomes: [
      "Higher qualified lead volume",
      "Improved user trust and engagement",
      "Faster performance and cleaner UX",
    ],
    deliverables: [
      "Conversion-led sitemap and wireframes",
      "Custom UI design system",
      "Responsive Next.js implementation",
      "Analytics and conversion event setup",
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
        answer: "Yes. We can either optimize your current website or rebuild based on the ROI potential identified during discovery.",
      },
      {
        question: "Can this integrate with our CRM?",
        answer: "Yes. We prepare forms and tracking to connect with common CRM and sales workflows.",
      },
    ],
  },
  {
    name: "SEO Optimization",
    slug: "seo-optimization",
    summary:
      "Technical and on-page SEO implementation that helps your business rank for relevant, high-intent searches.",
    description:
      "We build a solid SEO foundation by fixing structure, metadata, internal linking, and content hierarchy. The goal is sustainable visibility and qualified inbound traffic, not vanity metrics.",
    idealFor: [
      "Websites with low organic visibility",
      "Businesses expanding into new markets",
      "Teams publishing content without ranking gains",
    ],
    outcomes: [
      "Higher rankings for target topics",
      "Improved crawlability and indexing",
      "Better alignment between content and user intent",
    ],
    deliverables: [
      "Technical SEO audit and action plan",
      "Metadata and schema implementation",
      "Internal link architecture",
      "Content structure and page-level recommendations",
      "Search performance tracking setup",
    ],
    process: [
      "Baseline audit and priority mapping",
      "Implementation of high-impact technical fixes",
      "On-page optimization and content framework",
      "Monitoring and refinement cycle",
    ],
    faq: [
      {
        question: "How long until we see SEO results?",
        answer: "Initial improvements can be visible in weeks, while stronger ranking movement often builds over 3-6 months.",
      },
      {
        question: "Do you provide content guidance?",
        answer: "Yes. We provide practical content structure recommendations aligned to your services and search intent.",
      },
    ],
  },
  {
    name: "AI Automation for SMEs",
    slug: "ai-automation-for-smes",
    summary:
      "Practical automation systems that reduce manual tasks and improve speed across lead handling and operations.",
    description:
      "We map repetitive workflows and implement AI-supported automation for lead qualification, follow-ups, and internal processes. The focus is reliable execution and measurable time savings for your team.",
    idealFor: [
      "Teams spending too much time on repetitive admin",
      "Businesses with slow lead response cycles",
      "Founders scaling without additional headcount",
    ],
    outcomes: [
      "Faster response and follow-up consistency",
      "Reduced manual operational burden",
      "More predictable internal workflows",
    ],
    deliverables: [
      "Workflow audit and automation opportunity map",
      "Lead routing and qualification workflows",
      "AI-assisted response frameworks",
      "Integration with form, CRM, and communication tools",
      "Team handover and governance playbook",
    ],
    process: [
      "Operational diagnosis and target KPI definition",
      "Workflow design and automation blueprint",
      "Implementation and system testing",
      "Optimization based on usage and outcomes",
    ],
    faq: [
      {
        question: "Will automation replace our team?",
        answer: "No. The objective is to remove repetitive work so your team can focus on higher-value decisions and client interactions.",
      },
      {
        question: "Can this work with our existing tools?",
        answer: "In most cases yes. We design around your current stack before introducing new platforms.",
      },
    ],
  },
  {
    name: "Branding / Digital Presence",
    slug: "branding-digital-presence",
    summary:
      "Strengthen your brand identity and digital consistency so clients trust you faster and convert with confidence.",
    description:
      "We help businesses align their brand story, visual language, and digital touchpoints. The result is a stronger market position and a more coherent experience across website, social, and sales assets.",
    idealFor: [
      "Businesses repositioning in a competitive market",
      "Teams with inconsistent visual identity",
      "Founders improving perceived brand quality",
    ],
    outcomes: [
      "Clearer market positioning",
      "Consistent digital brand presentation",
      "Higher trust at first interaction",
    ],
    deliverables: [
      "Brand positioning and messaging framework",
      "Visual direction and brand usage guidelines",
      "Website and social presence alignment",
      "Digital asset refinement roadmap",
      "Brand consistency checklists",
    ],
    process: [
      "Brand and audience discovery",
      "Positioning and narrative definition",
      "Visual system and touchpoint alignment",
      "Rollout guidance and optimization",
    ],
    faq: [
      {
        question: "Can branding work be combined with website redesign?",
        answer: "Yes. This is one of the most effective combinations for businesses that need stronger positioning and conversion.",
      },
      {
        question: "Do you offer ongoing brand support?",
        answer: "Yes. We can support implementation and consistency checks as your business scales.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
