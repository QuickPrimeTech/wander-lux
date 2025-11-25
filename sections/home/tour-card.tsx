import { Clock, MapPin, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
type TourCardProps = {
  tour: {
    id: number;
    image: string;
    title: string;
    duration: string;
    location: string;
    groupSize: string;
    price: number;
  };
  index: number;
};
export function TourCard({ tour, index }: TourCardProps) {
  return (
    <Link
      href={`/tours/${tour.id}`}
      className={`group relative overflow-hidden bg-primary border border-border hover:border-primary/50 transition-all ${
        index === 0 ? "md:row-span-2" : ""
      }`}
    >
      <div
        className={`relative overflow-hidden ${
          index === 0 ? "md:h-full" : "h-[300px]"
        }`}
      >
        <Image
          src={tour.image || "/placeholder.svg"}
          fill
          alt={tour.title}
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="flex items-center gap-4 text-white/80 text-sm mb-3">
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
        <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
          {tour.title}
        </h3>
        <p className="text-primary font-semibold">
          From Ksh {tour.price.toLocaleString()}
        </p>
      </div>
    </Link>
  );
}
