import { HeroSection } from "@/components/hero-section";
import { FeaturedTours } from "@/components/featured-tours";
import { StatsSection } from "@/components/stats-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";

export default function HomePage() {
  return (
    <>
      <Navigation />
      <HeroSection />
      <FeaturedTours />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </>
  );
}
