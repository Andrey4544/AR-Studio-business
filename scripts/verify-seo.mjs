import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const dist = path.join(root, 'dist');
const sitemapPath = path.join(root, 'public', 'sitemap.xml');
const sitemap = fs.readFileSync(sitemapPath, 'utf8');
const urls = [...sitemap.matchAll(/<loc>(https:\/\/www\.ar-studio\.site[^<]+)<\/loc>/g)].map((match) => match[1]);
const uniqueUrls = [...new Set(urls)];

if (uniqueUrls.length < 40) throw new Error(`Expected the full sitemap, found only ${uniqueUrls.length} URLs.`);
if (sitemap.includes('<lastmod>')) throw new Error('Sitemap contains a shared or stale lastmod value.');

for (const url of uniqueUrls) {
  const pathname = new URL(url).pathname;
  const relative = pathname === '/' ? 'index.html' : path.join(pathname.replace(/^\//, ''), 'index.html');
  const file = path.join(dist, relative);
  if (!fs.existsSync(file)) throw new Error(`Missing prerendered route: ${pathname}`);
  const html = fs.readFileSync(file, 'utf8');
  if (!/<title>[^<]+<\/title>/.test(html)) throw new Error(`Missing title: ${pathname}`);
  if (!/<meta name="description"[^>]+>/.test(html)) throw new Error(`Missing description: ${pathname}`);
  if (!/<link rel="canonical" href="https:\/\/www\.ar-studio\.site[^\"]+"/.test(html)) throw new Error(`Missing canonical: ${pathname}`);
  if (!/<h1>[^<]+<\/h1>/.test(html)) throw new Error(`Missing prerendered H1: ${pathname}`);
}

const localLandingChecks = [
  {
    route: '/web-design-plovdiv',
    expected: ['Уеб дизайн Пловдив от €249 | AR Studio', 'Tomato Restaurant', 'BelEstateGroup', 'Базов едностраничен сайт', 'FAQPage'],
  },
  {
    route: '/en/web-design-plovdiv',
    expected: ['Web Design Plovdiv from €249 | AR Studio', 'Tomato Restaurant', 'BelEstateGroup', 'Basic one-page website', 'FAQPage'],
  },
];
for (const check of localLandingChecks) {
  const relative = path.join(check.route.replace(/^\//, ''), 'index.html');
  const html = fs.readFileSync(path.join(dist, relative), 'utf8');
  const expectedCanonical = `https://www.ar-studio.site${check.route}`;
  if (!html.includes(`<link rel="canonical" href="${expectedCanonical}"`)) throw new Error(`Wrong canonical URL in ${check.route}`);
  if (!html.includes(`${expectedCanonical}#service`) || !html.includes(`${expectedCanonical}#faq`)) throw new Error(`Missing localized structured-data IDs in ${check.route}`);
  for (const phrase of check.expected) {
    if (!html.includes(phrase)) throw new Error(`Missing local landing page content "${phrase}" in ${check.route}`);
  }
}

const articleRoute = '/blog/kak-da-izberem-uebdizain-agenciya-plovdiv';
const articleFile = path.join(dist, articleRoute.replace(/^\//, ''), 'index.html');
const articleHtml = fs.readFileSync(articleFile, 'utf8');
const articleTitle = 'Уеб дизайн агенция в Пловдив: 5 критерия | AR Studio';
const articleDescription = 'Сравнете портфолио, процес, SEO основа, комуникация и цена, преди да изберете уеб дизайн агенция в Пловдив. Вижте 5 критерия и практични въпроси за избора.';
const articleDescriptionTag = articleHtml.match(/<meta name="description"[^>]*>/)?.[0] || '';
if (!articleHtml.includes(`<title>${articleTitle}</title>`)) throw new Error(`Wrong prerendered title in ${articleRoute}`);
if (!articleDescriptionTag.includes(articleDescription)) throw new Error(`Wrong prerendered description in ${articleRoute}`);
if (!articleHtml.includes('<h1>Как да изберете уеб дизайн агенция в Пловдив</h1>')) throw new Error(`Unexpected H1 in ${articleRoute}`);

const brokenEnglishRoutes = ['/en/uslugi', '/en/zashto-nas', '/en/kontakti'];
for (const route of brokenEnglishRoutes) {
  if (urls.some((url) => new URL(url).pathname === route)) throw new Error(`Obsolete English route remains in sitemap: ${route}`);
}

console.log(`SEO verification passed: ${uniqueUrls.length} sitemap URLs and prerendered route files checked.`);
