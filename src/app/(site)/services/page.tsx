import type { Metadata } from "next";
import { Services } from "@/components/sections/Services";
import { ServicesDetail } from "./services-detail";

export const metadata: Metadata = {
  title: "Our Services | Meridian AI",
  description:
    "Executive AI leadership tailored to your business. From strategy and roadmapping to governance and analytics, Meridian AI delivers Virtual CAIO services that drive measurable results.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero banner */}
      <section className="bg-[#0A0A0F] px-6 pb-16 pt-32 md:pt-40">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl md:text-6xl">
            Our{" "}
            <span className="bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          <p className="mt-6 text-lg text-zinc-400 sm:text-xl">
            Executive AI leadership, tailored to your business
          </p>
        </div>
      </section>

      {/* Reused services grid */}
      <Services />

      {/* Expanded detail section */}
      <ServicesDetail />
    </>
  );
}
