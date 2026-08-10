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
    description: 'Прочетете отзивите на нашите доволни клиенти. 100% положителни отзиви от ресторанти, хотели, адвокати и други успешни бизнеси.',
    keywords: 'отзиви, мнения, клиенти, доволни, успех',
    canonical: 'https://ar-studio.site/otzivy'
  });

  return (
    <PageTransition>
      <Testimonials />
    </PageTransition>
  );
}
