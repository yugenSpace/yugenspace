"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Button } from "./Button";
import Link from "next/link";

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
      className=""
    >
      <div className="glass-panel rounded-xl h-full p-8 flex flex-col items-center text-cente justify-between">
        <div className="flex items-center flex-col text-center">
          <div className="glass-icon-container mb-6">{icon}</div>
          <h3 className="font-display text-xl font-bold mb-3">{title}</h3>
          <p className="text-white/70">{description}</p>
        </div>
        <Button
          size="lg"
          variant="glass"
          className="w-full mt-8 text-white font-medium"
        >
          <Link href="/">Read More</Link>
        </Button>
      </div>
    </motion.div>
  );
}
