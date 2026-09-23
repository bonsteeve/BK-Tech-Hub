export const siteConfig = {
  name: "BK Tech Hub",
  legalName: "BK Tech Hub",
  tagline: "AUTOMATE THE WORLD",
  productName: "ConversaOS",
  description:
    "BK Tech Hub builds ConversaOS — AI-powered WhatsApp automation — plus websites, hosting, and SEO for growing businesses.",
  url: "https://www.bktechhub.com",
  email: "info@bktechhub.com",
  phone: "+254 713 549 524",
  /** Same as phone — used for floating chat + wa.me links */
  whatsapp: "+254 713 549 524",
  location: {
    country: "Kenya",
    region: "Nairobi County",
    city: "Nairobi",
  },
  socials: {
    linkedin: "https://www.linkedin.com",
    instagram: "https://www.instagram.com",
  },
  /** Replace with real ConversaOS app URLs when live */
  signInUrl: "https://app.bktechhub.com/signin",
  signUpUrl: "https://app.bktechhub.com/signup",
  demoPath: "/book-a-demo",
} as const;

export type SiteConfig = typeof siteConfig;
