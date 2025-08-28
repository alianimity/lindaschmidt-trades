"use client"
import { ServiceHero } from "@/components/sections/service-hero"
import { ServiceOverview } from "@/components/sections/service-overview"
import { WhatsIncluded } from "@/components/sections/whats-included"
import { ServicePricing } from "@/components/sections/service-pricing"
import { ServiceSpecialCard } from "@/components/sections/service-special-card"
import { CTASection } from "@/components/sections/cta-section"
import { RelatedServices } from "@/components/sections/related-services"
import { Truck, MapPin, Shield, Globe, Package, Clock } from "lucide-react"


const includedFeatures = [
  {
    icon: Truck,
    title: "Carrier Coordination",
    description: "Partnership with trusted carriers for reliable, cost-effective shipping solutions."
  },
  {
    icon: MapPin,
    title: "Multi-Site Delivery",
    description: "Coordinated delivery to multiple locations with synchronized timing."
  },
  {
    icon: Package,
    title: "Shipment Tracking",
    description: "Real-time tracking and status updates throughout the delivery process."
  },
  {
    icon: Shield,
    title: "Insurance Coverage",
    description: "Comprehensive insurance protection for all shipments and valuable items."
  },
  {
    icon: Globe,
    title: "Customs Handling",
    description: "Expert management of international shipping and customs documentation."
  },
  {
    icon: Clock,
    title: "Delivery Scheduling",
    description: "Flexible scheduling and expedited options to meet your timeline requirements."
  }
]

const pricingTiers = [
  {
    name: "Basic Tier",
    priceRange: [500, 2000],
    description: "Standard domestic shipping for small orders",
    features: [
      "Domestic shipments only",
      "15% markup on shipping costs + $100 coordination fee",
      "Standard carrier options", 
      "Basic tracking and updates",
      "Standard delivery timelines"
    ],
    example: "Small home delivery or local business shipment coordination"
  },
  {
    name: "Standard Tier", 
    priceRange: [2001, 10000],
    description: "Enhanced logistics with insurance and international options",
    features: [
      "Domestic and international shipping",
      "20% markup on shipping costs + $300 coordination fee",
      "Insurance coverage included",
      "Premium carrier options",
      "Expedited delivery available",
      "Customs documentation support"
    ],
    example: "Multi-location business delivery or international shipments",
    popular: true
  },
  {
    name: "Premium Tier",
    priceRange: [10001, 30000],
    description: "Complex logistics for large-scale operations",
    features: [
      "Full container loads and bulk shipments",
      "25% markup + $1,000–$5,000 coordination fee",
      "White-glove delivery services",
      "Multi-site coordination",
      "Priority carrier relationships",
      "Complete customs and documentation handling",
      "Integrated with other services at no extra fee (orders >$10,000)"
    ],
    example: "Full warehouse logistics or enterprise-scale delivery coordination"
  }
]

const relatedServices = [
  {
    title: "Bulk Sourcing",
    description: "Volume procurement with integrated logistics",
    href: "/services/bulk-sourcing"
  },
  {
    title: "Custom Procurement", 
    description: "Multi-supplier coordination and delivery",
    href: "/services/custom-procurement"
  },
  {
    title: "Trade & Barter",
    description: "Asset exchange logistics management", 
    href: "/services/trade-barter"
  }
]

export default function LogisticsPage() {
  return (
    <div className="min-h-screen">
      <ServiceHero
        title="Logistics & Fulfillment Coordination"
        subtitle="Seamless delivery management"
        description="Complete logistics coordination from suppliers to your door. We manage shipping, tracking, customs, and delivery timing to ensure your orders arrive safely and on schedule."
        priceRange="$500–$20,000+"
        icon={Truck}
      />
      
      <ServiceOverview
        title="Complete Logistics Management"
        description="From single packages to full container loads, we coordinate every aspect of your logistics needs. Our carrier partnerships and expertise ensure reliable, cost-effective delivery solutions."
        applications={{
          b2c: "Fast, tracked delivery for personal orders (home delivery of equipment, furniture, or bundled products)",
          b2b: "Bulk logistics for business shipments (multi-site deliveries, warehouse coordination, international shipping)"
        }}
        statCard={{
          number: "99.2%",
          label: "On-Time Delivery Rate",
          description: "Reliable coordination across all 50 states"
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
        title="Delivery Guarantee"
        description="We guarantee safe, timely delivery of your orders. With comprehensive insurance coverage and trusted carrier partnerships, your shipments are protected from origin to destination."
      />
      
      <CTASection />
      
      <RelatedServices 
        services={relatedServices}
      />
    </div>
  )
}
