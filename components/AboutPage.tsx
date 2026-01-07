"use client";

import React from 'react';

const skills = [
  { label: 'Product Strategy', value: 88 },
  { label: 'AI Engineering', value: 92 },
  { label: 'Growth Systems', value: 84 },
  { label: 'Brand & Design', value: 79 }
];

const stats = [
  { value: '20+', label: 'Years of Experience' },
  { value: '1,000+', label: 'Products Shipped' },
  { value: '300+', label: 'Founders Supported' },
  { value: '64', label: 'Markets Entered' }
];

const AboutPage: React.FC = () => {
  return (
    <section className="bg-[#0c0a09] text-stone-200">
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(120,113,108,0.25),_transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,_rgba(12,10,9,0.9),_rgba(12,10,9,0.4),_rgba(12,10,9,0.9))]" />
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_1px_1px,_rgba(255,255,255,0.12)_1px,_transparent_0)] bg-[length:36px_36px]" />

        <div className="relative max-w-6xl mx-auto px-6 lg:px-8 py-24 lg:py-32 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-stone-400">Barek Technologies</p>
          <h1 className="text-4xl sm:text-6xl font-bold text-stone-100 mt-6">About Us</h1>
          <div className="mt-4 text-sm text-stone-500">
            <span>Home</span>
            <span className="mx-2">/</span>
            <span className="text-stone-300">About Us</span>
          </div>
        </div>
      </div>

      {/* Story + Image */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 items-center">
          <div className="rounded-3xl overflow-hidden bg-[#141210] border border-white/5 shadow-2xl">
            <div className="aspect-[5/4] w-full bg-[linear-gradient(135deg,_rgba(120,113,108,0.2),_rgba(41,37,36,0.8))] relative">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_rgba(255,255,255,0.12),_transparent_60%)]" />
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-black/40 border border-white/10 p-4 backdrop-blur-sm">
                <p className="text-xs uppercase tracking-[0.3em] text-stone-400">Studio Floor</p>
                <p className="text-sm text-stone-200 mt-2">
                  A culture of builders shipping human-first software.
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-stone-500">About Us</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-100 mt-4">
              We Always Build <br className="hidden sm:block" />
              The Best.
            </h2>
            <p className="text-stone-400 mt-4 leading-relaxed">
              Barek is a product studio where designers, engineers, and operators build companies
              side by side. We bring the pace of a startup with the rigor of an operating system.
            </p>
            <p className="text-stone-500 mt-4 leading-relaxed">
              From first prototype to scale, we combine market validation, shared infrastructure,
              and disciplined execution to deliver enduring ventures.
            </p>
            <button className="mt-6 inline-flex items-center rounded-full border border-stone-700 px-6 py-3 text-sm font-medium text-stone-200 hover:border-stone-500 hover:text-white transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Skills + Stats */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 items-start">
          <div className="bg-[#141210] border border-white/5 rounded-3xl p-6 sm:p-8">
            <h3 className="text-2xl font-semibold text-stone-100">Our Skills</h3>
            <p className="text-stone-500 text-sm mt-3">
              Measured capabilities across the studio that power every new launch.
            </p>
            <div className="mt-8 space-y-6">
              {skills.map((skill) => (
                <div key={skill.label}>
                  <div className="flex items-center justify-between text-sm text-stone-300 mb-2">
                    <span>{skill.label}</span>
                    <span className="text-stone-500">{skill.value}%</span>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-stone-900">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-stone-300 to-stone-500"
                      style={{ width: `${skill.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-[#141210] border border-white/5 rounded-2xl p-5 text-center"
              >
                <p className="text-2xl font-bold text-stone-100">{stat.value}</p>
                <p className="text-xs uppercase tracking-[0.25em] text-stone-500 mt-2">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8 pb-24">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#141210]">
          <div className="absolute inset-0 bg-[linear-gradient(110deg,_rgba(12,10,9,0.6),_rgba(41,37,36,0.6),_rgba(12,10,9,0.6))]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.15),_transparent_55%)]" />

          <div className="relative px-6 sm:px-10 py-14 text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-stone-500">Hire Us Now</p>
            <h3 className="text-3xl sm:text-4xl font-bold text-stone-100 mt-4">
              We Are Always Ready To
              <br className="hidden sm:block" />
              Build What Matters.
            </h3>
            <button className="mt-8 inline-flex items-center rounded-full bg-stone-100 px-6 py-3 text-sm font-semibold text-stone-900 hover:bg-white transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
