import { motion } from "framer-motion";
import React from "react";

interface TitleTileProps {
  badgeText?: string;
  title: string;
  description?: string;
  showBorder?: boolean;
}

const TitleTile: React.FC<TitleTileProps> = ({
  badgeText,
  title,
  description,
  showBorder = false,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className={`text-center mb-16`}>
        {badgeText && (
          <div className="glass-badge mx-auto mb-4">{badgeText}</div>
        )}
        {title && (
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
            <span
              className={`tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300`}
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
  );
};

export default TitleTile;
