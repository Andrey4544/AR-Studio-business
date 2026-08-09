/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Contact from '../components/Contact';
import PageTransition from '../components/PageTransition';

interface ContactPageProps {
  selectedPlan?: string;
}

export default function ContactPage({ selectedPlan }: ContactPageProps) {
  React.useEffect(() => {
    document.title = 'Контакти | AR Studio - Свържете се с нас';
  }, []);

  return (
    <PageTransition>
      <Contact preselectedPlan={selectedPlan || ''} />
    </PageTransition>
  );
}
