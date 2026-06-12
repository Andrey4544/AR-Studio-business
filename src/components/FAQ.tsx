import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { Language } from '../types';
import { getTranslator } from '../translations';

interface FAQProps {
  language: Language;
}

export const FAQ: React.FC<FAQProps> = ({ language }) => {
  const t = getTranslator(language);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems = [
    {
      questionEN: 'How long does a custom development lifecycle take?',
      questionBG: 'Колко време отнема разработката на един сайт?',
      answerEN: 'A standard bespoke landing page or presentation framework takes 2 to 3 weeks. Comprehensive full-stack administrative platforms, database synchronizations, and e-commerce suites can take 4 to 6 weeks depending on audit guidelines.',
      answerBG: 'Обикновено изграждането на първокласен корпоративен сайт отнема между 2 и 3 седмици. По-мащабни платформи, изискващи сложни връзки с бази данни и електронна търговия, отнемат от 4 до 6 седмици.'
    },
    {
      questionEN: 'Why do you avoid systems like WordPress or Elementor?',
      questionBG: 'Защо не използвате системи като WordPress или Elementor?',
      answerEN: 'WordPress, Elementor, and standard templates inject massive bloat code, slowing down browsers, destroying SEO presence, and posing security vulnerability risks. We hand-write pure React/TypeScript engines with Express and clean schemas, guaranteeing perfect load times and high system stability.',
      answerBG: 'Готовите системи (като WordPress, Elementor, Webflow) натоварват страниците с излишен код, което драстично забавя скоростта, намалява SEO видимостта и увеличава рисковете от уязвимости. Пишем чист код на React и TypeScript, осигурявайки перфектна скорост.'
    },
    {
      questionEN: 'Will my website rank at 100% on search engine optimizations (SEO)?',
      questionBG: 'Ще има ли сайтът ми пълна техническа оптимизация (SEO)?',
      answerEN: 'Yes. By injecting structured semantic microdata (JSON-LD JSON schemas), optimizing web performance to 100/100, and building custom server-side renders, we make sure that Google indexes and ranks your web interfaces far above standard templates.',
      answerBG: 'Да. Чрез интегриране на структурирани данни (JSON-LD), зареждане под 1.2 секунди и съвършена семантична структура, Вашият сайт ще се класира много по-напред и по-бързо в Google в сравнение с шаблонен вариант.'
    },
    {
      questionEN: 'Can we integrate custom payment methods or external services?',
      questionBG: 'Може ли да се интегрират платежни методи и допълнителни услуги?',
      answerEN: 'Absolutely. We formulate customized full-stack server endpoints capable of processing Stripe, PayPal, local bank virtual terminals, specialized CRM APIs, or real-time automated SMTP email protocols seamlessly.',
      answerBG: 'Абсолютно. Изграждаме сигурни бекенд API-та за интеграции със Stripe, PayPal, виртуални ПОС терминали на български банки, ERP/CRM системи и автоматизирани пощенски релета.'
    }
  ];

  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-zinc-950/40 border-b border-white/5 font-sans">
      <div className="absolute top-2/3 right-1/4 translate-x-1/3 translate-y-1/3 w-96 h-96 rounded-full bg-indigo-500/[0.015] blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4 animate-fade-in">
            <HelpCircle className="w-3.5 h-3.5 text-blue-400" />
            <span className="text-[10px] font-mono tracking-widest uppercase text-blue-400 font-semibold text-center">
              {t('faqSubtitle')}
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight">
            {t('faqTitle')}
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-4 text-left">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="glass-panel border rounded-2xl border-white/5 overflow-hidden transition-all duration-300 hover:border-white/10"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none cursor-pointer"
                >
                  <span className="text-zinc-100 font-serif font-semibold text-sm sm:text-base group-hover:text-blue-400 transition-colors">
                    {language === 'en' ? item.questionEN : item.questionBG}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-blue-400 shrink-0 select-none" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-zinc-500 shrink-0 select-none" />
                  )}
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-6 pb-6 pt-2 border-t border-white/5 text-zinc-400 text-xs sm:text-sm leading-relaxed">
                        {language === 'en' ? item.answerEN : item.answerBG}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default FAQ;
