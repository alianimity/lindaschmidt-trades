"use client"

import { motion } from "framer-motion"

interface ServiceOverviewProps {
  title: string
  description: string
  applications: {
    b2c: string
    b2b: string
  }
  statCard?: {
    number: string
    label: string
    description: string
  }
}

export function ServiceOverview({ title, description, applications, statCard }: ServiceOverviewProps) {
  const defaultStatCard = {
    number: "500+",
    label: "Projects Completed",
    description: "Trusted by businesses and individuals nationwide"
  }
  return (
    <section id="overview" className="py-20 bg-neutral-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              {title}
            </h2>
            <p className="text-lg text-neutral-400 leading-relaxed">
              {description}
            </p>
            
            <div className="space-y-6">
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-brand-primary">
                  For Individuals (B2C)
                </h3>
                <p className="text-neutral-400 leading-relaxed">
                  {applications.b2c}
                </p>
              </div>
              
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-brand-primary">
                  For Businesses (B2B)
                </h3>
                <p className="text-neutral-400 leading-relaxed">
                  {applications.b2b}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-brand-primary/20 to-brand-support/40 border border-brand-primary/20 flex items-center justify-center">
              <div className="text-center space-y-4 p-8">
                <div className="text-6xl font-bold text-brand-primary">{(statCard || defaultStatCard).number}</div>
                <div className="text-lg text-white font-medium">{(statCard || defaultStatCard).label}</div>
                <div className="text-sm text-neutral-400">
                  {(statCard || defaultStatCard).description}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
