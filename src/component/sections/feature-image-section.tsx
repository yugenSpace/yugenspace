"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "../ui/Button";
import Link from "next/link";

interface FeatureCardImageProps {
  imageSlug: string;
  title: string;
  description: string;
  altText?: string; // Optional alt text for the image
}

export default function FeatureCardImage({
  imageSlug,
  title,
  description,
  altText = "Feature image",
}: FeatureCardImageProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
      }}
      className="group"
    >
      <div className="glass-panel h-full flex flex-col items-center text-center sm:text-start p-4 sm:p-6 md:p-8">
        <Image
          src={imageSlug}
          alt={altText}
          width={300}
          height={300}
          className="object-cover"
        />

        <div className="mt-4">
          <a href="#">
            <h5 className="mb-2 text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
          </a>
          <p className="mb-3 text-sm sm:text-base md:text-lg font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>
          <Button size="lg" variant="glass" className="text-white font-medium">
            <Link href="https://docs.google.com/forms/d/1S5d45yOn69_FFaIwPf51gjLZ6ZHdawmwaZThjRo_32s/viewform?edit_requested=true">
              Read More
            </Link>
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
