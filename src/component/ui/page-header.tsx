"use client"

import { motion } from "framer-motion"

interface PageHeaderProps {
  title: string
  subtitle: string
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="relative pt-32 pb-16 overflow-hidden">
      <div className="beam beam-1"></div>
      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">{title}</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mb-6"></div>
          <p className="text-lg text-white/70">{subtitle}</p>
        </motion.div>
      </div>
    </div>
  )
}
