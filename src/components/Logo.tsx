/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({ className = '', showText = true, size = 'md' }: LogoProps) {
  const sizeClasses = {
    sm: 'h-6 w-6',
    md: 'h-9 w-9',
    lg: 'h-14 w-14',
  };

  const textSizes = {
    sm: 'text-sm tracking-[0.2em]',
    md: 'text-lg tracking-[0.25em]',
    lg: 'text-2xl tracking-[0.3em] font-extrabold',
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Intertwined Geometric Luxury Monogram "A" and "R" */}
      <svg
        viewBox="0 0 100 100"
        className={`${sizeClasses[size]} shrink-0 drop-shadow-[0_0_8px_rgba(59,130,246,0.3)]`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Left Leg of A */}
        <path
          d="M20 85L50 15L62 43"
          stroke="url(#silverGrad)"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Right Leg of A and Leg of R */}
        <path
          d="M62 43L80 85"
          stroke="url(#silverGrad)"
          strokeWidth="7"
          strokeLinecap="round"
        />
        {/* Crossbar of A */}
        <path
          d="M32 58H58"
          stroke="url(#blueGrad)"
          strokeWidth="5"
          strokeLinecap="round"
        />
        {/* Curve of R */}
        <path
          d="M50 15H66C76.5 15 82 23 82 31.5C82 40 76 47.5 66 47.5H50V15Z"
          stroke="url(#blueGrad)"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Diagonal stroke of R */}
        <path
          d="M60 47.5L78 80"
          stroke="url(#silverGrad)"
          strokeWidth="7"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="silverGrad" x1="20" y1="15" x2="80" y2="85" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="50%" stopColor="#94A3B8" />
            <stop offset="100%" stopColor="#475569" />
          </linearGradient>
          <linearGradient id="blueGrad" x1="50" y1="15" x2="82" y2="80" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#60A5FA" />
            <stop offset="50%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#1E3A8A" />
          </linearGradient>
        </defs>
      </svg>

      {showText && (
        <div className="flex flex-col leading-none">
          <span className={`font-sans font-extrabold uppercase text-white ${textSizes[size]}`}>
            AR <span className="text-[#3B82F6]">Studio</span>
          </span>
          <span className="text-[7.5px] tracking-[0.52em] uppercase text-zinc-500 font-mono mt-0.5 ml-0.5">
            Web Craftsmanship
          </span>
        </div>
      )}
    </div>
  );
}
