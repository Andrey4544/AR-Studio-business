/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Quote, Star, MessageSquarePlus } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import ReviewForm from './ReviewForm';

function GoogleMark({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#4285F4" d="M21.35 12.27c0-.72-.06-1.42-.18-2.09H12v3.96h5.24a4.48 4.48 0 0 1-1.94 2.94v2.45h3.14c1.84-1.7 2.91-4.2 2.91-7.26Z" />
      <path fill="#34A853" d="M12 21.69c2.63 0 4.84-.87 6.45-2.36l-3.14-2.45c-.87.58-1.98.92-3.31.92-2.54 0-4.69-1.72-5.46-4.03H3.3v2.53A9.74 9.74 0 0 0 12 21.69Z" />
      <path fill="#FBBC05" d="M6.54 13.77A5.86 5.86 0 0 1 6.23 12c0-.61.11-1.2.31-1.77V7.7H3.3a9.75 9.75 0 0 0 0 8.6l3.24-2.53Z" />
      <path fill="#EA4335" d="M12 6.2c1.43 0 2.71.49 3.72 1.45l2.79-2.79C16.83 3.28 14.63 2.31 12 2.31a9.74 9.74 0 0 0-8.7 5.39l3.24 2.53C7.31 7.92 9.46 6.2 12 6.2Z" />
    </svg>
  );
}

function uniqueReviews(reviews: any[]) {
  const seen = new Set<string>();

  return reviews.filter((review: any) => {
    const identity = review?.id
      ? `id:${review.id}`
      : `legacy:${review?.timestamp || ''}|${review?.name || ''}|${review?.text || ''}`;

    if (seen.has(identity)) return false;
    seen.add(identity);
    return true;
  });
}

function compareReviewsByNewest(first: any, second: any) {
  const firstTime = Date.parse(first?.timestamp || '');
  const secondTime = Date.parse(second?.timestamp || '');

  // Keep legacy reviews without a valid timestamp after dated reviews.
  if (Number.isNaN(firstTime) && Number.isNaN(secondTime)) return 0;
  if (Number.isNaN(firstTime)) return 1;
  if (Number.isNaN(secondTime)) return -1;

  return secondTime - firstTime;
}

export default function Testimonials() {
  const { language, t } = useLanguage();
  const [reviews, setReviews] = useState<any[]>([]);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const fetchReviews = async () => {
    try {
      const response = await fetch('/api/reviews');
      if (response.ok) {
        const data = await response.json();
        const uniqueReviewsList = uniqueReviews(Array.isArray(data) ? data : []);
        setReviews(uniqueReviewsList.sort(compareReviewsByNewest));
      }
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <section className="py-24 bg-luxury-black relative overflow-hidden border-t border-white/5">
      {/* Background Decorative overlays */}
      <div className="absolute top-[20%] right-[-10%] w-[350px] h-[350px] rounded-full bg-blue-900/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span className="text-[10px] font-mono tracking-widest uppercase text-blue-400 font-semibold">
              {t('testimonialsSubTitle')}
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
            {language === 'en' ? (
              <>
                Client Feedback <br />
                <span className="bg-gradient-to-r from-zinc-100 via-zinc-400 to-zinc-600 bg-clip-text text-transparent">
                  Published With Permission
                </span>
              </>
            ) : (
              <>
                Клиентска обратна връзка <br />
                <span className="bg-gradient-to-r from-zinc-100 via-zinc-400 to-zinc-600 bg-clip-text text-transparent">
                  публикувана с разрешение
                </span>
              </>
            )}
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            {t('testimonialsDesc')}
          </p>
        </div>

        {/* Review Action Button */}
        <div className="flex justify-center mb-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsFormOpen(true)}
            className="flex items-center gap-2 px-6 py-3 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 font-bold hover:bg-blue-500/20 transition-all group"
          >
            <MessageSquarePlus className="w-4 h-4" />
            <span>{language === 'en' ? 'Leave a Review' : 'Остави отзив'}</span>
          </motion.button>
        </div>

        {/* Testimonials Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {reviews.map((review, idx) => (
            (() => {
              const isGoogleReview = String(review.company || '').trim().toLowerCase() === 'enframe.bg';

              return (
            <div
              key={review.id}
              className={`relative rounded-2xl p-8 border transition-all duration-300 flex flex-col justify-between ${isGoogleReview ? 'bg-white border-white shadow-[0_18px_60px_rgba(255,255,255,0.12)] hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(255,255,255,0.18)]' : 'bg-zinc-900/30 border-white/5 hover:border-white/10 hover:bg-zinc-950/40'}`}
            >
              {isGoogleReview && (
                <div className="mb-6 flex items-center justify-between gap-3 rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3">
                  <div className="flex items-center gap-3">
                    <GoogleMark className="h-6 w-6" />
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-500">{language === 'en' ? 'Verified source' : 'Източник на отзива'}</p>
                      <p className="mt-0.5 text-sm font-bold text-zinc-900">Google отзив</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-white px-3 py-1 text-[10px] font-bold text-zinc-600 shadow-sm">Google</span>
                </div>
              )}
              {/* Quote Icon Graphic */}
              <div className={`absolute top-6 right-8 select-none pointer-events-none ${isGoogleReview ? 'text-blue-600/10' : 'text-blue-500/10'}`}>
                <Quote className="w-12 h-12" />
              </div>

              <div>
                {/* 5-Star Ratings */}
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className={`${isGoogleReview ? 'text-zinc-700' : 'text-zinc-300'} text-xs sm:text-sm italic leading-relaxed mb-6 font-sans`}>
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className={`pt-5 border-t flex items-center justify-between ${isGoogleReview ? 'border-zinc-200' : 'border-white/5'}`}>
                <div>
                  <h4 className={`font-bold font-sans text-sm sm:text-base leading-none ${isGoogleReview ? 'text-zinc-950' : 'text-white'}`}>{review.name}</h4>
                  <span className="text-xs text-zinc-500 mt-1.5 inline-block">{review.role}</span>
                </div>
                <div className="text-right">
                  <span className={`text-xs font-mono font-bold px-3 py-1 rounded-full border ${isGoogleReview ? 'text-zinc-700 bg-zinc-100 border-zinc-200' : 'text-blue-400 bg-blue-500/5 border-blue-500/10'}`}>
                    {review.company}
                  </span>
                </div>
              </div>
            </div>
              );
            })()
          ))}
        </div>

        {reviews.length === 0 && (
          <p className="max-w-2xl mx-auto mt-8 text-center text-sm leading-relaxed text-zinc-500">
            {language === 'en'
              ? 'No customer feedback has been published yet. AR Studio displays only reviews approved for publication by its team.'
              : 'Все още няма публикувана клиентска обратна връзка. AR Studio показва само отзиви, одобрени за публикуване от екипа.'}
          </p>
        )}

        <ReviewForm 
          isOpen={isFormOpen} 
          onClose={() => setIsFormOpen(false)} 
          onSuccess={fetchReviews}
        />

      </div>
    </section>
  );
}
