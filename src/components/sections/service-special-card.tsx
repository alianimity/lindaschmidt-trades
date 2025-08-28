"use client"

import { LucideIcon } from "lucide-react"

interface ServiceSpecialCardProps {
  icon: LucideIcon
  title: string
  description: string
}

export function ServiceSpecialCard({ icon: Icon, title, description }: ServiceSpecialCardProps) {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 bg-brand-primary/10 rounded-2xl border border-brand-primary/20 text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 rounded-full bg-brand-primary/20 border border-brand-primary/30">
                <Icon className="h-8 w-8 text-brand-primary" />
              </div>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {title}
            </h3>
            
            <p className="text-lg text-neutral-300 leading-relaxed max-w-2xl mx-auto">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
