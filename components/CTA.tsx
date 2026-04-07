"use client";

import React from "react";
import { ArrowRightIcon, ArrowTopRightIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";

const CTA: React.FC = () => {
  return (
    <section
      id="contact"
      className="py-32 bg-c-bg-2 border-t border-c-line-3 relative overflow-hidden"
    >
      {/* Elliptic accent glow */}
      <div
        className="absolute -top-[10%] right-[10%] w-[800px] h-[500px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, var(--c-accent-soft) 0%, transparent 65%)",
          opacity: 0.5,
        }}
      />
      <div
        className="absolute bottom-[-20%] -left-[10%] w-[500px] h-[350px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, var(--c-accent-soft) 0%, transparent 70%)",
          opacity: 0.3,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold text-c-fg mb-6 tracking-tighter">
            Build with a productized studio,
            <br />
            <span className="text-c-fg-5">not a services agency.</span>
          </h2>
          <p className="text-lg text-c-fg-4 max-w-xl mb-10 leading-relaxed">
            Whether you&apos;re a domain expert ready to co-found, an investor
            exploring the portfolio, or just curious — this is where it starts.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:hello@barek.studio"
              className="group inline-flex items-center justify-center gap-3 px-8 py-3.5 bg-accent text-accent-fg font-semibold text-sm rounded-lg hover:bg-accent-hover transition-colors duration-300"
            >
              Start a Conversation
              <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#portfolio"
              className="group inline-flex items-center justify-center gap-3 px-8 py-3.5 bg-transparent border border-c-line-2 text-c-fg-3 font-medium text-sm rounded-lg hover:text-c-fg-em hover:border-c-fg-5 transition-all duration-300"
            >
              Explore the Portfolio
              <ArrowTopRightIcon className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
