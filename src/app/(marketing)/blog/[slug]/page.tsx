import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import { HeroPage } from "@/components/sections/hero-page";
import { Container, Section } from "@/components/layout";
import { CTASection } from "@/components/sections";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { JsonLd } from "@/components/seo";
import { generateBlogPostSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/constants";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

const blogPosts: Record<
  string,
  {
    title: string;
    excerpt: string;
    content: string;
    category: string;
    author: { name: string; role: string };
    publishedAt: string;
    readingTime: number;
    tags: string[];
  }
> = {
  "why-your-website-isnt-converting": {
    title: "5 Reasons Your Website Isn't Converting (And How to Fix Them)",
    excerpt:
      "Discover the most common conversion killers and learn actionable strategies to turn more visitors into customers.",
    category: "Web Design",
    author: { name: "BK Tech Hub", role: "Digital Agency" },
    publishedAt: "2024-01-15",
    readingTime: 8,
    tags: ["conversion optimization", "web design", "UX", "CRO"],
    content: `
## Introduction

You've invested in a beautiful website, but the leads aren't coming in. Sound familiar? You're not alone. Many businesses struggle with websites that look great but fail to convert visitors into customers.

In this article, we'll explore the five most common reasons websites fail to convert—and more importantly, how to fix them.

## 1. Unclear Value Proposition

**The Problem:** Visitors can't figure out what you do or why they should care within the first few seconds.

**The Fix:** Your headline should clearly communicate:
- What you offer
- Who it's for
- Why it matters

Test your homepage with the "5-second test." Show it to someone unfamiliar with your business for 5 seconds, then ask them what you do. If they can't answer clearly, your value proposition needs work.

## 2. Weak or Missing Calls-to-Action

**The Problem:** Visitors don't know what to do next, so they leave.

**The Fix:** 
- Use clear, action-oriented CTAs ("Get Your Free Quote" vs "Submit")
- Place CTAs strategically throughout the page
- Create visual contrast to make CTAs stand out
- Match CTAs to the visitor's stage in the buyer journey

## 3. Poor Mobile Experience

**The Problem:** Over 50% of web traffic is mobile, but many sites are still desktop-first.

**The Fix:**
- Design mobile-first
- Test on real devices, not just simulators
- Ensure buttons are thumb-friendly
- Simplify navigation for small screens

## 4. Slow Page Speed

**The Problem:** Every second of load time costs you conversions. A 1-second delay can reduce conversions by 7%.

**The Fix:**
- Optimize and compress images
- Minimize JavaScript and CSS
- Use a fast hosting provider
- Implement caching
- Consider a CDN

## 5. Lack of Trust Signals

**The Problem:** Visitors don't trust you enough to take action.

**The Fix:**
- Add testimonials and reviews
- Display client logos
- Include case studies with real results
- Show certifications and awards
- Add security badges near forms

## Conclusion

Fixing these five issues won't happen overnight, but addressing them systematically will dramatically improve your conversion rates. Start with the quickest wins—often that's improving your CTAs and adding trust signals—then work on bigger changes like page speed and mobile optimization.

Need help identifying what's holding your website back? We offer free website audits that pinpoint exactly where you're losing conversions.
    `,
  },
  "seo-fundamentals-for-smes": {
    title: "SEO Fundamentals Every SME Should Know in 2024",
    excerpt:
      "A practical guide to search engine optimization for small and medium businesses. No jargon, just results.",
    category: "SEO",
    author: { name: "BK Tech Hub", role: "Digital Agency" },
    publishedAt: "2024-01-10",
    readingTime: 12,
    tags: ["SEO", "small business", "digital marketing", "organic traffic"],
    content: `
## Introduction

SEO can feel overwhelming, especially when you're running a business and wearing multiple hats. But here's the good news: you don't need to be an SEO expert to see results. By focusing on the fundamentals, SMEs can compete with larger competitors and attract qualified traffic.

## What is SEO (Really)?

SEO (Search Engine Optimization) is simply the practice of making your website more visible in search engine results. When someone searches for what you offer, you want to appear as high as possible in those results.

## The Three Pillars of SEO

### 1. Technical SEO

This is the foundation. Your website needs to be technically sound for search engines to find and understand it.

**Key priorities:**
- Fast page load times (under 3 seconds)
- Mobile-friendly design
- Secure connection (HTTPS)
- Clean URL structure
- Proper site architecture

### 2. On-Page SEO

This is about optimizing individual pages to rank for specific keywords.

**Key elements:**
- Keyword research and targeting
- Optimized title tags and meta descriptions
- Proper heading structure (H1, H2, H3)
- Quality content that matches search intent
- Internal linking

### 3. Off-Page SEO

This is about building your website's authority through external signals.

**Key factors:**
- Backlinks from reputable websites
- Local citations and listings
- Social signals
- Brand mentions

## Quick Wins for SMEs

1. **Claim your Google Business Profile** - Free and essential for local businesses
2. **Fix technical issues** - Use Google Search Console to identify problems
3. **Optimize your top pages** - Focus on pages that matter most
4. **Create helpful content** - Answer questions your customers ask
5. **Build citations** - Get listed in relevant directories

## Conclusion

SEO is a long-term investment, but the fundamentals are accessible to any business willing to put in the work. Start with technical foundations, optimize your key pages, and consistently create valuable content.
    `,
  },
};

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `${siteConfig.url}/blog/${slug}`,
      publishedTime: post.publishedAt,
    },
    alternates: {
      canonical: `${siteConfig.url}/blog/${slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    notFound();
  }

  return (
    <>
      <JsonLd
        data={generateBlogPostSchema({
          title: post.title,
          description: post.excerpt,
          url: `${siteConfig.url}/blog/${slug}`,
          image: `${siteConfig.url}/images/blog/${slug}.jpg`,
          datePublished: post.publishedAt,
          author: { name: post.author.name },
        })}
      />

      <HeroPage
        badge={post.category}
        title={post.title}
        description={post.excerpt}
        breadcrumbs={[
          { name: "Blog", href: "/blog" },
          { name: post.title, href: `/blog/${slug}` },
        ]}
      >
        <div className="flex items-center gap-6 text-sm text-muted-foreground mt-4">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            {new Date(post.publishedAt).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            {post.readingTime} min read
          </div>
        </div>
      </HeroPage>

      {/* Article Content */}
      <Section padding="sm">
        <Container size="sm">
          <article className="prose prose-invert prose-lg max-w-none">
            <div
              className="[&>h2]:font-display [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:mt-12 [&>h2]:mb-4
                         [&>h3]:font-semibold [&>h3]:text-xl [&>h3]:mt-8 [&>h3]:mb-3
                         [&>p]:text-muted-foreground [&>p]:leading-relaxed [&>p]:mb-4
                         [&>ul]:space-y-2 [&>ul]:mb-6 [&>ul>li]:text-muted-foreground
                         [&>ol]:space-y-2 [&>ol]:mb-6 [&>ol>li]:text-muted-foreground
                         [&_strong]:text-foreground [&_strong]:font-semibold"
              dangerouslySetInnerHTML={{
                __html: post.content
                  .replace(/## /g, "<h2>")
                  .replace(/### /g, "<h3>")
                  .replace(/<h2>/g, "</p><h2>")
                  .replace(/<h3>/g, "</p><h3>")
                  .replace(/\n\n/g, "</p><p>")
                  .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
                  .replace(/- ([^\n]+)/g, "<li>$1</li>")
                  .replace(/<li>/g, "</p><ul><li>")
                  .replace(/<\/li>\n<\/p>/g, "</li></ul><p>"),
              }}
            />
          </article>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Share */}
          <div className="mt-8 flex items-center justify-between">
            <Button asChild variant="ghost">
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
            <Button variant="outline" size="sm">
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
          </div>
        </Container>
      </Section>

      {/* Related Posts */}
      <Section variant="muted">
        <Container size="xl">
          <h2 className="font-display text-2xl font-bold mb-8">
            Continue Reading
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(blogPosts)
              .filter(([s]) => s !== slug)
              .slice(0, 2)
              .map(([postSlug, relatedPost]) => (
                <Link key={postSlug} href={`/blog/${postSlug}`}>
                  <Card className="h-full bg-card/50 border-border/50 hover:border-primary/30 transition-all duration-300 group">
                    <CardContent className="p-6">
                      <Badge variant="outline" className="mb-3">
                        {relatedPost.category}
                      </Badge>
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        {relatedPost.title}
                      </h3>
                      <p className="text-muted-foreground text-sm line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
          </div>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
