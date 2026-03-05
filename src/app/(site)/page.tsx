import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { WhySection } from "@/components/sections/WhySection";
import { CTA } from "@/components/sections/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <WhySection />
      <CTA />
    </>
  );
}
