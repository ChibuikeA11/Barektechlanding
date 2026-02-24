"use client";

import React from 'react';
import { Card } from '@radix-ui/themes';

const leadership = {
  name: 'Kehinde Michael Omole',
  role: 'CEO',
  tagline: 'Visionary leadership for sustainable growth.',
  bio: [
    'Mr. Kehinde brings a founder-first mindset and a relentless focus on product quality, helping the team ship technology that feels human and useful.',
    'With a background spanning strategy, partnerships, and scale, he keeps the company aligned on impact while building a culture of trust.'
  ],
  image: '/assets/team/KehindeOmole.png'
};

const team = [
  { name: 'Raphael Ameh', role: 'Engineering Lead', focus: 'Platform architecture, performance, and delivery.', image: '/assets/team/RaphaelAmeh.png' },
  { name: 'Samuel Kazim', role: 'Head of Operations', focus: 'Execution, systems, and operational excellence.', image: '/assets/team/placeholder.svg' },
  { name: 'Charles Anene', role: 'Engineering Lead', focus: 'Product engineering, quality, and reliability.', image: '/assets/team/placeholder.svg' },
  { name: 'Anne O. Okolo', role: 'Head of Design', focus: 'Design systems, product craft, and visual coherence.', image: '/assets/team/placeholder.svg' },
  { name: 'Emmanuel Odukoya', role: 'Head of Branding & Strategy', focus: 'Brand narrative, positioning, and growth strategy.', image: '/assets/team/placeholder.svg' }
];

const cardClass = "bg-[var(--c-card)] backdrop-blur-xl border border-[var(--c-card-border)] shadow-card-lg";

const Team: React.FC = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[800px] blur-[160px] rounded-full pointer-events-none" style={{ background: "var(--c-glow)" }} />
      <div className="absolute bottom-0 right-[-10%] w-72 h-72 blur-[120px] rounded-full pointer-events-none" style={{ background: "var(--c-glow-2)" }} />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="mb-14">
          <p className="text-c-fg-4 text-sm uppercase tracking-[0.3em]">Our Team</p>
          <h1 className="text-4xl md:text-6xl font-bold text-c-fg mt-4">
            People building Barek.
          </h1>
          <p className="text-c-fg-4 max-w-2xl mt-4">
            Meet the leadership guiding product, operations, and engineering. Built for craft,
            speed, and accountability.
          </p>
        </div>

        {/* Leadership */}
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-8 lg:gap-10 items-start mb-16 lg:mb-20">
          <Card className={`${cardClass} rounded-[1.75rem] p-3 sm:p-4`}>
            <div className="rounded-[1.4rem] overflow-hidden bg-c-bg-2 relative flex items-center justify-center">
              <img
                src={leadership.image}
                alt={leadership.name}
                className="w-full h-[300px] sm:h-[340px] lg:h-[380px] object-contain object-center"
                onError={(event) => { event.currentTarget.src = '/assets/team/placeholder.svg'; }}
              />
              <div className="absolute inset-0 pointer-events-none bg-black/15" />
            </div>
          </Card>

          <Card className={`${cardClass} rounded-[1.75rem] p-6 sm:p-7 lg:p-8 text-c-fg`}>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-[var(--c-inset)] text-xs font-semibold uppercase tracking-widest text-c-fg-4 border border-c-icon-border">
              {leadership.role}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mt-4">{leadership.name}</h2>
            <p className="text-c-fg-4 mt-2 font-medium">{leadership.tagline}</p>
            <div className="mt-6 space-y-4 text-c-fg-4 leading-relaxed">
              {leadership.bio.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Card>
        </div>

        {/* Team Grid */}
        <div className="px-2 sm:px-4 lg:px-6">
          <h3 className="text-2xl font-semibold text-c-fg mb-8">Our Team</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {team.slice(0, 3).map((member) => (
              <Card key={member.name} className={`${cardClass} rounded-[1.25rem] p-4 sm:p-5`}>
                <div className="h-44 sm:h-48 lg:h-52 rounded-xl bg-c-bg-2 mb-4 overflow-hidden relative flex items-center justify-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-contain object-center"
                    onError={(event) => { event.currentTarget.src = '/assets/team/placeholder.svg'; }}
                  />
                  <div className="absolute inset-0 pointer-events-none bg-black/15" />
                </div>
                <p className="text-lg font-semibold text-c-fg">{member.name}</p>
                <p className="text-sm text-c-fg-4 mb-3">{member.role}</p>
                <p className="text-sm text-c-fg-5">{member.focus}</p>
              </Card>
            ))}
          </div>

          <div className="mt-8 lg:mt-10 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
              {team.slice(3).map((member) => (
                <Card key={member.name} className={`${cardClass} rounded-[1.25rem] p-4 sm:p-5`}>
                  <div className="h-44 sm:h-48 lg:h-52 rounded-xl bg-c-bg-2 mb-4 overflow-hidden relative flex items-center justify-center">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-contain object-center"
                      onError={(event) => { event.currentTarget.src = '/assets/team/placeholder.svg'; }}
                    />
                    <div className="absolute inset-0 pointer-events-none bg-black/15" />
                  </div>
                  <p className="text-lg font-semibold text-c-fg">{member.name}</p>
                  <p className="text-sm text-c-fg-4 mb-3">{member.role}</p>
                  <p className="text-sm text-c-fg-5">{member.focus}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
