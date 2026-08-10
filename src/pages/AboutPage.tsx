/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import About from '../components/About';
import PageTransition from '../components/PageTransition';
import { usePageMeta } from '../hooks/usePageMeta';

export default function AboutPage() {
  usePageMeta({
    title: 'За нас | AR Studio - Уеб дизайн и разработка',
    description: 'Запознайте се с Андрей, Румен и Николай - екипът зад AR Studio. Дигитални занаятчии, посветени на луксозни персонализирани сайтове за българския бизнес.',
    keywords: 'за нас, екип, дизайнери, разработчици, пловдив',
    canonical: 'https://ar-studio.site/za-nas'
  });

  return (
    <PageTransition>
      <About />
    </PageTransition>
  );
}
