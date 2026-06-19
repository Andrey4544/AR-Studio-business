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
      <img
        src="/assets/logo.png"
        alt="AR Studio Logo"
        className={`${sizeClasses[size]} shrink-0 object-contain`}
      />

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
