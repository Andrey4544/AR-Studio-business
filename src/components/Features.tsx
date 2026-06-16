/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import * as Icons from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Features() {
  const { agencyFeatures, t, language } = useLanguage();

  return (
    <section className="py-24 bg-luxury-black relative overflow-hidden border-t border-white/5">
      {/* Background abstract element */}
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
            <Icons.Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span className="text-[10px] font-mono tracking-widest uppercase text-blue-400 font-semibold">
              {language === 'en' ? 'ENGINEERED FOR EXCELLENCE' : 'ПРОЕКТИРАНИ С ПРЕЦИЗНОСТ'}
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
            {language === 'en' ? (
              <>
                Designed to Perform, <br />
                <span className="bg-gradient-to-r from-zinc-100 to-zinc-400 bg-clip-text text-transparent">
                  Built to Overdeliver
                </span>
              </>
            ) : (
              <>
                Проектирани да работят, <br />
                <span className="bg-gradient-to-r from-zinc-100 to-zinc-400 bg-clip-text text-transparent">
                  създадени да надвишават очакванията
                </span>
              </>
            )}
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            {t('featuresDesc')}
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agencyFeatures.map((feature, idx) => {
            // Dynamically resolve Icon
            const IconComponent = (Icons as any)[feature.iconName] || Icons.HelpCircle;

            return (
              <div
                key={feature.id}
                className="group relative rounded-2xl glass-panel p-8 pl-10 border border-white/5 transition-all duration-300 hover:border-blue-500/20 hover:bg-zinc-950/40 hover:translate-y-[-4px] overflow-hidden"
              >
                {/* Subtle top left neon light on hover */}
                <div className="absolute top-0 left-0 w-24 h-px bg-gradient-to-r from-blue-500/0 via-blue-500 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 left-0 w-px h-24 bg-gradient-to-b from-blue-500/0 via-blue-500 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Grid card icon area */}
                <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-zinc-900/85 border border-white/10 group-hover:border-blue-500/30 group-hover:bg-blue-950/20 transition-all duration-300">
                  <IconComponent className="w-5 h-5 text-zinc-400 group-hover:text-blue-400 group-hover:scale-110 transition-all duration-300" />
                </div>

                {/* Typography details */}
                <h3 className="text-lg font-bold text-white tracking-tight mb-3 font-sans group-hover:text-blue-400/90 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Subtle background number label */}
                <div className="absolute bottom-4 right-6 text-sm font-mono font-bold text-zinc-900/30 select-none pointer-events-none group-hover:text-blue-900/10 transition-colors duration-300">
                  0{idx + 1}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
