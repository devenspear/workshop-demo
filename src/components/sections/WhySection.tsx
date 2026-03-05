"use client";

import { useRef } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

interface AnimatedCounterProps {
  target: number;
  suffix: string;
  label: string;
  description: string;
  isInView: boolean;
  delay: number;
}

function AnimatedCounter({
  target,
  suffix,
  label,
  description,
  isInView,
  delay,
}: AnimatedCounterProps) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, target, {
        duration: 2,
        delay,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [isInView, target, count, delay]);

  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      <div className="flex items-baseline justify-center gap-1">
        <motion.span className="font-heading text-5xl font-bold text-white sm:text-6xl md:text-7xl">
          {rounded}
        </motion.span>
        <span className="font-heading text-3xl font-bold text-[#3B82F6] sm:text-4xl md:text-5xl">
          {suffix}
        </span>
      </div>
      <p className="mt-3 text-lg font-semibold text-white sm:text-xl">
        {label}
      </p>
      <p className="mt-2 text-sm text-zinc-400 sm:text-base">{description}</p>
    </motion.div>
  );
}

const stats = [
  {
    target: 60,
    suffix: "%",
    label: "Cost Savings",
    description: "vs. a full-time CAIO at $300K+ salary",
  },
  {
    target: 12,
    suffix: "-Week",
    label: "Quick Start",
    description: "From assessment to first AI wins in under 90 days",
  },
  {
    target: 40,
    suffix: "+",
    label: "Implementations",
    description: "Across healthcare, finance, legal, and manufacturing",
  },
];

export function WhySection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="bg-[#0A0A0F] px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <motion.h2
          className="mb-16 text-center font-heading text-3xl font-bold text-white sm:text-4xl md:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Why Companies Choose{" "}
          <span className="bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] bg-clip-text text-transparent">
            Meridian AI
          </span>
        </motion.h2>

        <div className="grid gap-12 sm:grid-cols-3 sm:gap-8">
          {stats.map((stat, i) => (
            <AnimatedCounter
              key={stat.label}
              {...stat}
              isInView={isInView}
              delay={i * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
