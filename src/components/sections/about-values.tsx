"use client"

import { motion } from "framer-motion"
import { Shield, Heart, Lightbulb, Handshake, Award, Globe } from "lucide-react"

const values = [
  {
    icon: Shield,
    title: "Reliability",
    description: "Consistent quality and dependable service you can trust for every project."
  },
  {
    icon: Heart,
    title: "Client-Focused",
    description: "Your success is our priority. We tailor solutions to meet your specific needs."
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Continuously improving our processes and expanding our capabilities."
  },
  {
    icon: Handshake,
    title: "Transparency",
    description: "Clear pricing, honest communication, and no hidden fees or surprises."
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Maintaining high standards in every aspect of our service delivery."
  },
  {
    icon: Globe,
    title: "Accessibility",
    description: "Serving businesses and individuals with equal dedication nationwide."
  }
]

export function AboutValues() {
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
            Our Core Values
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            The principles that guide every decision we make and every service we provide.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-8 rounded-2xl bg-brand-support border border-brand-primary/20 group hover:border-brand-primary/40 transition-all duration-300"
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-brand-primary/20 border border-brand-primary/30 group-hover:bg-brand-primary/30 transition-colors">
                  <value.icon className="h-8 w-8 text-brand-primary" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-brand-primary transition-colors">
                {value.title}
              </h3>
              
              <p className="text-neutral-400 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Standards & Compliance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-brand-support border border-brand-primary/20">
            <h3 className="text-2xl font-bold text-white mb-6">Standards & Compliance</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-brand-primary font-semibold">Business License</div>
                <div className="text-sm text-neutral-400">Connecticut Secretary of State registered LLC</div>
              </div>
              
              <div className="space-y-2">
                <div className="text-brand-primary font-semibold">Insurance Coverage</div>
                <div className="text-sm text-neutral-400">Comprehensive business liability protection</div>
              </div>
              
              <div className="space-y-2">
                <div className="text-brand-primary font-semibold">Tax Compliance</div>
                <div className="text-sm text-neutral-400">Connecticut sales tax registration and compliance</div>
              </div>
            </div>
            
            <p className="text-sm text-neutral-500 mt-6">
              Work requiring specialized credentials is performed by appropriately qualified partners.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
