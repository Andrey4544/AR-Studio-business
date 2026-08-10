/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import FAQ from '../components/FAQ';
import PageTransition from '../components/PageTransition';
import { usePageMeta } from '../hooks/usePageMeta';

export default function FAQPage() {
  usePageMeta({
    title: 'ЧЗВ | AR Studio - Често задавани въпроси',
    description: 'Отговори на често задавани въпроси за услугите, цените и процеса на работа с AR Studio.',
    keywords: 'ЧЗВ, въпроси, отговори, процес, цена, срок',
    canonical: 'https://ar-studio.site/chzv'
  });

  return (
    <PageTransition>
      <FAQ />
    </PageTransition>
  );
}
