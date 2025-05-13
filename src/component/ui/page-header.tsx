"use client";

import { motion } from "framer-motion";

interface PageHeaderProps {
  badgeText?: string;
  title: string;
  description?: string;
  showBorder?: boolean;
  color?: string;
}

export default function PageHeader({
  badgeText,
  title,
  description,
  showBorder = false,
  color = "transparent",
}: PageHeaderProps) {
  return (
    <div className="relative pt-32 pb-16 overflow-hidden">
      <div className="beam beam-1"></div>
      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className={`text-center mb-16`}>
            {badgeText && (
              <div className="glass-badge mx-auto mb-4">{badgeText}</div>
            )}
            {title && (
              <h2 className="text-4xl font-bold sm:text-2xl md:text-5xl mb-6">
                <span
                  className={`tracking-wider bg-clip-text text-${color} bg-gradient-to-r from-blue-400 to-cyan-300`}
                >
                  {title}
                </span>
              </h2>
            )}
            {showBorder && (
              <div
                className={`w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-300 mx-auto mb-6`}
              ></div>
            )}
            {description && (
              <p className="max-w-2xl mx-auto text-lg text-white/70">
                {description}
              </p>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
