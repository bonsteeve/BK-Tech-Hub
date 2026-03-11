"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { primaryNavigation } from "@/content/navigation";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = useMemo(
    () =>
      primaryNavigation.map((item) => {
        const isActive = item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href);
        return {
          ...item,
          isActive,
        };
      }),
    [pathname],
  );

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="container">
        <div className="flex h-20 items-center justify-between gap-4">
          <Link href="/" className="group inline-flex items-center gap-3" aria-label="BK Tech Hub home">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-sm font-bold text-accent">
              BK
            </span>
            <span className="font-heading text-lg font-semibold tracking-tight text-foreground transition-colors group-hover:text-accent">
              BK Tech Hub
            </span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-foreground",
                  item.isActive ? "text-foreground" : "text-muted-foreground",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Button asChild size="default" variant="secondary">
              <Link href="/free-website-audit">Free Audit</Link>
            </Button>
            <Button asChild size="default" variant="primary">
              <Link href="/book-a-call">Book a Call</Link>
            </Button>
          </div>

          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
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
          "border-t border-border/70 bg-background/95 px-4 py-4 transition-[max-height,opacity] duration-200 lg:hidden",
          isOpen ? "max-h-[420px] opacity-100" : "max-h-0 overflow-hidden p-0 opacity-0",
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
                item.isActive ? "bg-muted text-foreground" : "text-muted-foreground hover:bg-muted/70",
              )}
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
            <Button asChild variant="secondary" size="default">
              <Link href="/free-website-audit" onClick={() => setIsOpen(false)}>
                Free Audit
              </Link>
            </Button>
            <Button asChild variant="primary" size="default">
              <Link href="/book-a-call" onClick={() => setIsOpen(false)}>
                Book a Call
              </Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
