/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import PageTransition from '../components/PageTransition';
import { usePageMeta } from '../hooks/usePageMeta';
import { useLanguage } from '../context/LanguageContext';
import { localizedPath } from '../lib/localizedRoutes';

const TrustedMarquee = React.lazy(() => import('../components/TrustedMarquee'));
const Features = React.lazy(() => import('../components/Features'));
const FAQ = React.lazy(() => import('../components/FAQ'));
const HowWeWork = React.lazy(() => import('../components/HowWeWork'));
const WhatYouGet = React.lazy(() => import('../components/WhatYouGet'));

interface HomePageProps {
  openQuoteModal: (planName?: string) => void;
}

export default function HomePage({ openQuoteModal }: HomePageProps) {
  const { language } = useLanguage();
  const isEnglish = language === 'en';

  usePageMeta({
    title: isEnglish
      ? 'Web Design & Website Development in Plovdiv | AR Studio'
      : 'Изработка на сайт и уеб дизайн в Пловдив | AR Studio',
    description: isEnglish
      ? 'Fast, bespoke websites for businesses in Plovdiv and Bulgaria, with mobile-first design, clear enquiries and a search-ready foundation. Request a free consultation.'
      : 'Бързи и персонализирани сайтове за бизнеси в Пловдив и цяла България с мобилен дизайн, ясни запитвания и SEO основа. Заявете безплатна консултация.',
    keywords: isEnglish
      ? 'web design Plovdiv, website development Bulgaria, business website, online store, technical SEO'
      : 'уеб дизайн Пловдив, изработка на сайтове Пловдив, уеб дизайн България, бизнес сайт, онлайн магазин, SEO оптимизация',
    canonical: 'https://www.ar-studio.site/'
  });

  return (
    <PageTransition>
      <div id="home-view">
        <Hero
          onQuoteClick={() => openQuoteModal('Bespoke Web Vision')}
          onWorkClick={() => window.location.href = localizedPath('/portfolio', language)}
          onAboutClick={() => window.location.href = localizedPath('/za-nas', language)}
        />
        <React.Suspense fallback={null}>
          <HowWeWork />
          <WhatYouGet onQuoteClick={() => openQuoteModal('Project Brief Conversation')} />
          <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8" aria-labelledby="home-next-steps">
            <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 sm:p-8">
              <h2 id="home-next-steps" className="font-serif text-2xl font-bold text-white sm:text-3xl">
                {isEnglish ? 'Explore the right starting point' : 'Изберете правилната следваща стъпка'}
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">
                {isEnglish
                  ? 'Compare our website services, see real projects, or send a short brief so we can recommend a practical direction.'
                  : 'Разгледайте услугите, вижте реални проекти или изпратете кратко задание, за да предложим практична посока.'}
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold">
                <Link to={localizedPath('/uslugi', language)} className="rounded-full bg-blue-600 px-4 py-2.5 text-white transition-colors hover:bg-blue-500">
                  {isEnglish ? 'Services and pricing' : 'Услуги и цени'}
                </Link>
                <Link to={localizedPath('/portfolio', language)} className="rounded-full border border-white/15 px-4 py-2.5 text-zinc-200 transition-colors hover:border-blue-400/50 hover:text-white">
                  {isEnglish ? 'View portfolio' : 'Вижте портфолиото'}
                </Link>
                <Link to={localizedPath('/brief', language)} className="rounded-full border border-white/15 px-4 py-2.5 text-zinc-200 transition-colors hover:border-blue-400/50 hover:text-white">
                  {isEnglish ? 'Send a project brief' : 'Изпратете кратък бриф'}
                </Link>
              </div>
            </div>
          </section>
          <TrustedMarquee />
          <Features />
          <FAQ />
        </React.Suspense>
      </div>
    </PageTransition>
  );
}
