"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ASSET_PREFIX } from "@/constant/config.constant";

export default function AnalysisSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="beam beam-3"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="glass-badge mb-4">Simplified Analysis</div>
            <h2 className="font-display text-4xl font-bold tracking-tight mb-6">
              New age analysis platform
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mb-6"></div>
            <p className="text-xl text-white/70 mb-8">
              Analyzing satellite images now will be as simple as a Google
              search.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="glass-number">1</div>
                <div>
                  <h3 className="font-display text-xl font-medium mb-2">
                    Complex Processing
                  </h3>
                  <p className="text-white/70">{`We do the complex satellite data processing so you don't have to.`}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="glass-number">2</div>
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
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-3xl blur-xl opacity-20"></div>
            <div className="glass-panel p-1 rounded-3xl relative">
              <Image
                src={`${ASSET_PREFIX}/image/img_rectangle_9.png`}
                width={600}
                height={500}
                alt="Soil Analysis"
                className="rounded-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
