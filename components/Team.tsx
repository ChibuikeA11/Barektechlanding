"use client";

import React from 'react';

const leadership = {
  name: 'Kehinde Omole',
  role: 'CEO',
  tagline: 'Visionary leadership for sustainable growth.',
  bio: [
    'Kehinde brings a founder-first mindset and a relentless focus on product quality, helping the team ship technology that feels human and useful.',
    'With a background spanning strategy, partnerships, and scale, he keeps the company aligned on impact while building a culture of trust.'
  ],
  image: '/assets/team/KehindeOmole.png'
};

const team = [
  {
    name: 'Raphael Ameh',
    role: 'Engineering Lead',
    focus: 'Platform architecture, performance, and delivery.',
    image: '/assets/team/RaphaelAmeh.png'
  },
  {
    name: 'Samuel Kazim',
    role: 'Head of Operations',
    focus: 'Execution, systems, and operational excellence.',
    image: '/assets/team/placeholder.svg'
  },
  {
    name: 'Charles Anene',
    role: 'Engineering Lead',
    focus: 'Product engineering, quality, and reliability.',
    image: '/assets/team/placeholder.svg'
  }
];

const Team: React.FC = () => {
  return (
    <section className="py-24 bg-[#0c0a09] relative overflow-hidden">
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-stone-800/10 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-[-10%] w-72 h-72 bg-stone-700/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="mb-14">
          <p className="text-stone-400 text-sm uppercase tracking-[0.3em]">Our Team</p>
          <h1 className="text-4xl md:text-6xl font-bold text-stone-100 mt-4">
            People building Barek.
          </h1>
          <p className="text-stone-400 max-w-2xl mt-4">
            Meet the leadership guiding product, operations, and engineering. Built for craft,
            speed, and accountability.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-10 items-start mb-20">
          <div className="bg-[#141210] border border-white/5 rounded-[2rem] p-4 shadow-2xl">
            <div className="rounded-[1.5rem] overflow-hidden bg-stone-900 relative">
              <img
                src={leadership.image}
                alt={leadership.name}
                className="w-full h-[380px] object-cover"
                onError={(event) => {
                  const img = event.currentTarget;
                  img.src = '/assets/team/placeholder.svg';
                }}
              />
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </div>

          <div className="bg-[#141210] border border-white/5 rounded-[2rem] p-8 md:p-10 text-stone-100 shadow-2xl">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-stone-900/80 text-xs font-semibold uppercase tracking-widest text-stone-400 border border-stone-800">
              {leadership.role}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mt-4">{leadership.name}</h2>
            <p className="text-stone-400 mt-2 font-medium">{leadership.tagline}</p>
            <div className="mt-6 space-y-4 text-stone-400 leading-relaxed">
              {leadership.bio.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-[#141210] border border-white/5 rounded-[2.5rem] p-8 md:p-12">
          <h3 className="text-2xl font-semibold text-stone-100 mb-8">Our Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map((member) => (
              <div key={member.name} className="bg-[#0c0a09] border border-white/5 rounded-[1.5rem] p-6 shadow-xl">
                <div className="h-48 rounded-2xl bg-stone-900/90 mb-5 overflow-hidden relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    onError={(event) => {
                      const img = event.currentTarget;
                    img.src = '/assets/team/placeholder.svg';
                    }}
                  />
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/30 to-transparent" />
                </div>
                <p className="text-lg font-semibold text-stone-100">{member.name}</p>
                <p className="text-sm text-stone-400 mb-3">{member.role}</p>
                <p className="text-sm text-stone-500">{member.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
