import type { Metadata } from "next"
import { ContactHero } from "@/components/sections/contact-hero"
import { ContactInfo } from "@/components/sections/contact-info"
import { ContactForm } from "@/components/sections/contact-form"
import { ServiceArea } from "@/components/sections/service-area"

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Linda Schmidt Trades LLC for professional trading and procurement services. Free consultations and custom quotes available.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <ServiceArea />
    </div>
  )
}
