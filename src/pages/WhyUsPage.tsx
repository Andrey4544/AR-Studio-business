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
    description: 'Защо да изберете AR Studio? Директна комуникация, ясен процес, мобилен дизайн, SEO основа и възможност за поддръжка след публикуването.',
    keywords: 'уеб дизайн Пловдив, защо AR Studio, процес за изработка на сайт, поддръжка на сайт',
    canonical: 'https://www.ar-studio.site/zashto-nas'
  });

  return (
    <PageTransition>
      <WhyChooseUs />
    </PageTransition>
  );
}
