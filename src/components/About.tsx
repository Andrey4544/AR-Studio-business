/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, MessageCircle, Heart, Award, Code2, Palette, Clock3 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { founders, t, language } = useLanguage();

  return (
    <section className="py-24 bg-luxury-black relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-[30%] right-[10%] w-[350px] h-[350px] rounded-full bg-blue-900/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-28">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span className="text-[10px] font-mono tracking-widest uppercase text-blue-400 font-semibold">
                {language === 'en' ? 'OUR STORY' : 'НАШАТА ИСТОРИЯ'}
              </span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-8 tracking-tight leading-tight">
              {language === 'en' ? (
                <>
                  An Ambitious Team<br />
                  <span className="bg-gradient-to-r from-zinc-100 via-zinc-400 to-zinc-600 bg-clip-text text-transparent">
                    Shaping Bulgarian Web Design
                  </span>
                </>
              ) : (
                <>
                  Амбициозен екип<br />
                  <span className="bg-gradient-to-r from-zinc-100 via-zinc-400 to-zinc-600 bg-clip-text text-transparent">
                    формиращ българския уеб дизайн
                  </span>
                </>
              )}
            </h2>

            <div className="space-y-6 text-zinc-300 font-sans text-sm sm:text-base leading-relaxed">
              <p>
                {language === 'en' ? (
                  <>
                    AR Studio was founded in the historic, vibrant city of{" "}
                    <span className="text-white font-medium">Plovdiv, Bulgaria</span> by{" "}
                    <span className="text-blue-400 font-medium font-mono">Andrey &amp; Rumen</span>. As young and driven professionals, we recognized that while small local businesses form the backbone of our economy, many are held back by outdated, insecure, or overpriced websites.
                  </>
                ) : (
                  <>
                    AR Studio е основано в историческия и изпълнен с живот град{" "}
                    <span className="text-white font-medium">Пловдив, България</span> от{" "}
                    <span className="text-blue-400 font-medium font-mono">Андрей и Румен</span>. Като млади и силно амбициозни специалисти, ние разбрахме, че макар местният малък бизнес да е гръбнакът на нашата икономика, той бива спиран от морално остарели, несигурни или твърде скъпи сайтове.
                  </>
                )}
              </p>
              
              {/* Highlight requested text */}
              <blockquote className="border-l-2 border-blue-500 pl-6 my-6 italic text-zinc-400 font-serif text-base sm:text-lg">
                {language === 'en' ? (
                  `“We are a young team focused on creating modern websites that help businesses attract more customers. We provide professional design, affordable pricing and direct communication throughout the entire project.”`
                ) : (
                  `„Ние сме млад екип, фокусиран върху създаването на модерни уебсайтове, които помагат на бизнеса да привлича повече клиенти. Предоставяме професионален дизайн, достъпни цени и директна комуникация по време на целия проект.“`
                )}
              </blockquote>

              <p>
                {language === 'en' ? (
                  <>
                    We work as a focused design-and-development partnership: <span className="text-white">Andrey</span> leads the code, technical structure, and SEO-ready foundation; <span className="text-white">Rumen</span> leads the visual direction, interface, and the way the website feels to use. You speak directly with the people making the decisions and building the work.
                  </>
                ) : (
                  <>
                    Работим като фокусирано партньорство между дизайн и разработка: <span className="text-white">Андрей</span> води кода, техническата структура и SEO-ready основата; <span className="text-white">Румен</span> води визуалната посока, интерфейса и начина, по който сайтът се усеща при използване. Говорите директно с хората, които вземат решенията и изграждат проекта.
                  </>
                )}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-12 xl:col-span-5 flex justify-center"
          >
            {/* Visual Bento highlight card representing our advantages */}
            <div className="w-full max-w-sm glass-panel p-8 rounded-3xl border border-white/5 relative glow-blue">
              <div className="absolute top-4 right-4 text-[10px] font-mono text-zinc-600 uppercase">Est. 2026</div>
              <h3 className="font-serif text-xl font-bold text-white mb-6">
                {language === 'en' ? 'AR Studio Standard' : 'Стандартът на AR Studio'}
              </h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="h-10 w-10 shrink-0 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">
                      {language === 'en' ? 'Direct Communication' : 'Директен контакт'}
                    </h4>
                    <p className="text-xs text-zinc-400 mt-1">
                      {language === 'en' 
                        ? 'Talk directly to Andrey and Rumen. We respond within 3–4 hours during the working day, without helpdesks or middle agents.'
                        : 'Говорите директно с Андрей и Румен. Отговаряме до 3–4 часа в рамките на работния ден, без оператори и посредници.'}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="h-10 w-10 shrink-0 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                    <Award className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">
                      {language === 'en' ? 'Affordable Luxury' : 'Достъпен лукс'}
                    </h4>
                    <p className="text-xs text-zinc-400 mt-1">
                      {language === 'en' 
                        ? 'Stops the overcharging. High-end custom web design made fully affordable for Bulgaria.' 
                        : 'Слагаме край на изкуствените надценки. Дизайн на световно ниво на достъпни български цени.'}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="h-10 w-10 shrink-0 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                    <Heart className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">
                      {language === 'en' ? 'Motivation to Help You' : 'Мотивация да помогнем'}
                    </h4>
                    <p className="text-xs text-zinc-400 mt-1">
                      {language === 'en' 
                        ? 'Our reputation grows when yours does. We treat your local business like our own.' 
                        : 'Нашата репутация расте, когато Вашият бизнес расте. Отнасяме се към Вас като партньори.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Roles and communication */}
        <div className="mb-24 border-t border-white/5 pt-20">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400">
              {language === 'en' ? 'WHO DOES WHAT' : 'КОЙ КАКВО ПРАВИ'}
            </p>
            <h3 className="mt-3 font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {language === 'en' ? 'A direct team, from first call to launch' : 'Директен екип — от първия разговор до старта'}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-zinc-400 sm:text-base">
              {language === 'en'
                ? 'No account manager sits between you and the work. Every decision has a clear owner and a direct conversation.'
                : 'Няма account manager между Вас и работата. Всяко решение има ясен отговорник и директен разговор.'}
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                icon: Code2,
                title: language === 'en' ? 'Andrey · Development' : 'Андрей · Разработка',
                text: language === 'en' ? 'Code, technical structure, integrations, speed checks, and the foundations that help the website be found and used.' : 'Код, техническа структура, интеграции, проверки за бързина и основите, които помагат сайтът да бъде намиран и използван.',
              },
              {
                icon: Palette,
                title: language === 'en' ? 'Rumen · Design' : 'Румен · Дизайн',
                text: language === 'en' ? 'Visual direction, typography, hierarchy, and the user experience that makes the business feel credible from the first screen.' : 'Визуална посока, типография, йерархия и потребителско изживяване, които създават доверие още от първия екран.',
              },
              {
                icon: Clock3,
                title: language === 'en' ? 'Direct communication' : 'Директна комуникация',
                text: language === 'en' ? 'You can ask questions while the project moves forward. We respond directly within 3–4 hours during the working day.' : 'Можете да задавате въпроси, докато проектът се движи напред. Отговаряме директно до 3–4 часа в рамките на работния ден.',
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-70px' }}
                  transition={{ duration: 0.45, delay: index * 0.07 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.025] p-7 transition-colors duration-200 hover:border-blue-400/30 hover:bg-white/[0.05]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10 text-blue-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h4 className="mt-7 font-serif text-xl font-semibold text-white">{item.title}</h4>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">{item.text}</p>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Founders Profiles */}
        <div className="border-t border-white/5 pt-20">
          <div className="text-center mb-16">
            <span className="text-[10px] font-mono tracking-widest text-[#3B82F6] uppercase">
              {language === 'en' ? 'MEET THE EXPERTS' : 'ОСНОВАТЕЛИТЕ'}
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
              {language === 'en' ? 'The Dev & Design Founders' : 'Кой стои зад нашите проекти?'}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {founders.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="glass-panel p-8 rounded-2xl border border-white/5 flex flex-col justify-between h-full relative group transition-all duration-300 hover:border-white/15"
              >
                {/* Visual signature decoration */}
                <div className="absolute top-6 right-8 text-zinc-800 font-serif text-5xl uppercase font-bold select-none pointer-events-none group-hover:text-blue-500/5 transition-colors duration-300">
                  {member.name.substring(0, 1)}
                </div>

                <div>
                  <div className="flex items-center gap-4 mb-6">
                    {/* Generates a neat placeholder symbol */}
                    <div className="h-12 w-12 rounded-full bg-gradient-to-tr from-zinc-900 to-zinc-800 border border-white/10 flex items-center justify-center font-mono font-bold text-white text-base">
                      {member.name[0]}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white leading-none">{member.name}</h4>
                      <span className="text-xs font-mono text-blue-400 mt-1.5 inline-block">{member.role}</span>
                    </div>
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                    {member.bio}
                  </p>
                </div>

                {/* Subtext highlighting skill focus */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs font-mono text-zinc-500">
                    {language === 'en' ? 'Expertise Focus' : 'Основен фокус'}
                  </span>
                  <span className="text-xs font-semibold text-white bg-zinc-900 px-3 py-1 rounded-full border border-white/5">
                    {member.name === 'Andrey' || member.name === 'Андрей' 
                      ? (language === 'en' ? 'TypeScript & SEO Engine' : 'Код, Архитектура и техническо SEO')
                      : (language === 'en' ? 'UI/UX & Brand Aesthetics' : 'UI/UX дизайн и Лукс брандинг')}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
