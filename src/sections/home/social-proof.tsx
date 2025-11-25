import { Star } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { SiTripadvisor } from "react-icons/si";

export function SocialProof() {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-8">
      <div className="flex items-center gap-3 bg-card/80 backdrop-blur-sm px-4 py-3 border border-border/50">
        <div className="flex items-center gap-1">
          <FcGoogle size={24} />
          <span className="text-foreground font-semibold">4.7</span>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-primary text-primary" />
            ))}
          </div>
        </div>
        <span className="text-muted-foreground text-sm">247 reviews</span>
      </div>

      <div className="flex items-center gap-3 bg-card/80 backdrop-blur-sm px-4 py-3 border border-border/50">
        <div className="flex items-center gap-1">
          <SiTripadvisor className="text-teal-700" size={24} />
          <span className="text-foreground font-semibold">4.5</span>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-primary text-primary" />
            ))}
          </div>
        </div>
        <span className="text-muted-foreground text-sm">49 reviews</span>
      </div>
    </div>
  );
}
