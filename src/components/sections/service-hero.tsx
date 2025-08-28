"use client"

import { motion } from "framer-motion"
import { ArrowRight, LucideIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface ServiceHeroProps {
  title: string
  subtitle: string
  description: string
  priceRange: string
  icon: LucideIcon
}

export function ServiceHero({ title, subtitle, description, priceRange, icon: Icon }: ServiceHeroProps) {
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
          {/* Icon */}
          <div className="flex justify-center">
            <div className="p-6 rounded-2xl bg-[var(--brand-support)] border border-[var(--brand-primary)]/30">
              <Icon className="h-12 w-12 text-[var(--brand-primary)]" />
            </div>
          </div>

          {/* Main headline */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              {title}
            </h1>
            <p className="text-xl md:text-2xl text-[var(--brand-primary)] font-medium">
              {subtitle}
            </p>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-neutral-400 max-w-4xl mx-auto leading-relaxed">
            {description}
          </p>

          {/* Price range */}
          <div className="inline-flex items-center space-x-4 px-6 py-3 rounded-full bg-[var(--brand-primary)]/20 border border-[var(--brand-primary)]/30">
            <span className="text-sm text-neutral-300">Starting from</span>
            <span className="text-2xl font-bold text-[var(--brand-primary)]">{priceRange}</span>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button asChild size="xl" className="group">
              <Link href="/contact">
                Get Custom Quote
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="xl">
              <Link href="#overview">
                Learn More
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
