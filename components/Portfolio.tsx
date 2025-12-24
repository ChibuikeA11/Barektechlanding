
import React from 'react';
import { ArrowUpRight, Scissors, Shirt, Globe, Activity, Play, Sparkles, HeartPulse, Zap } from 'lucide-react';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 bg-[#0c0a09] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Central Header - Matching About Us Style */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-stone-900 border border-stone-800 mb-6">
             <span className="text-xs font-medium text-stone-400 uppercase tracking-widest">Our Ecosystem</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-stone-100 to-stone-500">
              Selected Ventures
            </span>
          </h2>
          <p className="text-lg text-stone-400 max-w-2xl mx-auto leading-relaxed">
             A curated selection of high-impact startups built, launched, and scaled from our studio.
          </p>
        </div>

        {/* 2x2 Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card 1: Trimly */}
          <div className="group relative overflow-hidden rounded-3xl bg-[#141210] border border-white/5 hover:border-white/10 transition-colors duration-500 min-h-[360px] p-8 flex flex-col justify-between">
            {/* Ambient Bg */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-stone-800/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-stone-700/20 transition-colors" />
            
            <div className="relative z-10">
               <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-xl bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-200 group-hover:scale-105 transition-transform duration-300">
                     <Scissors size={20} />
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-stone-900/50 border border-stone-800 text-[10px] font-bold uppercase tracking-wider text-stone-500">
                    <Sparkles size={10} className="text-stone-400" /> Video AI
                  </span>
               </div>
               
               <h3 className="text-2xl font-bold text-stone-100 mb-3 tracking-tight group-hover:text-white transition-colors">Trimly.</h3>
               <p className="text-stone-500 text-sm leading-relaxed max-w-sm">
                 AI-native video production suite. Identify viral moments, smart-cut footage, and sync audio in seconds.
               </p>
            </div>

            {/* Visual: Waveform */}
            <div className="relative z-10 mt-8">
               <div className="flex items-center gap-1 h-8 opacity-40 group-hover:opacity-80 transition-opacity">
                  {[40, 60, 30, 80, 50, 90, 40, 60, 30, 50, 70, 40, 60].map((h, i) => (
                    <div key={i} className="w-1.5 bg-stone-500 rounded-full" style={{ height: `${h}%` }} />
                  ))}
               </div>
            </div>
          </div>

          {/* Card 2: GlamUp */}
          <div className="group relative overflow-hidden rounded-3xl bg-[#141210] border border-white/5 hover:border-white/10 transition-colors duration-500 min-h-[360px] p-8 flex flex-col justify-between">
             {/* Ambient Bg */}
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-stone-800/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-stone-700/20 transition-colors" />

             <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 rounded-xl bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-200 group-hover:scale-105 transition-transform duration-300">
                      <Shirt size={20} />
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-stone-900/50 border border-stone-800 text-[10px] font-bold uppercase tracking-wider text-stone-500">
                      Fashion
                    </span>
                </div>
                
                <h3 className="text-2xl font-bold text-stone-100 mb-3 tracking-tight group-hover:text-white transition-colors">GlamUp.</h3>
                <p className="text-stone-500 text-sm leading-relaxed max-w-sm">
                   The digital wardrobe. Generative styling that learns your aesthetic and visualizes outfits on your digital twin.
                </p>
             </div>

             {/* Visual: Swatches */}
             <div className="relative z-10 mt-8 flex gap-3 opacity-60 group-hover:opacity-100 transition-opacity">
                <div className="w-8 h-8 rounded-full bg-stone-800 border border-stone-700" />
                <div className="w-8 h-8 rounded-full bg-[#292524] border border-stone-700" />
                <div className="w-8 h-8 rounded-full bg-[#44403c] border border-stone-700" />
                <div className="w-8 h-8 rounded-full bg-stone-900 border border-stone-700 border-dashed flex items-center justify-center text-[10px] text-stone-500">+</div>
             </div>
          </div>

          {/* Card 3: Genna */}
          <div className="group relative overflow-hidden rounded-3xl bg-[#141210] border border-white/5 hover:border-white/10 transition-colors duration-500 min-h-[360px] p-8 flex flex-col justify-between">
             <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 rounded-xl bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-200 group-hover:scale-105 transition-transform duration-300">
                      <Globe size={20} />
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-stone-900/50 border border-stone-800 text-[10px] font-bold uppercase tracking-wider text-stone-500">
                       <Zap size={10} className="text-stone-400" /> Creator OS
                    </span>
                </div>
                
                <h3 className="text-2xl font-bold text-stone-100 mb-3 tracking-tight group-hover:text-white transition-colors">Genna.</h3>
                <p className="text-stone-500 text-sm leading-relaxed max-w-sm">
                   Managing the business of influence. A unified dashboard for UGC creators to handle deals, analytics, and content flow.
                </p>
             </div>

             {/* Visual: Dashboard Bars */}
             <div className="relative z-10 mt-8 w-full max-w-[200px]">
                <div className="space-y-2 opacity-50 group-hover:opacity-80 transition-opacity">
                    <div className="h-1.5 w-full bg-stone-800 rounded-full overflow-hidden">
                        <div className="h-full w-3/4 bg-stone-500 rounded-full" />
                    </div>
                    <div className="h-1.5 w-full bg-stone-800 rounded-full overflow-hidden">
                        <div className="h-full w-1/2 bg-stone-600 rounded-full" />
                    </div>
                </div>
             </div>
          </div>

          {/* Card 4: NeuroCare */}
          <div className="group relative overflow-hidden rounded-3xl bg-[#141210] border border-white/5 hover:border-white/10 transition-colors duration-500 min-h-[360px] p-8 flex flex-col justify-between">
             {/* Ambient Bg */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-stone-800/20 blur-[60px] rounded-full pointer-events-none" />

             <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 rounded-xl bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-200 group-hover:scale-105 transition-transform duration-300">
                      <Activity size={20} />
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-stone-900/50 border border-stone-800 text-[10px] font-bold uppercase tracking-wider text-stone-500">
                       <HeartPulse size={10} className="text-stone-400" /> Health AI
                    </span>
                </div>
                
                <h3 className="text-2xl font-bold text-stone-100 mb-3 tracking-tight group-hover:text-white transition-colors">NeuroCare.</h3>
                <p className="text-stone-500 text-sm leading-relaxed max-w-sm">
                   Predictive health intelligence. Analyzing subtle biometric patterns to anticipate patient needs before they become critical.
                </p>
             </div>

             {/* Visual: Pulse Line */}
             <div className="relative z-10 mt-8 flex items-center opacity-40 group-hover:opacity-80 transition-opacity">
                <div className="h-[1px] w-8 bg-stone-600" />
                <div className="h-4 w-4 border-l border-t border-stone-500 transform -rotate-45 translate-y-2" />
                <div className="h-8 w-4 border-r border-b border-stone-400 transform -rotate-12 -translate-y-2" />
                <div className="h-[1px] flex-1 bg-stone-600" />
             </div>
          </div>

        </div>
        
        {/* Footer Link */}
         <div className="mt-16 flex justify-center">
            <a href="#" className="group flex items-center gap-2 text-stone-400 hover:text-white transition-colors text-sm font-medium">
                View full portfolio
                <span className="bg-stone-800 p-1 rounded-full group-hover:bg-stone-700 transition-colors">
                    <ArrowUpRight size={14} />
                </span>
            </a>
         </div>
      </div>
    </section>
  );
};

export default Portfolio;
