"use client";

import React, { useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring
} from "framer-motion";
import {
  ArrowRightIcon,
  Component2Icon,
  LightningBoltIcon,
  CubeIcon,
  TriangleUpIcon,
  CircleIcon
} from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const orbRef = useRef<HTMLDivElement>(null);

  // Main scroll tracking for the hero section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Smooth spring for all scroll-based animations
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Hero container transforms
  const heroOpacity = useTransform(smoothProgress, [0, 0.5, 1], [1, 0.8, 0]);
  const heroScale = useTransform(smoothProgress, [0, 1], [1, 0.95]);
  const heroY = useTransform(smoothProgress, [0, 1], [0, -100]);

  // Background layers move at different speeds (parallax depth)
  const bgLayer1Y = useTransform(smoothProgress, [0, 1], [0, 150]); // Slowest (far)
  const bgLayer2Y = useTransform(smoothProgress, [0, 1], [0, 100]); // Medium
  const bgLayer3Y = useTransform(smoothProgress, [0, 1], [0, 50]);  // Faster (near)

  // Orb parallax (moves opposite direction for depth)
  const orbY = useTransform(smoothProgress, [0, 1], [0, 200]);
  const orbScale = useTransform(smoothProgress, [0, 0.5, 1], [1, 1.2, 0.8]);
  const orbOpacity = useTransform(smoothProgress, [0, 0.7, 1], [0.4, 0.6, 0]);

  // Text animations
  const headingY = useTransform(smoothProgress, [0, 0.3], [0, -50]);
  const headingOpacity = useTransform(smoothProgress, [0, 0.4, 0.6], [1, 1, 0]);

  const subtextY = useTransform(smoothProgress, [0, 0.4], [0, -30]);
  const subtextOpacity = useTransform(smoothProgress, [0.1, 0.5, 0.7], [1, 1, 0]);

  const ctaY = useTransform(smoothProgress, [0, 0.5], [0, -20]);
  const ctaOpacity = useTransform(smoothProgress, [0.2, 0.6, 0.8], [1, 1, 0]);

  // Badge 3D rotation on scroll
  const badgeRotateX = useTransform(smoothProgress, [0, 0.3], [0, -15]);
  const badgeScale = useTransform(smoothProgress, [0, 0.3], [1, 0.95]);

  // Partner logos stagger effect
  const logosY = useTransform(smoothProgress, [0, 0.6], [0, 80]);
  const logosOpacity = useTransform(smoothProgress, [0.3, 0.7, 0.9], [1, 1, 0]);

  // Scroll indicator opacity
  const scrollIndicatorOpacity = useTransform(smoothProgress, [0, 0.2], [1, 0]);

  // Mouse tracking orb (existing functionality preserved)
  useEffect(() => {
    const orb = orbRef.current;
    if (!orb) return;

    let frameId = 0;
    const target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };

    const update = () => {
      current.x += (target.x - current.x) * 0.08;
      current.y += (target.y - current.y) * 0.08;
      orb.style.setProperty("--mouse-x", `${current.x}px`);
      orb.style.setProperty("--mouse-y", `${current.y}px`);
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
    window.addEventListener("mousemove", onMove);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  const partners = [
    { Icon: Component2Icon, name: "Vercel" },
    { Icon: CubeIcon, name: "Square" },
    { Icon: TriangleUpIcon, name: "Airbnb" },
    { Icon: LightningBoltIcon, name: "Stripe" },
    { Icon: CircleIcon, name: "Google" }
  ];

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100vh] flex flex-col justify-center overflow-hidden bg-background pt-32 pb-20"
    >
      {/* Background Parallax Layers */}
      <motion.div
        className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-stone-800/10 rounded-full blur-[100px] pointer-events-none"
        style={{ y: bgLayer1Y, willChange: "transform" }}
      />
      <motion.div
        className="absolute top-[20%] left-[-10%] w-96 h-96 bg-stone-800/20 rounded-full blur-[100px] pointer-events-none"
        style={{ y: bgLayer2Y, willChange: "transform" }}
      />
      <motion.div
        className="absolute bottom-[10%] right-[20%] w-64 h-64 bg-stone-700/10 rounded-full blur-[80px] pointer-events-none"
        style={{ y: bgLayer3Y, willChange: "transform" }}
      />

      {/* Animated Orb with Parallax + Mouse Tracking */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          y: orbY,
          scale: orbScale,
          opacity: orbOpacity,
          willChange: "transform, opacity"
        }}
      >
        <div
          ref={orbRef}
          className="absolute left-1/2 top-1/2 w-[360px] h-[360px] rounded-full blur-[120px] bg-stone-700/40"
          style={{
            transform: "translate(calc(-50% + var(--mouse-x, 0px)), calc(-50% + var(--mouse-y, 0px)))"
          }}
        />
      </motion.div>

      {/* Noise texture */}
      <div className="absolute inset-0 opacity-[0.02] bg-noise" />

      {/* Main Content Container with Scroll Effects */}
      <motion.div
        className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full text-center"
        style={{
          opacity: heroOpacity,
          scale: heroScale,
          y: heroY,
          willChange: "transform, opacity"
        }}
      >
        {/* Badge with 3D tilt */}
        <motion.div
          className="flex justify-center mb-8"
          style={{
            rotateX: badgeRotateX,
            scale: badgeScale,
            transformPerspective: 1000,
            willChange: "transform"
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-900/50 border border-stone-800/50 backdrop-blur-md shadow-2xl shadow-black/50">
            <div className="w-2 h-2 rounded-full bg-stone-500 animate-pulse" />
            <span className="text-xs font-semibold text-stone-400 tracking-widest uppercase">
              The Product Studio
            </span>
          </div>
        </motion.div>

        {/* Main Heading with Staggered Animation */}
        <motion.h1
          className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight mb-8 max-w-5xl mx-auto leading-[0.95]"
          style={{
            y: headingY,
            opacity: headingOpacity,
            willChange: "transform, opacity"
          }}
        >
          <motion.span
            className="text-stone-500 inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Where
          </motion.span>{" "}
          <motion.span
            className="text-stone-100 inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Intelligence
          </motion.span>
          <br />
          <motion.span
            className="text-stone-500 inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Meets
          </motion.span>{" "}
          <motion.span
            className="text-stone-100 inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Innovation
          </motion.span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="text-lg sm:text-xl text-stone-400 leading-relaxed max-w-2xl mx-auto mb-12"
          style={{
            y: subtextY,
            opacity: subtextOpacity,
            willChange: "transform, opacity"
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          We build a productized portfolio of software startups—AI-native
          ventures designed to scale, compound, and deliver lasting value.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          className="flex justify-center mb-20"
          style={{
            y: ctaY,
            opacity: ctaOpacity,
            willChange: "transform, opacity"
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
        >
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
        </motion.div>

        {/* Partner Logos with Staggered Scroll Effect */}
        <motion.div
          className="relative"
          style={{
            y: logosY,
            opacity: logosOpacity,
            willChange: "transform, opacity"
          }}
        >
          <p className="text-stone-600 text-sm font-medium uppercase tracking-widest mb-8">
            Powering Technologies For
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {partners.map(({ Icon, name }, index) => (
              <motion.div
                key={name}
                className="flex items-center gap-2 group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.7 + index * 0.1
                }}
              >
                <Icon className="w-6 h-6 text-stone-300 group-hover:text-white transition-colors" />
                <span className="text-xl font-bold text-stone-300 group-hover:text-white transition-colors">
                  {name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Apple-Style Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{ opacity: scrollIndicatorOpacity }}
      >
        <span className="text-stone-500 text-xs uppercase tracking-widest">
          Scroll
        </span>
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-stone-700 flex justify-center pt-2"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-2 rounded-full bg-stone-500"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
