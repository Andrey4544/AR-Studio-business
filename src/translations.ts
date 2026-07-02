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

    heroTitleHighlight: 'Professional Websites That',
    heroTitleText: 'Grow Your Business',
    heroSub: 'Luxurious, custom web design and software engineering for brands that demand complete technical excellence and stunning style.',

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
    testimonialsDesc: 'We pride ourselves on 100% positive reviews and long-term partnerships with leading Bulgarian brands.',

    contactSubTitle: 'GET IN TOUCH',
    contactTitle: "Let's Craft Your High-End Website Together",
    contactDesc: 'Have questions or ready to launch? Fill out the brief below. Andrey or Rumen will reach out directly on WhatsApp or phone within 1 hour.',
    contactYourNamePlaceholder: 'e.g., Ivan Georgiev',
    contactEmailPlaceholder: 'e.g., ivan@gmail.com',
    contactPhonePlaceholder: 'e.g., 0888 123 456',
    contactMessagePlaceholder: 'Tell us about your brand vision...',
    contactSubmitting: 'Sending...',
    contactSuccess: 'Message Sent Successfully! Andrey or Rumen will call you back within 1 hour.',

    portfolioSubTitle: 'SELECTED WORKS',
    portfolioTitle: 'Bespoke Websites Live & Serving Customers',
    portfolioDesc: 'Explore our recent premium digital works crafted to convert visitors into loyal clients.',
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

    heroTitleHighlight: 'Професионални уебсайтове, които',
    heroTitleText: 'развиват бизнеса Ви',
    heroSub: 'Луксозен, персонализиран уеб дизайн и софтуерно инженерство за брандове, които изискват пълно техническо превъзходство и зашеметяващ стил.',

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
    testimonialsDesc: 'Гордеем се със 100% положителни отзиви и дългосрочни партньорства с водещи български марки и заведения.',

    contactSubTitle: 'СВЪРЖЕТЕ СЕ С НАС',
    contactTitle: 'Нека създадем Вашия премиум уебсайт заедно',
    contactDesc: 'Имате въпроси или сте готови да започнем? Попълнете кратката форма. Андрей или Румен ще се свържат директно с Вас в рамките на 1 час.',
    contactYourNamePlaceholder: 'напр., Иван Георгиев',
    contactEmailPlaceholder: 'напр., ivan@gmail.com',
    contactPhonePlaceholder: 'напр., 0888 123 456',
    contactMessagePlaceholder: 'Разкажете ни за визията на Вашия бранд...',
    contactSubmitting: 'Изпраща се...',
    contactSuccess: 'Съобщението е изпратено успешно! Андрей или Румен ще се свържат с Вас до 1 час.',

    portfolioSubTitle: 'ИЗБРАНИ ПРОЕКТИ',
    portfolioTitle: 'Уникални уебсайтове на живо, обслужващие клиенти',
    portfolioDesc: 'Изучете нашите скорошни премиум проекти, разработени да превръщат посетителите в лоялни клиенти.',
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
        description: 'Top-tier digital agency quality at prices tailored for local businesses. Unmatched value starting from €250.',
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
        price: '€250',
        scope: 'Single interactive landing page crafted with modern luxury layouts.',
        features: [
          '1 Page Custom Design',
          'Fully Mobile Responsive',
          'SEO Strategic Optimization',
          'Direct WhatsApp/Viber Chat Integrations',
          'Contact & Quote Form',
          '3 Days Fast Delivery',
        ],
      },
      {
        id: 'standard',
        name: 'Standard Website',
        price: '€450',
        popular: true,
        scope: 'Complete corporate or business multi-page/landing experience. Perfect for restaurants & salons.',
        features: [
          'Bespoke Business Design (like Tomato Restaurant)',
          'Up to 5 Pages or Interactive Sections',
          'Complete Mobile & Dynamic Optimization',
          'QR Menu or Booking Integration',
          'Google Maps & Local SEO Setup',
          '7 Days Fast Delivery',
        ],
      },
      {
        id: 'premium',
        name: 'Premium Website',
        price: '€600',
        scope: 'Elite multi-page digital hub with fully custom modules and robust design guidelines.',
        features: [
          'Unlimited Pages / Endless Scroll Sections',
          'Bespoke High-End Animations & Micro-Interactions',
          'Advanced Conversion Optimization (CRO)',
          'Multi-Language Bulgarian/English Support',
          'Priority Delivery & Lifetime Guarantee',
          'Dedicated Strategy Session with Andrey & Rumen',
        ],
      },
      {
        id: 'e-commerce',
        name: 'E-commerce Store',
        price: '€800',
        scope: 'Complete high-performance online store with secure payments and product management.',
        features: [
          'Custom E-commerce Design & Branding',
          'Secure Payment Gateway Integration (Stripe/PayPal)',
          'Product Inventory Management System',
          'Order Tracking & Email Notifications',
          'Mobile-First Shopping Experience',
          'Advanced SEO for Products',
        ],
      },
      {
        id: 'maintenance',
        name: 'Website Maintenance',
        price: '€50',
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
        price: '€75',
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
        price: '€110',
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
        price: '€80',
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
        id: 'logo-design',
        name: 'Professional Logo Design',
        price: '€150',
        scope: 'Bespoke visual identity that defines your luxury brand.',
        features: [
          '3 Unique Logo Concepts',
          'Unlimited Revisions until Perfect',
          'High-Resolution Vector Files (AI, SVG, PNG)',
          'Color & Typography Guidelines',
          'Social Media Profile Optimization',
        ],
      },
      {
        id: 'bundle-starter',
        name: 'Starter Pro Bundle',
        price: '€350',
        bundle: true,
        scope: 'The perfect foundation for a new business launch.',
        features: [
          'Basic Website (€250 value)',
          'Professional Logo Design (€150 value)',
          'Save €50 instantly',
          'Fast 5-day delivery',
        ],
      },
      {
        id: 'bundle-business',
        name: 'Business Elite Bundle',
        price: '€550',
        bundle: true,
        popular: true,
        scope: 'Complete digital transformation for established businesses.',
        features: [
          'Standard Website (€450 value)',
          'Professional Logo Design (€150 value)',
          '1 Month Free Maintenance (€50 value)',
          'Save €100 instantly',
        ],
      },
      {
        id: 'bundle-ultimate',
        name: 'Ultimate Digital Growth',
        price: '€850',
        bundle: true,
        scope: 'Dominate your local market with elite web & social presence.',
        features: [
          'Premium Website (€600 value)',
          'Professional Logo Design (€150 value)',
          '3 Months Combo Package (€330 value)',
          'Save €230 instantly',
        ],
      },
    ],
    featuredProjects: [
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
        description: 'A high-performance real estate platform developed for BelEstateGroup. The website features a sophisticated corporate identity, interactive property catalogs, and seamless lead generation tools, ensuring a premium experience for investors and property seekers in Bulgaria.',
        tags: ['Real Estate', 'Luxury Design', 'Interactive Catalog', 'Lead Generation'],
      },
      {
        id: 'cbl-fight-store',
        title: 'CBL Fight Store',
        category: 'E-commerce Store',
        imageUrl: 'cbl_fight_store_mockup',
        highlights: [
          'Premium Boxing Equipment - High-performance gear for professional athletes',
          'E-commerce Integration - Seamless shopping experience with secure checkout',
          'Mobile-First Design - Optimized for shopping on the go',
          'Dynamic Product Showcase - Interactive galleries for fight gear',
        ],
        description: 'A high-end e-commerce platform developed for CBL Fight Store, specializing in premium boxing and Muay Thai equipment. The store features a sleek dark aesthetic, intuitive navigation, and a robust shopping system designed for champions.',
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
        description: 'A luxurious custom-designed web experience developed for Tomato Restaurant. Featuring a high-contrast elegant dark theme, responsive typography, and custom animations that drive direct bookings and simplify table ordering via fully integrated QR menu technology.',
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
    testimonials: [
      {
        id: '2',
        name: 'Maria Ivanova',
        role: 'Creative Director',
        company: 'Aura Beauty Salon',
        text: 'Working with Andrey and Rumen was an absolute dream. Direct, quick communication with zero corporate jargon. They combined our website design and social media management for a very affordable monthly rate. High-end, premium luxury appearance that our clients constantly compliment.',
        rating: 5,
      },
      {
        id: '3',
        name: 'Dimitar Vasilev',
        role: 'Founder',
        company: 'Vasilev Legal Partners',
        text: 'Excellent work from these ambitious young Bulgarian professionals. They rebuilt our old lawyer agency website, establishing a highly polished digital legal brand. Highly responsive on mobile and perfectly SEO optimized. Andrey understood our brand guidelines immediately.',
        rating: 5,
      },
      {
        id: '4',
        name: 'Elena Petrova',
        role: 'Manager',
        company: 'Boutique Hotel Old Plovdiv',
        text: 'AR Studio is remarkably fast. Our booking request rates rose significantly after the luxury dark-theme landing page went live. They manage all weekly updates and hosting security for a very low monthly fee. Highly recommend Andrey & Rumen for any Bulgarian business.',
        rating: 5,
      },
    ],
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
        description: 'Качество на елитна дигитална агенция на цени за местния бизнес. Ненадмината стойност от €250.',
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
        price: '€250',
        scope: 'Интерактивна целева страница (Landing Page) с луксозна и модерна визия.',
        features: [
          '1 страница с индивидуален дизайн',
          'Напълно съвместим за мобилни екрани',
          'Базова SEO оптимизация за България',
          'Интеграция на бутони за директен разлог с WhatsApp/Viber',
          'Форма за контакти и запитвания',
          '3 дни бърза изработка',
        ],
      },
      {
        id: 'standard',
        name: 'Стандартен сайт',
        price: '€450',
        popular: true,
        scope: 'Пълен бизнес сайт от няколко страници. Идеален за ресторанти, кафенета, салони и студиа.',
        features: [
          'Уникален дизайн по поръчка (като на ресторант Tomato)',
          'До 5 вътрешни страници или раздели',
          'Пълна динамична мобилна оптимизация',
          'Интеграция на безконтактно дигитално QR меню или Резервационна система',
          'Локално SEO присъствие в Google Карти',
          '7 дни бърза подготовка на проекта',
        ],
      },
      {
        id: 'premium',
        name: 'Премиум сайт',
        price: '€600',
        scope: 'Елитен мултифункционален уеб портал с напълно персонализирани функции и дизайн.',
        features: [
          'Неограничен брой страници / богато съдържание',
          'Уникални микро-интеракции и луксозни анимации',
          'Усъвършенствана оптимизация на конверсиите (CRO)',
          'Пълна двуезична българо-английска поддръжка',
          'Приоритетна изработка и доживотна гаранция за грешки',
          'Директна стратегическа сесия лице в лице с Андрей и Румен',
        ],
      },
      {
        id: 'e-commerce',
        name: 'Онлайн магазин',
        price: '€800',
        scope: 'Пълнофункционален онлайн магазин с висока производителност и управление на продукти.',
        features: [
          'Персонализиран e-commerce дизайн и брандиране',
          'Интеграция на сигурни плащания (Stripe/PayPal/Наложен платеж)',
          'Система за управление на инвентара и продуктите',
          'Проследяване на поръчки и имейл известия',
          'Оптимизирано пазаруване през мобилни устройства',
          'Разширено SEO за продукти и категории',
        ],
      },
      {
        id: 'maintenance',
        name: 'Месечна поддръжка',
        price: '€50',
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
        price: '€75',
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
        price: '€110',
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
        price: '€80',
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
        id: 'logo-design',
        name: 'Професионално лого',
        price: '€150',
        scope: 'Уникална визуална идентичност, която дефинира Вашия луксозен бранд.',
        features: [
          '3 уникални концепции за лого',
          'Неограничени корекции до пълно одобрение',
          'Векторни файлове с висока резолюция (AI, SVG, PNG)',
          'Насоки за цветове и типография',
          'Оптимизация за профили в социалните мрежи',
        ],
      },
      {
        id: 'bundle-starter',
        name: 'Starter Pro Пакет',
        price: '€350',
        bundle: true,
        scope: 'Перфектната основа за стартиране на нов бизнес.',
        features: [
          'Основен уебсайт (стойност €250)',
          'Професионално лого (стойност €150)',
          'Спестявате €50 веднага',
          'Бърза изработка до 5 дни',
        ],
      },
      {
        id: 'bundle-business',
        name: 'Business Elite Пакет',
        price: '€550',
        bundle: true,
        popular: true,
        scope: 'Пълна дигитална трансформация за утвърдени бизнеси.',
        features: [
          'Стандартен уебсайт (стойност €450)',
          'Професионално лого (стойност €150)',
          '1 месец безплатна поддръжка (стойност €50)',
          'Спестявате €100 веднага',
        ],
      },
      {
        id: 'bundle-ultimate',
        name: 'Ultimate Digital Growth Пакет',
        price: '€850',
        bundle: true,
        scope: 'Доминирайте на местния пазар с елитно уеб и социално присъствие.',
        features: [
          'Премиум уебсайт (стойност €600)',
          'Професионално лого (стойност €150)',
          '3 месеца Комбо пакет (стойност €330)',
          'Спестявате €230 веднага',
        ],
      },
    ],
    featuredProjects: [
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
        description: 'Високоефективна платформа за недвижими имоти, разработена за BelEstateGroup. Сайтът разполага с изискана корпоративна идентичност, интерактивни каталози за имоти и инструменти за генериране на запитвания, осигурявайки премиум изживяване за инвеститори и купувачи.',
        tags: ['Недвижими имоти', 'Луксозен дизайн', 'Интерактивен каталог', 'Генериране на запитвания'],
      },
      {
        id: 'cbl-fight-store',
        title: 'CBL Fight Store',
        category: 'Онлайн магазин',
        imageUrl: 'cbl_fight_store_mockup',
        highlights: [
          'Премиум боксова екипировка - Висококачествени стоки за професионални атлети',
          'E-commerce интеграция - Безпроблемно пазаруване и сигурни плащания',
          'Mobile-First дизайн - Оптимизиран за пазаруване през телефон',
          'Динамично представяне - Интерактивни галерии за бойна екипировка',
        ],
        description: 'Високотехнологична платформа за онлайн търговия, разработена за CBL Fight Store, специализирана в премиум екипировка за бокс и муай тай. Магазинът се отличава с изчистена тъмна естетика, интуитивна навигация и надеждна система за пазаруване, създадена за шампиони.',
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
        description: 'Луксозно уеб преживяване, разработено за ресторант Tomato. Включва елегантна тъмна тема, адаптивна типография и анимации, които стимулират резервациите и улесняват поръчките чрез QR технология.',
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
        description: 'Ценим Вашето време. Процесът ни е оптимизиран да предава завършени сайтове в рамките на 3 до 7 работни дни.',
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
    testimonials: [
      {
        id: '2',
        name: 'Мария Иванова',
        role: 'Криейтив директор',
        company: 'Салон за красота Aura',
        text: 'Работата с Андрей и Румен беше мечта. Директна комуникация без излишни усложнения. Комбинираха сайта ни с управление на социалните мрежи на страхотна цена. Визията е луксозна и клиентите постоянно ни правят комплименти.',
        rating: 5,
      },
      {
        id: '3',
        name: 'Димитър Василев',
        role: 'Основател',
        company: 'Адвокатска кантора Василев',
        text: 'Отлична работа от тези амбициозни млади професионалисти. Изградиха наново сайта ни, създавайки сериозен дигитален бранд. Сайтът е много бърз и перфектно оптимизиран за Google. Андрей разбра визията ни веднага.',
        rating: 5,
      },
      {
        id: '4',
        name: 'Елена Петрова',
        role: 'Мениджър',
        company: 'Бутик Хотел Стария Пловдив',
        text: 'AR Studio са забележително бързи. Запитванията ни за резервации се увеличиха значително след пускането на новия сайт. Те управляват и цялата техническа част и сигурност. Силно препоръчвам Андрей и Румен!',
        rating: 5,
      },
    ],
    faqItems: [
      {
        id: 'faq-1',
        question: 'Колко бързо ще бъде готов сайтът ми?',
        answer: 'Обикновено между 3 и 7 работни дни за стандартни проекти. Премиум сайтовете и онлайн магазините могат да отнемат до 14 дни в зависимост от сложността.',
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
