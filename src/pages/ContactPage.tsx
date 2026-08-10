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
    title: 'Контакти | AR Studio - Свържете се с нас',
    description: 'Свържете се с AR Studio за безплатна консултация. Телефон, имейл или форма - изберете удобния за вас начин.',
    keywords: 'контакти, свържете се, консултация, телефон, имейл',
    canonical: 'https://ar-studio.site/kontakti'
  });

  return (
    <PageTransition>
      <Contact preselectedPlan={selectedPlan || ''} />
    </PageTransition>
  );
}
