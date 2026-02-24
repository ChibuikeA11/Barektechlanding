"use client";

import React from 'react';
import { NumberTicker } from './magicui/number-ticker';

const Mission: React.FC = () => {
  return (
    <section id="mission" className="py-32 bg-background relative overflow-hidden border-t border-c-line-3">
      <div className="absolute top-0 left-1/4 w-1/2 h-full blur-[120px] pointer-events-none" style={{ background: "var(--c-glow)" }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
        <div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-10 text-c-fg">
            Empowering the next wave <br />
            <span className="text-c-fg-4">
              of digital innovation.
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-c-fg-4 max-w-3xl mx-auto leading-relaxed">
            We believe that the best way to predict the future is to create it.
            Barek Technologies isn&apos;t just building products; we are building the infrastructure
            for a smarter, more connected world.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-c-line pt-12">
          <div className="flex flex-col items-center">
            <span className="text-3xl sm:text-4xl font-bold text-c-fg-2 mb-2">
              <NumberTicker value={12} delay={0.2} suffix="+" />
            </span>
            <span className="text-sm text-c-fg-5 uppercase tracking-wider font-medium">Products Launched</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl sm:text-4xl font-bold text-c-fg-2 mb-2">
              <NumberTicker value={2.5} delay={0.4} decimalPlaces={1} suffix="M" />
            </span>
            <span className="text-sm text-c-fg-5 uppercase tracking-wider font-medium">Active Users</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl sm:text-4xl font-bold text-c-fg-2 mb-2">
              <NumberTicker value={30} delay={0.6} suffix="+" />
            </span>
            <span className="text-sm text-c-fg-5 uppercase tracking-wider font-medium">Global Markets</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl sm:text-4xl font-bold text-c-fg-2 mb-2">
              <NumberTicker value={45} delay={0.8} />
            </span>
            <span className="text-sm text-c-fg-5 uppercase tracking-wider font-medium">Team Size</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
