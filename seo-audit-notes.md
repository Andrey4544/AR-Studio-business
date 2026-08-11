# Initial SEO Audit Notes — AR Studio

## Search landscape observed on 2026-08-11

Search results for the relevant local-commercial intent show established Plovdiv competitors such as I-Creativ, punkt.studio, Creative Point, and IT Advanced. Industry directories including TechBehemoths, Clutch, and DesignRush also occupy prominent visibility for Bulgaria-wide agency searches.

The brand query is ambiguous: results include unrelated entities such as Web-AR Studio, WE/AR Studio, and AR-STUDIO. This makes consistent brand/entity signals, a precise local positioning statement, and authoritative local citations essential.

## Current on-site audit

The home page already targets Bulgarian local terms, including "уеб дизайн Пловдив" and "изработка на сайтове". It has a canonical URL, robots directives, Open Graph tags, and LocalBusiness, Organization, and FAQ structured data.

Main implementation opportunities found so far:

- Strengthen the homepage's keyword coverage around Plovdiv and Bulgaria without keyword stuffing.
- Build a dedicated, intent-matched Plovdiv web-design landing page instead of relying only on homepage metadata.
- Improve sitewide structured data and page-level metadata.
- Verify sitemap, robots directives, crawlability, routes, mobile rendering, page speed, internal links, image alt text, and conversion calls to action.
- Create a sustained content and local-authority plan, including a Google Business Profile and accurate local citations.

## Initial sources to inspect

- https://i-creativ.net/en
- https://www.creativepoint.org/en/
- https://www.it-advanced.com/en
- https://techbehemoths.com/companies/web-development/plovdiv
- https://clutch.co/bg/web-designers
- https://www.ar-studio.site

## Rendered homepage observation

The live homepage exposes a clear Bulgarian navigation structure, two prominent consultation calls to action, a portfolio call to action, FAQ questions, two phone numbers, an email address, social links, and crawlable internal links to all major service and trust pages. The browser-rendered title correctly matches the targeted local positioning: "Уеб дизайн и разработка в Пловдив | Изработка на сайтове".

## Competitor page observations

I-Creativ, a visible Plovdiv competitor, leads with an explicit "Design & Web Development" H1, a precise Kapana/Plovdiv location statement, a long-established experience signal (since 2006), selected work, named awards, an exact street address, and links to external professional and social profiles. This reinforces the value of prominent local entity information, proof of work, credible longevity signals, and sustained third-party mentions.

Creative Point’s website was unavailable to the audit browser at the time of review because the remote server closed the connection. Its search result still indicates a local Plovdiv agency positioning, but no on-page claims were used as evidence.

## Official Google guidance applied to this plan

Google states that following its Search Essentials and SEO guidance does not guarantee a first-place ranking; it helps crawlers understand the content and can improve the site’s presence over time. It advises unique, useful, people-first content, descriptive titles and snippets, logical internal links, and descriptive image alternative text. Google also confirms that the meta-keywords tag is not used for ranking, so the implementation will prioritize visible, purpose-built page copy and accurate titles rather than keyword repetition.

For local results, Google identifies relevance, distance, and prominence as primary factors. A verified and complete Google Business Profile, accurate business information, customer reviews and responses, photos, and authentic web mentions all support local visibility. The site can improve relevance and entity consistency; Google Business Profile, review generation, and legitimate local mentions are necessary off-site complements.

The current root XML sitemap correctly lists absolute canonical URLs and is referenced in robots.txt. Its `changefreq` and `priority` elements have no Google ranking value, and `lastmod` should represent significant page changes only. After publication, the sitemap should be submitted and monitored in Search Console.

## Crawl and metadata findings

The deployed site redirects the non-www domain to `https://www.ar-studio.site/`, while the HTML canonical URL, sitemap, robots sitemap reference, JSON-LD entity URLs, and route-level defaults currently use the non-www domain. This creates an avoidable canonical inconsistency. The implementation should standardize every internal SEO signal on the deployed `www` URL.

The site is a client-rendered Vite SPA. Google can render JavaScript, but important page-specific titles, canonicals, and content are initially created in the browser. The implementation will maximize crawlability with clear route-level metadata, a complete sitemap, direct internal links, and JSON-LD; a future server-side rendering or static pre-rendering upgrade is a separate high-impact option if indexing diagnostics show rendering problems.

The direct PageSpeed API audit could not run because the public API project had exhausted its daily quota, so no performance score is being claimed from that source. Performance checks will instead focus on the production build, responsive media, and avoiding unnecessary SEO payloads; a Search Console/PageSpeed review remains part of the post-launch plan.

## Credibility and entity consistency findings

The footer includes the actual Facebook, Instagram, and TikTok destination URLs, whereas the Organization and LocalBusiness schemas contain generic Facebook, Instagram, and LinkedIn URLs that may not represent the published profiles. Structured data will be aligned only with verified, visible brand links. The service has a city-level location (“Център, Пловдив 4000”) rather than a full public street address, so the site will retain a service-area positioning rather than inventing a more precise address.

The visual review cards correctly fetch only approved records from the API, but surrounding site copy still claims “100% positive reviews.” That unsupported claim should be replaced with an honest invitation to read future verified client feedback.

## Local implementation verification

The new `/web-design-plovdiv` route renders with the intended Bulgarian page title, a single local-commercial H1, complete supporting content, two consultation calls to action, internal links to the services page, portfolio, and supporting local guide, and three visible FAQ answers. The persistent footer also exposes an internal link to the new page. The responsive desktop rendering was checked locally and the new heading, introductory text, calls to action, and first supporting content block are visually readable.

## Supporting article verification

The new blog article at `/blog/kak-da-izberem-uebdizain-agenciya-plovdiv` renders with the intended locally relevant title, practical decision-making content, an article date and author, and working contextual links to the Plovdiv service page and services page. The footer link to the Plovdiv page is also present across the article route.

## Production publication

The SEO commit `74c227d` was deployed successfully to the production Vercel project. The production deployment reached `READY` state before final public-route verification.

## Public crawler-file verification

The public `https://www.ar-studio.site/sitemap.xml` is live and includes both newly added URLs: `/web-design-plovdiv` and `/blog/kak-da-izberem-uebdizain-agenciya-plovdiv`. It uses the canonical `www` domain consistently.
