export const siteConfig = {
  name: "BK Tech Hub",
  legalName: "BK Tech Hub",
  tagline: "AUTOMATE THE WORLD",
  productName: "ConversaOS",
  description:
    "BK Tech Hub helps businesses Automate the World — WhatsApp AI with ConversaOS, process automation, websites, hosting, and SEO.",
  url: "https://www.bktechhub.com",
  email: "info@bktechhub.com",
  phone: "+254 713 549 524",
  /** Same as phone — used for floating chat + wa.me links */
  whatsapp: "+254 713 549 524",
  /** Where form leads are delivered (email + WhatsApp, in parallel) */
  leads: {
    email: "kiokomutukubonface@gmail.com",
    whatsapp: "+254713549524",
  },
  location: {
    country: "Kenya",
    region: "Nairobi County",
    city: "Nairobi",
  },
  socials: {
    linkedin: "https://www.linkedin.com",
    instagram: "https://www.instagram.com",
  },
  /** ConversaOS app — login + account creation share the same page */
  conversaosUrl: "https://conversaos.bktechhub.com",
  signInUrl: "https://conversaos.bktechhub.com/login",
  signUpUrl: "https://conversaos.bktechhub.com/login",
  signInLabel: "Sign in to ConversaOS",
  demoPath: "/book-a-demo",
} as const;

export type SiteConfig = typeof siteConfig;
