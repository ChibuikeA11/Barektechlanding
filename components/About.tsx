import React from 'react';
import { BarChartIcon, LightningBoltIcon, MixIcon } from '@radix-ui/react-icons';
import { Card } from '@radix-ui/themes';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-stone-800/10 blur-[100px] rounded-full" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-stone-900/20 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-stone-900 border border-stone-800 mb-6">
            <span className="text-xs font-medium text-stone-400 uppercase tracking-widest">The Studio Model</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-stone-100">
            The Operating System for Innovation
          </h2>
          
          <p className="text-lg text-stone-400 max-w-2xl mx-auto leading-relaxed">
            Barek isn’t a traditional VC or services shop. We build and own a productized portfolio
            of software startups, backed by shared systems and execution.
          </p>
        </div>

        {/* 3-Column Grid - Horizontal on Tablet (md:grid-cols-3) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Card 1: Market Validation Protocol */}
          <Card className="bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.35)] rounded-3xl p-6 lg:p-8 hover:border-white/10 transition-colors duration-500 group overflow-hidden relative min-h-[420px] flex flex-col">
            <div className="relative z-10">
                <div className="flex items-center gap-3 mb-5">
                    <div className="p-2.5 bg-stone-900 border border-stone-800 rounded-lg text-stone-300 group-hover:text-white transition-colors shadow-lg">
                        <BarChartIcon width={20} height={20} />
                    </div>
                    <h3 className="text-lg lg:text-xl font-bold text-stone-200">The Filter</h3>
                </div>
                <h4 className="text-stone-100 font-medium mb-3">Market Validation Protocol</h4>
                <p className="text-stone-500 text-sm leading-relaxed">
                    We don't guess. We test. Our proprietary validation sprints kill 90% of ideas internally, ensuring only the strongest concepts with real demand survive.
                </p>
            </div>
            
            {/* Visual: Graph Illustration */}
            <div className="mt-auto pt-8 relative h-40 w-full opacity-50 group-hover:opacity-70 transition-opacity">
              <svg
                viewBox="0 0 360 140"
                className="w-full h-full"
                role="img"
                aria-label="Validation growth graph"
              >
                <defs>
                  <linearGradient id="lineGlow" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="rgba(168,162,158,0.2)" />
                    <stop offset="100%" stopColor="rgba(245,245,244,0.8)" />
                  </linearGradient>
                  <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="rgba(214,211,209,0.35)" />
                    <stop offset="100%" stopColor="rgba(12,10,9,0)" />
                  </linearGradient>
                </defs>

                <rect x="0" y="0" width="360" height="140" fill="transparent" />
                <path
                  d="M10 118 L70 96 L120 102 L170 78 L220 84 L280 52 L340 34"
                  stroke="url(#lineGlow)"
                  strokeWidth="3"
                  fill="none"
                />
                <path
                  d="M10 118 L70 96 L120 102 L170 78 L220 84 L280 52 L340 34 L340 130 L10 130 Z"
                  fill="url(#areaFill)"
                />
                <g stroke="rgba(120,113,108,0.35)" strokeWidth="1">
                  <line x1="10" y1="118" x2="340" y2="118" />
                  <line x1="10" y1="90" x2="340" y2="90" />
                  <line x1="10" y1="62" x2="340" y2="62" />
                  <line x1="10" y1="34" x2="340" y2="34" />
                </g>
                <g fill="rgba(245,245,244,0.9)">
                  <circle cx="70" cy="96" r="3.5" />
                  <circle cx="170" cy="78" r="3.5" />
                  <circle cx="280" cy="52" r="3.5" />
                  <circle cx="340" cy="34" r="4" />
                </g>
              </svg>
            </div>
          </Card>

          {/* Card 2: Capital & Velocity */}
          <Card className="bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.35)] rounded-3xl p-6 lg:p-8 hover:border-white/10 transition-colors duration-500 group overflow-hidden relative min-h-[420px] flex flex-col">
             <div className="relative z-10">
                <div className="flex items-center gap-3 mb-5">
                    <div className="p-2.5 bg-stone-900 border border-stone-800 rounded-lg text-stone-300 group-hover:text-white transition-colors shadow-lg">
                        <LightningBoltIcon width={20} height={20} />
                    </div>
                    <h3 className="text-lg lg:text-xl font-bold text-stone-200">The Engine</h3>
                </div>
                <h4 className="text-stone-100 font-medium mb-3">Capital & Velocity</h4>
                <p className="text-stone-500 text-sm leading-relaxed">
                    Protected from the fundraising treadmill. We provide complete pre-seed funding and shared technical infrastructure so founders can focus purely on product.
                </p>
            </div>

            {/* Visual: Radar / Shield Rings */}
            <div className="absolute -bottom-16 -right-16 w-64 h-64 border border-stone-800/50 rounded-full flex items-center justify-center opacity-30 group-hover:opacity-50 transition-all duration-700 group-hover:scale-105">
                <div className="w-48 h-48 border border-stone-700/50 rounded-full flex items-center justify-center">
                    <div className="w-32 h-32 border border-stone-600/50 rounded-full flex items-center justify-center bg-stone-900/50 backdrop-blur-sm">
                        <div className="w-4 h-4 bg-stone-400 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.5)]"></div>
                    </div>
                </div>
            </div>
          </Card>

          {/* Card 3: Symbiotic Intelligence */}
          <Card className="bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.35)] rounded-3xl p-6 lg:p-8 hover:border-white/10 transition-colors duration-500 group overflow-hidden relative min-h-[420px] flex flex-col">
             <div className="relative z-10">
                <div className="flex items-center gap-3 mb-5">
                    <div className="p-2.5 bg-stone-900 border border-stone-800 rounded-lg text-stone-300 group-hover:text-white transition-colors shadow-lg">
                        <MixIcon width={20} height={20} />
                    </div>
                    <h3 className="text-lg lg:text-xl font-bold text-stone-200">The Network</h3>
                </div>
                <h4 className="text-stone-100 font-medium mb-3">Symbiotic Intelligence</h4>
                <p className="text-stone-500 text-sm leading-relaxed">
                    Our products don't exist in silos. They share data layers, user bases, and growth loops, creating an unfair ecosystem advantage for every new launch.
                </p>
            </div>

            {/* Visual: Network Nodes */}
            <div className="absolute bottom-12 right-12 w-32 h-32 opacity-40 group-hover:opacity-70 transition-opacity duration-500 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-stone-300 rounded-full shadow-[0_0_10px_white] z-10 -translate-x-1/2 -translate-y-1/2"></div>
                
                {/* Orbital Rings */}
                <div className="absolute top-0 left-0 w-full h-full border border-stone-700 rounded-full opacity-30 animate-[spin_10s_linear_infinite]"></div>
                <div className="absolute top-4 left-4 w-24 h-24 border border-stone-600 rounded-full opacity-50"></div>

                {/* Satellite Nodes */}
                <div className="absolute top-0 left-1/2 w-1.5 h-1.5 bg-stone-500 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-4 right-4 w-1.5 h-1.5 bg-stone-500 rounded-full"></div>
                <div className="absolute top-1/2 left-0 w-1.5 h-1.5 bg-stone-600 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                
                {/* Connecting Lines (CSS) */}
                <div className="absolute top-1/2 left-1/2 w-16 h-[1px] bg-stone-500/60 -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
                <div className="absolute top-1/2 left-1/2 w-16 h-[1px] bg-stone-500/60 -translate-x-1/2 -translate-y-1/2 -rotate-45"></div>
            </div>
          </Card>

        </div>
      </div>
    </section>
  );
};

export default About;
