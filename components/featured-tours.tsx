import { ArrowRight, Clock, MapPin, Users } from "lucide-react"
import Link from "next/link"

const tours = [
  {
    id: 1,
    title: "Santorini Sunset",
    location: "Greece",
    duration: "7 Days",
    groupSize: "12 Max",
    price: 2499,
    image: "/santorini-greece-sunset-beautiful-white-buildings.jpg",
  },
  {
    id: 2,
    title: "Safari Adventure",
    location: "Tanzania",
    duration: "10 Days",
    groupSize: "8 Max",
    price: 4299,
    image: "/african-safari-sunset-elephants.jpg",
  },
  {
    id: 3,
    title: "Northern Lights",
    location: "Iceland",
    duration: "5 Days",
    groupSize: "10 Max",
    price: 1899,
    image: "/iceland-northern-lights-aurora-borealis.jpg",
  },
  {
    id: 4,
    title: "Machu Picchu Trek",
    location: "Peru",
    duration: "8 Days",
    groupSize: "14 Max",
    price: 2799,
    image: "/machu-picchu-ancient-ruins.png",
  },
]

export function FeaturedTours() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="text-primary text-sm uppercase tracking-widest mb-4">Featured Experiences</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-balance">
              Curated Tours for the <span className="text-primary">Discerning</span> Traveler
            </h2>
          </div>
          <Link
            href="/tours"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors group"
          >
            <span className="text-sm uppercase tracking-widest">View All Tours</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tours.map((tour, index) => (
            <Link
              key={tour.id}
              href={`/tours/${tour.id}`}
              className={`group relative overflow-hidden bg-card border border-border hover:border-primary/50 transition-all ${
                index === 0 ? "md:row-span-2" : ""
              }`}
            >
              <div className={`relative overflow-hidden ${index === 0 ? "h-[400px] md:h-full" : "h-[300px]"}`}>
                <img
                  src={tour.image || "/placeholder.svg"}
                  alt={tour.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-4 text-muted-foreground text-sm mb-3">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {tour.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {tour.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {tour.groupSize}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {tour.title}
                </h3>
                <p className="text-primary font-semibold">From ${tour.price.toLocaleString()}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
