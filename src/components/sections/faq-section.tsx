"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "What types of goods do you source and trade?",
    answer: "We specialize in non-regulated goods including tools, office furniture, IT equipment, manufacturing supplies, and consumables. We focus on reliable, quality products from verified suppliers across various industries."
  },
  {
    question: "How does your pricing work?",
    answer: "Our pricing varies by service tier and project size, ranging from $500 to $170,000+. We use transparent markup structures (20-40%) plus coordination fees. Volume discounts are available for larger orders and annual contracts."
  },
  {
    question: "Do you serve both businesses and individuals?",
    answer: "Yes! We serve both B2B and B2C clients. For businesses, we handle large-scale procurement and supply optimization. For individuals, we offer custom bundles for home offices, DIY projects, and personal equipment needs."
  },
  {
    question: "What's included in your logistics coordination?",
    answer: "Our logistics services include shipping coordination, tracking, delivery management, insurance, and customs handling for international orders. We work with trusted carriers to ensure safe, timely delivery."
  },
  {
    question: "How does the trade and barter service work?",
    answer: "We facilitate asset exchanges by valuing items, matching trading partners, and managing the exchange process. This includes basic appraisals, legal review when needed, and coordination of the actual trade."
  },
  {
    question: "Do you hold inventory?",
    answer: "No, we operate through dropshipping from verified suppliers, which keeps our costs low and allows us to offer competitive pricing. This also means we can source a wide variety of products without inventory limitations."
  },
  {
    question: "What areas do you serve?",
    answer: "We serve all 50 states. While we're based in Connecticut, our network of suppliers and logistics partners allows us to coordinate deliveries nationwide efficiently."
  },
  {
    question: "How do you ensure quality?",
    answer: "We work only with verified, reliable suppliers and include quality checks in our process. We also provide basic warranties and have established return policies for any quality issues."
  },
  {
    question: "What makes your consulting services unique?",
    answer: "Our supply optimization consulting combines deep industry knowledge with practical experience. We provide actionable recommendations for cost savings, supplier selection, and process improvements based on real-world expertise."
  },
  {
    question: "How do I get started?",
    answer: "Contact us for a free consultation. We'll assess your needs, discuss your budget and timeline, and provide a custom quote. Most projects begin within 24-48 hours of initial consultation."
  }
]

export function FAQSection() {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(i => i !== id)
        : [...prev, id]
    )
  }

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            Get answers to common questions about our services, pricing, and process. 
            Don&apos;t see your question? Contact us directly.
          </p>
        </div>

        {/* FAQ Items - Two Columns */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-4">
              {leftFaqs.map((faq, index) => (
                <div key={`left-${index}`} className="bg-brand-support rounded-xl border border-brand-primary/20 overflow-hidden">
                  <button
                    onClick={() => toggleItem(`left-${index}`)}
                    className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-brand-primary/5 transition-colors duration-200"
                  >
                    <h3 className="text-lg font-medium text-white pr-4">
                      {faq.question}
                    </h3>
                    <ChevronDown className={`h-5 w-5 text-brand-primary flex-shrink-0 transition-transform duration-200 ${
                      openItems.includes(`left-${index}`) ? 'rotate-180' : ''
                    }`} />
                  </button>
                  
                  {openItems.includes(`left-${index}`) && (
                    <div className="px-6 pb-6 border-t border-brand-primary/10">
                      <p className="text-neutral-300 leading-relaxed pt-4">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              {rightFaqs.map((faq, index) => (
                <div key={`right-${index}`} className="bg-brand-support rounded-xl border border-brand-primary/20 overflow-hidden">
                  <button
                    onClick={() => toggleItem(`right-${index}`)}
                    className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-brand-primary/5 transition-colors duration-200"
                  >
                    <h3 className="text-lg font-medium text-white pr-4">
                      {faq.question}
                    </h3>
                    <ChevronDown className={`h-5 w-5 text-brand-primary flex-shrink-0 transition-transform duration-200 ${
                      openItems.includes(`right-${index}`) ? 'rotate-180' : ''
                    }`} />
                  </button>
                  
                  {openItems.includes(`right-${index}`) && (
                    <div className="px-6 pb-6 border-t border-brand-primary/10">
                      <p className="text-neutral-300 leading-relaxed pt-4">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col items-center space-y-4 p-8 rounded-xl bg-brand-support border border-brand-primary/20">
            <h3 className="text-2xl font-bold text-white">Still Have Questions?</h3>
            <p className="text-neutral-400 max-w-md">
              Our team is here to help. Contact us for personalized answers and free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-4">
              <a 
                href="mailto:info@lindaschmidttrades.com"
                className="px-6 py-3 bg-brand-primary text-white rounded-lg hover:bg-brand-primary/90 transition-colors duration-200 font-medium"
              >
                Email Us
              </a>
              <a 
                href="tel:+18605550123"
                className="px-6 py-3 border border-brand-primary/30 text-white rounded-lg hover:bg-brand-primary/10 transition-colors duration-200 font-medium"
              >
                Call (860) 555-0123
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
