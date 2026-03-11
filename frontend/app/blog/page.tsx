import type { Metadata } from "next";
import Link from "next/link";

import { Section } from "@/components/shared/section";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/content/blog-posts";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Blog / Insights",
  description:
    "Insights from BK Tech Hub on web design, SEO, conversion strategy, and AI automation for growing businesses.",
  path: "/blog",
  keywords: ["web design insights", "technical SEO blog", "AI automation articles"],
});

export default function BlogPage() {
  return (
    <>
      <Section className="pt-16 md:pt-20">
        <div className="max-w-4xl space-y-5">
          <p className="inline-flex rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-accent">
            Insights
          </p>
          <h1 className="font-heading text-4xl font-semibold tracking-tight text-balance md:text-5xl">
            Practical Growth Insights for SMEs and Founders
          </h1>
          <p className="text-lg text-muted-foreground">
            Actionable content on website strategy, technical SEO, brand positioning, and automation systems.
          </p>
        </div>
      </Section>

      <Section className="pt-4">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.slug} className="rounded-lg border border-border/70 bg-card/70 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">{post.category}</p>
              <h2 className="mt-2 font-heading text-xl font-semibold tracking-tight">{post.title}</h2>
              <p className="mt-3 text-sm text-muted-foreground">{post.excerpt}</p>
              <div className="mt-4 text-xs text-muted-foreground">
                <time dateTime={post.publishedAt}>{new Date(post.publishedAt).toLocaleDateString()}</time>
                <span className="mx-2">•</span>
                <span>{post.readTime}</span>
              </div>
              <Button asChild variant="ghost" className="mt-4 px-0 text-accent hover:text-accent">
                <Link href={`/blog/${post.slug}`}>Read article</Link>
              </Button>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
