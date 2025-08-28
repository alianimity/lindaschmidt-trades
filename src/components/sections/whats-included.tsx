"use client"

import { LucideIcon } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface Feature {
  icon: LucideIcon
  title: string
  description: string
}

interface WhatsIncludedProps {
  features: Feature[]
}

export function WhatsIncluded({ features }: WhatsIncludedProps) {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            What&apos;s Included
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            Comprehensive service features designed to ensure quality, efficiency, and your complete satisfaction.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index}>
              <Card className="h-full group hover:border-brand-primary/40 transition-all duration-200">
                <CardHeader>
                  <div className="p-3 rounded-lg bg-brand-primary/20 border border-brand-primary/30 w-fit mb-4">
                    <feature.icon className="h-6 w-6 text-brand-primary" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-brand-primary transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-neutral-300 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
