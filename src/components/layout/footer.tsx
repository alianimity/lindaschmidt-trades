import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-neutral-900 border-t border-brand-primary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Image
                src="/logos/icon-primary.svg"
                alt="Linda Schmidt Trades"
                width={32}
                height={32}
                className="h-8 w-8"
              />
              <span className="text-xl font-bold text-white">
                Linda Schmidt Trades
              </span>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Professional trading and procurement services for businesses and individuals. 
              From home office setups to enterprise-scale supply solutions.
            </p>
            <p className="text-xs text-neutral-500">
              Trading Tools for Every Trade – From Home to Enterprise.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-white font-medium">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/bulk-sourcing"
                  className="text-neutral-400 hover:text-white text-sm transition-colors"
                >
                  Bulk Sourcing & Wholesale
                </Link>
              </li>
              <li>
                <Link
                  href="/services/custom-procurement"
                  className="text-neutral-400 hover:text-white text-sm transition-colors"
                >
                  Custom Procurement
                </Link>
              </li>
              <li>
                <Link
                  href="/services/trade-barter"
                  className="text-neutral-400 hover:text-white text-sm transition-colors"
                >
                  Trade & Barter
                </Link>
              </li>
              <li>
                <Link
                  href="/services/supply-consulting"
                  className="text-neutral-400 hover:text-white text-sm transition-colors"
                >
                  Supply Consulting
                </Link>
              </li>
              <li>
                <Link
                  href="/services/logistics"
                  className="text-neutral-400 hover:text-white text-sm transition-colors"
                >
                  Logistics & Fulfillment
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-white font-medium">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-neutral-400 hover:text-white text-sm transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-neutral-400 hover:text-white text-sm transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-neutral-400 hover:text-white text-sm transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-neutral-400 hover:text-white text-sm transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-white font-medium">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-brand-primary" />
                <span className="text-neutral-400 text-sm">
                  info@lindaschmidttrades.com
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-brand-primary" />
                <span className="text-neutral-400 text-sm">
                  (860) 555-0123
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-brand-primary" />
                <span className="text-neutral-400 text-sm">
                  Connecticut, USA
                </span>
              </div>
            </div>
            <p className="text-xs text-neutral-500">
              Available across all 50 states
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-brand-primary/20">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <p className="text-neutral-500 text-xs">
              © 2024 Linda Schmidt Trades LLC. All rights reserved.
            </p>
            <p className="text-neutral-500 text-xs mt-2 md:mt-0">
              Connecticut LLC • Licensed and Insured
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
