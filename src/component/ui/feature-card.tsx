"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
      }}
      className="group"
    >
      <div className="glass-panel h-full p-8 flex flex-col items-center text-center">
        <div className="glass-icon-container mb-6">{icon}</div>
        <h3 className="font-display text-xl font-bold mb-3">{title}</h3>
        <p className="text-white/70">{description}</p>
      </div>
    </motion.div>
  );
}
