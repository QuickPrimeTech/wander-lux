import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, MapPin, Star, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const popularTours = [
  {
    id: 1,
    title: "Maasai Mara Great Migration Safari",
    location: "Kenya",
    duration: "5 Days",
    groupSize: "8 Max",
    price: 60000,
    rating: 4.9,
    reviews: 312,
    image:
      "https://res.cloudinary.com/quick-prime-tech/image/upload/v1764077568/imgi_168_Masai_Mara_at_Sunset_klksw2.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "Zanzibar Beach & Stone Town Escape",
    location: "Tanzania",
    duration: "6 Days",
    groupSize: "12 Max",
    price: 90000,
    rating: 4.8,
    reviews: 221,
    image:
      "https://res.cloudinary.com/quick-prime-tech/image/upload/v1764077806/imgi_238_c2c08813_rcrfqz.jpg",
  },
  {
    id: 3,
    title: "Gorilla Trekking in Bwindi",
    location: "Uganda",
    duration: "4 Days",
    groupSize: "6 Max",
    price: 60000,
    rating: 5.0,
    reviews: 188,
    image:
      "https://res.cloudinary.com/quick-prime-tech/image/upload/v1764078023/imgi_204_Gorilla-Tracking-Bwindi-6_mykn5s.jpg",
  },
  {
    id: 4,
    title: "Diani Beach Luxury Getaway",
    location: "Kenya",
    duration: "5 Days",
    groupSize: "10 Max",
    price: 70000,
    rating: 4.9,
    reviews: 406,
    image:
      "https://res.cloudinary.com/quick-prime-tech/image/upload/v1764078127/imgi_157_Screen-Shot-2020-08-26-at-6.41.04-PM_nisuzi.png",
  },
  {
    id: 5,
    title: "Serengeti & Ngorongoro Big 5 Safari",
    location: "Tanzania",
    duration: "7 Days",
    groupSize: "8 Max",
    price: 40000,
    rating: 4.9,
    reviews: 276,
    image:
      "https://res.cloudinary.com/quick-prime-tech/image/upload/v1764078186/imgi_176_33118315-c2b3-48df-9693-65e756a6f3c1_kaspwr.jpg",
  },
  {
    id: 6,
    title: "Pemba Island Tropical Escape",
    location: "Tanzania",
    duration: "6 Days",
    groupSize: "10 Max",
    price: 80000,
    rating: 4.8,
    reviews: 154,
    image:
      "https://res.cloudinary.com/quick-prime-tech/image/upload/v1764078261/imgi_134_Aerial-view-of-The-Mantara-Resort-on-Pemba-Island-Tanzania_anakuh.jpg",
  },
];

export function PopularTours() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="container mx-auto space-y-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-primary text-sm uppercase tracking-widest mb-4">
              Most Popular
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-balance">
              Tours <span className="text-primary">Travelers</span> Love Most
            </h2>
          </div>
          <Button asChild variant={"link"}>
            <Link href="/tours">
              <span className="text-sm uppercase tracking-widest">
                Explore All
              </span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularTours.map((tour) => (
            <Link
              key={tour.id}
              href={`/tours/${tour.id}`}
              className="group bg-background border border-border hover:border-primary/50 transition-all overflow-hidden"
            >
              <div className="relative bg-black h-60 overflow-hidden">
                <Image
                  fill
                  src={tour.image || "/placeholder.svg"}
                  alt={tour.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {tour.featured && (
                  <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs uppercase tracking-wider px-3 py-1">
                    Bestseller
                  </span>
                )}
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-primary text-primary" />
                    <span className="text-sm font-medium text-foreground">
                      {tour.rating}
                    </span>
                  </div>
                  <span className="text-muted-foreground text-sm">
                    ({tour.reviews} reviews)
                  </span>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {tour.title}
                </h3>

                <div className="flex items-center gap-4 text-muted-foreground text-sm mb-4">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {tour.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {tour.duration}
                  </span>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <p className="text-primary font-semibold">
                    From Ksh {tour.price.toLocaleString()}
                  </p>
                  <span className="flex items-center gap-1 text-muted-foreground text-sm">
                    <Users className="w-4 h-4" />
                    {tour.groupSize}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
