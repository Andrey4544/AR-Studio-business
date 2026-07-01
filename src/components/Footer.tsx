/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Mail, Phone, MapPin, Heart, ArrowUp, Send, Check } from 'lucide-react';
import Logo from './Logo';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  setActivePage: (page: string) => void;
  openQuoteModal: () => void;
}

export default function Footer({ setActivePage, openQuoteModal }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const { language, t } = useLanguage();

  const handleNavClick = (pageId: string) => {
    setActivePage(pageId);
    window.scrollTo(0, 0);
  };

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-luxury-black border-t border-white/5 pt-20 pb-8 text-zinc-400 font-sans relative overflow-hidden">
      {/* Background Decorative Accent */}
      <div className="absolute bottom-0 right-[10%] w-[250px] h-[250px] rounded-full bg-blue-900/5 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Core Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 sm:gap-16 pb-16 border-b border-white/5">
          
          {/* Column A: Logo / Taglines */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <div className="cursor-pointer" onClick={() => handleNavClick('home')}>
              <Logo size="md" />
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm mt-2">
              {language === 'en' 
                ? 'AR Studio is a premier boutique web design and development team based in Plovdiv, Bulgaria. We architect luxury-grade, ultra-responsive digital products engineered to grow local businesses model by model.'
                : 'AR Studio е бутиков екип за уеб дизайн и разработка, базиран в Пловдив. Ние създаваме бързи, модерни и достъпни уебсайтове за Вашия бизнес.'}
            </p>
            {/* Proud Bulgaria indicator */}
            <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-wider text-zinc-500">
              <span className="flex h-1.5 w-4 rounded-sm bg-gradient-to-b from-white via-green-600 to-red-600 border border-white/10" />
              <span>{language === 'en' ? 'Plovdiv, Bulgaria \u22c5 EU' : 'Пловдив, България \u22c5 ЕС'}</span>
            </div>
          </div>

          {/* Column B: Directories */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white mb-6">
              {language === 'en' ? 'Directory' : 'Навигация'}
            </h4>
            <ul className="space-y-3.5 text-xs sm:text-sm font-sans">
              {[
                { id: 'home', label: language === 'en' ? 'Home Experience' : 'Начало' },
                { id: 'about', label: language === 'en' ? 'About Andrey, Rumen & Nikolay' : 'За Андрей, Румен и Николай' },
                { id: 'services', label: language === 'en' ? 'Services & Pricing' : 'Услуги и цени' },
                { id: 'portfolio', label: language === 'en' ? 'Featured Portfolio' : 'Реални проекти' },
                { id: 'why-us', label: language === 'en' ? 'Our Model (Why Us)' : 'Защо нас' },
                { id: 'testimonials', label: language === 'en' ? 'Customer Reviews' : 'Клиентски отзиви' },
                { id: 'faq', label: language === 'en' ? 'Frequently Asked Questions' : 'Често задавани въпроси (ЧЗВ)' },
                { id: 'contact', label: language === 'en' ? 'Direct Board' : 'Контакти' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className="hover:text-blue-400 hover:translate-x-1.5 transition-all duration-300 cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column C: Contacts details */}
          <div className="md:col-span-3 font-sans">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white mb-6">
              {language === 'en' ? 'Direct Board' : 'Контакти'}
            </h4>
            <ul className="space-y-4 text-xs sm:text-sm">
              
              {/* Phone */}
              <li className="flex items-start gap-3 text-left">
                <Phone className="w-4 h-4 text-blue-400 mt-1 shrink-0" />
                <div>
                  <span className="text-[10px] font-mono uppercase text-zinc-500 block mb-0.5">
                    {language === 'en' ? 'Telephone \u2022 Viber \u2022 WA' : 'Телефон \u2022 Viber \u2022 WA'}
                  </span>
                  <div className="flex flex-col gap-1">
                    <a href="tel:0888616641" className="text-white hover:text-[#3B82F6] font-mono transition-colors font-bold block">
                      0888 61 66 41
                    </a>
                    <a href="tel:0888379886" className="text-white hover:text-[#3B82F6] font-mono transition-colors font-bold block">
                      0888 37 98 86
                    </a>
                  </div>
                </div>
              </li>

              {/* Email */}
              <li className="flex items-start gap-3 text-left">
                <Mail className="w-4 h-4 text-blue-400 mt-1 shrink-0" />
                <div>
                  <span className="text-[10px] font-mono uppercase text-zinc-500 block mb-0.5">
                    {language === 'en' ? 'Direct Inquiry Email' : 'Директен имейл'}
                  </span>
                  <a href="mailto:designbyandrey@gmail.com" className="text-white hover:text-[#3B82F6] transition-colors">
                    designbyandrey@gmail.com
                  </a>
                </div>
              </li>

              {/* Address */}
              <li className="flex items-start gap-3 text-left">
                <MapPin className="w-4 h-4 text-blue-400 mt-1 shrink-0" />
                <div>
                  <span className="text-[10px] font-mono uppercase text-zinc-500 block mb-0.5">
                    {language === 'en' ? 'Studio HQ Location' : 'Локация на студиото'}
                  </span>
                  <span className="text-zinc-300 leading-normal block">
                    {language === 'en' ? 'Plovdiv Centre,' : 'Център,'}<br />
                    {language === 'en' ? 'Plovdiv 4000, Bulgaria' : 'Пловдив 4000, България'}
                  </span>
                </div>
              </li>

            </ul>
          </div>

          {/* Column D: Fast Bulletin / Callback */}
          <div className="md:col-span-2 flex flex-col gap-6 text-left">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white mb-2">
              {language === 'en' ? 'Pact' : 'План'}
            </h4>
            <p className="text-[11px] text-zinc-500 leading-normal">
              {language === 'en' 
                ? "Need immediate digital growth? Request Andrey, Rumen & Nikolay's dynamic blueprints today."
                : 'Имате нужда от уебсайт в Пловдив или цяла България? Поръчайте своя безплатен проект от Андрей, Румен и Николай днес.'}
            </p>
            <button
              onClick={openQuoteModal}
              className="w-full bg-blue-600/10 border border-blue-500/20 hover:bg-blue-600 text-zinc-300 hover:text-white py-3 px-4 font-semibold text-xs rounded-xl transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>{language === 'en' ? 'Instant Call' : 'Бързо поръчване'}</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Footer Sub bottom rows: copyright notices, back to top */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-[11px] text-zinc-500">
          
          <div className="flex items-center gap-2 font-mono uppercase tracking-wide">
            <span>&copy; {currentYear} AR Studio Web Craftsmanship.</span>
            <span className="text-zinc-600 font-sans">
              {language === 'en' ? 'All rights reserved.' : 'Всички права запазени.'}
            </span>
          </div>

          {/* Immersive Theme Live Status Bullet */}
          <div className="flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full font-mono text-[9px] tracking-widest uppercase text-blue-400">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" />
            <span>
              {language === 'en' ? 'Status: Available for new projects' : 'Статус: Приемаме нови проекти'}
            </span>
          </div>

          {/* Built with Heart references */}
          <div className="flex items-center gap-1">
            <span>
              {language === 'en' ? 'Meticulously engineered in Plovdiv with' : 'Изработено с удоволствие в Пловдив с'}
            </span>
            <Heart className="w-3 h-3 text-red-500 fill-red-500 inline mx-0.5" />
            <span>
              {language === 'en' ? 'by Andrey, Rumen & Nikolay.' : 'от Андрей, Румен и Николай.'}
            </span>
          </div>

          {/* Back to top Button */}
          <div>
            <button
              onClick={handleScrollTop}
              className="flex items-center gap-1 text-zinc-500 hover:text-white font-mono uppercase tracking-wider transition-colors cursor-pointer"
            >
              <span>{language === 'en' ? 'Back to Top' : 'Нагоре'}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
}
