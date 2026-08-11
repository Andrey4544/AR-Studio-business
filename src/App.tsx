/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingSocialButtons from './components/FloatingSocialButtons';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import WhyUsPage from './pages/WhyUsPage';
import TestimonialsPage from './pages/TestimonialsPage';
import ContactPage from './pages/ContactPage';
import FAQPage from './pages/FAQPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';


export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = React.useState<boolean>(false);
  const [selectedPlanFromQuote, setSelectedPlanFromQuote] = React.useState<string>('');
  const [scrollProgress, setScrollProgress] = React.useState<number>(0);

  React.useEffect(() => {
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
  }, []);

  const openQuoteModalWithPlan = (planName?: string) => {
    setSelectedPlanFromQuote(planName || '');
    setIsQuoteModalOpen(true);
  };

  return (
    <Router>
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
          openQuoteModal={() => openQuoteModalWithPlan('Instant Portfolio Pitch')}
        />

        {/* Main Content Area with routing */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage openQuoteModal={openQuoteModalWithPlan} />} />
            <Route path="/za-nas" element={<AboutPage />} />
            <Route path="/uslugi" element={<ServicesPage openQuoteModal={openQuoteModalWithPlan} />} />
            <Route path="/portfolio" element={<PortfolioPage openQuoteModal={openQuoteModalWithPlan} />} />
            <Route path="/zashto-nas" element={<WhyUsPage />} />
            <Route path="/otzivy" element={<TestimonialsPage />} />
            <Route path="/kontakti" element={<ContactPage selectedPlan={selectedPlanFromQuote} />} />
            <Route path="/chzv" element={<FAQPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
          </Routes>
        </main>

        {/* Persistent Premium Footer */}
        <Footer
          openQuoteModal={() => openQuoteModalWithPlan('General Partner Brief')}
        />

        {/* Floating Social Buttons */}
        <FloatingSocialButtons />


      </div>
    </Router>
  );
}
