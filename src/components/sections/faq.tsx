"use client";

import { motion } from "framer-motion";
import { Container, Section } from "@/components/layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { JsonLd } from "@/components/seo";
import { generateFAQSchema } from "@/lib/schema";

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
    <Section id="faq">
      <JsonLd data={generateFAQSchema({ faqs })} />
      
      <Container size="default">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Got questions? We&apos;ve got answers.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </Container>
    </Section>
  );
}
