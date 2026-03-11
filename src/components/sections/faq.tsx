"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HelpCircle, MessageCircle, ArrowRight } from "lucide-react";
import { Container, Section } from "@/components/layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { JsonLd } from "@/components/seo";
import { generateFAQSchema } from "@/lib/schema";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "How long does a typical website project take?",
    answer:
      "Most website projects take 6-10 weeks from kickoff to launch. This includes discovery, design, development, and testing phases. Complex projects with custom functionality may take longer. We'll provide a detailed timeline during our initial consultation.",
  },
  {
    question: "Do you work with businesses outside of your area?",
    answer:
      "Yes! We work with clients globally. Our process is designed for remote collaboration, with regular video calls, shared project management tools, and clear communication channels. Distance has never been a barrier to delivering exceptional results.",
  },
  {
    question: "What's included in your SEO services?",
    answer:
      "Our SEO services include technical audits, keyword research, on-page optimization, content strategy, and performance tracking. We focus on sustainable, white-hat strategies that build long-term organic visibility. Each package is customized based on your specific goals and competition.",
  },
  {
    question: "Can you help with AI automation if we're not tech-savvy?",
    answer:
      "Absolutely. We handle all the technical implementation—you just need to tell us what processes you want to improve, and we'll design and build the solution. We also provide training and documentation so your team can manage day-to-day operations confidently.",
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer:
      "Yes, we offer maintenance and support packages to keep your website secure, updated, and optimized. This includes regular updates, security monitoring, performance optimization, and priority support. We also provide training so your team can manage content updates independently.",
  },
  {
    question: "What is your pricing structure?",
    answer:
      "Our pricing is project-based and depends on the scope, complexity, and timeline of your project. We provide detailed proposals after our initial discovery call so you know exactly what you're investing in. We also offer flexible payment plans for larger projects.",
  },
];

export function FAQ() {
  return (
    <Section id="faq" className="relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(ellipse 60% 40% at 50% 0%, rgba(0, 212, 255, 0.08), transparent)`,
          }}
        />
      </div>

      <JsonLd data={generateFAQSchema({ faqs })} />
      
      <Container size="default">
        <div className="grid lg:grid-cols-[1fr,1.5fr] gap-12 lg:gap-16 items-start">
          {/* Left Column - Header */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-32"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 mb-6"
            >
              <HelpCircle className="w-8 h-8 text-primary" />
            </motion.div>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Got questions? We&apos;ve got answers. Can&apos;t find what you&apos;re looking for? 
              Get in touch with our team.
            </p>

            {/* Contact CTA */}
            <div className="p-6 rounded-2xl bg-card border border-border/50">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Still have questions?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    We&apos;re here to help. Schedule a free consultation.
                  </p>
                  <Button asChild size="sm">
                    <Link href="/contact">
                      Contact Us
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Accordion className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <AccordionItem 
                    className="rounded-xl border border-border/50 bg-card/50 px-6 overflow-hidden hover:border-primary/30 transition-colors"
                  >
                    <AccordionTrigger className="text-left font-medium hover:text-primary py-5">
                      <span className="flex items-start gap-4">
                        <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center text-sm font-bold text-primary shrink-0">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span>{faq.question}</span>
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-5 pl-12">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
