/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Facebook, Instagram, X, Share2, MessageCircle } from 'lucide-react';

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.06 3.42-.01 6.83-.02 10.25-.03 1.28-.31 2.59-.97 3.69-1.32 2.2-3.84 3.53-6.39 3.54-2.52.03-4.97-1.24-6.13-3.48-1.23-2.3-1.07-5.32.49-7.41 1.43-1.92 3.84-2.9 6.19-2.56.03-1.49-.02-2.98-.03-4.48-2.48-.36-5.02.29-6.96 1.87-2.3 1.82-3.5 4.88-3.06 7.82.46 3.48 3.12 6.46 6.56 7.18 3.5.76 7.33-1.08 8.84-4.3.7-1.5.81-3.21.78-4.87-.02-4.58-.01-9.17-.02-13.75z" />
  </svg>
);

const ViberIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.571 19.142c-2.344.62-4.757.94-7.214.94-2.457 0-4.87-.32-7.214-.94-.362-.095-.694-.265-.968-.501-.274-.236-.487-.534-.615-.873-.556-2.344-.94-4.757-.94-7.214 0-2.457.384-4.87.94-7.214.128-.339.341-.637.615-.873.274-.236.606-.406.968-.501 2.344-.62 4.757-.94 7.214-.94 2.457 0 4.87.32 7.214.94.362.095.694.265.968.501.274.236.487.534.615.873.556 2.344.94 4.757.94 7.214 0 2.457-.384 4.87-.94 7.214-.128.339-.341.637-.615.873-.274.236-.606.406-.968.501zm-5.571-15.142c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10zm5.5 13.5c-.28.77-1.11 1.25-1.89.97l-2.12-.76c-.78-.28-1.26-1.11-.98-1.89l.76-2.12c.28-.78 1.11-1.26 1.89-.98l2.12.76c.78.28 1.26 1.11.98 1.89l-.76 2.13zm-7-7c.28-.77 1.11-1.25 1.89-.97l2.12.76c.78.28 1.26 1.11.98 1.89l-.76 2.12c-.28.78-1.11 1.26-1.89.98l-2.12-.76c-.78-.28-1.26-1.11-.98-1.89l.76-2.13z" />
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
      color: 'text-white',
      bgColor: 'bg-[#1877F2]',
      borderColor: 'border-blue-300/60'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/arstudio.site?igsh=MWVuejR2ZWVjd3c1cw==',
      icon: Instagram,
      color: 'text-white',
      bgColor: 'bg-[#E1306C]',
      borderColor: 'border-pink-200/50'
    },
    {
      name: 'TikTok',
      url: 'https://www.tiktok.com/@ar_studio_web?_r=1&_t=ZN-98m3jc1KODD',
      icon: TikTokIcon,
      color: 'text-white',
      bgColor: 'bg-[#121212]',
      borderColor: 'border-white/30'
    },
    {
      name: 'Viber',
      url: 'viber://chat?number=+359888616641',
      icon: MessageCircle,
      color: 'text-white',
      bgColor: 'bg-[#7360F2]',
      borderColor: 'border-purple-200/50'
    }
  ];

  return (
    <>
      {/* Desktop Sidebar Version */}
      <div className="hidden lg:flex fixed right-0 top-1/2 -translate-y-1/2 flex-col items-end gap-2 z-50 pr-2">
        {socialLinks.map((social, index) => {
          const Icon = social.icon;
          const isHovered = hoveredIndex === index;
          
          return (
            <div key={social.name} className="relative flex h-14 items-center justify-end">
              <motion.a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`
                  flex items-center justify-end overflow-hidden rounded-l-2xl border-y border-l transition-colors duration-300
                  ${isHovered ? `${social.bgColor} ${social.borderColor} shadow-xl shadow-black/35` : 'border-white/10 bg-zinc-950'}
                `}
                initial={false}
                animate={{
                  width: isHovered ? '184px' : '56px'
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              >
                <div className="flex h-full w-[184px] items-center">
                  <div className="flex-grow overflow-hidden px-5">
                    <AnimatePresence>
                      {isHovered && (
                        <motion.span
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 10 }}
                          className={`block whitespace-nowrap text-base font-semibold tracking-wide ${social.color}`}
                        >
                          {social.name}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </div>
                  <div className={`flex h-14 w-14 shrink-0 items-center justify-center ${social.color}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                </div>
              </motion.a>
            </div>
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
              className="absolute bottom-20 right-0 flex flex-col items-end gap-4"
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
                    className="flex items-center justify-end gap-3.5"
                  >
                    <span className="whitespace-nowrap rounded-xl border border-white/15 bg-zinc-950 px-4 py-2.5 text-sm font-semibold text-white shadow-xl">
                      {social.name}
                    </span>
                    <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full border ${social.bgColor} ${social.borderColor} ${social.color} shadow-xl shadow-black/35`}>
                      <Icon className="h-6 w-6" />
                    </div>
                  </motion.a>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex h-16 w-16 items-center justify-center rounded-full border border-blue-400/30 bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-2xl"
          whileTap={{ scale: 0.9 }}
        >
          {isExpanded ? <X className="h-7 w-7" /> : <Share2 className="h-7 w-7" />}
        </motion.button>
      </div>
    </>
  );
}
