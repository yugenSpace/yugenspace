"use client";

import Image from "next/image";
import { Button } from "./Button";
import Link from "next/link";

interface FeatureCardImageProps {
  imageSlug: string;
  title: string;
  description: string;
  altText?: string; // Optional alt text for the image
}

export default function FeatureImageCard({
  imageSlug,
  title,
  description,
  altText = "Feature image",
}: FeatureCardImageProps) {
  return (
    <div className="glass-panel h-full flex flex-col items-center text-center sm:text-start rounded-t-3xl rounded-b-xl">
      <div className="h-[250px] w-full flex items-center justify-center rounded-t-3xl">
        <Image
          src={imageSlug}
          alt={altText}
          width={100}
          height={100}
          className="h-[250px] w-full object-fit rounded-t-3xl"
        />
      </div>

      <div className="w-full h-full flex flex-col mt-4 text-start justify-between  p-4 sm:p-6 md:p-8">
        <div>
          <a href="#">
            <h5 className="mb-2 text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
          </a>
          <p className="mb-3 text-sm sm:text-base md:text-lg font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>
        </div>
        <Button size="lg" variant="glass" className="text-white font-medium">
          <Link href="https://docs.google.com/forms/d/1S5d45yOn69_FFaIwPf51gjLZ6ZHdawmwaZThjRo_32s/viewform?edit_requested=true">
            Read More
          </Link>
        </Button>
      </div>
    </div>
  );
}
