"use client";
import { useState, useEffect } from "react";
import { Play, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button } from "../../components/ui/button";

const headlines = [
  {
    title: "Discover Hidden Paradises",
    description:
      "Embark on journeys to the world's most breathtaking destinations",
  },
  {
    title: "Adventure Awaits You",
    description:
      "Experience thrilling expeditions crafted for the bold explorer",
  },
  {
    title: "Luxury Redefined",
    description:
      "Indulge in premium travel experiences that exceed expectations",
  },
  {
    title: "Create Lasting Memories",
    description: "Journey through moments that will stay with you forever",
  },
];

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % headlines.length);
        setIsVisible(true);
      }, 500);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Video Background */}
      <div className="absolute inset-0 h-full">
        <video
          src="https://res.cloudinary.com/quick-prime-tech/video/upload/q_auto/f_auto:video/12597611_3838_2160_30fps_m7atby?_s=vp-1.11.1"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-screen object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-linear-to-r from-black/80 via-transparent to-black/10" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-4 md:px-6 lg:px-8 max-w-7xl mx-auto pt-20">
        {/* Animated Headlines */}
        <div className="max-w-3xl">
          <div
            className={`transition-all duration-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight text-balance mb-6">
              {headlines[currentIndex].title.split(" ").map((word, i) => (
                <span key={i}>
                  {i === 1 ? (
                    <span className="text-primary">{word}</span>
                  ) : (
                    word
                  )}{" "}
                </span>
              ))}
            </h1>
            <p className="text-lg sm:text-xl text-white/70 max-w-xl leading-relaxed mb-8">
              {headlines[currentIndex].description}
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size={"xl"} asChild>
              <Link href="/tours">
                Explore Tours
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size={"xl"} variant={"secondary"} className="group">
              <Play className="group-hover:scale-110 transition-transform" />
              Watch Our Story
            </Button>
          </div>
        </div>
      </div>
      {/* Headline Indicators */}
      <div className="absolute left-1/2 bottom-4 -translate-x-1/2 flex gap-2">
        {headlines.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setIsVisible(false);
              setTimeout(() => {
                setCurrentIndex(i);
                setIsVisible(true);
              }, 300);
            }}
            className={`size-4 rounded-full transition-all ${
              i === currentIndex
                ? "bg-primary"
                : "bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
