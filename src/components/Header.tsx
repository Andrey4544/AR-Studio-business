import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Globe, DollarSign } from 'lucide-react';
import { Logo } from './Logo';
import { Language } from '../types';

interface HeaderProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  onOpenQuote: () => void;
}

export const Header: React.FC<HeaderProps> = ({ language, setLanguage, onOpenQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { labelEN: 'Services', labelBG: 'Услуги', href: '#services' },
    { labelEN: 'Portfolio', labelBG: 'Проекти', href: '#portfolio' },
    { labelEN: 'Why Us', labelBG: 'Защо Ние', href: '#whychooseus' },
    { labelEN: 'About', labelBG: 'За Нас', href: '#about' },
    { labelEN: 'FAQ', labelBG: 'Въпроси', href: '#faq' },
    { labelEN: 'Contact', labelBG: 'Контакти', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-zinc-950/75 backdrop-blur-md border-b border-white/5 py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-8">
            <Logo onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="font-mono text-[11px] uppercase tracking-wider text-zinc-400 hover:text-white transition-colors duration-200"
                >
                  {language === 'en' ? item.labelEN : item.labelBG}
                </a>
              ))}
            </nav>

            {/* Language + CTA */}
            <div className="hidden md:flex items-center gap-5">
              {/* Language Switcher */}
              <button
                onClick={() => setLanguage(language === 'en' ? 'bg' : 'en')}
                className="flex items-center gap-1 px-3 py-1.5 rounded-full border border-white/10 bg-zinc-900/50 text-[10px] font-mono font-semibold text-zinc-400 hover:text-white hover:border-white/20 transition-all duration-250 cursor-pointer"
              >
                <Globe className="w-3.5 h-3.5 text-blue-500" />
                <span className="uppercase">{language}</span>
              </button>

              {/* Action Button */}
              <button
                onClick={onOpenQuote}
                className="flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-[11px] font-mono tracking-wider font-bold uppercase rounded-lg shadow-lg shadow-blue-500/15 transition-all duration-300 cursor-pointer"
              >
                <DollarSign className="w-3.5 h-3.5" />
                {language === 'en' ? 'Instant Quote' : 'Бърза Оферта'}
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden items-center gap-3">
              <button
                onClick={() => setLanguage(language === 'en' ? 'bg' : 'en')}
                className="p-1 px-2 border border-white/5 bg-zinc-900/30 text-[10px] font-mono rounded text-zinc-300"
              >
                {language.toUpperCase()}
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-zinc-300 hover:text-white p-1"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Panel */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden bg-zinc-950 border-b border-white/5"
            >
              <div className="px-5 pt-4 pb-6 space-y-4">
                {menuItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-sm font-mono tracking-widest text-zinc-400 hover:text-white uppercase"
                  >
                    {language === 'en' ? item.labelEN : item.labelBG}
                  </a>
                ))}
                <div className="pt-4 border-t border-white/5">
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      onOpenQuote();
                    }}
                    className="w-full text-center py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:opacity-95 rounded text-xs font-mono tracking-widest uppercase font-semibold"
                  >
                    {language === 'en' ? 'Request Instant Quote' : 'Поискай Оферта'}
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};
export default Header;
