import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Clock3, FileCheck2, ShieldCheck, Smartphone, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { localizedPath } from '../lib/localizedRoutes';

interface WhatYouGetProps {
  onQuoteClick: () => void;
}

export default function WhatYouGet({ onQuoteClick }: WhatYouGetProps) {
  const { language } = useLanguage();

  const items = language === 'en'
    ? [
        { icon: Sparkles, title: 'A direction built for your business', text: 'We shape the structure and visual direction around the purpose of your business, not around a generic template.' },
        { icon: Smartphone, title: 'A site that works on every screen', text: 'We check the real customer path on mobile, tablet, and desktop before publishing.' },
        { icon: ShieldCheck, title: 'A search-ready technical foundation', text: 'Clear page structure, metadata, a sitemap, and core technical checks give the site a sound basis for discovery.' },
        { icon: FileCheck2, title: 'A clear scope before we begin', text: 'We discuss the goal, content, stages, and next steps up front, so there are no vague expectations.' },
      ]
    : [
        { icon: Sparkles, title: 'Посока, създадена за Вашия бизнес', text: 'Подреждаме структурата и визията около целта на бизнеса Ви, а не около готов шаблон.' },
        { icon: Smartphone, title: 'Сайт, удобен на всеки екран', text: 'Проверяваме реалния път на клиента на телефон, таблет и компютър преди публикуване.' },
        { icon: ShieldCheck, title: 'Техническа SEO основа', text: 'Ясна структура, мета данни, sitemap и основни технически проверки дават на сайта добра основа за откриване.' },
        { icon: FileCheck2, title: 'Ясен обхват преди старта', text: 'Уточняваме целта, съдържанието, етапите и следващите стъпки предварително, без неясни очаквания.' },
      ];

  return (
    <section className="relative overflow-hidden border-y border-white/5 bg-zinc-950/50 py-24">
      <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-500/10 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="mb-4 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400">
              {language === 'en' ? 'CLARITY BEFORE COMMITMENT' : 'ЯСНОТА ПРЕДИ ДА ЗАПОЧНЕМ'}
            </p>
            <h2 className="font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {language === 'en' ? 'What you receive with every project' : 'Какво получавате с всеки проект'}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-zinc-400">
              {language === 'en'
                ? 'A strong website is more than a polished screen. It is a clear business tool, built around the information and actions your customers need.'
                : 'Добрият сайт е повече от красива визия. Той е ясен бизнес инструмент, изграден около информацията и действията, от които Вашите клиенти имат нужда.'}
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45 }}
            className="rounded-2xl border border-blue-400/20 bg-gradient-to-br from-blue-500/15 via-blue-500/[0.06] to-transparent p-6 shadow-2xl shadow-blue-900/10"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-blue-300/20 bg-blue-500/15">
                <Clock3 className="h-5 w-5 text-blue-300" />
              </div>
              <div>
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-blue-300">
                  {language === 'en' ? 'DIRECT COMMUNICATION' : 'ДИРЕКТНА КОМУНИКАЦИЯ'}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-white">
                  {language === 'en' ? 'First reply within 3–4 hours' : 'Първи отговор до 3–4 часа'}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                  {language === 'en'
                    ? 'Send your question, idea, or brief. Andrey or Rumen will respond directly during the working day, without a helpdesk or a middle layer.'
                    : 'Изпратете въпрос, идея или кратък бриф. Андрей или Румен ще Ви отговорят директно в рамките на работния ден — без helpdesk и без посредници.'}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-70px' }}
                transition={{ duration: 0.42, delay: index * 0.06 }}
                className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition-colors duration-200 hover:border-blue-400/30 hover:bg-white/[0.05]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-zinc-900 text-blue-300">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-7 font-serif text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">{item.text}</p>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-sm leading-relaxed text-zinc-400">
            {language === 'en'
              ? 'Not sure what to prepare? Start with the short project brief and we will turn it into a focused first conversation.'
              : 'Не сте сигурни какво да подготвите? Започнете с краткия проектен бриф, а ние ще го превърнем във фокусиран първи разговор.'}
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link to={localizedPath('/brief', language)} className="inline-flex items-center gap-2 text-sm font-semibold text-blue-300 transition-colors hover:text-blue-200">
              {language === 'en' ? 'Open the project brief' : 'Отворете краткия бриф'}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <button
              type="button"
              onClick={onQuoteClick}
              className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-zinc-950 transition-transform duration-150 hover:bg-zinc-200 active:scale-[0.97]"
            >
              {language === 'en' ? 'Talk to us' : 'Говорете с нас'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
