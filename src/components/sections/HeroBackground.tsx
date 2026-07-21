"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface HeroBackgroundProps {
  images: string[];
  intervalMs?: number;
}

export function HeroBackground({ images, intervalMs = 7000 }: HeroBackgroundProps) {
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
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {images.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt=""
          fill
          priority={index === 0}
          sizes="100vw"
          className={`object-cover transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      {/* Dark overlay for text contrast */}
      <div className="absolute inset-0 bg-black/30" />
    </div>
  );
}