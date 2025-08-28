"use client"

import { motion } from "framer-motion"
import { Target, Eye, Heart } from "lucide-react"

export function AboutMission() {
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
            Our Mission & Vision
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            Driving excellence in trading and procurement through trusted partnerships and innovative solutions.
          </p>
        </motion.div>

        {/* Mission/Vision Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-full bg-[var(--brand-primary)]/20 border border-[var(--brand-primary)]/30">
                <Target className="h-8 w-8 text-[var(--brand-primary)]" />
              </div>
              <h3 className="text-2xl font-bold text-white">Our Mission</h3>
            </div>
            <p className="text-lg text-neutral-400 leading-relaxed">
              Linda Schmidt Trades LLC delivers reliable wholesale and retail trading of industrial 
              and office supplies, serving businesses and individuals with efficient sourcing, 
              competitive pricing, and seamless fulfillment to support professional and personal projects.
            </p>
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-[var(--brand-primary)]">Core Commitments:</h4>
              <ul className="space-y-2 text-neutral-400">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[var(--brand-primary)] rounded-full mr-3" />
                  Reliable, efficient sourcing solutions
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[var(--brand-primary)] rounded-full mr-3" />
                  Competitive pricing and transparent costs
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[var(--brand-primary)] rounded-full mr-3" />
                  Professional service from consultation to delivery
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-full bg-[var(--brand-primary)]/20 border border-[var(--brand-primary)]/30">
                <Eye className="h-8 w-8 text-[var(--brand-primary)]" />
              </div>
              <h3 className="text-2xl font-bold text-white">Our Vision</h3>
            </div>
            <p className="text-lg text-neutral-400 leading-relaxed">
              To become a go-to hybrid trader in the Northeast, blending B2B wholesale expertise 
              with accessible B2C options to facilitate transactions from everyday essentials to 
              enterprise-scale supply deals.
            </p>
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-[var(--brand-primary)]">Future Goals:</h4>
              <ul className="space-y-2 text-neutral-400">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[var(--brand-primary)] rounded-full mr-3" />
                  Expand supplier network nationwide
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[var(--brand-primary)] rounded-full mr-3" />
                  Develop innovative trading solutions
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[var(--brand-primary)] rounded-full mr-3" />
                  Lead in sustainable procurement practices
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center space-x-3 p-6 rounded-2xl bg-[var(--brand-support)] border border-[var(--brand-primary)]/20">
            <Heart className="h-6 w-6 text-[var(--brand-primary)]" />
            <p className="text-xl font-medium text-white">
              &ldquo;Trading Tools for Every Trade – From Home to Enterprise&rdquo;
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
