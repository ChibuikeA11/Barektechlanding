"use client";

import React from 'react';
import { Button, Card } from '@radix-ui/themes';

const skills = [
  { label: 'Product Strategy', value: 88 },
  { label: 'AI Engineering', value: 92 },
  { label: 'Growth Systems', value: 84 },
  { label: 'Brand & Design', value: 79 }
];

const stats = [
  { value: '6+', label: 'Years of Combined Experience' },
  { value: '1+', label: 'Products Shipped' },
  { value: '5+', label: 'Tools Integrated' },
  { value: '4+', label: 'Markets Evaluated' }
];

const AboutPage: React.FC = () => {
  return (
    <section className="bg-background text-stone-200">
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 opacity-[0.04] bg-noise" />

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
          <Card className="rounded-3xl overflow-hidden bg-panel border border-white/5 shadow-2xl">
            <div className="aspect-[5/4] w-full relative">
              <img
                src="/assets/office-space.png"
                alt="Barek office space"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-black/40 border border-white/10 p-4 backdrop-blur-sm">
                <p className="text-xs uppercase tracking-[0.3em] text-stone-300">Studio Floor</p>
                <p className="text-sm text-stone-200 mt-2">
                  A culture of builders shipping human-first software.
                </p>
              </div>
            </div>
          </Card>

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-stone-500">About Us</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-100 mt-4">
              We Always Build <br className="hidden sm:block" />
              The Best.
            </h2>
            <p className="text-stone-400 mt-4 leading-relaxed">
              Barek is a productized studio where designers, engineers, and operators build
              software startups side by side. We move with startup speed and operate with
              system-level rigor.
            </p>
            <p className="text-stone-500 mt-4 leading-relaxed">
              From first prototype to scale, we combine market validation, shared infrastructure,
              and disciplined execution to build enduring products.
            </p>
            <Button variant="outline" color="gray" className="mt-6 inline-flex items-center rounded-full border-stone-700 px-6 py-3 text-sm font-medium text-stone-200 hover:border-stone-500 hover:text-white transition-colors">
              Partner With Us
            </Button>
          </div>
        </div>
      </div>

      {/* Skills + Stats */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 items-start">
          <Card className="bg-panel border border-white/5 rounded-3xl p-6 sm:p-8">
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
                      className="h-full rounded-full bg-stone-400"
                      style={{ width: `${skill.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <Card
                key={stat.label}
                className="bg-panel border border-white/5 rounded-2xl p-5 text-center"
              >
                <p className="text-2xl font-bold text-stone-100">{stat.value}</p>
                <p className="text-xs uppercase tracking-[0.25em] text-stone-500 mt-2">
                  {stat.label}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8 pb-24">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-panel">
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 opacity-[0.05] bg-noise" />

          <div className="relative px-6 sm:px-10 py-14 text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-stone-500">Our Focus</p>
            <h3 className="text-3xl sm:text-4xl font-bold text-stone-100 mt-4">
              Building scalable software startups.
            </h3>
            <p className="text-stone-400 mt-4 max-w-2xl mx-auto">
              We are a portfolio of software startups, building scalable software products that drive innovation and growth.
            </p>
            <Button className="mt-8 inline-flex items-center rounded-full bg-stone-100 px-6 py-3 text-sm font-semibold text-stone-900 hover:bg-white transition-colors">
              Explore the Portfolio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
