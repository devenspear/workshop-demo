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
} from "lucide-react";

const detailedServices = [
  {
    icon: Brain,
    title: "AI Strategy & Roadmapping",
    details: [
      "Comprehensive audit of current technology stack and workflows",
      "Identification of high-ROI AI opportunities ranked by impact and feasibility",
      "12-month phased implementation roadmap with clear milestones",
      "Executive-ready presentations for board and leadership alignment",
      "Quarterly strategy reviews and roadmap adjustments",
    ],
  },
  {
    icon: Layers,
    title: "Tool Selection & Integration",
    details: [
      "Vendor-neutral evaluation of 200+ enterprise AI tools",
      "Proof-of-concept testing with your actual data and workflows",
      "Integration architecture design with existing systems",
      "Migration planning and change management support",
      "Ongoing tool performance monitoring and optimization",
    ],
  },
  {
    icon: Users,
    title: "Team Training & Enablement",
    details: [
      "Executive briefings on AI trends and strategic implications",
      "Department-specific hands-on workshops (sales, ops, HR, finance)",
      "Prompt engineering and AI literacy programs",
      "AI champions program to build internal expertise",
      "Ongoing office hours and support resources",
    ],
  },
  {
    icon: Shield,
    title: "AI Governance & Policy",
    details: [
      "Acceptable use policies for generative AI tools",
      "Data privacy and security risk assessments",
      "Bias and fairness auditing frameworks",
      "Regulatory compliance mapping (GDPR, CCPA, industry-specific)",
      "Incident response planning for AI-related issues",
    ],
  },
  {
    icon: Handshake,
    title: "Vendor & Partner Management",
    details: [
      "Contract negotiation and pricing optimization",
      "SLA monitoring and vendor performance reviews",
      "Multi-vendor coordination and integration oversight",
      "Build vs. buy analysis for custom AI solutions",
      "Vendor risk assessment and contingency planning",
    ],
  },
  {
    icon: LineChart,
    title: "Performance Analytics",
    details: [
      "Custom AI ROI dashboards with real-time metrics",
      "Adoption rate tracking across teams and departments",
      "Productivity gain measurement and benchmarking",
      "Cost optimization analysis and recommendations",
      "Monthly executive reports with actionable insights",
    ],
  },
];

export function ServicesDetail() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.05 });

  return (
    <section ref={ref} className="bg-[#0A0A0F] px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <motion.h2
          className="mb-16 text-center font-heading text-3xl font-bold text-white sm:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          A Closer Look at{" "}
          <span className="bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] bg-clip-text text-transparent">
            Each Service
          </span>
        </motion.h2>

        <div className="space-y-16">
          {detailedServices.map((service, i) => (
            <motion.div
              key={service.title}
              className="flex flex-col gap-6 md:flex-row md:gap-10"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="flex-shrink-0">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#3B82F6]/20 to-[#8B5CF6]/20">
                  <service.icon className="h-7 w-7 text-[#3B82F6]" />
                </div>
              </div>
              <div>
                <h3 className="mb-4 text-xl font-semibold text-white">
                  {service.title}
                </h3>
                <ul className="space-y-3">
                  {service.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex items-start gap-3 text-zinc-400"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#3B82F6]" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
