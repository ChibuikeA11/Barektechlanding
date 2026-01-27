"use client";

import React from "react";
import { motion } from "framer-motion";

const baseTransition = (duration: number) => ({
  duration,
  repeat: Infinity,
  repeatType: "mirror" as const,
  ease: "linear" as const
});

const GlowLayer: React.FC = () => {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 opacity-80 [filter:blur(90px)]">
        <motion.svg
          aria-hidden
          viewBox="0 0 800 600"
          className="absolute -left-44 -top-36 h-[560px] w-[560px]"
          animate={{ x: [0, 40, -20], y: [0, -30, 20], scale: [1, 1.06, 0.98] }}
          transition={baseTransition(28)}
        >
          <defs>
            <radialGradient id="glowA" cx="50%" cy="50%" r="60%">
              <stop offset="0%" stopColor="rgba(250,204,21,0.42)" />
              <stop offset="65%" stopColor="rgba(249,115,22,0.28)" />
              <stop offset="100%" stopColor="rgba(249,115,22,0)" />
            </radialGradient>
          </defs>
          <path
            fill="url(#glowA)"
            d="M421.5 72.5c78.6 30.1 151.4 95.5 159.8 173.5 8.2 76.3-48.5 144.9-110.4 187.5-57.8 39.7-126.5 70.7-193.6 58.7-71.8-12.8-135.7-71.1-154.7-142.7-19.5-73.7 5.7-157.3 64.7-210.1 58.2-52.1 152-75.6 234.2-66.9z"
          />
        </motion.svg>

        <motion.svg
          aria-hidden
          viewBox="0 0 800 600"
          className="absolute right-[-200px] top-[-140px] h-[600px] w-[600px]"
          animate={{ x: [0, -50, 30], y: [0, 40, -20], scale: [1, 0.96, 1.04] }}
          transition={baseTransition(34)}
        >
          <defs>
            <radialGradient id="glowB" cx="50%" cy="50%" r="62%">
              <stop offset="0%" stopColor="rgba(45,212,191,0.4)" />
              <stop offset="60%" stopColor="rgba(59,130,246,0.22)" />
              <stop offset="100%" stopColor="rgba(59,130,246,0)" />
            </radialGradient>
          </defs>
          <path
            fill="url(#glowB)"
            d="M512.7 118.4c66 36.9 122.5 102.7 124.1 173.8 1.7 73.6-54.7 134.7-115.5 177.6-61.3 43.2-130.8 73.9-200.2 61.8-73.9-12.9-139.4-73.2-156.9-145.9-18.1-75.2 15.3-157.9 78.4-209.4 62.5-51 153.9-70.9 270.1-57.9z"
          />
        </motion.svg>

        <motion.svg
          aria-hidden
          viewBox="0 0 800 600"
          className="absolute left-1/2 top-[42%] h-[520px] w-[520px] -translate-x-1/2"
          animate={{ x: [0, 30, -30], y: [0, -20, 25], scale: [1, 1.03, 0.97] }}
          transition={baseTransition(32)}
        >
          <defs>
            <radialGradient id="glowC" cx="50%" cy="50%" r="64%">
              <stop offset="0%" stopColor="rgba(244,114,182,0.28)" />
              <stop offset="58%" stopColor="rgba(250,204,21,0.2)" />
              <stop offset="100%" stopColor="rgba(250,204,21,0)" />
            </radialGradient>
          </defs>
          <path
            fill="url(#glowC)"
            d="M471.2 139.6c71.9 28.7 138.6 87.5 150.5 161.6 12.6 78.7-35.9 157.4-101.2 206.4-63.7 47.8-147.1 71.1-224.2 52.1-78.7-19.5-146.1-86.9-161.4-165.9-15.4-79.9 16.2-164.6 78.5-219.6 63.1-55.7 162.5-74.2 257.8-34.6z"
          />
        </motion.svg>
      </div>
    </div>
  );
};

export default GlowLayer;
