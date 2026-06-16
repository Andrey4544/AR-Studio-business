/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Quote, Star } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Testimonials() {
  const { testimonials, language, t } = useLanguage();

  return (
    <section className="py-24 bg-luxury-black relative overflow-hidden border-t border-white/5">
      {/* Background Decorative overlays */}
      <div className="absolute top-[20%] right-[-10%] w-[350px] h-[350px] rounded-full bg-blue-900/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span className="text-[10px] font-mono tracking-widest uppercase text-blue-400 font-semibold">
              {t('testimonialsSubTitle')}
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
            {language === 'en' ? (
              <>
                Loved By Local <br />
                <span className="bg-gradient-to-r from-zinc-100 via-zinc-400 to-zinc-600 bg-clip-text text-transparent">
                  Bulgarian Entrepreneurs
                </span>
              </>
            ) : (
              <>
                Обичани от местния <br />
                <span className="bg-gradient-to-r from-zinc-100 via-zinc-400 to-zinc-600 bg-clip-text text-transparent">
                  български бизнес
                </span>
              </>
            )}
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            {t('testimonialsDesc')}
          </p>
        </div>

        {/* Testimonials Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((review, idx) => (
            <div
              key={review.id}
              className="relative rounded-2xl p-8 border bg-zinc-900/30 border-white/5 hover:border-white/10 hover:bg-zinc-950/40 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Quote Icon Graphic */}
              <div className="absolute top-6 right-8 text-blue-500/10 select-none pointer-events-none">
                <Quote className="w-12 h-12" />
              </div>

              <div>
                {/* 5-Star Ratings */}
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-zinc-300 text-xs sm:text-sm italic leading-relaxed mb-6 font-sans">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-5 border-t border-white/5 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-white font-sans text-sm sm:text-base leading-none">{review.name}</h4>
                  <span className="text-xs text-zinc-500 mt-1.5 inline-block">{review.role}</span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-mono font-bold text-blue-400 bg-blue-500/5 px-3 py-1 rounded-full border border-blue-500/10">
                    {review.company}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
