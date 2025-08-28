import type { Metadata } from "next"
import { AboutHero } from "@/components/sections/about-hero"
import { AboutMission } from "@/components/sections/about-mission"
import { AboutStory } from "@/components/sections/about-story"
import { AboutStats } from "@/components/sections/about-stats"
import { AboutValues } from "@/components/sections/about-values"
import { CTASection } from "@/components/sections/cta-section"

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Linda Schmidt Trades LLC - your trusted partner for professional trading and procurement services across all 50 states.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <AboutHero />
      <AboutMission />
      <AboutStory />
      <AboutStats />
      <AboutValues />
      <CTASection />
    </div>
  )
}
