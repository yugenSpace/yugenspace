"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import SpaceParticles from "../ui/space-particles";
import PageHeader from "../ui/page-header";

export default function PartnerSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [contentWidth, setContentWidth] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    setContainerWidth(container.offsetWidth);
    setContentWidth(container.scrollWidth / 3); // since we repeat 3 times
  }, []);

  useEffect(() => {
    if (!containerWidth || !contentWidth) return;
    const animate = async () => {
      while (true) {
        await controls.start({
          x: -contentWidth,
          transition: {
            duration: 30,
            ease: "linear",
          },
        });
        controls.set({ x: 0 });
      }
    };
    animate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerWidth, contentWidth]);

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
          className="absolute top-1/4 left-1/4 w-96 h-96 border border-blue-100/20 rounded-full animate-pulse"
          style={{ animationDuration: "20s" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 border border-green-500/20 rounded-full animate-pulse"
          style={{ animationDuration: "15s", animationDirection: "reverse" }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 py-16">
        {/* Enhanced header section */}
        <div className="text-center">
          {/* <div className="flex items-center justify-center mb-6">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse mr-4" />
            <span className="text-blue-400 text-sm font-medium tracking-widest uppercase">
              Supported by Industry Leaders
            </span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse ml-4" />
          </div> */}
          {/* <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-wider mb-4">
            TRUSTED
          </h2> */}
          <PageHeader
            title="TRUSTED BY INDUSTRY LEADERS"
            description="Collaborating with top-tier organisations to redifine industry standards"
            showBorder={true}
          />

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
          <div className="relative w-full overflow-hidden">
            <motion.div
              ref={scrollRef}
              className="flex whitespace-nowrap py-8"
              animate={controls}
              initial={{ x: 0 }}
              style={{ willChange: "transform" }}
            >
              {/* Render partners multiple times for infinite scroll */}
              {[...Array(3)].map((_, setIndex) =>
                partners.map((partner, index) => (
                  <div
                    key={`${setIndex}-${index}`}
                    className="flex-shrink-0 mx-4 md:mx-8 group cursor-pointer transition-all duration-300 md:hover:scale-105"
                  >
                    <div className="px-4 md:px-7 py-2 md:py-6 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl md:hover:border-blue-500/50 md:hover:bg-slate-800/70 transition-all duration-300 flex flex-col items-center justify-center">
                      <div className="flex items-center justify-center">
                        <div className="w-36 h-20 md:w-52 md:h-24 flex items-center justify-center bg-white rounded-lg shadow border border-gray-200 p-2 overflow-hidden">
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
                    </div>
                  </div>
                ))
              )}
            </motion.div>
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
