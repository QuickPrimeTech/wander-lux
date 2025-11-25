"use client";
import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function NotFoundPage() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-12">
      <div className="bg-card max-w-2xl w-full text-center">
        {/* 404 Number */}
        <h1 className="text-7xl font-bold text-primary leading-none mb-12">
          404
        </h1>

        {/* Main Message */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
          Page Under Construction
        </h2>

        <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-md mx-auto">
          Our developer is currently working on this page. It will be available
          soon!
        </p>

        {/* Demo Notice */}
        <div className="bg-muted/50 border border-border rounded-lg p-6 mb-8 max-w-lg mx-auto">
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">Note:</span> This
            website was created for{" "}
            <span className="text-primary font-medium">
              demonstration purposes
            </span>{" "}
            only. Some features and pages are still in development.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button asChild size="lg">
            <Link href="/">
              <Home className="w-4 h-4 mr-2" />
              Go to Homepage
            </Link>
          </Button>

          <Button variant="outline" size="lg" onClick={() => router.back()}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </Button>
        </div>

        {/* Footer Message */}
        <p className="text-sm text-muted-foreground mt-12">
          Thank you for your patience while we build something amazing! ✨
        </p>
      </div>
    </div>
  );
}
