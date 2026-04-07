"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  TargetIcon,
  RocketIcon,
  LightningBoltIcon,
  BarChartIcon,
} from "@radix-ui/react-icons";

const steps = [
  {
    number: "01",
    icon: TargetIcon,
    title: "Validate",
    description:
      "Every idea runs through a 6-week validation sprint. We test market demand, talk to users, and build throwaway prototypes. Only ~1 in 10 concepts survives.",
    accent: "bg-accent/10 text-accent",
  },
  {
    number: "02",
    icon: LightningBoltIcon,
    title: "Fund",
    description:
      "Survivors get full pre-seed capital, a shared engineering team, and operational infrastructure from day one. No fundraising. No pitch decks. Just build.",
    accent: "bg-accent/10 text-accent",
  },
  {
    number: "03",
    icon: RocketIcon,
    title: "Build",
    description:
      "A dedicated team ships the MVP in weeks, not months. Shared design systems, deployment pipelines, and AI tooling mean every venture launches faster than the last.",
    accent: "bg-accent/10 text-accent",
  },
  {
    number: "04",
    icon: BarChartIcon,
    title: "Scale",
    description:
      "Once product-market fit is clear, we pour fuel on the fire. Growth loops, cross-portfolio distribution, and dedicated ops turn a product into a company.",
    accent: "bg-accent/10 text-accent",
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

const HowWeBuild: React.FC = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden border-t border-c-line-3">
      {/* Elliptic accent glow — right side */}
      <div
        className="absolute top-[20%] -right-[10%] w-[600px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, var(--c-accent-soft) 0%, transparent 65%)",
          opacity: 0.35,
        }}
      />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-accent-soft border border-accent/20 mb-6">
            <span className="text-xs font-medium text-accent uppercase tracking-widest">
              Process
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6 text-c-fg">
            How We Build Companies
          </h2>
          <p className="text-lg text-c-fg-4 max-w-2xl mx-auto leading-relaxed">
            Four stages. No shortcuts. Every venture follows the same
            battle-tested process from napkin sketch to scaled product.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              custom={i}
              className="group relative bg-[var(--c-card)] backdrop-blur-xl border border-[var(--c-card-border)] rounded-2xl p-6 hover:border-c-line transition-all duration-500"
            >
              {/* Step number */}
              <span className="text-[10px] font-bold text-c-fg-6 tracking-widest uppercase mb-6 block">
                Step {step.number}
              </span>

              {/* Icon */}
              <div
                className={`w-10 h-10 rounded-lg ${step.accent} flex items-center justify-center mb-5`}
              >
                <step.icon width={18} height={18} />
              </div>

              {/* Title */}
              <h3 className="font-display text-xl font-bold text-c-fg mb-3 tracking-tight">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-c-fg-5 text-sm leading-relaxed">
                {step.description}
              </p>

              {/* Connector line (not on last) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-[1px] bg-c-line-2" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeBuild;
