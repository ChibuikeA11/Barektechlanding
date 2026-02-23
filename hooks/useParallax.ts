"use client";

import { useScroll, useTransform, useSpring, MotionValue } from "framer-motion";
import { RefObject, useEffect, useState } from "react";

interface ParallaxOptions {
  target?: RefObject<HTMLElement | null>;
  offset?: [string, string];
  speed?: number;
  smoothing?: number;
}

interface ParallaxReturn {
  scrollYProgress: MotionValue<number>;
  y: MotionValue<number>;
  opacity: MotionValue<number>;
  scale: MotionValue<number>;
}

export function useParallax({
  target,
  offset = ["start end", "end start"],
  speed = 0.5,
  smoothing = 100
}: ParallaxOptions = {}): ParallaxReturn {
  const { scrollYProgress } = useScroll({
    target,
    offset: offset as ["start end", "end start"]
  });

  const yRange = speed * 200;
  const rawY = useTransform(scrollYProgress, [0, 1], [-yRange, yRange]);

  const y = useSpring(rawY, {
    stiffness: smoothing,
    damping: 30,
    restDelta: 0.001
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return { scrollYProgress, y, opacity, scale };
}

export function useReducedMotion() {
  const [isReduced, setIsReduced] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReduced(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setIsReduced(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return isReduced;
}

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile;
}
