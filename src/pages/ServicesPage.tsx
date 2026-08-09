/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Services from '../components/Services';
import PageTransition from '../components/PageTransition';

interface ServicesPageProps {
  openQuoteModal: (planName?: string) => void;
}

export default function ServicesPage({ openQuoteModal }: ServicesPageProps) {
  React.useEffect(() => {
    document.title = 'Услуги и цени | AR Studio - Уеб дизайн Пловдив';
  }, []);

  return (
    <PageTransition>
      <Services onQuoteClick={openQuoteModal} />
    </PageTransition>
  );
}
