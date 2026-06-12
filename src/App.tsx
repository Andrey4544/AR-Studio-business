import React, { useState } from 'react';
import { Language } from './types';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustedMarquee from './components/TrustedMarquee';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import WhyChooseUs from './components/WhyChooseUs';
import About from './components/About';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';
import ScrollProgressBar from './components/ScrollProgressBar';

function App() {
  const [language, setLanguage] = useState<Language>('bg'); // Defaults to Bulgarian
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  const handleOpenConsult = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-zinc-950 text-zinc-100 overflow-x-hidden selection:bg-blue-500/30 selection:text-white">
      {/* Dynamic Animated Scroll Progress Indicator */}
      <ScrollProgressBar />

      {/* Absolute Header */}
      <Header
        language={language}
        setLanguage={setLanguage}
        onOpenQuote={() => setIsQuoteOpen(true)}
      />

      {/* Main Page Layout Sections */}
      <main>
        <Hero
          language={language}
          onOpenQuote={() => setIsQuoteOpen(true)}
        />
        
        <TrustedMarquee />
        
        <Services language={language} />
        
        <Portfolio
          language={language}
          onOpenConsult={handleOpenConsult}
          onOpenQuote={() => setIsQuoteOpen(true)}
        />
        
        <WhyChooseUs language={language} />
        
        <About language={language} />
        
        <FAQ language={language} />
        
        <Contact language={language} />
      </main>

      {/* Footer */}
      <Footer language={language} />

      {/* Sliding Dialog Modals */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        language={language}
      />
    </div>
  );
}

export default App;
