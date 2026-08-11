/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Facebook, Instagram, X } from 'lucide-react';

export default function FloatingSocialButtons() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState<string | null>(null);

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
      icon: () => (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.68v13.67a2.4 2.4 0 1 1-4.77-1.58A2.4 2.4 0 0 1 9.1 13.46v3.83a6.8 6.8 0 1 0 12.46 4s0-4.07-1.97-4.77z" />
        </svg>
      ),
      color: 'text-white',
      bgColor: 'bg-white/10',
      borderColor: 'border-white/20'
    }
  ];

  return (
    <>
      {/* Desktop Sidebar Version */}
      <div className="hidden lg:flex fixed right-0 top-1/2 -translate-y-1/2 flex-col gap-2 z-50 pr-2">
        {socialLinks.map((social) => {
          const Icon = social.icon;
          const isActive = activeTab === social.name;
          
          return (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setActiveTab(social.name)}
              onMouseLeave={() => setActiveTab(null)}
              onClick={() => setActiveTab(isActive ? null : social.name)}
              className={`flex items-center justify-end group relative transition-all duration-300`}
              initial={false}
              animate={{
                width: isActive ? '160px' : '48px'
              }}
            >
              <div className={`
                flex items-center w-full h-12 rounded-l-xl border-y border-l backdrop-blur-md transition-all duration-300
                ${isActive ? `${social.bgColor} ${social.borderColor} shadow-lg shadow-black/20` : 'bg-zinc-900/40 border-white/5'}
              `}>
                <AnimatePresence>
                  {isActive && (
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
          className="p-4 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-2xl border border-blue-400/30"
          whileTap={{ scale: 0.9 }}
        >
          {isExpanded ? <X className="w-6 h-6" /> : (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="2" />
              <circle cx="19" cy="12" r="2" />
              <circle cx="5" cy="12" r="2" />
            </svg>
          )}
        </motion.button>
      </div>
    </>
  );
}
