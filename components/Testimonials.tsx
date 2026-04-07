"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card } from "@radix-ui/themes";

const testimonials = [
  {
    quote:
      "Barek didn't just fund us — they built alongside us. Having shared infrastructure from day one meant we shipped in 8 weeks what would have taken 6 months alone.",
    name: "Raphael Ameh",
    role: "Engineering Lead, Trimly",
    initials: "RA",
  },
  {
    quote:
      "The studio model changed everything. Instead of spending months fundraising, I spent that time talking to users and iterating on the product. The results speak for themselves.",
    name: "Anne O. Okolo",
    role: "Head of Design, GlamUp",
    initials: "AO",
  },
  {
    quote:
      "What makes Barek different is the compound effect. Our growth accelerated when we plugged into the shared user base and distribution channels across the portfolio.",
    name: "Samuel Kazim",
    role: "Head of Operations, Genna",
    initials: "SK",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const, delay: i * 0.12 },
  }),
};

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden border-t border-c-line-3">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-accent-soft border border-accent/20 mb-6">
            <span className="text-xs font-medium text-accent uppercase tracking-widest">
              From the Team
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tighter text-c-fg">
            Built by people who&apos;ve been there
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              custom={i}
            >
              <Card className="bg-[var(--c-card)] backdrop-blur-xl border border-[var(--c-card-border)] shadow-card rounded-2xl p-6 h-full flex flex-col hover:border-c-line transition-colors duration-500">
                {/* Quote */}
                <p className="text-c-fg-3 text-sm leading-relaxed flex-1 mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-c-line-3">
                  <div className="w-9 h-9 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-xs font-bold text-accent">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-c-fg-2">
                      {t.name}
                    </p>
                    <p className="text-xs text-c-fg-5">{t.role}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
