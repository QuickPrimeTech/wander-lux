import type React from "react";
import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const _playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});
const _inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Wanderlux Tours | Luxury Travel Experiences",
  description:
    "Discover extraordinary destinations with our award-winning guided tours. Rated 5 stars on Google and TripAdvisor.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${_playfair.variable} ${_inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
