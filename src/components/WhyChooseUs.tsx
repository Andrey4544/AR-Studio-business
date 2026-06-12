import React from 'react';
import { motion } from 'motion/react';
import { FolderKey, BarChart2, ShieldAlert } from 'lucide-react';
import { Language } from '../types';
import { getTranslator } from '../translations';

interface WhyChooseUsProps {
  language: Language;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ language }) => {
  const t = getTranslator(language);

  return (
    <section id="whychooseus" className="py-24 relative overflow-hidden bg-zinc-950/20 border-b border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-indigo-500/[0.015] blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
            <span className="text-[10px] font-mono tracking-widest uppercase text-blue-400 font-semibold text-center">
              {t('whyChooseUsSubtitle')}
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
            {t('whyChooseUsTitle')}
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            {t('whyChooseUsDesc')}
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5 }}
            className="glass-panel p-10 rounded-2xl border border-white/5 relative overflow-hidden flex flex-col justify-between h-80 glow-blue transition-all duration-300"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/[0.03] blur-3xl rounded-full" />
            <div>
              <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center mb-6">
                <FolderKey className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="text-sm font-mono tracking-widest uppercase text-zinc-400 mb-2">01 // CODEBASE ORIGIN</h3>
              <p className="font-serif text-lg text-white font-medium leading-relaxed">
                {language === 'en' ? 'Every Line Hand-Written.' : 'Написано чисто на ръка.'}
              </p>
            </div>
            <p className="text-zinc-500 text-xs sm:text-sm mt-4">
              {language === 'en' 
                ? 'Absolutely zero reliance on heavy web builders (WordPress, Elementor, Webflow) or template bloat.'
                : 'Без тежки уеб конструктори (WordPress, Webflow) или излишно натрупан, забавящ код.'}
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -5 }}
            className="glass-panel p-10 rounded-2xl border border-white/5 relative overflow-hidden flex flex-col justify-between h-80 glow-blue transition-all duration-300"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/[0.03] blur-3xl rounded-full" />
            <div>
              <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center mb-6">
                <BarChart2 className="w-5 h-5 text-indigo-400" />
              </div>
              <h3 className="text-sm font-mono tracking-widest uppercase text-zinc-400 mb-2">02 // PERFORMANCE METRIC</h3>
              <p className="font-serif text-lg text-white font-medium leading-relaxed">
                {language === 'en' ? 'Lighthouse Scores: 100%.' : 'Lighthouse Резултати: 100%.'}
              </p>
            </div>
            <p className="text-zinc-500 text-xs sm:text-sm mt-4">
              {language === 'en' 
                ? 'We target maximum scores in Core Web Vitals to double search accessibility and customer conversion.'
                : 'Стремим се към максимални показатели в Core Web Vitals за по-добра видимост и до 2 пъти повече клиенти.'}
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -5 }}
            className="glass-panel p-10 rounded-2xl border border-white/5 relative overflow-hidden flex flex-col justify-between h-80 glow-blue transition-all duration-300"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/[0.03] blur-3xl rounded-full" />
            <div>
              <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center mb-6">
                <ShieldAlert className="w-5 h-5 text-amber-400" />
              </div>
              <h3 className="text-sm font-mono tracking-widest uppercase text-zinc-400 mb-2">03 // DIRECT ARCHITECTURE</h3>
              <p className="font-serif text-lg text-white font-medium leading-relaxed">
                {language === 'en' ? 'No Outsourcing Or Proxies.' : 'Без прехвърляне или подизпълнители.'}
              </p>
            </div>
            <p className="text-zinc-500 text-xs sm:text-sm mt-4">
              {language === 'en' 
                ? 'You collaborate directly with senior programmers and visual directors who build the original systems.'
                : 'Работите директно с програмисти на senior ниво, които създават и контролират сигурността.'}
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
export default WhyChooseUs;
