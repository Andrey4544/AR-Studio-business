import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Globe, Laptop, ArrowRight } from 'lucide-react';
import { Language } from '../types';
import { getTranslator } from '../translations';

interface PortfolioProps {
  language: Language;
  onOpenConsult: () => void;
  onOpenQuote: () => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ language, onOpenConsult, onOpenQuote }) => {
  const t = getTranslator(language);

  const project = {
    title: 'Tomato Restaurant Platform',
    titleBG: 'Платформа за ресторант Tomato',
    category: 'E-Commerce / Custom Portal',
    categoryBG: 'Ел. Търговия / Индивидуален Портал',
    results: [
      '1.2s average load speed on cold start rendering.',
      '140% surge in online table bookings and delivery revenue.',
      'Secured backend portal integrated with local checkout mechanisms.'
    ],
    resultsBG: [
      '1.2 секунди средна скорост на първоначално зареждане.',
      '140% увеличение на онлайн резервациите и поръчките за доставка.',
      'Защитен бекенд панел, напълно интегриран с локални разплащателни системи.'
    ],
    tags: ['React', 'NodeJS', 'Express', 'Aesthetic CSS', 'Speed Core']
  };

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden bg-zinc-950/30 border-b border-white/5">
      <div className="absolute top-1/4 right-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-blue-500/[0.02] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
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
              {t('portfolioSubtitle')}
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
            {language === 'en' ? (
              <>
                Featured Case Studies <br />
                and Architectural Artifacts
              </>
            ) : (
              <>
                Реални бизнес казуси <br />
                и Архитектурни Шедьоври
              </>
            )}
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            {t('portfolioDesc')}
          </p>
        </motion.div>

        {/* Featured Project: Tomato Restaurant */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          
          {/* Project Details Columns */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-[#3B82F6] font-mono font-semibold text-[10px] rounded-full uppercase tracking-wider">
                {language === 'en' ? project.category : project.categoryBG}
              </span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3.5xl font-bold text-white tracking-tight">
              {language === 'en' ? project.title : project.titleBG}
            </h3>

            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
              {language === 'en' 
                ? 'We designed and engineered a full-scale restaurant dashboard system, integrating instant interactive menus, localized responsive delivery routing, and customized CMS blocks.'
                : 'Проектирахме и внедрихме мащабна система за ресторанти с интерактивни менюта, автоматизирано изчисляване на доставки и специализиран административен панел.'
              }
            </p>

            {/* Metric Results */}
            <div className="space-y-3.5 pt-2">
              <h4 className="text-[10px] uppercase font-mono tracking-widest text-[#9CA3AF] font-bold">
                {language === 'en' ? 'Core Performance Audit:' : 'Резултати от одита:'}
              </h4>
              <ul className="space-y-2 text-zinc-300 text-xs sm:text-sm font-sans list-none p-0 m-0">
                {(language === 'en' ? project.results : project.resultsBG).map((res, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-emerald-400 font-mono">✦</span>
                    <span>{res}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {project.tags.map(t => (
                <span key={t} className="px-2 py-0.5 bg-zinc-900 border border-white/5 font-mono text-[9px] rounded text-zinc-500">
                  {t}
                </span>
              ))}
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenConsult}
                className="px-6 py-3 bg-zinc-900 border border-white/10 hover:border-white/20 transition-all font-mono text-[10px] font-bold uppercase tracking-wider rounded-xl text-white shadow-lg cursor-pointer"
              >
                {language === 'en' ? 'Request Similar Design →' : 'Искам подобен дизайн →'}
              </button>
            </div>
          </motion.div>

          {/* Screenshot Column using high-contrast vector preview */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-12 xl:col-span-7 flex justify-center w-full"
          >
            <div className="relative group overflow-hidden rounded-3xl border border-white/5 bg-zinc-950/20 p-2 sm:p-4 glow-blue w-full max-w-2xl">
              {/* Browser Header Bar Representation */}
              <div className="w-full flex items-center justify-between px-3 pb-3 border-b border-white/5">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                </div>
                <div className="flex items-center gap-1 bg-zinc-900/80 rounded px-2.5 py-0.5 border border-white/5">
                  <Globe className="w-2.5 h-2.5 text-zinc-600" />
                  <span className="font-mono text-[8px] text-zinc-500 lowercase">tomato-concept.luxury.dev</span>
                </div>
                <div className="w-4" />
              </div>

              {/* Simulated UI App Interface (Replacing Image File) */}
              <div className="relative p-6 bg-zinc-950 rounded-2xl border border-white/5 mt-4 min-h-[300px] flex flex-col justify-between overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 blur-[80px] rounded-full pointer-events-none" />
                
                {/* Simulated Restaurant Header */}
                <div className="flex justify-between items-center sm:px-2 pt-2 border-b border-white/5 pb-3">
                  <span className="font-serif font-bold text-red-400 tracking-wider text-sm">TOMATO RESTAURANT</span>
                  <div className="flex gap-3 text-[9px] font-mono text-zinc-500">
                    <span>MENU</span>
                    <span>RESERVATIONS</span>
                    <span>DELIVERY</span>
                  </div>
                </div>

                {/* Hero Visual Mockup */}
                <div className="my-6 text-center space-y-3 relative z-10">
                  <span className="text-[9px] font-mono bg-red-500/10 border border-red-500/20 text-red-400 px-2 py-0.5 rounded-full uppercase tracking-widest">
                    Gastronomy Portal
                  </span>
                  <h3 className="font-serif text-2xl font-semibold text-white tracking-tight">
                    Pure Taste, Redefined
                  </h3>
                  <p className="text-zinc-500 text-[10px] max-w-sm mx-auto">
                    A responsive layout built to handle hundreds of active diners simultaneously at milliseconds of latency.
                  </p>
                </div>

                {/* Fast Performance Dashboard Widget */}
                <div className="bg-zinc-900/90 border border-white/5 rounded-xl p-4 flex justify-between items-center relative z-10 glass-panel">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <div className="flex flex-col text-left">
                      <span className="text-[9px] font-mono text-zinc-400 uppercase tracking-wider">SYSTEM SPEED</span>
                      <span className="font-serif font-bold text-xs text-white">Lighthouse Performance IP: 100%</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono bg-emerald-500/15 text-emerald-400 px-2.5 py-0.5 rounded border border-emerald-500/20">
                    1.2s Cold
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Future Client Projects grid slots */}
        <div className="mt-28">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-[#9CA3AF] mb-1">
              {language === 'en' ? '// Bespoke Opportunities' : '// Възможности за интеграция'}
            </h4>
            <p className="font-serif text-xl font-bold text-white tracking-tight">
              {language === 'en' ? 'Reserve Your Architectural Placement' : 'Запазете своята архитектурна позиция'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans">
            
            {/* Slot 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="glass-panel border-dashed border-white/10 bg-zinc-950/10 p-12 rounded-3xl flex flex-col justify-between h-64 text-left relative group hover:border-blue-500/30 transition-all duration-300"
            >
              <div className="flex justify-between items-start">
                <span className="px-3 py-1 bg-zinc-900 border border-white/5 text-zinc-500 font-mono font-semibold text-[9px] rounded-full uppercase tracking-wider">
                  {language === 'en' ? 'Bespoke Placements // Slot 02' : 'Позиция за проект // Слот 02'}
                </span>
                <Laptop className="w-5 h-5 text-zinc-800 group-hover:text-blue-500/40 transition-colors" />
              </div>
              <div>
                <h4 className="font-serif text-lg font-bold text-zinc-500 group-hover:text-white transition-colors">
                  {language === 'en' ? 'Custom Enterprise Suite' : 'Корпоративна Системна Платформа'}
                </h4>
                <p className="text-zinc-500 text-xs mt-2 leading-relaxed">
                  {language === 'en'
                    ? 'Available for a high-end platform seeking unmatched database performance, localized payment gateways, and custom workflow administration.'
                    : 'Свободна позиция за внедряване на мащабен портал, персонализирани бази данни и корпоративни работни потоци.'}
                </p>
              </div>
              <div className="h-px bg-white/5" />
            </motion.div>

            {/* Slot 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="glass-panel border-dashed border-white/10 bg-zinc-950/10 p-12 rounded-3xl flex flex-col justify-between h-64 text-left relative group hover:border-blue-500/30 transition-all duration-300"
            >
              <div className="flex justify-between items-start">
                <span className="px-3 py-1 bg-zinc-900 border border-white/5 text-zinc-500 font-mono font-semibold text-[9px] rounded-full uppercase tracking-wider">
                  {language === 'en' ? 'Bespoke Placements // Slot 03' : 'Позиция за проект // Слот 03'}
                </span>
                <Sparkles className="w-5 h-5 text-zinc-800 group-hover:text-blue-500/40 transition-colors" />
              </div>
              <div>
                <h4 className="font-serif text-lg font-bold text-zinc-500 group-hover:text-white transition-colors">
                  {language === 'en' ? 'Ultra-High Speed Core Website' : 'Индивидуален луксозен уебсайт'}
                </h4>
                <p className="text-zinc-500 text-xs mt-2 leading-relaxed">
                  {language === 'en'
                    ? 'Perfect position for companies demanding elite design presentation, smooth vector transition flows, and absolute SEO indexing supremacy.'
                    : 'Подходящ за брандове, изискващи най-високо ниво на визуално представяне, плавни интерфейсни ефекти и безкомпромисно SEO търсене.'}
                </p>
              </div>
              <button
                onClick={onOpenQuote}
                className="text-left font-mono text-[10px] uppercase font-bold tracking-widest text-[#3B82F6] hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                {language === 'en' ? 'Claim This Space Now \u2192' : 'Запази това място сега \u2192'}
              </button>
            </motion.div>
            
          </div>
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
