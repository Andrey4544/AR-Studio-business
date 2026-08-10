/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Hero from '../components/Hero';
import TrustedMarquee from '../components/TrustedMarquee';
import Features from '../components/Features';
import FAQ from '../components/FAQ';
import PageTransition from '../components/PageTransition';
import { usePageMeta } from '../hooks/usePageMeta';

interface HomePageProps {
  openQuoteModal: (planName?: string) => void;
}

export default function HomePage({ openQuoteModal }: HomePageProps) {
  usePageMeta({
    title: 'AR Studio - Уеб дизайн и разработка в Пловдив | Изработка на сайтове',
    description: 'Професионална изработка на уебсайтове в Пловдив. AR Studio създава бързи, SEO оптимизирани и модерни сайтове за вашия бизнес. Поискайте безплатна оферта днес!',
    keywords: 'уеб дизайн пловдив, изработка на сайтове, уебсайт, SEO оптимизация, онлайн магазин',
    canonical: 'https://ar-studio.site/'
  });

  return (
    <PageTransition>
      <div id="home-view">
        <Hero
          onQuoteClick={() => openQuoteModal('Bespoke Web Vision')}
          onWorkClick={() => window.location.href = '/portfolio'}
          onAboutClick={() => window.location.href = '/za-nas'}
        />
        <TrustedMarquee />
        <Features />
        <FAQ />
      </div>
    </PageTransition>
  );
}
