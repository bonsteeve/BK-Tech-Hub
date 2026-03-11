import type { MetadataRoute } from "next";

import { blogPosts } from "@/content/blog-posts";
import { caseStudies } from "@/content/case-studies";
import { services } from "@/content/services";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes = [
    "",
    "/services",
    "/work",
    "/about",
    "/blog",
    "/contact",
    "/book-a-call",
    "/free-website-audit",
  ];

  const staticEntries = staticRoutes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const serviceEntries = services.map((service) => ({
    url: `${siteConfig.url}/services/${service.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const workEntries = caseStudies.map((study) => ({
    url: `${siteConfig.url}/work/${study.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogEntries = blogPosts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticEntries, ...serviceEntries, ...workEntries, ...blogEntries];
}
