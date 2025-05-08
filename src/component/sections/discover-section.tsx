import React from "react";
import { Button } from "../ui/Button";
import Link from "next/link";

const DiscoverSection = () => {
  return (
    <div className="flex justify-center py-12">
      <div className="glass-panel px-8 py-6 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Explore Our Solutions
        </h2>
        <p className="text-white/70 mb-8">
          Discover how Yugen Space is revolutionizing soil analysis through
          advanced satellite technology
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="glass" className="min-w-[180px]">
            <Link href="/features">Our Technology</Link>
          </Button>
          <Button variant="glass" className="min-w-[180px]">
            <Link href="/about">About Us</Link>
          </Button>
          <Button variant="glass" className="min-w-[180px]">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DiscoverSection;
