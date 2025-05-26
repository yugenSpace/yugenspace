"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
// import PageHeader from "../ui/page-header";
import SpaceParticles from "../ui/space-particles";

export default function ParrtnerSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let isHovered = false;

    const scroll = () => {
      if (!isHovered && scrollContainer) {
        scrollContainer.scrollLeft += 0.8;

        // Reset scroll position for infinite loop
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(scroll);
    };

    const handleMouseEnter = () => {
      isHovered = true;
    };

    const handleMouseLeave = () => {
      isHovered = false;
    };

    scrollContainer.addEventListener("mouseenter", handleMouseEnter);
    scrollContainer.addEventListener("mouseleave", handleMouseLeave);

    animationId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationId);
      scrollContainer?.removeEventListener("mouseenter", handleMouseEnter);
      scrollContainer?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const partners = [
    {
      name: "arise",
      tagline: "From Parts to Intelligence",
      logo: "/logo/arise.png",
    },
    {
      name: "cyber valley",
      tagline: "Precision Earth Mapping",
      logo: "/logo/cyber-valley-black.png",
    },
    {
      name: "INDYWARE",
      tagline: "Agricultural Intelligence",
      logo: "/logo/esa.jpeg",
    },
    {
      name: "INGENIOUS GEO",
      subtitle: "TECHNOLOGIES",
      tagline: "Spatial Data Solutions",
      logo: "/logo/exist.svg",
    },
    {
      name: "TERRA INSIGHTS",
      tagline: "Soil Analytics Platform",
      logo: "/logo/gsc.png",
    },
    {
      name: "ORBITAL VISION",
      tagline: "Satellite Imagery Services",
      logo: "/logo/university-tubingen.png",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-black/50  to-black min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Animated constellation background */}
      <SpaceParticles count={20} />
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0 animate-pulse"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(59, 130, 246, 0.4) 1px, transparent 1px), radial-gradient(circle, rgba(34, 197, 94, 0.3) 1px, transparent 1px)`,
            backgroundSize: "60px 60px, 80px 80px",
            backgroundPosition: "0 0, 30px 30px",
          }}
        />
      </div>

      {/* Floating orbital rings */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 border border-blue-500/20 rounded-full animate-pulse"
          style={{ animationDuration: "20s" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 border border-green-500/20 rounded-full animate-pulse"
          style={{ animationDuration: "15s", animationDirection: "reverse" }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 py-16">
        {/* Enhanced header section */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-6">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse mr-4" />
            <span className="text-blue-400 text-sm font-medium tracking-widest uppercase">
              Supported by Industry Leaders
            </span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse ml-4" />
          </div>
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-wider mb-4">
            TRUSTED
          </h2>
          {/* 
          <PageHeader
            title="Supported by"
            // description="Get in touch to schedule a demo or learn more about our solutions"
            showBorder={true}
          /> */}

          {/* <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Leading the future of earth observation and soil analysis through
            cutting-edge satellite technology and spatial intelligence
          </p> */}
        </div>

        {/* Enhanced scrolling partners container */}
        <div className="relative w-full">
          {/* Enhanced left fade with subtle glow */}
          <div className="absolute left-0 top-0 w-40 h-full bg-gradient-to-r from-black via-black/50 to-transparent z-10 pointer-events-none" />
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-black/50 to-transparent z-10 pointer-events-none" />

          {/* Enhanced right fade with subtle glow */}
          <div className="absolute right-0 top-0 w-40 h-full bg-gradient-to-l from-black via-black/50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-black/50 to-transparent z-10 pointer-events-none" />

          {/* Scrolling container with enhanced styling */}
          <div
            ref={scrollRef}
            className="flex overflow-hidden whitespace-nowrap py-8"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {/* Render partners multiple times for infinite scroll */}
            {[...Array(3)].map((_, setIndex) =>
              partners.map((partner, index) => (
                <div
                  key={`${setIndex}-${index}`}
                  className="flex-shrink-0 mx-12 group cursor-pointer transition-all duration-300 hover:scale-105"
                >
                  <div
                    className=" bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl hover:border-blue-500/50 hover:bg-slate-800/70 transition-all duration-300 flex flex-col items-center justify-center"
                    style={{ width: 260, height: 140 }}
                  >
                    <div className="flex items-center justify-center">
                      <div className="md:w-52 md:h-24 sm:w-36 sm:h-16 xs:w-28 xs:h-12 flex items-center justify-center bg-white rounded-lg shadow border border-gray-200 p-2 overflow-hidden">
                        <Image
                          src={partner.logo}
                          alt={`${partner.name} logo`}
                          width={180}
                          height={62}
                          className="object-contain"
                          loading="lazy"
                          style={{ maxWidth: "100%", maxHeight: "100%" }}
                        />
                      </div>
                    </div>
                    {/* <div className="flex items-center justify-center mb-2">
                      <div className="w-14 h-14 rounded-full border-2 border-blue-400 flex items-center justify-center bg-gradient-to-br from-blue-500/20 to-green-500/20 overflow-hidden">
                        <Image
                          width={48}
                          height={48}
                          src={partner.logo}
                          className="object-cover rounded-full"
                          alt={`${partner.name} logo`}
                          loading="lazy"
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                    </div> */}
                    {/* <div className="flex flex-col items-center">
                      <div className="text-xl font-bold text-white whitespace-nowrap group-hover:text-blue-400 transition-colors">
                        {partner.name}
                      </div>
                      {partner.subtitle && (
                        <div className="text-sm font-semibold text-white whitespace-nowrap group-hover:text-blue-400 transition-colors">
                          {partner.subtitle}
                        </div>
                      )}
                      <div className="text-xs text-slate-400 mt-1 whitespace-nowrap text-center">
                        {partner.tagline}
                      </div>
                    </div> */}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
