/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Portfolio from '../components/Portfolio';
import PageTransition from '../components/PageTransition';

interface PortfolioPageProps {
  openQuoteModal: (planName?: string) => void;
}

export default function PortfolioPage({ openQuoteModal }: PortfolioPageProps) {
  React.useEffect(() => {
    document.title = 'Портфолио | AR Studio - Реални проекти';
  }, []);

  return (
    <PageTransition>
      <Portfolio onQuoteClick={() => openQuoteModal('Tomato Restaurant Clone')} />
    </PageTransition>
  );
}
