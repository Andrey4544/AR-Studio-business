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

const brokenEnglishRoutes = ['/en/uslugi', '/en/zashto-nas', '/en/kontakti'];
for (const route of brokenEnglishRoutes) {
  if (urls.some((url) => new URL(url).pathname === route)) throw new Error(`Obsolete English route remains in sitemap: ${route}`);
}

console.log(`SEO verification passed: ${uniqueUrls.length} sitemap URLs and prerendered route files checked.`);
