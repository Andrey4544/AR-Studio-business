/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Hero from '../components/Hero';
import TrustedMarquee from '../components/TrustedMarquee';
import Features from '../components/Features';
import FAQ from '../components/FAQ';
import HowWeWork from '../components/HowWeWork';
import WhatYouGet from '../components/WhatYouGet';
import PageTransition from '../components/PageTransition';
import { usePageMeta } from '../hooks/usePageMeta';
import { useLanguage } from '../context/LanguageContext';
import { localizedPath } from '../lib/localizedRoutes';

interface HomePageProps {
  openQuoteModal: (planName?: string) => void;
}

export default function HomePage({ openQuoteModal }: HomePageProps) {
  const { language } = useLanguage();
  const isEnglish = language === 'en';

  usePageMeta({
    title: isEnglish
      ? 'AR Studio | Web Design & Website Development in Plovdiv'
      : 'AR Studio | Уеб дизайн и изработка на сайтове в Пловдив',
    description: isEnglish
      ? 'AR Studio creates fast, bespoke, search-ready websites for businesses in Plovdiv and Bulgaria. Request a free consultation for a business website or online store.'
      : 'AR Studio създава бързи, персонализирани и SEO-ready уебсайтове за бизнеси в Пловдив и цяла България. Заявете безплатна консултация за сайт или онлайн магазин.',
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
        <HowWeWork />
        <WhatYouGet onQuoteClick={() => openQuoteModal('Project Brief Conversation')} />
        <TrustedMarquee />
        <Features />
        <FAQ />
      </div>
    </PageTransition>
  );
}
