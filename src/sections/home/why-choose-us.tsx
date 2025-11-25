import {
  Award,
  Clock,
  Heart,
  Headphones,
  Shield,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Award-Winning Service",
    description:
      "Recognized as the leading luxury tour operator with 15+ industry awards for excellence in travel experiences.",
  },
  {
    icon: Headphones,
    title: "24/7 Concierge Support",
    description:
      "Our dedicated travel concierge team is available around the clock, ensuring seamless support wherever you are.",
  },
  {
    icon: Shield,
    title: "Best Price Guarantee",
    description:
      "We offer unmatched value with our price match promise. Find a lower price? We'll match it and add 10% off.",
  },
  {
    icon: Sparkles,
    title: "Handcrafted Itineraries",
    description:
      "Each journey is meticulously designed by our travel experts to create authentic, unforgettable experiences.",
  },
  {
    icon: Heart,
    title: "Small Group Experiences",
    description:
      "Intimate group sizes ensure personalized attention and meaningful connections with fellow travelers.",
  },
  {
    icon: Clock,
    title: "Flexible Booking",
    description:
      "Plans change, we understand. Enjoy free cancellation up to 30 days before departure on most tours.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary text-sm uppercase tracking-widest mb-4">
            Why Wanderlux
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-balance max-w-3xl mx-auto">
            The <span className="text-primary">Wanderlux</span> Difference
          </h2>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-lg">
            We don't just plan trips—we craft transformative journeys that
            create lasting memories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 bg-card border border-border hover:border-primary/50 transition-all"
            >
              <div className="w-14 h-14 flex items-center justify-center bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
