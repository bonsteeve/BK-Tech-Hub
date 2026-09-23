import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      { source: "/book-a-call", destination: "/book-a-demo", permanent: true },
      { source: "/free-website-audit", destination: "/book-a-demo", permanent: true },
      { source: "/about", destination: "/", permanent: true },
      { source: "/work", destination: "/", permanent: true },
      { source: "/work/:slug", destination: "/", permanent: true },
      {
        source: "/services/web-design-development",
        destination: "/services/website-creation",
        permanent: true,
      },
      {
        source: "/services/seo-optimization",
        destination: "/services/seo",
        permanent: true,
      },
      {
        source: "/services/ai-automation-for-smes",
        destination: "/conversaos",
        permanent: true,
      },
      {
        source: "/services/branding-digital-presence",
        destination: "/services",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
