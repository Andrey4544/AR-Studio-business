/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Feature, TeamMember, PricingPlan, Project, Benefit, Testimonial } from './types';

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
        description: 'Top-tier digital agency quality at prices tailored for local businesses. Unmatched value starting from €200.',
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
        role: 'Founder & Lead Designer',
        bio: 'With an eye for luxurious aesthetics and sleek typography, Andrey crafts the custom visuals, animations, and high-conversion client experiences that make AR Studio websites stand out.',
      },
      {
        name: 'Rumen',
        role: 'Founder & Lead Developer',
        bio: 'Rumen translates sophisticated designs into lightning-fast, secure code. He specializes in responsive optimizations, SEO engineering, and seamless digital performance.',
      },
    ],
    pricingPlans: [
      {
        id: 'basic',
        name: 'Basic Website',
        price: '€200',
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
        price: '€400',
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
        id: 'maintenance',
        name: 'Website Maintenance',
        price: '€40',
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
        price: '€100',
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
    ],
    featuredProjects: [
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
        id: '1',
        name: 'George Dimitrov',
        role: 'Owner',
        company: 'Tomato Restaurant Plovdiv',
        text: 'AR Studio completely transformed our restaurant business! They built our website and custom table QR menu system in just a few days. Our customers love the speed, and we have seen a 35% increase in tables booked online. The best part? No payment was requested until we were completely happy with the site.',
        rating: 5,
      },
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
        question: 'How does the 100% zero upfront payment model work?',
        answer: 'We operate purely on absolute mutual trust. Unlike other web agencies that demand 50% upfront, Andrey & Rumen require zero initial deposit. We build your complete custom website layout, host it securely, and let you touch, test, and approve it. You make the payment only when you are 100% thrilled with the final result.'
      },
      {
        id: 'faq-2',
        question: 'Who will actually design and develop my website?',
        answer: 'You work directly with the founders, Andrey & Rumen. Andrey executes the high-end UI/UX art directions, premium typography, and custom interactive widgets. Rumen writes the speed-engineered React/Tailwind code and sets up robust technical Google SEO. No sub-contractors, no outsourced freelancers.'
      },
      {
        id: 'faq-3',
        question: 'How fast can you complete and launch my website?',
        answer: 'Extremely fast. A basic landing page takes about 3 working days to deliver. Standard corporate websites, multi-page designs, restaurant QR digital menus, or salon reservation profiles are fully launched in 7 working days.'
      },
      {
        id: 'faq-4',
        question: 'Are there any hidden costs, recurring fees, or lock-in contracts?',
        answer: 'None whatsoever. All our pricing is transparent and paid once upon final approval. Optional support and weekly security monitoring can be reserved for just €40/month, and you can cancel this service at any time.'
      },
      {
        id: 'faq-5',
        question: 'Will my website look great and load quickly on mobile phones?',
        answer: 'Absolutely. Over 70% of local Bulgarian digital inquiries originate on mobile screens. We code mobile-first, ensuring sub-1 second page load speeds, fully reactive touch margins, and seamless smartphone menu browsing that rates 98+ on Google Lighthouse audits.'
      },
      {
        id: 'faq-6',
        question: 'How are direct WhatsApp calls, email submissions, and QR menus set up?',
        answer: 'We configure and integrate high-conversion contact blueprints directly. Contact forms route email inquiries directly, table QR codes route restaurant guests to interactive menus instantly, and custom direct-dial links let local customers text your business on Viber/WhatsApp in one click.'
      }
    ]
  },
  bg: {
    agencyFeatures: [
      {
        id: 'fast-delivery',
        title: 'Бърза изработка',
        description: 'Влезте в онлайн пространството за дни, а не месеци. Изграждаме проекти с високо качество върху бързо оптимизирани технологии.',
        iconName: 'Zap',
      },
      {
        id: 'mobile-responsive',
        title: 'Мобилна респонсивност',
        description: 'Безупречен дизайн за всяко мобилно устройство. Над 70% от местния трафик е на мобилни телефони — затова проектираме мобилно-първо.',
        iconName: 'Smartphone',
      },
      {
        id: 'modern-design',
        title: 'Модерен лукс дизайн',
        description: 'Елегантен и модерен изглед. Контрастни тъмни теми, уникални оформления и стилно подбрана типография.',
        iconName: 'Layers',
      },
      {
        id: 'seo-friendly',
        title: 'SEO оптимизация',
        description: 'Изграден с идеята за класиране в търсачките. Постигнете предни позиции в Google търсения за гр. Пловдив и цяла България.',
        iconName: 'Search',
      },
      {
        id: 'affordable-pricing',
        title: 'Достъпни цени',
        description: 'Качество от най-висок клас на цени, съобразени с българския пазар. Невероятна стойност, започваща от €200.',
        iconName: 'DollarSign',
      },
      {
        id: 'ongoing-support',
        title: 'Постоянна поддръжка',
        description: 'Ние не просто предаваме уебсайта. Ние се грижим за актуализациите, скоростта на сървърите и сигурността.',
        iconName: 'ShieldCheck',
      },
    ],
    founders: [
      {
        name: 'Андрей',
        role: 'Съосновател и Главен Дизайнер',
        bio: 'С око за детайла и луксозната естетика, Андрей създава уникалните визии, анимации и преживявания за потребителите, които помагат на AR Studio да изпъкне сред останалите.',
      },
      {
        name: 'Румен',
        role: 'Съосновател и Главен Разработчик',
        bio: 'Румен превръща изящните дизайни в бърз и сигурен код. Специализира в уеб оптимизации, техническо SEO и безкомпромисна производителност.',
      },
    ],
    pricingPlans: [
      {
        id: 'basic',
        name: 'Основен уебсайт',
        price: '€200',
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
        price: '€400',
        popular: true,
        scope: 'Пълен бизнес сайт от няколко страници. Идеален за ресторанти, кафенета, салони и студиа.',
        features: [
          'Уникален дизайн по поръчка (като на ресторант Tomato)',
          'До 5 вътрешни страници или раздели',
          'Пълна динамична мобилна оптимизация',
          'Интеграция на безконтактно дигитално QR меню или Резервационна система',
          'Локално SEO присъствие в Google Карти',
          '7 дни бърза подготвка на проекта',
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
        id: 'maintenance',
        name: 'Месечна поддръжка',
        price: '€40',
        period: 'месец',
        scope: 'Пълно спокойствие. Ние се грижим за уебсайта, а Вие управлявате бизнеса си.',
        features: [
          'Бързи промени по съдържанието и текстовете',
          'Седмични автоматични резервни копия (backups) на базата',
          'Оптимизиране на скоростта и софтуерната съвместимост',
          'Актуализации на SSL сертификата и следене за грешки',
          'Месечен технически доклад от нас',
        ],
      },
      {
        id: 'social',
        name: 'Маркетинг в Социалните Мрежи',
        price: '€75',
        period: 'месец',
        scope: 'Увеличете присъствието на марката си органично в Instagram, Facebook и TikTok.',
        features: [
          'Създаване на луксозно визуално съдържание',
          'Планиране на публикации и писане на текстове от копирайтър',
          'Развиване на таргетирана аудитория в България',
          'Планиране и дизайн на Instagram мрежа',
          'Естетически насоки за фотография',
        ],
      },
      {
        id: 'combo',
        name: 'Комбо: Сайт + Социални Мрежи',
        price: '€100',
        period: 'месец',
        scope: 'Най-силното дигитално комбо за бърз старт и растеж на ресторанти и търговци в България.',
        features: [
          'Постоянна текуща поддръжка на сайта и редакции',
          'Пълно управление на профилите в социалните мрежи',
          'Единна луксозна естетика между уебсайта и социалните медии',
          'Съвети за генериране на контакти и рекламни кампании',
          'Директен контакт с Андрей и Румен по всяко време',
        ],
      },
    ],
    featuredProjects: [
      {
        id: 'tomato-restaurant',
        title: 'Ресторант Tomato',
        category: 'Уебсайт на ресторант с дигитално QR меню',
        url: 'https://www.tomatorestaurant.online/',
        imageUrl: 'tomato_restaurant_mockup',
        highlights: [
          'Модерен италиански дизайн, отговарящ на изискания усет',
          'Напълно адаптивно, потапящо онлайн меню',
          'Иновативно безконтактно QR меню за масите',
          'Система за директни онлайн резервации без посредници',
          'Скорост на зареждане 98+ в Google Lighthouse Mobile',
        ],
        description: 'Луксозно дигитално преживяване, разработено за италиански ресторант Tomato в гр. Пловдив. С тъмна луксозна цветова гама, четивна респонсивна типография и прецизни анимации, които подканват към резервация на маса и опростяват поръчките през вградено QR меню.',
        tags: ['Луксозен Дизайн', 'QR Меню Интеграция', 'Висока Скорост', 'Мобилно Оптимизиран'],
      },
    ],
    benefits: [
      {
        id: 'fast-completion',
        title: 'Бързо изпълнение',
        description: 'Цвеним Вашето време. Процесът ни е структуриран така, че Вашият нов и завършен уебсайт да е готов между 3 и 7 работни дни.',
      },
      {
        id: 'affordable-luxury',
        title: 'Изгоден достъпен лукс',
        description: 'При нас липсват скъпите разходи на големите агенции, затова можем да Ви предложим продукт от световен клас на цени за България.',
      },
      {
        id: 'direct-communication',
        title: 'Директна комуникация',
        description: 'Без досадни технически термини или посредници. Говорите директно с Андрей или Румен във Viber, WhatsApp или по телефона.',
      },
      {
        id: 'modern-tech',
        title: 'Модерни технологии',
        description: 'Използваме съвременните React, Tailwind CSS и бърз хостинг, за да гарантираме, че сайтът Ви се отваря светкавично.',
      },
      {
        id: 'personalized-service',
        title: 'Персонализиран подход',
        description: 'Всеки бизнес е уникален. Бутон за повикване, дизайн детайл и структура — всичко се адаптира за Вашата индустрия и цели.',
      },
      {
        id: 'zero-risk-payment',
        title: 'Заплащане само при одобрение',
        description: 'Абсолютно взаимно доверие. Не изискваме никакво авансово плащане. Вие плащате единствено след като уебсайтът бъде напълно готов и го одобрите.',
      },
    ],
    testimonials: [
      {
        id: '1',
        name: 'Георги Димитров',
        role: 'Собственик',
        company: 'Ресторант Tomato Пловдив',
        text: 'AR Studio напълно преобразиха уеб присъствието ни! Направиха ни уебсайт и персонална QR система за менюта само за няколко дни. Клиентите обожават колко бързо е всичко, а онлайн резервациите ни се увеличиха с 35%. Най-добрата част? Плащането беше само след окончателното ни одобрение.',
        rating: 5,
      },
      {
        id: '2',
        name: 'Мария Иванова',
        role: 'Криейтив дирекор',
        company: 'Салон Aura',
        text: 'Работата ни с Андрей и Румен е удоволствие! Директна и бърза комуникация без излишни усложнения. Комбинираха изработката на сайта с маркетинг в социалните ни мрежи за супер достъпна такса. Луксозен изглед, който клиентите ни постоянно хвалят.',
        rating: 5,
      },
      {
        id: '3',
        name: 'Димитър Василев',
        role: 'Основател',
        company: 'Адвокатско дружество Василев и сие',
        text: 'Страхотна изработка от тези амбициозни български професионалисти. Изцяло преобразиха стария ни корпоративен сайт, създавайки много изчистен дигитален образ. Изключително бърз и добре класиран в Гугъл.',
        rating: 5,
      },
      {
        id: '4',
        name: 'Елена Петрова',
        role: 'Управител',
        company: 'Бутиков Хотел Стария Пловдив',
        text: 'AR Studio са изключително бързи. Резервациите ни се вдигнаха значително веднага след пускането на новата лендинг страница. Поддържат уебсайта ни всяка седмица за минимална сума. Горещо препоръчвам Андрей и Румен за всеки уеб проект.',
        rating: 5,
      },
    ],
    faqItems: [
      {
        id: 'faq-1',
        question: 'Как работи моделът за 100% безрисково плащане само при пълно одобрение?',
        answer: 'Ние работим изцяло на база взаимно доверие. За разлика от други уеб агенции, които изискват 50% авансово плащане, Андрей и Румен не изискват първоначален депозит. Ние разработваме Вашия сайт по поръчка, качваме го на тестови хостинг и Ви даваме да го разгледате, тествате и одобрите. Плащате ни единствено когато сте напълно удовлетворени от крайния резултат.'
      },
      {
        id: 'faq-2',
        question: 'Кой реално проектира и разработва моя уебсайт?',
        answer: 'Работите директно с основателите — Андрей и Румен. Андрей се грижи за луксозния дизайн, цветовата съвместимост, типографията и потребителското изживяване. Румен разработва бързия и сигурен уеб код на последно поколение технологии React и Tailwind CSS и настройва челно класиране в Google (SEO). Без външни посредници или пренасочване на проекта към други.'
      },
      {
        id: 'faq-3',
        question: 'Колко бързо можете да завършите и стартирате уебсайта ми?',
        answer: 'Изключително бързо. Основна целева страница (Landing page) е готова и пусната за около 3 работни дни. По-големи бизнес сайтове от няколко страници, интерактивни QR менюта за ресторанти или системи за резервации в салони се изпращат за финално одобрение в рамките на 7 работни дни.'
      },
      {
        id: 'faq-4',
        question: 'Има ли скрити разходи, месечни такси или обвързващи договори?',
        answer: 'Няма абсолютно никакви скрити такси. Заплащате цената за изработка еднократно след Вашето одобрение. Допълнителната месечна поддръжка, текстови промени и сигурност са изцяло по желание за €40/месец и могат да бъдат преустановени във всеки момент.'
      },
      {
        id: 'faq-5',
        question: 'Уебсайтът ми ще се отваря ли бързо на мобилен телефон?',
        answer: 'Да, напълно. Над 70% от потребителите в България използват смартфони за намиране на локални бизнеси. Затова проектираме мобилно-първо, осигурявайки зареждане за по-малко от секунда, лесно разглеждане с пръсти и безкомпромисна работа на всяко устройство.'
      },
      {
        id: 'faq-6',
        question: 'Как се настройват WhatsApp бутоните, контактните форми и QR кодовете?',
        answer: 'Ние конфигурираме и настройваме всички механизми за връзка. Бутонът за Viber/WhatsApp позволява на клиента да Ви пишат веднага, контактните ви форми изпращат запитванията директно до Вашия имейл, а ресторантските QR менюта препращат клиентите директно към ястията без никакво чакане.'
      }
    ]
  },
};
