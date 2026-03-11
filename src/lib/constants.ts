export const siteConfig = {
  name: "BK Tech Hub",
  description:
    "We help ambitious businesses generate more leads through stunning websites, strategic SEO, and AI-powered automation.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://bktechhub.com",
  email: "hello@bktechhub.com",
  phone: "+1 (555) 000-0000",
  address: {
    street: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  },
  social: {
    twitter: "https://twitter.com/bktechhub",
    linkedin: "https://linkedin.com/company/bktechhub",
    github: "https://github.com/bktechhub",
  },
};

export const navigation = {
  main: [
    { name: "Services", href: "/services" },
    { name: "Work", href: "/work" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    {
      name: "Web Design & Development",
      href: "/services/web-design-development",
      description: "Custom websites built for performance and conversions",
    },
    {
      name: "SEO Optimization",
      href: "/services/seo-optimization",
      description: "Get found by your ideal customers",
    },
    {
      name: "AI Automation",
      href: "/services/ai-automation",
      description: "Intelligent systems that save time and reduce costs",
    },
    {
      name: "Branding & Digital Presence",
      href: "/services/branding-digital-presence",
      description: "Stand out in a crowded market",
    },
  ],
  footer: {
    quickLinks: [
      { name: "Services", href: "/services" },
      { name: "Work", href: "/work" },
      { name: "About", href: "/about" },
      { name: "Blog", href: "/blog" },
      { name: "Contact", href: "/contact" },
    ],
    services: [
      { name: "Web Design & Development", href: "/services/web-design-development" },
      { name: "SEO Optimization", href: "/services/seo-optimization" },
      { name: "AI Automation", href: "/services/ai-automation" },
      { name: "Branding", href: "/services/branding-digital-presence" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
    ],
  },
};

export const ctaLinks = {
  bookCall: {
    text: "Book a Call",
    href: "/contact",
  },
  freeAudit: {
    text: "Get Free Audit",
    href: "/contact?type=audit",
  },
  contact: {
    text: "Contact Us",
    href: "/contact",
  },
  viewWork: {
    text: "See Our Work",
    href: "/work",
  },
  viewServices: {
    text: "View Services",
    href: "/services",
  },
};
