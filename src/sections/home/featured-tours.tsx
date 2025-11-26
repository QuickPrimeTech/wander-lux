"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TourCard } from "@/sections/home/tour-card";
import { useMediaQuery } from "@/hooks/use-media-query";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const tours = [
  {
    id: 1,
    title: "Diani Beach Mombasa",
    location: "Mombasa, Kenya",
    duration: "7 Days",
    groupSize: "6 Max",
    price: 84000,
    image:
      "https://res.cloudinary.com/quick-prime-tech/image/upload/v1763732254/imgi_203_pexels-asadphoto-457882_p1s80h.jpg",
  },
  {
    id: 2,
    title: "Lake Naivasha",
    location: "Naivasha, Kenya",
    duration: "10 Days",
    groupSize: "8 Max",
    price: 67000,
    image:
      "https://res.cloudinary.com/quick-prime-tech/image/upload/v1763730716/imgi_141_flamingos-lakes-great-rift-valley-1_x7pu4c.jpg",
  },
  {
    id: 3,
    title: "Lamu Island",
    location: "Lamu, Kenya",
    duration: "5 Days",
    groupSize: "5 Max",
    price: 78000,
    image:
      "https://res.cloudinary.com/quick-prime-tech/image/upload/v1763730654/imgi_127_lamu-island-featured_lbbcgs.webp",
  },
  {
    id: 4,
    title: "Maasai Mara",
    location: "Narok, Kenya",
    duration: "8 Days",
    groupSize: "14 Max",
    price: 60000,
    image:
      "https://res.cloudinary.com/quick-prime-tech/image/upload/v1763730271/imgi_226_ann_top_Maasai_Mara_National_Reserve_q9nWod_b7cdln.jpg",
  },
  {
    id: 5,
    title: "Nairobi National Park",
    location: "Peru",
    duration: "8 Days",
    groupSize: "7 Max",
    price: 58990,
    image:
      "https://res.cloudinary.com/quick-prime-tech/image/upload/v1763730597/imgi_206_nairobi-national-park__1920x864_ahm663.jpg",
  },
];

export function FeaturedTours() {
  const { isMobile, isDesktop } = useMediaQuery();
  return (
    <section className="py-24 px-4 md:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="text-primary text-sm uppercase tracking-widest mb-4">
              Featured Experiences
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-balance">
              Discover the <span className="text-primary">Best Tours</span> in
              East Africa
            </h2>
          </div>
          <Button variant={"link"} asChild>
            <Link href="/tours">
              <span className="text-sm uppercase tracking-widest">
                View All Tours
              </span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
        {isMobile && (
          <Carousel>
            <CarouselContent>
              {tours.map((tour, index) => (
                <CarouselItem className="" key={tour.title}>
                  <TourCard tour={tour} index={index} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        )}
        {isDesktop && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tours.map((tour, index) => (
              <TourCard tour={tour} index={index} key={tour.title} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
