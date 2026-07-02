/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import ImageCarousel from './ImageCarousel';
import { motion } from 'motion/react';
import { Sparkles, Globe, ArrowUpRight, Zap, Smartphone, QrCode } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

// Carousel images for Tomato Restaurant
const tomatoCarouselImages = [
  { src: '/assets/tomato-new.png', alt: 'Tomato Restaurant Mockup' },
  { src: '/assets/tomato-main-hall.jpg', alt: 'Tomato Main Hall' },
  { src: '/assets/tomato-garden.jpg', alt: 'Tomato Garden' },
  { src: '/assets/tomato-bar.jpg', alt: 'Tomato Bar' },
  { src: '/assets/tomato-event.jpg', alt: 'Tomato Restaurant Event' },
  { src: '/assets/tomato-gallery.jpg', alt: 'Tomato Restaurant Gallery' },
  { src: '/assets/tomato-contact.jpg', alt: 'Tomato Restaurant Contact' },
  { src: '/assets/tomato-reviews.jpg', alt: 'Tomato Customer Reviews' },
  { src: '/assets/tomato-qr.png', alt: 'Tomato QR Code Menu' },
];

// Carousel images for Teddy's Bar and Grill
const teddysCarouselImages = [
  { src: '/assets/teddys-logo.jpg', alt: 'Teddy\'s Bar & Grill Logo' },
  { src: '/assets/teddys-logo-bw.jpg', alt: 'Teddy\'s Bar & Grill Logo B&W' },
  { src: '/assets/teddys-logo-dark.jpg', alt: 'Teddy\'s Bar & Grill Logo Dark' },
];

// Carousel images for BelEstateGroup
const belestateCarouselImages = [
  { src: '/assets/belestate-8.png', alt: 'BelEstateGroup Hero' },
  { src: '/assets/belestate-1.png', alt: 'BelEstateGroup Home' },
  { src: '/assets/belestate-2.png', alt: 'BelEstateGroup Articles' },
  { src: '/assets/belestate-3.png', alt: 'BelEstateGroup Booking' },
  { src: '/assets/belestate-4.png', alt: 'BelEstateGroup Contact' },
  { src: '/assets/belestate-5.png', alt: 'BelEstateGroup Principles' },
  { src: '/assets/belestate-6.png', alt: 'BelEstateGroup Search' },
  { src: '/assets/belestate-7.png', alt: 'BelEstateGroup Properties' },
];

// Carousel images for CBL Fight Store
const cblCarouselImages = [
  { src: '/assets/cbl-1.png', alt: 'CBL Fight Store Hero' },
  { src: '/assets/cbl-2.png', alt: 'CBL Fight Store Collection' },
  { src: '/assets/cbl-3.png', alt: 'CBL Fight Store Products' },
  { src: '/assets/cbl-4.png', alt: 'CBL Fight Store Product Detail' },
  { src: '/assets/cbl-5.png', alt: 'CBL Fight Store Curved Shield' },
];

interface PortfolioProps {
  onQuoteClick: () => void;
}

export default function Portfolio({ onQuoteClick }: PortfolioProps) {
  const { featuredProjects, language, t } = useLanguage();

  return (
    <section className="py-24 bg-luxury-black relative overflow-hidden border-t border-white/5">
      {/* Background Decorative Radial Glows */}
      <div className="absolute top-[30%] left-[5%] w-[350px] h-[350px] rounded-full bg-blue-900/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span className="text-[10px] font-mono tracking-widest uppercase text-blue-400 font-semibold">
              {language === 'en' ? 'CRAFTED SHOWCASE' : 'НАШИТЕ ПРОЕКТИ'}
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
            {language === 'en' ? (
              <>
                Featured Case Studies <br />
                <span className="bg-gradient-to-r from-zinc-100 via-zinc-400 to-zinc-600 bg-clip-text text-transparent">
                  And Elite Placements
                </span>
              </>
            ) : (
              <>
                Реални проекти <br />
                <span className="bg-gradient-to-r from-zinc-100 via-zinc-400 to-zinc-600 bg-clip-text text-transparent">
                  и успешни кейсове
                </span>
              </>
            )}
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            {t('portfolioDesc')}
          </p>
        </motion.div>

        {/* Featured Projects */}
        {featuredProjects.map((project, index) => {
          const isEven = index % 2 === 0;
          let carouselImages = tomatoCarouselImages;
          if (project.id === 'teddys-bar-grill') carouselImages = teddysCarouselImages;
          if (project.id === 'belestate-group') carouselImages = belestateCarouselImages;
          if (project.id === 'cbl-fight-store') carouselImages = cblCarouselImages;

          return (
            <div key={project.id} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
              
              {/* Project Details Columns */}
              <motion.div
                initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className={`lg:col-span-5 space-y-6 ${!isEven ? 'lg:order-2' : ''}`}
              >
                <div className="flex items-center gap-2">
                  <span className="px-6 py-2 bg-blue-500/15 border-2 border-blue-500/30 text-[#3B82F6] font-mono font-black text-sm rounded-full uppercase tracking-[0.2em] shadow-[0_0_25px_rgba(59,130,246,0.2)]">
                    {project.category}
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-4xl font-bold text-white tracking-tight">
                  {project.title}
                </h3>

                <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                  {project.description}
                </p>

                {/* Structured Client Requested Highlights */}
                <div className="space-y-4 pt-4 border-t border-white/5">
                  <h4 className="text-xs font-mono font-bold uppercase text-zinc-500 tracking-wider">
                    {language === 'en' ? 'Core Implementations:' : 'Основни имплементации:'}
                  </h4>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-sans">
                    {project.highlights.slice(0, 4).map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-zinc-950/40 border border-white/5">
                        {idx === 0 && <Globe className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />}
                        {idx === 1 && <Zap className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />}
                        {idx === 2 && <Smartphone className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />}
                        {idx === 3 && <QrCode className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />}
                        <div>
                          <span className="text-xs font-semibold text-white block">
                            {highlight.split(' - ')[0]}
                          </span>
                          <span className="text-[10px] text-zinc-500 mt-0.5 block">
                            {highlight.split(' - ')[1] || highlight}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex items-center gap-4 pt-4 font-sans">
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-white font-semibold bg-zinc-900 border border-white/10 hover:border-white/20 hover:bg-zinc-850 px-5 py-3 rounded-xl transition-all duration-300 group cursor-pointer"
                    >
                      <span>{language === 'en' ? 'Live Website' : 'Уебсайт на живо'}</span>
                      <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  )}
                  <button
                    onClick={onQuoteClick}
                    className="text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors cursor-pointer"
                  >
                    {project.id === 'teddys-bar-grill' 
                      ? (language === 'en' ? 'Request Similar Logo →' : 'Искам подобно лого →')
                      : (language === 'en' ? 'Request Similar Design →' : 'Искам подобен дизайн →')}
                  </button>
                </div>
              </motion.div>

              {/* Screenshot Column using the new image */}
              <motion.div
                initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className={`lg:col-span-12 xl:col-span-7 flex justify-center w-full ${!isEven ? 'lg:order-1' : ''}`}
              >
                <div className="relative group overflow-hidden rounded-3xl border border-white/5 bg-zinc-950/20 p-2 sm:p-4 glow-blue w-full max-w-2xl">
                  {/* Browser Header Bar Representation - Only for websites */}
                  {project.url ? (
                    <div className="w-full flex items-center justify-between px-3 pb-3 border-b border-white/5">
                      <div className="flex gap-1.5">
                        <span className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
                        <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
                        <span className="h-2.5 w-2.5 rounded-full bg-green-500/60" />
                      </div>
                      <div className="bg-zinc-900 border border-white/5 text-[9px] text-zinc-500 font-mono px-6 py-0.5 rounded-md truncate max-w-[180px] sm:max-w-xs text-center select-none">
                        {project.url}
                      </div>
                      <span className="text-zinc-600 text-xs font-semibold tracking-wider font-mono">AR // Case</span>
                    </div>
                  ) : (
                    <div className="w-full flex items-center justify-between px-3 pb-3 border-b border-white/5">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-3 h-3 text-blue-400" />
                        <span className="text-[10px] text-zinc-400 font-mono uppercase tracking-widest">Design Asset</span>
                      </div>
                      <span className="text-zinc-600 text-xs font-semibold tracking-wider font-mono">AR // Studio</span>
                    </div>
                  )}
                  
                  {/* Image Carousel */}
                  <div className="relative mt-3">
                    <ImageCarousel images={carouselImages} interval={6000} />
                  </div>
                </div>
              </motion.div>
            </div>
          );
        })}

        {/* Future Client Projects grid slots */}
        <div className="border-t border-white/5 pt-16">
          <div className="mb-8 p-1 sm:p-0">
            <h4 className="text-xs font-mono font-bold uppercase text-zinc-500 tracking-wider">
              {language === 'en' ? 'Future Placements • Join Us' : 'Бъдещи проекти • Присъединете се'}
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans">
            
            {/* Slot 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="glass-panel border-dashed border-white/10 bg-zinc-950/10 p-12 rounded-3xl flex flex-col justify-between h-64 text-left relative group hover:border-blue-500/30 transition-all duration-300"
            >
              <div className="flex justify-between items-start">
                <span className="px-3 py-1 bg-zinc-900 border border-white/5 text-zinc-500 font-mono font-semibold text-[9px] rounded-full uppercase tracking-wider">
                  {language === 'en' ? 'Bespoke Placements // Slot 02' : 'Позиция за проект // Слот 02'}
                </span>
                <span className="text-xs text-zinc-600 font-mono">
                  {language === 'en' ? 'Coming Soon' : 'Очаквайте скоро'}
                </span>
              </div>
              <div>
                <h4 className="text-lg font-bold text-zinc-300 font-sans group-hover:text-white transition-colors duration-300">
                  {language === 'en' ? 'Elite Beauty & Spa Lounge' : 'Елитен Beauty & Spa салон'}
                </h4>
                <p className="text-zinc-500 text-xs mt-2 max-w-sm">
                  {language === 'en' 
                    ? 'Premium reservation pipelines, gorgeous aesthetic gallery grids, and local Plovdiv search maps optimization.' 
                    : 'Премиум онлайн резервации, красиви галерии за услуги и локална оптимизация за карти в Пловдив.'}
                </p>
              </div>
              <div className="h-px bg-white/5" />
            </motion.div>

            {/* Slot 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="glass-panel border-dashed border-white/10 bg-zinc-950/10 p-12 rounded-3xl flex flex-col justify-between h-64 text-left relative group hover:border-blue-500/30 transition-all duration-300"
            >
              <div className="flex justify-between items-start">
                <span className="px-3 py-1 bg-zinc-900 border border-white/5 text-zinc-500 font-mono font-semibold text-[9px] rounded-full uppercase tracking-wider">
                  {language === 'en' ? 'Bespoke Placements // Slot 03' : 'Позиция за проект // Слот 03'}
                </span>
                <span className="text-xs text-zinc-600 font-mono animate-pulse text-blue-400">
                  {language === 'en' ? 'Available Space' : 'Свободно място'}
                </span>
              </div>
              <div>
                <h4 className="text-lg font-bold text-zinc-100 font-sans group-hover:text-blue-400 transition-colors duration-300">
                  {language === 'en' ? 'Your Local Bulgarian Business' : 'Вашият български бизнес'}
                </h4>
                <p className="text-zinc-400 text-xs mt-2 max-w-sm">
                  {language === 'en' 
                    ? 'Bring your restaurant, law firm, dental office, or boutique hotel to life online. Zero payment until fully approved.' 
                    : 'Дайте нов живот на ресторанта, кантората, кабинета или хотела си онлайн. Без плащане, докато не одобрите напълно.'}
                </p>
              </div>
              <button
                onClick={onQuoteClick}
                className="text-xs font-semibold text-blue-500 text-left hover:text-blue-400 transition-colors cursor-pointer"
              >
                {language === 'en' ? 'Claim This Space Now \u2192' : 'Заяви това място сега \u2192'}
              </button>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
