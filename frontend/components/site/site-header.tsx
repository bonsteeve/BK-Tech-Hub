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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = useMemo(
    () =>
      primaryNavigation.map((item) => {
        const isActive = item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href);
        return { ...item, isActive };
      }),
    [pathname],
  );

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4">
        <div
          className={cn(
            "pointer-events-auto mx-auto max-w-7xl overflow-hidden rounded-2xl border transition-[background-color,box-shadow,border-color] duration-300",
            scrolled || isOpen
              ? "border-white/15 bg-navy/90 shadow-2xl shadow-navy/40 backdrop-blur-xl"
              : "border-white/10 bg-navy/75 shadow-lg shadow-navy/25 backdrop-blur-md",
          )}
        >
          <div className="px-4 sm:px-6 lg:px-7">
            <div className="flex h-[4.5rem] items-center justify-between gap-4 sm:h-[4.75rem]">
              <BrandLogo variant="dark" />

              <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
                {links.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "text-[15px] font-medium transition-colors hover:text-brand-yellow sm:text-base",
                      item.isActive ? "text-brand-yellow" : "text-white/80",
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <div className="hidden items-center gap-3 lg:flex">
                <Button
                  asChild
                  size="default"
                  variant="secondary"
                  className="border-brand-yellow/60 bg-brand-yellow/15 text-brand-yellow hover:bg-brand-yellow hover:text-navy"
                >
                  <a href={siteConfig.signInUrl} target="_blank" rel="noopener noreferrer">
                    {siteConfig.signInLabel}
                  </a>
                </Button>
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
              "border-t border-white/10 px-4 py-4 transition-[max-height,opacity] duration-200 lg:hidden",
              isOpen ? "max-h-[520px] opacity-100" : "max-h-0 overflow-hidden border-t-0 p-0 opacity-0",
            )}
          >
            <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
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
                <Button
                  asChild
                  variant="secondary"
                  className="border-brand-yellow/60 bg-brand-yellow/15 text-brand-yellow hover:bg-brand-yellow hover:text-navy"
                >
                  <a
                    href={siteConfig.signInUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                  >
                    {siteConfig.signInLabel}
                  </a>
                </Button>
                <Button asChild variant="primary">
                  <Link href="/book-a-demo" onClick={() => setIsOpen(false)}>
                    Book a Demo
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        </div>
      </header>
      {/* Reserve space so page content clears the fixed floating bar */}
      <div className="h-[5.25rem] sm:h-[5.75rem]" aria-hidden />
    </>
  );
}
