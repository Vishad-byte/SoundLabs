"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "@/utils/cn";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref,
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0,
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "#0f172a", // slate-900
    "#000000", // black
    "#171717", // neutral-900
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, #06b6d4, #10b981)", // cyan-500 to emerald-500
    "linear-gradient(to bottom right, #ec4899, #6366f1)", // pink-500 to indigo-500
    "linear-gradient(to bottom right, #f97316, #eab308)", // orange-500 to yellow-500
  ];

  // Title color schemes that complement each gradient
  const titleColorSchemes = [
    "text-white drop-shadow-lg", // For cyan-emerald gradient
    "text-white drop-shadow-lg", // For pink-indigo gradient  
    "text-white drop-shadow-lg", // For orange-yellow gradient
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0],
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="relative flex h-[30rem] justify-center space-x-10 overflow-y-auto rounded-md p-10"
      ref={ref}
    >
      <div className="div relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold text-slate-100"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-kg mt-10 max-w-sm text-slate-300"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <motion.div
        style={{ background: backgroundGradient }}
        className={cn(
          "sticky top-10 hidden h-60 w-80 overflow-hidden rounded-md bg-white lg:block",
          contentClassName,
        )}
        animate={{
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
      >
        {/* Animated Title Overlay */}
        <motion.div
          key={activeCard} // Force re-render on card change
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 1.1 }}
          transition={{ 
            duration: 0.5, 
            ease: "easeOut",
            delay: 0.1 
          }}
          className="absolute inset-0 z-10 flex items-center justify-center p-6"
        >
          <div className="text-center">
            <motion.h3
              className={cn(
                "text-2xl md:text-3xl font-bold mb-2 leading-tight",
                titleColorSchemes[activeCard % titleColorSchemes.length]
              )}
              animate={{
                textShadow: [
                  "2px 2px 4px rgba(0,0,0,0.3)",
                  "3px 3px 6px rgba(0,0,0,0.4)",
                  "2px 2px 4px rgba(0,0,0,0.3)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {content[activeCard].title}
            </motion.h3>
            
            {/* Animated underline */}
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ 
                duration: 0.6, 
                ease: "easeOut",
                delay: 0.3 
              }}
              className="h-1 bg-white/40 rounded-full mx-auto"
              style={{ maxWidth: "200px" }}
            />
            
            {/* Subtle pulse animation */}
            <motion.div
              animate={{
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 rounded-md border-2 border-white/20"
            />
          </div>
        </motion.div>

        {/* Original content (if any) with reduced opacity to let title show */}
        <div className="opacity-20 h-full">
          {content[activeCard].content ?? null}
        </div>
      </motion.div>
    </motion.div>
  );
};