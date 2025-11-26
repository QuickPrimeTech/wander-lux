"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/tours", label: "Tours" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY >= 24);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <nav
      className={cn(
        "fixed top-6 left-0 right-0 z-50 border-t bg-black/10 py-5 backdrop-blur-md border-b border-border/50 transition-all duration-300",
        isSticky && "top-0 bg-background/80"
      )}
    >
      <div className="container max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Button variant={"link"} asChild className="text-xl">
            <Link href="/">
              <div className="size-8 rounded-full bg-primary" />
              WANDERLUX
            </Link>
          </Button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                title={`Visit ${link.label} page`}
                className={cn(
                  "text-sm uppercase tracking-widest text-background/90 transition-colors font-semibold",
                  isSticky && "text-foreground/80",
                  isSticky && "hover:text-primary"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild>
              <Link href="/contact">Book Now</Link>
            </Button>
          </div>

          {/* Mobile Navigation Sheet */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button
                  className={cn(
                    "text-white transition-colors",
                    isSticky && "text-foreground"
                  )}
                  aria-label="Toggle menu"
                >
                  <Menu size={24} />
                </button>
              </SheetTrigger>
              <SheetContent className="w-4/5 md:w-3/4 px-8">
                <SheetHeader className="text-left mb-8">
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={
                      isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }
                    }
                    transition={{ duration: 0.3 }}
                  >
                    <SheetTitle className="flex items-center gap-3 text-2xl">
                      <div className="size-10 rounded-full bg-primary" />
                      WANDERLUX
                    </SheetTitle>
                  </motion.div>
                </SheetHeader>

                <motion.nav
                  className="flex flex-col gap-6"
                  variants={containerVariants}
                  initial="hidden"
                  animate={isOpen ? "visible" : "hidden"}
                >
                  {navLinks.map((link) => (
                    <motion.div
                      key={link.href}
                      variants={itemVariants}
                      transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 12,
                      }}
                    >
                      <SheetClose asChild>
                        <Link
                          href={link.href}
                          className="text-base uppercase tracking-widest text-foreground hover:text-primary transition-colors font-semibold py-2 border-b border-border/50 hover:border-primary/50 block"
                        >
                          {link.label}
                        </Link>
                      </SheetClose>
                    </motion.div>
                  ))}

                  <motion.div className="mt-4" variants={itemVariants}>
                    <SheetClose asChild>
                      <Button asChild className="w-full" size={"lg"}>
                        <Link href="/contact">Book Now</Link>
                      </Button>
                    </SheetClose>
                  </motion.div>
                </motion.nav>

                {/* Optional: Add additional info */}
                <motion.div
                  className="bg-card py-4 absolute bottom-8 left-6 right-6"
                  initial={{ opacity: 0, y: 10 }}
                  animate={
                    isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                  }
                  transition={{ delay: 0.3, duration: 0.3 }}
                >
                  <div className="text-sm text-muted-foreground space-y-2">
                    <p className="text-xs uppercase tracking-wider font-semibold text-foreground">
                      Contact Us
                    </p>
                    <p>support@wanderlux.com</p>
                    <p>+254712345678</p>
                  </div>
                </motion.div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
