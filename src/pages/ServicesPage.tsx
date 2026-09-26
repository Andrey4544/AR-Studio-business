/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Services from '../components/Services';
import PageTransition from '../components/PageTransition';
import { usePageMeta } from '../hooks/usePageMeta';
import { useStructuredData } from '../hooks/useStructuredData';

interface ServicesPageProps {
  openQuoteModal: (planName?: string) => void;
}

export default function ServicesPage({ openQuoteModal }: ServicesPageProps) {
  usePageMeta({
    title: 'Изработка на сайт в Пловдив | Уеб дизайн и онлайн магазини | AR Studio',
    description: 'Разгледайте ясни планове за изработка на сайт в Пловдив: бизнес сайт, landing page, онлайн магазин, дигитално меню и поддръжка с мобилен дизайн и SEO основа.',
    keywords: 'изработка на сайт Пловдив, изработка на уеб сайт Пловдив, уеб дизайн Пловдив, бизнес сайт, онлайн магазин, landing page',
    canonical: 'https://www.ar-studio.site/uslugi'
  });
  useStructuredData('services-page', {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': 'https://www.ar-studio.site/uslugi#services',
    name: 'Услуги за изработка на сайт в Пловдив',
    itemListElement: [
      ['Изработка на бизнес сайт', '/uslugi/izrabotka-na-sait-plovdiv'],
      ['Сайт за ресторант', '/uslugi/sait-za-restorant-plovdiv'],
      ['Сайт за хотел', '/uslugi/sait-za-hotel-plovdiv'],
      ['Сайт за козметичен салон', '/uslugi/sait-za-kozmetichen-salon-plovdiv'],
      ['Изработка на онлайн магазин', '/uslugi/izrabotka-na-onlayn-magazin'],
    ].map(([name, path], position) => ({
      '@type': 'ListItem',
      position: position + 1,
      name,
      url: `https://www.ar-studio.site${path}`,
    })),
  });

  return (
    <PageTransition>
      <Services onQuoteClick={openQuoteModal} />
    </PageTransition>
  );
}
