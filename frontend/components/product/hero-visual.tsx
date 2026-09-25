"use client";

import { WhatsAppPhoneMock } from "@/components/product/whatsapp-phone-mock";
import { HeroVideo } from "@/components/product/hero-video";
import { FadeIn } from "@/components/shared/fade-in";

type HeroVisualProps = {
  mode: "phone" | "video";
  videoSrc?: string;
  videoPoster?: string;
};

/** Switch via homeContent.hero.visual — "phone" (animated demo) or "video" (MP4 slot). */
export function HeroVisual({ mode, videoSrc, videoPoster }: HeroVisualProps) {
  return (
    <FadeIn delay={0.15} className="flex justify-center lg:justify-end">
      {mode === "video" ? (
        <HeroVideo src={videoSrc} poster={videoPoster} />
      ) : (
        <WhatsAppPhoneMock />
      )}
    </FadeIn>
  );
}
