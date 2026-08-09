/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Hero from '../components/Hero';
import TrustedMarquee from '../components/TrustedMarquee';
import Features from '../components/Features';
import FAQ from '../components/FAQ';
import PageTransition from '../components/PageTransition';

interface HomePageProps {
  openQuoteModal: (planName?: string) => void;
}

export default function HomePage({ openQuoteModal }: HomePageProps) {
  return (
    <PageTransition>
      <div id="home-view">
        <Hero
          onQuoteClick={() => openQuoteModal('Bespoke Web Vision')}
          onWorkClick={() => window.location.href = '/portfolio'}
          onAboutClick={() => window.location.href = '/za-nas'}
        />
        <TrustedMarquee />
        <Features />
        <FAQ />
      </div>
    </PageTransition>
  );
}
