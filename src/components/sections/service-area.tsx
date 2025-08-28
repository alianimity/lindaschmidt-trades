"use client"

import { motion } from "framer-motion"
import { MapPin, Truck, Globe, Clock } from "lucide-react"

export function ServiceArea() {
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
            Nationwide Service
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            Based in Connecticut, serving clients across all 50 states with reliable 
            procurement and logistics solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Left: Service Coverage */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Where We Serve
              </h3>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-6 rounded-2xl bg-brand-support border border-brand-primary/20">
                <div className="p-3 rounded-full bg-brand-primary/20 border border-brand-primary/30 flex-shrink-0">
                  <MapPin className="h-6 w-6 text-brand-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Headquarters: Connecticut
                  </h4>
                  <p className="text-neutral-400">
                    Licensed Connecticut LLC with deep regional knowledge and relationships 
                    throughout the Northeast.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 rounded-2xl bg-brand-support border border-brand-primary/20">
                <div className="p-3 rounded-full bg-brand-primary/20 border border-brand-primary/30 flex-shrink-0">
                  <Globe className="h-6 w-6 text-brand-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    National Coverage
                  </h4>
                  <p className="text-neutral-400">
                    Serving all 50 states through our extensive supplier network and 
                    logistics partnerships across the country.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 rounded-2xl bg-brand-support border border-brand-primary/20">
                <div className="p-3 rounded-full bg-brand-primary/20 border border-brand-primary/30 flex-shrink-0">
                  <Truck className="h-6 w-6 text-brand-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Logistics Network
                  </h4>
                  <p className="text-neutral-400">
                    Strategic partnerships with carriers and fulfillment centers enable 
                    efficient delivery to any location.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Response Times & Capabilities */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Service Capabilities
              </h3>
            </div>

            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-brand-support border border-brand-primary/20">
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="h-6 w-6 text-brand-primary" />
                  <h4 className="text-lg font-semibold text-white">Response Times</h4>
                </div>
                <div className="space-y-3 text-neutral-400">
                  <div className="flex justify-between">
                    <span>Initial consultation:</span>
                    <span className="text-brand-primary font-medium">Within 24 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Custom quotes:</span>
                    <span className="text-brand-primary font-medium">1-2 business days</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Project start:</span>
                    <span className="text-brand-primary font-medium">2-5 business days</span>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-brand-support border border-brand-primary/20">
                <h4 className="text-lg font-semibold text-white mb-4">
                  Specialized Services by Region
                </h4>
                <div className="space-y-3 text-neutral-400">
                  <div>
                    <span className="text-brand-primary font-medium">Northeast:</span> Manufacturing and industrial supplies
                  </div>
                  <div>
                    <span className="text-brand-primary font-medium">Southeast:</span> Construction and trades equipment
                  </div>
                  <div>
                    <span className="text-brand-primary font-medium">West Coast:</span> Technology and office solutions
                  </div>
                  <div>
                    <span className="text-brand-primary font-medium">Midwest:</span> Agricultural and manufacturing supplies
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-brand-primary/10 border border-brand-primary/20">
                <h4 className="text-lg font-semibold text-white mb-3">
                  Ready to Work With You
                </h4>
                <p className="text-neutral-300 mb-4">
                  No matter where you&apos;re located, we&apos;re equipped to handle your 
                  procurement needs efficiently and professionally.
                </p>
                <div className="text-sm text-brand-primary font-medium">
                  Licensed • Insured • Nationwide Coverage
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
