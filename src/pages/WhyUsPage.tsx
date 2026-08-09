/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import WhyChooseUs from '../components/WhyChooseUs';
import PageTransition from '../components/PageTransition';

export default function WhyUsPage() {
  React.useEffect(() => {
    document.title = 'Защо нас | AR Studio - Преимущества';
  }, []);

  return (
    <PageTransition>
      <WhyChooseUs />
    </PageTransition>
  );
}
