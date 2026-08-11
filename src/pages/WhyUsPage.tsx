/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import WhyChooseUs from '../components/WhyChooseUs';
import PageTransition from '../components/PageTransition';
import { usePageMeta } from '../hooks/usePageMeta';

export default function WhyUsPage() {
  usePageMeta({
    title: 'Защо нас | AR Studio - Преимущества и предложение',
    description: 'Защо да изберете AR Studio? Бързо, качествено и достъпно. Без авансово плащане, 100% гарантия и дългосрочна поддръжка.',
    keywords: 'защо нас, преимущества, качество, цена, гарантия',
    canonical: 'https://www.ar-studio.site/zashto-nas'
  });

  return (
    <PageTransition>
      <WhyChooseUs />
    </PageTransition>
  );
}
