"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Michael Chen",
    role: "Construction Manager",
    location: "Hartford, CT",
    rating: 5,
    text: "Linda Schmidt Trades helped us source specialized tools for our latest project. Their attention to detail and competitive pricing saved us both time and money. Highly recommended for any contractor.",
    project: "Industrial Tool Procurement"
  },
  {
    name: "Sarah Williams", 
    role: "Remote Worker",
    location: "Stamford, CT",
    rating: 5,
    text: "Setting up my home office was overwhelming until I found Linda Schmidt Trades. They created a perfect bundle of furniture and tech equipment within my budget. Professional service from start to finish.",
    project: "Home Office Setup"
  },
  {
    name: "David Rodriguez",
    role: "Manufacturing Director", 
    location: "New Haven, CT",
    rating: 5,
    text: "The supply optimization consulting we received transformed our procurement process. We're now saving 20% on our annual supply costs while improving quality. Excellent expertise and guidance.",
    project: "Supply Chain Optimization"
  },
  {
    name: "Jennifer Park",
    role: "Small Business Owner",
    location: "Bridgeport, CT", 
    rating: 5,
    text: "The trade facilitation service helped us exchange old office furniture for new equipment. The process was seamless and fair. Great way to upgrade without breaking the budget.",
    project: "Equipment Trade & Upgrade"
  },
  {
    name: "Robert Thompson",
    role: "IT Manager",
    location: "Waterbury, CT",
    rating: 5,
    text: "Bulk procurement for our new office expansion was handled flawlessly. From initial consultation to final delivery, everything was coordinated perfectly. Will definitely use again.",
    project: "Office Expansion Project"
  },
  {
    name: "Lisa Martinez",
    role: "DIY Enthusiast", 
    location: "New London, CT",
    rating: 5,
    text: "Custom tool bundles for my workshop renovation were exactly what I needed. The consultation helped me get the right tools within budget. Excellent customer service throughout.",
    project: "Workshop Renovation"
  }
]

export function ReviewsSection() {
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
            Client Success Stories
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            See how we&apos;ve helped businesses and individuals achieve their procurement goals 
            with expert guidance and reliable service.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  {/* Quote icon */}
                  <div className="mb-4">
                    <Quote className="h-6 w-6 text-brand-primary" />
                  </div>
                  
                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-brand-primary text-brand-primary" />
                    ))}
                  </div>
                  
                  {/* Testimonial text */}
                  <p className="text-neutral-300 mb-6 leading-relaxed">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                  
                  {/* Project info */}
                  <div className="mb-4">
                    <p className="text-sm font-medium text-brand-primary">
                      {testimonial.project}
                    </p>
                  </div>
                  
                  {/* Author info */}
                  <div className="border-t border-brand-primary/20 pt-4">
                    <p className="font-medium text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-neutral-400">
                      {testimonial.role}
                    </p>
                    <p className="text-xs text-neutral-500 mt-1">
                      {testimonial.location}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center"
        >
          <div className="space-y-2">
            <div className="text-3xl font-bold text-brand-primary">98%</div>
            <div className="text-sm text-neutral-400">Client Satisfaction</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-brand-primary">500+</div>
            <div className="text-sm text-neutral-400">Projects Completed</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-brand-primary">15%</div>
            <div className="text-sm text-neutral-400">Average Savings</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-brand-primary">24h</div>
            <div className="text-sm text-neutral-400">Response Time</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
