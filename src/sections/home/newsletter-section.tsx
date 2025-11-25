"use client";

import type React from "react";

import { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background border-y border-border">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-primary text-sm uppercase tracking-widest mb-4">
          Stay Inspired
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
          Get <span className="text-primary">Exclusive</span> Travel Insights
        </h2>
        <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
          Subscribe to receive curated travel stories, early access to new
          tours, and exclusive offers delivered straight to your inbox.
        </p>

        {isSubmitted ? (
          <div className="flex items-center justify-center gap-3 text-primary">
            <CheckCircle className="w-6 h-6" />
            <span className="text-lg font-medium">
              Thank you for subscribing!
            </span>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-6 bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
            <Button type="submit" size={"xl"}>
              <span>Subscribe</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>
        )}

        <p className="text-sm text-muted-foreground mt-6">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
