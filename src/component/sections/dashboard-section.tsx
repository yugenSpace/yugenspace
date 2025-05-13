"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ASSET_PREFIX } from "@/constant/config.constant";
import SpaceParticles from "../ui/space-particles";
import TitleTile from "../ui/TitleTile";

export default function DashboardSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="beam beam-3"></div>

      <SpaceParticles count={20} color="white" />

      <TitleTile
        title={"Geospatial Analysis"}
        badgeText="Proprietary Technology"
        // description="Our proprietary sensors in space bring you the power of hyperspectral
        //   imaging for advanced soil analysis"
        // showBorder={true}
      />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* <div className="glass-badge mb-4">Our Mission</div> */}
            <h2 className="font-display text-4xl font-bold tracking-tight mb-6">
              Vision Platform
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mb-6"></div>
            <p className="text-lg text-white/70 mb-6">
              Analyzing satellite images now will be as simple as a Google
              search.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-tertiary flex items-center justify-center shadow-lg shadow-primary/20 text-blue-500 font-bold text-3xl">
                  1.
                </div>
                <div>
                  <h3 className="font-display text-xl font-medium mb-2">
                    Complex Processing
                  </h3>
                  <p className="text-white/70">{`We do the complex satellite data processing so you don't have to.`}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-tertiary flex items-center justify-center shadow-lg shadow-primary/20 text-blue-500 font-bold text-3xl">
                  2.
                </div>
                <div>
                  <h3 className="font-display text-xl font-medium mb-2">
                    Valuable Insights
                  </h3>
                  <p className="text-white/70">
                    You get the valuable insights delivered in an
                    easy-to-understand format.
                  </p>
                </div>
              </div>
              {/* <div className="flex items-start gap-4">
                <div className=" h-12 w-12 rounded-full bg-gradient-to-br from-primary to-tertiary flex items-center justify-center shadow-lg shadow-primary/20 text-white font-bold text-lg">
                  1
                </div>
                <div>
                  <blockquote className="border-l-4 border-blue-500 pl-6 italic text-xl font-display bg-white/5 backdrop-blur-sm p-4 rounded-r-lg mb-8">
                    1. Complex Processing
                  </blockquote>
                  <p className="text-white/70">{`We do the complex satellite data processing so you don't have to.`}</p>
                </div>
              </div> */}
              {/* <div className="flex items-start gap-4">
                <div className=" h-12 w-12 rounded-full bg-gradient-to-br from-primary to-tertiary flex items-center justify-center shadow-lg shadow-primary/20 text-white font-bold text-lg">
                  2
                </div>
                <div>
                  <blockquote className="border-l-4 border-blue-500 pl-6 italic text-xl font-display bg-white/5 backdrop-blur-sm p-4 rounded-r-lg mb-8">
                    1. Valuable Insights
                  </blockquote>

                  <p className="text-white/70">
                    You get the valuable insights delivered in an
                    easy-to-understand format.
                  </p>
                </div>
              </div> */}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="glass-image-container col-span-2">
              <Image
                src={`${ASSET_PREFIX}/image/img_rectangle_9.png`}
                width={600}
                height={300}
                alt="Tertiary Image"
                className="rounded-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
