"use client";

import React, { useRef, useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring
} from "framer-motion";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import { useTheme } from "next-themes";
import { Particles } from "./magicui/particles";
import { TextAnimate } from "./magicui/text-animate";

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = !mounted || resolvedTheme === "dark";
  const particleColor = isDark ? "#a8a29e" : "#78716c";

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const heroOpacity = useTransform(smoothProgress, [0, 0.5, 1], [1, 0.8, 0]);
  const heroY = useTransform(smoothProgress, [0, 1], [0, -100]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100vh] flex flex-col justify-center overflow-hidden bg-background pt-32 pb-20"
    >
      {/* Particle background */}
      <Particles
        className="absolute inset-0"
        quantity={60}
        color={particleColor}
        ease={80}
        staticity={40}
        size={0.5}
        refresh={!isDark}
      />

      <div className="absolute inset-0 opacity-[0.02] bg-noise" />

      <motion.div
        className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full text-center"
        style={{ opacity: heroOpacity, y: heroY }}
      >
        {/* Badge */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--c-inset)] border border-c-icon-border backdrop-blur-md shadow-card">
            <div className="w-2 h-2 rounded-full bg-c-dot" />
            <span className="text-xs font-semibold text-c-fg-4 tracking-widest uppercase">
              The Product Studio
            </span>
          </div>
        </motion.div>

        {/* Heading — blurInUp word animation */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight mb-8 max-w-5xl mx-auto leading-[0.95]">
          <TextAnimate
            animation="blurInUp"
            by="word"
            delay={0.15}
            duration={0.6}
            className="text-c-fg-5"
            segmentClassName="text-c-fg-5"
          >
            Where
          </TextAnimate>{" "}
          <TextAnimate
            animation="blurInUp"
            by="word"
            delay={0.25}
            duration={0.6}
            className="text-c-fg"
            segmentClassName="text-c-fg"
          >
            Intelligence
          </TextAnimate>
          <br />
          <TextAnimate
            animation="blurInUp"
            by="word"
            delay={0.35}
            duration={0.6}
            className="text-c-fg-5"
            segmentClassName="text-c-fg-5"
          >
            Meets
          </TextAnimate>{" "}
          <TextAnimate
            animation="blurInUp"
            by="word"
            delay={0.45}
            duration={0.6}
            className="text-c-fg"
            segmentClassName="text-c-fg"
          >
            Innovation
          </TextAnimate>
        </h1>

        {/* Subtext */}
        <motion.p
          className="text-lg sm:text-xl text-c-fg-4 leading-relaxed max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
        >
          We build a productized portfolio of software startups—AI-native
          ventures designed to scale, compound, and deliver lasting value.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.65 }}
        >
          <Button
            asChild
            variant="outline"
            color="gray"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-transparent border-c-line-2 text-c-fg-3 hover:text-c-fg-em hover:border-c-fg-5 transition-all duration-300 overflow-hidden"
          >
            <a href="#portfolio">
              <span className="relative z-10">View the Portfolio</span>
              <ArrowRightIcon className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
