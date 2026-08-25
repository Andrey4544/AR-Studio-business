/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import ImageCarousel from './ImageCarousel';
import { motion } from 'motion/react';
import { Sparkles, Globe, ArrowUpRight, Zap, Smartphone, QrCode } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { trackAnalyticsEvent } from '../lib/analytics';

// Carousel images for MM Showroom
const mmShowroomCarouselImages = [
  { src: '/assets/mm-showroom-hero.webp', alt: 'MM Showroom начална страница за премиум автомобили в Пловдив' },
  { src: '/assets/mm-showroom-listings.webp', alt: 'Каталог с налични автомобили на MM Showroom' },
  { src: '/assets/mm-showroom-trade-in.webp', alt: 'Форма за изкупуване и trade-in на автомобили в MM Showroom' },
  { src: '/assets/mm-showroom-location.webp', alt: 'Контакти и локация на MM Showroom в Пловдив' },
  { src: '/assets/mm-showroom-leasing.webp', alt: 'Лизингов калкулатор на сайта на MM Showroom' },
  { src: '/assets/mm-showroom-contact.webp', alt: 'Опции за директен контакт с MM Showroom' },
];

// Carousel images for Tomato Restaurant
const tomatoCarouselImages = [
  { src: '/assets/tomato-new.webp', alt: 'Изработка на уебсайт за Ресторант Tomato Пловдив - Дизайн от AR Studio' },
  { src: '/assets/tomato-main-hall.webp', alt: 'Интериор на Ресторант Tomato Пловдив - Уеб дизайн проект' },
  { src: '/assets/tomato-garden.webp', alt: 'Градина на Ресторант Tomato Пловдив - Уеб разработка' },
  { src: '/assets/tomato-bar.webp', alt: 'Бар на Ресторант Tomato - Професионален уеб дизайн' },
  { src: '/assets/tomato-event.webp', alt: 'Събития в Ресторант Tomato - Оптимизиран уебсайт' },
  { src: '/assets/tomato-gallery.webp', alt: 'Галерия на Ресторант Tomato - Модерен уеб дизайн' },
  { src: '/assets/tomato-contact.webp', alt: 'Контакти на Ресторант Tomato - Изработка от AR Studio' },
  { src: '/assets/tomato-reviews.webp', alt: 'Отзиви за Ресторант Tomato - SEO оптимизиран сайт' },
  { src: '/assets/tomato-qr.webp', alt: 'QR Меню за Ресторант Tomato Пловдив - Дигитални решения' },
];

// Carousel images for Teddy's Bar and Grill
const teddysCarouselImages = [
  { src: '/assets/teddys-logo.webp', alt: 'Teddy\'s Bar & Grill Logo' },
  { src: '/assets/teddys-logo-bw.webp', alt: 'Teddy\'s Bar & Grill Logo B&W' },
  { src: '/assets/teddys-logo-dark.webp', alt: 'Teddy\'s Bar & Grill Logo Dark' },
];

// Carousel images for BelEstateGroup
const belestateCarouselImages = [
  { src: '/assets/belestate-8.webp', alt: 'Уеб дизайн за недвижими имоти BelEstateGroup - AR Studio' },
  { src: '/assets/belestate-1.webp', alt: 'Начална страница на сайт за имоти BelEstateGroup' },
  { src: '/assets/belestate-2.webp', alt: 'Статии и блог за недвижими имоти - Разработка на сайтове' },
  { src: '/assets/belestate-3.webp', alt: 'Система за резервации на имоти - Софтуерни решения' },
  { src: '/assets/belestate-4.webp', alt: 'Контактна форма за имоти - Уеб разработка Пловдив' },
  { src: '/assets/belestate-5.webp', alt: 'Принципи и ценности на BelEstateGroup - Дизайн проект' },
  { src: '/assets/belestate-6.webp', alt: 'Търсачка за имоти - Функционален уеб дизайн' },
  { src: '/assets/belestate-7.webp', alt: 'Списък с имоти - Оптимизирано потребителско изживяване' },
];

// Carousel images for CBL Fight Store
const cblCarouselImages = [
  { src: '/assets/cbl-1.webp', alt: 'CBL Fight Store Hero' },
  { src: '/assets/cbl-2.webp', alt: 'CBL Fight Store Collection' },
  { src: '/assets/cbl-3.webp', alt: 'CBL Fight Store Products' },
  { src: '/assets/cbl-4.webp', alt: 'CBL Fight Store Product Detail' },
  { src: '/assets/cbl-5.webp', alt: 'CBL Fight Store Curved Shield' },
  { src: '/assets/cbl-6.webp', alt: 'CBL Fight Store Backpack' },
  { src: '/assets/cbl-7.webp', alt: 'CBL Fight Store Portfolio Section' },
  { src: '/assets/cbl-8.webp', alt: 'CBL Fight Store Cart and Products' },
];

// Carousel images for DimStan Hydro Service
const dimstanHydroCarouselImages = [
  { src: '/assets/dimstan-hydro-machine.jpg', alt: 'Сондажна машина и почистване на сондаж за вода с еърлифт' },
  { src: '/assets/dimstan-hydro-hero-wide.webp', alt: 'Начална страница на ДимСтан Хидро Сървис за сондажи за вода' },
  { src: '/assets/dimstan-hydro-diagnostics-wide.webp', alt: 'Диагностика на водоизточника и сигнали за почистване на сондаж' },
  { src: '/assets/dimstan-hydro-services-wide.webp', alt: 'Услуги и ценоразпис на ДимСтан Хидро Сървис' },
];

interface PortfolioProps {
  onQuoteClick: () => void;
}

export default function Portfolio({ onQuoteClick }: PortfolioProps) {
  const { featuredProjects, language, t } = useLanguage();

  return (
    <section className="py-24 bg-luxury-black relative overflow-hidden border-t border-white/5">
      {/* Background Decorative Radial Glows */}
      <div className="absolute top-[30%] left-[5%] w-[350px] h-[350px] rounded-full bg-blue-900/5 blur-[120px] pointer-events-none" />

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
              {language === 'en' ? 'CRAFTED SHOWCASE' : 'НАШИТЕ ПРОЕКТИ'}
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
            {language === 'en' ? (
              <>
                Featured Case Studies <br />
                <span className="bg-gradient-to-r from-zinc-100 via-zinc-400 to-zinc-600 bg-clip-text text-transparent">
                  And Elite Placements
                </span>
              </>
            ) : (
              <>
                Реални проекти <br />
                <span className="bg-gradient-to-r from-zinc-100 via-zinc-400 to-zinc-600 bg-clip-text text-transparent">
                  и успешни кейсове
                </span>
              </>
            )}
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            {t('portfolioDesc')}
          </p>
        </motion.div>

        {/* Featured Projects */}
        {featuredProjects.map((project, index) => {
          const isEven = index % 2 === 0;
          let carouselImages = tomatoCarouselImages;
          if (project.id === 'mm-showroom') carouselImages = mmShowroomCarouselImages;
          if (project.id === 'teddys-bar-grill') carouselImages = teddysCarouselImages;
          if (project.id === 'belestate-group') carouselImages = belestateCarouselImages;
          if (project.id === 'cbl-fight-store') carouselImages = cblCarouselImages;
          if (project.id === 'dimstan-hydro') carouselImages = dimstanHydroCarouselImages;

          return (
            <div key={project.id} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
              
              {/* Project Details Columns */}
              <motion.div
                initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className={`lg:col-span-5 space-y-6 ${!isEven ? 'lg:order-2' : ''}`}
              >
                <div className="flex items-center gap-2">
                  <span className="px-6 py-2 bg-blue-500/15 border-2 border-blue-500/30 text-[#3B82F6] font-mono font-black text-sm rounded-full uppercase tracking-[0.2em] shadow-[0_0_25px_rgba(59,130,246,0.2)]">
                    {project.category}
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-4xl font-bold text-white tracking-tight">
                  {project.title}
                </h3>

                <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                  {project.description}
                </p>

                {project.businessProblem && (
                  <div className="rounded-2xl border border-blue-400/15 bg-blue-500/[0.06] p-4 sm:p-5">
                    <p className="mb-2 font-mono text-[10px] font-bold tracking-[0.18em] text-blue-300 uppercase">
                      {language === 'en' ? 'The business problem it solves' : 'Какъв проблем решава'}
                    </p>
                    <p className="text-sm leading-relaxed text-zinc-300">
                      {project.businessProblem}
                    </p>
                  </div>
                )}

                {/* Structured Client Requested Highlights */}
                <div className="space-y-4 pt-4 border-t border-white/5">
                  <h4 className="text-xs font-mono font-bold uppercase text-zinc-500 tracking-wider">
                    {language === 'en' ? 'Core Implementations:' : 'Основни имплементации:'}
                  </h4>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-sans">
                    {project.highlights.slice(0, 4).map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-zinc-950/40 border border-white/5">
                        {idx === 0 && <Globe className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />}
                        {idx === 1 && <Zap className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />}
                        {idx === 2 && <Smartphone className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />}
                        {idx === 3 && <QrCode className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />}
                        <div>
                          <span className="text-xs font-semibold text-white block">
                            {highlight.split(' - ')[0]}
                          </span>
                          <span className="text-[10px] text-zinc-500 mt-0.5 block">
                            {highlight.split(' - ')[1] || highlight}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex items-center gap-4 pt-4 font-sans">
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackAnalyticsEvent('click_portfolio_live', { project: project.id })}
                      className="flex items-center gap-1.5 text-xs text-white font-semibold bg-zinc-900 border border-white/10 hover:border-white/20 hover:bg-zinc-850 px-5 py-3 rounded-xl transition-all duration-300 group cursor-pointer"
                    >
                      <span>{language === 'en' ? 'Live Website' : 'Уебсайт на живо'}</span>
                      <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  )}
                  <button
                    onClick={onQuoteClick}
                    className="text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors cursor-pointer"
                  >
                    {project.id === 'teddys-bar-grill' 
                      ? (language === 'en' ? 'Request Similar Logo →' : 'Искам подобно лого →')
                      : (language === 'en' ? 'Request Similar Design →' : 'Искам подобен дизайн →')}
                  </button>
                </div>
              </motion.div>

              {/* Screenshot Column using the new image */}
              <motion.div
                initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className={`lg:col-span-12 xl:col-span-7 flex justify-center w-full ${!isEven ? 'lg:order-1' : ''}`}
              >
                <div className="relative group overflow-hidden rounded-3xl border border-white/5 bg-zinc-950/20 p-2 sm:p-4 glow-blue w-full max-w-2xl">
                  {/* Browser Header Bar Representation - Only for websites */}
                  {project.url ? (
                    <div className="w-full flex items-center justify-between px-3 pb-3 border-b border-white/5">
                      <div className="flex gap-1.5">
                        <span className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
                        <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
                        <span className="h-2.5 w-2.5 rounded-full bg-green-500/60" />
                      </div>
                      <div className="bg-zinc-900 border border-white/5 text-[9px] text-zinc-500 font-mono px-6 py-0.5 rounded-md truncate max-w-[180px] sm:max-w-xs text-center select-none">
                        {project.url}
                      </div>
                      <span className="text-zinc-600 text-xs font-semibold tracking-wider font-mono">AR // Case</span>
                    </div>
                  ) : (
                    <div className="w-full flex items-center justify-between px-3 pb-3 border-b border-white/5">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-3 h-3 text-blue-400" />
                        <span className="text-[10px] text-zinc-400 font-mono uppercase tracking-widest">Design Asset</span>
                      </div>
                      <span className="text-zinc-600 text-xs font-semibold tracking-wider font-mono">AR // Studio</span>
                    </div>
                  )}
                  
                  {/* Image Carousel */}
                  <div className="relative mt-3">
                    <ImageCarousel images={carouselImages} interval={6000} />
                  </div>
                </div>
              </motion.div>
            </div>
          );
        })}

        {/* Suitable business types */}
        <div className="border-t border-white/5 pt-16">
          <div className="mb-9 max-w-2xl">
            <p className="mb-3 text-[10px] font-mono font-bold uppercase tracking-[0.18em] text-blue-400">
              {language === 'en' ? 'BUILT AROUND YOUR GOAL' : 'СЪЗДАДЕН СПОРЕД ВАШАТА ЦЕЛ'}
            </p>
            <h4 className="font-serif text-2xl font-bold tracking-tight text-white sm:text-3xl">
              {language === 'en' ? 'A website for a business like yours' : 'Сайт за бизнес като Вашия'}
            </h4>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400">
              {language === 'en'
                ? 'Every project starts from a specific business need: clearer enquiries, easier reservations, better presentation, or an additional sales channel.'
                : 'Всеки проект започва от конкретна бизнес нужда: по-ясни запитвания, по-лесни резервации, по-добро представяне или допълнителен канал за продажби.'}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3 font-sans">
            {[
              {
                number: '01',
                title: language === 'en' ? 'Restaurants & hotels' : 'Ресторанти и хотели',
                text: language === 'en' ? 'Menus, reservations, location details, photo galleries, and direct guest contact.' : 'Меню, резервации, локация, галерии и директен контакт с гостите.',
              },
              {
                number: '02',
                title: language === 'en' ? 'Professional services' : 'Професионални услуги',
                text: language === 'en' ? 'Clear service pages, trust-building content, and a straightforward path to an enquiry.' : 'Ясни страници за услугите, съдържание за доверие и лесен път към запитване.',
              },
              {
                number: '03',
                title: language === 'en' ? 'Catalogues & online sales' : 'Каталози и онлайн продажби',
                text: language === 'en' ? 'Property listings, product catalogues, online ordering, and practical contact options.' : 'Обяви за имоти, продуктови каталози, онлайн поръчки и удобни начини за контакт.',
              },
            ].map((businessType, index) => (
              <motion.article
                key={businessType.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-70px' }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                className="group rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition-colors duration-300 hover:border-blue-400/30 hover:bg-white/[0.05]"
              >
                <span className="font-mono text-xs tracking-[0.2em] text-blue-300">{businessType.number}</span>
                <h5 className="mt-8 font-serif text-xl font-semibold text-white">{businessType.title}</h5>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">{businessType.text}</p>
              </motion.article>
            ))}
          </div>

          <button
            onClick={onQuoteClick}
            className="mt-8 text-sm font-semibold text-blue-400 transition-colors hover:text-blue-300"
          >
            {language === 'en' ? 'Tell us about your business \u2192' : 'Разкажете ни за Вашия бизнес \u2192'}
          </button>
        </div>

      </div>
    </section>
  );
}
