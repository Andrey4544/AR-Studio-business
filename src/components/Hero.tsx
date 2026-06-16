/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Zap, Shield, HelpCircle, Trophy, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import TechBackground from './TechBackground';

interface HeroProps {
  onQuoteClick: () => void;
  onWorkClick: () => void;
  onAboutClick: () => void;
}

export default function Hero({ onQuoteClick, onWorkClick, onAboutClick }: HeroProps) {
  const { language, t } = useLanguage();

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-radial from-blue-950/10 via-luxury-black to-luxury-black">
      {/* Dynamic Technology Constellation Canvas Background */}
      <TechBackground />

      {/* Background Decorative Radial Glows */}
      <div className="absolute top-[20%] left-[10%] w-[250px] sm:w-[450px] h-[250px] sm:h-[450px] rounded-full bg-blue-600/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[5%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full bg-indigo-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[linear-gradient(to_right,#1f293708_1px,transparent_1px),linear-gradient(to_bottom,#1f293708_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
        {/* Bulgaria Pride Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/60 border border-white/5 backdrop-blur-sm mb-8"
        >
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="flex h-2 w-3 rounded-sm bg-gradient-to-b from-white via-green-600 to-red-600 border border-white/10" title="Proudly Bulgaria" />
          <span className="text-[10px] font-mono tracking-wider uppercase text-zinc-400">
            {language === 'en' ? 'Plovdiv, Bulgaria • Leading Web Agency' : 'Пловдив, България • Лидер в изработката на уебсайтове'}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-none mb-4">
            <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent silver-chrome">
              AR Studio
            </span>
          </h1>
          <div className="font-mono text-xs sm:text-sm lg:text-base tracking-[0.22em] uppercase text-blue-400 font-semibold mb-8 glow-blue-text">
            {language === 'en' ? '#1 website designers' : '#1 уеб дизайнери'}
          </div>
        </motion.div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto text-base sm:text-lg lg:text-xl text-zinc-400 leading-relaxed font-sans mb-10"
        >
          {t('heroSub')}
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <button
            onClick={onQuoteClick}
            className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-zinc-200 text-luxury-black font-semibold text-sm rounded-full transition-all duration-300 shadow-xl shadow-white/5 hover:scale-[1.02] active:scale-[0.98]"
          >
            {t('freeQuote')}
          </button>
          <button
            onClick={onWorkClick}
            className="w-full sm:w-auto px-8 py-4 bg-zinc-950 hover:bg-zinc-900 border border-white/10 hover:border-white/20 text-white font-medium text-sm rounded-full transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-2 group hover:scale-[1.02]"
          >
            <span>{t('viewWork')}</span>
            <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        {/* Trust Stats Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          <div className="glass-panel p-6 rounded-2xl border border-white/5 flex flex-col items-center justify-center text-center">
            <span className="text-3xl font-bold font-mono tracking-tight text-white mb-1">
              3-7{" "}
              <span className="text-xs font-sans text-blue-400 font-normal">
                {language === 'en' ? 'Days' : 'Дни'}
              </span>
            </span>
            <span className="text-[10px] uppercase font-mono tracking-wider text-zinc-500">
              {language === 'en' ? '⚡ Ultra Fast Delivery' : '⚡ Изключително бърза изработка'}
            </span>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-white/5 flex flex-col items-center justify-center text-center">
            <span className="text-3xl font-bold font-mono tracking-tight text-white mb-1">
              98%
            </span>
            <span className="text-[10px] uppercase font-mono tracking-wider text-zinc-500">
              {language === 'en' ? '🚀 Google PageSpeed Score' : '🚀 Оценка на Спийд в Google'}
            </span>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-white/5 flex flex-col items-center justify-center text-center">
            <span className="text-3xl font-bold font-mono tracking-tight text-white mb-1">
              €250
            </span>
            <span className="text-[10px] uppercase font-mono tracking-wider text-zinc-500">
              {language === 'en' ? '💰 Highly Affordable starting rate' : '💰 Изгодна начална цена'}
            </span>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-white/5 flex flex-col items-center justify-center text-center col-span-2 lg:col-span-1">
            <span className="text-3xl font-bold font-mono tracking-tight text-white mb-1">
              100%{" "}
              <span className="text-xs font-sans text-emerald-400 font-normal">
                No-Risk
              </span>
            </span>
            <span className="text-[10px] uppercase font-mono tracking-wider text-zinc-500">
              {language === 'en' ? '🤝 Pay Only When Thrilled' : '🤝 Плащане само при одобрение'}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
