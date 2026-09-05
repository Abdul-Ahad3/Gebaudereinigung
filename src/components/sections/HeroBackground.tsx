// src/components/sections/HeroBackground.tsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface HeroBackgroundProps {
  images: string[];
  intervalMs?: number;
  objectPosition?: string;
}

export function HeroBackground({
  images,
  intervalMs = 7000,
  objectPosition = "center",
}: HeroBackgroundProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, intervalMs);

    return () => clearInterval(timer);
  }, [images.length, intervalMs]);

  return (
    <>
      {/* Mobile: single static image at its real aspect ratio — no crop, no rotation */}
      {/* Plain <img>, not next/image: intentional, so no width/height guess is needed. */}
      <img src={images[0]} alt="" className="block w-full sm:hidden" />

      {/* sm and up: full-bleed rotating crossfade background — unchanged behavior */}
      <div className="absolute inset-0 hidden overflow-hidden sm:block">
        {images.map((src, index) => (
          <Image
            key={src}
            src={src}
            alt=""
            fill
            priority={index === 0}
            sizes="100vw"
            style={{ objectPosition }}
            className={`object-cover transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-black/30" />
      </div>
    </>
  );
}