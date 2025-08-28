"use client"

import { motion } from "framer-motion"
import { Building2, Users, Award } from "lucide-react"

export function AboutHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-neutral-900 via-neutral-800 to-black overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-support)]/20 to-[var(--brand-primary)]/10" />
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
              About Linda Schmidt Trades
            </h1>
            <p className="text-xl md:text-2xl text-[var(--brand-primary)] font-medium">
              Your trusted partner in professional trading & procurement
            </p>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-neutral-400 max-w-4xl mx-auto leading-relaxed">
            With over 10 years of experience in trading and procurement, we&apos;ve built a reputation 
            for delivering reliable, efficient, and cost-effective solutions for businesses and individuals nationwide.
          </p>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto py-8"
          >
            <div className="flex flex-col items-center space-y-2">
              <div className="p-3 rounded-full bg-[var(--brand-primary)]/20 border border-[var(--brand-primary)]/30">
                <Building2 className="h-6 w-6 text-[var(--brand-primary)]" />
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">Connecticut LLC</div>
                <div className="text-sm text-neutral-400">Licensed & Insured</div>
              </div>
            </div>
            
            <div className="flex flex-col items-center space-y-2">
              <div className="p-3 rounded-full bg-[var(--brand-primary)]/20 border border-[var(--brand-primary)]/30">
                <Users className="h-6 w-6 text-[var(--brand-primary)]" />
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-sm text-neutral-400">Satisfied Clients</div>
              </div>
            </div>
            
            <div className="flex flex-col items-center space-y-2">
              <div className="p-3 rounded-full bg-[var(--brand-primary)]/20 border border-[var(--brand-primary)]/30">
                <Award className="h-6 w-6 text-[var(--brand-primary)]" />
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">10+ Years</div>
                <div className="text-sm text-neutral-400">Industry Experience</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
