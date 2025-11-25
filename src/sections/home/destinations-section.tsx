import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const destinations = [
  {
    name: "Tanzania",
    tours: 12,
    image:
      "https://res.cloudinary.com/quick-prime-tech/image/upload/v1764082226/imgi_142_00-2-Top_10_Places_to_Visit_Along_the_Tanzania_Coast-BW-header1200px_luwfso.jpg",
  },
  {
    name: "Kenya",
    tours: 18,
    image:
      "https://res.cloudinary.com/quick-prime-tech/image/upload/v1764082390/imgi_161_Tsavo--National-Park-Kenya-Africa-Kenya-At-Sunset_1_galtgd.webp",
  },
  {
    name: "Uganda",
    tours: 9,
    image:
      "https://res.cloudinary.com/quick-prime-tech/image/upload/v1764082459/imgi_163_uganda-best-places-to-visit-2560x1100_zyc1hs.jpg",
  },
  {
    name: "Ethopia",
    tours: 16,
    image:
      "https://res.cloudinary.com/quick-prime-tech/image/upload/v1764082515/imgi_188_Tigray-Gheralta-View_eejppc.jpg",
  },
];

export function DestinationsSection() {
  return (
    <section className="py-24 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-primary text-sm uppercase tracking-widest mb-4">
              Destinations
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-balance">
              Explore by <span className="text-primary">Countries</span>
            </h2>
          </div>
          <Button variant={"link"} asChild>
            <Link href="/destinations">
              <span className="text-sm uppercase tracking-widest">
                All Destinations
              </span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {destinations.map((destination, index) => (
              <CarouselItem
                key={destination.name}
                className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3"
              >
                <Link
                  key={index}
                  href={`/destinations/${destination.name
                    .toLowerCase()
                    .replace(" ", "-")}`}
                  className="block group relative h-75 bg-black overflow-hidden"
                >
                  <Image
                    fill
                    src={destination.image || "/placeholder.svg"}
                    alt={destination.name}
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                      {destination.name}
                    </h3>
                    <p className="text-sm text-white/80">
                      {destination.tours} Tours
                    </p>
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious title={`See more countries`} />
          <CarouselNext title="See more countries" />
        </Carousel>
        <div className="flex justify-center gap-3">
          <Button size={"lg"}>
            <Link href={"/countries"}>Explore All Countries</Link>
            <ArrowRight />
          </Button>
          <Button size={"lg"} variant={"secondary"}>
            <Link href={"/contact"}>Book Now</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
