"use client"
import { ServiceHero } from "@/components/sections/service-hero"
import { ServiceOverview } from "@/components/sections/service-overview"
import { WhatsIncluded } from "@/components/sections/whats-included"
import { ServicePricing } from "@/components/sections/service-pricing"
import { ServiceSpecialCard } from "@/components/sections/service-special-card"
import { CTASection } from "@/components/sections/cta-section"
import { RelatedServices } from "@/components/sections/related-services"
import { RefreshCw, Scale, Users, FileText, Shield, HandHeart } from "lucide-react"


const includedFeatures = [
  {
    icon: Scale,
    title: "Asset Valuation",
    description: "Professional appraisal and fair market value assessment for trade items."
  },
  {
    icon: Users,
    title: "Partner Matching",
    description: "Connect with verified trading partners through our extensive network."
  },
  {
    icon: FileText,
    title: "Documentation",
    description: "Complete paperwork, contracts, and legal documentation for secure trades."
  },
  {
    icon: Shield,
    title: "Secure Process",
    description: "Protected exchange process with verification and quality assurance."
  },
  {
    icon: HandHeart,
    title: "Fair Exchange",
    description: "Ensuring equitable trades that benefit all parties involved."
  },
  {
    icon: RefreshCw,
    title: "Trade Coordination",
    description: "Full management of the exchange process from start to completion."
  }
]

const pricingTiers = [
  {
    name: "Basic Tier",
    priceRange: [500, 2500] as [number, number],
    description: "Small trades and simple asset exchanges",
    features: [
      "Trade value under $10,000",
      "10% commission + $100 facilitation fee",
      "Basic asset appraisal", 
      "Standard partner matching",
      "Essential documentation"
    ],
    example: "Trading old tools for new IT equipment or furniture exchange"
  },
  {
    name: "Standard Tier", 
    priceRange: [2501, 10000] as [number, number],
    description: "Medium complexity trades with enhanced services",
    features: [
      "Trade value $10,001–$50,000",
      "12% commission + $300 coordination fee",
      "Professional appraisal services",
      "Extended partner network access",
      "Comprehensive documentation",
      "Quality verification"
    ],
    example: "Office equipment for manufacturing parts or vehicle trades",
    popular: true
  },
  {
    name: "Premium Tier",
    priceRange: [10001, 50000] as [number, number],
    description: "Large-scale or complex trades with full legal support",
    features: [
      "Trade value over $50,000",
      "15% commission + $1,000–$3,000 coordination fee",
      "Expert valuation and legal review",
      "Priority partner matching",
      "Complete legal documentation",
      "Insurance coordination if needed"
    ],
    example: "Large equipment trades or business asset exchanges"
  }
]

const relatedServices = [
  {
    title: "Supply Consulting",
    description: "Asset optimization strategies",
    href: "/services/supply-consulting"
  },
  {
    title: "Custom Procurement", 
    description: "Replacement item sourcing",
    href: "/services/custom-procurement"
  },
  {
    title: "Logistics Coordination",
    description: "Trade delivery management", 
    href: "/services/logistics"
  }
]

export default function TradeBarter() {
  return (
    <div className="min-h-screen">
      <ServiceHero
        title="Trade & Barter Facilitation"
        subtitle="Smart asset exchanges for everyone"
        description="Professional facilitation of asset exchanges and barter transactions. We match trading partners, ensure fair valuations, and manage the complete exchange process securely."
        priceRange="$500–$50,000+"
        icon={RefreshCw}
      />
      
      <ServiceOverview
        title="Professional Trade Facilitation"
        description="Transform unused assets into needed resources through our professional trade and barter services. We handle everything from partner matching to legal documentation, ensuring secure and equitable exchanges."
        applications={{
          b2c: "Individuals trading personal items (old tools for new IT gear, furniture exchanges, hobby equipment swaps)",
          b2b: "Businesses exchanging inventory or assets (office furniture for manufacturing parts, equipment upgrades)"
        }}
        statCard={{
          number: "$2.5M",
          label: "Trade Value Facilitated",
          description: "Successfully matched and coordinated exchanges"
        }}
      />
      
      <WhatsIncluded 
        features={includedFeatures}
      />
      
      <ServicePricing 
        tiers={pricingTiers}
      />
      
      <ServiceSpecialCard
        icon={HandHeart}
        title="Fair Trade Promise"
        description="Every trade we facilitate is carefully evaluated to ensure fairness for all parties. Our extensive network and professional valuation services guarantee equitable exchanges that benefit everyone involved."
      />
      
      <CTASection />
      
      <RelatedServices 
        services={relatedServices}
      />
    </div>
  )
}
