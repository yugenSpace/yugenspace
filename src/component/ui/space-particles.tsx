"use client";

import { useEffect, useRef } from "react";

interface SpaceParticlesProps {
  count?: number;
  color?: string;
}

export default function SpaceParticles({
  count = 50,
  color = "#ffffff",
}: SpaceParticlesProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Clear any existing particles
    container.innerHTML = "";

    // Create particles
    for (let i = 0; i < count; i++) {
      const particle = document.createElement("div");
      particle.classList.add("particle");

      // Random size between 2px and 6px
      const size = Math.random() * 4 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;

      // Random position
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;

      // Random animation delay
      particle.style.animationDelay = `${Math.random() * 6}s`;

      // Random animation duration between 4s and 10s
      particle.style.animationDuration = `${Math.random() * 6 + 4}s`;

      // Set color
      particle.style.backgroundColor = color;

      container.appendChild(particle);
    }
  }, [count, color]);

  return <div ref={containerRef} className="w-full h-full absolute inset-0 overflow-hidden pointer-events-none"></div>;
}
