"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/component/ui/Button";
import { motion } from "framer-motion";

export default function HeroSection() {
  // const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Video autoplay failed:", error);
      });
    }
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      {/* <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="transform scale-x-[-1] absolute w-full h-full object-cover"
        >
          <source
            src="https://videos.pexels.com/video-files/1851190/1851190-uhd_2560_1440_25fps.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
      </div> */}
      {/* <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="transform scale-x-[-1] absolute w-full h-full object-cover"
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
          <source
            src="https://videos.pexels.com/video-files/1851190/1851190-uhd_2560_1440_25fps.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      {/* Light beams */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="beam beam-1"></div>
        <div className="beam beam-2"></div>
        <div className="beam beam-3"></div>
      </div>

      <div className="container relative z-10 h-full mx-auto px-4 md:px-6 flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl"
        >
          {/* <div className="glass-badge mb-6">Space Technology</div> */}

          <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tighter leading-tight mb-6">
            <span className="block">Making</span>
            <span className="block">Earth Observation</span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300"
            >
              Simple
            </motion.span>
          </h1>

          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mb-6"></div>

          <p className="text-xl text-white/80 max-w-xl mb-8">
            Our proprietary sensors in space bring you the power of
            hyperspectral imaging for advanced soil analysis and agricultural
            optimization.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" variant="glow" className="text-black font-medium">
              <Link href="/contact">BOOK A DEMO</Link>
            </Button>
            <Button size="lg" variant="glass">
              <Link href="/features">EXPLORE TECHNOLOGY</Link>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center">
          <span className="text-xs text-white/60 mb-2 font-display">
            Scroll to explore
          </span>
          <div className="w-6 h-10 rounded-full glass-panel flex justify-center p-2">
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 1.5,
                ease: "easeInOut",
              }}
              className="w-1.5 h-1.5 rounded-full bg-white"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
