"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ASSET_PREFIX } from "@/constant/config.constant";
import SpaceParticles from "../ui/space-particles";
import PageHeader from "../ui/page-header";

export default function DashboardSection() {
  return (
    <section className="py-12 md:py-24 relative overflow-hidden">
      <div className="beam beam-3"></div>

      <SpaceParticles count={20} color="white" />

      <PageHeader
        title={"Geospatial Analysis"}
        badgeText="Proprietary Technology"
        // description="Our proprietary sensors in space bring you the power of hyperspectral
        //   imaging for advanced soil analysis"
        // showBorder={true}
      />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4 md:mb-6">
              Vision Platform
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mb-4 md:mb-6 mx-auto md:mx-0"></div>
            <p className="text-base sm:text-lg md:text-xl text-white/70 mb-6">
              Analyzing satellite images now will be as simple as a Google
              search.
            </p>

            <div className="space-y-4 md:space-y-6">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-gradient-to-br from-primary to-tertiary flex items-center justify-center shadow-lg shadow-primary/20 text-blue-500 font-bold text-xl md:text-3xl">
                  1.
                </div>
                <div>
                  <h3 className="font-display text-lg md:text-xl font-medium mb-2">
                    Complex Processing
                  </h3>
                  <p className="text-white/70 text-sm md:text-base">{`We do the complex satellite data processing so you don't have to.`}</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-gradient-to-br from-primary to-tertiary flex items-center justify-center shadow-lg shadow-primary/20 text-blue-500 font-bold text-xl md:text-3xl">
                  2.
                </div>
                <div>
                  <h3 className="font-display text-lg md:text-xl font-medium mb-2">
                    Valuable Insights
                  </h3>
                  <p className="text-white/70 text-sm md:text-base">
                    You get the valuable insights delivered in an
                    easy-to-understand format.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-2 md:gap-4"
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
