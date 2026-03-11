import Link from "next/link";

import { Section } from "@/components/shared/section";
import { Button } from "@/components/ui/button";
import type { BlogPost } from "@/content/blog-posts";

type BlogPostTemplateProps = {
  post: BlogPost;
};

export function BlogPostTemplate({ post }: BlogPostTemplateProps) {
  return (
    <>
      <Section className="pt-16 md:pt-20">
        <article className="mx-auto max-w-3xl">
          <p className="inline-flex rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-accent">
            {post.category}
          </p>
          <h1 className="mt-4 font-heading text-4xl font-semibold tracking-tight text-balance md:text-5xl">
            {post.title}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <span>{post.author}</span>
            <span>•</span>
            <time dateTime={post.publishedAt}>{new Date(post.publishedAt).toLocaleDateString()}</time>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
          <p className="mt-6 text-lg text-muted-foreground">{post.excerpt}</p>

          <div className="mt-8 rounded-lg border border-border/70 bg-card/70 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">Key Takeaway</p>
            <p className="mt-2 text-sm text-muted-foreground md:text-base">{post.keyTakeaway}</p>
          </div>
        </article>
      </Section>

      <Section className="pt-4">
        <article className="mx-auto max-w-3xl">
          {post.sections.map((section) => (
            <section key={section.heading} className="mb-10">
              <h2 className="font-heading text-2xl font-semibold tracking-tight">{section.heading}</h2>
              <div className="mt-4 space-y-4 text-muted-foreground">
                {section.content.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </article>
      </Section>

      <Section className="bg-muted/20">
        <div className="mx-auto max-w-3xl rounded-3xl border border-border/70 bg-card/80 p-8 text-center md:p-12">
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-balance md:text-4xl">
            Need help applying this to your business?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Book a strategy call and get practical recommendations for your website, SEO, and automation priorities.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/book-a-call">Book a Call</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/blog">Back to Insights</Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
