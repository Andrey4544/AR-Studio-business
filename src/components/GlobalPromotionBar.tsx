import { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { getPromotionRemainingMs, PROMOTION_DISCOUNT_PERCENT } from '../lib/promotion';

export default function GlobalPromotionBar() {
  const { language } = useLanguage();
  const [remainingMs, setRemainingMs] = useState(getPromotionRemainingMs);

  useEffect(() => {
    if (remainingMs <= 0) return;
    const interval = window.setInterval(() => {
      const nextRemainingMs = getPromotionRemainingMs();
      setRemainingMs(nextRemainingMs);
      if (nextRemainingMs <= 0) window.clearInterval(interval);
    }, 1000);
    return () => window.clearInterval(interval);
  }, [remainingMs > 0]);

  if (remainingMs <= 0) return null;

  const time = [
    Math.floor(remainingMs / 86400000),
    Math.floor((remainingMs % 86400000) / 3600000),
    Math.floor((remainingMs % 3600000) / 60000),
    Math.floor((remainingMs % 60000) / 1000),
  ].map(value => String(value).padStart(2, '0'));

  const offerText = language === 'en'
    ? `${PROMOTION_DISCOUNT_PERCENT}% OFF ALL SERVICES · LIMITED TIME`
    : `${PROMOTION_DISCOUNT_PERCENT}% ОТСТЪПКА ЗА ВСИЧКИ УСЛУГИ · ОГРАНИЧЕНО ВРЕМЕ`;
  const compactOfferText = language === 'en'
    ? `${PROMOTION_DISCOUNT_PERCENT}% OFF ALL SERVICES`
    : `${PROMOTION_DISCOUNT_PERCENT}% ОТСТЪПКА ЗА ВСИЧКИ УСЛУГИ`;
  const countdown = `${time[0]}:${time[1]}:${time[2]}:${time[3]}`;

  return (
    <div className="fixed inset-x-0 top-0 z-[60] flex h-11 items-center overflow-hidden border-b border-red-300/25 bg-red-700 text-white shadow-[0_2px_14px_rgba(127,29,29,0.4)] md:h-12">
      <div className="promo-marquee-viewport w-full" aria-label={language === 'en' ? 'Limited-time promotion countdown' : 'Таймер на промоцията с ограничено време'}>
        {remainingMs > 0 ? (
          <div className="promo-marquee-track">
            {Array.from({ length: 8 }, (_, copy) => (
              <div className="promo-marquee-item" key={copy} aria-hidden={copy > 0}>
                <span className="promo-offer-full">{offerText}</span>
                <span className="promo-offer-compact">{compactOfferText}</span>
                <span className="font-mono tabular-nums" role={copy === 0 ? 'timer' : undefined} aria-label={copy === 0 ? (language === 'en' ? 'Promotion countdown: days, hours, minutes, seconds' : 'Таймер на промоцията: дни, часове, минути, секунди') : undefined}>
                  {countdown}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <div className="promo-marquee-ended">{language === 'en' ? 'Limited-time offer ended' : 'Офертата с ограничено време изтече'}</div>
        )}
      </div>
    </div>
  );
}
