"use client";

import SpaceParticles from "../ui/space-particles";
import { ASSET_PREFIX } from "@/constant/config.constant";
import FeatureCardImage from "../ui/feature-image-section";
import PageHeader from "../ui/page-header";

export default function FeaturesSection() {
  return (
    <section id="features" className="py-12 md:py-24 relative overflow-hidden">
      {/* <div className="beam beam-1"></div>
      <div className="beam beam-2"></div>

      <StarsBackground count={50} /> */}
      <SpaceParticles count={20} color="#f9f871" />
      <div className="container px-4 md:px-6 relative z-10">
        <PageHeader
          title={"Hyperspectral Imaging"}
          description="Our proprietary sensors in space bring you the power of
            hyperspectral imaging for advanced soil analysis"
          showBorder={true}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <FeatureCardImage
            imageSlug={`${ASSET_PREFIX}/image/chat-field.png`}
            title="Precise Soil Nutrient and Mineral Maps"
            description="Get a detailed analysis of your soil composition through advanced satellite imaging."
            altText="Descriptive text for the image"
          />
          <FeatureCardImage
            imageSlug={`${ASSET_PREFIX}/image/soil-nutrition.png`}
            title="Monitor Soil Health Regularly"
            description="Keep track of your soil's health with regular updates and comprehensive analysis."
          />
          <FeatureCardImage
            imageSlug={`${ASSET_PREFIX}/image/fertilizer-cost.png`}
            title="Save on Fertilizer Costs"
            description="Optimize your fertilizer usage based on precise soil needs, saving money and resources."
          />
        </div>
      </div>
    </section>
  );
}
