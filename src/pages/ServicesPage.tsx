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
    title: 'Услуги и цени | AR Studio - Уеб дизайн Пловдив',
    description: 'Преглед на услугите и цените на AR Studio. От лендинг страници до онлайн магазини - всичко с прозрачно ценообразуване и без скрити разходи.',
    keywords: 'услуги, цени, уеб дизайн, онлайн магазин, лендинг страница',
    canonical: 'https://ar-studio.site/uslugi'
  });

  return (
    <PageTransition>
      <Services onQuoteClick={openQuoteModal} />
    </PageTransition>
  );
}
