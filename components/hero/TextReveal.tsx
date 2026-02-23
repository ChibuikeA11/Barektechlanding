"use client";

import React, { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

interface TextRevealProps {
  children: ReactNode;
  className?: string;
  variant?: "fade-up" | "scale-in" | "blur-in";
}

const TextReveal: React.FC<TextRevealProps> = ({
  children,
  className = "",
  variant = "fade-up"
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.4"]
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [60, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
  const blur = useTransform(scrollYProgress, [0, 1], [10, 0]);
  const filterBlur = useTransform(blur, (v) => `blur(${v}px)`);

  const getStyles = () => {
    switch (variant) {
      case "fade-up":
        return { opacity, y };
      case "scale-in":
        return { opacity, scale };
      case "blur-in":
        return { opacity, filter: filterBlur };
      default:
        return { opacity, y };
    }
  };

  return (
    <motion.div
      ref={ref}
      style={{
        ...getStyles(),
        willChange: "transform, opacity, filter"
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface SplitTextRevealProps {
  text: string;
  className?: string;
  wordClassName?: string;
}

const WordReveal: React.FC<{
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
  className?: string;
}> = ({ word, progress, range, className }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  const y = useTransform(progress, range, [20, 0]);

  return (
    <motion.span
      style={{ opacity, y, display: "inline-block" }}
      className={className}
    >
      {word}&nbsp;
    </motion.span>
  );
};

export const SplitTextReveal: React.FC<SplitTextRevealProps> = ({
  text,
  className = "",
  wordClassName = ""
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const words = text.split(" ");

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.3"]
  });

  return (
    <div ref={ref} className={className}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;

        return (
          <WordReveal
            key={i}
            word={word}
            progress={scrollYProgress}
            range={[start, end]}
            className={wordClassName}
          />
        );
      })}
    </div>
  );
};

export default TextReveal;
