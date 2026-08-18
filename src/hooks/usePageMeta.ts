import { useEffect } from 'react';
import { languageFromPath, localizedPath } from '../lib/localizedRoutes';

interface PageMetaProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
  ogType?: 'website' | 'article';
  noIndex?: boolean;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

const siteName = 'AR Studio';
export const SITE_URL = 'https://www.ar-studio.site';
export const DEFAULT_IMAGE = `${SITE_URL}/assets/logo.webp`;
const defaultImage = DEFAULT_IMAGE;
const defaultCanonical = `${SITE_URL}/`;

const englishMetaByBulgarianCanonical: Record<string, { title: string; description: string; keywords?: string }> = {
  [`${SITE_URL}/za-nas`]: { title: 'About AR Studio | Design & Development Team in Plovdiv', description: 'Meet Andrey and Rumen, the direct design and development team behind AR Studio in Plovdiv.', keywords: 'AR Studio team, web developer Plovdiv, web designer Plovdiv' },
  [`${SITE_URL}/uslugi`]: { title: 'Web Design, Websites & Online Stores | AR Studio Plovdiv', description: 'Explore AR Studio services for custom web design, business websites, landing pages, and online stores in Plovdiv and Bulgaria.', keywords: 'web design services Plovdiv, business website, online store Bulgaria, landing page' },
  [`${SITE_URL}/portfolio`]: { title: 'Portfolio | AR Studio Real Website Projects', description: 'Explore selected AR Studio projects for real estate, restaurants, and online retail, with direct links to the live websites.', keywords: 'web design portfolio Plovdiv, website projects Bulgaria, restaurant website, real estate website' },
  [`${SITE_URL}/zashto-nas`]: { title: 'Why AR Studio | Direct Web Design Partnership', description: 'Learn how AR Studio combines direct communication, focused design, technical development, and a clear website process.', keywords: 'why AR Studio, web design process Plovdiv, direct web development team' },
  [`${SITE_URL}/otzivy`]: { title: 'Client Reviews | AR Studio', description: 'Read client feedback published with permission and learn how AR Studio approaches website projects.', keywords: 'AR Studio reviews, web design client feedback Plovdiv' },
  [`${SITE_URL}/kontakti`]: { title: 'Contact AR Studio | Free Web Design Consultation', description: 'Contact AR Studio in Plovdiv for a free website consultation by phone, Viber, email, or a short project brief.', keywords: 'contact web design Plovdiv, free website consultation Bulgaria' },
  [`${SITE_URL}/brief`]: { title: 'Project Brief | AR Studio', description: 'Answer a few practical questions before starting a website project with AR Studio.', keywords: 'website project brief, web design consultation Plovdiv' },
  [`${SITE_URL}/chzv`]: { title: 'FAQ | AR Studio Web Design', description: 'Answers to common questions about AR Studio services, pricing, project process, and website delivery.', keywords: 'web design FAQ, website project questions, AR Studio' },
  [`${SITE_URL}/uslugi/izrabotka-na-sait-plovdiv`]: { title: 'Website Development in Plovdiv | AR Studio', description: 'Custom business website development in Plovdiv with mobile-first design, clear contact paths, and a search-ready technical foundation.' },
  [`${SITE_URL}/uslugi/sait-za-restorant-plovdiv`]: { title: 'Restaurant Website & Digital Menu in Plovdiv | AR Studio', description: 'Restaurant websites with digital menus, reservations, location details, and mobile-first customer journeys.' },
  [`${SITE_URL}/uslugi/sait-za-kozmetichen-salon-plovdiv`]: { title: 'Beauty Salon Website in Plovdiv | AR Studio', description: 'Websites for beauty salons with services, pricing, appointment paths, and a clear mobile experience.' },
  [`${SITE_URL}/uslugi/sait-za-hotel-plovdiv`]: { title: 'Hotel Website in Plovdiv | AR Studio', description: 'Hotel websites with room information, location details, direct enquiry paths, and booking-ready structure.' },
  [`${SITE_URL}/uslugi/sait-za-advokatska-kantora`]: { title: 'Law Firm Website in Bulgaria | AR Studio', description: 'Clear, trustworthy websites for law firms with services, expertise, contact paths, and a focused digital presence.' },
  [`${SITE_URL}/uslugi/izrabotka-na-onlayn-magazin`]: { title: 'E-commerce Website Development in Bulgaria | AR Studio', description: 'Custom online stores with product structure, customer-friendly shopping paths, and a technical foundation for growth.' },
};

function setLocaleLink(hreflang: string, href: string) {
  let element = document.querySelector(`link[data-ar-studio-hreflang="${hreflang}"]`) as HTMLLinkElement | null;
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', 'alternate');
    element.setAttribute('hreflang', hreflang);
    element.setAttribute('data-ar-studio-hreflang', hreflang);
    document.head.appendChild(element);
  }
  element.setAttribute('href', href);
}

function setMeta(attribute: 'name' | 'property', key: string, content: string) {
  let element = document.querySelector(`meta[${attribute}="${key}"]`) as HTMLMetaElement | null;

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
}

export function usePageMeta({
  title,
  description,
  keywords,
  ogImage = defaultImage,
  canonical = defaultCanonical,
  ogType = 'website',
  noIndex = false,
  jsonLd,
}: PageMetaProps) {
  useEffect(() => {
    const currentPath = window.location.pathname.length > 1
      ? window.location.pathname.replace(/\/$/, '')
      : window.location.pathname;
    const resolvedCanonical = `${SITE_URL}${currentPath === '/' ? '/' : currentPath}`;
    const currentLanguage = languageFromPath(currentPath);
    const bgUrl = `${SITE_URL}${localizedPath(currentPath, 'bg')}`;
    const enUrl = `${SITE_URL}${localizedPath(currentPath, 'en')}`;

    const englishMeta = currentLanguage === 'en' ? englishMetaByBulgarianCanonical[canonical] : undefined;
    const resolvedTitle = englishMeta?.title || title;
    const resolvedDescription = englishMeta?.description || description;
    const resolvedKeywords = englishMeta?.keywords || keywords;

    document.title = 'Edelweiss';

    setMeta('name', 'description', resolvedDescription);
    setMeta('name', 'robots', noIndex ? 'noindex, nofollow' : 'index, follow');

    if (resolvedKeywords) {
      setMeta('name', 'keywords', resolvedKeywords);
    }

    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', resolvedCanonical);
    setLocaleLink('bg', bgUrl);
    setLocaleLink('en', enUrl);

    setMeta('property', 'og:type', ogType);
    setMeta('property', 'og:title', resolvedTitle);
    setMeta('property', 'og:description', resolvedDescription);
    setMeta('property', 'og:image', ogImage);
    setMeta('property', 'og:url', resolvedCanonical);
    setMeta('property', 'og:site_name', siteName);
    setMeta('property', 'og:locale', currentLanguage === 'en' ? 'en_US' : 'bg_BG');

    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', resolvedTitle);
    setMeta('name', 'twitter:description', resolvedDescription);
    setMeta('name', 'twitter:image', ogImage);

    const schemaId = 'page-structured-data';
    const existingSchema = document.getElementById(schemaId);
    const schemaWasManagedByPage = Boolean(jsonLd);
    if (jsonLd) {
      const script = (existingSchema as HTMLScriptElement | null) || document.createElement('script');
      script.id = schemaId;
      script.type = 'application/ld+json';
      const localizedSchema = JSON.parse(JSON.stringify(jsonLd).replaceAll(canonical, resolvedCanonical));
      script.textContent = JSON.stringify(localizedSchema);
      if (!existingSchema) document.head.appendChild(script);
    }

    return () => {
      if (schemaWasManagedByPage) {
        document.getElementById(schemaId)?.remove();
      }
    };
  }, [title, description, keywords, ogImage, canonical, ogType, noIndex, jsonLd]);
}
