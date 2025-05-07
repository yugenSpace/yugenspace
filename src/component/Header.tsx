import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-md">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="/logo.png"
            width={40}
            height={40}
            alt="Yugen Space Logo"
          />
          <span className="font-polaris text-xl tracking-wider text-light">
            yugen space
          </span>
        </div>
        <nav className="hidden md:flex gap-10">
          <Link
            href="#about"
            className="font-polaris text-sm font-medium uppercase tracking-widest transition-colors hover:text-primary"
          >
            About
          </Link>
          <Link
            href="#features"
            className="font-polaris text-sm font-medium uppercase tracking-widest transition-colors hover:text-primary"
          >
            Demo
          </Link>
          <Link
            href="#contact"
            className="font-polaris text-sm font-medium uppercase tracking-widest transition-colors hover:text-primary"
          >
            Contact
          </Link>
        </nav>
        {/* <Button
          asChild
          variant="outline"
          className="hidden md:inline-flex border-white/20 hover:bg-white/10 hover:text-white font-polaris"
        >
          <Link href="#contact">BOOK DEMO</Link>
        </Button> */}
      </div>
    </header>
  );
};

export default Header;
