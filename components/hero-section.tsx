"use client";
import { useState, useEffect } from "react";
import { Play, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

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
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="/luxury-travel-destination-aerial-view.jpg"
        >
          <source
            src="https://videos.pexels.com/video-files/3015488/3015488-hd_1920_1080_24fps.mp4"
            type="video/mp4"
          />
        </video>
        {/* <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" /> */}
        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-transparent to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-20">
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

        {/* Headline Indicators */}
        <div className="absolute bottom-12 left-4 sm:left-8 lg:left-[calc((100vw-80rem)/2+2rem)] flex gap-2">
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
              className={`w-12 h-1 transition-all ${
                i === currentIndex
                  ? "bg-primary"
                  : "bg-foreground/30 hover:bg-foreground/50"
              }`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 right-4 sm:right-8 lg:right-[calc((100vw-80rem)/2+2rem)] flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-widest text-muted-foreground rotate-90 origin-center mb-8">
            Scroll
          </span>
          <div className="w-px h-16 bg-linear-to-b from-primary to-transparent" />
        </div>
      </div>
    </section>
  );
}
