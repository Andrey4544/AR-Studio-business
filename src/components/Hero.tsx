/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Flame, MapPin, Star } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { localizedPath } from '../lib/localizedRoutes';

interface HeroProps {
  onQuoteClick: () => void;
  onWorkClick: () => void;
  onAboutClick: () => void;
}

export default function Hero({ onQuoteClick, onWorkClick, onAboutClick }: HeroProps) {
  const { language, t } = useLanguage();
  const isEnglish = language === 'en';

  const heroTitle = isEnglish
    ? ['A digital presence', 'with character', 'built for growth']
    : ['Дигитално присъствие', 'с характер', 'създадено за растеж'];

  const stats = isEnglish
    ? [
        { value: '3–7', suffix: 'Days', label: 'Fast, focused delivery' },
        { value: 'SEO', suffix: 'ready', label: 'Technical foundation' },
        { value: '€250', suffix: 'from', label: 'Accessible starting rate' },
        { value: '€0', suffix: 'upfront', label: 'Start without a deposit' },
      ]
    : [
        { value: '3–7', suffix: 'дни', label: 'Бърза и фокусирана изработка' },
        { value: 'SEO', suffix: 'ready', label: 'Техническа основа' },
        { value: '€250', suffix: 'от', label: 'Достъпна начална цена' },
        { value: '€0', suffix: 'аванс', label: 'Старт без авансово плащане' },
      ];

  return (
    <section className="relative isolate flex min-h-[760px] items-center overflow-hidden bg-[#07111b] pt-28 pb-24 sm:min-h-screen sm:pt-32">
      {/* Full-bleed photographic visual. The source is local and versioned with the project. */}
      <img
        src="/assets/ar-studio-hero-chalet.jpg"
        alt={isEnglish ? 'Warmly lit mountain chalet at blue hour' : 'Топло осветена планинска хижа в синия час'}
        className="absolute inset-0 -z-30 h-full w-full object-cover object-[61%_center]"
        fetchPriority="high"
        decoding="async"
      />

      {/* Layered overlays keep the reference image mood while preserving readable HTML text. */}
      <div className="absolute inset-0 -z-20 bg-[#06101a]/20" />
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(3,12,22,0.45)_0%,rgba(4,15,25,0.24)_42%,rgba(4,12,20,0.08)_76%,rgba(3,8,14,0.36)_100%)]" />
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,rgba(2,8,14,0.36)_0%,rgba(2,8,14,0.06)_30%,rgba(2,8,14,0.03)_55%,rgba(2,8,14,0.48)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-44 bg-gradient-to-t from-[#05080c]/85 via-[#05080c]/35 to-transparent" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_52%_40%,rgba(214,172,72,0.12),transparent_28%)]" />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
          {/* Reference-style trust badge */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#d1aa4f]/45 bg-[#0b1720]/75 px-4 py-2 text-[10px] font-semibold tracking-[0.08em] text-zinc-100 shadow-[0_8px_24px_rgba(0,0,0,0.2)] backdrop-blur-md sm:text-xs"
          >
            <Star className="h-3.5 w-3.5 fill-[#e2bb57] text-[#e2bb57]" />
            <span>{isEnglish ? 'Premium web design · Plovdiv, Bulgaria' : 'Премиум уеб дизайн · Пловдив, България'}</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08 }}
            className="max-w-4xl"
          >
            <p className="mb-4 flex items-center justify-center gap-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#e0bb63] sm:text-xs">
              <MapPin className="h-3.5 w-3.5" />
              {isEnglish ? 'AR Studio · Crafted in Plovdiv' : 'AR Studio · Създадено в Пловдив'}
            </p>

            <h1 className="font-serif text-[3rem] font-semibold leading-[0.98] tracking-[-0.045em] text-white drop-shadow-[0_4px_28px_rgba(0,0,0,0.45)] sm:text-6xl lg:text-[5.45rem]">
              {heroTitle.map((line, index) => (
                <React.Fragment key={line}>
                  <span className={index === 1 ? 'text-[#f2f0e9]' : 'text-white'}>{line}</span>
                  {index < heroTitle.length - 1 && <br />}
                </React.Fragment>
              ))}
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-7 max-w-2xl text-sm leading-7 text-zinc-200/85 sm:text-base sm:leading-8 lg:text-lg"
          >
            {t('heroSub')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28 }}
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <button
              type="button"
              onClick={onQuoteClick}
              className="group inline-flex min-w-52 items-center justify-center gap-2 rounded-xl bg-[#d2ad52] px-6 py-3.5 text-sm font-bold text-[#17130a] shadow-[0_12px_30px_rgba(0,0,0,0.24)] transition-all duration-200 hover:bg-[#ebc866] active:scale-[0.98]"
            >
              {t('freeQuote')}
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </button>
            <button
              type="button"
              onClick={onWorkClick}
              className="group inline-flex min-w-52 items-center justify-center gap-2 rounded-xl border border-white/20 bg-[#0b1821]/72 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all duration-200 hover:border-[#dfbb62]/65 hover:bg-[#102532]/85 active:scale-[0.98]"
            >
              {t('viewWork')}
              <ArrowRight className="h-4 w-4 text-[#e0bb63] transition-transform duration-200 group-hover:translate-x-0.5" />
            </button>
          </motion.div>

          <Link
            to={localizedPath('/za-nas', language)}
            onClick={onAboutClick}
            className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-zinc-200/75 underline decoration-white/25 underline-offset-4 transition-colors hover:text-white"
          >
            <Flame className="h-3.5 w-3.5 text-[#e0bb63]" />
            {isEnglish ? 'Meet the people behind the studio' : 'Запознайте се с екипа зад студиото'}
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.38 }}
          className="relative z-10 mx-auto mt-16 grid max-w-5xl grid-cols-2 gap-2.5 sm:mt-20 sm:grid-cols-4 sm:gap-3"
        >
          {stats.map((stat) => (
            <div
              key={`${stat.value}-${stat.suffix}`}
              className="rounded-xl border border-white/15 bg-[#091721]/70 px-4 py-4 text-left shadow-[0_10px_26px_rgba(0,0,0,0.18)] backdrop-blur-md sm:px-5 sm:py-5"
            >
              <div className="flex items-baseline gap-1.5 text-white">
                <span className="font-mono text-xl font-semibold tracking-tight sm:text-2xl">{stat.value}</span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#e0bb63]">{stat.suffix}</span>
              </div>
              <p className="mt-1.5 text-[10px] leading-4 text-zinc-300/70 sm:text-xs">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-5 left-1/2 z-10 hidden -translate-x-1/2 items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.22em] text-zinc-300/55 sm:flex">
        <span className="h-px w-10 bg-white/25" />
        {isEnglish ? 'Explore the studio' : 'Разгледайте студиото'}
        <span className="h-px w-10 bg-white/25" />
      </div>
    </section>
  );
}
