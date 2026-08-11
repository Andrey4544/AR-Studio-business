/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Contact from '../components/Contact';
import PageTransition from '../components/PageTransition';
import { usePageMeta } from '../hooks/usePageMeta';

interface ContactPageProps {
  selectedPlan?: string;
}

export default function ContactPage({ selectedPlan }: ContactPageProps) {
  usePageMeta({
    title: 'Контакти за уеб дизайн в Пловдив | Безплатна консултация | AR Studio',
    description: 'Свържете се с AR Studio за безплатна консултация за уеб дизайн, бизнес сайт или онлайн магазин в Пловдив и България. Изберете телефон, имейл или кратка форма.',
    keywords: 'контакти уеб дизайн Пловдив, безплатна консултация сайт, изработка на сайтове, телефон, имейл',
    canonical: 'https://www.ar-studio.site/kontakti'
  });

  return (
    <PageTransition>
      <Contact preselectedPlan={selectedPlan || ''} />
    </PageTransition>
  );
}
