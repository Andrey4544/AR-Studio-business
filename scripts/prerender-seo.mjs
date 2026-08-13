import fs from 'node:fs';
import path from 'node:path';

const DIST = path.resolve('dist');
const SITE = 'https://www.ar-studio.site';

const navLinks = [
  ['Начало', '/'],
  ['Услуги', '/uslugi'],
  ['Уеб дизайн в Пловдив', '/web-design-plovdiv'],
  ['Портфолио', '/portfolio'],
  ['За нас', '/za-nas'],
  ['Блог', '/blog'],
  ['Контакти', '/kontakti'],
];

const serviceLinks = [
  ['/uslugi/izrabotka-na-sait-plovdiv', 'Изработка на сайт в Пловдив'],
  ['/uslugi/sait-za-restorant-plovdiv', 'Сайт за ресторант в Пловдив'],
  ['/uslugi/sait-za-kozmetichen-salon-plovdiv', 'Сайт за козметичен салон в Пловдив'],
  ['/uslugi/sait-za-hotel-plovdiv', 'Сайт за хотел в Пловдив'],
  ['/uslugi/sait-za-advokatska-kantora', 'Сайт за адвокатска кантора'],
  ['/uslugi/izrabotka-na-onlayn-magazin', 'Изработка на онлайн магазин'],
];

const routes = {
  '/': {
    title: 'AR Studio | Уеб дизайн и изработка на сайтове в Пловдив',
    description: 'AR Studio създава бързи и персонализирани уебсайтове за бизнеси в Пловдив и цяла България. Поискайте безплатна консултация за сайт или онлайн магазин.',
    h1: 'Уеб дизайн и изработка на сайтове в Пловдив',
    summary: 'AR Studio е бутиково студио за уеб дизайн и разработка. Създаваме ясни, бързи и мобилни сайтове, които представят услугите Ви и улесняват следващото действие на клиента.',
    h2: 'Услуги за местен и растящ бизнес',
    bullets: ['Индивидуален уеб дизайн и бизнес сайт', 'Дигитално меню, QR интеграции и сайтове за ресторанти', 'Онлайн магазини и продуктови каталози', 'Техническа SEO основа, съдържание и поддръжка'],
    schemaType: 'home',
  },
  '/za-nas': {
    title: 'За AR Studio | Екип за уеб дизайн в Пловдив',
    description: 'Запознайте се с екипа на AR Studio в Пловдив и с начина ни на работа по уеб дизайн, разработка, SEO основа и дигитални проекти.',
    h1: 'Екипът зад AR Studio',
    summary: 'AR Studio обединява дизайн, разработка и практична комуникация за бизнеси, които искат професионално онлайн присъствие без излишна сложност.',
    h2: 'Как работим по един проект',
    bullets: ['Започваме с целта на бизнеса и нуждите на клиента', 'Подреждаме съдържанието и структурата преди визуалния детайл', 'Тестваме мобилното изживяване, контактите и основните SEO елементи', 'Оставаме достъпни за развитие и поддръжка след публикуването'],
    schemaType: 'webpage',
  },
  '/uslugi': {
    title: 'Уеб дизайн, сайтове и онлайн магазини в Пловдив | AR Studio',
    description: 'Разгледайте услугите на AR Studio за уеб дизайн, бизнес сайтове, ресторанти, хотели, адвокати, онлайн магазини и техническа SEO основа.',
    h1: 'Уеб услуги за бизнеси в Пловдив и България',
    summary: 'Избираме обхвата според целта на проекта: повече запитвания, резервации, посещения на място, продажби или по-ясно представяне на професионална услуга.',
    h2: 'Специализирани услуги',
    bullets: serviceLinks.map(([, label]) => label),
    schemaType: 'webpage',
  },
  '/web-design-plovdiv': {
    title: 'Уеб дизайн в Пловдив | Изработка на сайтове за бизнеса | AR Studio',
    description: 'AR Studio създава бързи и персонализирани уебсайтове за бизнеси в Пловдив и цяла България. Уеб дизайн, онлайн магазини и SEO-ready решения.',
    h1: 'Уеб дизайн в Пловдив за бизнеси с конкретна цел',
    summary: 'Планираме сайта около хората, които искате да привлечете, информацията, която трябва да разберат, и действието, което искате да предприемат.',
    h2: 'Какво включва добрата основа',
    bullets: ['Ясна структура на услугите и силно локално позициониране', 'Responsive дизайн за телефон, таблет и компютър', 'Технически SEO елементи и вътрешни връзки', 'Лесни контактни пътища за обаждане, запитване или резервация'],
    schemaType: 'service',
  },
  '/portfolio': {
    title: 'Портфолио на AR Studio | Уеб сайтове и дигитални проекти',
    description: 'Разгледайте реализирани уеб проекти на AR Studio: ресторант, недвижими имоти, онлайн магазин и дигитални решения за български бизнеси.',
    h1: 'Портфолио: реални уеб проекти',
    summary: 'Вижте как различни бизнес цели се превръщат в структура, визуална посока и функционален сайт.',
    h2: 'Проекти и направления',
    bullets: ['Tomato Restaurant — сайт, дигитално меню и QR изживяване', 'BelEstateGroup — каталог и представяне на имотен бизнес', 'CBL Fight Store — продуктово и e-commerce изживяване', 'Проекти за местни услуги, заведения и професионални бизнеси'],
    schemaType: 'webpage',
  },
  '/zashto-nas': {
    title: 'Защо да изберете AR Studio | Уеб дизайн в Пловдив',
    description: 'Научете как AR Studio работи: директна комуникация, бърз процес, мобилен дизайн, SEO основа и поддръжка за бизнеси в Пловдив.',
    h1: 'Практичен процес и директна комуникация',
    summary: 'Добрият сайт е резултат от разбираема цел, правилна структура и проверка на детайлите. Затова работим с кратки стъпки и ясна обратна връзка.',
    h2: 'Причини да започнете разговор',
    bullets: ['Директен контакт с хората по дизайна и разработката', 'Ясен обхват, срок и следващи стъпки', 'Mobile-first подход и техническа SEO подготовка', 'Възможност за развитие на сайта след старта'],
    schemaType: 'webpage',
  },
  '/otzivy': {
    title: 'Отзиви за AR Studio | Мнения на клиенти',
    description: 'Прочетете публикуваните с разрешение отзиви за AR Studio и научете как да изпратите собствена обратна връзка.',
    h1: 'Клиентска обратна връзка, публикувана с разрешение',
    summary: 'Показваме одобрени отзиви и се стремим всяка обратна връзка да бъде представена ясно и коректно.',
    h2: 'Вашият опит има значение',
    bullets: ['Публикуваме само отзиви, одобрени от екипа', 'Всеки отзив се показва само веднъж', 'Можете да споделите впечатленията си чрез формата на страницата'],
    schemaType: 'webpage',
  },
  '/kontakti': {
    title: 'Контакти | Безплатна консултация за уеб сайт в Пловдив | AR Studio',
    description: 'Свържете се с AR Studio за безплатна консултация за уеб дизайн, бизнес сайт, онлайн магазин или дигитално меню в Пловдив и България.',
    h1: 'Нека поговорим за Вашия сайт',
    summary: 'Изпратете кратко описание на бизнеса, услугата или идеята си. Ще обсъдим подходящата структура, срок и следваща стъпка.',
    h2: 'Какво да изпратите',
    bullets: ['Какъв е бизнесът и кой е основният Ви клиент', 'Каква услуга или продукт искате да представите', 'Имате ли готово лого, снимки, текстове или сайт за редизайн', 'Кой контакт е най-удобен за обратна връзка'],
    schemaType: 'contact',
  },
  '/chzv': {
    title: 'Често задавани въпроси за уеб дизайн | AR Studio',
    description: 'Отговори на често задавани въпроси за срок, цена, SEO основа, мобилен дизайн, собственост и поддръжка на уеб сайт.',
    h1: 'Често задавани въпроси за уеб сайтове',
    summary: 'Събрахме практични отговори за процеса, сроковете, цените и това какво получавате след публикуване на проекта.',
    h2: 'Преди да започнем',
    bullets: ['Какъв сайт е подходящ за Вашия бизнес', 'Как се определят срокът и цената', 'Какво включва базовата SEO подготовка', 'Как сайтът може да се развива по-късно'],
    schemaType: 'webpage',
  },
  '/blog': {
    title: 'Блог за уеб дизайн, SEO и дигитален бизнес | AR Studio',
    description: 'Практични статии за уеб дизайн, SEO, онлайн магазини, дигитални менюта и избор на уеб партньор за бизнес в Пловдив и България.',
    h1: 'Практичен блог за по-силен онлайн бизнес',
    summary: 'Публикуваме разбираеми материали, които помагат на собственици на бизнес да вземат по-добри решения за сайт, съдържание и видимост.',
    h2: 'Теми, които разглеждаме',
    bullets: ['Цена и обхват на изработката на сайт', 'SEO основи и полезно съдържание', 'Сайтове за ресторанти, хотели и местни услуги', 'Как да изберете партньор за уеб дизайн'],
    schemaType: 'blog',
  },
  '/uslugi/izrabotka-na-sait-plovdiv': {
    title: 'Изработка на уебсайт в Пловдив | AR Studio',
    description: 'Професионална изработка на уебсайт в Пловдив за малък и среден бизнес. Модерен дизайн, мобилна версия, ясни CTA и SEO основа.',
    h1: 'Изработка на уебсайт в Пловдив',
    summary: 'Създаваме сайт, който представя бизнеса Ви ясно и води посетителя към обаждане, запитване, резервация или покупка.',
    h2: 'Подходящо за',
    bullets: ['Ресторанти, салони, хотели и местни магазини', 'Професионалисти и компании с услуги', 'Бизнеси, които започват с landing page', 'Съществуващи сайтове, които имат нужда от редизайн'],
    schemaType: 'service',
  },
  '/uslugi/sait-za-restorant-plovdiv': {
    title: 'Уебсайт за ресторант в Пловдив | Меню и резервации — AR Studio',
    description: 'Модерен сайт за ресторант в Пловдив с дигитално меню, галерия, QR код, резервации, Google Maps и мобилно изживяване.',
    h1: 'Уебсайт за ресторант в Пловдив',
    summary: 'Гостът трябва бързо да види менюто, атмосферата, адреса и начина за резервация. Подреждаме сайта около тези действия.',
    h2: 'Елементи за заведения',
    bullets: ['Дигитално меню, удобно за телефон', 'QR код за маси, рецепция и печатни материали', 'Галерия за ястия, интериор и атмосфера', 'Директна връзка за резервация и навигация'],
    schemaType: 'service',
  },
  '/uslugi/sait-za-kozmetichen-salon-plovdiv': {
    title: 'Уебсайт за козметичен салон в Пловдив | AR Studio',
    description: 'Елегантен сайт за козметичен или фризьорски салон в Пловдив с услуги, цени, галерия, записване и локална SEO основа.',
    h1: 'Уебсайт за козметичен салон в Пловдив',
    summary: 'Представете услугите, атмосферата и резултатите си така, че клиентът да се чувства уверен да запише час.',
    h2: 'Фокус върху записването',
    bullets: ['Страница с услуги, цени и често задавани въпроси', 'Галерия с реални резултати и атмосфера', 'Бутони за записване, телефон, Instagram и карта', 'Mobile-first структура за клиенти в движение'],
    schemaType: 'service',
  },
  '/uslugi/sait-za-hotel-plovdiv': {
    title: 'Уебсайт за хотел в Пловдив | Резервации и запитвания — AR Studio',
    description: 'Професионален сайт за хотел, къща за гости или апартаменти в Пловдив с галерия, стаи, удобства, карта и директни запитвания.',
    h1: 'Уебсайт за хотел в Пловдив',
    summary: 'Сайтът трябва да отговори на въпросите на госта: къде сте, как изглеждат стаите, какви са удобствата и как се прави запитване.',
    h2: 'Информация, която изгражда доверие',
    bullets: ['Страници за стаи, удобства, локация и преживяване', 'Галерия, която представя мястото реалистично', 'Двуезична структура при необходимост', 'Форма или връзка към резервационен процес'],
    schemaType: 'service',
  },
  '/uslugi/sait-za-advokatska-kantora': {
    title: 'Уебсайт за адвокатска кантора | Професионален юридически сайт — AR Studio',
    description: 'Професионален сайт за адвокат, адвокатска кантора или консултантска фирма с ясни услуги, екип, контакти и доверие.',
    h1: 'Уебсайт за адвокатска кантора',
    summary: 'Юридическият сайт трябва да бъде спокоен, точен и доверен. Подреждаме практиките, екипа и контактите разбираемо.',
    h2: 'Структура за професионални услуги',
    bullets: ['Ясно представяне на правни практики и услуги', 'Профили на екипа и професионална биография', 'Лесно запитване без излишни полета', 'FAQ и съдържание на разбираем език'],
    schemaType: 'service',
  },
  '/uslugi/izrabotka-na-onlayn-magazin': {
    title: 'Изработка на онлайн магазин в България | E-commerce сайт — AR Studio',
    description: 'Изработка на онлайн магазин с мобилен дизайн, продукти, категории, плащане и SEO основа. Получете индивидуална оферта от AR Studio.',
    h1: 'Изработка на онлайн магазин в България',
    summary: 'Работим върху ясни категории, продуктови страници, мобилен checkout и съдържание, което помага на клиента да вземе решение.',
    h2: 'Основа за онлайн продажби',
    bullets: ['Продуктова и категорийна структура', 'Responsive продуктови страници и количка', 'Интеграция на плащане и доставка според нуждите', 'SEO основа за категории, продукти и изображения'],
    schemaType: 'service',
  },
  '/blog/kolko-struva-izrabotka-na-sait': {
    title: 'Колко струва изработката на уебсайт в България през 2026? | AR Studio',
    description: 'Практичен анализ на цените за изработка на уебсайт в България: landing page, бизнес сайт, онлайн магазин и фактори, които променят бюджета.',
    h1: 'Колко струва изработката на уебсайт в България през 2026?',
    summary: 'Разгледайте какво обикновено стои зад различните ценови диапазони и как да сравнявате оферти според реалния обхват.',
    h2: 'Какво влияе върху цената',
    bullets: ['Брой и цел на страниците', 'Дизайн, съдържание и функционалности', 'Онлайн плащания, интеграции и каталог', 'SEO основа, поддръжка и бъдещо развитие'],
    schemaType: 'article',
    datePublished: '2026-08-08',
  },
  '/blog/5-neshta-koito-vseki-nov-biznes-sait-trjabva-da-pritezava': {
    title: '5 неща, които всеки нов бизнес сайт трябва да притежава | AR Studio',
    description: 'Пет практически елемента за успешен бизнес сайт: бързо зареждане, мобилна версия, ясна CTA, SEO основа и контактна информация.',
    h1: '5 неща, които всеки нов бизнес сайт трябва да притежава',
    summary: 'Преди публикуване проверете дали сайтът помага на посетителя да разбере предложението и да направи следващата стъпка.',
    h2: 'Основи, които не бива да липсват',
    bullets: ['Бързо и стабилно зареждане', 'Мобилна адаптивност', 'Ясен призив към действие', 'SEO-ready структура и контактна информация'],
    schemaType: 'article',
    datePublished: '2026-08-07',
  },
  '/blog/restorant-plovdiv-digitalno-menu-i-sait': {
    title: 'Защо ресторант в Пловдив се нуждае от дигитално меню и сайт? | AR Studio',
    description: 'Практични идеи за сайт на ресторант в Пловдив: дигитално меню, QR код, резервации, галерия, карта и локална видимост.',
    h1: 'Защо ресторант в Пловдив се нуждае от дигитално меню и собствен сайт?',
    summary: 'Помогнете на гостите да видят менюто, атмосферата и начина за резервация още преди посещението.',
    h2: 'Дигитални елементи за заведение',
    bullets: ['Меню, което се отваря удобно от телефон', 'QR път от масата до актуалното съдържание', 'Директни резервации и контакт', 'Локална информация, отзиви и навигация'],
    schemaType: 'article',
    datePublished: '2026-08-06',
  },
  '/blog/kak-ai-i-ar-transformirat-biznesa-v-balgarija-2026': {
    title: 'Как AI и AR трансформират бизнеса в България през 2026? | AR Studio',
    description: 'Практичен поглед към AI, добавената реалност и дигиталните изживявания, които могат да помогнат на българския бизнес.',
    h1: 'Как AI и AR трансформират бизнеса в България през 2026?',
    summary: 'Технологиите са полезни, когато решават конкретен проблем: по-бърз отговор, по-добро представяне на продукт или по-лесно действие.',
    h2: 'От технология към бизнес резултат',
    bullets: ['AI асистенти за често задавани въпроси', 'AR визуализация за продукти и пространства', 'Автоматизирани процеси с човешки контрол', 'Ясна връзка между функцията и клиентското действие'],
    schemaType: 'article',
    datePublished: '2026-08-11',
  },
  '/blog/kak-da-izberem-uebdizain-agenciya-plovdiv': {
    title: 'Как да изберете уеб дизайн агенция в Пловдив | Практичен наръчник',
    description: 'Практичен наръчник за сравнение на уеб дизайн агенции в Пловдив: портфолио, процес, SEO основа, комуникация и реален обхват.',
    h1: 'Как да изберете уеб дизайн агенция в Пловдив',
    summary: 'Сравнете не само визията и цената, а процеса, релевантното портфолио, SEO основата, комуникацията и това, което ще получите след старта.',
    h2: 'Критерии за информиран избор',
    bullets: ['Релевантно портфолио и реални казуси', 'Ясен процес и обхват', 'Техническа SEO подготовка без обещание за първо място', 'Директна комуникация и план за поддръжка'],
    schemaType: 'article',
    datePublished: '2026-08-11',
  },
  '/blog/sobstven-sait-sreshtu-socialni-mrezhi': {
    title: 'Собствен сайт или социални мрежи? Практичен наръчник за местния бизнес | AR Studio',
    description: 'Научете кога местният бизнес има нужда от собствен сайт, а не само от Facebook или Instagram: услуги, контакти, резервации и запитвания.',
    h1: 'Собствен сайт или социални мрежи? Какво е нужно на местния бизнес?',
    summary: 'Социалните мрежи привличат внимание, а собственият сайт подрежда информацията и води посетителя към конкретна следваща стъпка.',
    h2: 'Кога социалният профил не е достатъчен',
    bullets: ['Услуги, цени и различни видове клиенти', 'Локална видимост и ясни услуги', 'Резервации, запитвания или онлайн поръчки', 'Портфолио, отзиви и процес на едно място'],
    schemaType: 'article',
    datePublished: '2026-08-14',
  },
  '/blog/sait-za-agenciya-imoti-obqvi': {
    title: 'Сайт за агенция за имоти: собствени обяви и повече запитвания | AR Studio',
    description: 'Практична структура за сайт на агенция за имоти: собствен каталог, филтри, детайлни обяви, заявка за оглед и директен контакт.',
    h1: 'Сайт за агенция за имоти: как собствените обяви превръщат интереса в запитвания',
    summary: 'Собственият каталог дава на агенцията място за представяне на обяви и на посетителя по-ясен път от разглеждане до запитване.',
    h2: 'Основи на полезния сайт за имоти',
    bullets: ['Каталог с удобни филтри', 'Детайлни страници на обявите', 'Заявка за оглед и различни контакти', 'Доверие, актуалност и мобилно изживяване'],
    schemaType: 'article',
    datePublished: '2026-08-14',
  },
};

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function absoluteUrl(route) {
  return `${SITE}${route === '/' ? '/' : route}`;
}

function breadcrumbSchema(route, title) {
  const items = [{ name: 'Начало', url: absoluteUrl('/') }];
  if (route !== '/') items.push({ name: title, url: absoluteUrl(route) });
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

function schemaFor(route, page) {
  const url = absoluteUrl(route);
  const base = { '@context': 'https://schema.org', '@graph': [] };
  if (page.schemaType === 'home') {
    base['@graph'].push({
      '@type': 'ProfessionalService',
      '@id': `${SITE}/#business`,
      name: 'AR Studio',
      alternateName: 'AR Studio Web Craftsmanship',
      legalName: 'AR Studio',
      url: SITE,
      logo: `${SITE}/assets/logo.webp`,
      image: `${SITE}/assets/logo.webp`,
      description: page.description,
      slogan: 'Уеб дизайн и разработка в Пловдив',
      telephone: ['+359888616641', '+359888379886'],
      email: 'designbyandrey@gmail.com',
      areaServed: [{ '@type': 'City', name: 'Пловдив' }, { '@type': 'Country', name: 'България' }],
      serviceType: ['Уеб дизайн', 'Изработка на сайтове', 'Онлайн магазини', 'Техническа SEO основа'],
      sameAs: ['https://www.facebook.com/share/18n7DfUWJW/', 'https://www.instagram.com/arstudio.site', 'https://www.tiktok.com/@ar_studio_web'],
    }, { '@type': 'WebSite', '@id': `${SITE}/#website`, url: SITE, name: 'AR Studio', alternateName: 'AR Studio — Уеб дизайн и изработка на сайтове в Пловдив', inLanguage: 'bg-BG', publisher: { '@id': `${SITE}/#business` } });
  } else if (page.schemaType === 'service') {
    base['@graph'].push({ '@type': 'Service', '@id': `${url}#service`, name: page.h1, serviceType: page.h1, description: page.description, provider: { '@id': `${SITE}/#business` }, areaServed: [{ '@type': 'City', name: 'Пловдив' }, { '@type': 'Country', name: 'България' }], url });
  } else if (page.schemaType === 'article') {
    base['@graph'].push({ '@type': 'Article', '@id': `${url}#article`, headline: page.h1, description: page.description, image: `${SITE}/assets/logo.webp`, datePublished: page.datePublished, author: { '@type': 'Organization', name: 'AR Studio', url: SITE }, publisher: { '@type': 'Organization', name: 'AR Studio', logo: { '@type': 'ImageObject', url: `${SITE}/assets/logo.webp` } }, mainEntityOfPage: url });
  } else if (page.schemaType === 'faq') {
    base['@graph'].push({ '@type': 'FAQPage', '@id': `${url}#faq`, mainEntity: [] });
  } else {
    base['@graph'].push({ '@type': 'WebPage', '@id': `${url}#webpage`, url, name: page.title, description: page.description, inLanguage: 'bg-BG' });
  }
  if (route !== '/') base['@graph'].push(breadcrumbSchema(route, page.h1));
  return base;
}

function staticBody(route, page) {
  const nav = navLinks.map(([label, href]) => `<a href="${href}">${escapeHtml(label)}</a>`).join('');
  const bullets = page.bullets.map((item) => `<li>${escapeHtml(item)}</li>`).join('');
  const relatedServices = serviceLinks.map(([href, label]) => `<a href="${href}">${escapeHtml(label)}</a>`).join(' · ');
  return `<main class="seo-prerender"><div class="seo-prerender__frame"><header class="seo-prerender__header"><a class="seo-prerender__brand" href="/" aria-label="AR Studio — Начало"><span class="seo-prerender__mark" aria-hidden="true">AR</span><span>AR Studio</span></a><nav class="seo-prerender__nav" aria-label="Основна навигация">${nav}</nav></header><article class="seo-prerender__hero"><p class="seo-prerender__eyebrow">Пловдив, България · Уеб дизайн студио</p><h1>${escapeHtml(page.h1)}</h1><p class="seo-prerender__summary">${escapeHtml(page.summary)}</p><p class="seo-prerender__actions"><a class="seo-prerender__button seo-prerender__button--primary" href="/kontakti">Поискайте безплатна консултация</a><a class="seo-prerender__button" href="/portfolio">Разгледайте портфолиото</a></p></article><section class="seo-prerender__content" aria-label="Полезна информация"><section class="seo-prerender__card"><h2>${escapeHtml(page.h2)}</h2><ul>${bullets}</ul></section><section class="seo-prerender__card"><h2>Свързани услуги</h2><p class="seo-prerender__related">${relatedServices}</p></section></section></div></main>`;
}

function updateHead(html, route, page) {
  const canonical = absoluteUrl(route);
  const tags = {
    title: `<title>${escapeHtml(page.title)}</title>`,
    description: `<meta name="description" content="${escapeHtml(page.description)}" />`,
    canonical: `<link rel="canonical" href="${canonical}" />`,
    ogUrl: `<meta property="og:url" content="${canonical}" />`,
    ogTitle: `<meta property="og:title" content="${escapeHtml(page.title)}" />`,
    ogDescription: `<meta property="og:description" content="${escapeHtml(page.description)}" />`,
    twitterTitle: `<meta name="twitter:title" content="${escapeHtml(page.title)}" />`,
    twitterDescription: `<meta name="twitter:description" content="${escapeHtml(page.description)}" />`,
  };
  let result = html
    .replace(/<title>[\s\S]*?<\/title>/, tags.title)
    .replace(/<meta name="description"[^>]*>/, tags.description)
    .replace(/<link rel="canonical"[^>]*>/, tags.canonical)
    .replace(/<meta property="og:url"[^>]*>/, tags.ogUrl)
    .replace(/<meta property="og:title"[^>]*>/, tags.ogTitle)
    .replace(/<meta property="og:description"[^>]*>/, tags.ogDescription)
    .replace(/<meta name="twitter:title"[^>]*>/, tags.twitterTitle)
    .replace(/<meta name="twitter:description"[^>]*>/, tags.twitterDescription)
    .replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/, `<script id="page-structured-data" type="application/ld+json">${JSON.stringify(schemaFor(route, page), null, 2)}</script>`)
    .replace('<div id="root"></div>', `<div id="root">${staticBody(route, page)}</div>`);
  return result;
}

if (!fs.existsSync(path.join(DIST, 'index.html'))) {
  throw new Error('dist/index.html is missing. Run the Vite build first.');
}

const template = fs.readFileSync(path.join(DIST, 'index.html'), 'utf8');
for (const [route, page] of Object.entries(routes)) {
  const outputDir = route === '/' ? DIST : path.join(DIST, route.replace(/^\//, ''));
  fs.mkdirSync(outputDir, { recursive: true });
  fs.writeFileSync(path.join(outputDir, 'index.html'), updateHead(template, route, page));
}
console.log(`SEO prerendered ${Object.keys(routes).length} routes.`);
