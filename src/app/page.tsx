import { HeroSection } from "@/sections/home/hero-section";
import { FeaturedTours } from "@/sections/home/featured-tours";
import { StatsSection } from "@/sections/home/stats-section";
import { TestimonialsSection } from "@/sections/home/testimonials-section";
import { CTASection } from "@/sections/home/cta-section";
import { Footer } from "@/layouts/footer";
import { Navigation } from "@/layouts/navbar";
import { PopularTours } from "@/sections/home/popular-tours";
import { NewsletterSection } from "@/sections/home/newsletter-section";

export default function HomePage() {
  return (
    <>
      <Navigation />
      <HeroSection />
      <FeaturedTours />
      <StatsSection />
      <TestimonialsSection />
      <PopularTours />
      <NewsletterSection />
      <CTASection />
      <Footer />
    </>
  );
}
