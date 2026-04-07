"use client";

import React from 'react';
import {
  ArrowTopRightIcon,
  ScissorsIcon,
  SewingPinIcon,
  GlobeIcon,
  ActivityLogIcon,
  MagicWandIcon,
  HeartIcon,
  LightningBoltIcon
} from '@radix-ui/react-icons';
import { Card } from '@radix-ui/themes';
import { DotPattern } from './magicui/dot-pattern';
import { motion } from 'framer-motion';

const cardBase = "group relative overflow-hidden rounded-3xl bg-[var(--c-card)] backdrop-blur-xl border border-[var(--c-card-border)] shadow-card-lg hover:border-c-line transition-all duration-500 min-h-[360px] p-8 flex flex-col justify-between";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const, delay: i * 0.1 }
  })
};

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 bg-background relative overflow-hidden">
      {/* Elliptic accent glow */}
      <div
        className="absolute top-[10%] left-[-5%] w-[700px] h-[450px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, var(--c-accent-soft) 0%, transparent 65%)",
          opacity: 0.4,
        }}
      />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-accent-soft border border-accent/20 mb-6">
            <span className="text-xs font-medium text-accent uppercase tracking-widest">Portfolio</span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tighter mb-6 text-c-fg">
            What We&apos;ve Built
          </h2>
          <p className="text-lg text-c-fg-4 max-w-2xl mx-auto leading-relaxed">
            Real products with real users. Each venture is built, launched, and scaled from inside our studio.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Trimly — flagship */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            custom={0}
            className="md:col-span-2 lg:col-span-2"
          >
            <Card className={cardBase}>
              <DotPattern width={20} height={20} cr={0.8} className="opacity-25 [mask-image:radial-gradient(350px_circle_at_bottom_left,white,transparent)]" />
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[80px] pointer-events-none" style={{ background: "var(--c-glow)" }} />
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-xl bg-c-icon-bg border border-c-icon-border flex items-center justify-center text-c-fg-2 group-hover:scale-105 transition-transform duration-300">
                    <ScissorsIcon width={20} height={20} />
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[var(--c-inset)] border border-c-icon-border text-[10px] font-bold uppercase tracking-wider text-c-fg-5">
                      <MagicWandIcon width={10} height={10} className="text-c-fg-4" /> Video AI
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-emerald-500/10 text-[10px] font-bold uppercase tracking-wider text-emerald-500">
                      Live
                    </span>
                  </div>
                </div>
                <h3 className="font-display text-2xl font-bold text-c-fg mb-3 tracking-tight group-hover:text-c-fg-em transition-colors">Trimly.</h3>
                <p className="text-c-fg-5 text-sm leading-relaxed max-w-md">
                  Trimly cuts hours of video editing down to seconds. Its AI identifies the moments most likely to perform, auto-edits footage, and syncs audio — so creators publish faster and more often.
                </p>
                <div className="mt-4 flex items-center gap-4 text-xs text-c-fg-6">
                  <span><span className="font-bold text-c-fg-4">200K+</span> creators</span>
                  <span className="w-1 h-1 rounded-full bg-c-fg-6" />
                  <span><span className="font-bold text-c-fg-4">1.2M</span> videos processed</span>
                </div>
              </div>
              <div className="relative z-10 mt-8">
                <div className="flex items-center gap-1 h-8 opacity-40 group-hover:opacity-80 transition-opacity">
                  {[40, 60, 30, 80, 50, 90, 40, 60, 30, 50, 70, 40, 60].map((h, i) => (
                    <div key={i} className="w-1.5 bg-accent/60 rounded-full transition-all duration-500" style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>

          {/* GlamUp */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            custom={1}
            className="lg:col-span-1"
          >
            <Card className={cardBase}>
              <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-[80px] pointer-events-none" style={{ background: "var(--c-glow)" }} />
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-xl bg-c-icon-bg border border-c-icon-border flex items-center justify-center text-c-fg-2 group-hover:scale-105 transition-transform duration-300">
                    <SewingPinIcon width={20} height={20} />
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[var(--c-inset)] border border-c-icon-border text-[10px] font-bold uppercase tracking-wider text-c-fg-5">
                      Fashion
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-amber-500/10 text-[10px] font-bold uppercase tracking-wider text-amber-500">
                      Beta
                    </span>
                  </div>
                </div>
                <h3 className="font-display text-2xl font-bold text-c-fg mb-3 tracking-tight group-hover:text-c-fg-em transition-colors">GlamUp.</h3>
                <p className="text-c-fg-5 text-sm leading-relaxed max-w-sm">
                  Your AI stylist. GlamUp learns how you dress, generates outfit combinations from your own wardrobe, and visualizes them on your digital twin before you commit.
                </p>
                <div className="mt-4 flex items-center gap-4 text-xs text-c-fg-6">
                  <span><span className="font-bold text-c-fg-4">15K</span> waitlist</span>
                </div>
              </div>
              <div className="relative z-10 mt-8 flex gap-3 opacity-60 group-hover:opacity-100 transition-opacity">
                <div className="w-8 h-8 rounded-full bg-c-bg-3 border border-c-line" />
                <div className="w-8 h-8 rounded-full bg-c-bg-2 border border-c-line" />
                <div className="w-8 h-8 rounded-full bg-c-line border border-c-line-2" />
                <div className="w-8 h-8 rounded-full bg-c-bg-2 border border-c-line border-dashed flex items-center justify-center text-[10px] text-c-fg-5">+</div>
              </div>
            </Card>
          </motion.div>

          {/* Genna */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            custom={2}
            className="lg:col-span-1"
          >
            <Card className={cardBase}>
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-xl bg-c-icon-bg border border-c-icon-border flex items-center justify-center text-c-fg-2 group-hover:scale-105 transition-transform duration-300">
                    <GlobeIcon width={20} height={20} />
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[var(--c-inset)] border border-c-icon-border text-[10px] font-bold uppercase tracking-wider text-c-fg-5">
                      <LightningBoltIcon width={10} height={10} className="text-c-fg-4" /> Creator OS
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-emerald-500/10 text-[10px] font-bold uppercase tracking-wider text-emerald-500">
                      Live
                    </span>
                  </div>
                </div>
                <h3 className="font-display text-2xl font-bold text-c-fg mb-3 tracking-tight group-hover:text-c-fg-em transition-colors">Genna.</h3>
                <p className="text-c-fg-5 text-sm leading-relaxed max-w-sm">
                  One dashboard for the business of being a creator. Genna unifies brand deals, analytics, invoicing, and content scheduling — so creators stop juggling ten tools.
                </p>
                <div className="mt-4 flex items-center gap-4 text-xs text-c-fg-6">
                  <span><span className="font-bold text-c-fg-4">8K+</span> creators</span>
                  <span className="w-1 h-1 rounded-full bg-c-fg-6" />
                  <span><span className="font-bold text-c-fg-4">$2.1M</span> deals managed</span>
                </div>
              </div>
              <div className="relative z-10 mt-8 w-full max-w-[200px]">
                <div className="space-y-2 opacity-50 group-hover:opacity-80 transition-opacity">
                  <div className="h-1.5 w-full bg-c-bg-3 rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-accent/60 rounded-full" />
                  </div>
                  <div className="h-1.5 w-full bg-c-bg-3 rounded-full overflow-hidden">
                    <div className="h-full w-1/2 bg-accent/40 rounded-full" />
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* NeuroCare — spans 2 */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            custom={3}
            className="md:col-span-2 lg:col-span-2"
          >
            <Card className={cardBase}>
              <DotPattern width={20} height={20} cr={0.8} className="opacity-25 [mask-image:radial-gradient(300px_circle_at_top_right,white,transparent)]" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full blur-[60px] pointer-events-none" style={{ background: "var(--c-glow-2)" }} />
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-xl bg-c-icon-bg border border-c-icon-border flex items-center justify-center text-c-fg-2 group-hover:scale-105 transition-transform duration-300">
                    <ActivityLogIcon width={20} height={20} />
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[var(--c-inset)] border border-c-icon-border text-[10px] font-bold uppercase tracking-wider text-c-fg-5">
                      <HeartIcon width={10} height={10} className="text-c-fg-4" /> Health AI
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-blue-500/10 text-[10px] font-bold uppercase tracking-wider text-blue-500">
                      In Development
                    </span>
                  </div>
                </div>
                <h3 className="font-display text-2xl font-bold text-c-fg mb-3 tracking-tight group-hover:text-c-fg-em transition-colors">NeuroCare.</h3>
                <p className="text-c-fg-5 text-sm leading-relaxed max-w-md">
                  Early detection, powered by AI. NeuroCare analyzes subtle biometric patterns to flag health risks before they become emergencies — giving patients and providers a critical head start.
                </p>
                <div className="mt-4 flex items-center gap-4 text-xs text-c-fg-6">
                  <span><span className="font-bold text-c-fg-4">3</span> clinical pilots</span>
                  <span className="w-1 h-1 rounded-full bg-c-fg-6" />
                  <span><span className="font-bold text-c-fg-4">2 hospitals</span> partnered</span>
                </div>
              </div>
              <div className="relative z-10 mt-8 flex items-center opacity-40 group-hover:opacity-80 transition-opacity">
                <div className="h-[1px] w-8 bg-c-fg-6" />
                <div className="h-4 w-4 border-l border-t border-accent/60 transform -rotate-45 translate-y-2" />
                <div className="h-8 w-4 border-r border-b border-accent/40 transform -rotate-12 -translate-y-2" />
                <div className="h-[1px] flex-1 bg-c-fg-6" />
              </div>
            </Card>
          </motion.div>

        </div>

        {/* Footer Link */}
        <div className="mt-16 flex justify-center">
          <a href="#" className="group flex items-center gap-2 text-c-fg-4 hover:text-accent transition-colors text-sm font-medium">
            View full portfolio
            <span className="bg-c-bg-3 p-1 rounded-full group-hover:bg-accent-soft transition-colors">
              <ArrowTopRightIcon width={14} height={14} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
