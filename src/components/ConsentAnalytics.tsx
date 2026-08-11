import React from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const GA_MEASUREMENT_ID = 'G-SVH90YQ326';
const CONSENT_STORAGE_KEY = 'ar-studio-analytics-consent';

type ConsentChoice = 'accepted' | 'declined' | null;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function enableAnalytics() {
  if (!window.gtag) {
    window.dataLayer = window.dataLayer || [];
    window.gtag = (...args: unknown[]) => {
      window.dataLayer?.push(args);
    };
  }

  if (!document.getElementById('ar-studio-ga4-script')) {
    const script = document.createElement('script');
    script.id = 'ar-studio-ga4-script';
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);
    window.gtag('js', new Date());
  }
}

export default function ConsentAnalytics() {
  const location = useLocation();
  const { language } = useLanguage();
  const [consent, setConsent] = React.useState<ConsentChoice>(() => {
    if (typeof window === 'undefined') return null;
    const savedConsent = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    return savedConsent === 'accepted' || savedConsent === 'declined' ? savedConsent : null;
  });

  React.useEffect(() => {
    if (consent !== 'accepted') return;

    enableAnalytics();
    window.gtag?.('config', GA_MEASUREMENT_ID, {
      page_path: `${location.pathname}${location.search}`,
      anonymize_ip: true,
    });
  }, [consent, location.pathname, location.search]);

  const saveConsent = (choice: Exclude<ConsentChoice, null>) => {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, choice);
    setConsent(choice);
  };

  if (consent) return null;

  const isEnglish = language === 'en';

  return (
    <section
      role="dialog"
      aria-live="polite"
      aria-label={isEnglish ? 'Cookie preferences' : 'Предпочитания за бисквитки'}
      className="fixed z-[120] bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md rounded-2xl border border-white/10 bg-zinc-950/95 p-5 shadow-2xl shadow-black/50 backdrop-blur-xl"
    >
      <h2 className="text-sm font-bold text-white">
        {isEnglish ? 'Your privacy choices' : 'Вашият избор за поверителност'}
      </h2>
      <p className="mt-2 text-xs leading-relaxed text-zinc-400">
        {isEnglish
          ? 'AR Studio can use optional Google Analytics cookies to understand site traffic and improve the experience. Analytics loads only if you allow it.'
          : 'AR Studio може да използва незадължителни бисквитки от Google Analytics, за да разбира трафика към сайта и да подобрява изживяването. Анализът се зарежда само ако го разрешите.'}
      </p>
      <div className="mt-4 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
        <button
          type="button"
          onClick={() => saveConsent('declined')}
          className="rounded-lg border border-white/10 px-4 py-2.5 text-xs font-semibold text-zinc-200 transition-colors hover:border-white/30 hover:bg-white/5"
        >
          {isEnglish ? 'Essential only' : 'Само необходими'}
        </button>
        <button
          type="button"
          onClick={() => saveConsent('accepted')}
          className="rounded-lg bg-blue-600 px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-blue-500"
        >
          {isEnglish ? 'Allow analytics' : 'Разреши анализ'}
        </button>
      </div>
    </section>
  );
}
