/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageCarouselProps {
  images: { src: string; alt: string }[];
  /** Auto-advance interval in milliseconds. Defaults to 6000. */
  interval?: number;
  className?: string;
}

export default function ImageCarousel({
  images,
  interval = 6000,
  className = '',
}: ImageCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + images.length) % images.length);
  }, [images.length]);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % images.length);
  }, [images.length]);

  // Auto-advance every `interval` ms, paused while hovered
  useEffect(() => {
    if (images.length <= 1 || isHovered) return;
    const timer = setInterval(next, interval);
    return () => clearInterval(timer);
  }, [next, interval, images.length, isHovered]);

  if (!images.length) return null;

  return (
    <div
      className={`relative w-full select-none ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Slides */}
      <div className="relative overflow-hidden rounded-xl">
        {images.map((img, idx) => (
          <div
            key={idx}
            className={`transition-opacity duration-700 ease-in-out ${
              idx === current ? 'opacity-100 relative' : 'opacity-0 absolute inset-0'
            }`}
            aria-hidden={idx !== current}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              referrerPolicy="no-referrer"
            />
          </div>
        ))}

        {/* Gradient overlay (same as original) */}
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>

      {/* Navigation arrows – only shown when there are multiple images */}
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            aria-label="Previous image"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-9 h-9 rounded-full bg-zinc-950/70 border border-white/10 text-white hover:bg-zinc-800/90 hover:border-white/20 transition-all duration-200 backdrop-blur-sm"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={next}
            aria-label="Next image"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-9 h-9 rounded-full bg-zinc-950/70 border border-white/10 text-white hover:bg-zinc-800/90 hover:border-white/20 transition-all duration-200 backdrop-blur-sm"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dot indicators */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-1.5">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                aria-label={`Go to image ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === current
                    ? 'w-5 bg-white'
                    : 'w-1.5 bg-white/40 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
