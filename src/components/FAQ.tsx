/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ChevronDown, HelpCircle, MessageSquare, Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function FAQ() {
  const { faqItems, t, language } = useLanguage();
  const [openId, setOpenId] = useState<string | null>('faq-1'); // Default first item open as per premium layout practices

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-24 bg-luxury-black relative overflow-hidden border-t border-white/5">
      {/* Decorative Radial Glow */}
      <div className="absolute top-[30%] left-[20%] w-[350px] h-[350px] rounded-full bg-blue-900/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-zinc-900/10 blur-[130px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span className="text-[10px] font-mono tracking-widest uppercase text-blue-400 font-semibold">
              {t('faqSubTitle')}
            </span>
          </div>
          <h2 id="faq-heading" className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-zinc-100 via-zinc-400 to-zinc-600 bg-clip-text text-transparent">
              {t('faqTitle')}
            </span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            {t('faqDesc')}
          </p>
        </div>

        {/* Accordion List Container */}
        <div className="space-y-4">
          {faqItems.map((item, idx) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                id={`faq-item-${item.id}`}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-zinc-950/80 border-blue-500/30 shadow-lg shadow-blue-500/5'
                    : 'bg-zinc-900/20 border-white/5 hover:border-white/10 hover:bg-zinc-950/20'
                }`}
              >
                {/* Header (Question) Trigger */}
                <button
                  type="button"
                  id={`faq-trigger-${item.id}`}
                  onClick={() => toggleAccordion(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-content-${item.id}`}
                  className="w-full text-left px-6 py-5 sm:px-8 sm:py-6 flex justify-between items-center gap-4 group focus:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 rounded-t-2xl"
                >
                  <div className="flex gap-4 items-center">
                    <div className={`h-8 w-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                      isOpen ? 'bg-blue-600/15 text-blue-400 border border-blue-500/20' : 'bg-zinc-900 text-zinc-500 border border-white/5'
                    }`}>
                      <HelpCircle className="w-4 h-4" />
                    </div>
                    <span className={`text-sm sm:text-base font-bold font-sans transition-colors duration-300 ${
                      isOpen ? 'text-blue-400' : 'text-white group-hover:text-zinc-200'
                    }`}>
                      {item.question}
                    </span>
                  </div>
                  
                  {/* Rotating Chevron Icon */}
                  <div className={`h-6 w-6 rounded-full flex items-center justify-center shrink-0 border border-white/5 bg-zinc-900/50 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 border-blue-500/30 text-blue-400' : 'text-zinc-400'
                  }`}>
                    <ChevronDown className="w-3.5 h-3.5" />
                  </div>
                </button>

                {/* Animated Answer Body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-content-${item.id}`}
                      role="region"
                      aria-labelledby={`faq-trigger-${item.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-0 sm:px-8 sm:pb-8 text-zinc-400 text-xs sm:text-sm leading-relaxed font-sans border-t border-white/5 pl-14 sm:pl-18">
                        <p>{item.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Card */}
        <div className="mt-16 text-center">
          <div className="p-8 rounded-2xl bg-zinc-950/50 border border-white/5 inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-8 justify-between max-w-2xl mx-auto w-full">
            <div className="text-left">
              <h4 className="text-sm font-bold text-white mb-1 flex items-center gap-1.5 justify-center sm:justify-start">
                <MessageSquare className="w-4 h-4 text-blue-400" />
                <span>
                  {language === 'en' ? 'Have a different question?' : 'Имате друг конкретен въпрос?'}
                </span>
              </h4>
              <p className="text-xs text-zinc-500">
                {language === 'en' 
                  ? 'Ask Andrey, Rumen & Nikolay directly. We deliver honest guidance.' 
                  : 'Тадайте го на Андрей, Румен и Николай лично. Ще Ви отговорим откровено до два часа.'}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 shrink-0 w-full sm:w-auto">
              <a
                href="tel:0888616641"
                id="faq-whatsapp-cta-1"
                className="px-4 py-2.5 bg-zinc-900 border border-white/5 hover:border-white/10 text-white font-mono font-bold text-xs rounded-xl transition-colors whitespace-nowrap text-center flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-blue-500" />
                <span>0888 61 66 41</span>
              </a>
              <a
                href="tel:0888379886"
                id="faq-whatsapp-cta-2"
                className="px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-mono font-bold text-xs rounded-xl shadow-lg shadow-blue-500/10 transition-colors whitespace-nowrap text-center flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-white" />
                <span>0888 37 98 86</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
