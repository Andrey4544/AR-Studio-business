/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Hotel, Scale, Sparkles, Compass, ShoppingBag, Wine, Trophy } from 'lucide-react';

export default function TrustedMarquee() {
  const { language } = useLanguage();

  const brandLogos = [
    { name: language === 'en' ? 'Tomato Ristorante' : 'Ресторант Tomato', icon: Wine, industry: language === 'en' ? 'Premium Dining' : 'Италиански ресторант' },
    { name: language === 'en' ? 'Boutique Hotel Old Plovdiv' : 'Стария Пловдив Хотел', icon: Hotel, industry: language === 'en' ? 'Hospitality' : 'Бутиков туризъм' },
    { name: language === 'en' ? 'Aura Beauty Salon' : 'Естетичен Салон Aura', icon: Sparkles, industry: language === 'en' ? 'Cosmetic Center' : 'Козметичен център' },
    { name: language === 'en' ? 'Vasilev Legal Counsel' : 'Адвокати Василев', icon: Scale, industry: language === 'en' ? 'Corporate Law' : 'Корпоративно право' },
    { name: language === 'en' ? 'Plovdiv Plaza' : 'Пловдив Плаза Мол', icon: Trophy, industry: language === 'en' ? 'Retail Entity' : 'Търговски център' },
    { name: language === 'en' ? 'Compass Logistics' : 'Компас Логистика', icon: Compass, industry: language === 'en' ? 'Global Freight' : 'Международен транспорт' },
    { name: language === 'en' ? 'Orpheus Vineyards' : 'Винарна Орфей', icon: Wine, industry: language === 'en' ? 'Winery Estates' : 'Винарски изби' },
    { name: language === 'en' ? 'Plaza Boutique' : 'Бутик Plaza', icon: ShoppingBag, industry: language === 'en' ? 'High Fashion' : 'Бутикова мода' },
  ];

  // Multiple duplicates to guarantee smooth offset coverage during linear wrapping
  const marqueeItems = [...brandLogos, ...brandLogos, ...brandLogos];

  return (
    <div className="py-12 bg-zinc-950/20 border-y border-white/5 relative overflow-hidden select-none w-full">
      <div className="max-w-7xl mx-auto px-4 text-center mb-6">
        <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-zinc-500 font-bold block">
          {language === 'en' ? 'AGENCY CREDIBILITY' : 'ДОВЕРИЕ И РЕПУТАЦИЯ'}
        </span>
        <h3 className="text-sm font-sans tracking-tight text-zinc-400 mt-2">
          {language === 'en' 
            ? 'Bespoke web designs trusted by successful Bulgarian brands & local enterprises' 
            : 'Професионални уеб проекти, подкрепени от доверието на успешни български марки'}
        </h3>
      </div>

      <div className="relative w-full overflow-hidden flex items-center hover-pause py-4">
        {/* Left Blurred Shadow Overlay */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
        
        {/* Continuous Marquee Container */}
        <div className="flex w-full overflow-hidden">
          <div className="animate-marquee flex gap-12 sm:gap-20 whitespace-nowrap items-center">
            {marqueeItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="inline-flex items-center gap-2.5 opacity-45 hover:opacity-100 transition-all duration-300 transform hover:scale-105 cursor-default group"
                >
                  <div className="h-9 w-9 rounded-lg bg-zinc-900/60 border border-white/5 flex items-center justify-center text-zinc-400 group-hover:text-blue-400 group-hover:border-blue-500/30 transition-all">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-white text-sm font-semibold tracking-tight font-sans">
                      {item.name}
                    </span>
                    <span className="text-zinc-500 text-[10px] font-mono font-bold tracking-wider uppercase">
                      {item.industry}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Blurred Shadow Overlay */}
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />
      </div>
    </div>
  );
}
