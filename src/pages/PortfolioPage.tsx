/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Portfolio from '../components/Portfolio';
import PageTransition from '../components/PageTransition';
import { usePageMeta } from '../hooks/usePageMeta';

interface PortfolioPageProps {
  openQuoteModal: (planName?: string) => void;
}

export default function PortfolioPage({ openQuoteModal }: PortfolioPageProps) {
  usePageMeta({
    title: 'Портфолио | AR Studio - Реални проекти и примери',
    description: 'Преглед на реализирани проекти от AR Studio. Ресторанти, хотели, адвокати и други успешни сайтове, които генерират реални резултати.',
    keywords: 'портфолио, проекти, примери, ресторант, хотел, адвокат',
    canonical: 'https://ar-studio.site/portfolio'
  });

  return (
    <PageTransition>
      <Portfolio onQuoteClick={() => openQuoteModal('Tomato Restaurant Clone')} />
    </PageTransition>
  );
}
