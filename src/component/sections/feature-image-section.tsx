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
      <div className="glass-panel h-full flex flex-col items-center text-start">
        <Image
          src={imageSlug}
          alt={altText}
          width={300}
          height={300}
          className="object-cover"
        />

        <div className="p-8">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>
          {/* <a
            href="#"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a> */}
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
