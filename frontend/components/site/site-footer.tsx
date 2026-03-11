import Link from "next/link";

import { footerNavigation } from "@/content/navigation";
import { siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70 bg-background/70">
      <div className="container py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="space-y-5">
            <p className="inline-flex rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-accent">
              BK Tech Hub
            </p>
            <h3 className="font-heading text-2xl font-semibold tracking-tight">
              Modern websites and automation systems that drive qualified leads.
            </h3>
            <p className="max-w-sm text-sm text-muted-foreground">{siteConfig.description}</p>
            <div className="space-y-1 text-sm text-muted-foreground">
              <p>{siteConfig.email}</p>
              <p>{siteConfig.phone}</p>
              <p>
                {siteConfig.location.city}, {siteConfig.location.country}
              </p>
            </div>
          </div>

          <FooterColumn title="Services" links={footerNavigation.services} />
          <FooterColumn title="Company" links={footerNavigation.company} />
          <FooterColumn title="Start Here" links={footerNavigation.conversion} />
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-border/70 pt-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/contact" className="transition-colors hover:text-foreground">
              Contact
            </Link>
            <Link href="/book-a-call" className="transition-colors hover:text-foreground">
              Book a Call
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
      <h4 className="font-heading text-base font-semibold text-foreground">{title}</h4>
      <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="transition-colors hover:text-foreground">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
