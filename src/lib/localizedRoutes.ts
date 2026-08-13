export type SiteLanguage = 'bg' | 'en';

const bgToEn: Record<string, string> = {
  '/': '/en',
  '/za-nas': '/en/about',
  '/uslugi': '/en/services',
  '/web-design-plovdiv': '/en/web-design-plovdiv',
  '/uslugi/izrabotka-na-sait-plovdiv': '/en/services/website-development-plovdiv',
  '/uslugi/sait-za-restorant-plovdiv': '/en/services/restaurant-website-plovdiv',
  '/uslugi/sait-za-kozmetichen-salon-plovdiv': '/en/services/beauty-salon-website-plovdiv',
  '/uslugi/sait-za-hotel-plovdiv': '/en/services/hotel-website-plovdiv',
  '/uslugi/sait-za-advokatska-kantora': '/en/services/law-firm-website-bulgaria',
  '/uslugi/izrabotka-na-onlayn-magazin': '/en/services/ecommerce-website-bulgaria',
  '/portfolio': '/en/portfolio',
  '/zashto-nas': '/en/why-us',
  '/otzivy': '/en/testimonials',
  '/kontakti': '/en/contact',
  '/brief': '/en/brief',
  '/chzv': '/en/faq',
  '/blog': '/en/blog',
};

const enToBg = Object.fromEntries(Object.entries(bgToEn).map(([bg, en]) => [en, bg]));

export function languageFromPath(pathname: string): SiteLanguage {
  return pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'bg';
}

export function localizedPath(pathname: string, targetLanguage: SiteLanguage): string {
  const pathnameWithoutTrailingSlash = pathname.length > 1 ? pathname.replace(/\/$/, '') : pathname;
  const currentLanguage = languageFromPath(pathnameWithoutTrailingSlash);

  if (currentLanguage === targetLanguage) return pathnameWithoutTrailingSlash;

  if (targetLanguage === 'en') {
    if (pathnameWithoutTrailingSlash.startsWith('/blog/')) return `/en${pathnameWithoutTrailingSlash}`;
    return bgToEn[pathnameWithoutTrailingSlash] || '/en';
  }

  if (pathnameWithoutTrailingSlash.startsWith('/en/blog/')) {
    return pathnameWithoutTrailingSlash.replace(/^\/en/, '');
  }

  return enToBg[pathnameWithoutTrailingSlash] || '/';
}

export function alternateLanguagePath(pathname: string): string {
  const currentLanguage = languageFromPath(pathname);
  return localizedPath(pathname, currentLanguage === 'bg' ? 'en' : 'bg');
}
