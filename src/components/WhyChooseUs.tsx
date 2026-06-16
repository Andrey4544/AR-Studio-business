/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, HelpingHand, ShieldCheck, Zap, UserCheck, MessageCircle, DollarSign } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

// Helper to resolve benefit icons dynamically
const getBenefitIcon = (id: string) => {
  switch (id) {
    case 'fast-completion':
      return <Zap className="w-5 h-5 text-blue-400" />;
    case 'affordable-luxury':
      return <DollarSign className="w-5 h-5 text-blue-400" />;
    case 'direct-communication':
      return <MessageCircle className="w-5 h-5 text-blue-400" />;
    case 'modern-tech':
      return <ShieldCheck className="w-5 h-5 text-blue-400" />;
    case 'personalized-service':
      return <UserCheck className="w-5 h-5 text-blue-400" />;
    case 'zero-risk-payment':
      return <HelpingHand className="w-5 h-5 text-blue-400" />;
    default:
      return <Sparkles className="w-5 h-5 text-blue-400" />;
  }
};

export default function WhyChooseUs() {
  const { benefits, language, t } = useLanguage();

  return (
    <section className="py-24 bg-luxury-black relative overflow-hidden border-t border-white/5">
      {/* Decorative Gradient Overlays */}
      <div className="absolute bottom-[10%] left-[10%] w-[350px] h-[350px] rounded-full bg-blue-900/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span className="text-[10px] font-mono tracking-widest uppercase text-blue-400 font-semibold">
              {t('whyUsSubTitle')}
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
            {language === 'en' ? (
              <>
                Our Business Model <br />
                <span className="bg-gradient-to-r from-zinc-100 via-zinc-400 to-zinc-600 bg-clip-text text-transparent">
                  Built Entirely On Trust
                </span>
              </>
            ) : (
              <>
                Бизнес модел, изграден <br />
                <span className="bg-gradient-to-r from-zinc-100 via-zinc-400 to-zinc-600 bg-clip-text text-transparent">
                  изцяло на взаимно доверие
                </span>
              </>
            )}
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            {t('whyUsDesc')}
          </p>
        </motion.div>

        {/* Benefits Grid - Bento Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            // Highlight the "No payment until approved" benefit as particularly luxury/premium
            const isZeroRisk = benefit.id === 'zero-risk-payment';

            return (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -6, scale: 1.015 }}
                className={`relative rounded-2xl p-8 border transition-all duration-300 ${
                  isZeroRisk
                    ? 'bg-zinc-950/75 border-blue-500/35 glow-blue lg:col-span-1 md:col-span-2'
                    : 'bg-zinc-900/30 border-white/5 hover:border-white/10'
                }`}
              >
                {/* Visual marker line */}
                <div className={`absolute top-0 left-0 w-12 h-1 rounded-tr-lg rounded-tl-lg ${
                  isZeroRisk ? 'bg-gradient-to-r from-blue-500 to-indigo-500' : 'bg-transparent'
                }`} />

                {/* Card Icon Header Area */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`h-11 w-11 rounded-xl flex items-center justify-center shrink-0 ${
                    isZeroRisk ? 'bg-blue-600/15 border border-blue-500/25' : 'bg-zinc-950/70 border border-white/5'
                  }`}>
                    {getBenefitIcon(benefit.id)}
                  </div>
                  <div>
                    <h3 className="text-sm font-mono text-zinc-500 uppercase tracking-wider">
                      {language === 'en' ? `Advantage 0${index + 1}` : `Предимство 0${index + 1}`}
                    </h3>
                  </div>
                </div>

                {/* Typography info */}
                <h4 className={`text-base font-bold tracking-tight mb-3 font-sans ${
                  isZeroRisk ? 'text-blue-400' : 'text-white'
                }`}>
                  {benefit.title}
                </h4>
                
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-sans font-medium">
                  {benefit.description}
                </p>

                {/* Sparkle graphics for zero risk */}
                {isZeroRisk && (
                  <span className="absolute bottom-4 right-4 bg-blue-600/10 text-blue-400 text-[9px] uppercase font-mono tracking-widest px-2.5 py-1 rounded-full font-bold">
                    {language === 'en' ? '🛡️ Guarantee' : '🛡️ Гаранция'}
                  </span>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Bulgaria flag-inspired trust accent banner */}
        <div className="mt-16 text-center max-w-xl mx-auto p-4 rounded-xl border border-white/5 bg-zinc-950/20">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="h-1.5 w-6 rounded-sm bg-white" />
            <span className="h-1.5 w-6 rounded-sm bg-green-600" />
            <span className="h-1.5 w-6 rounded-sm bg-red-600" />
          </div>
          <p className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">
            {language === 'en' 
              ? 'Dedicated entirely to helping local Bulgarian businesses thrive globally \u2022 Plovdiv, Bulgaria'
              : 'Посветени изцяло на растежа на местния български бизнес в интернет \u2022 Пловдив, България'}
          </p>
        </div>

      </div>
    </section>
  );
}
