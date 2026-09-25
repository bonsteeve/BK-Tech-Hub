"use client";

import { motion, useReducedMotion } from "framer-motion";

import { getWhatsAppUrl } from "@/lib/whatsapp";
import { siteConfig } from "@/lib/site-config";

const defaultMessage =
  "Hi BK Tech Hub — I'd like to learn more about ConversaOS / your services.";

export function FloatingWhatsApp() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="fixed bottom-5 right-5 z-[60] sm:bottom-7 sm:right-7">
      <div className="relative">
        {!shouldReduceMotion ? (
          <>
            <span className="whatsapp-ping pointer-events-none absolute left-0 top-0 h-14 w-14 rounded-full bg-[#25D366]/55" />
            <span className="whatsapp-ping-delay pointer-events-none absolute left-0 top-0 h-14 w-14 rounded-full bg-[#25D366]/35" />
          </>
        ) : null}

        <motion.a
          href={getWhatsAppUrl(defaultMessage)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Chat with BK Tech Hub on WhatsApp (${siteConfig.whatsapp})`}
          className="group relative z-10 flex items-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(0,0,0,0.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  y: [0, -10, 0, -6, 0],
                  rotate: [0, -8, 6, -4, 0],
                  scale: [1, 1.06, 1, 1.04, 1],
                }
          }
          transition={
            shouldReduceMotion
              ? undefined
              : {
                  duration: 2.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatDelay: 0.35,
                }
          }
          whileHover={shouldReduceMotion ? undefined : { scale: 1.08, rotate: 0, y: -4 }}
          whileTap={{ scale: 0.96 }}
        >
          <span className="relative z-10 flex h-14 w-14 items-center justify-center">
            <motion.span
              animate={
                shouldReduceMotion ? undefined : { rotate: [0, -12, 10, -8, 0] }
              }
              transition={
                shouldReduceMotion
                  ? undefined
                  : { duration: 2.4, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.35 }
              }
            >
              <WhatsAppIcon className="h-7 w-7" />
            </motion.span>
          </span>
          <span className="max-w-0 overflow-hidden whitespace-nowrap pr-0 text-sm font-semibold opacity-0 transition-all duration-300 group-hover:max-w-[9rem] group-hover:pr-4 group-hover:opacity-100 group-focus-visible:max-w-[9rem] group-focus-visible:pr-4 group-focus-visible:opacity-100">
            Chat with us
          </span>
        </motion.a>
      </div>
    </div>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" className={className} aria-hidden>
      <path d="M16.01 3C9.39 3 4 8.38 4 14.99c0 2.64.86 5.08 2.32 7.07L4.7 28.3l6.45-1.69A11.9 11.9 0 0 0 16.01 27C22.63 27 28 21.62 28 14.99 28 8.38 22.63 3 16.01 3zm0 21.73c-2.12 0-4.1-.62-5.77-1.7l-.41-.26-3.83 1 .99-3.73-.27-.44a9.7 9.7 0 0 1-1.5-5.2c0-5.37 4.38-9.74 9.79-9.74 5.4 0 9.78 4.37 9.78 9.74 0 5.38-4.38 9.73-9.78 9.73zm5.37-7.3c-.29-.15-1.73-.85-2-.95-.27-.1-.46-.14-.66.15-.19.29-.76.95-.93 1.14-.17.2-.34.22-.63.07-.29-.14-1.23-.45-2.34-1.44-.86-.77-1.45-1.72-1.62-2.01-.17-.29-.02-.45.13-.59.13-.13.29-.34.43-.51.15-.17.19-.29.29-.49.1-.19.05-.37-.02-.52-.07-.14-.66-1.59-.9-2.18-.24-.57-.48-.49-.66-.5h-.56c-.19 0-.5.07-.76.37-.26.29-1 1-1 2.43s1.03 2.82 1.17 3.01c.15.19 2.02 3.08 4.89 4.32.68.3 1.22.47 1.63.6.69.22 1.31.19 1.8.11.55-.08 1.73-.71 1.97-1.39.24-.68.24-1.27.17-1.39-.07-.12-.26-.2-.55-.34z" />
    </svg>
  );
}
