"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout";

const logos = [
  { name: "TechCorp", icon: "◆" },
  { name: "Innovate", icon: "●" },
  { name: "GrowthLabs", icon: "▲" },
  { name: "ScaleUp", icon: "■" },
  { name: "Nexus", icon: "★" },
  { name: "Vertex", icon: "◇" },
];

export function LogoCloud() {
  return (
    <section className="py-16 border-y border-border/30 bg-gradient-to-b from-transparent via-muted/30 to-transparent relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div 
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: `radial-gradient(ellipse 100% 100% at 50% 50%, rgba(0, 212, 255, 0.03), transparent)`,
          }}
        />
      </div>

      <Container size="xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-sm text-muted-foreground mb-10 uppercase tracking-wider">
            Trusted by innovative companies
          </p>
          
          {/* Logo grid with better styling */}
          <div className="flex flex-wrap justify-center items-center gap-x-8 md:gap-x-12 lg:gap-x-16 gap-y-6">
            {logos.map((logo, index) => (
              <motion.div
                key={logo.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="flex items-center gap-3 px-6 py-3 rounded-xl bg-card/30 border border-border/30 hover:border-primary/30 hover:bg-card/50 transition-all duration-300">
                  {/* Logo icon */}
                  <motion.div
                    className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                  >
                    <span className="text-xl text-primary">{logo.icon}</span>
                  </motion.div>
                  
                  {/* Logo name */}
                  <span className="text-sm font-semibold text-muted-foreground group-hover:text-foreground transition-colors">
                    {logo.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 pt-10 border-t border-border/30"
          >
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              {[
                { value: "50+", label: "Happy Clients" },
                { value: "200%", label: "Avg. Growth" },
                { value: "4.9★", label: "Client Rating" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold text-gradient mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
