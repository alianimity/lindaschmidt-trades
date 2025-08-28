"use client"

import Link from "next/link"

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-black py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-neutral-400">
              Effective Date: January 1, 2024
            </p>
            <p className="text-lg text-neutral-400 mt-4">
              Please read these terms carefully before using our services
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-neutral-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto prose prose-invert prose-lg">
            <div className="bg-brand-support rounded-xl p-8 border border-brand-primary/20 space-y-8">
              
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
                <p className="text-neutral-300 leading-relaxed">
                  By accessing and using the services of Linda Schmidt Trades LLC (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), 
                  you (&quot;Client,&quot; &quot;Customer,&quot; or &quot;you&quot;) agree to be bound by these Terms of Service and all applicable 
                  laws and regulations. If you do not agree with any part of these terms, you may not use our services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">2. Services Provided</h2>
                <p className="text-neutral-300 leading-relaxed mb-4">
                  Linda Schmidt Trades LLC provides the following services:
                </p>
                <ul className="text-neutral-300 space-y-2 ml-6">
                  <li>• Bulk sourcing and wholesale supply coordination</li>
                  <li>• Customized procurement and bundling services</li>
                  <li>• Trade and barter facilitation</li>
                  <li>• Supply chain optimization consulting</li>
                  <li>• Logistics and fulfillment coordination</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">3. Service Agreement and Pricing</h2>
                <p className="text-neutral-300 leading-relaxed">
                  Service agreements are established through consultation and written quotation. Pricing is based on 
                  service tier, project complexity, and deliverables as outlined in individual service agreements. 
                  All prices are subject to change with 30 days written notice for ongoing services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">4. Payment Terms</h2>
                <p className="text-neutral-300 leading-relaxed">
                  Payment terms vary by service and client type. Business clients typically operate on Net 30 terms, 
                  while individual clients may require payment upon service completion. Late payments may incur 
                  additional fees as specified in individual service agreements.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">5. Limitation of Liability</h2>
                <p className="text-neutral-300 leading-relaxed">
                  Our liability is limited to the service fees paid for the specific transaction in question. 
                  We are not liable for indirect, consequential, or punitive damages. We coordinate with verified 
                  suppliers but are not manufacturers or direct sellers of physical goods.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">6. Quality and Warranties</h2>
                <p className="text-neutral-300 leading-relaxed">
                  While we work with verified suppliers and provide quality coordination, warranties on physical 
                  goods are provided by the original manufacturers or suppliers. We facilitate warranty claims 
                  but do not provide direct product warranties.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">7. Cancellation Policy</h2>
                <p className="text-neutral-300 leading-relaxed">
                  Service cancellations must be requested in writing. Cancellation terms vary by service type 
                  and project stage. Work completed prior to cancellation is billable according to the agreed 
                  service rates.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">8. Intellectual Property</h2>
                <p className="text-neutral-300 leading-relaxed">
                  All proprietary processes, methodologies, and business intelligence developed by Linda Schmidt 
                  Trades LLC remain our intellectual property. Client-specific recommendations and reports become 
                  the property of the client upon payment completion.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">9. Governing Law</h2>
                <p className="text-neutral-300 leading-relaxed">
                  These terms are governed by the laws of the State of Connecticut. Any disputes will be resolved 
                  through binding arbitration in Connecticut, except for small claims court matters.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">10. Contact Information</h2>
                <p className="text-neutral-300 leading-relaxed">
                  For questions about these Terms of Service, please contact us at:
                </p>
                <div className="text-neutral-300 mt-4">
                  <p>Linda Schmidt Trades LLC</p>
                  <p>Email: hello@lindaschmidt-trades.com</p>
                  <p>Phone: (475) 755-0400</p>
                </div>
              </div>

              <div className="border-t border-brand-primary/20 pt-6">
                <p className="text-sm text-neutral-400">
                  These Terms of Service were last updated on January 1, 2024. We reserve the right to modify 
                  these terms at any time with appropriate notice to existing clients.
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="text-center mt-12">
              <Link 
                href="/" 
                className="inline-flex items-center px-6 py-3 bg-brand-primary text-white rounded-lg hover:bg-brand-primary/90 transition-colors duration-200 font-medium"
              >
                Return to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
