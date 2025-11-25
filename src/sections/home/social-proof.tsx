import { Star, StarHalf } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { SiTripadvisor } from "react-icons/si";

export function SocialProof() {
  return (
    <div className="flex flex-col md:flex-row justify-center gap-3 sm:gap-4 mb-8 px-4">
      {/* Google Reviews */}
      <div className="flex items-center gap-2 sm:gap-3 bg-card/80 backdrop-blur-sm px-3 sm:px-4 py-2.5 sm:py-3 border border-border/50 whitespace-nowrap">
        <FcGoogle size={20} className="sm:w-6 sm:h-6 shrink-0" />
        <span className="text-foreground font-semibold text-sm sm:text-base">
          4.7
        </span>
        <div className="flex gap-0.5">
          {[...Array(4)].map((_, i) => (
            <Star
              key={i}
              className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-primary text-primary"
            />
          ))}
          <StarHalf className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-primary text-primary" />
        </div>
        <span className="text-muted-foreground text-xs sm:text-sm">
          247 reviews
        </span>
      </div>

      {/* TripAdvisor Reviews */}
      <div className="flex items-center gap-2 sm:gap-3 bg-card/80 backdrop-blur-sm px-3 sm:px-4 py-2.5 sm:py-3 border border-border/50 whitespace-nowrap">
        <SiTripadvisor className="text-teal-700 shrink-0" size={20} />
        <span className="text-foreground font-semibold text-sm sm:text-base">
          4.5
        </span>
        <div className="flex gap-0.5">
          {[...Array(4)].map((_, i) => (
            <Star
              key={i}
              className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-primary text-primary"
            />
          ))}
          <StarHalf className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-primary text-primary" />
        </div>
        <span className="text-muted-foreground text-xs sm:text-sm">
          49 reviews
        </span>
      </div>
    </div>
  );
}
