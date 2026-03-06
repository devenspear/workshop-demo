"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";

interface HeroData {
  headline?: string;
  subheadline?: string;
  ctaText?: string;
  ctaLink?: string;
}

export function Hero({ data }: { data?: HeroData }) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const headline = data?.headline || "Your AI Strategy Deserves a Seat at the Table";
  const subheadline =
    data?.subheadline ||
    "Meridian AI provides Virtual Chief AI Officer services — executive-level AI leadership without the executive price tag.";
  const ctaText = data?.ctaText || "Book a Strategy Call";

  // Split headline for gradient styling — gradient the last phrase
  const words = headline.split(" ");
  const midpoint = Math.ceil(words.length / 2);
  const firstHalf = words.slice(0, midpoint).join(" ");
  const secondHalf = words.slice(midpoint).join(" ");

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0A0A0F] px-6"
    >
      {/* Animated gradient orbs */}
      <motion.div
        className="pointer-events-none absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full bg-[#3B82F6]/20 blur-[120px]"
        animate={{
          x: [0, 60, -30, 0],
          y: [0, -40, 50, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute -bottom-40 right-0 h-[600px] w-[600px] rounded-full bg-[#8B5CF6]/20 blur-[120px]"
        animate={{
          x: [0, -50, 40, 0],
          y: [0, 60, -30, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/3 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-[#3B82F6]/10 blur-[100px]"
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -50, 30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.h1
          className="font-heading text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {firstHalf}{" "}
          <span className="bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] bg-clip-text text-transparent">
            {secondHalf}
          </span>
        </motion.h1>

        <motion.p
          className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400 sm:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {subheadline}
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] px-8 text-base font-semibold text-white hover:from-[#3B82F6]/90 hover:to-[#8B5CF6]/90"
          >
            {ctaText}
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-zinc-700 bg-transparent px-8 text-base font-semibold text-white hover:bg-white/5 hover:text-white"
          >
            <Link href="/services">See Our Services</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
