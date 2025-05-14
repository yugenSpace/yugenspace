"use client";

import { Satellite, LineChart, DollarSign } from "lucide-react";
import { motion } from "framer-motion";
import FeatureCard from "../ui/feature-card";
import PageHeader from "../ui/page-header";

export default function FeaturesSectionOld() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="beam beam-1"></div>
      <div className="beam beam-2"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <PageHeader
          title={"Hyperspectral Imaging"}
          description="Our proprietary sensors in space bring you the power of
            hyperspectral imaging for advanced soil analysis"
          showBorder={true}
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <FeatureCard
            icon={<Satellite className="h-10 w-10 text-blue-400" />}
            title="Precise soil nutrient and mineral maps"
            description="Get detailed analysis of your soil composition through advanced satellite imaging"
          />
          <FeatureCard
            icon={<LineChart className="h-10 w-10 text-blue-400" />}
            title="Monitor soil health regularly"
            description="Keep track of your soil's health with regular updates and analysis"
          />
          <FeatureCard
            icon={<DollarSign className="h-10 w-10 text-blue-400" />}
            title="Save expenditure on fertilizers"
            description="Optimize your fertilizer usage based on precise soil needs"
          />
        </motion.div>
      </div>
    </section>
  );
}
