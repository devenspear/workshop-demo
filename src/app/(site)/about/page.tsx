import type { Metadata } from "next";
import { AboutContent } from "./about-content";

export const metadata: Metadata = {
  title: "About | Meridian AI",
  description:
    "Founded by a former Fortune 500 CTO, Meridian AI brings executive-level AI leadership to mid-market companies. Meet our team and learn our story.",
};

export default function AboutPage() {
  return <AboutContent />;
}
