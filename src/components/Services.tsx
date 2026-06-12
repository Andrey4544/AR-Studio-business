import React from 'react';
import { motion } from 'motion/react';
import { Layers, Palette, Zap, Search, ChevronRight } from 'lucide-react';
import { Language } from '../types';
import { getTranslator } from '../translations';

interface ServicesProps {
  language: Language;
}

export const Services: React.FC<ServicesProps> = ({ language }) => {
  const t = getTranslator(language);

  const servicesList = [
    {
      icon: <Layers className="w-6 h-6 text-blue-400" />,
      titleEN: 'Bespoke Full-Stack Architectures',
      titleBG: 'Индивидуални Full-Stack Архитектури',
      descEN: 'We compile reliable custom web platforms, scalable APIs, and bespoke administrative suites written in React, Node/Express, and secure cloud infrastructures.',
      descBG: 'Компилираме надеждни персонализирани уеб системи, мащабируеми API и административни панел-комплекти в React, Node/Express и защитени облачни структури.',
      num: '01'
    },
    {
      icon: <Palette className="w-6 h-6 text-indigo-400" />,
      titleEN: 'Premium Visual Interface Craft',
      titleBG: 'Първокласен Визуален Дизайн',
      descEN: 'Striking interaction layouts and absolute typographics merged with fluid motion. No pre-made templates, fully hand-styled layout engines.',
      descBG: 'Забележителни интерактивни визии и перфектна типография, преплетени в плавно движение. Без готови шаблони, изцяло ръчно стилизирана визия.',
      num: '02'
    },
    {
      icon: <Zap className="w-6 h-6 text-amber-400" />,
      titleEN: 'High-Velocity Commerce Systems',
      titleBG: 'Високоскоростна Електронна Търговия',
      descEN: 'E-commerce frameworks optimized for rapid rendering, single-click checkout configurations, and real-time stock processing speed.',
      descBG: 'Електронни магазини, напълно оптимизирани за незабавно зареждане, плащания с един клик и синхронизация на наличности в реално време.',
      num: '03'
    },
    {
      icon: <Search className="w-6 h-6 text-purple-400" />,
      titleEN: 'Technical SEO & Performance Audit',
      titleBG: 'Техническо SEO и Крос-Оптимизация',
      descEN: '100% Lighthouse speeds, clean structure indexing, server-side page renders, and structural JSON-LD schemas mapping out total search index dominion.',
      descBG: '100% резултати в Lighthouse, чиста индексация, предварително рендериран уеб код и микроданни (JSON-LD schemas) за доминация в търсачките.',
      num: '04'
    }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-zinc-950/40 border-b border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-blue-500/1 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
            <span className="text-[10px] font-mono tracking-widest uppercase text-blue-400 font-semibold">
              {t('servicesSubtitle')}
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
            {t('servicesTitle')}
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            {t('servicesDesc')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesList.map((svc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group glass-panel p-8 rounded-2xl border border-white/5 relative flex flex-col justify-between h-full hover:border-white/10 glow-blue transition-all duration-300"
            >
              <div className="absolute top-6 right-8 font-mono text-[10px] tracking-widest text-zinc-700 group-hover:text-blue-500/40 transition-colors">
                {svc.num} // SPEC.X
              </div>
              
              <div>
                <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center mb-6 py-2">
                  {svc.icon}
                </div>
                <h3 className="text-lg font-bold font-sans text-white mb-4 group-hover:text-blue-400 transition-colors">
                  {language === 'en' ? svc.titleEN : svc.titleBG}
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6">
                  {language === 'en' ? svc.descEN : svc.descBG}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center gap-1 text-zinc-500 group-hover:text-white font-mono text-[10px] uppercase tracking-widest transition-colors duration-200 mt-auto">
                <span>Core Protocol Approved</span>
                <ChevronRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Services;
