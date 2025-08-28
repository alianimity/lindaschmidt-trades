"use client"

import { motion } from "framer-motion"
import { Mail, Phone, Clock } from "lucide-react"

export function ContactHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-neutral-900 via-neutral-800 to-black overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-support/20 to-brand-primary/10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)]" />
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Main headline */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl text-brand-primary font-medium">
              Ready to start your next project?
            </p>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-neutral-400 max-w-4xl mx-auto leading-relaxed">
            Contact us for a free consultation and custom quote. We&apos;re here to help with all your 
            trading and procurement needs, from individual purchases to enterprise-scale solutions.
          </p>

          {/* Quick Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto py-8"
          >
            <div className="flex flex-col items-center space-y-3">
              <div className="p-3 rounded-full bg-brand-primary/20 border border-brand-primary/30">
                <Mail className="h-6 w-6 text-brand-primary" />
              </div>
              <div className="text-center">
                <div className="text-lg font-medium text-white">Email Us</div>
                <div className="text-sm text-neutral-400">hello@lindaschmidt-trades.com</div>
              </div>
            </div>
            
            <div className="flex flex-col items-center space-y-3">
              <div className="p-3 rounded-full bg-brand-primary/20 border border-brand-primary/30">
                <Phone className="h-6 w-6 text-brand-primary" />
              </div>
              <div className="text-center">
                <div className="text-lg font-medium text-white">Call Us</div>
                <div className="text-sm text-neutral-400">(475) 755-0400</div>
              </div>
            </div>
            
            <div className="flex flex-col items-center space-y-3">
              <div className="p-3 rounded-full bg-brand-primary/20 border border-brand-primary/30">
                <Clock className="h-6 w-6 text-brand-primary" />
              </div>
              <div className="text-center">
                <div className="text-lg font-medium text-white">Response Time</div>
                <div className="text-sm text-neutral-400">Within 24 hours</div>
              </div>
            </div>
          </motion.div>

          {/* Trust badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="pt-8"
          >
            <p className="text-sm text-neutral-500">
              Free consultations • No obligation quotes • Licensed & insured
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
