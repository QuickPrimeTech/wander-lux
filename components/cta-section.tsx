import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="/luxury-travel-beach-sunset-golden-hour.jpg" alt="Luxury travel destination" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/80" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <p className="text-primary text-sm uppercase tracking-widest mb-4">Start Your Journey</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
          Ready to Create <span className="text-primary">Unforgettable</span> Memories?
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
          Let our expert travel designers craft your perfect journey. From hidden gems to iconic landmarks, we'll create
          an experience tailored exclusively for you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground text-sm uppercase tracking-widest font-semibold hover:bg-primary/90 transition-all group"
          >
            Plan Your Trip
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/tours"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-foreground/30 text-foreground text-sm uppercase tracking-widest font-semibold hover:border-primary hover:text-primary transition-all"
          >
            Browse Tours
          </Link>
        </div>
      </div>
    </section>
  )
}
