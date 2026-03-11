"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout";

const logos = [
  { name: "Company 1", width: 120 },
  { name: "Company 2", width: 100 },
  { name: "Company 3", width: 110 },
  { name: "Company 4", width: 130 },
  { name: "Company 5", width: 100 },
  { name: "Company 6", width: 120 },
];

export function LogoCloud() {
  return (
    <section className="py-12 border-y border-border/50">
      <Container size="xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-sm text-muted-foreground mb-8">
            Trusted by innovative companies
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
            {logos.map((logo, index) => (
              <motion.div
                key={logo.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-center"
              >
                {/* Placeholder logo - replace with actual logos */}
                <div 
                  className="h-8 flex items-center justify-center text-muted-foreground/50 font-medium"
                  style={{ width: logo.width }}
                >
                  <div className="px-4 py-2 rounded-md bg-muted/30 text-xs">
                    {logo.name}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
