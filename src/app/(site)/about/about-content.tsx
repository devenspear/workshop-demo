"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const team = [
  {
    initials: "SC",
    name: "Sarah Chen",
    role: "Founder & Lead CAIO",
    bio: "Ex-Google AI, Stanford MBA. Led AI strategy for three Fortune 500 companies before founding Meridian AI to democratize executive AI leadership for the mid-market.",
  },
  {
    initials: "MW",
    name: "Marcus Williams",
    role: "AI Implementation Lead",
    bio: "15 years of enterprise consulting across McKinsey and Accenture. Specializes in turning AI roadmaps into measurable business outcomes.",
  },
  {
    initials: "PS",
    name: "Priya Sharma",
    role: "AI Governance Director",
    bio: "Former Deloitte risk advisory lead, certified in AI ethics. Builds governance frameworks that protect companies while enabling innovation.",
  },
];

const values = [
  {
    title: "Human-First AI",
    description:
      "Technology serves people, not the other way around. Every AI initiative we recommend starts with the humans it will impact.",
  },
  {
    title: "Measurable Impact",
    description:
      "If we can't measure it, we don't recommend it. Every engagement includes clear KPIs and ROI tracking from day one.",
  },
  {
    title: "Radical Transparency",
    description:
      "No black boxes, no vendor lock-in, no hidden agendas. We share everything — our reasoning, our findings, and our honest assessment.",
  },
];

export function AboutContent() {
  const heroRef = useRef<HTMLElement>(null);
  const storyRef = useRef<HTMLElement>(null);
  const teamRef = useRef<HTMLElement>(null);
  const valuesRef = useRef<HTMLElement>(null);

  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const storyInView = useInView(storyRef, { once: true, amount: 0.3 });
  const teamInView = useInView(teamRef, { once: true, amount: 0.1 });
  const valuesInView = useInView(valuesRef, { once: true, amount: 0.2 });

  return (
    <>
      {/* Hero banner */}
      <section ref={heroRef} className="bg-[#0A0A0F] px-6 pb-16 pt-32 md:pt-40">
        <div className="mx-auto max-w-4xl text-center">
          <motion.h1
            className="font-heading text-4xl font-bold text-white sm:text-5xl md:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            About{" "}
            <span className="bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] bg-clip-text text-transparent">
              Meridian AI
            </span>
          </motion.h1>
          <motion.p
            className="mt-6 text-lg text-zinc-400 sm:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Executive AI leadership for the companies that need it most
          </motion.p>
        </div>
      </section>

      {/* Company story */}
      <section ref={storyRef} className="bg-[#111118] px-6 py-24 md:py-32">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={storyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-8 font-heading text-3xl font-bold text-white sm:text-4xl">
              Our Story
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-zinc-400">
              <p>
                Meridian AI was founded by Sarah Chen, a former Fortune 500 CTO
                who spent over a decade leading AI transformations at some of the
                world&apos;s largest companies. During that time, she saw a
                growing divide: enterprise giants were racing ahead with
                dedicated AI leadership, while mid-market companies — the
                backbone of the economy — were falling behind.
              </p>
              <p>
                The problem wasn&apos;t a lack of ambition. It was a lack of
                access. A full-time Chief AI Officer commands $300,000 or more in
                salary, plus a team to support them. For a company doing $20M to
                $500M in revenue, that&apos;s simply not feasible — but the need
                for strategic AI guidance is just as urgent.
              </p>
              <p>
                Meridian AI bridges that gap. We provide fractional, virtual
                Chief AI Officer services — giving mid-market companies the same
                caliber of AI leadership that Fortune 500 companies enjoy, at a
                fraction of the cost. No fluff, no hype. Just clear strategy,
                rigorous execution, and measurable results.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section ref={teamRef} className="bg-[#0A0A0F] px-6 py-24 md:py-32">
        <div className="mx-auto max-w-5xl">
          <motion.h2
            className="mb-16 text-center font-heading text-3xl font-bold text-white sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={teamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Meet the{" "}
            <span className="bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] bg-clip-text text-transparent">
              Team
            </span>
          </motion.h2>

          <div className="grid gap-10 sm:grid-cols-3">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={teamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6]">
                  <span className="text-2xl font-bold text-white">
                    {member.initials}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-[#3B82F6]">
                  {member.role}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section ref={valuesRef} className="bg-[#111118] px-6 py-24 md:py-32">
        <div className="mx-auto max-w-5xl">
          <motion.h2
            className="mb-16 text-center font-heading text-3xl font-bold text-white sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Our Values
          </motion.h2>

          <div className="grid gap-10 sm:grid-cols-3">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                className="rounded-xl border border-zinc-800 bg-[#0A0A0F] p-8"
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <h3 className="mb-4 text-lg font-semibold text-white">
                  {value.title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-400">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
