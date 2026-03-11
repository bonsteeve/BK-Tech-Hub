export const primaryNavigation = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Insights" },
  { href: "/contact", label: "Contact" },
] as const;

export const footerNavigation = {
  services: [
    { href: "/services/web-design-development", label: "Web Design & Development" },
    { href: "/services/seo-optimization", label: "SEO Optimization" },
    { href: "/services/ai-automation-for-smes", label: "AI Automation for SMEs" },
    { href: "/services/branding-digital-presence", label: "Branding / Digital Presence" },
  ],
  company: [
    { href: "/about", label: "About" },
    { href: "/work", label: "Case Studies" },
    { href: "/blog", label: "Insights" },
    { href: "/contact", label: "Contact" },
  ],
  conversion: [
    { href: "/book-a-call", label: "Book a Call" },
    { href: "/free-website-audit", label: "Free Website Audit" },
  ],
} as const;
