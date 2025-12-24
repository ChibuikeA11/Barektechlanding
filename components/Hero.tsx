import React from 'react';
import { ArrowRight, Hexagon, Zap, Box, Triangle, Circle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden bg-[#0c0a09] pt-32 pb-20">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-stone-800/20 to-transparent pointer-events-none opacity-50 blur-3xl" />
      <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-stone-800/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-[20%] left-[-10%] w-96 h-96 bg-stone-800/20 rounded-full blur-[100px] pointer-events-none" />

      {/* Honeycomb Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03]" 
           style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full text-center">
        
        {/* Badge */}
        <div className="flex justify-center mb-8 animate-[fadeIn_0.5s_ease-out]">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-900/50 border border-stone-800/50 backdrop-blur-md shadow-2xl shadow-black/50">
             <div className="w-2 h-2 rounded-full bg-stone-500 animate-pulse" />
             <span className="text-xs font-semibold text-stone-400 tracking-widest uppercase">
               The Product Studio
             </span>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight mb-8 max-w-5xl mx-auto leading-[0.95] animate-[slideUp_0.8s_ease-out]">
          <span className="text-stone-500">Where</span>{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-stone-200 to-stone-500">
            Intelligence
          </span>
          <br />
          <span className="text-stone-500">Meets</span>{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-stone-200 to-stone-500">
            Innovation
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-lg sm:text-xl text-stone-400 leading-relaxed max-w-2xl mx-auto mb-12 animate-[slideUp_1s_ease-out]">
          Unlock the power of our ecosystem. From automation to smart insights, 
          we build the <span className="text-stone-200 font-medium">AI solutions and SaaS products</span> that redefine everyday technology.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center mb-20 animate-[fadeIn_1.2s_ease-out]">
          <a 
            href="#portfolio" 
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-transparent border border-stone-700 rounded-full font-medium text-stone-300 hover:text-white hover:border-stone-500 hover:bg-stone-900/50 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10">Explore Ecosystem</span>
            <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Logos Section */}
        <div className="relative animate-[fadeIn_1.5s_ease-out]">
          <p className="text-stone-600 text-sm font-medium uppercase tracking-widest mb-8">Powering Technologies For</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex items-center gap-2 group cursor-pointer">
               <Hexagon className="w-6 h-6 text-stone-300 group-hover:text-white transition-colors" />
               <span className="text-xl font-bold text-stone-300 group-hover:text-white transition-colors">Vercel</span>
            </div>
             <div className="flex items-center gap-2 group cursor-pointer">
               <Box className="w-6 h-6 text-stone-300 group-hover:text-white transition-colors" />
               <span className="text-xl font-bold text-stone-300 group-hover:text-white transition-colors">Square</span>
            </div>
            <div className="flex items-center gap-2 group cursor-pointer">
               <Triangle className="w-6 h-6 text-stone-300 group-hover:text-white transition-colors" />
               <span className="text-xl font-bold text-stone-300 group-hover:text-white transition-colors">Airbnb</span>
            </div>
            <div className="flex items-center gap-2 group cursor-pointer">
               <Zap className="w-6 h-6 text-stone-300 group-hover:text-white transition-colors" />
               <span className="text-xl font-bold text-stone-300 group-hover:text-white transition-colors">Stripe</span>
            </div>
             <div className="flex items-center gap-2 group cursor-pointer">
               <Circle className="w-6 h-6 text-stone-300 group-hover:text-white transition-colors" />
               <span className="text-xl font-bold text-stone-300 group-hover:text-white transition-colors">Google</span>
            </div>
          </div>
        </div>

      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0c0a09] via-[#0c0a09] to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;