"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  { name: "Bulk Sourcing", href: "/services/bulk-sourcing" },
  { name: "Custom Procurement", href: "/services/custom-procurement" },
  { name: "Trade & Barter", href: "/services/trade-barter" },
  { name: "Supply Consulting", href: "/services/supply-consulting" },
  { name: "Logistics", href: "/services/logistics" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-neutral-900/90 backdrop-blur-xl border-b border-brand-primary/20' 
        : 'bg-transparent'
    }`}>
      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <Image
              src="/logos/icon-primary.svg"
              alt="Linda Schmidt Trades"
              width={32}
              height={32}
              className="h-8 w-8 transition-transform group-hover:scale-105"
            />
            <span className="font-bold text-lg text-white">
              Linda Schmidt Trades
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link
              href="/"
              className="text-sm font-medium text-neutral-300 hover:text-white transition-colors"
            >
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-1 text-sm font-medium text-neutral-300 hover:text-white transition-colors">
                <span>Services</span>
                <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
              </button>
              
              {/* Dropdown Menu */}
              <div className="absolute top-full left-0 mt-3 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="bg-neutral-900 border border-brand-primary/20 rounded-xl shadow-2xl p-2">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="flex items-center justify-between px-4 py-3 text-sm text-neutral-300 hover:text-white hover:bg-brand-primary/10 rounded-lg transition-all group/item"
                    >
                      <span>{service.name}</span>
                      <ArrowRight className="h-3 w-3 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                    </Link>
                  ))}
                  <div className="border-t border-brand-primary/20 mt-2 pt-2">
                    <Link
                      href="/contact"
                      className="flex items-center justify-center px-4 py-2 bg-brand-primary text-white text-sm font-medium rounded-lg hover:bg-brand-primary/90 transition-colors"
                    >
                      View All Services
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Link
              href="/about"
              className="text-sm font-medium text-neutral-300 hover:text-white transition-colors"
            >
              About
            </Link>
            
            <Link
              href="/contact"
              className="text-sm font-medium text-neutral-300 hover:text-white transition-colors"
            >
              Contact
            </Link>
            
            <Button 
              asChild 
              size="sm" 
              className="bg-brand-primary hover:bg-brand-primary/90 text-white"
            >
              <Link href="/contact">Get Quote</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-neutral-300 hover:text-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-brand-primary/20 bg-neutral-900/95 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-6 space-y-1">
              <Link
                href="/"
                className="block px-3 py-2 text-base font-medium text-neutral-300 hover:text-white hover:bg-brand-primary/10 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              
              <div className="px-3 py-2">
                <div className="text-sm font-medium text-white mb-2">Services</div>
                <div className="pl-4 space-y-1">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-3 py-2 text-sm text-neutral-300 hover:text-white hover:bg-brand-primary/10 rounded-lg transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
              
              <Link
                href="/about"
                className="block px-3 py-2 text-base font-medium text-neutral-300 hover:text-white hover:bg-brand-primary/10 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              
              <Link
                href="/contact"
                className="block px-3 py-2 text-base font-medium text-neutral-300 hover:text-white hover:bg-brand-primary/10 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              
              <div className="px-3 pt-4">
                <Button 
                  asChild 
                  className="w-full bg-brand-primary hover:bg-brand-primary/90 text-white"
                  onClick={() => setIsOpen(false)}
                >
                  <Link href="/contact">Get Quote</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
