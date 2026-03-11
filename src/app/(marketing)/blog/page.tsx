import { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock } from "lucide-react";
import { HeroPage } from "@/components/sections/hero-page";
import { Container, Section } from "@/components/layout";
import { CTASection } from "@/components/sections";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { JsonLd } from "@/components/seo";
import { generateWebPageSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights, tips, and strategies for digital success. Learn about web design, SEO, AI automation, and growing your business online.",
  openGraph: {
    title: "Blog | BK Tech Hub",
    description:
      "Insights, tips, and strategies for digital success.",
    url: `${siteConfig.url}/blog`,
  },
  alternates: {
    canonical: `${siteConfig.url}/blog`,
  },
};

const blogPosts = [
  {
    slug: "why-your-website-isnt-converting",
    title: "5 Reasons Your Website Isn't Converting (And How to Fix Them)",
    excerpt:
      "Discover the most common conversion killers and learn actionable strategies to turn more visitors into customers.",
    category: "Web Design",
    author: "BK Tech Hub",
    publishedAt: "2024-01-15",
    readingTime: 8,
    featured: true,
  },
  {
    slug: "seo-fundamentals-for-smes",
    title: "SEO Fundamentals Every SME Should Know in 2024",
    excerpt:
      "A practical guide to search engine optimization for small and medium businesses. No jargon, just results.",
    category: "SEO",
    author: "BK Tech Hub",
    publishedAt: "2024-01-10",
    readingTime: 12,
    featured: true,
  },
  {
    slug: "ai-automation-small-business",
    title: "How AI Automation Can Transform Your Small Business",
    excerpt:
      "Real examples of how SMEs are using AI to save time, reduce costs, and scale operations without hiring.",
    category: "AI Automation",
    author: "BK Tech Hub",
    publishedAt: "2024-01-05",
    readingTime: 10,
    featured: false,
  },
  {
    slug: "website-performance-matters",
    title: "Why Website Performance Matters More Than Ever",
    excerpt:
      "Page speed affects everything from SEO to conversions. Here's how to make your site lightning fast.",
    category: "Web Development",
    author: "BK Tech Hub",
    publishedAt: "2024-01-01",
    readingTime: 6,
    featured: false,
  },
  {
    slug: "building-brand-trust-online",
    title: "Building Brand Trust Online: A Complete Guide",
    excerpt:
      "Trust is the foundation of online success. Learn how to build credibility and win customer confidence.",
    category: "Branding",
    author: "BK Tech Hub",
    publishedAt: "2023-12-28",
    readingTime: 9,
    featured: false,
  },
  {
    slug: "local-seo-guide",
    title: "The Ultimate Local SEO Guide for Service Businesses",
    excerpt:
      "Dominate local search and attract more customers in your area with these proven strategies.",
    category: "SEO",
    author: "BK Tech Hub",
    publishedAt: "2023-12-20",
    readingTime: 11,
    featured: false,
  },
];

const categories = [
  "All",
  "Web Design",
  "Web Development",
  "SEO",
  "AI Automation",
  "Branding",
];

export default function BlogPage() {
  const featuredPosts = blogPosts.filter((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  return (
    <>
      <JsonLd
        data={generateWebPageSchema({
          title: "Blog | BK Tech Hub",
          description: "Insights, tips, and strategies for digital success.",
          url: `${siteConfig.url}/blog`,
        })}
      />

      <HeroPage
        title="Insights & Resources for"
        titleHighlight="Digital Success"
        description="Practical tips, strategies, and insights to help you grow your business online. No fluff, just actionable advice."
        breadcrumbs={[{ name: "Blog", href: "/blog" }]}
      />

      <Section>
        <Container size="xl">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {category}
              </Badge>
            ))}
          </div>

          {/* Featured Posts */}
          {featuredPosts.length > 0 && (
            <div className="mb-16">
              <h2 className="font-display text-2xl font-bold mb-6">
                Featured Articles
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {featuredPosts.map((post) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`}>
                    <Card className="h-full bg-card/50 border-border/50 hover:border-primary/30 transition-all duration-300 group overflow-hidden">
                      <div className="aspect-[16/9] bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                        <span className="text-muted-foreground">
                          [Article Image]
                        </span>
                      </div>
                      <CardContent className="p-6">
                        <Badge variant="outline" className="mb-3">
                          {post.category}
                        </Badge>
                        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {new Date(post.publishedAt).toLocaleDateString(
                              "en-US",
                              {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                              }
                            )}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {post.readingTime} min read
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* All Posts */}
          <div>
            <h2 className="font-display text-2xl font-bold mb-6">
              All Articles
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                  <Card className="h-full bg-card/50 border-border/50 hover:border-primary/30 transition-all duration-300 group">
                    <CardContent className="p-6">
                      <Badge variant="outline" className="mb-3 text-xs">
                        {post.category}
                      </Badge>
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readingTime} min
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
