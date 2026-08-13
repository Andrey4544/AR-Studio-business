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
  '/brief': {
    title: 'Кратък проектен бриф | AR Studio',
    description: 'Кратък проектен бриф за уебсайт: споделете бизнеса, целта, наличните материали и предпочитаното съдържание преди безплатната консултация.',
    h1: 'Кратък проектен бриф преди да започнем',
    summary: 'Няколко ясни отговора за бизнеса, целта и съдържанието помагат първият разговор да бъде по-полезен и фокусиран.',
    h2: 'Какво е полезно да подготвите',
    bullets: ['Какво предлага бизнесът и за кого', 'Какво трябва да може да направи посетителят', 'Лого, снимки, текстове или стар сайт, ако разполагате с тях', 'Примери за сайтове, които харесвате'],
    schemaType: 'webpage',
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

const englishRouteMap = {
  '/': '/en', '/za-nas': '/en/about', '/uslugi': '/en/services', '/web-design-plovdiv': '/en/web-design-plovdiv',
  '/uslugi/izrabotka-na-sait-plovdiv': '/en/services/website-development-plovdiv',
  '/uslugi/sait-za-restorant-plovdiv': '/en/services/restaurant-website-plovdiv',
  '/uslugi/sait-za-kozmetichen-salon-plovdiv': '/en/services/beauty-salon-website-plovdiv',
  '/uslugi/sait-za-hotel-plovdiv': '/en/services/hotel-website-plovdiv',
  '/uslugi/sait-za-advokatska-kantora': '/en/services/law-firm-website-bulgaria',
  '/uslugi/izrabotka-na-onlayn-magazin': '/en/services/ecommerce-website-bulgaria',
  '/portfolio': '/en/portfolio', '/zashto-nas': '/en/why-us', '/otzivy': '/en/testimonials', '/kontakti': '/en/contact', '/brief': '/en/brief', '/chzv': '/en/faq', '/blog': '/en/blog',
};
for (const route of Object.keys(routes)) {
  if (route.startsWith('/blog/')) englishRouteMap[route] = `/en${route}`;
}
const englishToBulgarianRoute = Object.fromEntries(Object.entries(englishRouteMap).map(([bg, en]) => [en, bg]));

const englishOverrides = {
  '/': { title: 'AR Studio | Web Design & Website Development in Plovdiv', description: 'AR Studio creates fast, bespoke, search-ready websites for businesses in Plovdiv and Bulgaria.', h1: 'Web Design and Website Development in Plovdiv', summary: 'AR Studio is a boutique web design and development studio. We build clear, fast, mobile-friendly websites that explain your offer and make the next customer action easier.', h2: 'Services for local and growing businesses', bullets: ['Custom web design and business websites', 'Digital menus, QR integrations, and restaurant websites', 'Online stores and product catalogues', 'Technical SEO foundations, content, and support'] },
  '/za-nas': { title: 'About AR Studio | Design & Development Team in Plovdiv', description: 'Meet the direct design and development team behind AR Studio in Plovdiv.', h1: 'The team behind AR Studio', summary: 'AR Studio combines design, development, and practical communication for businesses that want a professional online presence without unnecessary complexity.', h2: 'How we work on a project', bullets: ['We start with the business goal and client needs', 'We organise content and structure before visual detail', 'We test the mobile experience, contact paths, and core SEO elements', 'We stay available for future development and support'] },
  '/uslugi': { title: 'Web Design, Websites & Online Stores | AR Studio Plovdiv', description: 'Explore AR Studio services for custom web design, business websites, online stores, and search-ready technical foundations.', h1: 'Web services for businesses in Plovdiv and Bulgaria', summary: 'We choose a scope around the project goal: enquiries, reservations, visits, sales, or a clearer presentation of a professional service.', h2: 'Specialised services', bullets: ['Business website development', 'Restaurant websites, menus, and reservations', 'Beauty, hotel, and professional service websites', 'Online stores and product catalogues'] },
  '/web-design-plovdiv': { title: 'Web Design in Plovdiv | Custom Websites for Businesses | AR Studio', description: 'AR Studio creates fast, bespoke websites for businesses in Plovdiv and Bulgaria, with clear structure and search-ready foundations.', h1: 'Web design in Plovdiv for businesses with a clear goal', summary: 'We plan a site around the people you want to reach, the information they need, and the action you want them to take.', h2: 'What a strong foundation includes', bullets: ['Clear service structure and local positioning', 'Responsive design for phone, tablet, and desktop', 'Technical SEO elements and internal links', 'Easy contact paths for calls, enquiries, or bookings'] },
  '/portfolio': { title: 'Portfolio | AR Studio Real Website Projects', description: 'Explore selected AR Studio web projects for real estate, restaurants, online retail, and local businesses.', h1: 'Portfolio: real website projects', summary: 'See how different business goals become a clear structure, visual direction, and useful website experience.', h2: 'Projects and directions', bullets: ['Tomato Restaurant — website, digital menu, and QR experience', 'BelEstateGroup — catalogue and real estate presentation', 'CBL Fight Store — product and e-commerce experience', 'Projects for local services, hospitality, and professional businesses'] },
  '/zashto-nas': { title: 'Why AR Studio | Direct Web Design Partnership', description: 'Learn how AR Studio works: direct communication, focused design, technical development, and a clear project process.', h1: 'A practical process and direct communication', summary: 'A strong website comes from a clear goal, the right structure, and careful checking. That is why we work in short stages with useful feedback.', h2: 'Reasons to start a conversation', bullets: ['Direct contact with the people designing and developing the work', 'Clear scope, timing, and next steps', 'Mobile-first approach and technical SEO preparation', 'A path for future website development'] },
  '/otzivy': { title: 'Client Reviews | AR Studio', description: 'Read client feedback published with permission and learn how to share your experience with AR Studio.', h1: 'Client feedback published with permission', summary: 'We show approved reviews and aim to present every piece of feedback clearly and fairly.', h2: 'Your experience matters', bullets: ['We publish only approved reviews', 'Each review is shown once', 'You can share feedback through the page form'] },
  '/kontakti': { title: 'Contact AR Studio | Free Web Design Consultation', description: 'Contact AR Studio for a free consultation about web design, a business website, online store, or digital menu.', h1: 'Let’s talk about your website', summary: 'Send a short description of the business, service, or idea. We will discuss a relevant structure, timing, and next step.', h2: 'What to send', bullets: ['What the business does and who the core customer is', 'Which service or product you want to present', 'Whether you have a logo, photos, copy, or a website to redesign', 'Which contact method is most convenient'] },
  '/brief': { title: 'Project Brief | AR Studio', description: 'A short website project brief: share your business, goal, available materials, and preferences before a free consultation.', h1: 'A short project brief before we start', summary: 'A few clear answers about the business, goal, and available content help make the first conversation more useful and focused.', h2: 'What is useful to prepare', bullets: ['What the business offers and for whom', 'What the visitor should be able to do', 'Logo, photos, copy, or a previous website if available', 'Examples of websites you like'] },
  '/chzv': { title: 'FAQ | AR Studio Web Design', description: 'Answers to common questions about website timing, pricing, SEO foundations, mobile design, ownership, and support.', h1: 'Frequently asked questions about websites', summary: 'Practical answers about process, timing, pricing, and what you receive after a project launches.', h2: 'Before we start', bullets: ['Which website is right for your business', 'How timing and price are determined', 'What basic SEO preparation includes', 'How a website can grow later'] },
  '/blog': { title: 'Web Design, SEO & Business Growth Blog | AR Studio', description: 'Practical articles about web design, local SEO, online stores, digital menus, and choosing a web partner in Plovdiv and Bulgaria.', h1: 'A practical blog for a stronger online business', summary: 'We publish clear resources that help business owners make better decisions about their website, content, and visibility.', h2: 'Topics we cover', bullets: ['Website pricing and scope', 'SEO foundations and useful content', 'Websites for restaurants, hotels, and local services', 'How to choose a web design partner'] },
};

Object.assign(englishOverrides, {
  '/uslugi/izrabotka-na-sait-plovdiv': { title: 'Website Development in Plovdiv | AR Studio', description: 'Custom business website development in Plovdiv with mobile-first design, clear contact paths, and a search-ready technical foundation.', h1: 'Website development in Plovdiv', summary: 'We create a website that explains your business clearly and guides a visitor toward a call, enquiry, booking, or purchase.', h2: 'Suitable for', bullets: ['Restaurants, salons, hotels, and local retailers', 'Professionals and service companies', 'Businesses starting with a focused landing page', 'Existing websites that need a redesign'] },
  '/uslugi/sait-za-restorant-plovdiv': { title: 'Restaurant Website in Plovdiv | Menus & Reservations — AR Studio', description: 'Restaurant websites in Plovdiv with digital menus, QR codes, reservations, maps, and a mobile-first customer journey.', h1: 'Restaurant website in Plovdiv', summary: 'Guests need to quickly see the menu, atmosphere, address, and reservation path. We organise the website around those actions.', h2: 'Useful elements for hospitality', bullets: ['A digital menu that works well on a phone', 'QR access for tables, reception, and print materials', 'A gallery for food, interiors, and atmosphere', 'Direct paths to reservations and directions'] },
  '/uslugi/sait-za-kozmetichen-salon-plovdiv': { title: 'Beauty Salon Website in Plovdiv | AR Studio', description: 'Elegant websites for beauty and hair salons in Plovdiv with services, pricing, galleries, appointment paths, and local SEO foundations.', h1: 'Beauty salon website in Plovdiv', summary: 'Present services, atmosphere, and results in a way that helps a client feel confident to book an appointment.', h2: 'A focus on booking', bullets: ['Services, pricing, and FAQ sections', 'A gallery for real results and atmosphere', 'Appointment, phone, Instagram, and map links', 'Mobile-first structure for clients on the move'] },
  '/uslugi/sait-za-hotel-plovdiv': { title: 'Hotel Website in Plovdiv | Direct Enquiries & Bookings — AR Studio', description: 'Professional websites for hotels, guesthouses, and apartments in Plovdiv with rooms, amenities, galleries, maps, and direct enquiry paths.', h1: 'Hotel website in Plovdiv', summary: 'A website should answer the guest’s questions: where you are, what the rooms look like, which amenities you offer, and how to enquire.', h2: 'Information that builds trust', bullets: ['Pages for rooms, amenities, location, and experience', 'A gallery that presents the place realistically', 'Multilingual structure where needed', 'A form or clear path to a booking process'] },
  '/uslugi/sait-za-advokatska-kantora': { title: 'Law Firm Website | Professional Legal Website — AR Studio', description: 'Professional websites for lawyers, law firms, and consultants with clear services, team information, contacts, and a trust-focused structure.', h1: 'Law firm website in Bulgaria', summary: 'A legal website should feel calm, accurate, and trustworthy. We organise practice areas, people, and contacts in an understandable way.', h2: 'A structure for professional services', bullets: ['Clear presentation of practice areas and services', 'Team profiles and professional biographies', 'Easy enquiries without unnecessary fields', 'FAQs and content in understandable language'] },
  '/uslugi/izrabotka-na-onlayn-magazin': { title: 'E-commerce Website Development in Bulgaria | AR Studio', description: 'Custom online store development with mobile-first design, products, categories, payments, and a search-ready foundation.', h1: 'E-commerce website development in Bulgaria', summary: 'We work on clear categories, product pages, mobile checkout, and useful content that helps a customer decide.', h2: 'A foundation for online sales', bullets: ['Product and category structure', 'Responsive product pages and cart', 'Payment and delivery integrations based on needs', 'SEO foundations for categories, products, and images'] },
  '/blog/kolko-struva-izrabotka-na-sait': { title: 'How Much Does Website Development Cost in Bulgaria in 2026? | AR Studio', description: 'A practical view of website pricing in Bulgaria: landing pages, business websites, online stores, and the factors that change the scope.', h1: 'How Much Does Website Development Cost in Bulgaria in 2026?', summary: 'See what usually sits behind different price ranges and how to compare proposals by real scope.', h2: 'What influences the price', bullets: ['Number and purpose of pages', 'Design, content, and functionality', 'Payments, integrations, and catalogues', 'SEO foundations, support, and future development'] },
  '/blog/5-neshta-koito-vseki-nov-biznes-sait-trjabva-da-pritezava': { title: '5 Things Every New Business Website Must Have | AR Studio', description: 'Five practical elements for a useful business website: speed, mobile experience, clear actions, SEO foundations, and contact information.', h1: '5 Things Every New Business Website Must Have', summary: 'Before launch, check whether the website helps a visitor understand the offer and take the next step.', h2: 'Foundations that should not be missing', bullets: ['Fast, stable loading', 'Mobile-friendly experience', 'A clear call to action', 'Search-ready structure and contact information'] },
  '/blog/restorant-plovdiv-digitalno-menu-i-sait': { title: 'Why a Plovdiv Restaurant Needs a Digital Menu and Website | AR Studio', description: 'Practical ideas for a restaurant website in Plovdiv: digital menu, QR code, reservations, gallery, map, and local visibility.', h1: 'Why a Plovdiv Restaurant Needs a Digital Menu and Website', summary: 'Help guests see the menu, atmosphere, and reservation path before their visit.', h2: 'Digital elements for a venue', bullets: ['A menu that opens comfortably on a phone', 'A QR journey from table to current content', 'Direct reservations and contact', 'Local information, reviews, and directions'] },
  '/blog/kak-ai-i-ar-transformirat-biznesa-v-balgarija-2026': { title: 'How AI and AR Are Transforming Business in Bulgaria in 2026 | AR Studio', description: 'A practical look at AI, augmented reality, and digital experiences that can help Bulgarian businesses solve real customer problems.', h1: 'How AI and AR Are Transforming Business in Bulgaria in 2026', summary: 'Technology is useful when it solves a specific problem: faster answers, better product presentation, or easier customer action.', h2: 'From technology to business value', bullets: ['AI support for common questions', 'AR visualisation for products and spaces', 'Automated processes with human control', 'A clear link between a feature and customer action'] },
  '/blog/kak-da-izberem-uebdizain-agenciya-plovdiv': { title: 'How to Choose a Web Design Agency in Plovdiv | Practical Guide', description: 'A practical guide to comparing web design agencies in Plovdiv: portfolio, process, SEO foundations, communication, and real scope.', h1: 'How to Choose a Web Design Agency in Plovdiv', summary: 'Compare more than design and price: look at process, relevant portfolio, SEO foundations, communication, and what comes after launch.', h2: 'Criteria for an informed choice', bullets: ['Relevant portfolio and real case studies', 'A clear process and scope', 'Technical SEO preparation without ranking promises', 'Direct communication and a support path'] },
  '/blog/sobstven-sait-sreshtu-socialni-mrezhi': { title: 'Social Media or Your Own Website? A Practical Local Business Guide | AR Studio', description: 'Learn when a local business needs its own website as well as Facebook or Instagram: services, contacts, reservations, and enquiries.', h1: 'Social Media or Your Own Website? What Does a Local Business Need?', summary: 'Social media creates attention; an owned website organises information and guides a visitor toward a practical next step.', h2: 'When a social profile is not enough', bullets: ['Services, pricing, and different customer types', 'Local visibility and clear offer information', 'Reservations, enquiries, or online orders', 'Portfolio, reviews, and process in one place'] },
  '/blog/sait-za-agenciya-imoti-obqvi': { title: 'Real Estate Website: Own Listings and More Enquiries | AR Studio', description: 'A practical real estate website structure: owned catalogue, filters, listing details, viewing requests, and direct contact.', h1: 'A Real Estate Website: How Own Listings Turn Interest into Enquiries', summary: 'An owned catalogue gives an agency a place to present listings and gives a visitor a clearer path from browsing to enquiry.', h2: 'Foundations of a useful real estate website', bullets: ['A catalogue with practical filters', 'Detailed listing pages', 'Viewing requests and clear contact paths', 'Trust, current information, and a mobile-friendly experience'] },
});

for (const [bgRoute, enRoute] of Object.entries(englishRouteMap)) {
  const bgPage = routes[bgRoute];
  if (!bgPage) continue;
  const fallback = { ...bgPage, language: 'en' };
  const override = englishOverrides[bgRoute];
  routes[enRoute] = override ? { ...fallback, ...override, language: 'en' } : { ...fallback, title: `${bgPage.title} | AR Studio`, language: 'en' };
}

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
  const language = page.language || 'bg';
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
    }, { '@type': 'WebSite', '@id': `${SITE}/#website`, url: SITE, name: 'AR Studio', alternateName: language === 'en' ? 'AR Studio — Web Design & Website Development in Plovdiv' : 'AR Studio — Уеб дизайн и изработка на сайтове в Пловдив', inLanguage: language === 'en' ? 'en' : 'bg', publisher: { '@id': `${SITE}/#business` } });
  } else if (page.schemaType === 'service') {
    base['@graph'].push({ '@type': 'Service', '@id': `${url}#service`, name: page.h1, serviceType: page.h1, description: page.description, provider: { '@id': `${SITE}/#business` }, areaServed: [{ '@type': 'City', name: 'Пловдив' }, { '@type': 'Country', name: 'България' }], url });
  } else if (page.schemaType === 'article') {
    base['@graph'].push({ '@type': 'Article', '@id': `${url}#article`, headline: page.h1, description: page.description, image: `${SITE}/assets/logo.webp`, datePublished: page.datePublished, author: { '@type': 'Organization', name: 'AR Studio', url: SITE }, publisher: { '@type': 'Organization', name: 'AR Studio', logo: { '@type': 'ImageObject', url: `${SITE}/assets/logo.webp` } }, mainEntityOfPage: url });
  } else if (page.schemaType === 'faq') {
    base['@graph'].push({ '@type': 'FAQPage', '@id': `${url}#faq`, mainEntity: [] });
  } else {
    base['@graph'].push({ '@type': 'WebPage', '@id': `${url}#webpage`, url, name: page.title, description: page.description, inLanguage: language === 'en' ? 'en' : 'bg' });
  }
  if (route !== '/') base['@graph'].push(breadcrumbSchema(route, page.h1));
  return base;
}

function staticBody(route, page) {
  const isEnglish = page.language === 'en';
  const localize = (href) => isEnglish ? englishRouteMap[href] || (href.startsWith('/blog/') ? `/en${href}` : href) : href;
  const navItems = isEnglish ? [['Home', '/'], ['Services', '/uslugi'], ['Web Design in Plovdiv', '/web-design-plovdiv'], ['Portfolio', '/portfolio'], ['About', '/za-nas'], ['Blog', '/blog'], ['Contact', '/kontakti']] : navLinks;
  const nav = navItems.map(([label, href]) => `<a href="${localize(href)}">${escapeHtml(label)}</a>`).join('');
  const bullets = page.bullets.map((item) => `<li>${escapeHtml(item)}</li>`).join('');
  const relatedServices = serviceLinks.map(([href, label]) => `<a href="${localize(href)}">${escapeHtml(isEnglish ? 'Specialised service' : label)}</a>`).join(' · ');
  const home = localize('/');
  const contact = localize('/kontakti');
  const portfolio = localize('/portfolio');
  const eyebrow = isEnglish ? 'Plovdiv, Bulgaria · Web design studio' : 'Пловдив, България · Уеб дизайн студио';
  const consultation = isEnglish ? 'Request a free consultation' : 'Поискайте безплатна консултация';
  const work = isEnglish ? 'Explore the portfolio' : 'Разгледайте портфолиото';
  const related = isEnglish ? 'Related services' : 'Свързани услуги';
  const navLabel = isEnglish ? 'Primary navigation' : 'Основна навигация';
  return `<main class="seo-prerender"><div class="seo-prerender__frame"><header class="seo-prerender__header"><a class="seo-prerender__brand" href="${home}" aria-label="AR Studio"><span class="seo-prerender__mark" aria-hidden="true">AR</span><span>AR Studio</span></a><nav class="seo-prerender__nav" aria-label="${navLabel}">${nav}</nav></header><article class="seo-prerender__hero"><p class="seo-prerender__eyebrow">${eyebrow}</p><h1>${escapeHtml(page.h1)}</h1><p class="seo-prerender__summary">${escapeHtml(page.summary)}</p><p class="seo-prerender__actions"><a class="seo-prerender__button seo-prerender__button--primary" href="${contact}">${consultation}</a><a class="seo-prerender__button" href="${portfolio}">${work}</a></p></article><section class="seo-prerender__content" aria-label="${isEnglish ? 'Useful information' : 'Полезна информация'}"><section class="seo-prerender__card"><h2>${escapeHtml(page.h2)}</h2><ul>${bullets}</ul></section><section class="seo-prerender__card"><h2>${related}</h2><p class="seo-prerender__related">${relatedServices}</p></section></section></div></main>`;
}

function updateHead(html, route, page) {
  const canonical = absoluteUrl(route);
  const isEnglish = page.language === 'en';
  const bgRoute = isEnglish ? englishToBulgarianRoute[route] : route;
  const enRoute = isEnglish ? route : englishRouteMap[route];
  const tags = {
    title: `<title>${escapeHtml(page.title)}</title>`,
    description: `<meta name="description" content="${escapeHtml(page.description)}" />`,
    canonical: `<link rel="canonical" href="${canonical}" />`,
    alternates: bgRoute && enRoute ? `<link rel="alternate" hreflang="bg" href="${absoluteUrl(bgRoute)}" /><link rel="alternate" hreflang="en" href="${absoluteUrl(enRoute)}" />` : '',
    ogUrl: `<meta property="og:url" content="${canonical}" />`,
    ogTitle: `<meta property="og:title" content="${escapeHtml(page.title)}" />`,
    ogDescription: `<meta property="og:description" content="${escapeHtml(page.description)}" />`,
    twitterTitle: `<meta name="twitter:title" content="${escapeHtml(page.title)}" />`,
    twitterDescription: `<meta name="twitter:description" content="${escapeHtml(page.description)}" />`,
  };
  let result = html
    .replace(/<title>[\s\S]*?<\/title>/, tags.title)
    .replace(/<meta name="description"[^>]*>/, tags.description)
    .replace(/<link rel="canonical"[^>]*>/, `${tags.canonical}${tags.alternates}`)
    .replace(/<html lang="[^"]*"/, `<html lang="${isEnglish ? 'en' : 'bg'}"`)
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
const sitemapEntries = Object.entries(routes).map(([route, page]) => {
  const isEnglish = page.language === 'en';
  const bgRoute = isEnglish ? englishToBulgarianRoute[route] : route;
  const enRoute = isEnglish ? route : englishRouteMap[route];
  const alternates = bgRoute && enRoute
    ? `\n    <xhtml:link rel="alternate" hreflang="bg" href="${absoluteUrl(bgRoute)}" />\n    <xhtml:link rel="alternate" hreflang="en" href="${absoluteUrl(enRoute)}" />`
    : '';
  return `  <url>\n    <loc>${absoluteUrl(route)}</loc>${alternates}\n    <lastmod>2026-08-14</lastmod>\n  </url>`;
}).join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${sitemapEntries}\n</urlset>\n`;
fs.writeFileSync(path.resolve('public', 'sitemap.xml'), sitemap);

console.log(`SEO prerendered ${Object.keys(routes).length} routes and updated sitemap.xml.`);
