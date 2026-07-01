/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Check, ArrowUpRight, AlertCircle, Gift } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ServicesProps {
  onQuoteClick: (planName?: string) => void;
}

export default function Services({ onQuoteClick }: ServicesProps) {
  const [currency, setCurrency] = useState<'EUR' | 'BGN'>('EUR');
  const { pricingPlans, t, language } = useLanguage();

  // Helper converter for Bulgarian Lev (1 EUR = 2.0 BGN for simplicity)
  const formatPrice = (priceStr: string, activeCurrency: 'EUR' | 'BGN') => {
    const rawVal = parseInt(priceStr.replace(/[^0-9]/g, ''), 10);
    if (!rawVal) return priceStr;

    if (activeCurrency === 'BGN') {
      const bgnVal = Math.round(rawVal * 2.0);
      return `${bgnVal} лв`;
    }
    return priceStr;
  };

  // Filter pricing plans
  const webDesignPlans = pricingPlans.filter(p => !p.period && !p.bundle);
  const monthlyPlans = pricingPlans.filter(p => p.period && !p.bundle);
  const bundlePlans = pricingPlans.filter(p => p.bundle);

  return (
    <section className="py-24 bg-luxury-black relative overflow-hidden border-t border-white/5">
      {/* Ambient background glows */}
      <div className="absolute top-[20%] left-[-15%] w-[400px] h-[400px] rounded-full bg-blue-900/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-15%] w-[400px] h-[400px] rounded-full bg-indigo-900/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span className="text-[10px] font-mono tracking-widest uppercase text-blue-400 font-semibold">
              {language === 'en' ? 'TRANSPARENT ESTIMATES' : 'ПРОЗРАЧНИ ЦЕНИ'}
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
            {language === 'en' ? (
              <>
                Plans Suited For <br />
                <span className="bg-gradient-to-r from-zinc-100 via-zinc-400 to-zinc-600 bg-clip-text text-transparent">
                  Every Local Ambition
                </span>
              </>
            ) : (
              <>
                Планове, подходящи за <br />
                <span className="bg-gradient-to-r from-zinc-100 via-zinc-400 to-zinc-600 bg-clip-text text-transparent">
                  всеки бизнес проект
                </span>
              </>
            )}
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mb-8">
            {t('servicesDesc')}
          </p>

          {/* Currency Toggle */}
          <div className="inline-flex items-center gap-1.5 bg-zinc-950 border border-white/5 p-1 rounded-full">
            <button
              onClick={() => setCurrency('EUR')}
              className={`px-4 py-1.5 rounded-full text-[10px] font-mono tracking-wider uppercase transition-all duration-300 ${
                currency === 'EUR' ? 'bg-blue-600 text-white font-semibold' : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              {language === 'en' ? 'Euro (€)' : 'Евро (€)'}
            </button>
            <button
              onClick={() => setCurrency('BGN')}
              className={`px-4 py-1.5 rounded-full text-[10px] font-mono tracking-wider uppercase transition-all duration-300 ${
                currency === 'BGN' ? 'bg-blue-600 text-white font-semibold' : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              {language === 'en' ? 'Bulgarian Lev (лв)' : 'Български лев (лв)'}
            </button>
          </div>
        </div>

        {/* Section 1: Web Design & Engineering */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-10 border-b border-white/5 pb-4">
            <span className="text-xs font-mono font-bold tracking-widest text-[#3B82F6] uppercase">
              {language === 'en' ? '01 // Digital Platforms' : '01 // Дигитални платформи'}
            </span>
            <span className="text-xs text-zinc-500">
              {language === 'en' ? '(One-time engineering cost)' : '(Еднократна инвестиция за разработка)'}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {webDesignPlans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6, scale: 1.015 }}
                className={`relative flex flex-col justify-between rounded-2xl p-8 border ${
                  plan.popular
                    ? 'bg-zinc-950/60 border-blue-500/30 shadow-xl shadow-blue-500/5 glow-blue'
                    : 'bg-zinc-900/30 border-white/5'
                } transition-all duration-300 hover:border-white/15`}
              >
                {plan.popular && (
                  <span className="absolute top-4 right-4 bg-blue-600 text-white text-[10px] uppercase font-mono font-bold tracking-wider px-3 py-1 rounded-full">
                    {language === 'en' ? 'Best Value' : 'Най-добра сделка'}
                  </span>
                )}

                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight">{plan.name}</h3>
                  <p className="text-zinc-400 text-xs min-h-[36px] line-clamp-2 leading-relaxed mb-6 border-b border-white/5 pb-4 font-sans">
                    {plan.scope}
                  </p>

                  <div className="flex items-baseline gap-1.5 mb-8">
                    <span className="text-3xl sm:text-4xl font-bold font-mono tracking-tight text-white transition-all">
                      {formatPrice(plan.price, currency)}
                    </span>
                    <span className="text-xs text-zinc-500 font-medium">
                      {language === 'en' ? 'starting' : 'начална цена'}
                    </span>
                  </div>

                  <ul className="space-y-3.5 mb-8">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300 font-sans leading-relaxed">
                        <Check className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => onQuoteClick(plan.name)}
                  className={`w-full py-3.5 rounded-xl font-semibold text-xs transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer ${
                    plan.popular
                      ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-xl shadow-blue-600/10'
                      : 'bg-zinc-900 hover:bg-zinc-850 text-white border border-white/5'
                  }`}
                >
                  <span>{language === 'en' ? `Select ${plan.name}` : `Избери ${plan.name}`}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section 2: Continuous Performance & Growth Packages */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-10 border-b border-white/5 pb-4">
            <span className="text-xs font-mono font-bold tracking-widest text-[#3B82F6] uppercase">
              {language === 'en' ? '02 // Growth & Maintenance' : '02 // Поддръжка и развитие'}
            </span>
            <span className="text-xs text-zinc-500">
              {language === 'en' ? '(Monthly retention subscriptions)' : '(Месечни абонаменти)'}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {monthlyPlans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6, scale: 1.015 }}
                className={`relative flex flex-col justify-between rounded-2xl p-8 border ${
                  plan.id === 'combo'
                    ? 'bg-zinc-950/60 border-blue-500/30 shadow-xl shadow-blue-500/5 glow-blue'
                    : 'bg-zinc-900/30 border-white/5'
                } transition-all duration-300 hover:border-white/15`}
              >
                {plan.id === 'combo' && (
                  <span className="absolute top-4 right-4 bg-blue-600 text-white text-[10px] uppercase font-mono font-bold tracking-wider px-3 py-1 rounded-full">
                    {language === 'en' ? 'Most Popular Combo' : 'Най-популярен избор'}
                  </span>
                )}

                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight">{plan.name}</h3>
                  <p className="text-zinc-400 text-xs min-h-[36px] line-clamp-2 leading-relaxed mb-6 border-b border-white/5 pb-4">
                    {plan.scope}
                  </p>

                  <div className="flex items-baseline gap-1.5 mb-8">
                    <span className="text-3xl sm:text-4xl font-bold font-mono tracking-tight text-white">
                      {formatPrice(plan.price, currency)}
                    </span>
                    <span className="text-xs text-zinc-500 font-mono">
                      / {language === 'en' ? plan.period : (plan.period === 'month' ? 'месец' : plan.period)}
                    </span>
                  </div>

                  <ul className="space-y-3.5 mb-8">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300 font-sans leading-relaxed">
                        <Check className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => onQuoteClick(plan.name)}
                  className={`w-full py-3.5 rounded-xl font-semibold text-xs transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer ${
                    plan.id === 'combo'
                      ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-xl shadow-blue-600/10'
                      : 'bg-zinc-900 hover:bg-zinc-850 text-white border border-white/5'
                  }`}
                >
                  <span>{language === 'en' ? 'Select Package' : 'Избери план'}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section 3: Luxury Bundles (MOVED TO BOTTOM) */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-10 border-b border-white/5 pb-4">
            <Gift className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-mono font-bold tracking-widest text-emerald-400 uppercase">
              {language === 'en' ? 'Exclusive // Luxury Bundles' : 'Ексклузивно // Пакетни предложения'}
            </span>
            <span className="text-xs text-zinc-500">
              {language === 'en' ? '(Best value for new brands)' : '(Най-добра стойност за нови брандове)'}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {bundlePlans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6, scale: 1.015 }}
                className={`relative flex flex-col justify-between rounded-2xl p-8 border ${
                  plan.popular
                    ? 'bg-emerald-950/10 border-emerald-500/30 shadow-xl shadow-emerald-500/5'
                    : 'bg-zinc-900/30 border-white/5'
                } transition-all duration-300 hover:border-white/15`}
              >
                {plan.popular && (
                  <span className="absolute top-4 right-4 bg-emerald-600 text-white text-[10px] uppercase font-mono font-bold tracking-wider px-3 py-1 rounded-full">
                    {language === 'en' ? 'Most Popular' : 'Най-популярен'}
                  </span>
                )}

                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight">{plan.name}</h3>
                  <p className="text-zinc-400 text-xs min-h-[36px] line-clamp-2 leading-relaxed mb-6 border-b border-white/5 pb-4">
                    {plan.scope}
                  </p>

                  <div className="flex items-baseline gap-1.5 mb-8">
                    <span className="text-3xl sm:text-4xl font-bold font-mono tracking-tight text-white transition-all">
                      {formatPrice(plan.price, currency)}
                    </span>
                    <span className="text-xs text-emerald-400 font-medium">
                      {language === 'en' ? 'bundle price' : 'пакетна цена'}
                    </span>
                  </div>

                  <ul className="space-y-3.5 mb-8">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300 font-sans leading-relaxed">
                        <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span className={feat.includes('Save') || feat.includes('Спестявате') ? 'text-emerald-400 font-bold' : ''}>
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => onQuoteClick(plan.name)}
                  className={`w-full py-3.5 rounded-xl font-semibold text-xs transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer ${
                    plan.popular
                      ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-600/10'
                      : 'bg-zinc-900 hover:bg-zinc-850 text-white border border-white/5'
                  }`}
                >
                  <span>{language === 'en' ? 'Claim Bundle' : 'Вземи пакета'}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Free consultation micro banner */}
        <div className="mt-16 glass-panel rounded-2xl border border-white/5 p-8 flex flex-col md:flex-row items-center justify-between gap-6 glow-blue">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center shrink-0">
              <AlertCircle className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <h4 className="font-semibold text-white text-sm">
                {language === 'en' 
                  ? 'Need a fully customized, multi-language enterprise web solution?' 
                  : 'Имате нужда от напълно индивидуален, многоезичен корпоративен сайт?'}
              </h4>
              <p className="text-zinc-400 text-xs mt-1">
                {language === 'en' 
                  ? 'Andrey, Rumen & Nikolay offer direct architecture calls to draft bespoke designs.' 
                  : 'Андрей, Румен и Николай предлагат директни безплатни консултации за обсъждане на Вашите изисквания.'}
              </p>
            </div>
          </div>
          <button
            onClick={() => onQuoteClick('Custom Consultation')}
            className="w-full md:w-auto px-6 py-3 bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-semibold rounded-xl border border-white/10 transition-colors cursor-pointer"
          >
            {language === 'en' ? 'Schedule Free Strategy Call' : 'Насрочи безплатна консултация'}
          </button>
        </div>

      </div>
    </section>
  );
}
