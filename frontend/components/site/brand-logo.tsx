import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";

type BrandLogoProps = {
  variant?: "light" | "dark";
  className?: string;
};

/**
 * BK Tech Hub mark + wordmark:
 * "BK TECH" primary color, "HUB" yellow, slogan underneath.
 */
export function BrandLogo({ variant = "dark", className }: BrandLogoProps) {
  const onDark = variant === "dark";

  return (
    <Link
      href="/"
      className={cn("group inline-flex items-center gap-2.5 sm:gap-3", className)}
      aria-label="BK Tech Hub home"
    >
      <Image
        src={onDark ? "/images/brand/logo-mark-on-dark.svg" : "/images/brand/logo-mark.svg"}
        alt=""
        width={40}
        height={40}
        className="h-9 w-9 shrink-0 sm:h-10 sm:w-10"
        priority
      />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-heading text-base font-extrabold tracking-tight uppercase sm:text-lg",
            onDark ? "text-white" : "text-navy",
          )}
        >
          BK TECH <span className="text-brand-yellow">HUB</span>
        </span>
        <span className="mt-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-brand-yellow sm:text-[10px]">
          Automate the World
        </span>
      </span>
    </Link>
  );
}
