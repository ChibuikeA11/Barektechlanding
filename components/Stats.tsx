"use client";

import React from "react";
import { NumberTicker } from "./magicui/number-ticker";
import { motion } from "framer-motion";

const stats = [
  { value: 12, suffix: "+", label: "Products Launched", delay: 0.2 },
  { value: 2.5, suffix: "M", label: "Active Users", delay: 0.4, decimal: 1 },
  { value: 30, suffix: "+", label: "Global Markets", delay: 0.6 },
  { value: 45, suffix: "", label: "Team Members", delay: 0.8 },
  { value: 150, suffix: "+", label: "Partners", delay: 1.0 },
  { value: 25, suffix: "+", label: "Countries", delay: 1.2 },
];

const Stats: React.FC = () => {
  return (
    <section
      id="mission"
      className="py-32 bg-background relative overflow-hidden border-t border-c-line-3"
    >
      <div className="absolute top-0 left-1/4 w-1/2 h-full blur-[120px] pointer-events-none" style={{ background: "var(--c-glow)" }} />
      {/* Elliptic accent glow — center */}
      <div
        className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[900px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, var(--c-accent-soft) 0%, transparent 60%)",
          opacity: 0.3,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight mb-8 text-c-fg">
            The numbers speak <br />
            <span className="text-c-fg-4">for themselves.</span>
          </h2>
          <p className="text-lg sm:text-xl text-c-fg-4 max-w-2xl mx-auto leading-relaxed">
            We exist because the venture model is inefficient. Most startups fail alone — starved of capital, talent, or distribution. We fix that by building companies inside a studio where resources are shared. Every launch is faster than the last.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 border-t border-c-line pt-12">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center">
              <span className="text-3xl sm:text-4xl font-display font-bold text-c-fg-2 mb-2 tracking-tight">
                <NumberTicker
                  value={stat.value}
                  delay={stat.delay}
                  suffix={stat.suffix}
                  decimalPlaces={stat.decimal || 0}
                />
              </span>
              <span className="text-xs text-c-fg-5 uppercase tracking-wider font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
