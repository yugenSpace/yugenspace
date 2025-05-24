"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/Button";
import { APP_CONFIG } from "@/constant/config.constant";
import { PAGE_ROUTES } from "@/constant/route.constant";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 p-4 md:p-6 md:px-20 z-50 w-full transition-all duration-300 ${
        isScrolled ? "md:backdrop-blur-3xl" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 z-10">
          <div className="relative h-10 w-32 md:w-52">
            <Image
              src={APP_CONFIG.APP_LOGO}
              fill
              alt="Yugen Space Logo"
              className="object-cover"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 font-display text-sm font-medium uppercase tracking-widest transition-colors  relative">
          <Link
            href="/"
            className="hover:text-blue-400 leading-tight font-bold"
          >
            Home
          </Link>
          <Link
            href={`#${PAGE_ROUTES.FEATURES.id}`}
            className="hover:text-blue-400 leading-tight font-bold"
          >
            {PAGE_ROUTES.FEATURES.title}
          </Link>
          <Link
            href={`#${PAGE_ROUTES.ABOUT.id}`}
            className="hover:text-blue-400 leading-tight font-bold"
          >
            {PAGE_ROUTES.ABOUT.title}
          </Link>
          <Link
            href={`#${PAGE_ROUTES.CONTACT.id}`}
            className="hover:text-blue-400 leading-tight font-bold"
          >
            {PAGE_ROUTES.CONTACT.title}
          </Link>
        </nav>

        <Button variant="glow" className="hidden md:inline-flex text-black">
          <Link href={PAGE_ROUTES.DEMO.path}>Book Demo</Link>
        </Button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden z-10 p-2 glass-icon rounded-full"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="fixed top-0 bottom-0 inset-0 z-0 glass-panel-dark flex flex-col items-center justify-center gap-8">
            <Link
              href={`#${PAGE_ROUTES.ANALYSIS.id}`}
              className="font-display text-lg font-medium uppercase tracking-widest transition-colors hover:text-blue-400;"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {PAGE_ROUTES.FEATURES.title}
            </Link>
            <Link
              href={`#${PAGE_ROUTES.ABOUT.id}`}
              className="font-display text-lg font-medium uppercase tracking-widest transition-colors hover:text-blue-400;"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {PAGE_ROUTES.ABOUT.title}
            </Link>
            <Link
              href={`#${PAGE_ROUTES.CONTACT.id}`}
              className="font-display text-lg font-medium uppercase tracking-widest transition-colors hover:text-blue-400;"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {PAGE_ROUTES.CONTACT.title}
            </Link>
            <Button
              variant="glow"
              className="mt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Link href={`#${PAGE_ROUTES.DEMO.id}`}>BOOK DEMO</Link>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}
