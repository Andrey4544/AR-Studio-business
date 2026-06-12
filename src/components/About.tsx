import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Terminal, Palette, Award } from 'lucide-react';
import { Language } from '../types';
import { getTranslator } from '../translations';

interface AboutProps {
  language: Language;
}

export const About: React.FC<AboutProps> = ({ language }) => {
  const t = getTranslator(language);

  const founders = [
    {
      nameEN: 'Andrey Belev',
      nameBG: 'Андрей Белев',
      roleEN: 'Creative & Visual Director',
      roleBG: 'Креативен и визуален директор',
      bioEN: 'Shaping premium user flows and elite layout stylings. Andrey ensures every pixel, font margin, and scrolling detail matches total high-end identity standards.',
      bioBG: 'Изгражда луксозни визуални интерфейси за брандове. Андрей гарантира, че всеки елемент, отстъп и анимация са в синхрон с бранд идентичността.'
    },
    {
      nameEN: 'Rumen Mirchev',
      nameBG: 'Румен Мирчев',
      roleEN: 'Lead Systems Architect',
      roleBG: 'Главен системен архитект',
      bioEN: 'Spearheading robust backends, real-time SMTP relays, cloud server configs, and TypeScript performance index engines for maximum speed and security compliance.',
      bioBG: 'Архитект на бекенд системи, сигурни пощенски релета, бързи облачни структури и TypeScript алгоритми, осигуряващи максимална скорост и функционалност.'
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-zinc-950/40 border-b border-white/5">
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-indigo-500/[0.015] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-28">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span className="text-[10px] font-mono tracking-widest uppercase text-blue-400 font-semibold">
                {t('aboutSubtitle')}
              </span>
            </div>
            <h2 className="font-serif text-3.5xl sm:text-5xl font-bold text-white mb-6 tracking-tight">
              {t('aboutTitle')}
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-6 font-sans">
              {t('aboutDesc')}
            </p>
            <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed mb-8">
              {language === 'en'
                ? 'We refuse to participate in generic low-quality coding loops. We approach building software like crafting a physical custom vehicle — measuring twice, hand-crafting visual details, and making sure the engine runs perfectly on all devices.'
                : 'Ние отказваме да участваме в създаването на нискокачествен бърз софтуер. Подхождаме към уеб дизайна като към изработката на луксозен ръчен артикул – с абсолютно внимание към всеки код, преход и техническо изискване.'}
            </p>

            {/* Quick counters/Stats details */}
            <div className="grid grid-cols-2 gap-8 border-t border-white/5 pt-8">
              <div>
                <span className="block font-mono text-xl sm:text-2xl font-bold text-blue-400">100%</span>
                <span className="text-[10px] sm:text-[11px] font-mono tracking-widest text-[#9CA3AF] uppercase">
                  {t('yearsLabel')}
                </span>
              </div>
              <div>
                <span className="block font-mono text-xl sm:text-2xl font-bold text-emerald-400">100%</span>
                <span className="text-[10px] sm:text-[11px] font-mono tracking-widest text-[#9CA3AF] uppercase">
                  {t('speedLabel')}
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-12 xl:col-span-5 flex justify-center"
          >
            {/* Ambient visual badge container */}
            <div className="relative p-8 bg-zinc-900/60 border border-white/5 rounded-3xl max-w-sm w-full glass-panel flex flex-col justify-between glow-blue min-h-[350px]">
              <div className="flex justify-between items-start mb-6">
                <Terminal className="w-8 h-8 text-blue-500" />
                <span className="font-mono text-[9px] tracking-widest text-zinc-600">SPEC: LUX.Y // COMPILER</span>
              </div>
              <div>
                <h4 className="font-serif text-lg font-bold text-white mb-3">
                  {language === 'en' ? 'Uncompromised Integrity' : 'Безкомпромисен Интегритет'}
                </h4>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6 font-sans">
                  {t('advantagesText')}
                </p>
              </div>
              <div className="flex items-center gap-3 bg-zinc-950/80 p-3 rounded-xl border border-white/5">
                <Award className="w-5 h-5 text-amber-500" />
                <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-400 leading-none">
                  {t('clientSatLabel')}
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Dynamic Founders Grid */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h3 className="font-mono text-[10px] uppercase tracking-widest text-[#9CA3AF]">
            {language === 'en' ? '// Core Authors' : '// Автори на Кода'}
          </h3>
          <p className="font-serif text-xl sm:text-2xl font-bold text-white mt-1">
            {language === 'en' ? 'The Engineering Architects' : 'Инженери и Визуалисти'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto font-sans">
          {founders.map((member, index) => (
            <motion.div
              key={member.nameEN}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="glass-panel p-8 rounded-2xl border border-white/5 flex flex-col justify-between h-full relative group transition-all duration-300 hover:border-white/15"
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="font-serif text-xl font-bold text-white">
                    {language === 'en' ? member.nameEN : member.nameBG}
                  </span>
                  {index === 0 ? (
                    <Palette className="w-5 h-5 text-blue-500/50 group-hover:text-blue-400 transition-colors" />
                  ) : (
                    <Terminal className="w-5 h-5 text-indigo-500/50 group-hover:text-indigo-400 transition-colors" />
                  )}
                </div>
                <span className="inline-block px-3 py-1 bg-zinc-900 border border-white/5 rounded-full text-[10px] font-mono tracking-widest uppercase text-blue-400 mb-4 font-semibold">
                  {language === 'en' ? member.roleEN : member.roleBG}
                </span>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6 font-sans">
                  {language === 'en' ? member.bioEN : member.bioBG}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex justify-between items-center text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                <span>Core Skillset</span>
                <span className="text-zinc-400 font-semibold">
                  {index === 0 
                    ? (language === 'en' ? 'Interactive UX & Visual Grid' : 'Интерактивен UX и Визуалистика')
                    : (language === 'en' ? 'TypeScript & SEO Engine' : 'Код, Архитектура и техническо SEO')
                  }
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default About;
