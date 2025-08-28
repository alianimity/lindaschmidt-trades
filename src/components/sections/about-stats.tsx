"use client"

import { motion } from "framer-motion"
import { TrendingUp, Users, Package, Clock } from "lucide-react"

export function AboutStats() {
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
            Our Track Record
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            Numbers that speak to our commitment to excellence and client satisfaction.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center p-8 rounded-2xl bg-brand-support border border-brand-primary/20"
          >
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-brand-primary/20 border border-brand-primary/30">
                <TrendingUp className="h-8 w-8 text-brand-primary" />
              </div>
            </div>
            <div className="text-4xl font-bold text-brand-primary mb-2">98%</div>
            <div className="text-lg font-medium text-white mb-1">Client Satisfaction</div>
            <div className="text-sm text-neutral-400">Consistently exceeding expectations</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center p-8 rounded-2xl bg-brand-support border border-brand-primary/20"
          >
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-brand-primary/20 border border-brand-primary/30">
                <Package className="h-8 w-8 text-brand-primary" />
              </div>
            </div>
            <div className="text-4xl font-bold text-brand-primary mb-2">500+</div>
            <div className="text-lg font-medium text-white mb-1">Projects Delivered</div>
            <div className="text-sm text-neutral-400">Across multiple industries</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center p-8 rounded-2xl bg-brand-support border border-brand-primary/20"
          >
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-brand-primary/20 border border-brand-primary/30">
                <Users className="h-8 w-8 text-brand-primary" />
              </div>
            </div>
            <div className="text-4xl font-bold text-brand-primary mb-2">15%</div>
            <div className="text-lg font-medium text-white mb-1">Average Savings</div>
            <div className="text-sm text-neutral-400">Cost reduction for clients</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center p-8 rounded-2xl bg-brand-support border border-brand-primary/20"
          >
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-brand-primary/20 border border-brand-primary/30">
                <Clock className="h-8 w-8 text-brand-primary" />
              </div>
            </div>
            <div className="text-4xl font-bold text-brand-primary mb-2">24h</div>
            <div className="text-lg font-medium text-white mb-1">Response Time</div>
            <div className="text-sm text-neutral-400">Quick consultation turnaround</div>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="inline-block p-6 rounded-2xl bg-brand-primary/10 border border-brand-primary/20">
            <p className="text-lg text-neutral-300">
              <span className="text-brand-primary font-semibold">Serving all 50 states</span> with reliable, 
              professional trading and procurement services since 2013.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
