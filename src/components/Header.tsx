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
        isScrolled
          ? 'py-3 bg-luxury-black/80 backdrop-blur-md border-b border-white/5'
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
                className={`relative px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-colors duration-300 ${
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
          <div className="hidden sm:flex items-center gap-4">
            {/* Social Links */}
            <div className="hidden md:flex items-center gap-3 px-4 py-2 border-l border-white/5">
              <a
                href="https://www.facebook.com/share/18n7DfUWJW/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-blue-400 transition-colors"
                title="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/arstudio.site?igsh=MWVuejR2ZWVjd3c1cw=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-pink-400 transition-colors"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.tiktok.com/@ar_studio_web?_r=1&_t=ZN-98m3jc1KODD"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition-colors"
                title="TikTok"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.68v13.67a2.4 2.4 0 1 1-4.77-1.58A2.4 2.4 0 0 1 9.1 13.46v3.83a6.8 6.8 0 1 0 12.46 4s0-4.07-1.97-4.77z" />
                </svg>
              </a>
            </div>

            {/* Elegant Language Switcher Pill */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/50 border border-white/10 hover:border-blue-500/30 text-xs font-medium text-zinc-300 hover:text-white transition-all"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{language === 'bg' ? 'EN' : 'BG'}</span>
            </button>

            {/* CTA Button */}
            <button
              onClick={openQuoteModal}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-blue-500/30"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{t('freeQuote')}</span>
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
            className="lg:hidden fixed inset-0 top-16 bg-luxury-black backdrop-blur-md border-b border-white/5"
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
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.68v13.67a2.4 2.4 0 1 1-4.77-1.58A2.4 2.4 0 0 1 9.1 13.46v3.83a6.8 6.8 0 1 0 12.46 4s0-4.07-1.97-4.77z" />
                  </svg>
                </a>
              </div>

              {/* Mobile Language Switcher */}
              <button
                onClick={toggleLanguage}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-zinc-900/50 border border-white/10 hover:border-blue-500/30 text-white font-semibold transition-all"
              >
                <Globe className="w-4 h-4" />
                <span>{language === 'bg' ? 'Switch to English' : 'Смяна на български'}</span>
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
