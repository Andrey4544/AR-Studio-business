/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Compass, PenTool, Rocket } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const stepIcons = [Compass, PenTool, Rocket];

export default function HowWeWork() {
  const { t } = useLanguage();
  const steps = [
    { title: t('processStep1Title'), description: t('processStep1Desc') },
    { title: t('processStep2Title'), description: t('processStep2Desc') },
    { title: t('processStep3Title'), description: t('processStep3Desc') },
  ];

  return (
    <section className="relative overflow-hidden border-y border-white/5 bg-zinc-950/70 py-24">
      <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-600/10 blur-[120px] pointer-events-none" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <p className="mb-4 font-mono text-[10px] font-semibold tracking-[0.24em] text-blue-400 uppercase">
            {t('processSubTitle')}
          </p>
          <h2 className="mb-5 font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {t('processTitle')}
          </h2>
          <p className="text-sm leading-relaxed text-zinc-400 sm:text-base">
            {t('processDesc')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = stepIcons[index];
            return (
              <motion.article
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="group relative rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition-colors duration-300 hover:border-blue-400/30 hover:bg-white/[0.06]"
              >
                <div className="mb-8 flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10 text-blue-300 transition-transform duration-300 group-hover:-translate-y-1">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="font-mono text-xs tracking-[0.2em] text-zinc-600">0{index + 1}</span>
                </div>
                <h3 className="mb-3 font-serif text-xl font-semibold text-white">{step.title}</h3>
                <p className="text-sm leading-relaxed text-zinc-400">{step.description}</p>
                {index < steps.length - 1 && (
                  <span className="absolute -right-3 top-1/2 hidden h-px w-6 bg-gradient-to-r from-blue-400/40 to-transparent md:block" aria-hidden="true" />
                )}
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
