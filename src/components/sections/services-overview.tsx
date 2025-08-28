"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Package, Settings, RefreshCw, Users, Truck } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { formatPriceRange } from "@/lib/utils"

const services = [
  {
    icon: Package,
    title: "Bulk Sourcing & Wholesale Supply",
    description: "Sourcing and supplying non-regulated goods in bulk quantities with direct dropshipping from verified suppliers.",
    priceRange: [500, 50000],
    href: "/services/bulk-sourcing",
    examples: ["Contractor tools", "Office equipment", "IT peripherals"]
  },
  {
    icon: Settings,
    title: "Customized Procurement & Bundling",
    description: "Creating tailored packages based on client specifications, mixing suppliers for optimal deals.",
    priceRange: [500, 75000],
    href: "/services/custom-procurement", 
    examples: ["DIY toolkits", "Office setups", "Custom bundles"]
  },
  {
    icon: RefreshCw,
    title: "Trade & Barter Facilitation",
    description: "Matching clients for asset exchanges, valuing items, and facilitating the barter process.",
    priceRange: [500, 50000],
    href: "/services/trade-barter",
    examples: ["Equipment trades", "Surplus exchanges", "Asset swaps"]
  },
  {
    icon: Users,
    title: "Consulting on Supply Optimization",
    description: "Expert advice on procurement strategies, cost-saving tactics, and supply chain improvements.",
    priceRange: [500, 20000],
    href: "/services/supply-consulting",
    examples: ["Vendor reviews", "Budget optimization", "Process improvement"]
  },
  {
    icon: Truck,
    title: "Logistics & Fulfillment Coordination",
    description: "Managing shipping, tracking, and delivery from suppliers to clients, including customs coordination.",
    priceRange: [500, 30000],
    href: "/services/logistics",
    examples: ["Bulk logistics", "International shipping", "Multi-site delivery"]
  }
]

export function ServicesOverview() {
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
            Comprehensive Trading Services
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            From individual purchases to enterprise-scale procurement, we deliver scalable solutions 
            that grow with your needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full group hover:border-brand-primary/40 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-lg bg-brand-primary/20 border border-brand-primary/30">
                      <service.icon className="h-6 w-6 text-brand-primary" />
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-brand-primary">
                        {formatPriceRange(service.priceRange[0], service.priceRange[1])}
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-brand-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-neutral-300">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium text-neutral-400 mb-2">Examples:</p>
                      <ul className="text-sm text-neutral-500">
                        {service.examples.map((example, i) => (
                          <li key={i} className="flex items-center">
                            <span className="w-1 h-1 bg-brand-primary rounded-full mr-2" />
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button asChild variant="ghost" className="w-full group/btn">
                      <Link href={service.href}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-4">
            <Button asChild size="lg">
              <Link href="/services">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">
                Custom Quote
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
