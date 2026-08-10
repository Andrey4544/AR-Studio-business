/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Facebook, Instagram, X } from 'lucide-react';

export default function FloatingSocialButtons() {
  const [isExpanded, setIsExpanded] = useState(false);

  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/share/18n7DfUWJW/',
      icon: Facebook,
      color: 'hover:text-blue-400 hover:bg-blue-500/10',
      hoverBg: 'group-hover:bg-blue-500/10'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/arstudio.site?igsh=MWVuejR2ZWVjd3c1cw==',
      icon: Instagram,
      color: 'hover:text-pink-400 hover:bg-pink-500/10',
      hoverBg: 'group-hover:bg-pink-500/10'
    },
    {
      name: 'TikTok',
      url: 'https://www.tiktok.com/@ar_studio_web?_r=1&_t=ZN-98m3jc1KODD',
      icon: () => (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.68v13.67a2.4 2.4 0 1 1-4.77-1.58A2.4 2.4 0 0 1 9.1 13.46v3.83a6.8 6.8 0 1 0 12.46 4s0-4.07-1.97-4.77z" />
        </svg>
      ),
      color: 'hover:text-white hover:bg-white/10',
      hoverBg: 'group-hover:bg-white/10'
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
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
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: index * 0.05 }}
                  className="group flex items-center gap-3"
                  title={social.name}
                >
                  {/* Label that appears on hover */}
                  <motion.span
                    initial={{ opacity: 0, x: 10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    className="px-3 py-2 bg-zinc-900/90 border border-white/10 rounded-lg text-xs font-medium text-zinc-300 whitespace-nowrap"
                  >
                    {social.name}
                  </motion.span>

                  {/* Icon Button */}
                  <motion.div
                    className={`p-3 rounded-lg bg-zinc-900/50 border border-white/10 text-zinc-400 transition-all ${social.color}`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.div>
                </motion.a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Toggle Button */}
      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        className="p-4 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-lg hover:shadow-blue-500/50 transition-all border border-blue-500/30"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        title="Social Media"
      >
        <AnimatePresence mode="wait">
          {isExpanded ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="2" />
                <circle cx="19" cy="12" r="2" />
                <circle cx="5" cy="12" r="2" />
              </svg>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
