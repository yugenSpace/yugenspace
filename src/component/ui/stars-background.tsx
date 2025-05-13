"use client";

import { useEffect, useRef } from "react";

interface StarsBackgroundProps {
  count?: number;
  color?: string;
}

export default function StarsBackground({
  count = 100,
  color = "#ffffff",
}: StarsBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Clear any existing stars
    container.innerHTML = "";

    // Create stars
    for (let i = 0; i < count; i++) {
      const star = document.createElement("div");
      star.classList.add("star");

      // Random size between 1px and 3px
      const size = Math.random() * 2 + 1;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;

      // Random position
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;

      // Random animation delay
      star.style.animationDelay = `${Math.random() * 4}s`;

      // Set color with random opacity
      const opacity = Math.random() * 0.7 + 0.3;
      star.style.backgroundColor = color;
      star.style.opacity = opacity.toString();

      container.appendChild(star);
    }
  }, [count, color]);

  return <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none"></div>;
}
