"use client"

import Link from "next/link"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-black py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-neutral-400">
              Effective Date: January 1, 2024
            </p>
            <p className="text-lg text-neutral-400 mt-4">
              Your privacy and data protection are important to us
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
                <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
                <p className="text-neutral-300 leading-relaxed mb-4">
                  We collect information necessary to provide our procurement and consulting services:
                </p>
                <h3 className="text-lg font-semibold text-white mb-2">Personal Information:</h3>
                <ul className="text-neutral-300 space-y-1 ml-6 mb-4">
                  <li>• Name, email address, phone number</li>
                  <li>• Business information (company name, role, industry)</li>
                  <li>• Billing and shipping addresses</li>
                  <li>• Payment information (processed securely through third parties)</li>
                </ul>
                <h3 className="text-lg font-semibold text-white mb-2">Business Information:</h3>
                <ul className="text-neutral-300 space-y-1 ml-6">
                  <li>• Project requirements and specifications</li>
                  <li>• Current supplier relationships (for consulting)</li>
                  <li>• Inventory and procurement needs</li>
                  <li>• Trade asset information (for barter services)</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
                <p className="text-neutral-300 leading-relaxed mb-4">
                  Your information is used solely for legitimate business purposes:
                </p>
                <ul className="text-neutral-300 space-y-2 ml-6">
                  <li>• Providing procurement and consulting services</li>
                  <li>• Processing orders and coordinating deliveries</li>
                  <li>• Communicating about your projects and services</li>
                  <li>• Invoicing and payment processing</li>
                  <li>• Improving our services based on your feedback</li>
                  <li>• Complying with legal and tax requirements</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">3. Information Sharing</h2>
                <p className="text-neutral-300 leading-relaxed mb-4">
                  We share information only when necessary for service delivery:
                </p>
                <h3 className="text-lg font-semibold text-white mb-2">With Suppliers and Partners:</h3>
                <p className="text-neutral-300 leading-relaxed mb-4">
                  Shipping addresses and product specifications are shared with verified suppliers to fulfill your orders. 
                  We require suppliers to maintain confidentiality of your information.
                </p>
                <h3 className="text-lg font-semibold text-white mb-2">With Service Providers:</h3>
                <p className="text-neutral-300 leading-relaxed mb-4">
                  Payment processors, shipping companies, and other essential service providers receive only the 
                  minimum information needed to complete transactions.
                </p>
                <h3 className="text-lg font-semibold text-white mb-2">Legal Requirements:</h3>
                <p className="text-neutral-300 leading-relaxed">
                  We may disclose information when required by law, court order, or to protect our rights and safety.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">4. Data Security</h2>
                <p className="text-neutral-300 leading-relaxed">
                  We implement industry-standard security measures to protect your information, including encrypted 
                  data transmission, secure servers, and limited access protocols. However, no method of transmission 
                  over the internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">5. Data Retention</h2>
                <p className="text-neutral-300 leading-relaxed">
                  We retain your information for as long as necessary to provide services and comply with legal 
                  obligations. Business records are typically maintained for 7 years for tax and legal purposes. 
                  Contact information may be retained longer for ongoing client relationships.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">6. Your Rights</h2>
                <p className="text-neutral-300 leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="text-neutral-300 space-y-2 ml-6">
                  <li>• Request access to your personal information</li>
                  <li>• Request correction of inaccurate information</li>
                  <li>• Request deletion of your information (subject to legal requirements)</li>
                  <li>• Opt out of non-essential communications</li>
                  <li>• Request a copy of your data in a portable format</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">7. Cookies and Website Analytics</h2>
                <p className="text-neutral-300 leading-relaxed">
                  Our website uses essential cookies for functionality and may use analytics tools to improve user 
                  experience. You can control cookie settings through your browser preferences. We do not use 
                  tracking cookies for advertising purposes.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">8. Third-Party Links</h2>
                <p className="text-neutral-300 leading-relaxed">
                  Our website may contain links to supplier websites or other third parties. We are not responsible 
                  for the privacy practices of these external sites. Please review their privacy policies before 
                  providing any personal information.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">9. Children&apos;s Privacy</h2>
                <p className="text-neutral-300 leading-relaxed">
                  Our services are not directed to individuals under 18 years of age. We do not knowingly collect 
                  personal information from children under 18. If we learn we have collected such information, 
                  we will delete it promptly.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">10. Changes to This Policy</h2>
                <p className="text-neutral-300 leading-relaxed">
                  We may update this Privacy Policy periodically to reflect changes in our practices or legal 
                  requirements. We will notify existing clients of material changes via email or through our website.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">11. Contact Us</h2>
                <p className="text-neutral-300 leading-relaxed mb-4">
                  For privacy-related questions, requests, or concerns, please contact us:
                </p>
                <div className="text-neutral-300">
                  <p>Linda Schmidt Trades LLC</p>
                  <p>Privacy Officer</p>
                  <p>Email: hello@lindaschmidt-trades.com</p>
                  <p>Phone: (475) 755-0400</p>
                  <p>Response time: Within 5 business days</p>
                </div>
              </div>

              <div className="border-t border-brand-primary/20 pt-6">
                <p className="text-sm text-neutral-400">
                  This Privacy Policy was last updated on January 1, 2024. We are committed to protecting your 
                  privacy and will continue to improve our practices as technology and regulations evolve.
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
