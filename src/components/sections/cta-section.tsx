"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Mail, Phone, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-neutral-900 via-brand-support to-neutral-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Start Your Next Project?
            </h2>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
              From individual purchases to enterprise-scale procurement, we&apos;re here to help you 
              find the right solutions at the right price. Get your free consultation today.
            </p>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          >
            <div className="flex flex-col items-center space-y-3">
              <div className="p-3 rounded-full bg-brand-primary/20 border border-brand-primary/30">
                <Clock className="h-6 w-6 text-brand-primary" />
              </div>
              <div className="text-center">
                <h3 className="font-medium text-white mb-1">Quick Response</h3>
                <p className="text-sm text-neutral-400">Free consultation within 24 hours</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center space-y-3">
              <div className="p-3 rounded-full bg-brand-primary/20 border border-brand-primary/30">
                <Mail className="h-6 w-6 text-brand-primary" />
              </div>
              <div className="text-center">
                <h3 className="font-medium text-white mb-1">No Obligation</h3>
                <p className="text-sm text-neutral-400">Free quotes and assessments</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center space-y-3">
              <div className="p-3 rounded-full bg-brand-primary/20 border border-brand-primary/30">
                <Phone className="h-6 w-6 text-brand-primary" />
              </div>
              <div className="text-center">
                <h3 className="font-medium text-white mb-1">Expert Guidance</h3>
                <p className="text-sm text-neutral-400">10+ years of experience</p>
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
          >
            <Button asChild size="xl" className="group">
              <Link href="/contact">
                Get Free Quote
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="xl">
              <Link href="/services">
                Explore Services
              </Link>
            </Button>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="border-t border-brand-primary/20 pt-8"
          >
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-sm text-neutral-400">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-brand-primary" />
                <span>hello@lindaschmidt-trades.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-brand-primary" />
                <span>(475) 755-0400</span>
              </div>
              <div className="text-center">
                <span>Connecticut LLC • Licensed & Insured</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
