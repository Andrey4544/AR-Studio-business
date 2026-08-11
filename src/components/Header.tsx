/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, PhoneCall, ArrowUpRight, Globe, Facebook, Instagram } from 'lucide-react';
import Logo from './Logo';
import { useLanguage } from '../context/LanguageContext';

interface HeaderProps {
  openQuoteModal: () => void;
}

export default function Header({ openQuoteModal }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();
  const location = useLocation();

  const navItems = [
    { path: '/', label: t('navHome') },
    { path: '/za-nas', label: t('navAbout') },
    { path: '/uslugi', label: t('navServices') },
    { path: '/portfolio', label: t('navPortfolio') },
    { path: '/zashto-nas', label: t('navWhyUs') },
    { path: '/otzivy', label: t('navReviews') },
    { path: '/chzv', label: t('navFaq') },
    { path: '/kontakti', label: t('navContact') },
    { path: '/blog', label: language === 'en' ? 'Blog' : 'Блог' },
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

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isOpen
          ? 'py-3 bg-luxury-black border-b border-white/5'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-50">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="cursor-pointer">
            <Logo size="md" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-zinc-900/30 border border-white/5 px-2 py-1.5 rounded-full backdrop-blur-sm">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-colors duration-300 text-center min-w-[90px] ${
                  isActive(item.path) ? 'text-white font-semibold' : 'text-zinc-400 hover:text-white'
                }`}
              >
                {isActive(item.path) && (
                  <motion.div
                    layoutId="activeNavBackground"
                    className="absolute inset-0 bg-blue-500/10 border border-blue-500/30 rounded-full glow-blue"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </Link>
            ))}
          </nav>

          {/* Action Call / Contact info / Call to action */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Language Switcher Pill - Desktop */}
            <button
              onClick={toggleLanguage}
              className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/50 border border-white/10 hover:border-blue-500/30 text-xs font-medium text-zinc-300 hover:text-white transition-all"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{language === 'bg' ? 'BG' : 'EN'}</span>
            </button>

            {/* Language Switcher for Mobile - Replaces CTA on mobile */}
            <button
              onClick={toggleLanguage}
              className="flex sm:hidden items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg transition-all shadow-lg shadow-blue-500/20 min-w-[60px]"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{language === 'bg' ? 'BG' : 'EN'}</span>
            </button>

            {/* CTA Button - Desktop Only */}
            <button
              onClick={openQuoteModal}
              className="hidden sm:flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-blue-500/30 min-w-[140px]"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>{t('freeQuote')}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-zinc-400 hover:text-white transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden fixed inset-0 top-[70px] bg-luxury-black border-b border-white/5 z-[60]"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-lg transition-colors ${
                    isActive(item.path)
                      ? 'bg-blue-500/10 text-white font-semibold'
                      : 'text-zinc-400 hover:text-white hover:bg-zinc-900/50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              {/* Mobile Social Links */}
              <div className="flex items-center gap-4 px-4 py-4 border-t border-white/5 mt-4">
                <a
                  href="https://www.facebook.com/share/18n7DfUWJW/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-blue-400 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/arstudio.site?igsh=MWVuejR2ZWVjd3c1cw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-pink-400 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.tiktok.com/@ar_studio_web?_r=1&_t=ZN-98m3jc1KODD"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.06 3.42-.01 6.83-.02 10.25-.03 1.28-.31 2.59-.97 3.69-1.32 2.2-3.84 3.53-6.39 3.54-2.52.03-4.97-1.24-6.13-3.48-1.23-2.3-1.07-5.32.49-7.41 1.43-1.92 3.84-2.9 6.19-2.56.03-1.49-.02-2.98-.03-4.48-2.48-.36-5.02.29-6.96 1.87-2.3 1.82-3.5 4.88-3.06 7.82.46 3.48 3.12 6.46 6.56 7.18 3.5.76 7.33-1.08 8.84-4.3.7-1.5.81-3.21.78-4.87-.02-4.58-.01-9.17-.02-13.75z" />
                  </svg>
                </a>
              </div>

              {/* Mobile Language Switcher */}
              <button
                onClick={toggleLanguage}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-zinc-900/50 border border-white/10 hover:border-blue-500/30 text-white font-semibold transition-all"
              >
                <Globe className="w-4 h-4" />
                <span>{language === 'bg' ? 'BG' : 'EN'}</span>
              </button>

              {/* Mobile CTA */}
              <button
                onClick={() => {
                  openQuoteModal();
                  setIsOpen(false);
                }}
                className="w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all mt-4"
              >
                {t('freeQuote')}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
