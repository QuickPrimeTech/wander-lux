"use client";

import { Quote, Star, User } from "lucide-react";
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Card } from "./ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@ui/dialog";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

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
];

export function TestimonialsSection() {
  const [selectedTestimonial, setSelectedTestimonial] = useState<
    (typeof testimonials)[0] | null
  >(null);

  return (
    <section className="py-24 px-4 md:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary text-sm uppercase tracking-widest mb-4">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Stories from Our <span className="text-primary">Travelers</span>
          </h2>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.id}
                className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3"
              >
                <Card className="bg-card border border-border p-6 h-full flex flex-col">
                  <Quote className="size-6 text-primary" />

                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-primary text-primary"
                      />
                    ))}
                  </div>

                  <div className="grow mb-4">
                    <p className="text-lg text-foreground leading-relaxed line-clamp-3">
                      &quot;{testimonial.text}&quot;
                    </p>
                    <Button
                      variant="link"
                      className="px-0 h-auto text-primary hover:text-primary/80 mt-2"
                      onClick={() => setSelectedTestimonial(testimonial)}
                    >
                      Read more
                    </Button>
                  </div>

                  <div className="flex items-center gap-4 mt-auto">
                    <Avatar className="size-12 rounded-full object-cover border-2 border-primary">
                      <AvatarImage
                        src={selectedTestimonial?.image}
                        alt={selectedTestimonial?.name}
                      />
                      <AvatarFallback>
                        <User />
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-foreground">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.location}
                      </p>
                      <p className="text-sm text-primary">{testimonial.tour}</p>
                    </div>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        {/* Dialog for full testimonial */}
        <Dialog
          open={!!selectedTestimonial}
          onOpenChange={() => setSelectedTestimonial(null)}
        >
          <DialogContent className="md:max-w-[600px]">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-4">
                <Avatar className="size-12 rounded-full object-cover border-2 border-primary">
                  <AvatarImage
                    src={selectedTestimonial?.image}
                    alt={selectedTestimonial?.name}
                  />
                  <AvatarFallback>
                    <User />
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-foreground">
                    {selectedTestimonial?.name}
                  </p>
                  <p className="text-sm text-muted-foreground font-normal">
                    {selectedTestimonial?.location}
                  </p>
                </div>
              </DialogTitle>
              <DialogDescription className="sr-only">
                Full testimonial from {selectedTestimonial?.name}
              </DialogDescription>
            </DialogHeader>

            <div className="mt-4">
              <div className="flex mb-4">
                {[...Array(selectedTestimonial?.rating || 0)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <Quote className="size-6 text-primary/80 mb-2" />

              <p className="text-lg text-foreground leading-relaxed mb-4">
                {selectedTestimonial?.text}
              </p>

              <div className="pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  Tour:{" "}
                  <span className="text-primary font-medium">
                    {selectedTestimonial?.tour}
                  </span>
                </p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
