"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  delay?: number;
  type?: "words" | "chars";
  highlightWords?: string[];
  highlightClassName?: string;
}

export function AnimatedText({
  text,
  className = "",
  as: Component = "h2",
  delay = 0,
  type = "words",
  highlightWords = [],
  highlightClassName = "text-[#002C5F]",
}: AnimatedTextProps) {
  const words = text.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: (customDelay: number) => ({
      opacity: 1,
      transition: {
        staggerChildren: type === "chars" ? 0.025 : 0.06,
        delayChildren: customDelay,
      },
    }),
  };

  const wordVariants: Variants = {
    hidden: { opacity: 0, y: 22, rotateX: 20 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <Component className={`${className} inline-flex flex-wrap`}>
      <motion.span
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        custom={delay}
        className="inline-flex flex-wrap items-baseline gap-x-[0.28em] gap-y-[0.1em]"
      >
        {words.map((word, i) => {
          const isHighlighted = highlightWords.some(
            (hw) => hw.toLowerCase() === word.toLowerCase().replace(/[^a-zA-Z0-9]/g, "")
          );

          return (
            <motion.span
              key={i}
              variants={wordVariants}
              className={`inline-block ${
                isHighlighted ? highlightClassName : ""
              }`}
            >
              {word}
            </motion.span>
          );
        })}
      </motion.span>
    </Component>
  );
}

export function FadeInBlock({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}) {
  const offsets = {
    up: { y: 30, x: 0 },
    down: { y: -30, x: 0 },
    left: { x: 30, y: 0 },
    right: { x: -30, y: 0 },
    none: { x: 0, y: 0 },
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...offsets[direction],
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.65,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
