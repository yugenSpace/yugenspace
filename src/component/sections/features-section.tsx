"use client";

// import { Satellite, LineChart, DollarSign } from "lucide-react";
import { motion } from "framer-motion";
// import FeatureCard from "../ui/feature-card";
import SpaceParticles from "../ui/space-particles";
import StarsBackground from "../ui/stars-background";
import { ASSET_PREFIX } from "@/constant/config.constant";
import FeatureCardImage from "./feature-image-section";
import PageHeader from "../ui/page-header";
// import FeatureCardImage from "./feature-image-section";
// import { ASSET_PREFIX } from "@/constant/config.constant";

export default function FeaturesSection() {
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
      <SpaceParticles count={30} color="#f9f871" />
      <StarsBackground count={50} />

      <div className="container px-4 md:px-6 relative z-10">
        <PageHeader
          // badgeText="Proprietary Technology"
          // showBorder={true}
          title={"Hyperspectral Imaging"}
          description="Our proprietary sensors in space bring you the power of
            hyperspectral imaging for advanced soil analysis"
        />
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <FeatureCardImage
            imageSlug={`${ASSET_PREFIX}/image/soil-fall.png`}
            title="Precise soil nutrient and mineral maps"
            description="Get detailed analysis of your soil composition through advanced satellite imaging"
            altText="Descriptive text for the image"
          />
          <FeatureCardImage
            imageSlug={`${ASSET_PREFIX}/image/soil-health.png`}
            title="Monitor soil health regularly"
            description="Keep track of your soil's health with regular updates and analysis"
          />
          <FeatureCardImage
            imageSlug={`${ASSET_PREFIX}/image/fertilizer-bag.png`}
            title="Save expenditure on fertilizers"
            description="Optimize your fertilizer usage based on precise soil needs"
          />
        </motion.div>
      </div>
    </section>
  );
}
