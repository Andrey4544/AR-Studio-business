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

  return (
    <div className="fixed inset-x-0 top-0 z-[60] flex h-8 items-center justify-center border-b border-red-300/20 bg-red-700 px-3 text-white shadow-[0_2px_12px_rgba(127,29,29,0.35)]">
      <div className="flex w-full max-w-7xl items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-[0.08em] sm:gap-3 sm:text-xs sm:tracking-[0.12em]">
        {remainingMs > 0 ? (
          <>
            <span className="whitespace-nowrap">{language === 'en' ? 'Limited time · 10% off all services' : 'Ограничено време · 10% отстъпка за всички услуги'}</span>
            <span className="h-3 w-px shrink-0 bg-white/40" aria-hidden="true" />
            <span className="whitespace-nowrap font-mono tabular-nums" role="timer" aria-label={language === 'en' ? 'Promotion countdown: days, hours, minutes, seconds' : 'Таймер на промоцията: дни, часове, минути, секунди'}>
              {time[0]}:{time[1]}:{time[2]}:{time[3]}
            </span>
          </>
        ) : (
          <span className="whitespace-nowrap">{language === 'en' ? 'Limited-time offer ended' : 'Офертата с ограничено време изтече'}</span>
        )}
      </div>
    </div>
  );
}
