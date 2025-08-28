"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Users, Package, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-neutral-900 via-neutral-800 to-black overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-support/20 to-brand-primary/10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)]" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Main headline */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Trading Tools for{" "}
              <span className="text-transparent bg-gradient-to-r from-brand-primary to-orange-400 bg-clip-text">
                Every Trade
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
              From Home to Enterprise
            </p>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-neutral-400 max-w-4xl mx-auto leading-relaxed">
            Professional trading and procurement services for businesses and individuals. 
            Bulk sourcing, custom procurement, supply consulting, and logistics across all 50 states.
          </p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto py-8"
          >
            <div className="flex flex-col items-center space-y-2">
              <div className="p-3 rounded-full bg-brand-primary/20 border border-brand-primary/30">
                <Users className="h-6 w-6 text-brand-primary" />
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-sm text-neutral-400">Projects Completed</div>
              </div>
            </div>
            
            <div className="flex flex-col items-center space-y-2">
              <div className="p-3 rounded-full bg-brand-primary/20 border border-brand-primary/30">
                <Package className="h-6 w-6 text-brand-primary" />
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">$500-$170K+</div>
                <div className="text-sm text-neutral-400">Project Range</div>
              </div>
            </div>
            
            <div className="flex flex-col items-center space-y-2">
              <div className="p-3 rounded-full bg-brand-primary/20 border border-brand-primary/30">
                <TrendingUp className="h-6 w-6 text-brand-primary" />
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">10+ Years</div>
                <div className="text-sm text-neutral-400">Experience</div>
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
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

          {/* Trust badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="pt-8"
          >
            <p className="text-sm text-neutral-500">
              Connecticut LLC • Licensed and Insured • Available Nationwide
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-brand-primary/50 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-brand-primary rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  )
}
