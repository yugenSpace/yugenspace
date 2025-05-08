"use client"

import { Satellite, Leaf, BarChart3, LineChart, DollarSign, TrendingUp } from "lucide-react"
import { motion } from "framer-motion"
import FeatureCard from "../ui/feature-card"

export default function FeaturesSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="beam beam-1"></div>
      <div className="beam beam-2"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="glass-badge mx-auto mb-4">Proprietary Technology</div>
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
              Hyperspectral Imaging
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-white/70">
            Our proprietary sensors in space bring you the power of hyperspectral imaging for advanced soil analysis
          </p>
        </div>

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
            icon={<BarChart3 className="h-10 w-10 text-blue-400" />}
            title="Predict crop yields"
            description="Use our data to make accurate predictions about your expected crop yields"
          />
          <FeatureCard
            icon={<Leaf className="h-10 w-10 text-blue-400" />}
            title="Measure impact of your products"
            description="Track how different products and techniques affect your soil quality over time"
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
          <FeatureCard
            icon={<TrendingUp className="h-10 w-10 text-blue-400" />}
            title="Increase crops yields"
            description="Boost your productivity with data-driven farming decisions"
          />
        </motion.div>
      </div>
    </section>
  )
}
