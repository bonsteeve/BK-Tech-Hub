"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Globe, Bot, Palette, Search, TrendingUp } from "lucide-react";
import { HeroPage } from "@/components/sections/hero-page";
import { Container, Section } from "@/components/layout";
import { CTASection } from "@/components/sections";
import { Badge } from "@/components/ui/badge";

const caseStudies = [
  {
    slug: "techstart-redesign",
    title: "E-Commerce Platform Redesign",
    client: "TechStart Inc.",
    industry: "E-commerce",
    description:
      "Complete website overhaul resulting in 150% increase in conversions and 40% reduction in bounce rate.",
    services: ["Web Design", "Development", "SEO"],
    results: [
      { metric: "Conversions", value: "+150%" },
      { metric: "Bounce Rate", value: "-40%" },
      { metric: "Page Speed", value: "95/100" },
    ],
    featured: true,
    icon: Globe,
    image: "/images/work/case-study-ecommerce.png",
    gradient: "from-cyan-500 to-blue-500",
    bgGradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
  },
  {
    slug: "growthfirst-automation",
    title: "AI-Powered Lead Generation",
    client: "GrowthFirst Consulting",
    industry: "Consulting",
    description:
      "Implemented AI chatbot and automation system that qualified 500+ leads per month with 80% accuracy.",
    services: ["AI Automation", "Lead Gen"],
    results: [
      { metric: "Leads/Month", value: "500+" },
      { metric: "Accuracy", value: "80%" },
      { metric: "Time Saved", value: "20hrs/wk" },
    ],
    featured: true,
    icon: Bot,
    image: "/images/work/case-study-automation.png",
    gradient: "from-violet-500 to-purple-500",
    bgGradient: "from-violet-500/20 via-purple-500/10 to-transparent",
  },
  {
    slug: "brightideas-branding",
    title: "Complete Brand Transformation",
    client: "Bright Ideas Agency",
    industry: "Marketing",
    description:
      "Full rebrand and website redesign that positioned the agency as a premium service provider.",
    services: ["Branding", "Web Design", "Strategy"],
    results: [
      { metric: "Brand Recognition", value: "+200%" },
      { metric: "Premium Clients", value: "+60%" },
      { metric: "Revenue", value: "+85%" },
    ],
    featured: true,
    icon: Palette,
    image: "/images/work/case-study-branding.png",
    gradient: "from-orange-500 to-pink-500",
    bgGradient: "from-orange-500/20 via-pink-500/10 to-transparent",
  },
  {
    slug: "healthplus-seo",
    title: "Healthcare SEO Campaign",
    client: "HealthPlus Clinic",
    industry: "Healthcare",
    description:
      "Comprehensive SEO strategy that increased organic traffic by 300% and local search visibility.",
    services: ["SEO", "Content Strategy", "Local SEO"],
    results: [
      { metric: "Organic Traffic", value: "+300%" },
      { metric: "Local Rankings", value: "Top 3" },
      { metric: "Patient Inquiries", value: "+180%" },
    ],
    featured: false,
    icon: Search,
    image: "/images/work/case-study-healthcare-seo.png",
    gradient: "from-emerald-500 to-green-500",
    bgGradient: "from-emerald-500/20 via-green-500/10 to-transparent",
  },
];

export function WorkPageContent() {
  return (
    <>
      <HeroPage
        title="Real Results for"
        titleHighlight="Real Businesses"
        description="Explore our portfolio of successful projects. See how we've helped businesses like yours achieve their digital goals."
        breadcrumbs={[{ name: "Work", href: "/work" }]}
      />

      <Section className="relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `radial-gradient(ellipse 80% 50% at 50% 0%, rgba(0, 212, 255, 0.08), transparent)`,
            }}
          />
        </div>

        <Container size="xl">
          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 p-6 rounded-2xl bg-card/50 border border-border/50"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { value: "50+", label: "Projects Completed" },
                { value: "98%", label: "Client Satisfaction" },
                { value: "200%", label: "Avg. ROI Increase" },
                { value: "4.9★", label: "Average Rating" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="text-2xl md:text-3xl font-bold text-gradient mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Filter Tags */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-2 mb-12"
          >
            {["All", "Web Design", "SEO", "AI Automation", "Branding"].map(
              (filter, i) => (
                <motion.div
                  key={filter}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.05 }}
                >
                  <Badge
                    variant={filter === "All" ? "default" : "outline"}
                    className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors px-4 py-1.5"
                  >
                    {filter}
                  </Badge>
                </motion.div>
              )
            )}
          </motion.div>

          {/* Case Studies Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <Link href={`/work/${study.slug}`} className="group block">
                  <article className="rounded-2xl overflow-hidden bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5">
                    {/* Visual Area with Image */}
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={study.image}
                        alt={study.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      
                      {/* Bottom gradient overlay */}
                      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-card to-transparent" />
                      
                      {/* Results Overlay */}
                      <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                        {study.results.slice(0, 2).map((result) => (
                          <motion.div
                            key={result.metric}
                            className="bg-card/90 backdrop-blur-sm rounded-xl px-4 py-2 border border-border/50"
                            whileHover={{ scale: 1.05 }}
                          >
                            <div className="text-xl font-bold text-primary">
                              {result.value}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {result.metric}
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      {/* Featured badge */}
                      {study.featured && (
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-primary/90 text-primary-foreground">
                            Featured
                          </Badge>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div>
                          <p className="text-sm text-primary mb-1">
                            {study.client} • {study.industry}
                          </p>
                          <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                            {study.title}
                          </h3>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                          <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                        {study.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {study.services.map((service) => (
                          <Badge
                            key={service}
                            variant="outline"
                            className="text-xs bg-muted/50"
                          >
                            {service}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </article>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* More projects teaser */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-card/50 border border-border/50">
              <TrendingUp className="w-5 h-5 text-primary" />
              <span className="text-muted-foreground">
                More case studies coming soon. <span className="text-primary font-medium">Want to be featured?</span>
              </span>
            </div>
          </motion.div>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
