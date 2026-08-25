/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Feature, TeamMember, PricingPlan, Project, Benefit, Testimonial, FaqItem } from './types';

export interface TranslationDictionary {
  navHome: string;
  navAbout: string;
  navServices: string;
  navPortfolio: string;
  navWhyUs: string;
  navReviews: string;
  navContact: string;

  freeQuote: string;
  getFreeQuote: string;
  viewWork: string;
  scheduleConsultation: string;
  viewLiveSite: string;
  requestCustomQuote: string;

  email: string;
  phone: string;
  name: string;
  message: string;
  send: string;
  selectPlan: string;
  statusAvailable: string;

  heroTitleHighlight: string;
  heroTitleText: string;
  heroSub: string;

  featuresSubTitle: string;
  featuresTitle: string;
  featuresDesc: string;

  aboutSubTitle: string;
  aboutTitle: string;
  aboutDesc: string;

  servicesSubTitle: string;
  servicesTitle: string;
  servicesDesc: string;
  periodMonth: string;
  selectThisPlan: string;
  startingPrice: string;

  whyUsSubTitle: string;
  whyUsTitle: string;
  whyUsDesc: string;

  testimonialsSubTitle: string;
  testimonialsTitle: string;
  testimonialsDesc: string;

  contactSubTitle: string;
  contactTitle: string;
  contactDesc: string;
  contactYourNamePlaceholder: string;
  contactEmailPlaceholder: string;
  contactPhonePlaceholder: string;
  contactMessagePlaceholder: string;
  contactSubmitting: string;
  contactSuccess: string;

  portfolioSubTitle: string;
  portfolioTitle: string;
  portfolioDesc: string;
  processSubTitle: string;
  processTitle: string;
  processDesc: string;
  processStep1Title: string;
  processStep1Desc: string;
  processStep2Title: string;
  processStep2Desc: string;
  processStep3Title: string;
  processStep3Desc: string;
  featuredProjectTag: string;

  modalTitle: string;
  modalDesc: string;
  modalSubmitting: string;
  modalPlaceholderSelectPlan: string;

  navFaq: string;
  faqSubTitle: string;
  faqTitle: string;
  faqDesc: string;
}

export const staticTranslations: { en: TranslationDictionary; bg: TranslationDictionary } = {
  en: {
    navHome: 'Home',
    navAbout: 'About Us',
    navServices: 'Services',
    navPortfolio: 'Portfolio',
    navWhyUs: 'Why Us',
    navReviews: 'Reviews',
    navContact: 'Contact',

    freeQuote: 'Free Quote',
    getFreeQuote: 'Get a Free Quote',
    viewWork: 'View Our Work',
    scheduleConsultation: 'Schedule Consultation',
    viewLiveSite: 'View Live Site →',
    requestCustomQuote: 'Request Custom Quote',

    email: 'Email Address',
    phone: 'Phone Number',
    name: 'Your Name',
    message: 'Your Message',
    send: 'Send Message',
    selectPlan: 'Select a Plan',
    statusAvailable: 'Status: Available for new projects',

    heroTitleHighlight: 'Bespoke Web Design &',
    heroTitleText: 'Development in Plovdiv',
    heroSub: 'High-performance websites for businesses in Plovdiv and Bulgaria — from €249, with a clear mobile-first experience and a 3–7 working day launch for standard projects.',

    featuresSubTitle: 'WHAT WE DELIVER',
    featuresTitle: 'Engineered for Elite Digital Performance',
    featuresDesc: 'We craft websites that do not just look stunning but generate real customer inquiries, load in milliseconds, and rank high on Google.',

    aboutSubTitle: 'THE CREATIVES',
    aboutTitle: 'Meet Your Professional Designers & Developers',
    aboutDesc: 'AR Studio was founded by Andrey and Rumen — two long-term digital craftsmen in Plovdiv dedicated to delivering high-end bespoke websites for local Bulgarian businesses.',

    servicesSubTitle: 'PRICING PLANS',
    servicesTitle: 'Flexible Solutions for Your Growth',
    servicesDesc: 'Transparent, highly competitive pricing with zero lock-in contracts. Get exactly what your brand requires.',
    periodMonth: 'month',
    selectThisPlan: 'Select This Plan',
    startingPrice: 'Starting Prices',

    whyUsSubTitle: 'OUR ADVANTAGES',
    whyUsTitle: 'Why Local Bulgarian Businesses Trust Us',
    whyUsDesc: 'We remove all technical frustration and upfront financial risk, operating purely on mutual performance and premium results.',

    testimonialsSubTitle: 'TESTIMONIALS',
    testimonialsTitle: 'What Our High-Performance Clients Say',
    testimonialsDesc: 'Read verified feedback from clients who choose to publish their experience with AR Studio.',

    contactSubTitle: 'GET IN TOUCH',
    contactTitle: "Let's Craft Your High-End Website Together",
    contactDesc: 'Have questions or ready to launch? Fill out the brief below. Andrey or Rumen will respond directly within 2–3 hours during the working day.',
    contactYourNamePlaceholder: 'e.g., Ivan Georgiev',
    contactEmailPlaceholder: 'e.g., ivan@gmail.com',
    contactPhonePlaceholder: 'e.g., 0888 123 456',
    contactMessagePlaceholder: 'Tell us about your brand vision...',
    contactSubmitting: 'Sending...',
    contactSuccess: 'Message sent successfully. Andrey or Rumen will respond within 2–3 hours during the working day.',

    portfolioSubTitle: 'SELECTED WORKS',
    portfolioTitle: 'Bespoke Websites Live & Serving Customers',
    portfolioDesc: 'Explore our recent premium digital works crafted to convert visitors into loyal clients.',
    processSubTitle: 'A CLEARER WAY TO BUILD',
    processTitle: 'How we turn an idea into a working website',
    processDesc: 'A focused process with direct communication, thoughtful design, and a clear next step at every stage.',
    processStep1Title: 'Start with the goal',
    processStep1Desc: 'We learn what the business needs the website to achieve and who it needs to reach.',
    processStep2Title: 'Shape the experience',
    processStep2Desc: 'We organise the content, design the visual direction, and build the right functionality.',
    processStep3Title: 'Launch with confidence',
    processStep3Desc: 'We test the important details, prepare the site for launch, and stay available for its next chapter.',
    featuredProjectTag: 'Featured Project',

    modalTitle: 'Begin Your Digital Transition',
    modalDesc: 'Share your business vision with Andrey & Rumen. You make zero payment until your final product is completely approved.',
    modalSubmitting: 'Submit Request',
    modalPlaceholderSelectPlan: 'Choose a design category',

    navFaq: 'FAQ',
    faqSubTitle: 'COMMON QUESTIONS',
    faqTitle: 'Frequently Asked Questions',
    faqDesc: 'Got questions about our process, our zero upfront pricing, or project delivery timelines? Find the answers compiled by Andrey & Rumen below.',
  },
  bg: {
    navHome: 'Начало',
    navAbout: 'За нас',
    navServices: 'Услуги',
    navPortfolio: 'Портфолио',
    navWhyUs: 'Защо нас',
    navReviews: 'Отзиви',
    navContact: 'Контакти',

    freeQuote: 'Безплатна консултация',
    getFreeQuote: 'Вземи Безплатна Оферта',
    viewWork: 'Виж работата ни',
    scheduleConsultation: 'Безплатна Консултация',
    viewLiveSite: 'Виж на живо →',
    requestCustomQuote: 'Заяви безплатна оферта',

    email: 'Имейл адрес',
    phone: 'Телефонен номер',
    name: 'Вашето име',
    message: 'Вашето съобщение',
    send: 'Изпрати съобщение',
    selectPlan: 'Изберете план',
    statusAvailable: 'Статус: Свободни за нови проекти',

    heroTitleHighlight: 'Изработка на уебсайтове &',
    heroTitleText: 'Уеб дизайн в Пловдив',
    heroSub: 'Бързи, SEO-ready и модерни сайтове за Вашия бизнес — от €249, с мобилно изживяване и готовност за старт за 3–7 работни дни при стандартен проект.',

    featuresSubTitle: 'КАКВО ПРЕДЛАГАМЕ',
    featuresTitle: 'Проектирани за елитно дигитално представяне',
    featuresDesc: 'Ние създаваме сайтове, които не просто изглеждат зашеметяващо, а генерират реални запитвания от клиенти, зареждат за милисекунди и се класират високо в Google.',

    aboutSubTitle: 'ТВОРЦИТЕ',
    aboutTitle: 'Запознайте се с Вашите дизайнери и уеб разработчици',
    aboutDesc: 'AR Studio бе основано от Андрей и Румен — двама дигитални занаятчии от Пловдив, посветени на предоставянето на луксозни персонализирани сайтове за българския бизнес.',

    servicesSubTitle: 'ЦЕНОВИ ПЛАНОВЕ',
    servicesTitle: 'Гъвкави решения за Вашия растеж',
    servicesDesc: 'Прозрачни, силно конкурентни цени без обвързващи договори. Получете точно това, от което се нуждае Вашият бранд.',
    periodMonth: 'месец',
    selectThisPlan: 'Избери този план',
    startingPrice: 'Начални цени',

    whyUsSubTitle: 'НАШИТЕ ПРЕДИМСТВА',
    whyUsTitle: 'Защо местните бизнеси ни се доверяват',
    whyUsDesc: 'Ние премахваме напълно техническото разочарование и първоначалния авансов финансов риск, работейки единствено на база резултати и премиум качество.',

    testimonialsSubTitle: 'ОТЗИВИ ОТ КЛИЕНТИ',
    testimonialsTitle: 'Какво казват нашите доволни клиенти',
    testimonialsDesc: 'Прочетете проверена обратна връзка от клиенти, които избират да публикуват своя опит с AR Studio.',

    contactSubTitle: 'СВЪРЖЕТЕ СЕ С НАС',
    contactTitle: 'Нека създадем Вашия премиум уебсайт заедно',
    contactDesc: 'Имате въпроси или сте готови да започнем? Попълнете кратката форма. Андрей или Румен ще Ви отговорят директно до 2–3 часа в рамките на работния ден.',
    contactYourNamePlaceholder: 'напр., Иван Георгиев',
    contactEmailPlaceholder: 'напр., ivan@gmail.com',
    contactPhonePlaceholder: 'напр., 0888 123 456',
    contactMessagePlaceholder: 'Разкажете ни за визията на Вашия бранд...',
    contactSubmitting: 'Изпраща се...',
    contactSuccess: 'Съобщението е изпратено успешно! Андрей или Румен ще Ви отговорят до 2–3 часа в рамките на работния ден.',

    portfolioSubTitle: 'ИЗБРАНИ ПРОЕКТИ',
    portfolioTitle: 'Уникални уебсайтове на живо, които обслужват клиенти',
    portfolioDesc: 'Разгледайте реални премиум проекти, създадени да помагат на бизнеса да представя услугите си и да улеснява следващото действие на клиента.',
    processSubTitle: 'ЯСЕН ПЪТ КЪМ ДОБРИЯ САЙТ',
    processTitle: 'Как превръщаме една идея в работещ сайт',
    processDesc: 'Фокусиран процес с директна комуникация, премислен дизайн и ясна следваща стъпка на всеки етап.',
    processStep1Title: 'Започваме с целта',
    processStep1Desc: 'Разбираме какво трябва да постигне сайтът и до кои хора трябва да достигне бизнесът.',
    processStep2Title: 'Изграждаме преживяването',
    processStep2Desc: 'Подреждаме съдържанието, оформяме визуалната посока и разработваме нужната функционалност.',
    processStep3Title: 'Публикуваме уверено',
    processStep3Desc: 'Проверяваме важните детайли, подготвяме сайта за старт и оставаме насреща за следващото му развитие.',
    featuredProjectTag: 'Препоръчан проект',

    modalTitle: 'Започнете Вашия дигитален преход',
    modalDesc: 'Споделете визията си с Андрей и Румен. Не плащате нищо, докато не видите завършения уебсайт и не сте напълно доволни от него.',
    modalSubmitting: 'Изпрати запитване',
    modalPlaceholderSelectPlan: 'Изберете категория за дизайн',

    navFaq: 'ЧЗВ',
    faqSubTitle: 'ЧЕСТО ЗАДАВАНИ ВЪПРОСИ',
    faqTitle: 'Често задавани въпроси (ЧЗВ)',
    faqDesc: 'Имате въпроси за нашия процес, цени без авансово плащане или срокове на изработка? Ето подробните отговори, събрани директно от Андрей и Румен.',
  }
};

export const dynamicTranslations = {
  en: {
    agencyFeatures: [
      {
        id: 'fast-delivery',
        title: 'Fast Delivery',
        description: 'Launch your high-end website in days, not months. We build with premium precision on speed-optimized frameworks.',
        iconName: 'Zap',
      },
      {
        id: 'mobile-responsive',
        title: 'Mobile Responsive',
        description: 'Flawless design adjusted for every viewport. Over 70% of local traffic is mobile; we design mobile-first.',
        iconName: 'Smartphone',
      },
      {
        id: 'modern-design',
        title: 'Modern Design',
        description: 'Elegant, modern luxury aesthetics. High-contrast dark themes, bespoke layouts, and stunning typography.',
        iconName: 'Layers',
      },
      {
        id: 'seo-friendly',
        title: 'SEO Friendly',
        description: 'Built with search engine optimization at its core. Rank high in Plovdiv & Bulgaria google search results.',
        iconName: 'Search',
      },
      {
        id: 'affordable-pricing',
        title: 'Affordable Pricing',
        description: 'Top-tier digital agency quality at prices tailored for local businesses. Unmatched value starting from €249.',
        iconName: 'DollarSign',
      },
      {
        id: 'ongoing-support',
        title: 'Ongoing Support',
        description: 'We do not just hand over a file. We manage updates, speed performance, and monthly security monitoring.',
        iconName: 'ShieldCheck',
      },
    ],
    founders: [
      {
        name: 'Andrey',
        role: 'Founder & Lead Developer',
        bio: 'Andrey translates sophisticated designs into lightning-fast, secure code. He specializes in responsive optimizations, SEO engineering, and seamless digital performance.',
      },
      {
        name: 'Rumen',
        role: 'Founder & Lead Designer',
        bio: 'With an eye for luxurious aesthetics and sleek typography, Rumen crafts the custom visuals, animations, and high-conversion client experiences that make AR Studio websites stand out.',
      },
      {
        name: 'Nikolay',
        role: 'All Around Help',
        bio: 'Nikolay provides comprehensive support across all aspects of AR Studio operations, ensuring seamless project delivery and exceptional client satisfaction.',
      },
    ],
    pricingPlans: [
      {
        id: 'basic',
        name: 'Basic Website',
        price: '€249',
        scope: 'A modern professional single page for presenting your business clearly and driving direct contact.',
        features: [
          '1 Page Custom Design',
          'Fully Responsive Mobile Version',
          'Basic SEO Optimization',
          'Viber, WhatsApp & Phone Call Buttons',
          'All necessary business information, text and photos: services, team, history, portfolio, hours, prices, contacts and other key details',
          'Google Business Profile setup, basic support and Google Maps placement',
          'Fast Delivery within 3 Business Days',
        ],
      },
      {
        id: 'standard',
        name: 'Standard Website',
        price: '€449',
        popular: true,
        scope: 'A complete business presence with up to five pages, contact form, bilingual support and local SEO.',
        features: [
          'Up to 5 Separate Pages or Main Sections',
          'Custom Design and Full Mobile Optimization',
          'Full SEO Optimization for Structure and Content',
          'Contact Form Embedded Directly in the Website',
          'WhatsApp, Viber & Phone Call Buttons',
          'Bulgarian and English with Language Switcher',
          'Embedded Google Maps with the Exact Business Address',
          'All necessary business information, text and photos: services, team, history, portfolio, hours, prices, contacts and other key details',
          'Google Business Profile setup, ongoing support and Google Maps placement',
          'QR Menu or Booking System when needed',
          'Delivery within 7 Business Days',
        ],
      },
      {
        id: 'premium',
        name: 'Premium Website',
        price: '€599',
        scope: 'An advanced custom website with everything in Standard plus premium digital functionality.',
        features: [
          'Everything from the Basic and Standard Websites',
          'Unlimited Content and Extended Structure',
          'Premium Animations and Micro-Interactions',
          'CRO Optimization for More Enquiries and Leads',
          'All necessary business information, text and photos: services, team, history, portfolio, hours, prices, contacts and other key details',
          'Advanced Google Business support and Google Maps placement',
          'Built-In AI Assistant for Questions and Visitor Guidance',
          'Advanced Forms, Bookings and Business Integrations',
          'CRM, Calendar, Newsletter and Automation Options',
          'Advanced Analytics and Action Tracking',
          'Priority Delivery and Strategic Consultation',
        ],
      },
      {
        id: 'e-commerce',
        name: 'E-commerce Store',
        price: '€599',
        scope: 'A complete online store for products, orders, payments and catalogue management.',
        features: [
          'Custom E-commerce Design & Branding',
          'Secure Payment Gateway Integration (Stripe/PayPal/Cash on Delivery)',
          'Product and Inventory Management System',
          'Order Tracking & Email Notifications',
          'All necessary business information, product text and photos for your brand',
          'Google Business Profile setup, ongoing support and Google Maps placement',
          'Mobile-Optimized Shopping Experience',
          'Advanced SEO for Products and Categories',
        ],
      },
      {
        id: 'integrated-store',
        name: 'Website with Integrated Online Store',
        price: '€799',
        scope: 'A complete business website with information pages and an integrated product store.',
        features: [
          'Everything from the Standard Website',
          'Catalogue, Categories, Product Pages and Shopping Cart',
          'Stripe, PayPal or Cash-on-Delivery Payments',
          'Product, Inventory and Customer Management',
          'Email Notifications and Order Tracking',
          'All necessary business information, text and photos for the business, services, team and products',
          'Google Business Profile setup, ongoing support and Google Maps placement',
          'SEO Structure for Business, Products and Categories',
          'Blog, Discounts and Promotional Campaign Options',
        ],
      },
      {
        id: 'redesign-simple',
        name: 'Simple Website Redesign',
        price: '€179',
        scope: 'Refresh your one-page website with a more modern design and a clearer path to enquiries.',
        features: [
          'Audit of the current website and its main weaknesses',
          'New visual direction, typography and colour system',
          'Clearer structure and calls to action',
          'Mobile-first responsive improvements',
          'Basic SEO check for headings and metadata',
          'Up to 2 revision rounds',
        ],
      },
      {
        id: 'redesign-5-pages',
        name: 'Redesign up to 5 Pages',
        price: '€349',
        popular: true,
        scope: 'A complete UX/UI redesign for a standard business website with up to five pages.',
        features: [
          'Analysis of the current navigation and content',
          'New UX/UI direction for up to 5 pages',
          'Custom responsive design for desktop and mobile',
          'Improved service sections and conversion paths',
          'Contact forms and clearer enquiry CTAs',
          'Up to 2 revision rounds',
        ],
      },
      {
        id: 'redesign-10-pages',
        name: 'Redesign up to 10 Pages',
        price: '€549',
        scope: 'An extended redesign for businesses with more services, content and a more complex structure.',
        features: [
          'Full review of the current information architecture',
          'New UX/UI concept for up to 10 pages',
          'Responsive redesign for desktop, tablet and mobile',
          'Improved service, portfolio, case study or team sections',
          'SEO-ready content hierarchy and internal linking review',
          'Up to 3 revision rounds',
        ],
      },
      {
        id: 'redesign-large',
        name: 'Large Website Redesign',
        price: '€799',
        scope: 'A complete redesign for a website with extensive or unlimited content and an individual structure.',
        features: [
          'Strategic analysis of the structure and existing content',
          'New design system and reusable components',
          'Redesign of key pages and content templates',
          'Responsive desktop and mobile experience',
          'Review of URLs, internal links and core SEO elements',
          'Integration and launch planning',
        ],
      },
      {
        id: 'maintenance',
        name: 'Website Maintenance',
        price: '€49',
        period: 'month',
        scope: 'Complete peace of mind. We handle the tech; you run the business.',
        features: [
          'Fast content updates & text edits',
          'Weekly automated security backups',
          'Speed and server-performance optimization',
          'SSL updates & technical monitoring',
          'Monthly traffic report',
        ],
      },
      {
        id: 'social',
        name: 'Social Media Management',
        price: '€79',
        period: 'month',
        scope: 'Grow your brand presence organically on Instagram, Facebook, and TikTok.',
        features: [
          'Custom luxury content creation',
          'Post scheduling & captions copywriting',
          'Local Bulgaria-targeted audience growth',
          'Instagram Grid structure planning',
          'Aesthetic image guidelines',
        ],
      },
      {
        id: 'combo',
        name: 'Website + Social Combo',
        price: '€119',
        period: 'month',
        scope: 'The ultimate digital growth accelerator for local Bulgarian restaurants and businesses.',
        features: [
          'Ongoing Website Support & Content Edits',
          'Complete Social Media Management',
          'Unified Brand Aesthetics Across Web & Socials',
          'Lead generation & advertising advice',
          'Direct access to Andrey & Rumen',
        ],
      },
      {
        id: 'qr-code',
        name: 'QR Code Menu & Integration',
        price: '€79',
        scope: 'Modernize your restaurant or salon with contactless digital interaction.',
        features: [
          'Custom Branded QR Code Design',
          'Interactive Digital Menu / Price List',
          'Easy Cloud-Based Content Updates',
          'Table or Reception Stand Setup',
          'Fast 2-Day Delivery',
        ],
      },
      {
        id: 'google-business',
        name: 'Google Business Profile & Google Maps',
        price: '€59',
        scope: 'Google Business Profile setup, configuration and basic support with accurate Google Maps placement.',
        features: [
          'Google Business Profile creation or setup',
          'Accurate business address and Google Maps placement',
          'Business hours, contacts, services and photos',
          'Preparation of the core information customers need',
        ],
      },
      {
        id: 'logo-design',
        name: 'Professional Logo Design',
        price: '€99',
        scope: 'A distinctive visual identity that helps your business look recognizable and professional.',
        features: [
          '3 Unique Logo Concepts',
          'Unlimited Revisions until Perfect',
          'High-Resolution Vector Files (AI, SVG, PNG)',
          'Color & Typography Guidelines',
          'Social Media Profile Optimization',
        ],
      },
      {
        id: 'seo-optimization',
        name: 'SEO Optimization for an Existing Website',
        price: '€89',
        scope: 'Improve the search visibility of your existing website with a focused SEO review and practical on-page improvements.',
        features: [
          'Review of titles, meta descriptions, headings and page structure',
          'Keyword and local SEO recommendations for your main services',
          'Internal linking and content clarity improvements',
          'Technical SEO checks for indexing and search readiness',
          'Action summary with priorities for the next steps',
        ],
      },
      {
        id: 'speed-optimization',
        name: 'Speed Optimization for an Existing Website',
        price: '€89',
        scope: 'Make your existing website faster and more comfortable to use across mobile and desktop devices.',
        features: [
          'Performance review for mobile and desktop',
          'Image, font and asset loading optimisation',
          'Core Web Vitals improvement recommendations',
          'Removal of avoidable loading and rendering bottlenecks',
          'Before-and-after performance summary',
        ],
      },
      {
        id: 'seo-speed-bundle',
        name: 'SEO + Speed Optimization Bundle',
        price: '€139',
        scope: 'A focused combination of search optimisation and performance improvements for an existing website.',
        features: [
          'Everything included in SEO Optimization',
          'Everything included in Speed Optimization',
          'Prioritised action plan for the highest-impact improvements',
          'One coordinated review of structure, content and performance',
          'Before-and-after summary with practical next steps',
        ],
      },
      {
        id: 'bundle-starter',
        name: 'Starter Pro Bundle',
        price: '€349',
        bundle: true,
        scope: 'The perfect foundation for a new business launch.',
        features: [
          'Basic Website (€249 value)',
          'Professional Logo Design (€99 value)',
          'Google Business Profile & Google Maps (€59 value)',
          'Save €58 instantly',
          'Fast 5-day delivery',
        ],
      },
      {
        id: 'bundle-business',
        name: 'Business Elite Bundle',
        price: '€549',
        bundle: true,
        popular: true,
        scope: 'Complete digital transformation for established businesses.',
        features: [
          'Standard Website (€449 value)',
          'Professional Logo Design (€99 value)',
          '1 Month Free Maintenance (€49 value)',
          'Google Business Profile & Google Maps (€59 value)',
          'Save €107 instantly',
        ],
      },
      {
        id: 'bundle-ultimate',
        name: 'Ultimate Digital Growth',
        price: '€849',
        bundle: true,
        scope: 'Dominate your local market with elite web & social presence.',
        features: [
          'Premium Website (€599 value)',
          'Professional Logo Design (€99 value)',
          '3 Months Combo Package (€357 value)',
          'Google Business Profile & Google Maps (€59 value)',
          'Save €265 instantly',
        ],
      },
      {
        id: 'bundle-restaurant',
        name: 'Restaurant & Hospitality Bundle',
        price: '€599',
        bundle: true,
        scope: 'A complete digital presence for restaurants, hotels, cafés, bars and salons.',
        features: [
          'Standard Website (€449 value)',
          'QR Menu & Integration (€79 value)',
          'Professional Logo Design (€99 value)',
          'Google Business Profile & Google Maps (€59 value)',
          'Save €87 instantly',
        ],
      },
      {
        id: 'bundle-ecommerce-launch',
        name: 'E-commerce Launch Bundle',
        price: '€699',
        bundle: true,
        scope: 'A ready-to-launch foundation for brands starting professional online sales.',
        features: [
          'E-commerce Store (€599 value)',
          'Professional Logo Design (€99 value)',
          '1 Month Social Media Support (€79 value)',
          'Google Business Profile & Google Maps (€59 value)',
          'Save €137 instantly',
        ],
      },
      {
        id: 'bundle-integrated-commerce',
        name: 'Integrated Commerce Pro Bundle',
        price: '€849',
        bundle: true,
        scope: 'An advanced solution for businesses with both a physical presence and online sales.',
        features: [
          'Website with Integrated Online Store (€799 value)',
          'Professional Logo Design (€99 value)',
          '1 Month Technical Maintenance (€49 value)',
          'Google Business Profile & Google Maps (€59 value)',
          'Save €157 instantly',
        ],
      },
    ],
    featuredProjects: [
      {
        id: 'dimstan-hydro',
        title: 'DimStan Hydro Service',
        category: 'Borehole & Water Well Services Website',
        url: 'https://dimstan-hydro.site/',
        imageUrl: 'dimstan_hydro_mockup',
        highlights: [
          'Service-first landing page - Clear presentation of borehole cleaning, airlift maintenance, and new drilling',
          'Transparent pricing - Cleaning from €250 and new boreholes from €55 per metre',
          'Cost estimator - Interactive quote calculator for cleaning and drilling scenarios',
          'Lead generation - Direct phone CTAs and inspection request form for the Burgas region',
          'Local service coverage - Areas, partners, and practical contact details in one place',
        ],
        description: 'A focused service website developed for DimStan Hydro Service and HYDROSOND. It combines airlift cleaning, borehole diagnostics, new drilling, transparent pricing, and direct inspection requests in one practical digital experience for customers across the Burgas region.',
        businessProblem: 'The website turns a technical, locally delivered service into a clear digital journey: visitors can understand warning signs, compare services and pricing, estimate costs, and contact the right specialist without searching through fragmented information.',
        tags: ['Professional Services', 'Borehole Cleaning', 'Lead Generation', 'Cost Calculator'],
      },
      {
        id: 'mm-showroom',
        title: 'MM Showroom',
        category: 'Automotive Showroom Website',
        url: 'https://mm-showroombg.com/',
        imageUrl: 'mm_showroom_mockup',
        highlights: [
          'Premium automotive catalogue - Curated vehicles presented with a high-end visual experience',
          'Lead generation forms - Trade-in, import, contact and leasing enquiries in one place',
          'Leasing calculator - Interactive monthly payment estimation for prospective buyers',
          'Showroom location - Clear Plovdiv location details and direct contact paths',
          'Responsive experience - Designed for quick browsing on mobile and desktop',
        ],
        description: 'A premium automotive showroom website developed for MM Showroom. The platform combines vehicle discovery, trade-in and import enquiries, leasing guidance, contact options, and showroom information in one polished digital experience.',
        businessProblem: 'The website gives MM Showroom an owned digital showroom where potential buyers can browse available vehicles, estimate leasing costs, request a trade-in, and contact the team without relying only on third-party listings.',
        tags: ['Automotive', 'Showroom', 'Lead Generation', 'Leasing Calculator'],
      },
      {
        id: 'belestate-group',
        title: 'BelEstateGroup',
        category: 'Real Estate Agency Website',
        url: 'https://www.belestategroup.site/',
        imageUrl: 'belestate_group_mockup',
        highlights: [
          'Luxury property showcase with high-end visual aesthetics',
          'Interactive property search and advanced filtering system',
          'Automated booking and consultation request pipelines',
          'Full legal and investment security information modules',
          'Premium mobile-first responsive design for elite clients',
        ],
        description: 'A high-performance real estate platform developed for BelEstateGroup. The website gives the agency a place to publish and manage its own property listings, with clear contact paths for people interested in a viewing or consultation.',
        businessProblem: 'The site reduces the need to rely only on paid property portals: BelEstateGroup can present its listings on its own website, while visitors can browse properties and contact the team more directly.',
        tags: ['Real Estate', 'Luxury Design', 'Interactive Catalog', 'Lead Generation'],
      },
      {
        id: 'cbl-fight-store',
        title: 'CBL Fight Store',
        category: 'E-commerce Store',
        url: 'https://cblfightstore.com',
        imageUrl: 'cbl_fight_store_mockup',
        highlights: [
          'Premium Boxing Equipment - High-performance gear for professional athletes',
          'E-commerce Integration - Seamless shopping experience with secure checkout',
          'Mobile-First Design - Optimized for shopping on the go',
          'Dynamic Product Showcase - Interactive galleries for fight gear',
          'New Portfolio Section - Showcase of latest equipment and collections',
        ],
        description: 'A high-end e-commerce platform developed for CBL Fight Store, specializing in premium boxing and Muay Thai equipment. The store gives customers a clear way to discover products, place orders online, and shop beyond the physical store.',
        businessProblem: 'The website solves the limitation of selling only in person by opening an additional online sales channel, so customers can explore the equipment and order whenever it is convenient for them.',
        tags: ['E-commerce', 'Boxing Gear', 'Luxury Design', 'Muay Thai'],
      },
      {
        id: 'tomato-restaurant',
        title: 'Tomato Restaurant',
        category: 'Restaurant & QR Menu Website',
        url: 'https://www.tomatorestaurant.online/',
        imageUrl: 'tomato_restaurant_mockup',
        highlights: [
          'Modern elegant layout fitting an Italian high-end restaurant',
          'Fully responsive, immersive online interactive menu',
          'Innovative contactless QR menu integration for physical tables',
          'Direct, zero-friction booking system',
          'Fast loading speed scoring 98+ on Google Lighthouse Mobile',
        ],
        description: 'A luxurious custom-designed web experience developed for Tomato Restaurant. The site brings the menu, reservation option, location, atmosphere, and essential information together in one clear place, while the QR menu makes access especially convenient at the table.',
        businessProblem: 'The website makes it easier for guests to view the menu, reserve a table without calling, and find the restaurant with clear location information. The Tomato team also shares that the site has helped bring more foreign visitors to the restaurant.',
        tags: ['Luxury Design', 'QR Menu Integration', 'Speed Optimized', 'Responsive Web'],
      },
      {
        id: 'teddys-bar-grill',
        title: 'Teddy\'s Bar & Grill',
        category: 'Premium Logo Design',
        imageUrl: 'teddys_bar_grill_mockup',
        highlights: [
          'Bold, sophisticated branding for a premium bar & grill experience',
          'Distinctive logo design featuring iconic bull imagery',
          'Gold & Black color palette for high-end visual appeal',
          'Bespoke typography tailored for culinary brands',
          'High-end visual identity for print & digital use',
        ],
        description: 'A premium logo design project for Teddy\'s Bar & Grill. We crafted a bold, sophisticated visual identity that captures the essence of a high-end dining establishment. The custom logo showcases a powerful bull motif with gold and black accents, creating a memorable and authoritative brand presence.',
        tags: ['Logo Design', 'Premium Branding', 'Bar & Grill', 'Luxury Design'],
      },
    ],
    benefits: [
      {
        id: 'fast-completion',
        title: 'Fast Project Completion',
        description: 'We value your time. Our workflow is optimized to deliver fully developed, elegant websites within 3 to 7 working days.',
      },
      {
        id: 'affordable-luxury',
        title: 'Affordable Pricing',
        description: 'We do not have the overhead costs of huge agencies, allowing us to offer elite-tier digital products at Bulgaria-focussed, budget-friendly rates.',
      },
      {
        id: 'direct-communication',
        title: 'Direct Communication',
        description: 'No middle managers or technical jargon. You talk directly with Andrey and Rumen at every stage in WhatsApp, Viber, or via phone.',
      },
      {
        id: 'modern-tech',
        title: 'Modern Technology',
        description: 'We build using modern React, Tailwind CSS, and lightning-fast edge hosting to ensure your site is incredibly fast and highly secure.',
      },
      {
        id: 'personalized-service',
        title: 'Personalized Service',
        description: 'Every local business is unique. We customize each interaction, design pixel, and conversion button to fit your exact goals.',
      },
      {
        id: 'zero-risk-payment',
        title: 'No Payment Until Approved',
        description: 'Absolute mutual trust. You make zero upfront commitments or payments until we present the final, completed website design and you are fully thrilled with it.',
      },
    ],
    testimonials: [],
    faqItems: [
      {
        id: 'faq-1',
        question: 'How fast can you launch my website?',
        answer: 'Typically between 3 to 7 working days for standard and basic websites. Premium and E-commerce projects may take up to 14 days depending on complexity.',
      },
      {
        id: 'faq-2',
        question: 'Do I really pay nothing until the site is finished?',
        answer: 'Yes. We operate on 100% mutual trust. You pay only after you review the final product on our staging server and are completely happy with the result.',
      },
      {
        id: 'faq-3',
        question: 'Will my website work well on mobile phones?',
        answer: 'Absolutely. We design mobile-first, ensuring your site looks luxurious and functions perfectly on iPhones, Androids, and tablets.',
      },
      {
        id: 'faq-4',
        question: 'Who owns the website once it is finished?',
        answer: 'You do. Once the final payment is made, you have 100% ownership of the website, the code, and all design assets. We can manage it for you, but it is entirely yours.',
      },
      {
        id: 'faq-5',
        question: 'Do you offer logo design and branding separately?',
        answer: 'Yes! While we specialize in websites, we also offer professional logo design and full visual identity packages for businesses that want to build a strong brand from scratch.',
      },
      {
        id: 'faq-6',
        question: 'Can I add more features to my site later?',
        answer: 'Yes, our websites are built on scalable frameworks. You can start with a basic landing page and later add an online store, booking system, or blog as your business grows.',
      },
      {
        id: 'faq-7',
        question: 'Is hosting and domain included?',
        answer: 'We help you set up everything. We provide premium high-speed hosting and security monitoring for a low monthly fee, ensuring your site is always live and protected.',
      },
    ],
  },
  bg: {
    agencyFeatures: [
      {
        id: 'fast-delivery',
        title: 'Бърза изработка',
        description: 'Стартирайте Вашия луксозен уебсайт за дни, а не месеци. Ние строим с премиум прецизност върху бързи софтуерни рамки.',
        iconName: 'Zap',
      },
      {
        id: 'mobile-responsive',
        title: 'Мобилна адаптивност',
        description: 'Безупречен дизайн за всеки екран. Над 70% от трафика е мобилен; ние проектираме първо за телефони.',
        iconName: 'Smartphone',
      },
      {
        id: 'modern-design',
        title: 'Модерен дизайн',
        description: 'Елегантна, модерна луксозна естетика. Тъмни теми с висок контраст, уникални оформления и стилна типография.',
        iconName: 'Layers',
      },
      {
        id: 'seo-friendly',
        title: 'SEO оптимизация',
        description: 'Изграден с мисъл за търсачките. Класирайте се високо в резултатите на Google за Пловдив и България.',
        iconName: 'Search',
      },
      {
        id: 'affordable-pricing',
        title: 'Достъпни цени',
        description: 'Качество на елитна дигитална агенция на цени за местния бизнес. Начални цени от €249.',
        iconName: 'DollarSign',
      },
      {
        id: 'ongoing-support',
        title: 'Постоянна поддръжка',
        description: 'Ние не просто предаваме проекта. Управляваме актуализациите, скоростта и месечния мониторинг на сигурността.',
        iconName: 'ShieldCheck',
      },
    ],
    founders: [
      {
        name: 'Андрей',
        role: 'Основател и главен разработчик',
        bio: 'Андрей превръща сложните дизайни в светкавично бърз и сигурен код. Специализира в мобилни оптимизации, SEO инженерство и дигитална производителност.',
      },
      {
        name: 'Румен',
        role: 'Основател и главен дизайнер',
        bio: 'С усет към луксозната естетика и изчистената типография, Румен създава визиите, анимациите и преживяванията, които отличават сайтовете на AR Studio.',
      },
      {
        name: 'Николай',
        role: 'Всестранна помощ',
        bio: 'Николай предоставя комплексна поддръжка във всички аспекти на операциите на AR Studio, гарантирайки безпроблемна реализация на проекти и изключително задоволство на клиентите.',
      },
    ],
    pricingPlans: [
      {
        id: 'basic',
        name: 'Основен уебсайт',
        price: '€249',
        scope: 'Една модерна и професионална страница за ясно представяне на Вашия бизнес и директен контакт.',
        features: [
          '1 страница с индивидуален дизайн',
          'Напълно адаптивна мобилна версия',
          'Базова SEO оптимизация',
          'Бутони за Viber, WhatsApp и телефонно обаждане',
          'Включване на всякаква необходима информация, текстове и снимки за Вашия бизнес, услуги, екип, история, портфолио, работно време, цени, контакти и други важни детайли',
          'Създаване и базова поддръжка на Google Business профил и поставяне в Google Maps',
          'Изработка за 3–7 работни дни при стандартен проект',
        ],
      },
      {
        id: 'standard',
        name: 'Стандартен сайт',
        price: '€449',
        popular: true,
        scope: 'Пълно бизнес представяне с до пет страници, контактна форма, двуезичност и локално SEO.',
        features: [
          'До 5 отделни страници или основни раздела',
          'Индивидуален дизайн и пълна мобилна оптимизация',
          'Пълна SEO оптимизация на структурата и съдържанието',
          'Вградена контактна форма директно през уебсайта',
          'Бутони за WhatsApp, Viber и телефонно обаждане',
          'Български и английски език с бутон за смяна',
          'Вградена Google Maps карта с точния адрес на бизнеса',
          'Включване на всякаква необходима информация, текстове и снимки за Вашия бизнес, услуги, екип, история, портфолио, работно време, цени, контакти и други важни детайли',
          'Създаване и поддръжка на Google Business профил и поставяне в Google Maps',
          'QR меню или резервационна система при необходимост',
          'Изработка за 3–7 работни дни при стандартен проект',
        ],
      },
      {
        id: 'premium',
        name: 'Премиум сайт',
        price: '€599',
        scope: 'Разширен персонализиран сайт с всичко от Стандартния пакет и премиум дигитални функционалности.',
        features: [
          'Всичко от Основния и Стандартния сайт',
          'Неограничено съдържание и разширена структура',
          'Премиум анимации и микроинтеракции',
          'CRO оптимизация за повече запитвания и заявки',
          'Включване на всякаква необходима информация, текстове и снимки за Вашия бизнес, услуги, екип, история, портфолио, работно време, цени, контакти и други важни детайли',
          'Разширена Google Business поддръжка и поставяне в Google Maps',
          'Вграден AI асистент за въпроси и насочване на посетители',
          'Разширени форми, резервации и бизнес интеграции',
          'Възможност за CRM, календар, newsletter и автоматизации',
          'Разширена аналитика и проследяване на действията',
          'Приоритетна изработка и стратегическа консултация',
        ],
      },
      {
        id: 'e-commerce',
        name: 'Онлайн магазин',
        price: '€599',
        scope: 'Пълнофункционален онлайн магазин за продукти, поръчки, плащания и управление на каталог.',
        features: [
          'Персонализиран e-commerce дизайн и брандиране',
          'Интеграция на сигурни плащания (Stripe/PayPal/Наложен платеж)',
          'Система за управление на инвентара и продуктите',
          'Проследяване на поръчки и имейл известия',
          'Включване на всякаква необходима информация, текстове и снимки за Вашия бизнес, продукти и бранд',
          'Създаване и поддръжка на Google Business профил и поставяне в Google Maps',
          'Оптимизирано пазаруване през мобилни устройства',
          'Разширено SEO за продукти и категории',
        ],
      },
      {
        id: 'integrated-store',
        name: 'Сайт с вграден онлайн магазин',
        price: '€799',
        scope: 'Пълен бизнес сайт с информационни страници и интегриран онлайн магазин за продажба на продукти.',
        features: [
          'Всичко от Стандартния сайт',
          'Каталог, категории, продуктови страници и кошница',
          'Поръчки и плащания чрез Stripe, PayPal или наложен платеж',
          'Управление на продукти, наличности и клиенти',
          'Имейл известия и проследяване на поръчките',
          'Включване на всякаква необходима информация, текстове и снимки за бизнеса, услугите, екипа и продуктите',
          'Създаване и поддръжка на Google Business профил и поставяне в Google Maps',
          'SEO структура за бизнеса, продуктите и категориите',
          'Възможност за блог, отстъпки и промоционални кампании',
        ],
      },
      {
        id: 'redesign-simple',
        name: 'Редизайн на simple сайт',
        price: '€179',
        scope: 'Освежете своя едностраничен сайт с по-модерен дизайн и по-ясен път към запитване.',
        features: [
          'Анализ на текущия сайт и основните му слабости',
          'Нова визуална посока, типография и цветова система',
          'По-ясна структура и призиви към действие',
          'Mobile-first адаптация и подобрения за телефон',
          'Базова SEO проверка на заглавия и метаданни',
          'До 2 кръга корекции',
        ],
      },
      {
        id: 'redesign-5-pages',
        name: 'Редизайн до 5 страници',
        price: '€349',
        popular: true,
        scope: 'Пълен UX/UI редизайн на стандартен бизнес сайт до пет страници.',
        features: [
          'Анализ на текущата навигация и съдържание',
          'Нова UX/UI посока за до 5 страници',
          'Индивидуален адаптивен дизайн за десктоп и мобилни устройства',
          'Подобрени секции за услуги и пътища към запитване',
          'Контактни форми и по-ясни CTA бутони',
          'До 2 кръга корекции',
        ],
      },
      {
        id: 'redesign-10-pages',
        name: 'Редизайн до 10 страници',
        price: '€549',
        scope: 'Разширен редизайн за бизнеси с повече услуги, съдържание и по-сложна структура.',
        features: [
          'Пълен преглед на информационната архитектура',
          'Нова UX/UI концепция за до 10 страници',
          'Адаптивен редизайн за десктоп, таблет и мобилни устройства',
          'Подобрени секции за услуги, портфолио, казуси или екип',
          'SEO-ready йерархия на съдържанието и преглед на вътрешните връзки',
          'До 3 кръга корекции',
        ],
      },
      {
        id: 'redesign-large',
        name: 'Редизайн на голям сайт',
        price: '€799',
        scope: 'Цялостен редизайн на сайт с много или неограничено съдържание и индивидуална структура.',
        features: [
          'Стратегически анализ на структурата и съществуващото съдържание',
          'Нова дизайн система и многократно използваеми компоненти',
          'Редизайн на ключови страници и съдържателни шаблони',
          'Адаптивно изживяване за десктоп и мобилни устройства',
          'Преглед на URL адреси, вътрешни връзки и основни SEO елементи',
          'План за интеграции и публикуване',
        ],
      },
      {
        id: 'maintenance',
        name: 'Месечна поддръжка',
        price: '€49',
        period: 'месец',
        scope: 'Пълно спокойствие. Ние поемаме технологиите; Вие движите бизнеса си.',
        features: [
          'Бързи актуализации на съдържание и текстове',
          'Седмични автоматизирани архиви за сигурност',
          'Оптимизация на скоростта и сървърната работа',
          'SSL сертификати и технически мониторинг',
          'Месечен отчет за трафика на сайта',
        ],
      },
      {
        id: 'social',
        name: 'Социални мрежи',
        price: '€79',
        period: 'месец',
        scope: 'Развийте бранда си органично в Instagram, Facebook и TikTok.',
        features: [
          'Създаване на луксозно визуално съдържание',
          'Планиране на постове и писане на текстове',
          'Ръст на аудиторията, насочен към България',
          'Планиране на Instagram мрежата (Grid)',
          'Естетически насоки за изображенията',
        ],
      },
      {
        id: 'combo',
        name: 'Сайт + Социални мрежи',
        price: '€119',
        period: 'месец',
        scope: 'Най-добрият ускорител на дигитален растеж за български заведения и бизнеси.',
        features: [
          'Постоянна поддръжка на сайта и редакции',
          'Пълно управление на социалните мрежи',
          'Единна бранд естетика в уеб и социални канали',
          'Съвети за генериране на клиенти и реклама',
          'Директен достъп до Андрей и Румен по всяко време',
        ],
      },
      {
        id: 'qr-code',
        name: 'QR код меню и интеграция',
        price: '€79',
        scope: 'Модернизирайте Вашето заведение с безконтактно дигитално взаимодействие.',
        features: [
          'Персонализиран брандиран дизайн на QR кода',
          'Интерактивно дигитално меню / ценоразпис',
          'Лесни актуализации на съдържанието в облака',
          'Настройка на стойки за маси или рецепция',
          'Бърза изработка до 2 дни',
        ],
      },
      {
        id: 'google-business',
        name: 'Google Business профил и Google Maps',
        price: '€59',
        scope: 'Създаване, настройка и основна поддръжка на Google Business профил с точно поставяне в Google Maps.',
        features: [
          'Създаване или настройка на Google Business профил',
          'Добавяне на точния адрес и поставяне в Google Maps',
          'Добавяне на работно време, контакти, услуги и снимки',
          'Подготовка на основната информация за клиентите',
        ],
      },
      {
        id: 'logo-design',
        name: 'Професионално лого',
        price: '€99',
        scope: 'Уникална визуална идентичност, която помага на бизнеса да изглежда разпознаваемо и професионално.',
        features: [
          '3 уникални концепции за лого',
          'Неограничени корекции до пълно одобрение',
          'Векторни файлове с висока резолюция (AI, SVG, PNG)',
          'Насоки за цветове и типография',
          'Оптимизация за профили в социалните мрежи',
        ],
      },
      {
        id: 'seo-optimization',
        name: 'SEO оптимизация на съществуващ уебсайт',
        price: '€89',
        scope: 'Подобрете видимостта на съществуващия си сайт в търсачките с фокусиран SEO преглед и практични on-page подобрения.',
        features: [
          'Преглед на заглавия, мета описания, headings и структурата на страниците',
          'Препоръки за ключови думи и локално SEO за основните Ви услуги',
          'Подобрения във вътрешните връзки и яснотата на съдържанието',
          'Технически SEO проверки за индексиране и готовност за търсачките',
          'Обобщение на действията с приоритети за следващите стъпки',
        ],
      },
      {
        id: 'speed-optimization',
        name: 'Оптимизация на скоростта на съществуващ уебсайт',
        price: '€89',
        scope: 'Направете съществуващия си сайт по-бърз и по-удобен за използване на мобилни устройства и компютри.',
        features: [
          'Проверка на производителността на мобилни устройства и компютри',
          'Оптимизация на зареждането на изображения, шрифтове и ресурси',
          'Препоръки за подобряване на Core Web Vitals',
          'Премахване на излишни забавяния при зареждане и визуализиране',
          'Обобщение на резултатите преди и след оптимизацията',
        ],
      },
      {
        id: 'seo-speed-bundle',
        name: 'Пакет SEO + оптимизация на скоростта',
        price: '€139',
        scope: 'Фокусирана комбинация от SEO и подобрения в производителността на съществуващ уебсайт.',
        features: [
          'Всичко включено в SEO оптимизацията',
          'Всичко включено в оптимизацията на скоростта',
          'Приоритизиран план за действия с най-голям ефект',
          'Единен преглед на структурата, съдържанието и производителността',
          'Обобщение на резултатите и практични следващи стъпки',
        ],
      },
      {
        id: 'bundle-starter',
        name: 'Starter Pro Пакет',
        price: '€349',
        bundle: true,
        scope: 'Перфектната основа за стартиране на нов бизнес.',
        features: [
          'Основен уебсайт (стойност €249)',
          'Професионално лого (стойност €99)',
          'Google Business профил и Google Maps (стойност €59)',
          'Спестявате €58 веднага',
          'Бърза изработка до 5 дни',
        ],
      },
      {
        id: 'bundle-business',
        name: 'Business Elite Пакет',
        price: '€549',
        bundle: true,
        popular: true,
        scope: 'Пълна дигитална трансформация за утвърдени бизнеси.',
        features: [
          'Стандартен уебсайт (стойност €449)',
          'Професионално лого (стойност €99)',
          '1 месец безплатна поддръжка (стойност €49)',
          'Google Business профил и Google Maps (стойност €59)',
          'Спестявате €107 веднага',
        ],
      },
      {
        id: 'bundle-ultimate',
        name: 'Ultimate Digital Growth Пакет',
        price: '€849',
        bundle: true,
        scope: 'Доминирайте на местния пазар с елитно уеб и социално присъствие.',
        features: [
          'Премиум уебсайт (стойност €599)',
          'Професионално лого (стойност €99)',
          '3 месеца Комбо пакет (стойност €357)',
          'Google Business профил и Google Maps (стойност €59)',
          'Спестявате €265 веднага',
        ],
      },
      {
        id: 'bundle-restaurant',
        name: 'Restaurant & Hospitality Пакет',
        price: '€599',
        bundle: true,
        scope: 'Цялостно дигитално представяне за ресторанти, хотели, кафенета, барове и салони.',
        features: [
          'Стандартен сайт (стойност €449)',
          'QR меню и интеграция (стойност €79)',
          'Професионално лого (стойност €99)',
          'Google Business профил и Google Maps (стойност €59)',
          'Спестявате €87 веднага',
        ],
      },
      {
        id: 'bundle-ecommerce-launch',
        name: 'E-commerce Launch Пакет',
        price: '€699',
        bundle: true,
        scope: 'Готов старт за брандове, които искат да започнат професионални онлайн продажби.',
        features: [
          'Онлайн магазин (стойност €599)',
          'Професионално лого (стойност €99)',
          '1 месец поддръжка на социалните мрежи (стойност €79)',
          'Google Business профил и Google Maps (стойност €59)',
          'Спестявате €137 веднага',
        ],
      },
      {
        id: 'bundle-integrated-commerce',
        name: 'Integrated Commerce Pro Пакет',
        price: '€849',
        bundle: true,
        scope: 'Разширено решение за бизнес с физическо присъствие и онлайн продажби.',
        features: [
          'Сайт с вграден онлайн магазин (стойност €799)',
          'Професионално лого (стойност €99)',
          '1 месец техническа поддръжка (стойност €49)',
          'Google Business профил и Google Maps (стойност €59)',
          'Спестявате €157 веднага',
        ],
      },
    ],
    featuredProjects: [
      {
        id: 'dimstan-hydro',
        title: 'ДимСтан - Хидро Сървис',
        category: 'Сайт за сондажи и хидро услуги',
        url: 'https://dimstan-hydro.site/',
        imageUrl: 'dimstan_hydro_mockup',
        highlights: [
          'Почистване с еърлифт - Ясно представяне на почистване, профилактика и възстановяване на дебита',
          'Нови сондажи - Информация за сондиране и работа в твърди и скалисти терени',
          'Прозрачни цени - Почистване от 250 € и нов сондаж от 55 €/м',
          'Калкулатор за разходи - Ориентировъчна цена според избраната услуга',
          'Локални запитвания - Директни телефони, контактна форма и обхват в Бургаска област',
        ],
        description: 'Фокусиран уебсайт за услуги, разработен за ДимСтан Хидро Сървис и ХИДРОСОНД. Сайтът събира почистването с еърлифт, диагностиката на сондажи, новото сондиране, прозрачните цени и заявките за оглед в едно практично дигитално преживяване за клиенти от Бургас и областта.',
        businessProblem: 'Сайтът превръща техническа и локална услуга в ясен дигитален път: посетителите могат да разпознаят сигналите за проблем, да сравнят услугите и цените, да изчислят ориентировъчен разход и да се свържат с правилния специалист без разпокъсана информация.',
        tags: ['Професионални услуги', 'Почистване на сондажи', 'Генериране на запитвания', 'Калкулатор за цена'],
      },
      {
        id: 'mm-showroom',
        title: 'MM Showroom',
        category: 'Сайт за автошоурум',
        url: 'https://mm-showroombg.com/',
        imageUrl: 'mm_showroom_mockup',
        highlights: [
          'Премиум каталог автомобили - Подбрани автомобили с висок клас визуално представяне',
          'Форми за запитвания - Изкупуване, внос, контакт и лизинг на едно място',
          'Лизингов калкулатор - Ориентировъчно изчисление на месечната вноска',
          'Локация на шоурума - Ясна информация за Пловдив и директен контакт',
          'Адаптивно преживяване - Удобно разглеждане от телефон и компютър',
        ],
        description: 'Премиум уебсайт за автошоурум, разработен за MM Showroom. Платформата събира наличните автомобили, запитванията за изкупуване и внос, лизинговия калкулатор, контактите и информацията за шоурума в едно завършено дигитално преживяване.',
        businessProblem: 'Сайтът дава на MM Showroom собствен дигитален шоурум, в който потенциалните клиенти могат да разглеждат автомобилите, да изчисляват ориентировъчен лизинг, да заявят изкупуване или внос и да се свържат с екипа без да разчитат само на външни платформи.',
        tags: ['Автомобили', 'Автошоурум', 'Генериране на запитвания', 'Лизингов калкулатор'],
      },
      {
        id: 'belestate-group',
        title: 'BelEstateGroup',
        category: 'Сайт за агенция за недвижими имоти',
        url: 'https://www.belestategroup.site/',
        imageUrl: 'belestate_group_mockup',
        highlights: [
          'Луксозно представяне на имоти с висок клас естетика',
          'Интерактивно търсене и разширена система за филтриране',
          'Автоматизирани запитвания за огледи и консултации',
          'Информационни модули за правна и инвестиционна сигурност',
          'Премиум адаптивен дизайн, оптимизиран за мобилни устройства',
        ],
        description: 'Високоефективна платформа за недвижими имоти, разработена за BelEstateGroup. Сайтът дава на агенцията собствено място за публикуване и управление на обяви, с ясни пътища за контакт при интерес към имот или консултация.',
        businessProblem: 'Сайтът намалява зависимостта от платени портали: BelEstateGroup може да представя обявите си в собствена платформа, а посетителите да разглеждат имотите и да се свързват по-лесно с екипа.',
        tags: ['Недвижими имоти', 'Луксозен дизайн', 'Интерактивен каталог', 'Генериране на запитвания'],
      },
      {
        id: 'cbl-fight-store',
        title: 'CBL Fight Store',
        category: 'Онлайн магазин',
        url: 'https://cblfightstore.com',
        imageUrl: 'cbl_fight_store_mockup',
        highlights: [
          'Премиум боксова екипировка - Висококачествени стоки за професионални атлети',
          'E-commerce интеграция - Безпроблемно пазаруване и сигурни плащания',
          'Mobile-First дизайн - Оптимизиран за пазаруване през телефон',
          'Динамично представяне - Интерактивни галерии за бойна екипировка',
          'Нова секция в портфолиото - Представяне на най-новите продукти и колекции',
        ],
        description: 'Премиум онлайн магазин, разработен за CBL Fight Store, специализиран в екипировка за бокс и муай тай. Сайтът представя продуктите ясно и дава възможност за поръчки онлайн, извън физическия магазин.',
        businessProblem: 'Уебсайтът решава ограничението на продажбите само на място, като отваря допълнителен онлайн канал, в който клиентите могат да разглеждат екипировката и да поръчват когато им е удобно.',
        tags: ['Онлайн магазин', 'Боксови стоки', 'Луксозен дизайн', 'Муай тай'],
      },
      {
        id: 'tomato-restaurant',
        title: 'Ресторант Tomato',
        category: 'Сайт за ресторант и QR меню',
        url: 'https://www.tomatorestaurant.online/',
        imageUrl: 'tomato_restaurant_mockup',
        highlights: [
          'Модерен елегантен дизайн за италиански ресторант',
          'Напълно адаптивно интерактивно онлайн меню',
          'Иновативна интеграция на QR меню за масите',
          'Директна система за онлайн резервации',
          'Светкавична скорост (98+ точки в Google Lighthouse)',
        ],
        description: 'Луксозно уеб преживяване, разработено за ресторант Tomato. Сайтът събира менюто, възможността за резервация, локацията, атмосферата и важната информация на едно ясно място, а QR менюто улеснява достъпа до предложенията на масата.',
        businessProblem: 'Сайтът улеснява гостите да разгледат менюто, да резервират маса без телефонно обаждане и да открият ресторанта чрез ясна локация. Екипът на Tomato споделя също, че сайтът е помогнал да започнат да посещават повече чуждестранни гости.',
        tags: ['Луксозен дизайн', 'QR меню', 'Бързина', 'Адаптивност'],
      },
      {
        id: 'teddys-bar-grill',
        title: 'Teddy\'s Bar & Grill',
        category: 'Дизайн на лого',
        imageUrl: 'teddys_bar_grill_mockup',
        highlights: [
          'Смел и изтънчен брандинг за първокласно изживяване',
          'Отличителен дизайн на лого с емблематичен бик',
          'Златно-черна цветова палитра за луксозно излъчване',
          'Уникална типография, създадена за кулинарни брандове',
          'Висококачествена визуална идентичност за печат и дигитална употреба',
        ],
        description: 'Премиум проект за дизайн на лого за Teddy\'s Bar & Grill. Създадохме смела и изтънчена визуална идентичност, която улавя същността на елитно заведение. Персонализираното лого включва мощен мотив на бик със златни и черни акценти, изграждайки запомнящо се и авторитетно присъствие на марката.',
        tags: ['Дизайн на лого', 'Премиум брандинг', 'Bar & Grill', 'Луксозен дизайн'],
      },
    ],
    benefits: [
      {
        id: 'fast-completion',
        title: 'Бързо завършване',
        description: 'Ценим Вашето време. Процесът ни е оптимизиран да предава стандартни сайтове за 3–7 работни дни.',
      },
      {
        id: 'affordable-luxury',
        title: 'Достъпен лукс',
        description: 'Нямаме огромните разходи на големите агенции, което ни позволява да предлагаме елитни продукти на цени за българския пазар.',
      },
      {
        id: 'direct-communication',
        title: 'Директна комуникация',
        description: 'Без посредници и сложни термини. Говорите директно с Андрей и Румен на всеки етап през WhatsApp, Viber или телефон.',
      },
      {
        id: 'modern-tech',
        title: 'Модерни технологии',
        description: 'Използваме React, Tailwind CSS и светкавичен хостинг, за да гарантираме, че сайтът Ви е бърз и сигурен.',
      },
      {
        id: 'personalized-service',
        title: 'Персонално отношение',
        description: 'Всеки бизнес е уникален. Персонализираме всеки пиксел и бутон, за да отговарят точно на Вашите цели.',
      },
      {
        id: 'zero-risk-payment',
        title: 'Плащане при одобрение',
        description: 'Пълно взаимно доверие. Не плащате нищо авансово, докато не прегледате завършения сайт и не сте напълно доволни.',
      },
    ],
    testimonials: [],
    faqItems: [
      {
        id: 'faq-1',
        question: 'Колко бързо ще бъде готов сайтът ми?',
        answer: 'Обикновено между 3 и 7 работни дни за стандартни проекти. При по-сложни сайтове и онлайн магазини срокът се уточнява според обхвата.',
      },
      {
        id: 'faq-2',
        question: 'Наистина ли не плащам нищо авансово?',
        answer: 'Да. Работим на база пълно взаимно доверие. Плащате едва след като прегледате финалния продукт на наш тестов сървър и сте напълно доволни от резултата.',
      },
      {
        id: 'faq-3',
        question: 'Ще работи ли сайтът ми добре на мобилни телефони?',
        answer: 'Абсолютно. Проектираме сайтовете първо за мобилни устройства, гарантирайки, че ще изглеждат луксозно и ще работят перфектно на всеки телефон или таблет.',
      },
      {
        id: 'faq-4',
        question: 'Кой притежава сайта след завършването му?',
        answer: 'Вие. След финалното плащане получавате 100% собственост върху уебсайта, кода и всички дизайнерски активи. Ние можем да го поддържаме вместо Вас, но той е изцяло Ваш.',
      },
      {
        id: 'faq-5',
        question: 'Предлагате ли само дизайн на лого и брандинг?',
        answer: 'Да! Въпреки че специализираме в уебсайтове, предлагаме и професионален дизайн на лого и цялостни пакети за визуална идентичност за бизнеси, които започват от нулата.',
      },
      {
        id: 'faq-6',
        question: 'Мога ли да добавям нови функции към сайта си по-късно?',
        answer: 'Да, нашите сайтове са изградени върху гъвкави софтуерни рамки. Можете да започнете с една страница и по-късно да добавите онлайн магазин, резервационна система или блог.',
      },
      {
        id: 'faq-7',
        question: 'Включени ли са хостинг и домейн?',
        answer: 'Ние съдействаме за всичко. Предлагаме премиум високоскоростен хостинг и мониторинг на сигурността срещу ниска месечна такса, за да е сайтът Ви винаги достъпен и защитен.',
      },
    ],
  },
};
