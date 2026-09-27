/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Link } from 'react-router-dom';
import Portfolio from '../components/Portfolio';
import PageTransition from '../components/PageTransition';
import { useLanguage } from '../context/LanguageContext';
import { localizedPath } from '../lib/localizedRoutes';
import { usePageMeta } from '../hooks/usePageMeta';

interface PortfolioPageProps {
  openQuoteModal: (planName?: string) => void;
}

export default function PortfolioPage({ openQuoteModal }: PortfolioPageProps) {
  const { language } = useLanguage();

  usePageMeta({
    title: 'Портфолио | AR Studio - Реални проекти и примери',
    description: 'Преглед на реализирани проекти от AR Studio. Ресторанти, хотели, адвокати и други успешни сайтове, които генерират реални резултати.',
    keywords: 'портфолио, проекти, примери, ресторант, хотел, адвокат',
    canonical: 'https://www.ar-studio.site/portfolio'
  });

  return (
      <PageTransition>
        <Portfolio onQuoteClick={() => openQuoteModal('Tomato Restaurant Clone')} />
        <div className="mx-auto max-w-5xl px-4 pb-20 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 text-center sm:p-8">
            <h2 className="font-serif text-2xl font-bold text-white">{language === 'en' ? 'Have a similar project?' : 'Имате подобен проект?'}</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-zinc-400">{language === 'en' ? 'Explore our services or send a short brief so we can discuss the right structure for your business.' : 'Разгледайте услугите ни или изпратете кратък бриф, за да обсъдим подходящата структура за Вашия бизнес.'}</p>
            <div className="mt-5 flex flex-wrap justify-center gap-3 text-sm font-semibold">
              <Link to={localizedPath('/uslugi', language)} className="rounded-full bg-blue-600 px-4 py-2.5 text-white transition-colors hover:bg-blue-500">{language === 'en' ? 'Services and pricing' : 'Услуги и цени'}</Link>
              <Link to={localizedPath('/brief', language)} className="rounded-full border border-white/15 px-4 py-2.5 text-zinc-200 transition-colors hover:border-blue-400/50 hover:text-white">{language === 'en' ? 'Send a brief' : 'Изпратете бриф'}</Link>
            </div>
          </div>
        </div>
      </PageTransition>
  );
}
