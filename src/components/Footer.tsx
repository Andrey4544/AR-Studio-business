import React from 'react';
import { Logo } from './Logo';
import { Language } from '../types';

interface FooterProps {
  language: Language;
}

export const Footer: React.FC<FooterProps> = ({ language }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-zinc-950 border-t border-white/5 relative z-10 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo element */}
          <Logo onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />

          {/* Slogan row */}
          <p className="text-zinc-600 text-[10px] sm:text-xs font-mono tracking-widest uppercase">
            {language === 'en'
              ? 'Hand-written code • Striking Aesthetics • No compromises'
              : 'Ръчно написан код • Смазваща визия • Без компромиси'}
          </p>

          {/* Copyright indicators */}
          <div className="text-zinc-500 font-mono text-[9px] uppercase tracking-wider">
            © {currentYear} LUXURY.DEV. ALL RIGHTS RESERVED.
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
