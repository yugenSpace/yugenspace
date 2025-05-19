import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ASSET_PREFIX } from "@/constant/config.constant";

const images = [
  {
    src: `${ASSET_PREFIX}/image/img_rectangle_5.png`,
    alt: "Primary Image",
  },
  {
    src: `${ASSET_PREFIX}/image/img_rectangle_6.png`,
    alt: "Secondary Image",
  },
  {
    src: `${ASSET_PREFIX}/image/img_rectangle_8.png`,
    alt: "Tertiary Image",
  },
];

export default function ImageGallerySlider() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const goTo = (i: number) => setIndex(i);
  //   const prev = () =>
  //     setIndex((prev) => (prev - 1 + images.length) % images.length);
  //   const next = () => setIndex((prev) => (prev + 1) % images.length);

  return (
    <div className="relative w-full flex flex-col items-center">
      <div className="w-full h-[400px] flex items-center justify-center overflow-hidden rounded-lg glass-image-container">
        <AnimatePresence mode="wait">
          <motion.div
            key={images[index].src}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 1 }}
            className="w-full h-full flex items-center justify-center"
          >
            <Image
              src={images[index].src}
              alt={images[index].alt}
              width={600}
              height={400}
              className="object-cover rounded-lg w-full h-full"
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flex gap-2 mt-4">
        {images.map((img, i) => (
          <button
            key={img.src}
            className={`w-3 h-3 rounded-full ${
              i === index ? "bg-blue-500" : "bg-white/30"
            }`}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
      {/* <div className="absolute top-1/2 left-2 -translate-y-1/2">
        <button
          onClick={prev}
          className="bg-white/20 hover:bg-white/40 rounded-full p-2"
        >
          <span className="sr-only">Previous</span>
          <svg width="20" height="20" fill="none" stroke="currentColor">
            <path
              d="M13 17l-5-5 5-5"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div> */}
      {/* <div className="absolute top-1/2 right-2 -translate-y-1/2">
        <button
          onClick={next}
          className="bg-white/20 hover:bg-white/40 rounded-full p-2"
        >
          <span className="sr-only">Next</span>
          <svg width="20" height="20" fill="none" stroke="currentColor">
            <path
              d="M7 7l5 5-5 5"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div> */}
    </div>
  );
}
