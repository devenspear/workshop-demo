import { client } from "@/sanity/lib/client";
import { heroQuery, servicesQuery } from "@/sanity/lib/queries";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { WhySection } from "@/components/sections/WhySection";
import { CTA } from "@/components/sections/CTA";

export const revalidate = 0;

export default async function HomePage() {
  const [hero, services] = await Promise.all([
    client.fetch(heroQuery),
    client.fetch(servicesQuery),
  ]);

  return (
    <>
      <Hero data={hero} />
      <Services data={services} />
      <WhySection />
      <CTA />
    </>
  );
}
