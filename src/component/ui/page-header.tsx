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
    <div className="relative pt-16 sm:pt-24 md:pt-32 pb-8 sm:pb-12 md:pb-16 overflow-hidden">
      {/* <div className="beam beam-1"></div> */}
      <div className="container px-4 sm:px-6 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 10 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-xl sm:max-w-2xl md:max-w-4xl mx-auto"
        >
          <div className={`text-center mb-8 sm:mb-12 md:mb-16`}>
            {badgeText && (
              <div className="glass-badge mx-auto mb-4 text-sm sm:text-base md:text-lg">
                {badgeText}
              </div>
            )}
            {title && (
              <h2 className="text-2xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
                <span
                  className={`bg-clip-text text-${color} bg-gradient-to-r from-blue-400 to-cyan-300`}
                >
                  {title}
                </span>
              </h2>
            )}
            {showBorder && (
              <div
                className={`w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-300 mx-auto mb-4 sm:mb-6 md:mb-8`}
              ></div>
            )}
            {description && (
              <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed sm:max-w-lg md:max-w-2xl sm:text-base md:text-lg ">
                {description}
              </p>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
