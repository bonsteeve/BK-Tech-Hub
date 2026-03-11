"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Container } from "./container";
import { navigation, ctaLinks } from "@/lib/constants";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-background/80 backdrop-blur-lg border-b border-border"
            : "bg-transparent"
        )}
      >
        <Container size="xl">
          <nav className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 font-display font-bold text-xl"
            >
              <span className="text-gradient">BK</span>
              <span className="text-foreground">Tech Hub</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button
                  className={cn(
                    "flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors",
                    "text-muted-foreground hover:text-foreground"
                  )}
                >
                  Services
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition-transform",
                      isServicesOpen && "rotate-180"
                    )}
                  />
                </button>
                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 pt-2"
                    >
                      <div className="w-72 rounded-xl border border-border bg-popover/95 backdrop-blur-lg p-2 shadow-xl">
                        {navigation.services.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            className="block rounded-lg px-4 py-3 transition-colors hover:bg-muted"
                          >
                            <div className="font-medium text-sm text-foreground">
                              {service.name}
                            </div>
                            <div className="text-xs text-muted-foreground mt-0.5">
                              {service.description}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Other Nav Items */}
              {navigation.main
                .filter((item) => item.name !== "Services")
                .map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "px-4 py-2 text-sm font-medium transition-colors",
                      "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-4">
              <Button asChild>
                <Link href={ctaLinks.bookCall.href}>
                  {ctaLinks.bookCall.text}
                </Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </nav>
        </Container>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-background border-l border-border"
            >
              <div className="flex flex-col h-full pt-20 pb-8 px-6">
                <nav className="flex-1 space-y-2">
                  {/* Services Section */}
                  <div className="py-2">
                    <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                      Services
                    </div>
                    {navigation.services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>

                  <div className="border-t border-border my-4" />

                  {/* Main Navigation */}
                  {navigation.main
                    .filter((item) => item.name !== "Services")
                    .map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block py-3 text-lg font-medium text-foreground hover:text-primary transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                </nav>

                {/* Mobile CTA */}
                <div className="mt-auto space-y-3">
                  <Button asChild className="w-full">
                    <Link href={ctaLinks.bookCall.href}>
                      {ctaLinks.bookCall.text}
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={ctaLinks.freeAudit.href}>
                      {ctaLinks.freeAudit.text}
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
