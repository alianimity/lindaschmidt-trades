"use client"
import { ServiceHero } from "@/components/sections/service-hero"
import { ServiceOverview } from "@/components/sections/service-overview"
import { WhatsIncluded } from "@/components/sections/whats-included"
import { ServicePricing } from "@/components/sections/service-pricing"
import { ServiceSpecialCard } from "@/components/sections/service-special-card"
import { CTASection } from "@/components/sections/cta-section"
import { RelatedServices } from "@/components/sections/related-services"
import { Settings, Target, Search, Wrench, Truck, Clock } from "lucide-react"


const includedFeatures = [
  {
    icon: Target,
    title: "Needs Assessment",
    description: "Comprehensive evaluation of your requirements, preferences, and budget constraints."
  },
  {
    icon: Search,
    title: "Supplier Optimization",
    description: "Strategic mixing of suppliers to achieve the best deals and quality combinations."
  },
  {
    icon: Wrench,
    title: "Custom Configuration",
    description: "Tailored bundling and configuration to match your exact specifications."
  },
  {
    icon: Settings,
    title: "Quality Control",
    description: "Rigorous testing and verification of all bundled components before delivery."
  },
  {
    icon: Truck,
    title: "Coordinated Delivery",
    description: "Synchronized shipping from multiple suppliers to ensure complete package arrival."
  },
  {
    icon: Clock,
    title: "Project Management",
    description: "Dedicated coordination and timeline management for complex procurement projects."
  }
]

const pricingTiers = [
  {
    name: "Basic Tier",
    priceRange: [500, 3000] as [number, number],
    description: "Simple custom bundles with minor modifications",
    features: [
      "5–20 items per bundle",
      "20% markup + $100 customization fee",
      "Basic needs assessment", 
      "Standard supplier selection",
      "Basic configuration options"
    ],
    example: "Custom DIY toolkit for specific hobby or trade"
  },
  {
    name: "Standard Tier", 
    priceRange: [3001, 15000] as [number, number],
    description: "Moderately complex procurement with enhanced customization",
    features: [
      "20–100 items with multiple categories",
      "25% markup + $300 design fee",
      "Comprehensive needs analysis",
      "Multi-supplier optimization",
      "Advanced configuration options",
      "Delivery coordination"
    ],
    example: "Complete home office or workshop setup with integrated systems",
    popular: true
  },
  {
    name: "Premium Tier",
    priceRange: [15001, 75000] as [number, number],
    description: "Highly customized large-scale procurement projects",
    features: [
      "100+ items or full facility outfitting",
      "30–40% markup + $1,000–$5,000 design fee",
      "Enterprise-level consultation",
      "Priority sourcing with 10% expedite fee",
      "Complete project management",
      "Installation coordination available"
    ],
    example: "Full facility outfitting or enterprise system deployment"
  }
]

const relatedServices = [
  {
    title: "Bulk Sourcing",
    description: "Volume procurement solutions",
    href: "/services/bulk-sourcing"
  },
  {
    title: "Supply Consulting", 
    description: "Procurement strategy optimization",
    href: "/services/supply-consulting"
  },
  {
    title: "Logistics Coordination",
    description: "Multi-supplier delivery management", 
    href: "/services/logistics"
  }
]

export default function CustomProcurementPage() {
  return (
    <div className="min-h-screen">
      <ServiceHero
        title="Customized Procurement & Bundling"
        subtitle="Tailored solutions for your unique needs"
        description="Creating personalized packages of goods based on your specifications, mixing suppliers for optimal deals and perfect fit. From simple bundles to complex enterprise solutions."
        priceRange="$500–$75,000+"
        icon={Settings}
      />
      
      <ServiceOverview
        title="Personalized Procurement Solutions"
        description="Every business and individual has unique needs. Our custom procurement service creates tailored packages that perfectly match your specifications, budget, and timeline while optimizing for quality and value."
        applications={{
          b2c: "Personalized bundles for home projects (custom DIY toolkits, home office setups with specific requirements)",
          b2b: "Enterprise-specific packages (IT equipment bundles for new offices, specialized tool sets for trades)"
        }}
        statCard={{
          number: "150+",
          label: "Custom Bundles Created",
          description: "Tailored solutions from simple to complex"
        }}
      />
      
      <WhatsIncluded 
        features={includedFeatures}
      />
      
      <ServicePricing 
        tiers={pricingTiers}
      />
      
      <ServiceSpecialCard
        icon={Target}
        title="Perfect Fit Guarantee"
        description="Our custom procurement process ensures every item meets your exact specifications. We don&apos;t just bundle products—we create integrated solutions that work together seamlessly for your specific use case."
      />
      
      <CTASection />
      
      <RelatedServices 
        services={relatedServices}
      />
    </div>
  )
}
