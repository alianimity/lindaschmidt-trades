import { Hero } from "@/components/sections/hero";
import { ServicesOverview } from "@/components/sections/services-overview";
import { ProcessSection } from "@/components/sections/process-section";
import { ReviewsSection } from "@/components/sections/reviews-section";
import { FAQSection } from "@/components/sections/faq-section";
import { CTASection } from "@/components/sections/cta-section";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <ServicesOverview />
      <ProcessSection />
      <ReviewsSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}