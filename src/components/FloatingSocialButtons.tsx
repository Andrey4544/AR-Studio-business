/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Facebook, Instagram, X, Share2 } from 'lucide-react';

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.06 3.42-.01 6.83-.02 10.25-.03 1.28-.31 2.59-.97 3.69-1.32 2.2-3.84 3.53-6.39 3.54-2.52.03-4.97-1.24-6.13-3.48-1.23-2.3-1.07-5.32.49-7.41 1.43-1.92 3.84-2.9 6.19-2.56.03-1.49-.02-2.98-.03-4.48-2.48-.36-5.02.29-6.96 1.87-2.3 1.82-3.5 4.88-3.06 7.82.46 3.48 3.12 6.46 6.56 7.18 3.5.76 7.33-1.08 8.84-4.3.7-1.5.81-3.21.78-4.87-.02-4.58-.01-9.17-.02-13.75z" />
  </svg>
);

export default function FloatingSocialButtons() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/share/18n7DfUWJW/',
      icon: Facebook,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/arstudio.site?igsh=MWVuejR2ZWVjd3c1cw==',
      icon: Instagram,
      color: 'text-pink-400',
      bgColor: 'bg-pink-500/10',
      borderColor: 'border-pink-500/20'
    },
    {
      name: 'TikTok',
      url: 'https://www.tiktok.com/@ar_studio_web?_r=1&_t=ZN-98m3jc1KODD',
      icon: TikTokIcon,
      color: 'text-white',
      bgColor: 'bg-white/10',
      borderColor: 'border-white/20'
    }
  ];

  return (
    <>
      {/* Desktop Sidebar Version */}
      <div className="hidden lg:flex fixed right-0 top-1/2 -translate-y-1/2 flex-col gap-2 z-50 pr-2">
        {socialLinks.map((social, index) => {
          const Icon = social.icon;
          const isHovered = hoveredIndex === index;
          
          return (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="flex items-center justify-end group relative"
              initial={false}
              animate={{
                width: isHovered ? '160px' : '48px'
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <div className={`
                flex items-center w-full h-12 rounded-l-xl border-y border-l backdrop-blur-md transition-colors duration-300
                ${isHovered ? `${social.bgColor} ${social.borderColor} shadow-lg shadow-black/20` : 'bg-zinc-900/40 border-white/5'}
              `}>
                <AnimatePresence>
                  {isHovered && (
                    <motion.span
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className={`flex-grow pl-4 text-sm font-semibold tracking-wide ${social.color}`}
                    >
                      {social.name}
                    </motion.span>
                  )}
                </AnimatePresence>
                <div className={`flex items-center justify-center w-12 h-12 shrink-0 ${social.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
              </div>
            </motion.a>
          );
        })}
      </div>

      {/* Mobile Toggle Version */}
      <div className="lg:hidden fixed bottom-6 right-6 z-40">
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="absolute bottom-16 right-0 flex flex-col gap-3"
            >
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ delay: index * 0.05 }}
                    className="group flex items-center gap-3"
                  >
                    <span className="px-3 py-2 bg-zinc-900/90 border border-white/10 rounded-lg text-xs font-medium text-zinc-300 shadow-xl">
                      {social.name}
                    </span>
                    <div className={`p-3 rounded-full bg-zinc-900/80 border border-white/10 ${social.color} shadow-xl`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </motion.a>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-4 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-2xl border border-blue-400/30 flex items-center justify-center"
          whileTap={{ scale: 0.9 }}
        >
          {isExpanded ? <X className="w-6 h-6" /> : <Share2 className="w-6 h-6" />}
        </motion.button>
      </div>
    </>
  );
}
