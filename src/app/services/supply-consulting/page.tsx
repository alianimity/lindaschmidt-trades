"use client"
import { ServiceHero } from "@/components/sections/service-hero"
import { ServiceOverview } from "@/components/sections/service-overview"
import { WhatsIncluded } from "@/components/sections/whats-included"
import { ServicePricing } from "@/components/sections/service-pricing"
import { ServiceSpecialCard } from "@/components/sections/service-special-card"
import { CTASection } from "@/components/sections/cta-section"
import { RelatedServices } from "@/components/sections/related-services"
import { Users, TrendingUp, FileText, Target, BarChart, Lightbulb } from "lucide-react"


const includedFeatures = [
  {
    icon: BarChart,
    title: "Procurement Analysis",
    description: "Comprehensive review of current procurement processes and spending patterns."
  },
  {
    icon: Target,
    title: "Cost Optimization",
    description: "Identify cost-saving opportunities and efficiency improvements in your supply chain."
  },
  {
    icon: Users,
    title: "Vendor Assessment",
    description: "Evaluation of current and potential suppliers for quality, reliability, and value."
  },
  {
    icon: TrendingUp,
    title: "Strategy Development",
    description: "Custom procurement strategies aligned with your business goals and budget."
  },
  {
    icon: FileText,
    title: "Detailed Reports",
    description: "Actionable recommendations with implementation roadmaps and ROI projections."
  },
  {
    icon: Lightbulb,
    title: "Best Practices",
    description: "Industry best practices and proven methodologies for procurement excellence."
  }
]

const pricingTiers = [
  {
    name: "Basic Tier",
    priceRange: [500, 1500],
    description: "Essential consulting for individuals and small operations",
    features: [
      "1–2 hour consultation session",
      "Basic procurement review",
      "Simple recommendations report", 
      "Email follow-up support",
      "Flat fee structure"
    ],
    example: "Home office budget optimization or DIY project planning guidance"
  },
  {
    name: "Standard Tier", 
    priceRange: [1501, 5000],
    description: "Comprehensive analysis for small to medium businesses",
    features: [
      "3–5 hours of detailed analysis",
      "Vendor evaluation and recommendations",
      "Comprehensive strategy report",
      "Implementation guidance",
      "$200 follow-up session included"
    ],
    example: "Small business vendor review or procurement process improvement",
    popular: true
  },
  {
    name: "Premium Tier",
    priceRange: [5001, 20000],
    description: "Ongoing strategic consulting for larger operations",
    features: [
      "Multi-session engagement or quarterly plans",
      "Comprehensive supply chain audit",
      "Custom procurement strategy development",
      "Ongoing support and monitoring",
      "Retainer options: $1,000–$5,000/month",
      "10% discount when bundled with procurement services"
    ],
    example: "Enterprise procurement overhaul or ongoing supply chain optimization"
  }
]

const relatedServices = [
  {
    title: "Custom Procurement",
    description: "Implement optimized sourcing strategies",
    href: "/services/custom-procurement"
  },
  {
    title: "Bulk Sourcing", 
    description: "Volume procurement execution",
    href: "/services/bulk-sourcing"
  },
  {
    title: "Trade & Barter",
    description: "Asset optimization through trading", 
    href: "/services/trade-barter"
  }
]

export default function SupplyConsultingPage() {
  return (
    <div className="min-h-screen">
      <ServiceHero
        title="Consulting on Supply Optimization"
        subtitle="Expert guidance for smarter procurement"
        description="Strategic consulting on procurement optimization, cost-saving tactics, and supply chain improvements. Professional advice delivered through virtual sessions and detailed reports."
        priceRange="$500–$25,000+"
        icon={Users}
      />
      
      <ServiceOverview
        title="Strategic Procurement Consulting"
        description="Leverage our expertise to optimize your procurement processes, reduce costs, and improve supplier relationships. Our consulting services deliver actionable insights and proven strategies for procurement success."
        applications={{
          b2c: "Guidance for individuals (home office budget optimization, DIY project planning, personal equipment strategies)",
          b2b: "Business audits and strategy development (vendor selection, procurement process improvement, supply chain optimization)"
        }}
        statCard={{
          number: "30%",
          label: "Average Cost Savings",
          description: "Typical procurement cost reduction achieved"
        }}
      />
      
      <WhatsIncluded 
        features={includedFeatures}
      />
      
      <ServicePricing 
        tiers={pricingTiers}
      />
      
      <ServiceSpecialCard
        icon={TrendingUp}
        title="Proven Results"
        description="Our clients typically achieve 15-25% cost savings within the first year of implementing our recommendations. We combine industry expertise with practical experience to deliver measurable improvements to your procurement operations."
      />
      
      <CTASection />
      
      <RelatedServices 
        services={relatedServices}
      />
    </div>
  )
}
