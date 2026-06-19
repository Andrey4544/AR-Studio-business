/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import Header from './components/Header';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition';
import Hero from './components/Hero';
import TrustedMarquee from './components/TrustedMarquee';
import Features from './components/Features';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import QuoteModal from './components/QuoteModal';
import FAQ from './components/FAQ';


export default function App() {
  const [activePage, setActivePage] = useState<string>('home');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState<boolean>(false);
  const [selectedPlanFromQuote, setSelectedPlanFromQuote] = useState<string>('');
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
          if (totalHeight > 0) {
            const progress = (window.scrollY / totalHeight) * 100;
            setScrollProgress(progress);
          } else {
            setScrollProgress(0);
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activePage]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  const openQuoteModalWithPlan = (planName?: string) => {
    setSelectedPlanFromQuote(planName || '');
    setIsQuoteModalOpen(true);
  };

  const handleQuickCTA = (pageId: string) => {
    setActivePage(pageId);
    window.scrollTo(0, 0);
  };

  const renderActivePage = () => {
    switch (activePage) {
      case 'home':
        return (
          <PageTransition>
            <div id="home-view">
              <Hero
                onQuoteClick={() => openQuoteModalWithPlan('Bespoke Web Vision')}
                onWorkClick={() => handleQuickCTA('portfolio')}
                onAboutClick={() => handleQuickCTA('about')}
              />
              <TrustedMarquee />
              <Features />
              <FAQ />
            </div>
          </PageTransition>
        );
      case 'about':
        return (
          <PageTransition>
            <About />
          </PageTransition>
        );
      case 'services':
        return (
          <PageTransition>
            <Services onQuoteClick={openQuoteModalWithPlan} />
          </PageTransition>
        );
      case 'portfolio':
        return (
          <PageTransition>
            <Portfolio onQuoteClick={() => openQuoteModalWithPlan('Tomato Restaurant Clone')} />
          </PageTransition>
        );
      case 'why-us':
        return (
          <PageTransition>
            <WhyChooseUs />
          </PageTransition>
        );
      case 'testimonials':
        return (
          <PageTransition>
            <Testimonials />
          </PageTransition>
        );
      case 'contact':
        return (
          <PageTransition>
            <Contact preselectedPlan={selectedPlanFromQuote} />
          </PageTransition>
        );
      case 'faq':
        return (
          <PageTransition>
            <FAQ />
          </PageTransition>
        );
      default:
        return (
          <PageTransition>
            <Hero
              onQuoteClick={() => openQuoteModalWithPlan()}
              onWorkClick={() => handleQuickCTA('portfolio')}
              onAboutClick={() => handleQuickCTA('about')}
            />
          </PageTransition>
        );
    }
  };

  return (
    <div className="relative min-h-screen bg-[#050505] overflow-x-hidden flex flex-col justify-between">
      
      {/* Slim Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-[3px] bg-zinc-950/40 z-[100] pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-400 shadow-[0_0_8px_rgba(59,130,246,0.8)] transition-all duration-75"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      
      {/* Global Ambient Background Elements */}
      <div className="absolute top-[-100px] right-[-100px] w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[-50px] left-[-50px] w-80 h-80 bg-slate-400/5 rounded-full blur-[100px] pointer-events-none z-0"></div>
      
      {/* Premium Header Bar */}
      <Header
        activePage={activePage}
        setActivePage={setActivePage}
        openQuoteModal={() => openQuoteModalWithPlan('Instant Portfolio Pitch')}
      />

      {/* Main Content Area with active animations */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {renderActivePage()}
        </AnimatePresence>
      </main>

      {/* Persistent Premium Footer */}
      <Footer
        setActivePage={setActivePage}
        openQuoteModal={() => openQuoteModalWithPlan('General Partner Brief')}
      />

      {/* Interactive Conversion Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />

    </div>
  );
}
