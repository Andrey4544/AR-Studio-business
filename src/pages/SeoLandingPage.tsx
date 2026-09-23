import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, Check, MessageCircle, Sparkles } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { usePageMeta, SITE_URL } from '../hooks/usePageMeta';
import seoLandingPages from '../data/seoLandingPages.json';

export type SeoLandingPageData = (typeof seoLandingPages)[number];

function getPage(slug?: string) {
  return seoLandingPages.find((page) => page.slug === slug);
}

function SeoNotFound() {
  usePageMeta({
    title: 'Страницата не е намерена | AR Studio',
    description: 'Страницата не е намерена.',
    canonical: `${SITE_URL}/resheniya`,
    noIndex: true,
    includeAlternates: false,
  });

  return <main className="mx-auto max-w-4xl px-5 py-32 text-center"><h1 className="font-serif text-4xl font-bold text-white">Страницата не е намерена</h1><Link to="/resheniya" className="mt-8 inline-flex rounded-full bg-white px-5 py-3 font-semibold text-black">Разгледайте решенията</Link></main>;
}

export default function SeoLandingPage() {
  const { slug } = useParams();
  const page = getPage(slug);

  if (!page) return <SeoNotFound />;

  const canonical = `${SITE_URL}/resheniya/${page.slug}`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${canonical}#service`,
    name: page.h1,
    serviceType: page.h1,
    description: page.description,
    provider: { '@type': 'ProfessionalService', name: 'AR Studio', url: SITE_URL },
    areaServed: [{ '@type': 'City', name: 'Пловдив' }, { '@type': 'Country', name: 'България' }],
    url: canonical,
  };

  usePageMeta({
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    canonical,
    jsonLd,
    includeAlternates: false,
  });

  return (
    <PageTransition>
      <main className="min-h-screen bg-luxury-black px-5 pb-24 pt-32 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <nav aria-label="Навигация" className="mb-12 flex flex-wrap items-center gap-3 text-sm text-zinc-500">
            <Link to="/" className="transition-colors hover:text-white">Начало</Link><span>/</span><Link to="/uslugi" className="transition-colors hover:text-white">Услуги</Link><span>/</span><span className="text-zinc-300">Решения</span>
          </nav>

          <section className="grid gap-10 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
            <div>
              <p className="mb-5 font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-blue-400">Пловдив, България · специализирано решение</p>
              <h1 className="max-w-4xl font-serif text-4xl font-bold tracking-tight text-white sm:text-6xl">{page.h1}</h1>
              <p className="mt-7 max-w-3xl text-lg leading-relaxed text-zinc-300">{page.intro}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/kontakti" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition-transform hover:-translate-y-0.5">Безплатна консултация <ArrowRight className="h-4 w-4" /></Link>
                <Link to="/portfolio" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-blue-400/50 hover:bg-blue-500/10">Вижте портфолиото</Link>
              </div>
            </div>
            <aside className="rounded-3xl border border-blue-400/20 bg-blue-500/[0.07] p-7">
              <Sparkles className="h-7 w-7 text-blue-300" />
              <h2 className="mt-5 text-xl font-semibold text-white">За кого е решението?</h2>
              <p className="mt-3 leading-relaxed text-zinc-300">{page.audience}</p>
            </aside>
          </section>

          <section className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" aria-label="Какво включва решението">
            {page.outcomes.map((item) => <article key={item} className="rounded-2xl border border-white/10 bg-white/[0.025] p-6"><Check className="h-5 w-5 text-blue-400" /><p className="mt-4 text-sm leading-relaxed text-zinc-300">{item}</p></article>)}
          </section>

          <section className="mt-24 grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
            <div><p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-blue-400">Как работим</p><h2 className="mt-4 font-serif text-3xl font-bold text-white sm:text-4xl">Ясен процес от идея до старт</h2><p className="mt-5 leading-relaxed text-zinc-400">Съдържанието и функционалностите се определят според конкретната цел. Не добавяме празни секции само за да изглежда страницата по-дълга.</p></div>
            <div className="space-y-3">{page.process.map((step, index) => <div key={step} className="flex gap-4 rounded-2xl border border-white/10 bg-zinc-950/70 p-5"><span className="font-mono text-sm text-blue-300">0{index + 1}</span><p className="text-sm leading-relaxed text-zinc-300">{step}</p></div>)}</div>
          </section>

          <section className="mt-24 grid gap-12 lg:grid-cols-2">
            <div><p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-blue-400">Често задавани въпроси</p><h2 className="mt-4 font-serif text-3xl font-bold text-white">Преди да започнем</h2><div className="mt-6">{page.faq.map(([question, answer]) => <details key={question} className="border-b border-white/10 py-5"><summary className="cursor-pointer list-none font-semibold text-white">{question}</summary><p className="mt-3 text-sm leading-relaxed text-zinc-400">{answer}</p></details>)}</div></div>
            <div className="self-start rounded-3xl border border-white/10 bg-zinc-950/80 p-8"><MessageCircle className="h-7 w-7 text-blue-400" /><h2 className="mt-5 text-2xl font-bold text-white">Имате подобен проект?</h2><p className="mt-4 leading-relaxed text-zinc-400">Изпратете кратка информация за бизнеса, целта и срока. Ще обсъдим подходяща структура, реален обхват и следваща стъпка.</p><Link to="/brief" className="mt-7 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-500">Попълнете кратък бриф <ArrowRight className="h-4 w-4" /></Link></div>
          </section>

          <section className="mt-20 border-t border-white/10 pt-8"><Link to="/resheniya" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-300 hover:text-white">Всички специализирани решения <ArrowRight className="h-4 w-4" /></Link></section>
        </div>
      </main>
    </PageTransition>
  );
}

export function SeoSolutionsIndex() {
  usePageMeta({
    title: 'Специализирани решения за сайтове | AR Studio Пловдив',
    description: 'Специализирани страници за сайтове на фирми, онлайн магазини, професионалисти и локални бизнеси в Пловдив и България.',
    keywords: 'решения за сайт Пловдив, сайт за бизнес, специализиран уеб сайт',
    canonical: `${SITE_URL}/resheniya`,
    includeAlternates: false,
  });

  return (
    <PageTransition>
      <main className="min-h-screen bg-luxury-black px-5 pb-24 pt-32 sm:px-8"><div className="mx-auto max-w-6xl"><p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-blue-400">AR Studio · специализирани решения</p><h1 className="mt-5 max-w-4xl font-serif text-4xl font-bold text-white sm:text-6xl">Решения за различни видове бизнес</h1><p className="mt-6 max-w-3xl text-lg leading-relaxed text-zinc-300">Тези страници са организирани по конкретни бизнес цели и аудитории. Изберете посока, за да видите как може да изглежда полезната структура на един такъв сайт.</p><div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{seoLandingPages.map((page) => <Link key={page.slug} to={`/resheniya/${page.slug}`} className="group rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition-colors hover:border-blue-400/40 hover:bg-blue-500/[0.06]"><h2 className="font-semibold leading-snug text-white">{page.h1}</h2><p className="mt-3 line-clamp-3 text-sm leading-relaxed text-zinc-400">{page.description}</p><span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-300">Разгледайте <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span></Link>)}</div></div></main>
    </PageTransition>
  );
}
