"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    location: "New York, USA",
    image: "/professional-woman-smiling-portrait.png",
    rating: 5,
    text: "An absolutely transformative experience. The attention to detail and personalized service made our honeymoon unforgettable. Every moment was curated to perfection.",
    tour: "Santorini Sunset",
  },
  {
    id: 2,
    name: "James & Emma Wilson",
    location: "London, UK",
    image: "/couple-portrait-smiling-travel.jpg",
    rating: 5,
    text: "We've traveled with many tour companies, but Wanderlux stands apart. The guides were knowledgeable, accommodations were luxurious, and the itinerary was impeccable.",
    tour: "Safari Adventure",
  },
  {
    id: 3,
    name: "Michael Chen",
    location: "Singapore",
    image: "/asian-man-professional-portrait.png",
    rating: 5,
    text: "The Northern Lights tour exceeded all expectations. From the exclusive viewing locations to the gourmet dining, every aspect showed their commitment to excellence.",
    tour: "Northern Lights",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prev = () => setCurrentIndex((i) => (i - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrentIndex((i) => (i + 1) % testimonials.length)

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary text-sm uppercase tracking-widest mb-4">Testimonials</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-balance">
            Stories from Our <span className="text-primary">Travelers</span>
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-card border border-border p-8 sm:p-12">
            <Quote className="w-12 h-12 text-primary mb-6" />

            <div className="flex mb-4">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>

            <p className="text-lg sm:text-xl text-foreground leading-relaxed mb-8">
              "{testimonials[currentIndex].text}"
            </p>

            <div className="flex items-center gap-4">
              <img
                src={testimonials[currentIndex].image || "/placeholder.svg"}
                alt={testimonials[currentIndex].name}
                className="w-14 h-14 rounded-full object-cover border-2 border-primary"
              />
              <div>
                <p className="font-semibold text-foreground">{testimonials[currentIndex].name}</p>
                <p className="text-sm text-muted-foreground">{testimonials[currentIndex].location}</p>
                <p className="text-sm text-primary">{testimonials[currentIndex].tour}</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-3 border border-border hover:border-primary hover:text-primary transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="p-3 border border-border hover:border-primary hover:text-primary transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
