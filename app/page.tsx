import { HeroSection } from "@/components/hero-section";
import { FeaturedTours } from "@/components/featured-tours";
import { StatsSection } from "@/components/stats-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/layouts/footer";
import { Navigation } from "@/layouts/navbar";

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
