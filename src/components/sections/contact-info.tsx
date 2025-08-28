"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock, MessageSquare, FileText } from "lucide-react"

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    primary: "info@lindaschmidttrades.com",
    secondary: "For detailed inquiries and quotes",
    action: "mailto:info@lindaschmidttrades.com"
  },
  {
    icon: Phone,
    title: "Phone",
    primary: "(860) 555-0123",
    secondary: "Business hours: Mon-Fri 8AM-6PM ET",
    action: "tel:+18605550123"
  },
  {
    icon: MapPin,
    title: "Location",
    primary: "Connecticut, USA",
    secondary: "Serving all 50 states nationwide",
    action: null
  }
]

const quickActions = [
  {
    icon: MessageSquare,
    title: "Free Consultation",
    description: "Schedule a no-obligation consultation to discuss your needs",
    timeline: "Within 24 hours"
  },
  {
    icon: FileText,
    title: "Custom Quote",
    description: "Get detailed pricing for your specific requirements",
    timeline: "1-2 business days"
  },
  {
    icon: Clock,
    title: "Project Planning",
    description: "Comprehensive project timeline and coordination",
    timeline: "2-3 business days"
  }
]

export function ContactInfo() {
  return (
    <section className="py-20 bg-neutral-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact Methods */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Left: Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Contact Information
              </h2>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Multiple ways to reach us for your convenience. We respond to all inquiries promptly 
                and professionally.
              </p>
            </div>

            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-4 p-6 rounded-2xl bg-brand-support border border-brand-primary/20 hover:border-brand-primary/40 transition-colors"
                >
                  <div className="p-3 rounded-full bg-brand-primary/20 border border-brand-primary/30 flex-shrink-0">
                    <method.icon className="h-6 w-6 text-brand-primary" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {method.title}
                    </h3>
                    {method.action ? (
                      <a 
                        href={method.action}
                        className="text-brand-primary hover:text-brand-primary/80 font-medium transition-colors"
                      >
                        {method.primary}
                      </a>
                    ) : (
                      <div className="text-brand-primary font-medium">{method.primary}</div>
                    )}
                    <p className="text-sm text-neutral-400 mt-1">
                      {method.secondary}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Quick Actions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                How We Can Help
              </h2>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Choose the best way to get started with your project. All consultations 
                are free and come with no obligation.
              </p>
            </div>

            <div className="space-y-6">
              {quickActions.map((action, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                  className="p-6 rounded-2xl bg-brand-support border border-brand-primary/20"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-brand-primary/20 border border-brand-primary/30 flex-shrink-0">
                      <action.icon className="h-6 w-6 text-brand-primary" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {action.title}
                      </h3>
                      <p className="text-neutral-400 mb-3">
                        {action.description}
                      </p>
                      <div className="inline-flex items-center text-sm text-brand-primary">
                        <Clock className="h-4 w-4 mr-1" />
                        {action.timeline}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
