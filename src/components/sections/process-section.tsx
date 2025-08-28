"use client"

import { Search, MessageSquare, Package, CheckCircle } from "lucide-react"

const steps = [
  {
    icon: Search,
    title: "Discovery & Assessment",
    description: "We analyze your needs, budget, and timeline to understand exactly what you're looking for.",
    details: ["Needs assessment", "Budget analysis", "Timeline planning"]
  },
  {
    icon: MessageSquare,
    title: "Custom Sourcing & Quotes",
    description: "Our team sources from verified suppliers and provides transparent, competitive pricing.",
    details: ["Supplier research", "Price comparison", "Quality verification"]
  },
  {
    icon: Package,
    title: "Procurement & Coordination",
    description: "We handle all procurement details, logistics coordination, and quality checks.",
    details: ["Order processing", "Quality control", "Logistics management"]
  },
  {
    icon: CheckCircle,
    title: "Delivery & Support",
    description: "From delivery to post-purchase support, we ensure your complete satisfaction.",
    details: ["Delivery tracking", "Quality assurance", "Ongoing support"]
  }
]

export function ProcessSection() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            How We Work
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            Our streamlined process ensures efficient, transparent, and successful procurement 
            from initial consultation to final delivery.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-brand-primary/20 via-brand-primary/50 to-brand-primary/20 transform -translate-y-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative"
              >
                {/* Step number */}
                <div className="flex flex-col items-center lg:items-start">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-brand-support border-2 border-brand-primary rounded-full flex items-center justify-center mb-4 z-10 relative">
                      <step.icon className="h-8 w-8 text-brand-primary" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-brand-primary text-black text-sm font-bold rounded-full flex items-center justify-center">
                      {index + 1}
                    </div>
                  </div>
                  
                  <div className="text-center lg:text-left">
                    <h3 className="text-xl font-bold text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-neutral-400 mb-4 leading-relaxed">
                      {step.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-center justify-center lg:justify-start text-sm text-neutral-500">
                          <span className="w-1 h-1 bg-brand-primary rounded-full mr-2 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col items-center space-y-4 p-8 rounded-xl bg-brand-support border border-brand-primary/20">
            <h3 className="text-2xl font-bold text-white">Ready to Get Started?</h3>
            <p className="text-neutral-400 max-w-md">
              Let&apos;s discuss your procurement needs and create a custom solution that fits your budget and timeline.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
