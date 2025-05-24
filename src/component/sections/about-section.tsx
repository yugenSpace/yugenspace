"use client";

import Link from "next/link";

import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import ImageGallerySlider from "../ui/ImageGallerySlider";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* <div className="beam beam-4"></div> */}

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="glass-badge mb-4 capitalize">Our Vision</div>
            <h2 className="font-display text-4xl font-bold tracking-tight mb-6">
              Yugen Space
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mb-6"></div>
            <p className="text-lg text-white/70 mb-6">
              {`We’re building intelligent satellite systems that make Earth observation radically simple and accessible, empowering every individual on the planet with space-driven insights.`}
            </p>
            <blockquote className="border-l-4 border-blue-500 pl-6 italic text-xl font-display bg-white/5 backdrop-blur-sm p-4 rounded-r-lg mb-8">
              {`Grounded on Earth, elevated by space.`}
            </blockquote>
            <Button variant="glass">
              <Link href="/contact">LEARN MORE</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full"
          >
            {/* <div className="glass-image-container">
              <Image
                src={`${ASSET_PREFIX}/image/img_rectangle_5.png`}
                width={300}
                height={300}
                alt="Primary Image"
                className="rounded-lg"
              />
            </div>
            <div className="glass-image-container">
              <Image
                src={`${ASSET_PREFIX}/image/img_rectangle_6.png`}
                width={300}
                height={300}
                alt="Secondary Image"
                className="rounded-lg"
              />
            </div>
            <div className="glass-image-container col-span-2">
              <Image
                src={`${ASSET_PREFIX}/image/img_rectangle_8.png`}
                width={600}
                height={300}
                alt="Tertiary Image"
                className="rounded-lg"
              />
            </div>
             */}
            <ImageGallerySlider />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
