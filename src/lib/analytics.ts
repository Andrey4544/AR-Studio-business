const CONSENT_STORAGE_KEY = 'ar-studio-analytics-consent';

type AnalyticsValue = string | number | boolean | undefined;
type AnalyticsEventParams = Record<string, AnalyticsValue>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Sends a non-identifying GA4 event only after the visitor has opted into
 * optional analytics. Never include names, emails, phone numbers, or free text.
 */
export function trackAnalyticsEvent(eventName: string, params: AnalyticsEventParams = {}) {
  if (typeof window === 'undefined') return;
  if (window.localStorage.getItem(CONSENT_STORAGE_KEY) !== 'accepted') return;
  if (!window.gtag) return;

  const safeParams = Object.fromEntries(
    Object.entries(params).filter(([, value]) => value !== undefined),
  );

  window.gtag('event', eventName, safeParams);
}
