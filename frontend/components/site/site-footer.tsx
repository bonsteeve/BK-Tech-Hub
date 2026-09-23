import Link from "next/link";

import { BrandLogo } from "@/components/site/brand-logo";
import { footerNavigation } from "@/content/navigation";
import { siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-navy text-white">
      <div className="container py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="space-y-5">
            <BrandLogo variant="dark" />
            <h3 className="font-heading text-2xl font-semibold tracking-tight text-white">
              More leads. Less work.
            </h3>
            <p className="max-w-sm text-sm text-white/70">{siteConfig.description}</p>
            <div className="space-y-1 text-sm text-white/70">
              <p>{siteConfig.email}</p>
              <p>{siteConfig.phone}</p>
              <p>
                {siteConfig.location.city}, {siteConfig.location.country}
              </p>
            </div>
          </div>

          <FooterColumn title="Product" links={footerNavigation.product} />
          <FooterColumn title="Services" links={footerNavigation.services} />
          <FooterColumn title="Company" links={footerNavigation.company} />
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-8 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-5">
            <Link href="/book-a-demo" className="transition-colors hover:text-brand-yellow">
              Book a Demo
            </Link>
            <Link href={siteConfig.signUpUrl} className="transition-colors hover:text-brand-yellow">
              Sign up
            </Link>
            <Link href="/contact" className="transition-colors hover:text-brand-yellow">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

type FooterColumnProps = {
  title: string;
  links: readonly { href: string; label: string }[];
};

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div>
      <h4 className="font-heading text-base font-semibold text-white">{title}</h4>
      <ul className="mt-4 space-y-3 text-sm text-white/70">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="transition-colors hover:text-brand-yellow">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
