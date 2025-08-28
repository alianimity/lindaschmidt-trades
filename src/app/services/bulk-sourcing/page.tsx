import type { Metadata } from "next"
import { ServiceHero } from "@/components/sections/service-hero"
import { ServiceOverview } from "@/components/sections/service-overview"
import { WhatsIncluded } from "@/components/sections/whats-included"
import { ServicePricing } from "@/components/sections/service-pricing"
import { ServiceSpecialCard } from "@/components/sections/service-special-card"
import { CTASection } from "@/components/sections/cta-section"
import { RelatedServices } from "@/components/sections/related-services"
import { Package, Users, Shield, Truck, CheckCircle, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Bulk Sourcing & Wholesale Supply",
  description: "Professional bulk sourcing and wholesale supply services. Direct dropshipping from verified suppliers with quality checks and competitive pricing.",
}

const includedFeatures = [
  {
    icon: Package,
    title: "Product Sourcing",
    description: "Access to verified suppliers and manufacturers with quality assurance protocols."
  },
  {
    icon: CheckCircle,
    title: "Quality Verification",
    description: "Comprehensive quality checks and supplier verification before order placement."
  },
  {
    icon: Truck,
    title: "Direct Dropshipping",
    description: "Seamless fulfillment directly from suppliers to your location with tracking."
  },
  {
    icon: Shield,
    title: "Basic Warranties",
    description: "Standard warranty coverage and return policies for all sourced products."
  },
  {
    icon: Users,
    title: "Volume Discounts",
    description: "Competitive pricing with additional discounts for larger order quantities."
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "Efficient processing and quick delivery timelines for urgent requirements."
  }
]

const pricingTiers = [
  {
    name: "Basic Tier",
    priceRange: [500, 2000] as [number, number],
    description: "Small orders with essential sourcing services",
    features: [
      "10–50 items",
      "20% markup + $50 handling fee",
      "Standard supplier verification", 
      "Basic quality checks",
      "Standard shipping coordination"
    ],
    example: "Small contractor tool set or home office supplies"
  },
  {
    name: "Standard Tier", 
    priceRange: [2001, 10000] as [number, number],
    description: "Medium bulk orders with enhanced services",
    features: [
      "50–200 items",
      "25% markup + $200 logistics fee",
      "Enhanced quality verification",
      "Multiple supplier coordination",
      "Expedited processing available"
    ],
    example: "Office equipment package or workshop setup",
    popular: true
  },
  {
    name: "Premium Tier",
    priceRange: [10001, 50000] as [number, number],
    description: "Large-scale procurement with full coordination",
    features: [
      "200+ items or complete setups",
      "30–40% markup + $500–$2,000 coordination fee",
      "Comprehensive supplier management",
      "Priority processing and delivery",
      "Volume discounts (5–15% off for orders >$20,000)",
      "Dedicated account management"
    ],
    example: "Complete facility outfitting or large equipment orders"
  }
]

const relatedServices = [
  {
    title: "Custom Procurement",
    description: "Tailored sourcing solutions",
    href: "/services/custom-procurement"
  },
  {
    title: "Logistics Coordination", 
    description: "End-to-end shipping management",
    href: "/services/logistics"
  },
  {
    title: "Supply Consulting",
    description: "Procurement optimization advice", 
    href: "/services/supply-consulting"
  }
]

export default function BulkSourcingPage() {
  return (
    <div className="min-h-screen">
      <ServiceHero
        title="Bulk Sourcing & Wholesale Supply"
        subtitle="Professional procurement at scale"
        description="Source and supply non-regulated goods in bulk quantities with direct dropshipping from verified suppliers. Quality assurance, competitive pricing, and reliable fulfillment for your business needs."
        priceRange="$500–$50,000+"
        icon={Package}
      />
      
      <ServiceOverview
        title="Comprehensive Bulk Sourcing Solutions"
        description="Whether you need contractor tools, office equipment, or manufacturing supplies, our bulk sourcing service connects you with verified suppliers while ensuring quality, competitive pricing, and reliable delivery."
        applications={{
          b2c: "Individuals purchasing for personal use (home workshop tools, office setups for remote workers)",
          b2b: "Businesses acquiring stock for operations (contractor tools, corporate office restocks)"
        }}
      />
      
      <WhatsIncluded 
        features={includedFeatures}
      />
      
      <ServicePricing 
        tiers={pricingTiers}
      />
      
      <ServiceSpecialCard
        icon={Shield}
        title="Quality Assurance Guarantee"
        description="Every bulk order includes comprehensive quality verification from our network of trusted suppliers. We stand behind every product with warranties and hassle-free returns, ensuring your investment is protected."
      />
      
      <CTASection />
      
      <RelatedServices 
        services={relatedServices}
      />
    </div>
  )
}
