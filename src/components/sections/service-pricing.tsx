"use client"

import { motion } from "framer-motion"
import { Check, Star } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { formatPriceRange } from "@/lib/utils"
import Link from "next/link"

interface PricingTier {
  name: string
  priceRange: [number, number]
  description: string
  features: string[]
  example: string
  popular?: boolean
}

interface ServicePricingProps {
  tiers: PricingTier[]
}

export function ServicePricing({ tiers }: ServicePricingProps) {
  return (
    <section className="py-20 bg-neutral-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Transparent Pricing
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            Choose the service tier that best fits your needs and budget. All pricing includes comprehensive service features.
          </p>
        </motion.div>

        {/* Pricing Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="flex items-center space-x-1 bg-brand-primary text-black px-3 py-1 rounded-full text-sm font-medium">
                    <Star className="h-3 w-3 fill-current" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}
              
              <Card className={`h-full ${tier.popular ? 'border-brand-primary/50 shadow-lg' : ''} hover:border-brand-primary/40 transition-all duration-300`}>
                <CardHeader className="text-center">
                  <div className="flex items-center justify-between mb-4">
                    <CardTitle className="text-xl text-white">{tier.name}</CardTitle>
                    <div className="text-2xl font-bold text-brand-primary">
                      {formatPriceRange(tier.priceRange[0], tier.priceRange[1])}
                    </div>
                  </div>
                  <CardDescription className="text-neutral-300 mb-4">
                    {tier.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Features */}
                  <ul className="space-y-3">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <Check className="h-4 w-4 text-brand-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-neutral-400">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Example */}
                  <div className="p-4 rounded-lg bg-brand-primary/10 border border-brand-primary/20">
                    <p className="text-sm font-medium text-brand-primary mb-1">Example:</p>
                    <p className="text-sm text-neutral-400">{tier.example}</p>
                  </div>
                  
                  {/* CTA Button */}
                  <Button 
                    asChild 
                    className={`w-full ${tier.popular ? 'bg-brand-primary hover:bg-brand-primary/90' : ''}`}
                    variant={tier.popular ? 'default' : 'outline'}
                  >
                    <Link href="/contact">
                      Get Quote
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-sm text-neutral-500 mb-4">
            All prices are base estimates. Final pricing may vary based on specific requirements, complexity, and current market conditions.
          </p>
          <p className="text-sm text-neutral-500">
            Connecticut residents: Sales tax (6.35%) applies to tangible goods as required by state law.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
