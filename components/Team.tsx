"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";

const team = [
  {
    name: "Raphael Ameh",
    role: "Engineering Lead",
    focus: "Platform architecture, performance, and delivery.",
    image: "/assets/team/RaphaelAmeh.png",
    initials: "RA",
  },
  {
    name: "Samuel Kazim",
    role: "Head of Operations",
    focus: "Execution, systems, and operational excellence.",
    image: "/assets/team/placeholder.svg",
    initials: "SK",
  },
  {
    name: "Anne O. Okolo",
    role: "Head of Design",
    focus: "Design systems, product craft, and visual coherence.",
    image: "/assets/team/placeholder.svg",
    initials: "AO",
  },
  {
    name: "Emmanuel Peters",
    role: "Head of Branding & Strategy",
    focus: "Brand narrative, positioning, and growth strategy.",
    image: "/assets/team/placeholder.svg",
    initials: "EP",
  },
  {
    name: "Charles Anene",
    role: "Engineering Lead",
    focus: "Product engineering, quality, and reliability.",
    image: "/assets/team/placeholder.svg",
    initials: "CA",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const, delay: i * 0.08 },
  }),
};

const Team: React.FC = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background glows */}
      <div
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[800px] blur-[160px] rounded-full pointer-events-none"
        style={{ background: "var(--c-glow)" }}
      />
      <div
        className="absolute bottom-0 right-[-10%] w-72 h-72 blur-[120px] rounded-full pointer-events-none"
        style={{ background: "var(--c-glow-2)" }}
      />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-accent-soft border border-accent/20 mb-6">
            <span className="text-xs font-medium text-accent uppercase tracking-widest">
              Our Team
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-c-fg tracking-tighter">
            The people building Barek.
          </h1>
          <p className="text-c-fg-4 max-w-xl mt-4 text-lg leading-relaxed">
            A small, senior team obsessed with craft, speed, and shipping
            products that matter.
          </p>
        </div>

        {/* Team Grid — clean, uniform cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              custom={i}
              className="group"
            >
              <div className="bg-[var(--c-card)] backdrop-blur-xl border border-[var(--c-card-border)] rounded-2xl overflow-hidden hover:border-c-line transition-all duration-500">
                {/* Image area */}
                <div className="relative h-56 sm:h-60 bg-c-bg-2 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-700"
                    onError={(event) => {
                      const target = event.currentTarget;
                      target.style.display = "none";
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = "flex";
                    }}
                  />
                  {/* Fallback initials */}
                  <div
                    className="absolute inset-0 items-center justify-center bg-c-bg-2 hidden"
                  >
                    <span className="text-4xl font-display font-bold text-c-fg-6">
                      {member.initials}
                    </span>
                  </div>
                  {/* Subtle gradient overlay at bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[var(--c-card)] to-transparent pointer-events-none" />
                </div>

                {/* Info */}
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-display text-lg font-bold text-c-fg tracking-tight">
                        {member.name}
                      </h3>
                      <p className="text-sm font-medium text-accent mt-0.5">
                        {member.role}
                      </p>
                    </div>
                    <div className="flex gap-1.5 mt-1">
                      <a
                        href="#"
                        className="p-1.5 rounded-md text-c-fg-6 hover:text-accent hover:bg-accent-soft transition-colors"
                        aria-label={`${member.name} LinkedIn`}
                      >
                        <LinkedInLogoIcon width={14} height={14} />
                      </a>
                      <a
                        href="#"
                        className="p-1.5 rounded-md text-c-fg-6 hover:text-accent hover:bg-accent-soft transition-colors"
                        aria-label={`${member.name} Twitter`}
                      >
                        <TwitterLogoIcon width={14} height={14} />
                      </a>
                    </div>
                  </div>
                  <p className="text-sm text-c-fg-5 mt-3 leading-relaxed">
                    {member.focus}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Join us card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            custom={team.length}
          >
            <a
              href="mailto:hello@barek.studio"
              className="group block h-full"
            >
              <div className="bg-[var(--c-card)] backdrop-blur-xl border border-dashed border-c-line rounded-2xl overflow-hidden hover:border-accent/40 transition-all duration-500 h-full flex flex-col items-center justify-center p-8 text-center min-h-[320px]">
                <div className="w-14 h-14 rounded-full bg-accent-soft border border-accent/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl text-accent">+</span>
                </div>
                <h3 className="font-display text-lg font-bold text-c-fg tracking-tight mb-2">
                  Join the Team
                </h3>
                <p className="text-sm text-c-fg-5 leading-relaxed max-w-[200px]">
                  We&apos;re always looking for exceptional builders. Say hello.
                </p>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Team;
