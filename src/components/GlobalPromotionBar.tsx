import { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PROMOTION_ENDS_AT } from '../lib/promotion';

function getRemainingMs() {
  return Math.max(0, PROMOTION_ENDS_AT - Date.now());
}

export default function GlobalPromotionBar() {
  const { language } = useLanguage();
  const [remainingMs, setRemainingMs] = useState(getRemainingMs);

  useEffect(() => {
    const update = () => setRemainingMs(getRemainingMs());
    const interval = window.setInterval(update, 1000);
    return () => window.clearInterval(interval);
  }, []);

  const time = [
    Math.floor(remainingMs / 86400000),
    Math.floor((remainingMs % 86400000) / 3600000),
    Math.floor((remainingMs % 3600000) / 60000),
    Math.floor((remainingMs % 60000) / 1000),
  ].map(value => String(value).padStart(2, '0'));

  const offerText = language === 'en'
    ? '10% OFF ALL SERVICES · LIMITED TIME'
    : '10% ОТСТЪПКА ЗА ВСИЧКИ УСЛУГИ · ОГРАНИЧЕНО ВРЕМЕ';
  const countdown = `${time[0]}:${time[1]}:${time[2]}:${time[3]}`;

  return (
    <div className="fixed inset-x-0 top-0 z-[60] flex h-8 items-center overflow-hidden border-b border-red-300/20 bg-red-700 text-white shadow-[0_2px_12px_rgba(127,29,29,0.35)]">
      <div className="promo-marquee-viewport w-full" aria-label={language === 'en' ? 'Limited-time promotion countdown' : 'Таймер на промоцията с ограничено време'}>
        {remainingMs > 0 ? (
          <div className="promo-marquee-track">
            {[0, 1].map(copy => (
              <div className="promo-marquee-item" key={copy} aria-hidden={copy === 1}>
                <span>{offerText}</span>
                <span aria-hidden="true" className="promo-marquee-separator">·</span>
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
