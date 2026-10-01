"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
} from "lucide-react";
import { useState, useEffect } from "react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Features", href: "/#features" },
    { label: "How It Works", href: "/#how-it-works" },
    { label: "Testimonials", href: "/#testimonials" },
    { label: "FAQ", href: "/#faq" },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center sm:px-4 pt-4"
    >
      <nav
        className={`flex w-full max-w-[calc(100%-2rem)] sm:max-w-5xl items-center justify-between rounded-full border border-white/8 px-4 sm:py-2.5 py-1.5 transition-all duration-500 ${isScrolled
          ? "bg-black/70 shadow-xl shadow-black/30 backdrop-blur-xl backdrop-saturate-[1.8] border-white/1"
          : "bg-white/4 backdrop-blur-md backdrop-saturate-150"
          }`}
      >
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center" id="navbar-logo">
          <Image
            src="/logo.svg"
            alt="HabitRoast Logo"
            width={100}
            height={100}
            className="h-fit w-32"
          />
        </Link>

        {/* Desktop Nav — centered */}
        <div className="hidden items-center gap-0.5 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              id={`nav-${link.label.toLowerCase().replace(/\s/g, "-")}`}
              className="rounded-full px-4 py-1.5 text-sm font-medium text-white/50 transition-colors duration-200 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-2 md:flex">
          <Link href="/auth/signup">
            <Button
              size="sm"
              className="rounded-full border border-white/10 bg-white/5 px-5 text-sm font-medium text-white/80 backdrop-blur-sm transition-all duration-300 hover:border-red-500/30 hover:bg-red-500/10 hover:text-white hover:shadow-lg hover:shadow-red-500/10"
              id="nav-get-started-btn"
            >
              Get Started
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="rounded-full p-2 text-white/70 transition-colors hover:bg-white/10 hover:text-white md:hidden"
          id="mobile-menu-toggle"
          aria-label="Toggle menu"
        >
          {isMobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="absolute top-full left-4 right-4 mt-2 overflow-hidden rounded-2xl border border-white/8 bg-black/80 backdrop-blur-xl md:hidden"
        >
          <div className="flex flex-col gap-1 px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-white/70 transition-colors hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-2 border-t border-white/8 pt-3">
              <Link href="/auth/signup">
                <Button className="w-full rounded-full border border-white/10 bg-white/5 text-white/80 hover:border-red-500/30 hover:bg-red-500/10 hover:text-white">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
