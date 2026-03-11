"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Globe, Bot } from "lucide-react";
import { Container, Section } from "@/components/layout";
import { Badge } from "@/components/ui/badge";
import { FloatingShapes } from "@/components/visuals";

const caseStudies = [
  {
    title: "E-Commerce Platform Redesign",
    client: "TechStart Inc.",
    description:
      "Complete website overhaul resulting in 150% increase in conversions and 40% reduction in bounce rate.",
    tags: ["Web Design", "Development", "SEO"],
    results: [
      { metric: "Conversions", value: "+150%" },
      { metric: "Page Speed", value: "95/100" },
    ],
    href: "/work/techstart-redesign",
    icon: Globe,
    image: "/images/work/case-study-ecommerce.png",
    gradient: "from-cyan-500/20 via-blue-500/20 to-purple-500/20",
  },
  {
    title: "AI-Powered Lead Generation",
    client: "GrowthFirst Consulting",
    description:
      "Implemented AI chatbot and automation system that qualified 500+ leads per month with 80% accuracy.",
    tags: ["AI Automation", "Lead Gen"],
    results: [
      { metric: "Leads/Month", value: "500+" },
      { metric: "Time Saved", value: "20hrs/wk" },
    ],
    href: "/work/growthfirst-automation",
    icon: Bot,
    image: "/images/work/case-study-automation.png",
    gradient: "from-purple-500/20 via-pink-500/20 to-orange-500/20",
  },
];

export function FeaturedWork() {
  return (
    <Section variant="muted" id="work" className="relative">
      <FloatingShapes variant="section" />
      
      <Container size="xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16"
        >
          <div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Our Work
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl">
              Real results for real businesses. See how we&apos;ve helped our clients
              achieve their digital goals.
            </p>
          </div>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors shrink-0"
          >
            View all case studies
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={study.href} className="block group">
                <article className="rounded-2xl overflow-hidden bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
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
                      {study.results.map((result) => (
                        <motion.div
                          key={result.metric}
                          className="bg-card/90 backdrop-blur-sm rounded-lg px-4 py-2 border border-border/50"
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
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div>
                        <p className="text-sm text-primary mb-1">{study.client}</p>
                        <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                          {study.title}
                        </h3>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                        <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      {study.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {study.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="text-xs bg-muted/50"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </article>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
