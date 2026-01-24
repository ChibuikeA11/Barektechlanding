"use client";

import React, { useEffect, useRef } from 'react';
import { ArrowRightIcon, Component2Icon, LightningBoltIcon, CubeIcon, TriangleUpIcon, CircleIcon } from '@radix-ui/react-icons';
import { Button } from '@radix-ui/themes';

const Hero: React.FC = () => {
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const orb = orbRef.current;
    if (!orb) return;

    let frameId = 0;
    const target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };

    const update = () => {
      current.x += (target.x - current.x) * 0.08;
      current.y += (target.y - current.y) * 0.08;
      orb.style.transform = `translate(${current.x}px, ${current.y}px)`;
      frameId = requestAnimationFrame(update);
    };

    const onMove = (event: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const offsetX = (event.clientX / innerWidth - 0.5) * 120;
      const offsetY = (event.clientY / innerHeight - 0.5) * 120;
      target.x = offsetX;
      target.y = offsetY;
    };

    frameId = requestAnimationFrame(update);
    window.addEventListener('mousemove', onMove);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('mousemove', onMove);
    };
  }, []);

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden bg-background pt-32 pb-20">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-stone-800/20 to-transparent pointer-events-none opacity-50 blur-3xl" />
      <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-stone-800/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-[20%] left-[-10%] w-96 h-96 bg-stone-800/20 rounded-full blur-[100px] pointer-events-none" />

      {/* Orb Gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          ref={orbRef}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px] rounded-full opacity-60 blur-[120px] bg-[radial-gradient(circle,_rgba(120,113,108,0.55),_rgba(12,10,9,0)_65%)]"
        />
      </div>

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
          We build a productized portfolio of software startups—AI-native ventures designed to scale,
          compound, and deliver lasting value.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center mb-20 animate-[fadeIn_1.2s_ease-out]">
          <Button
            asChild
            variant="outline"
            color="gray"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-transparent border-stone-700 text-stone-300 hover:text-white hover:border-stone-500 hover:bg-stone-900/50 transition-all duration-300 overflow-hidden"
          >
            <a href="#portfolio">
              <span className="relative z-10">View the Portfolio</span>
              <ArrowRightIcon className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>

        {/* Logos Section */}
        <div className="relative animate-[fadeIn_1.5s_ease-out]">
          <p className="text-stone-600 text-sm font-medium uppercase tracking-widest mb-8">Powering Technologies For</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex items-center gap-2 group cursor-pointer">
               <Component2Icon className="w-6 h-6 text-stone-300 group-hover:text-white transition-colors" />
               <span className="text-xl font-bold text-stone-300 group-hover:text-white transition-colors">Vercel</span>
            </div>
             <div className="flex items-center gap-2 group cursor-pointer">
               <CubeIcon className="w-6 h-6 text-stone-300 group-hover:text-white transition-colors" />
               <span className="text-xl font-bold text-stone-300 group-hover:text-white transition-colors">Square</span>
            </div>
            <div className="flex items-center gap-2 group cursor-pointer">
               <TriangleUpIcon className="w-6 h-6 text-stone-300 group-hover:text-white transition-colors" />
               <span className="text-xl font-bold text-stone-300 group-hover:text-white transition-colors">Airbnb</span>
            </div>
            <div className="flex items-center gap-2 group cursor-pointer">
               <LightningBoltIcon className="w-6 h-6 text-stone-300 group-hover:text-white transition-colors" />
               <span className="text-xl font-bold text-stone-300 group-hover:text-white transition-colors">Stripe</span>
            </div>
             <div className="flex items-center gap-2 group cursor-pointer">
               <CircleIcon className="w-6 h-6 text-stone-300 group-hover:text-white transition-colors" />
               <span className="text-xl font-bold text-stone-300 group-hover:text-white transition-colors">Google</span>
            </div>
          </div>
        </div>

      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[var(--color-background)] via-[var(--color-background)] to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;
