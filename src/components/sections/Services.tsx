"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Brain,
  Layers,
  Users,
  Shield,
  Handshake,
  LineChart,
  type LucideIcon,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

const iconMap: Record<string, LucideIcon> = {
  Brain,
  Layers,
  Users,
  Shield,
  Handshake,
  LineChart,
};

const fallbackServices = [
  { icon: "Brain", title: "AI Strategy & Roadmapping", description: "We assess your business, identify high-impact AI opportunities, and build a 12-month implementation roadmap." },
  { icon: "Layers", title: "Tool Selection & Integration", description: "Cut through the noise. We evaluate, select, and integrate the right AI tools for your specific workflows." },
  { icon: "Users", title: "Team Training & Enablement", description: "Your team becomes AI-fluent. Custom training programs from executive briefings to hands-on workshops." },
  { icon: "Shield", title: "AI Governance & Policy", description: "Responsible AI isn't optional. We build governance frameworks, usage policies, and risk assessments." },
  { icon: "Handshake", title: "Vendor & Partner Management", description: "We manage your AI vendor relationships, negotiate contracts, and ensure you're not overpaying." },
  { icon: "LineChart", title: "Performance Analytics", description: "Measure what matters. We build dashboards that track AI ROI, adoption rates, and productivity gains." },
];

interface ServiceData {
  _id?: string;
  title: string;
  description: string;
  icon?: string;
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export function Services({ data }: { data?: ServiceData[] }) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const services = data && data.length > 0 ? data : fallbackServices;

  return (
    <section ref={ref} className="bg-[#111118] px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            What a Virtual CAIO Does{" "}
            <span className="bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] bg-clip-text text-transparent">
              For You
            </span>
          </h2>
        </motion.div>

        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service) => {
            const Icon = iconMap[service.icon || "Brain"] || Brain;
            return (
              <motion.div key={service.title} variants={cardVariants}>
                <Card className="h-full border-zinc-800 bg-[#0A0A0F] transition-colors hover:border-[#3B82F6]/40">
                  <CardHeader>
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-[#3B82F6]/20 to-[#8B5CF6]/20">
                      <Icon className="h-6 w-6 text-[#3B82F6]" />
                    </div>
                    <CardTitle className="text-lg text-white">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-zinc-400">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
