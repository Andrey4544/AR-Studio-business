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
    title: 'AR Studio | Уеб дизайн и изработка на сайтове в Пловдив',
    description: 'AR Studio създава бързи, персонализирани и SEO-ready уебсайтове за бизнеси в Пловдив и цяла България. Заявете безплатна консултация за сайт или онлайн магазин.',
    keywords: 'уеб дизайн Пловдив, изработка на сайтове Пловдив, уеб дизайн България, бизнес сайт, онлайн магазин, SEO оптимизация',
    canonical: 'https://www.ar-studio.site/'
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
