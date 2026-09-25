"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

type HeroVideoProps = {
  src?: string;
  poster?: string;
  /** "cover" fills the parent hero; "card" is the side media preview */
  variant?: "cover" | "card";
  className?: string;
};

export function HeroVideo({
  src = "/videos/conversaos_hero_en.mp4",
  poster = "/videos/hero-poster.jpg",
  variant = "card",
  className,
}: HeroVideoProps) {
  const shouldReduceMotion = useReducedMotion();
  const [failed, setFailed] = useState(false);
  const [posterFailed, setPosterFailed] = useState(false);
  const isCover = variant === "cover";

  useEffect(() => {
    setFailed(false);
    setPosterFailed(false);
  }, [src]);

  if (shouldReduceMotion || failed) {
    if (isCover) {
      return (
        <div className={cn("absolute inset-0 bg-navy", className)} aria-hidden>
          {!posterFailed ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={poster}
              alt=""
              className="h-full w-full object-cover"
              onError={() => setPosterFailed(true)}
            />
          ) : null}
        </div>
      );
    }

    return (
      <div className="relative aspect-video w-full max-w-[520px] overflow-hidden rounded-3xl border border-white/15 bg-navy/80 shadow-2xl">
        {!posterFailed ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={poster}
            alt="ConversaOS WhatsApp automation preview"
            className="h-full w-full object-cover"
            onError={() => setPosterFailed(true)}
          />
        ) : (
          <div className="flex h-full min-h-[240px] items-center justify-center p-6 text-center text-sm text-white/70">
            Video unavailable. Switch hero visual back to{" "}
            <span className="text-brand-yellow">phone</span> in homepage content.
          </div>
        )}
      </div>
    );
  }

  if (isCover) {
    return (
      <div className={cn("absolute inset-0 overflow-hidden", className)} aria-hidden>
        <video
          className="h-full w-full scale-105 object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={posterFailed ? undefined : poster}
          onError={() => setFailed(true)}
        >
          <source src={src} type="video/mp4" />
        </video>
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-[520px] overflow-hidden rounded-3xl border border-white/15 shadow-2xl ring-1 ring-brand-yellow/20">
      <video
        className="aspect-video h-auto w-full bg-navy object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster={posterFailed ? undefined : poster}
        onError={() => setFailed(true)}
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}
