/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import PageTransition from '../components/PageTransition';
import { useLanguage } from '../context/LanguageContext';
import { localizedPath } from '../lib/localizedRoutes';
import { usePageMeta } from '../hooks/usePageMeta';
import { useStructuredData } from '../hooks/useStructuredData';

interface ServicesPageProps {
  openQuoteModal: (planName?: string) => void;
}

export default function ServicesPage({ openQuoteModal }: ServicesPageProps) {
  const { language } = useLanguage();

  usePageMeta({
    title: 'Изработка на сайт в Пловдив | Уеб дизайн и онлайн магазини | AR Studio',
    description: 'Разгледайте ясни планове за изработка на сайт в Пловдив: бизнес сайт, landing page, онлайн магазин, дигитално меню и поддръжка с мобилен дизайн и SEO основа.',
    keywords: 'изработка на сайт Пловдив, изработка на уеб сайт Пловдив, уеб дизайн Пловдив, бизнес сайт, онлайн магазин, landing page',
    canonical: 'https://www.ar-studio.site/uslugi'
  });
  useStructuredData('services-page', {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': 'https://www.ar-studio.site/uslugi#services',
    name: 'Услуги за изработка на сайт в Пловдив',
    itemListElement: [
      ['Изработка на бизнес сайт', '/uslugi/izrabotka-na-sait-plovdiv'],
      ['Сайт за ресторант', '/uslugi/sait-za-restorant-plovdiv'],
      ['Сайт за хотел', '/uslugi/sait-za-hotel-plovdiv'],
      ['Сайт за козметичен салон', '/uslugi/sait-za-kozmetichen-salon-plovdiv'],
      ['Изработка на онлайн магазин', '/uslugi/izrabotka-na-onlayn-magazin'],
    ].map(([name, path], position) => ({
      '@type': 'ListItem',
      position: position + 1,
      name,
      url: `https://www.ar-studio.site${path}`,
    })),
  });

  return (
    <PageTransition>
      <Services onQuoteClick={openQuoteModal} />
      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8" aria-labelledby="service-paths">
        <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 sm:p-8">
          <h2 id="service-paths" className="font-serif text-2xl font-bold text-white sm:text-3xl">
            {language === 'en' ? 'Explore a service for your business' : 'Изберете услуга за Вашия бизнес'}
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">
            {language === 'en' ? 'See the recommended structure, process and starting scope for common business website projects.' : 'Вижте препоръчителната структура, процеса и началния обхват за често срещани бизнес проекти.'}
          </p>
          <nav aria-label={language === 'en' ? 'Website service pages' : 'Страници за услуги'} className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ['/uslugi/izrabotka-na-sait-plovdiv', language === 'en' ? 'Business website in Plovdiv' : 'Бизнес сайт в Пловдив'],
              ['/uslugi/sait-za-restorant-plovdiv', language === 'en' ? 'Restaurant website' : 'Сайт за ресторант'],
              ['/uslugi/sait-za-kozmetichen-salon-plovdiv', language === 'en' ? 'Beauty salon website' : 'Сайт за козметичен салон'],
              ['/uslugi/sait-za-hotel-plovdiv', language === 'en' ? 'Hotel website' : 'Сайт за хотел'],
              ['/uslugi/sait-za-advokatska-kantora', language === 'en' ? 'Law firm website' : 'Сайт за адвокатска кантора'],
              ['/uslugi/izrabotka-na-onlayn-magazin', language === 'en' ? 'Online store development' : 'Онлайн магазин'],
            ].map(([href, label]) => (
              <Link key={href} to={localizedPath(href, language)} className="rounded-xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm font-semibold text-zinc-200 transition-colors hover:border-blue-400/40 hover:text-white">
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </section>
    </PageTransition>
  );
}
