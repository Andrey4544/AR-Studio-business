/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import {
  ArrowUpRight,
  BriefcaseBusiness,
  CircleHelp,
  FileText,
  Globe,
  House,
  Images,
  Layers3,
  Menu,
  MessageCircleHeart,
  PhoneCall,
  Sparkles,
  UserRound,
  UsersRound,
  X,
} from 'lucide-react';
import Logo from './Logo';
import { useLanguage } from '../context/LanguageContext';
import { localizedPath } from '../lib/localizedRoutes';

interface HeaderProps {
  openQuoteModal: () => void;
}

type MenuItem = {
  path: string;
  label: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
};

type MenuGroup = {
  label: string;
  items: MenuItem[];
};

export default function Header({ openQuoteModal }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();
  const location = useLocation();
  const isEnglish = language === 'en';
  const localized = (path: string) => localizedPath(path, language);

  const menuGroups: MenuGroup[] = [
    {
      label: isEnglish ? 'START HERE' : 'ЗАПОЧНЕТЕ ОТТУК',
      items: [
        { path: '/', label: t('navHome'), description: isEnglish ? 'Overview of AR Studio' : 'Преглед на AR Studio', icon: House },
        { path: '/uslugi', label: t('navServices'), description: isEnglish ? 'All services and prices' : 'Всички услуги и цени', icon: Layers3 },
        { path: '/web-design-plovdiv', label: isEnglish ? 'Web design in Plovdiv' : 'Уеб дизайн в Пловдив', description: isEnglish ? 'Local web design offer' : 'Локална услуга за уеб дизайн', icon: Sparkles },
      ],
    },
    {
      label: isEnglish ? 'SOLUTIONS FOR BUSINESS' : 'РЕШЕНИЯ ЗА БИЗНЕСА',
      items: [
        { path: '/uslugi/izrabotka-na-sait-plovdiv', label: isEnglish ? 'Business website' : 'Фирмен уебсайт', description: isEnglish ? 'Modern business presentation' : 'Модерно бизнес представяне', icon: BriefcaseBusiness },
        { path: '/uslugi/izrabotka-na-onlayn-magazin', label: isEnglish ? 'Online store' : 'Онлайн магазин', description: isEnglish ? 'For product sales' : 'За продажба на продукти', icon: Images },
        { path: '/uslugi/sait-za-restorant-plovdiv', label: isEnglish ? 'Restaurant website' : 'Сайт за ресторант', description: isEnglish ? 'Menu and reservations' : 'Меню и резервации', icon: Sparkles },
        { path: '/uslugi/sait-za-kozmetichen-salon-plovdiv', label: isEnglish ? 'Beauty salon website' : 'Сайт за козметичен салон', description: isEnglish ? 'Beauty services online' : 'Beauty услуги онлайн', icon: Sparkles },
        { path: '/uslugi/sait-za-hotel-plovdiv', label: isEnglish ? 'Hotel website' : 'Сайт за хотел', description: isEnglish ? 'For stays and bookings' : 'За настаняване и резервации', icon: BriefcaseBusiness },
        { path: '/uslugi/sait-za-advokatska-kantora', label: isEnglish ? 'Law firm website' : 'Сайт за адвокатска кантора', description: isEnglish ? 'Trust-building digital presence' : 'Дигитално присъствие с доверие', icon: UserRound },
      ],
    },
    {
      label: isEnglish ? 'WORK & TRUST' : 'ПРОЕКТИ И ДОВЕРИЕ',
      items: [
        { path: '/portfolio', label: t('navPortfolio'), description: isEnglish ? 'Selected completed projects' : 'Подбрани завършени проекти', icon: Images },
        { path: '/otzivy', label: t('navReviews'), description: isEnglish ? 'Client feedback' : 'Мнения от клиенти', icon: MessageCircleHeart },
        { path: '/blog', label: isEnglish ? 'Blog & resources' : 'Блог и ресурси', description: isEnglish ? 'Guides for website growth' : 'Полезни статии за растеж', icon: FileText },
      ],
    },
    {
      label: isEnglish ? 'ABOUT & CONTACT' : 'ЗА НАС И КОНТАКТ',
      items: [
        { path: '/za-nas', label: t('navAbout'), description: isEnglish ? 'The people behind the studio' : 'Хората зад студиото', icon: UsersRound },
        { path: '/zashto-nas', label: t('navWhyUs'), description: isEnglish ? 'Our approach and process' : 'Нашият подход и процес', icon: Sparkles },
        { path: '/chzv', label: t('navFaq'), description: isEnglish ? 'Frequently asked questions' : 'Често задавани въпроси', icon: CircleHelp },
        { path: '/kontakti', label: t('navContact'), description: isEnglish ? 'Start a conversation' : 'Започнете разговор', icon: PhoneCall },
      ],
    },
  ];

  const desktopLinks = [
    { path: '/', label: t('navHome') },
    { path: '/uslugi', label: t('navServices') },
    { path: '/portfolio', label: t('navPortfolio') },
    { path: '/blog', label: isEnglish ? 'Blog' : 'Блог' },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const isActive = (path: string) => location.pathname === localized(path);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        isScrolled || isOpen
          ? 'bg-[#07131b]/92 py-3 shadow-[0_12px_45px_rgba(0,0,0,0.32)] backdrop-blur-xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3">
          <Link to={localized('/')} aria-label="AR Studio" className="shrink-0 cursor-pointer">
            <Logo size="md" />
          </Link>

          <nav aria-label={isEnglish ? 'Primary navigation' : 'Основна навигация'} className="hidden xl:flex items-center gap-1 rounded-full border border-white/15 bg-[#091823]/58 p-1.5 backdrop-blur-md">
            {desktopLinks.map((item) => (
              <Link
                key={item.path}
                to={localized(item.path)}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isActive(item.path) ? 'text-white' : 'text-zinc-400 hover:text-white'
                }`}
              >
                {isActive(item.path) && (
                  <motion.span
                    layoutId="activeDesktopNavigation"
                    className="absolute inset-0 rounded-full border border-[#e0bb63]/35 bg-[#d2ad52]/10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </Link>
            ))}
          </nav>

          <div className="flex items-center justify-end gap-2 sm:gap-3">
            <button
              type="button"
              onClick={toggleLanguage}
              className="flex items-center rounded-lg border border-white/10 bg-zinc-900/60 px-2.5 py-2 text-[11px] font-bold tracking-wide transition-all hover:border-blue-400/35 hover:bg-zinc-800"
              aria-label={isEnglish ? 'Switch language' : 'Смяна на езика'}
            >
              <span className={language === 'bg' ? 'text-white' : 'text-zinc-500'}>БГ</span>
              <span className="mx-1.5 text-zinc-600">/</span>
              <span className={language === 'en' ? 'text-white' : 'text-zinc-500'}>EN</span>
            </button>

            <button
              onClick={openQuoteModal}
              className="hidden sm:flex items-center justify-center gap-2 rounded-xl bg-[#d2ad52] px-4 py-2.5 text-xs font-bold text-[#17130a] shadow-lg shadow-black/20 transition-all hover:bg-[#ebc866] hover:shadow-[#d2ad52]/25"
            >
              <PhoneCall className="h-3.5 w-3.5" />
              <span>{t('freeQuote')}</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </button>

            <button
              type="button"
              onClick={() => setIsOpen((open) => !open)}
              className={`flex items-center gap-2 rounded-xl border px-3 py-2.5 text-sm font-semibold transition-all ${
                isOpen
                  ? 'border-blue-400/50 bg-blue-500/15 text-white'
                  : 'border-white/10 bg-zinc-900/60 text-zinc-200 hover:border-blue-400/35 hover:bg-zinc-800 hover:text-white'
              }`}
              aria-label={isOpen ? (isEnglish ? 'Hide navigation' : 'Скрий менюто') : isEnglish ? 'Show navigation' : 'Покажи менюто'}
              aria-expanded={isOpen}
              aria-controls="site-navigation-panel"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              <span className="hidden min-[420px]:inline">{isEnglish ? 'Menu' : 'Меню'}</span>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            id="site-navigation-panel"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            aria-label={isEnglish ? 'Full site navigation' : 'Пълна навигация в сайта'}
            className="absolute left-0 right-0 top-full border-t border-white/10 bg-[#0a0a0c] shadow-[0_22px_50px_rgba(0,0,0,0.45)]"
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="max-h-[calc(100dvh-76px)] overflow-y-auto py-5 sm:py-6">
                <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
                  {menuGroups.map((group) => (
                    <section key={group.label} className="rounded-2xl border border-white/10 bg-white/[0.025] p-3 sm:p-4">
                      <p className="mb-3 px-1 text-[10px] font-bold tracking-[0.16em] text-blue-300">{group.label}</p>
                      <div className="space-y-1.5">
                        {group.items.map((item) => {
                          const Icon = item.icon;
                          const active = isActive(item.path);
                          return (
                            <Link
                              to={localized(item.path)}
                              onClick={() => setIsOpen(false)}
                              className={`flex items-center gap-3 rounded-xl px-3 py-3 transition-all ${
                                active
                                  ? 'bg-blue-500/15 text-white ring-1 ring-inset ring-blue-400/30'
                                  : 'text-zinc-300 hover:bg-white/[0.07] hover:text-white'
                              }`}
                            >
                              <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border ${
                                active ? 'border-blue-400/30 bg-blue-500/15 text-blue-200' : 'border-white/10 bg-white/[0.03] text-zinc-400'
                              }`}>
                                <Icon className="h-4 w-4" />
                              </span>
                              <span className="min-w-0">
                                <span className="block text-sm font-semibold">{item.label}</span>
                                <span className="mt-0.5 block truncate text-xs text-zinc-500">{item.description}</span>
                              </span>
                            </Link>
                          );
                        })}
                      </div>
                    </section>
                  ))}
                </div>

                <div className="mt-5 flex flex-col gap-3 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm text-zinc-400">
                    {isEnglish ? 'Have a project in mind?' : 'Имате проект наум?'}
                  </p>
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                    <button
                      type="button"
                      onClick={toggleLanguage}
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-zinc-200 transition-colors hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-white"
                      aria-label={isEnglish ? 'Switch language' : 'Смяна на езика'}
                    >
                      <Globe className="h-4 w-4 text-blue-300" />
                      <span>{isEnglish ? 'Български' : 'English'}</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setIsOpen(false);
                        openQuoteModal();
                      }}
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-500"
                    >
                      <PhoneCall className="h-4 w-4" />
                      {t('freeQuote')}
                      <ArrowUpRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
