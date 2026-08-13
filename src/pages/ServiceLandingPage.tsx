import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, MessageCircle, Sparkles } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { useLanguage } from '../context/LanguageContext';
import { DEFAULT_IMAGE, SITE_URL, usePageMeta } from '../hooks/usePageMeta';

interface ServiceLandingPageProps {
  serviceKey: keyof typeof servicePages;
  openQuoteModal: (planName?: string) => void;
}

type ServicePage = {
  title: string;
  metaTitle: string;
  description: string;
  keywords: string;
  eyebrow: string;
  intro: string;
  price: string;
  priceNote: string;
  audience: string;
  benefits: string[];
  process: string[];
  faq: Array<{ question: string; answer: string }>;
  related: Array<{ label: string; href: string }>;
};

const servicePages = {
  'website-plovdiv': {
    title: 'Изработка на уебсайт в Пловдив',
    metaTitle: 'Изработка на уебсайт в Пловдив | AR Studio',
    description: 'Професионална изработка на уебсайт в Пловдив за малък и среден бизнес. Модерен дизайн, мобилна версия, ясни CTA и SEO основа от AR Studio.',
    keywords: 'изработка на уебсайт Пловдив, уеб дизайн Пловдив, сайт за бизнес, фирмен сайт, уеб разработка Пловдив',
    eyebrow: 'Основната услуга на AR Studio',
    intro: 'Създаваме сайтове, които представят бизнеса ти ясно, изглеждат професионално на телефон и водят посетителя към конкретно действие — обаждане, запитване, резервация или покупка.',
    price: 'От €250',
    priceNote: 'Финалната цена зависи от броя страници, съдържанието и нужните функции.',
    audience: 'Подходящо за ресторанти, салони, хотели, професионалисти, местни магазини и компании, които искат по-силно онлайн присъствие.',
    benefits: ['Индивидуална структура според целта на бизнеса', 'Responsive дизайн за телефон, таблет и компютър', 'Техническа SEO основа и ясна информационна архитектура', 'Контактни форми, WhatsApp/Viber бутони и Google Maps при нужда', 'Подготовка за бъдещи функции като блог, резервации или магазин'],
    process: ['Кратък разговор и анализ на целта', 'Структура на страниците и предложение за съдържание', 'Визуална посока и разработка', 'Тестове на мобилни устройства, форми и основни SEO елементи', 'Предаване, обучение и предложение за поддръжка'],
    faq: [
      { question: 'Колко време отнема?', answer: 'Стандартните проекти обикновено се планират за 3–7 работни дни, когато съдържанието и обратната връзка са налични навреме.' },
      { question: 'Мога ли да започна с малък сайт?', answer: 'Да. Можеш да започнеш с landing page и по-късно да добавиш нови услуги, блог, резервации или онлайн магазин.' },
      { question: 'Какво трябва да предоставя?', answer: 'Нужни са основна информация за бизнеса, услуги, контакти, снимки и лого, ако разполагаш с тях. Можем да помогнем и със структурата на текста.' },
    ],
    related: [{ label: 'Услуги и цени', href: '/uslugi' }, { label: 'Портфолио', href: '/portfolio' }, { label: 'SEO за бизнес сайтове', href: '/blog' }],
  },
  'restaurant-website-plovdiv': {
    title: 'Уебсайт за ресторант в Пловдив',
    metaTitle: 'Уебсайт за ресторант в Пловдив | Меню и резервации — AR Studio',
    description: 'Модерен сайт за ресторант в Пловдив с дигитално меню, галерия, резервации, Google Maps и мобилно изживяване от AR Studio.',
    keywords: 'уебсайт за ресторант Пловдив, дигитално меню, QR меню, сайт за заведение, онлайн резервации ресторант',
    eyebrow: 'За ресторанти, кафенета и заведения',
    intro: 'Когато гостът търси ресторант, той иска бързо да види менюто, атмосферата, адреса и как да резервира. Подреждаме тези елементи така, че сайтът да помага на заведението, а не да бъде просто онлайн визитка.',
    price: 'От €450',
    priceNote: 'QR меню и допълнителни функции се калкулират според менюто и начина на актуализация.',
    audience: 'Подходящо за ресторанти, барове, кафенета, сладкарници и заведения в Пловдив и цяла България.',
    benefits: ['Интерактивно меню, което се отваря удобно от телефон', 'QR код за маси, рецепция или рекламни материали', 'Галерия за интериор, ястия, събития и атмосфера', 'Директен бутон за обаждане, резервация и навигация', 'Локална SEO структура с адрес, услуги и полезни FAQ'],
    process: ['Събираме меню, работно време, контакти и снимки', 'Изграждаме структура около резервации и посещение на място', 'Подготвяме дизайн, меню и мобилно изживяване', 'Тестваме QR пътя от сканиране до контакт', 'Предаваме сайта и настройваме процес за бъдещи промени'],
    faq: [
      { question: 'Може ли менюто да се променя?', answer: 'Да. Можем да изградим менюто така, че да бъде лесно за актуализиране според избрания подход и поддръжка.' },
      { question: 'Работи ли QR менюто без приложение?', answer: 'Да, QR кодът може да отваря мобилна уеб страница, така че гостът да не инсталира приложение.' },
      { question: 'Може ли да има резервации?', answer: 'Да. Можем да добавим директен контакт, форма, външен booking инструмент или по-специализирана система според нуждите.' },
    ],
    related: [{ label: 'Проектът на Tomato Restaurant', href: '/portfolio' }, { label: 'QR меню и интеграции', href: '/uslugi' }, { label: 'Статия за ресторанти в Пловдив', href: '/blog/restorant-plovdiv-digitalno-menu-i-sait' }],
  },
  'beauty-salon-website-plovdiv': {
    title: 'Уебсайт за козметичен салон в Пловдив',
    metaTitle: 'Уебсайт за козметичен салон в Пловдив | AR Studio',
    description: 'Елегантен сайт за козметичен салон, фризьорски салон или beauty бранд в Пловдив с услуги, галерия, записване и локално SEO.',
    keywords: 'сайт за козметичен салон Пловдив, уебсайт за салон, сайт за фризьорски салон, beauty website Bulgaria',
    eyebrow: 'За beauty, wellness и personal care бизнеси',
    intro: 'Сайтът на салона трябва да показва резултата, атмосферата и услугите още преди първото посещение. Изграждаме изчистено преживяване, което улеснява записването и подкрепя доверието към екипа.',
    price: 'От €450',
    priceNote: 'Добавянето на онлайн календар, много услуги или двуезично съдържание се обсъжда в офертата.',
    audience: 'Подходящо за козметични салони, фризьори, nail студиа, spa центрове и индивидуални beauty професионалисти.',
    benefits: ['Страница с услуги, цени и често задавани въпроси', 'Галерия, която представя реални резултати и атмосфера', 'Бутони за записване, телефон, Instagram и карта', 'Мобилна структура, съобразена с потребители в движение', 'Локални страници и текстове, които обясняват услугите ясно'],
    process: ['Определяме най-важните услуги и целеви клиенти', 'Подреждаме съдържанието около записване', 'Избираме визуална посока и снимки', 'Разработваме и тестваме мобилната версия', 'Свързваме сайта с каналите за контакт и поддръжка'],
    faq: [
      { question: 'Може ли сайтът да показва цени?', answer: 'Да. Можем да покажем цени, начални цени или индивидуална оферта според начина, по който работи салонът.' },
      { question: 'Може ли да се записва час?', answer: 'Да. Възможни са форма, телефон, Viber/WhatsApp, външна booking система или интегриран календар.' },
      { question: 'Може ли да се свърже с Instagram?', answer: 'Да. Можем да поставим ясни връзки към Instagram и да изградим единна визуална посока между сайта и социалните профили.' },
    ],
    related: [{ label: 'Услуги и цени', href: '/uslugi' }, { label: 'Защо AR Studio', href: '/zashto-nas' }, { label: 'Контакти', href: '/kontakti' }],
  },
  'hotel-website-plovdiv': {
    title: 'Уебсайт за хотел в Пловдив',
    metaTitle: 'Уебсайт за хотел в Пловдив | Резервации и директни запитвания — AR Studio',
    description: 'Професионален сайт за хотел, къща за гости или апартаменти в Пловдив с галерия, стаи, удобства, карта и директни запитвания.',
    keywords: 'уебсайт за хотел Пловдив, сайт за къща за гости, hotel website Bulgaria, директни резервации',
    eyebrow: 'За хотели, къщи за гости и туристически обекти',
    intro: 'Добрата хотелска страница трябва да отговори на въпросите на госта преди той да отвори друга платформа: къде се намирате, как изглеждат стаите, какви са удобствата и как се прави запитване.',
    price: 'Индивидуална оферта',
    priceNote: 'Срокът и цената зависят от броя стаи, езици, booking поток и нужните интеграции.',
    audience: 'Подходящо за бутикови хотели, семейни хотели, къщи за гости и краткосрочни апартаменти в Пловдив и региона.',
    benefits: ['Страници за стаи, удобства, локация и преживяване', 'Галерия, която изгражда доверие преди резервация', 'Двуезична структура при нужда', 'Карта, транспортна информация и локални препоръки', 'Форма или връзка към резервационен процес'],
    process: ['Изясняваме типа настаняване и booking процеса', 'Събираме снимки, удобства, правила и информация за района', 'Проектираме пътя от разглеждане до запитване', 'Изграждаме responsive сайт и SEO основа', 'Проверяваме всички телефони, форми, линкове и езици'],
    faq: [
      { question: 'Може ли сайтът да бъде на два езика?', answer: 'Да. Можем да планираме българска и английска версия, а при нужда и допълнителни езици.' },
      { question: 'Ще приема ли директни резервации?', answer: 'Можем да настроим форма за запитване или да свържем сайта с избрана резервационна система.' },
      { question: 'Какво е нужно за старт?', answer: 'Снимки, информация за стаите и удобствата, адрес, правила, контакти и предпочитан начин за резервации.' },
    ],
    related: [{ label: 'Портфолио', href: '/portfolio' }, { label: 'Премиум сайт', href: '/uslugi' }, { label: 'Безплатна консултация', href: '/kontakti' }],
  },
  'law-firm-website-bulgaria': {
    title: 'Уебсайт за адвокатска кантора в България',
    metaTitle: 'Уебсайт за адвокатска кантора | Професионален юридически сайт — AR Studio',
    description: 'Професионален сайт за адвокат, адвокатска кантора или консултантска фирма с ясни услуги, екип, контакти и доверие.',
    keywords: 'уебсайт за адвокатска кантора, сайт за адвокат, юридически сайт България, уеб дизайн за адвокати',
    eyebrow: 'За адвокати, кантори и професионални услуги',
    intro: 'Юридическият сайт трябва да бъде спокоен, точен и доверен. Подреждаме услугите, екипа и контактите така, че потенциалният клиент да разбере дали сте подходящият партньор и как да направи първата стъпка.',
    price: 'От €450',
    priceNote: 'По-големи кантори, много практики и двуезични сайтове получават индивидуална оферта.',
    audience: 'Подходящо за адвокати, адвокатски кантори, медиатори, счетоводители и други професионалисти, при които доверието е ключово.',
    benefits: ['Ясно представяне на правни практики и услуги', 'Профили на екипа и професионална биография', 'Структура за запитване без излишни полета', 'Съдържание и FAQ, написани на разбираем език', 'Локална SEO основа за градове и практики'],
    process: ['Изясняваме практиките и типовете клиенти', 'Подреждаме информацията по проблеми и услуги', 'Създаваме визуална система за доверие', 'Разработваме и проверяваме формите и мобилната версия', 'Предаваме сайта с възможност за бъдещ блог или ресурси'],
    faq: [
      { question: 'Може ли сайтът да представя няколко практики?', answer: 'Да. Всяка практика може да има собствена секция или страница с ясен път към контакт.' },
      { question: 'Може ли да има блог?', answer: 'Да. Блогът може да се използва за обяснителни материали и въпроси, които потенциалните клиенти търсят.' },
      { question: 'Как да избегнем прекалено сложен юридически език?', answer: 'Можем да подредим текста така, че да запази професионалната точност, но да бъде разбираем за човек без юридическо образование.' },
    ],
    related: [{ label: 'Портфолио на юридически сайт', href: '/portfolio' }, { label: 'Процесът ни', href: '/zashto-nas' }, { label: 'Контакти', href: '/kontakti' }],
  },
  'ecommerce-website-bulgaria': {
    title: 'Изработка на онлайн магазин в България',
    metaTitle: 'Изработка на онлайн магазин в България | E-commerce сайт — AR Studio',
    description: 'Изработка на онлайн магазин с мобилен дизайн, продукти, категории, плащане и SEO основа. Получете индивидуална оферта от AR Studio.',
    keywords: 'изработка на онлайн магазин, онлайн магазин България, e-commerce сайт, магазин за продукти, уеб магазин',
    eyebrow: 'За магазини и продуктови брандове',
    intro: 'Онлайн магазинът трябва да намали съмненията между първото посещение и поръчката. Работим върху ясни категории, продуктови страници, мобилен checkout и съдържание, което помага на клиента да вземе решение.',
    price: 'От €800',
    priceNote: 'Точната цена зависи от броя продукти, плащанията, доставките, интеграциите и избраната платформа.',
    audience: 'Подходящо за бутикови марки, онлайн търговци, продуктови линии и физически магазини, които искат да продават онлайн.',
    benefits: ['Продуктова и категорийна структура', 'Responsive продуктови страници и количка', 'Интеграция на плащане и доставка според нуждите', 'SEO основа за продукти и категории', 'Административно обучение и план за поддръжка'],
    process: ['Карта на каталога, продуктите и поръчките', 'Избор на подход и интеграции', 'UX за каталог, продукт, количка и checkout', 'Тестови поръчки и мобилна проверка', 'Предаване, обучение и план за развитие'],
    faq: [
      { question: 'Може ли да започнем с малък каталог?', answer: 'Да. Можем да планираме структура, която да расте с добавянето на нови продукти и категории.' },
      { question: 'Как се определя цената?', answer: 'Цената зависи от платформата, броя продукти, плащанията, доставките и необходимите интеграции.' },
      { question: 'Има ли SEO за продуктите?', answer: 'Да. Можем да подготвим структура за категории, продуктови заглавия, описания, изображения и вътрешни връзки.' },
    ],
    related: [{ label: 'Онлайн магазин в услугите', href: '/uslugi' }, { label: 'CBL Fight Store в портфолиото', href: '/portfolio' }, { label: 'Поискай оферта', href: '/kontakti' }],
  },
} satisfies Record<string, ServicePage>;

const englishServicePages: Record<keyof typeof servicePages, ServicePage> = {
  'website-plovdiv': {
    title: 'Website Development in Plovdiv', metaTitle: 'Website Development in Plovdiv | AR Studio',
    description: 'Custom website development in Plovdiv for small and growing businesses. Modern design, mobile-first delivery, clear calls to action, and a search-ready foundation.',
    keywords: 'website development Plovdiv, business website Bulgaria, custom web design Plovdiv', eyebrow: 'AR Studio core service',
    intro: 'We build websites that explain a business clearly, look professional on a phone, and guide visitors toward a useful next action: a call, enquiry, booking, or purchase.', price: 'From €250', priceNote: 'The final investment depends on the number of pages, available content, and required functionality.',
    audience: 'Suitable for restaurants, salons, hotels, professionals, local retailers, and companies that need a stronger online presence.',
    benefits: ['A custom structure built around the business goal', 'Responsive design for phone, tablet, and desktop', 'Clear information architecture and technical SEO foundations', 'Contact forms, WhatsApp/Viber links, and Google Maps where useful', 'A foundation for future additions such as a blog, bookings, or a store'],
    process: ['A short conversation about the goal', 'Page structure and content direction', 'Visual direction and development', 'Mobile, form, and core SEO checks', 'Handover, guidance, and an optional support path'],
    faq: [{ question: 'How long does it take?', answer: 'Standard projects are usually planned for 3–7 working days when content and feedback are available on time.' }, { question: 'Can I start with a small website?', answer: 'Yes. You can start with a focused landing page and later add services, a blog, bookings, or an online store.' }, { question: 'What do I need to provide?', answer: 'Basic information about the business, services, contacts, photos, and a logo if you have one. We can also help shape the content structure.' }],
    related: [{ label: 'Services and pricing', href: '/uslugi' }, { label: 'Portfolio', href: '/portfolio' }, { label: 'Business website resources', href: '/blog' }],
  },
  'restaurant-website-plovdiv': {
    title: 'Restaurant Website in Plovdiv', metaTitle: 'Restaurant Website in Plovdiv | Menus & Reservations — AR Studio',
    description: 'Restaurant websites in Plovdiv with digital menus, galleries, reservations, Google Maps, and a mobile-first visitor experience.', keywords: 'restaurant website Plovdiv, digital menu, QR menu, online restaurant reservations', eyebrow: 'For restaurants, cafés, and venues',
    intro: 'When a guest searches for a restaurant, they want to quickly see the menu, atmosphere, address, and how to reserve. We organise those details so the website helps the venue instead of acting as a static brochure.', price: 'From €450', priceNote: 'QR menus and additional functionality are scoped around the menu size and preferred update process.',
    audience: 'Suitable for restaurants, bars, cafés, bakeries, and hospitality venues in Plovdiv and across Bulgaria.',
    benefits: ['An interactive menu that is easy to open on a phone', 'QR access for tables, reception, or printed materials', 'A gallery for the interior, dishes, events, and atmosphere', 'Clear buttons for calling, booking, and directions', 'Local search structure with address, services, and useful FAQs'],
    process: ['Collect menu, opening hours, contacts, and photos', 'Build the visitor path around reservations and visits', 'Prepare the visual direction, menu, and mobile experience', 'Test the QR journey from scan to contact', 'Launch the site and define an update process'],
    faq: [{ question: 'Can the menu be updated?', answer: 'Yes. We can build it so updates are practical for the chosen setup and support plan.' }, { question: 'Does a QR menu work without an app?', answer: 'Yes. The QR code opens a mobile web page, so guests do not need to install anything.' }, { question: 'Can the site include reservations?', answer: 'Yes. We can add direct contact, a form, an external booking tool, or a more specialised system.' }],
    related: [{ label: 'Tomato Restaurant project', href: '/portfolio' }, { label: 'Services and pricing', href: '/uslugi' }, { label: 'Restaurant website guide', href: '/blog/restorant-plovdiv-digitalno-menu-i-sait' }],
  },
  'beauty-salon-website-plovdiv': {
    title: 'Beauty Salon Website in Plovdiv', metaTitle: 'Beauty Salon Website in Plovdiv | AR Studio',
    description: 'Elegant websites for beauty salons, hair salons, and beauty brands in Plovdiv, with services, galleries, appointment paths, and local SEO foundations.', keywords: 'beauty salon website Plovdiv, hair salon website Bulgaria, beauty web design', eyebrow: 'For beauty, wellness, and personal care businesses',
    intro: 'A salon website should show the result, atmosphere, and services before the first visit. We create a clear experience that makes booking easier and supports trust in the team.', price: 'From €450', priceNote: 'Online calendars, larger service menus, and multilingual content are scoped in the proposal.',
    audience: 'Suitable for beauty salons, hairdressers, nail studios, spas, and independent beauty professionals.',
    benefits: ['Service, pricing, and FAQ sections', 'A gallery that presents real results and atmosphere', 'Clear paths to appointments, calls, Instagram, and a map', 'A mobile structure for clients on the move', 'Local content that explains services clearly'],
    process: ['Define key services and target customers', 'Organise content around booking', 'Choose the visual direction and photos', 'Develop and test the mobile version', 'Connect the site to contact channels and support'],
    faq: [{ question: 'Can the website show prices?', answer: 'Yes. We can show full prices, starting prices, or a custom quote depending on how the salon works.' }, { question: 'Can clients book an appointment?', answer: 'Yes. Options include a form, phone, Viber/WhatsApp, an external booking system, or an integrated calendar.' }, { question: 'Can it connect to Instagram?', answer: 'Yes. We can add clear Instagram links and align the visual direction across the site and social profile.' }],
    related: [{ label: 'Services and pricing', href: '/uslugi' }, { label: 'Why AR Studio', href: '/zashto-nas' }, { label: 'Contact us', href: '/kontakti' }],
  },
  'hotel-website-plovdiv': {
    title: 'Hotel Website in Plovdiv', metaTitle: 'Hotel Website in Plovdiv | Direct Enquiries & Bookings — AR Studio',
    description: 'Professional websites for hotels, guesthouses, and apartments in Plovdiv with galleries, rooms, amenities, maps, and direct enquiry paths.', keywords: 'hotel website Plovdiv, guesthouse website Bulgaria, direct booking website', eyebrow: 'For hotels, guesthouses, and accommodation',
    intro: 'A good hotel website answers a guest’s questions before they open another platform: where you are, how the rooms look, which amenities you offer, and how an enquiry is made.', price: 'Custom proposal', priceNote: 'Timing and price depend on room count, languages, booking flow, and the required integrations.',
    audience: 'Suitable for boutique hotels, family hotels, guesthouses, and short-stay apartments in Plovdiv and the region.',
    benefits: ['Pages for rooms, amenities, location, and experience', 'A gallery that builds trust before a booking', 'Multilingual structure when needed', 'Map, transport information, and local recommendations', 'A form or clear route to a booking process'],
    process: ['Clarify accommodation type and booking process', 'Collect photos, amenities, rules, and local information', 'Design the path from browsing to enquiry', 'Build the responsive site and search-ready foundation', 'Check phones, forms, links, and language versions'],
    faq: [{ question: 'Can the website be bilingual?', answer: 'Yes. We can plan Bulgarian and English versions, with more languages if they are genuinely needed.' }, { question: 'Can it accept direct bookings?', answer: 'We can set up an enquiry form or connect the site to a chosen booking system.' }, { question: 'What is needed to start?', answer: 'Photos, room and amenity details, address, rules, contacts, and your preferred reservation process.' }],
    related: [{ label: 'Portfolio', href: '/portfolio' }, { label: 'Services and pricing', href: '/uslugi' }, { label: 'Free consultation', href: '/kontakti' }],
  },
  'law-firm-website-bulgaria': {
    title: 'Law Firm Website in Bulgaria', metaTitle: 'Law Firm Website | Professional Legal Website — AR Studio',
    description: 'Professional websites for lawyers, law firms, and consultants with clear services, team information, contact paths, and a trust-focused structure.', keywords: 'law firm website Bulgaria, lawyer website, legal web design', eyebrow: 'For lawyers, firms, and professional services',
    intro: 'A legal website should feel calm, accurate, and trustworthy. We organise services, people, and contact details so a potential client can understand whether you are the right partner and how to take the first step.', price: 'From €450', priceNote: 'Larger firms, many practice areas, and multilingual websites receive an individual proposal.',
    audience: 'Suitable for lawyers, law firms, mediators, accountants, and other professionals where trust is central.',
    benefits: ['Clear presentation of practice areas and services', 'Team profiles and professional biographies', 'An enquiry structure without unnecessary fields', 'Content and FAQs in understandable language', 'Local SEO foundations for cities and practice areas'],
    process: ['Clarify practice areas and client types', 'Organise information around problems and services', 'Create a trust-focused visual system', 'Develop and check forms and mobile experience', 'Hand over the site with room for future resources or a blog'],
    faq: [{ question: 'Can the website cover multiple practice areas?', answer: 'Yes. Each area can have its own section or page with a clear path to contact.' }, { question: 'Can it include a blog?', answer: 'Yes. A blog can explain topics and answer questions that potential clients search for.' }, { question: 'How do we avoid overly complex legal language?', answer: 'We can organise the text so it remains professionally accurate while being understandable to people without legal training.' }],
    related: [{ label: 'Legal website portfolio', href: '/portfolio' }, { label: 'Our process', href: '/zashto-nas' }, { label: 'Contact us', href: '/kontakti' }],
  },
  'ecommerce-website-bulgaria': {
    title: 'E-commerce Website Development in Bulgaria', metaTitle: 'E-commerce Website Development in Bulgaria | AR Studio',
    description: 'Custom online store development with mobile-first design, products, categories, payments, and a search-ready foundation. Request an individual proposal from AR Studio.', keywords: 'ecommerce website Bulgaria, online store development, custom webshop', eyebrow: 'For retail and product brands',
    intro: 'An online store should reduce doubt between the first visit and the order. We focus on clear categories, product pages, mobile checkout, and content that helps a customer decide.', price: 'From €800', priceNote: 'The exact price depends on product count, payments, delivery, integrations, and the chosen platform.',
    audience: 'Suitable for boutique brands, online retailers, product lines, and physical shops that want to sell online.',
    benefits: ['Product and category structure', 'Responsive product pages and cart', 'Payment and delivery integration based on needs', 'SEO foundations for products and categories', 'Administrative guidance and a support plan'],
    process: ['Map the catalogue, products, and order flow', 'Choose the approach and integrations', 'Design UX for catalogue, product, cart, and checkout', 'Run test orders and mobile checks', 'Handover, guidance, and a growth plan'],
    faq: [{ question: 'Can we start with a small catalogue?', answer: 'Yes. We can plan a structure that grows with new products and categories.' }, { question: 'How is the price determined?', answer: 'It depends on the platform, product count, payments, delivery, and required integrations.' }, { question: 'Is product SEO included?', answer: 'We can prepare structure for categories, product titles, descriptions, imagery, and internal links.' }],
    related: [{ label: 'Online store services', href: '/uslugi' }, { label: 'CBL Fight Store portfolio', href: '/portfolio' }, { label: 'Request a proposal', href: '/kontakti' }],
  },
};

const serviceRouteSlugs: Record<keyof typeof servicePages, string> = {
  'website-plovdiv': 'izrabotka-na-sait-plovdiv',
  'restaurant-website-plovdiv': 'sait-za-restorant-plovdiv',
  'beauty-salon-website-plovdiv': 'sait-za-kozmetichen-salon-plovdiv',
  'hotel-website-plovdiv': 'sait-za-hotel-plovdiv',
  'law-firm-website-bulgaria': 'sait-za-advokatska-kantora',
  'ecommerce-website-bulgaria': 'izrabotka-na-onlayn-magazin',
};

export default function ServiceLandingPage({ serviceKey, openQuoteModal }: ServiceLandingPageProps) {
  const { language } = useLanguage();
  const page = language === 'en' ? englishServicePages[serviceKey] : servicePages[serviceKey];
  const canonical = `${SITE_URL}/uslugi/${serviceRouteSlugs[serviceKey]}`;
  const faqSchema = page.faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  }));

  usePageMeta({
    title: page.metaTitle,
    description: page.description,
    keywords: page.keywords,
    canonical,
    jsonLd: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Service',
          '@id': `${canonical}#service`,
          name: page.title,
          serviceType: page.title,
          description: page.description,
          provider: { '@id': `${SITE_URL}/#business` },
          areaServed: [{ '@type': 'City', name: 'Пловдив' }, { '@type': 'Country', name: 'България' }],
          image: DEFAULT_IMAGE,
          url: canonical,
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Начало', item: `${SITE_URL}/` },
            { '@type': 'ListItem', position: 2, name: 'Услуги', item: `${SITE_URL}/uslugi` },
            { '@type': 'ListItem', position: 3, name: page.title, item: canonical },
          ],
        },
        { '@type': 'FAQPage', mainEntity: faqSchema },
      ],
    },
  });

  return (
    <PageTransition>
      <div className="min-h-screen bg-luxury-black pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-widest mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              {language === 'en' ? 'Specialized AR Studio service' : page.eyebrow}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">{page.title}</h1>
            <p className="text-lg md:text-xl text-zinc-300 leading-relaxed max-w-3xl">{page.intro}</p>
            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <button onClick={() => openQuoteModal(page.title)} className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-semibold transition-colors">
                {language === 'en' ? 'Request a free consultation' : 'Поискай безплатна консултация'}
                <ArrowRight className="w-4 h-4" />
              </button>
              <Link to={language === 'en' ? '/en/portfolio' : '/portfolio'} className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-zinc-900 border border-white/10 hover:border-blue-500/30 text-white rounded-xl font-semibold transition-colors">
                {language === 'en' ? 'See related projects' : 'Виж сходни проекти'}
              </Link>
            </div>
          </div>

          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 mb-20">
            <section className="p-8 rounded-2xl bg-zinc-950/60 border border-white/10">
              <p className="text-blue-400 text-sm uppercase tracking-widest font-semibold mb-3">{language === 'en' ? 'What you receive' : 'Какво получаваш'}</p>
              <h2 className="text-2xl md:text-3xl text-white font-bold mb-6">{language === 'en' ? 'A website built around the next customer action' : 'Сайт, изграден около следващото действие на клиента'}</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {page.benefits.map((benefit) => <div key={benefit} className="flex gap-3 text-zinc-300 text-sm leading-relaxed"><Check className="w-5 h-5 text-blue-400 shrink-0" />{benefit}</div>)}
              </div>
            </section>
            <aside className="p-8 rounded-2xl bg-gradient-to-br from-blue-500/15 to-indigo-500/5 border border-blue-500/20">
              <p className="text-zinc-400 text-sm mb-2">{language === 'en' ? 'Starting investment' : 'Начална инвестиция'}</p>
              <p className="text-4xl text-white font-bold mb-3">{page.price}</p>
              <p className="text-sm text-zinc-400 leading-relaxed mb-6">{page.priceNote}</p>
              <p className="text-sm text-zinc-300 leading-relaxed">{page.audience}</p>
            </aside>
          </div>

          <section className="mb-20">
            <div className="max-w-3xl mb-8"><p className="text-blue-400 text-sm uppercase tracking-widest font-semibold mb-3">{language === 'en' ? 'The process' : 'Процесът'}</p><h2 className="text-3xl md:text-4xl text-white font-bold">{language === 'en' ? 'From first conversation to launch' : 'От първия разговор до старта'}</h2></div>
            <div className="grid md:grid-cols-5 gap-4">{page.process.map((step, index) => <div key={step} className="p-5 rounded-2xl bg-zinc-900/50 border border-white/5"><span className="text-blue-400 font-mono text-sm">0{index + 1}</span><p className="text-zinc-300 text-sm leading-relaxed mt-3">{step}</p></div>)}</div>
          </section>

          <section className="grid lg:grid-cols-2 gap-8 mb-20">
            <div><p className="text-blue-400 text-sm uppercase tracking-widest font-semibold mb-3">FAQ</p><h2 className="text-3xl text-white font-bold mb-6">{language === 'en' ? 'Questions before we start' : 'Въпроси преди започване'}</h2>{page.faq.map((item) => <details key={item.question} className="group border-b border-white/10 py-4"><summary className="cursor-pointer list-none text-white font-semibold flex justify-between gap-4">{item.question}<span className="text-blue-400">+</span></summary><p className="text-zinc-400 text-sm leading-relaxed mt-3">{item.answer}</p></details>)}</div>
            <div className="p-8 rounded-2xl bg-zinc-950/70 border border-white/10 self-start"><MessageCircle className="w-7 h-7 text-blue-400 mb-5" /><h2 className="text-2xl text-white font-bold mb-3">{language === 'en' ? 'Do you have a specific business in mind?' : 'Имаш конкретен бизнес?'}</h2><p className="text-zinc-400 leading-relaxed mb-6">{language === 'en' ? 'Send a short note about the business, goal, and timing. We will return with a relevant direction and next step rather than a generic template proposal.' : 'Изпрати ни кратка информация за бизнеса, целта и срока. Ще върнем подходяща посока и следваща стъпка, без да започваме с обща шаблонна оферта.'}</p><button onClick={() => openQuoteModal(page.title)} className="w-full px-5 py-3 bg-white text-black rounded-xl font-semibold hover:bg-zinc-200 transition-colors">{language === 'en' ? 'Start a conversation' : 'Започни разговор'}</button></div>
          </section>

          <nav aria-label="Свързани страници" className="border-t border-white/10 pt-8 flex flex-wrap gap-3">{page.related.map((item) => <Link key={item.href} to={language === 'en' ? item.href.replace(/^\/(?!en)/, '/en/') : item.href} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 text-zinc-300 hover:text-white hover:bg-blue-600/20 border border-white/5 transition-colors">{item.label}<ArrowRight className="w-3.5 h-3.5" /></Link>)}</nav>
        </div>
      </div>
    </PageTransition>
  );
}

export { servicePages };
