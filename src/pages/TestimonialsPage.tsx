/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Testimonials from '../components/Testimonials';
import PageTransition from '../components/PageTransition';
import { usePageMeta } from '../hooks/usePageMeta';

export default function TestimonialsPage() {
  usePageMeta({
    title: 'Отзиви | AR Studio - Мнения на клиентите',
    description: 'Прочетете публикуваните с разрешение отзиви за AR Studio и научете как да споделите собствената си обратна връзка за уеб проекта.',
    keywords: 'отзиви за уеб дизайн, мнения на клиенти, AR Studio Пловдив, обратна връзка за сайт',
    canonical: 'https://www.ar-studio.site/otzivy'
  });

  return (
    <PageTransition>
      <Testimonials />
    </PageTransition>
  );
}
