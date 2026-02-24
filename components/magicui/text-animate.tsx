"use client"

import { memo } from "react"
import { AnimatePresence, motion, Variants } from "framer-motion"
import { cn } from "@/lib/utils"

type AnimationType = "text" | "word" | "character" | "line"
type AnimationVariant =
  | "fadeIn" | "blurIn" | "blurInUp" | "blurInDown"
  | "slideUp" | "slideDown" | "slideLeft" | "slideRight"
  | "scaleUp" | "scaleDown"

interface TextAnimateProps {
  children: string
  className?: string
  segmentClassName?: string
  delay?: number
  duration?: number
  variants?: Variants
  by?: AnimationType
  startOnView?: boolean
  once?: boolean
  animation?: AnimationVariant
}

const defaultContainerVariants: Variants = {
  hidden: { opacity: 1 },
  show: { opacity: 1, transition: { delayChildren: 0, staggerChildren: 0.05 } },
  exit: { opacity: 0, transition: { staggerChildren: 0.05, staggerDirection: -1 } },
}

const animationVariants: Record<AnimationVariant, { container: Variants; item: Variants }> = {
  fadeIn: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, y: 20 },
      show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
      exit: { opacity: 0, y: 20, transition: { duration: 0.3 } },
    },
  },
  blurIn: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, filter: "blur(10px)" },
      show: { opacity: 1, filter: "blur(0px)", transition: { duration: 0.3 } },
      exit: { opacity: 0, filter: "blur(10px)", transition: { duration: 0.3 } },
    },
  },
  blurInUp: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, filter: "blur(10px)", y: 20 },
      show: {
        opacity: 1, filter: "blur(0px)", y: 0,
        transition: { y: { duration: 0.3 }, opacity: { duration: 0.4 }, filter: { duration: 0.3 } },
      },
      exit: {
        opacity: 0, filter: "blur(10px)", y: 20,
        transition: { y: { duration: 0.3 }, opacity: { duration: 0.4 }, filter: { duration: 0.3 } },
      },
    },
  },
  blurInDown: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, filter: "blur(10px)", y: -20 },
      show: {
        opacity: 1, filter: "blur(0px)", y: 0,
        transition: { y: { duration: 0.3 }, opacity: { duration: 0.4 }, filter: { duration: 0.3 } },
      },
    },
  },
  slideUp: {
    container: defaultContainerVariants,
    item: {
      hidden: { y: 20, opacity: 0 },
      show: { y: 0, opacity: 1, transition: { duration: 0.3 } },
      exit: { y: -20, opacity: 0, transition: { duration: 0.3 } },
    },
  },
  slideDown: {
    container: defaultContainerVariants,
    item: {
      hidden: { y: -20, opacity: 0 },
      show: { y: 0, opacity: 1, transition: { duration: 0.3 } },
      exit: { y: 20, opacity: 0, transition: { duration: 0.3 } },
    },
  },
  slideLeft: {
    container: defaultContainerVariants,
    item: {
      hidden: { x: 20, opacity: 0 },
      show: { x: 0, opacity: 1, transition: { duration: 0.3 } },
      exit: { x: -20, opacity: 0, transition: { duration: 0.3 } },
    },
  },
  slideRight: {
    container: defaultContainerVariants,
    item: {
      hidden: { x: -20, opacity: 0 },
      show: { x: 0, opacity: 1, transition: { duration: 0.3 } },
      exit: { x: 20, opacity: 0, transition: { duration: 0.3 } },
    },
  },
  scaleUp: {
    container: defaultContainerVariants,
    item: {
      hidden: { scale: 0.5, opacity: 0 },
      show: { scale: 1, opacity: 1, transition: { duration: 0.3, scale: { type: "spring", damping: 15, stiffness: 300 } } },
      exit: { scale: 0.5, opacity: 0, transition: { duration: 0.3 } },
    },
  },
  scaleDown: {
    container: defaultContainerVariants,
    item: {
      hidden: { scale: 1.5, opacity: 0 },
      show: { scale: 1, opacity: 1, transition: { duration: 0.3, scale: { type: "spring", damping: 15, stiffness: 300 } } },
      exit: { scale: 1.5, opacity: 0, transition: { duration: 0.3 } },
    },
  },
}

const TextAnimateBase = ({
  children, delay = 0, duration = 0.3, variants: customVariants,
  className, segmentClassName, startOnView = true, once = true,
  by = "word", animation = "fadeIn",
}: TextAnimateProps) => {
  let segments: string[]
  switch (by) {
    case "word": segments = children.split(/(\s+)/); break
    case "character": segments = children.split(""); break
    case "line": segments = children.split("\n"); break
    default: segments = [children]; break
  }

  const selectedVariants = customVariants
    ? {
        container: {
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { opacity: { duration: 0.01, delay }, delayChildren: delay, staggerChildren: duration / segments.length } },
          exit: { opacity: 0, transition: { staggerChildren: duration / segments.length, staggerDirection: -1 } },
        },
        item: customVariants,
      }
    : {
        container: {
          ...animationVariants[animation].container,
          show: { ...animationVariants[animation].container.show, transition: { delayChildren: delay, staggerChildren: duration / segments.length } },
          exit: { ...(animationVariants[animation].container.exit || {}), transition: { staggerChildren: duration / segments.length, staggerDirection: -1 } },
        },
        item: animationVariants[animation].item,
      }

  return (
    <AnimatePresence mode="popLayout">
      <motion.span
        variants={selectedVariants.container}
        initial="hidden"
        whileInView={startOnView ? "show" : undefined}
        animate={startOnView ? undefined : "show"}
        exit="exit"
        className={cn("whitespace-pre-wrap", className)}
        viewport={{ once }}
      >
        {segments.map((segment, i) => (
          <motion.span
            key={`${by}-${segment}-${i}`}
            variants={selectedVariants.item}
            className={cn(
              by === "line" ? "block" : "inline-block whitespace-pre",
              segmentClassName
            )}
          >
            {segment}
          </motion.span>
        ))}
      </motion.span>
    </AnimatePresence>
  )
}

export const TextAnimate = memo(TextAnimateBase)
