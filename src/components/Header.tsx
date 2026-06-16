/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, PhoneCall, ArrowUpRight, Globe } from 'lucide-react';
import Logo from './Logo';
import { useLanguage } from '../context/LanguageContext';

interface HeaderProps {
  activePage: string;
  setActivePage: (page: string) => void;
  openQuoteModal: () => void;
}

export default function Header({ activePage, setActivePage, openQuoteModal }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  const navItems = [
    { id: 'home', label: t('navHome') },
    { id: 'about', label: t('navAbout') },
    { id: 'services', label: t('navServices') },
    { id: 'portfolio', label: t('navPortfolio') },
    { id: 'why-us', label: t('navWhyUs') },
    { id: 'testimonials', label: t('navReviews') },
    { id: 'faq', label: t('navFaq') },
    { id: 'contact', label: t('navContact') },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleNavClick = (pageId: string) => {
    setActivePage(pageId);
    setIsOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-luxury-black/80 backdrop-blur-md border-b border-white/5'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-50">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="cursor-pointer" onClick={() => handleNavClick('home')}>
            <Logo size="md" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-zinc-900/30 border border-white/5 px-2 py-1.5 rounded-full backdrop-blur-sm">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-colors duration-300 ${
                  activePage === item.id ? 'text-white font-semibold' : 'text-zinc-400 hover:text-white'
                }`}
              >
                {activePage === item.id && (
                  <motion.div
                    layoutId="activeNavBackground"
                    className="absolute inset-0 bg-blue-500/10 border border-blue-500/30 rounded-full glow-blue"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {item.label}
              </button>
            ))}
          </nav>

          {/* Action Call / Contact info / Call to action */}
          <div className="hidden sm:flex items-center gap-4">
            {/* Elegant Language Switcher Pill */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 border border-white/5 hover:border-white/10 bg-zinc-950/40 hover:bg-zinc-900/40 transition-all duration-300 rounded-full text-[10px] font-mono tracking-wider text-zinc-300 uppercase shrink-0"
              title={language === 'en' ? 'Премини на Български' : 'Switch to English'}
            >
              <Globe className="w-3.5 h-3.5 text-blue-500" />
              <span className={language === 'bg' ? 'text-white font-bold' : 'text-zinc-500'}>БГ</span>
              <span className="text-zinc-700">|</span>
              <span className={language === 'en' ? 'text-white font-bold' : 'text-zinc-500'}>EN</span>
            </button>

            <div className="flex items-center gap-2">
              <a
                href="tel:0888616641"
                className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors duration-300 font-mono text-[11px] border border-white/5 px-3 py-2 rounded-full bg-zinc-950/20"
                title="Обадете се на 0888 61 66 41"
              >
                <PhoneCall className="w-3 h-3 text-blue-500" />
                <span>0888 61 66 41</span>
              </a>
              <a
                href="tel:0888379886"
                className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors duration-300 font-mono text-[11px] border border-white/5 px-3 py-2 rounded-full bg-zinc-950/20"
                title="Обадете се на 0888 37 98 86"
              >
                <PhoneCall className="w-3 h-3 text-blue-500" />
                <span>0888 37 98 86</span>
              </a>
            </div>
            <button
              onClick={openQuoteModal}
              className="relative overflow-hidden group bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs px-5 py-2.5 rounded-full transition-all duration-300 shadow-md shadow-blue-600/10 flex items-center gap-1"
            >
              <span className="relative z-10">{t('freeQuote')}</span>
              <ArrowUpRight className="w-3.5 h-3.5 relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-blue-500 to-indigo-600 transition-transform duration-300 ease-out" />
            </button>
          </div>

          {/* Mobile Menu Button + Direct Language Switcher */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              className="sm:hidden flex items-center gap-1 px-2.5 py-1.5 border border-white/10 bg-zinc-950/40 hover:border-white/20 text-zinc-300 rounded-full text-[10px] uppercase font-mono tracking-wider transition-colors focus:outline-none"
              title={language === 'en' ? 'Премини на Български' : 'Switch to English'}
            >
              <Globe className="w-3 h-3 text-blue-500 animate-pulse" />
              <span>{language === 'en' ? 'EN' : 'БГ'}</span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-full border border-white/10 bg-zinc-950/40 text-zinc-300 hover:text-white hover:border-white/20 transition-all focus:outline-none"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Full-screen backdrop blur overlay on mobile when menu is active */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/75 backdrop-blur-md z-30 lg:hidden cursor-pointer"
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="absolute top-full left-0 w-full bg-zinc-950/98 backdrop-blur-2xl border-b border-white/10 py-6 px-4 z-40 lg:hidden shadow-2xl overflow-y-auto max-h-[85vh]"
          >
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left py-3 px-4 rounded-xl text-sm font-medium tracking-wide transition-all ${
                    activePage === item.id
                      ? 'bg-blue-600/10 text-blue-400 border-l-4 border-blue-500 pl-3'
                      : 'text-zinc-300 hover:bg-zinc-900/40 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}

              <div className="h-px bg-white/5 my-4" />

              <div className="flex flex-col gap-3 px-2">
                <div className="flex flex-col gap-2.5 py-2 border-y border-white/5">
                  <div className="text-zinc-500 font-medium text-[11px] uppercase tracking-wider font-mono">
                    {language === 'en' ? 'Call Us' : 'Телефони за контакт'}
                  </div>
                  <div className="flex flex-col gap-2">
                    <a
                      href="tel:0888616641"
                      className="flex items-center justify-between text-zinc-300 hover:text-blue-400 transition-colors font-mono text-xs px-3 py-2 bg-white/5 rounded-lg"
                    >
                      <span className="flex items-center gap-2">
                        <PhoneCall className="w-3.5 h-3.5 text-blue-500" />
                        <span>0888 61 66 41</span>
                      </span>
                    </a>
                    <a
                      href="tel:0888379886"
                      className="flex items-center justify-between text-zinc-300 hover:text-blue-400 transition-colors font-mono text-xs px-3 py-2 bg-white/5 rounded-lg"
                    >
                      <span className="flex items-center gap-2">
                        <PhoneCall className="w-3.5 h-3.5 text-blue-500" />
                        <span>0888 37 98 86</span>
                      </span>
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    openQuoteModal();
                  }}
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-3 rounded-xl transition-all shadow-md shadow-blue-600/20 text-center flex items-center justify-center gap-2 text-sm"
                >
                  <span>{t('getFreeQuote')}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
