"use client";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";

export default function HeroSection() {
  const videoRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden pt-20 bg-black text-white">
      {/* Video Background */}
      {/* <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="transform absolute w-full h-full object-cover"
        >
          <source
            src="https://videos.pexels.com/video-files/1851190/1851190-uhd_2560_1440_25fps.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/50"></div>
      </div> */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="transform scale-x-[-1] absolute w-full h-full object-cover"
        >
          {/* //
          https://videos.pexels.com/video-files/3129902/3129902-uhd_2560_1440_25fps.mp4
          //
          https://videos.pexels.com/video-files/1851190/1851190-uhd_2560_1440_25fps.mp4
          //
          https://videos.pexels.com/video-files/3163534/3163534-uhd_2560_1440_30fps.mp4 */}
          <source
            src="https://videos.pexels.com/video-files/1851190/1851190-uhd_2560_1440_25fps.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      <div className="container h-full mx-auto px-4 md:px-6 flex items-center relative z-10">
        <div
          className={`w-full  flex items-start flex-col space-y-8 transition-all duration-1000 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
            <span className="block">Making</span>
            <span className="block">Earth Observation</span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
              Simple
            </span>
          </h1>
          <div className="w-24 h-1 bg-blue-400"></div>
          <p className="text-xl text-white/70 max-w-md">
            Our proprietary sensors in space bring you the power of
            hyperspectral imaging for soil analysis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#contact"
              className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-black font-medium px-6 py-3 rounded-lg text-center"
            >
              BOOK A DEMO
            </Link>
            <Link
              href="#features"
              className="border border-white/20 hover:bg-white/10 hover:text-white px-6 py-3 rounded-lg text-center"
            >
              LEARN MORE
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-blue-400/20 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-cyan-400/20 rounded-full filter blur-3xl opacity-20"></div>
    </section>
  );
}
