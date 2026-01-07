import React from 'react';
import { ShieldCheck, LineChart, Cpu, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#0c0a09] relative overflow-hidden">
      
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
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-stone-100 to-stone-500">
              The Operating System for Innovation
            </span>
          </h2>
          
          <p className="text-lg text-stone-400 max-w-2xl mx-auto leading-relaxed">
            Barek isn’t a traditional VC or services shop. We build and own a productized portfolio
            of software startups, backed by shared systems and execution.
          </p>
        </div>

        {/* 3-Column Grid - Horizontal on Tablet (md:grid-cols-3) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Card 1: Market Validation Protocol */}
          <div className="bg-[#141210] border border-white/5 rounded-3xl p-6 lg:p-8 hover:border-white/10 transition-colors duration-500 group overflow-hidden relative min-h-[420px] flex flex-col">
            <div className="relative z-10">
                <div className="flex items-center gap-3 mb-5">
                    <div className="p-2.5 bg-stone-900 border border-stone-800 rounded-lg text-stone-300 group-hover:text-white transition-colors shadow-lg">
                        <LineChart size={20} />
                    </div>
                    <h3 className="text-lg lg:text-xl font-bold text-stone-200">The Filter</h3>
                </div>
                <h4 className="text-stone-100 font-medium mb-3">Market Validation Protocol</h4>
                <p className="text-stone-500 text-sm leading-relaxed">
                    We don't guess. We test. Our proprietary validation sprints kill 90% of ideas internally, ensuring only the strongest concepts with real demand survive.
                </p>
            </div>
            
            {/* Visual: Bar Chart */}
            <div className="mt-auto pt-8 relative h-40 w-full flex items-end justify-between gap-2 lg:gap-4 opacity-40 group-hover:opacity-60 transition-opacity">
                <div className="w-full bg-stone-800/50 rounded-t-sm h-[20%] border-t border-white/5"></div>
                <div className="w-full bg-stone-800/50 rounded-t-sm h-[35%] border-t border-white/5"></div>
                <div className="w-full bg-stone-800/80 rounded-t-sm h-[15%] border-t border-white/5"></div>
                <div className="w-full bg-stone-700/80 rounded-t-sm h-[50%] border-t border-white/10"></div>
                <div className="w-full bg-gradient-to-t from-stone-600 to-stone-400 rounded-t-sm h-[85%] shadow-[0_0_15px_rgba(255,255,255,0.1)]"></div>
            </div>
          </div>

          {/* Card 2: Capital & Velocity */}
          <div className="bg-[#141210] border border-white/5 rounded-3xl p-6 lg:p-8 hover:border-white/10 transition-colors duration-500 group overflow-hidden relative min-h-[420px] flex flex-col">
             <div className="relative z-10">
                <div className="flex items-center gap-3 mb-5">
                    <div className="p-2.5 bg-stone-900 border border-stone-800 rounded-lg text-stone-300 group-hover:text-white transition-colors shadow-lg">
                        <Zap size={20} />
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
          </div>

          {/* Card 3: Symbiotic Intelligence */}
          <div className="bg-[#141210] border border-white/5 rounded-3xl p-6 lg:p-8 hover:border-white/10 transition-colors duration-500 group overflow-hidden relative min-h-[420px] flex flex-col">
             <div className="relative z-10">
                <div className="flex items-center gap-3 mb-5">
                    <div className="p-2.5 bg-stone-900 border border-stone-800 rounded-lg text-stone-300 group-hover:text-white transition-colors shadow-lg">
                        <Cpu size={20} />
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
                <div className="absolute top-1/2 left-1/2 w-16 h-[1px] bg-gradient-to-r from-transparent via-stone-500 to-transparent -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
                <div className="absolute top-1/2 left-1/2 w-16 h-[1px] bg-gradient-to-r from-transparent via-stone-500 to-transparent -translate-x-1/2 -translate-y-1/2 -rotate-45"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
