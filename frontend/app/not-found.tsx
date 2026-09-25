import Link from "next/link";

import { Section } from "@/components/shared/section";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Section className="pt-24 text-center md:pt-32">
      <p className="inline-flex rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-accent">
        404
      </p>
      <h1 className="mt-4 font-heading text-4xl font-semibold tracking-tight md:text-5xl">
        Page Not Found
      </h1>
      <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
        The page you requested does not exist or may have moved.
      </p>
      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <Button asChild size="lg">
          <Link href="/">Back to Home</Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link href="/contact">Contact BK Tech Hub</Link>
        </Button>
      </div>
    </Section>
  );
}
