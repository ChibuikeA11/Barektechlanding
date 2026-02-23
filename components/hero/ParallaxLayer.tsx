"use client";

import React, { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

interface ParallaxLayerProps {
  children: ReactNode;
  speed?: number;
  className?: string;
  offset?: [string, string];
  enableOpacity?: boolean;
  enableScale?: boolean;
}

const ParallaxLayer: React.FC<ParallaxLayerProps> = ({
  children,
  speed = 0.5,
  className = "",
  offset = ["start end", "end start"],
  enableOpacity = false,
  enableScale = false
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offset as ["start end", "end start"]
  });

  const yRange = speed * 150;
  const rawY = useTransform(scrollYProgress, [0, 1], [yRange, -yRange]);

  const y = useSpring(rawY, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const opacity = enableOpacity
    ? useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
    : undefined;

  const scale = enableScale
    ? useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9])
    : undefined;

  return (
    <motion.div
      ref={ref}
      style={{
        y,
        opacity: opacity ?? 1,
        scale: scale ?? 1,
        willChange: "transform"
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ParallaxLayer;
