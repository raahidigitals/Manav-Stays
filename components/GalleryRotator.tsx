"use client";

import { useEffect, useState } from "react";

type GalleryRotatorProps = {
  images: string[];
  name: string;
};

export default function GalleryRotator({
  images,
  name,
}: GalleryRotatorProps) {
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 2) return;

    const interval = setInterval(() => {
      setStartIndex((current) => (current + 2) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  if (!images.length) return null;

  const visibleImages =
    images.length === 1
      ? [images[0]]
      : [
          images[startIndex % images.length],
          images[(startIndex + 1) % images.length],
        ];

  return (
    <div className="lg:col-span-6 grid grid-cols-2 gap-4">
      {visibleImages.map((image, index) => (
        <div
          key={`${startIndex}-${index}`}
          className="aspect-[3/4] rounded-2xl overflow-hidden border border-white/10"
        >
          <img
            src={image}
            alt={`${name} gallery image ${startIndex + index + 1}`}
            className="w-full h-full object-cover animate-gallery-fade"
          />
        </div>
      ))}
    </div>
  );
}