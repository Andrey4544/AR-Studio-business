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
  ChevronRight,
  CircleHelp,
  Facebook,
  FileText,
  Globe,
  House,
  Images,
  Instagram,
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
  eyebrow: string;
  title: string;
  description: string;
  items: MenuItem[];
};

export default function Header({ openQuoteModal }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();
  const location = useLocation();
  const isEnglish = language === 'en';

  const menuGroups: MenuGroup[] = [
    {
      eyebrow: isEnglish ? 'DISCOVER' : 'РАЗГЛЕДАЙТЕ',
      title: isEnglish ? 'Start with the essentials' : 'Започнете от най-важното',
      description: isEnglish
        ? 'The fastest path to understand our work and the right next step for your business.'
        : 'Най-прекият път да видите как работим и коя е следващата правилна стъпка за вашия бизнес.',
      items: [
        {
          path: '/',
          label: t('navHome'),
          description: isEnglish ? 'A clear overview of AR Studio.' : 'Ясен поглед към AR Studio и начина ни на работа.',
          icon: House,
        },
        {
          path: '/uslugi',
          label: t('navServices'),
          description: isEnglish ? 'Websites, online stores and growth-focused digital solutions.' : 'Уебсайтове, онлайн магазини и дигитални решения за растеж.',
          icon: Layers3,
        },
        {
          path: '/web-design-plovdiv',
          label: isEnglish ? 'Web design in Plovdiv' : 'Уеб дизайн в Пловдив',
          description: isEnglish ? 'Our local web-design offer for ambitious businesses.' : 'Локално решение за бизнеси, които искат по-силно онлайн присъствие.',
          icon: Sparkles,
        },
      ],
    },
    {
      eyebrow: isEnglish ? 'SOLUTIONS' : 'РЕШЕНИЯ',
      title: isEnglish ? 'Choose your business direction' : 'Изберете посоката за вашия бизнес',
      description: isEnglish
        ? 'Specialised starting points for the most common website projects.'
        : 'Специализирани отправни точки за най-честите типове уеб проекти.',
      items: [
        {
          path: '/uslugi/izrabotka-na-sait-plovdiv',
          label: isEnglish ? 'Business website' : 'Фирмен уебсайт',
          description: isEnglish ? 'A modern website that presents your business with confidence.' : 'Модерен сайт, който представя бизнеса ви уверено.',
          icon: BriefcaseBusiness,
        },
        {
          path: '/uslugi/izrabotka-na-onlayn-magazin',
          label: isEnglish ? 'Online store' : 'Онлайн магазин',
          description: isEnglish ? 'A fast, conversion-focused storefront for your products.' : 'Бърз и удобен магазин, създаден за продажби.',
          icon: Images,
        },
        {
          path: '/uslugi/sait-za-restorant-plovdiv',
          label: isEnglish ? 'Restaurant website' : 'Сайт за ресторант',
          description: isEnglish ? 'Menus, reservations and a stronger first impression.' : 'Меню, резервации и по-силно първо впечатление.',
          icon: Sparkles,
        },
        {
          path: '/uslugi/sait-za-kozmetichen-salon-plovdiv',
          label: isEnglish ? 'Beauty salon website' : 'Сайт за козметичен салон',
          description: isEnglish ? 'An elegant digital experience for beauty services.' : 'Елегантно дигитално изживяване за beauty услуги.',
          icon: Sparkles,
        },
        {
          path: '/uslugi/sait-za-hotel-plovdiv',
          label: isEnglish ? 'Hotel website' : 'Сайт за хотел',
          description: isEnglish ? 'A refined online home for stays and reservations.' : 'Премиум онлайн дом за настаняване и резервации.',
          icon: BriefcaseBusiness,
        },
        {
          path: '/uslugi/sait-za-advokatska-kantora',
          label: isEnglish ? 'Law firm website' : 'Сайт за адвокатска кантора',
          description: isEnglish ? 'Trust-building digital presence for legal practice.' : 'Дигитално присъствие, което изгражда доверие.',
          icon: UserRound,
        },
      ],
    },
    {
      eyebrow: isEnglish ? 'PROOF & INSIGHT' : 'ДОКАЗАТЕЛСТВА И ИДЕИ',
      title: isEnglish ? 'See the work behind the promise' : 'Вижте работата зад обещанието',
      description: isEnglish
        ? 'Explore real projects, client feedback and practical guidance for your next decision.'
        : 'Разгледайте реални проекти, клиентски мнения и практични съвети за следващото си решение.',
      items: [
        {
          path: '/portfolio',
          label: t('navPortfolio'),
          description: isEnglish ? 'Selected projects and visual directions.' : 'Подбрани проекти и визуални посоки.',
          icon: Images,
        },
        {
          path: '/otzivy',
          label: t('navReviews'),
          description: isEnglish ? 'Feedback from clients who have worked with us.' : 'Мнения от клиенти, работили с нас.',
          icon: MessageCircleHeart,
        },
        {
          path: '/blog',
          label: isEnglish ? 'Blog & resources' : 'Блог и ресурси',
          description: isEnglish ? 'Useful articles on websites, SEO and digital growth.' : 'Полезни статии за сайтове, SEO и дигитален растеж.',
          icon: FileText,
        },
      ],
    },
    {
      eyebrow: isEnglish ? 'ABOUT & CONTACT' : 'ЗА НАС И КОНТАКТ',
      title: isEnglish ? 'Get to know AR Studio' : 'Опознайте AR Studio',
      description: isEnglish
        ? 'Everything you need before starting a conversation with our team.'
        : 'Всичко необходимо, преди да започнем разговор за вашия проект.',
      items: [
        {
          path: '/za-nas',
          label: t('navAbout'),
          description: isEnglish ? 'The people, principles and approach behind the studio.' : 'Хората, принципите и подходът зад студиото.',
          icon: UsersRound,
        },
        {
          path: '/zashto-nas',
          label: t('navWhyUs'),
          description: isEnglish ? 'What makes our process clear, focused and reliable.' : 'Какво прави процеса ни ясен, фокусиран и надежден.',
          icon: Sparkles,
        },
        {
          path: '/chzv',
          label: t('navFaq'),
          description: isEnglish ? 'Helpful answers before you begin.' : 'Полезни отговори, преди да започнете.',
          icon: CircleHelp,
        },
        {
          path: '/kontakti',
          label: t('navContact'),
          description: isEnglish ? 'Tell us about the project you have in mind.' : 'Разкажете ни за проекта, който имате предвид.',
          icon: PhoneCall,
        },
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
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

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

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isOpen
          ? 'py-3 bg-luxury-black/95 border-b border-white/10 shadow-[0_12px_45px_rgba(0,0,0,0.32)] backdrop-blur-xl'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3">
          <Link to="/" aria-label="AR Studio" className="shrink-0 cursor-pointer">
            <Logo size="md" />
          </Link>

          <nav aria-label={isEnglish ? 'Primary navigation' : 'Основна навигация'} className="hidden xl:flex items-center gap-1 rounded-full border border-white/10 bg-zinc-900/50 p-1.5 backdrop-blur-sm">
            {desktopLinks.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isActive(item.path) ? 'text-white' : 'text-zinc-400 hover:text-white'
                }`}
              >
                {isActive(item.path) && (
                  <motion.span
                    layoutId="activeDesktopNavigation"
                    className="absolute inset-0 rounded-full border border-blue-400/30 bg-blue-500/10 shadow-[0_0_20px_rgba(59,130,246,0.16)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </Link>
            ))}
          </nav>

          <div className="flex items-center justify-end gap-2 sm:gap-3">
            <button
              onClick={toggleLanguage}
              className="hidden sm:flex items-center gap-2 rounded-full border border-white/10 bg-zinc-900/50 px-3 py-2 text-xs font-semibold text-zinc-300 transition-all hover:border-blue-400/30 hover:text-white"
              aria-label={isEnglish ? 'Switch language' : 'Смяна на езика'}
            >
              <Globe className="h-3.5 w-3.5" />
              <span>{language === 'bg' ? 'BG' : 'EN'}</span>
            </button>

            <button
              onClick={openQuoteModal}
              className="hidden sm:flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-xs font-semibold text-white shadow-lg shadow-blue-500/20 transition-all hover:bg-blue-500 hover:shadow-blue-500/35"
            >
              <PhoneCall className="h-3.5 w-3.5" />
              <span>{t('freeQuote')}</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </button>

            <button
              onClick={() => setIsOpen((open) => !open)}
              className={`group flex items-center gap-2 rounded-xl border px-3 py-2.5 text-sm font-semibold transition-all ${
                isOpen
                  ? 'border-blue-400/50 bg-blue-500/15 text-white'
                  : 'border-white/10 bg-zinc-900/60 text-zinc-200 hover:border-blue-400/35 hover:bg-zinc-800 hover:text-white'
              }`}
              aria-label={isOpen ? (isEnglish ? 'Close menu' : 'Затвори менюто') : isEnglish ? 'Open menu' : 'Отвори менюто'}
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
          <motion.div
            id="site-navigation-panel"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] isolate overflow-hidden bg-[#060608] backdrop-blur-2xl"
            role="dialog"
            aria-modal="true"
            aria-label={isEnglish ? 'Site navigation' : 'Навигация в сайта'}
          >
            <motion.div
              initial={{ opacity: 0, y: -24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.24, ease: 'easeOut' }}
              className="flex h-[100dvh] flex-col"
            >
              <div className="shrink-0 border-b border-white/10 bg-black/20">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10 text-blue-200">
                      <Menu className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold tracking-[0.2em] text-blue-300">AR STUDIO</p>
                      <p className="mt-0.5 text-sm font-semibold text-white">{isEnglish ? 'Explore the site' : 'Разгледайте сайта'}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-sm font-semibold text-zinc-200 transition-all hover:border-white/25 hover:bg-white/[0.08] hover:text-white"
                  >
                    <X className="h-5 w-5" />
                    <span>{isEnglish ? 'Close' : 'Затвори'}</span>
                  </button>
                </div>
              </div>

              <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
                <div className="mx-auto max-w-7xl px-4 pb-10 pt-7 sm:px-6 sm:pt-10 lg:px-8">
                  <div className="mb-8 flex flex-col justify-between gap-4 border-b border-white/10 pb-7 md:flex-row md:items-end">
                    <div className="max-w-2xl">
                      <p className="text-[10px] font-bold tracking-[0.22em] text-blue-300">{isEnglish ? 'NAVIGATION' : 'НАВИГАЦИЯ'}</p>
                      <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                        {isEnglish ? 'Find exactly what you need.' : 'Намерете точно това, което ви трябва.'}
                      </h2>
                    </div>
                    <p className="max-w-md text-sm leading-6 text-zinc-400">
                      {isEnglish
                        ? 'The sections are organised by the natural path from first impression to project conversation.'
                        : 'Разделите са подредени според естествения път от първото впечатление до разговора за проект.'}
                    </p>
                  </div>

                  <div className="grid gap-7 xl:grid-cols-2 xl:gap-x-12 xl:gap-y-9">
                    {menuGroups.map((group, groupIndex) => (
                      <section key={group.title} className="border-t border-white/10 pt-5">
                        <div className="mb-4 flex items-start gap-4">
                          <span className="pt-0.5 text-xs font-bold tracking-[0.16em] text-blue-300/80">0{groupIndex + 1}</span>
                          <div>
                            <p className="text-[10px] font-bold tracking-[0.2em] text-zinc-500">{group.eyebrow}</p>
                            <h3 className="mt-1 text-xl font-semibold text-white">{group.title}</h3>
                            <p className="mt-1.5 max-w-xl text-sm leading-6 text-zinc-400">{group.description}</p>
                          </div>
                        </div>

                        <div className="divide-y divide-white/10 border-y border-white/10">
                          {group.items.map((item) => {
                            const Icon = item.icon;
                            const active = isActive(item.path);
                            return (
                              <Link
                                key={item.path}
                                to={item.path}
                                className={`group/item flex items-center gap-4 px-2 py-4 transition-colors sm:px-3 ${
                                  active ? 'bg-blue-500/[0.09]' : 'hover:bg-white/[0.045]'
                                }`}
                              >
                                <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border transition-all ${
                                  active
                                    ? 'border-blue-400/45 bg-blue-500/15 text-blue-200 shadow-[0_0_24px_rgba(59,130,246,0.12)]'
                                    : 'border-white/10 bg-white/[0.035] text-zinc-400 group-hover/item:border-blue-400/30 group-hover/item:text-blue-200'
                                }`}>
                                  <Icon className="h-5 w-5" />
                                </div>
                                <div className="min-w-0 flex-1">
                                  <div className="flex items-center gap-2">
                                    <span className="text-base font-semibold text-white sm:text-[17px]">{item.label}</span>
                                    {active && <span className="rounded-full border border-blue-400/30 bg-blue-500/10 px-2 py-0.5 text-[10px] font-bold tracking-wide text-blue-200">{isEnglish ? 'HERE' : 'ТУК'}</span>}
                                  </div>
                                  <p className="mt-1 text-sm leading-5 text-zinc-400 group-hover/item:text-zinc-300">{item.description}</p>
                                </div>
                                <ChevronRight className="h-5 w-5 shrink-0 text-zinc-600 transition-all group-hover/item:translate-x-0.5 group-hover/item:text-blue-300" />
                              </Link>
                            );
                          })}
                        </div>
                      </section>
                    ))}
                  </div>

                  <div className="mt-10 grid gap-5 border-t border-white/10 pt-7 lg:grid-cols-[1fr_auto] lg:items-center">
                    <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-zinc-400">
                      <span className="font-medium text-zinc-300">{isEnglish ? 'Stay connected' : 'Свържете се с нас'}</span>
                      <a href="https://www.facebook.com/share/18n7DfUWJW/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-blue-300">
                        <Facebook className="h-4 w-4" /> Facebook
                      </a>
                      <a href="https://www.instagram.com/arstudio.site?igsh=MWVuejR2ZWVjd3c1cw==" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-pink-300">
                        <Instagram className="h-4 w-4" /> Instagram
                      </a>
                      <button onClick={toggleLanguage} className="inline-flex items-center gap-2 transition-colors hover:text-white">
                        <Globe className="h-4 w-4" /> {language === 'bg' ? 'BG' : 'EN'}
                      </button>
                    </div>
                    <button
                      onClick={() => {
                        openQuoteModal();
                        setIsOpen(false);
                      }}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all hover:bg-blue-500 hover:shadow-blue-500/35 lg:w-auto"
                    >
                      <PhoneCall className="h-4 w-4" />
                      {t('freeQuote')}
                      <ArrowUpRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
