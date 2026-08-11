/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Services from '../components/Services';
import PageTransition from '../components/PageTransition';
import { usePageMeta } from '../hooks/usePageMeta';

interface ServicesPageProps {
  openQuoteModal: (planName?: string) => void;
}

export default function ServicesPage({ openQuoteModal }: ServicesPageProps) {
  usePageMeta({
    title: 'Уеб дизайн, сайтове и онлайн магазини | Пловдив | AR Studio',
    description: 'Разгледайте услугите на AR Studio за уеб дизайн, бизнес сайтове, лендинг страници и онлайн магазини в Пловдив и цяла България. Прозрачни обхвати и ясни следващи стъпки.',
    keywords: 'уеб дизайн услуги Пловдив, изработка на сайтове, бизнес сайт, онлайн магазин, лендинг страница, SEO основа',
    canonical: 'https://www.ar-studio.site/uslugi'
  });

  return (
    <PageTransition>
      <Services onQuoteClick={openQuoteModal} />
    </PageTransition>
  );
}
