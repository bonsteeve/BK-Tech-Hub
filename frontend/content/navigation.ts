import { siteConfig } from "@/lib/site-config";

export const primaryNavigation = [
  { href: "/", label: "Home" },
  { href: "/conversaos", label: "ConversaOS" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
] as const;

export const footerNavigation = {
  product: [
    { href: "/conversaos", label: "ConversaOS" },
    { href: "/book-a-demo", label: "Book a Demo" },
  ],
  services: [
    { href: "/services/website-creation", label: "Website Creation" },
    { href: "/services/hosting", label: "Hosting" },
    { href: "/services/seo", label: "SEO" },
  ],
  company: [
    { href: "/contact", label: "Contact" },
    { href: "/blog", label: "Insights" },
  ],
  conversion: [
    { href: "/book-a-demo", label: "Book a Demo" },
    { href: siteConfig.signUpUrl, label: "Sign up" },
  ],
} as const;
