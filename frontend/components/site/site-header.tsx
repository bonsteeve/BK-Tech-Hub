"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import { BrandLogo } from "@/components/site/brand-logo";
import { Button } from "@/components/ui/button";
import { primaryNavigation } from "@/content/navigation";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const links = useMemo(
    () =>
      primaryNavigation.map((item) => {
        const isActive = item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href);
        return { ...item, isActive };
      }),
    [pathname],
  );

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy">
      <div className="container">
        <div className="flex h-20 items-center justify-between gap-4">
          <BrandLogo variant="dark" />

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-brand-yellow",
                  item.isActive ? "text-brand-yellow" : "text-white/80",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href={siteConfig.signInUrl}
              className="text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              Sign in
            </Link>
            <Link
              href={siteConfig.signUpUrl}
              className="text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              Sign up
            </Link>
            <Button asChild size="default" variant="primary">
              <Link href="/book-a-demo">Book a Demo</Link>
            </Button>
          </div>

          <Button
            variant="ghost"
            size="sm"
            className="text-white hover:bg-white/10 lg:hidden"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={cn(
          "border-t border-white/10 bg-navy px-4 py-4 transition-[max-height,opacity] duration-200 lg:hidden",
          isOpen ? "max-h-[520px] opacity-100" : "max-h-0 overflow-hidden p-0 opacity-0",
        )}
      >
        <nav className="container flex flex-col gap-2" aria-label="Mobile navigation">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium",
                item.isActive ? "bg-white/10 text-brand-yellow" : "text-white/80 hover:bg-white/5",
              )}
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-4 grid grid-cols-1 gap-2">
            <Button asChild variant="outline" className="border-white/30 text-white hover:bg-white/10">
              <Link href={siteConfig.signInUrl} onClick={() => setIsOpen(false)}>
                Sign in
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-white/30 text-white hover:bg-white/10">
              <Link href={siteConfig.signUpUrl} onClick={() => setIsOpen(false)}>
                Sign up
              </Link>
            </Button>
            <Button asChild variant="primary">
              <Link href="/book-a-demo" onClick={() => setIsOpen(false)}>
                Book a Demo
              </Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
