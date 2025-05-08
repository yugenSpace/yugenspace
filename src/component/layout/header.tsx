"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/Button";

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
      className={`fixed top-0 px-20 py-4 z-50 w-full transition-all duration-300 ${
        isScrolled ? "glass-navbar backdrop-blur-xl" : "bg-transparent py-4"
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 z-10">
          <div className="relative h-10 w-30">
            <Image
              src="/image/img_header_logo.png"
              fill
              alt="Yugen Space Logo"
              className="object-cover"
            />
          </div>
          {/* <span className="font-display text-xl tracking-wider">
            yugen space
          </span> */}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          <Link href="/" className="nav-link">
            Home
          </Link>
          <Link href="#features" className="nav-link">
            Technology
          </Link>
          <Link href="#about" className="nav-link">
            About
          </Link>
          <Link href="#contact" className="nav-link">
            Contact
          </Link>
        </nav>

        <Button variant="glass" className="hidden md:inline-flex">
          <Link href="/contact">Book Demo</Link>
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
          <div className="fixed inset-0 z-0 glass-panel-dark flex flex-col items-center justify-center gap-8">
            <Link
              href="/features"
              className="nav-link-mobile"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Technology
            </Link>
            <Link
              href="/about"
              className="nav-link-mobile"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="nav-link-mobile"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Button
              variant="glass"
              className="mt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Link href="/contact">Book Demo</Link>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}
