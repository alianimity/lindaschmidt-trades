"use client"

import { motion } from "framer-motion"
import { Clock, Award, Users, TrendingUp } from "lucide-react"

export function AboutStory() {
  return (
    <section className="py-20 bg-black">
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
            Our Story & Expertise
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            Built on a foundation of industry expertise, professional relationships, and commitment to excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left: Story Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              A Decade of Trading Excellence
            </h3>
            
            <div className="space-y-4 text-lg text-neutral-400 leading-relaxed">
              <p>
                Linda Schmidt Trades LLC was founded with a simple mission: to bridge the gap between 
                suppliers and customers with professional, efficient, and cost-effective procurement solutions.
              </p>
              
              <p>
                What started as a small Connecticut-based operation has grown into a trusted partner 
                for businesses and individuals across all 50 states. Our hybrid B2B/B2C model allows 
                us to serve everyone from individual remote workers to large enterprises.
              </p>
              
              <p>
                We specialize in non-regulated goods, focusing on tools, office furniture, IT equipment, 
                and manufacturing supplies. Our dropshipping model keeps costs low while our extensive 
                supplier network ensures quality and reliability.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-brand-primary">Key Differentiators:</h4>
              <ul className="space-y-3 text-neutral-400">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-brand-primary rounded-full mr-3 mt-2" />
                  <span><strong className="text-white">Low-Risk Model:</strong> No inventory holding via dropshipping reduces costs and enables competitive pricing</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-brand-primary rounded-full mr-3 mt-2" />
                  <span><strong className="text-white">Verified Suppliers:</strong> Extensive network of trusted partners ensures quality and reliability</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-brand-primary rounded-full mr-3 mt-2" />
                  <span><strong className="text-white">Scalable Solutions:</strong> From $500 individual orders to $170,000+ enterprise projects</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right: Timeline/Milestones */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Milestone Cards */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-6 rounded-2xl bg-brand-support border border-brand-primary/20">
                <div className="p-3 rounded-full bg-brand-primary/20 border border-brand-primary/30 flex-shrink-0">
                  <Clock className="h-6 w-6 text-brand-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">10+ Years</h4>
                  <p className="text-neutral-400">Industry experience and proven track record</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-6 rounded-2xl bg-brand-support border border-brand-primary/20">
                <div className="p-3 rounded-full bg-brand-primary/20 border border-brand-primary/30 flex-shrink-0">
                  <Users className="h-6 w-6 text-brand-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">500+ Projects</h4>
                  <p className="text-neutral-400">Successfully completed across multiple industries</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-6 rounded-2xl bg-brand-support border border-brand-primary/20">
                <div className="p-3 rounded-full bg-brand-primary/20 border border-brand-primary/30 flex-shrink-0">
                  <TrendingUp className="h-6 w-6 text-brand-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">98% Satisfaction</h4>
                  <p className="text-neutral-400">Client satisfaction rate and repeat business</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-6 rounded-2xl bg-brand-support border border-brand-primary/20">
                <div className="p-3 rounded-full bg-brand-primary/20 border border-brand-primary/30 flex-shrink-0">
                  <Award className="h-6 w-6 text-brand-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Licensed & Insured</h4>
                  <p className="text-neutral-400">Connecticut LLC with comprehensive coverage</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
