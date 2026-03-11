export const siteConfig = {
  name: "BK Tech Hub",
  legalName: "BK Tech Hub",
  description:
    "BK Tech Hub builds conversion-focused websites, SEO-ready digital experiences, and AI automation systems for growing businesses.",
  url: "https://www.bktechhub.com",
  email: "hello@bktechhub.com",
  phone: "+254 700 000 000",
  location: {
    country: "Kenya",
    region: "Nairobi County",
    city: "Nairobi",
  },
  socials: {
    linkedin: "https://www.linkedin.com",
    instagram: "https://www.instagram.com",
  },
} as const;

export type SiteConfig = typeof siteConfig;
