/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import About from '../components/About';
import PageTransition from '../components/PageTransition';
import { usePageMeta } from '../hooks/usePageMeta';
import { useLanguage } from '../context/LanguageContext';

export default function AboutPage() {
  const { language } = useLanguage();
  const isEnglish = language === 'en';

  usePageMeta({
    title: isEnglish ? 'About AR Studio | Design & Development Team in Plovdiv' : 'За нас | AR Studio - Уеб дизайн и разработка',
    description: isEnglish
      ? 'Meet Andrey and Rumen, the direct design and development team behind AR Studio in Plovdiv.'
      : 'Запознайте се с екипа зад AR Studio — директна комуникация, дизайн и разработка за бизнеси в Пловдив и България.',
    keywords: isEnglish ? 'AR Studio team, web developer Plovdiv, web designer Plovdiv' : 'за нас, екип, дизайнери, разработчици, пловдив',
    canonical: 'https://www.ar-studio.site/za-nas'
  });

  return (
    <PageTransition>
      <About />
    </PageTransition>
  );
}
