import React from 'react';
import { motion } from 'motion/react';

export const TrustedMarquee: React.FC = () => {
  const brands = [
    { name: 'STRIPE', icon: '💳' },
    { name: 'FIGMA', icon: '🎨' },
    { name: 'VERCEL', icon: '▲' },
    { name: 'NEXT.JS', icon: '⌨' },
    { name: 'OPENAI', icon: '🦾' },
    { name: 'AWS', icon: '☁' },
    { name: 'FORBES', icon: '✦' },
    { name: 'TECHCRUNCH', icon: '⚡' },
  ];

  return (
    <section className="py-12 border-y border-white/5 bg-zinc-950/20 relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 mb-4">
        <p className="text-center font-mono text-[9px] tracking-[0.3em] uppercase text-zinc-500">
          INTEGRATION READY & ENTERPRISE COMPLIANT
        </p>
      </div>

      <div className="flex overflow-hidden">
        {/* Dual tracks for seamless infinite looping */}
        <div className="flex gap-20 animate-marquee whitespace-nowrap min-w-full">
          {brands.concat(brands).map((brand, index) => (
            <div
              key={index}
              className="flex items-center gap-2.5 text-zinc-600 hover:text-zinc-400 transition-colors duration-300"
            >
              <span className="text-[14px]">{brand.icon}</span>
              <span className="font-mono text-xs font-bold tracking-[0.25em]">{brand.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Styled inline animation for marquee */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </section>
  );
};
export default TrustedMarquee;
