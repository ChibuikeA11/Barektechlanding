import React from 'react';
import { BarChartIcon, LightningBoltIcon, MixIcon } from '@radix-ui/react-icons';
import { Card } from '@radix-ui/themes';
import { DotPattern } from './magicui/dot-pattern';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">

      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full blur-[100px]" style={{ background: "var(--c-glow)" }} />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full blur-[100px]" style={{ background: "var(--c-glow-2)" }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-c-bg-2 border border-c-line mb-6">
            <span className="text-xs font-medium text-c-fg-4 uppercase tracking-widest">The Studio Model</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-c-fg">
            The Operating System for Innovation
          </h2>

          <p className="text-lg text-c-fg-4 max-w-2xl mx-auto leading-relaxed">
            Barek isn&apos;t a traditional VC or services shop. We build and own a productized portfolio
            of software startups, backed by shared systems and execution.
          </p>
        </div>

        {/* Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

          {/* Card 1: The Filter — 2 cols + 2 rows */}
          <Card className="bg-[var(--c-card)] backdrop-blur-xl border border-[var(--c-card-border)] shadow-card rounded-3xl p-6 lg:p-8 hover:border-c-line transition-colors duration-500 group overflow-hidden relative md:col-span-2 md:row-span-2 flex flex-col">
            <DotPattern width={20} height={20} cr={0.8} className="opacity-30 [mask-image:radial-gradient(400px_circle_at_top_right,white,transparent)]" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 bg-c-icon-bg border border-c-icon-border rounded-lg text-c-fg-3 group-hover:text-c-fg-em transition-colors shadow-sm">
                  <BarChartIcon width={20} height={20} />
                </div>
                <h3 className="text-lg lg:text-xl font-bold text-c-fg-2">The Filter</h3>
              </div>
              <h4 className="text-c-fg font-medium mb-3">Market Validation Protocol</h4>
              <p className="text-c-fg-5 text-sm leading-relaxed">
                We don&apos;t guess. We test. Our proprietary validation sprints kill 90% of ideas internally, ensuring only the strongest concepts with real demand survive.
              </p>
            </div>

            {/* SVG Chart */}
            <div className="mt-auto pt-8 relative h-40 w-full opacity-50 group-hover:opacity-70 transition-opacity">
              <svg viewBox="0 0 360 140" className="w-full h-full" role="img" aria-label="Validation growth graph">
                <defs>
                  <linearGradient id="lineGlow" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="var(--c-svg-line)" />
                    <stop offset="100%" stopColor="var(--c-fg-3)" />
                  </linearGradient>
                  <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--c-svg-fill)" />
                    <stop offset="100%" stopColor="transparent" />
                  </linearGradient>
                </defs>
                <path d="M10 118 L70 96 L120 102 L170 78 L220 84 L280 52 L340 34" stroke="url(#lineGlow)" strokeWidth="3" fill="none" />
                <path d="M10 118 L70 96 L120 102 L170 78 L220 84 L280 52 L340 34 L340 130 L10 130 Z" fill="url(#areaFill)" />
                <g stroke="var(--c-svg-line)" strokeWidth="1">
                  <line x1="10" y1="118" x2="340" y2="118" />
                  <line x1="10" y1="90" x2="340" y2="90" />
                  <line x1="10" y1="62" x2="340" y2="62" />
                  <line x1="10" y1="34" x2="340" y2="34" />
                </g>
                <g fill="var(--c-svg-dot)">
                  <circle cx="70" cy="96" r="3.5" />
                  <circle cx="170" cy="78" r="3.5" />
                  <circle cx="280" cy="52" r="3.5" />
                  <circle cx="340" cy="34" r="4" />
                </g>
              </svg>
            </div>
          </Card>

          {/* Card 2: The Engine */}
          <Card className="bg-[var(--c-card)] backdrop-blur-xl border border-[var(--c-card-border)] shadow-card rounded-3xl p-6 lg:p-8 hover:border-c-line transition-colors duration-500 group overflow-hidden relative md:col-span-1 flex flex-col">
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 bg-c-icon-bg border border-c-icon-border rounded-lg text-c-fg-3 group-hover:text-c-fg-em transition-colors shadow-sm">
                  <LightningBoltIcon width={20} height={20} />
                </div>
                <h3 className="text-lg lg:text-xl font-bold text-c-fg-2">The Engine</h3>
              </div>
              <h4 className="text-c-fg font-medium mb-3">Capital & Velocity</h4>
              <p className="text-c-fg-5 text-sm leading-relaxed">
                Protected from the fundraising treadmill. We provide complete pre-seed funding and shared technical infrastructure so founders can focus purely on product.
              </p>
            </div>

            <div className="absolute -bottom-16 -right-16 w-64 h-64 border border-c-line rounded-full flex items-center justify-center opacity-30 group-hover:opacity-50 transition-all duration-700 group-hover:scale-105">
              <div className="w-48 h-48 border border-c-line-2 rounded-full flex items-center justify-center">
                <div className="w-32 h-32 border border-c-fg-6 rounded-full flex items-center justify-center bg-c-bg-2 backdrop-blur-sm">
                  <div className="w-4 h-4 bg-c-fg-4 rounded-full" style={{ boxShadow: "0 0 15px var(--c-svg-node-glow)" }} />
                </div>
              </div>
            </div>
          </Card>

          {/* Card 3: The Network */}
          <Card className="bg-[var(--c-card)] backdrop-blur-xl border border-[var(--c-card-border)] shadow-card rounded-3xl p-6 lg:p-8 hover:border-c-line transition-colors duration-500 group overflow-hidden relative md:col-span-1 flex flex-col">
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 bg-c-icon-bg border border-c-icon-border rounded-lg text-c-fg-3 group-hover:text-c-fg-em transition-colors shadow-sm">
                  <MixIcon width={20} height={20} />
                </div>
                <h3 className="text-lg lg:text-xl font-bold text-c-fg-2">The Network</h3>
              </div>
              <h4 className="text-c-fg font-medium mb-3">Symbiotic Intelligence</h4>
              <p className="text-c-fg-5 text-sm leading-relaxed">
                Our products don&apos;t exist in silos. They share data layers, user bases, and growth loops, creating an unfair ecosystem advantage for every new launch.
              </p>
            </div>

            <div className="absolute bottom-12 right-12 w-32 h-32 opacity-40 group-hover:opacity-70 transition-opacity duration-500 pointer-events-none">
              <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-c-fg-3 rounded-full z-10 -translate-x-1/2 -translate-y-1/2" style={{ boxShadow: "0 0 10px var(--c-svg-node-glow)" }} />
              <div className="absolute top-0 left-0 w-full h-full border border-c-line-2 rounded-full opacity-30" />
              <div className="absolute top-4 left-4 w-24 h-24 border border-c-fg-6 rounded-full opacity-50" />
              <div className="absolute top-0 left-1/2 w-1.5 h-1.5 bg-c-fg-5 rounded-full -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-4 right-4 w-1.5 h-1.5 bg-c-fg-5 rounded-full" />
              <div className="absolute top-1/2 left-0 w-1.5 h-1.5 bg-c-fg-6 rounded-full -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute top-1/2 left-1/2 w-16 h-[1px] bg-c-fg-5 -translate-x-1/2 -translate-y-1/2 rotate-45 opacity-60" />
              <div className="absolute top-1/2 left-1/2 w-16 h-[1px] bg-c-fg-5 -translate-x-1/2 -translate-y-1/2 -rotate-45 opacity-60" />
            </div>
          </Card>

        </div>
      </div>
    </section>
  );
};

export default About;
