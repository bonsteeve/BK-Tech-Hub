import { siteConfig } from "@/lib/site-config";

/** Digits-only international number for wa.me / tel links */
export function getWhatsAppDigits(number = siteConfig.whatsapp) {
  return number.replace(/\D/g, "");
}

export function getWhatsAppUrl(message?: string) {
  const base = `https://wa.me/${getWhatsAppDigits()}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}
