import { useEffect } from 'react';

interface PageMetaProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
  ogType?: 'website' | 'article';
  noIndex?: boolean;
}

const siteName = 'AR Studio';
const defaultImage = 'https://www.ar-studio.site/assets/logo.png';
const defaultCanonical = 'https://www.ar-studio.site/';

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
}: PageMetaProps) {
  useEffect(() => {
    document.title = title;

    setMeta('name', 'description', description);
    setMeta('name', 'robots', noIndex ? 'noindex, nofollow' : 'index, follow');

    if (keywords) {
      setMeta('name', 'keywords', keywords);
    }

    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonical);

    setMeta('property', 'og:type', ogType);
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:image', ogImage);
    setMeta('property', 'og:url', canonical);
    setMeta('property', 'og:site_name', siteName);
    setMeta('property', 'og:locale', 'bg_BG');

    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', ogImage);
  }, [title, description, keywords, ogImage, canonical, ogType, noIndex]);
}
