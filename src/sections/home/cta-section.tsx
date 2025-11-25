import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "../../components/ui/button";
import Image from "next/image";

export function CTASection() {
  return (
    <section className="relative py-16 px-4 md:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          fill
          src="https://res.cloudinary.com/quick-prime-tech/image/upload/v1763732351/imgi_145_The_Lamu_Cultural_Festival_003_t4ne3a.jpg"
          alt="Luxury travel destination"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-radial from-black/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <p className="text-primary text-sm uppercase tracking-widest mb-4">
          Start Your Journey
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
          Ready to Create <span className="text-primary">Unforgettable</span>{" "}
          Memories?
        </h2>
        <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
          Let our expert travel designers craft your perfect journey. From
          hidden gems to iconic landmarks, we'll create an experience tailored
          exclusively for you.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground text-sm uppercase tracking-widest font-semibold hover:bg-primary/90 transition-all group"
          >
            Plan Your Trip
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Button
            variant={"ghost"}
            asChild
            size={"xl"}
            className="text-white border"
          >
            <Link href="/tours">Browse Tours</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
