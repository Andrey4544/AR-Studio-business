import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, MapPin, MessageCircle, Search, Smartphone, Sparkles } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { useLanguage } from '../context/LanguageContext';
import { usePageMeta } from '../hooks/usePageMeta';
import { useStructuredData } from '../hooks/useStructuredData';

interface WebDesignPlovdivPageProps {
  openQuoteModal: (planName?: string) => void;
}

const canonical = 'https://www.ar-studio.site/web-design-plovdiv';

export default function WebDesignPlovdivPage({ openQuoteModal }: WebDesignPlovdivPageProps) {
  const { language } = useLanguage();
  const isEnglish = language === 'en';

  usePageMeta({
    title: isEnglish
      ? 'Web Design in Plovdiv | Custom Websites for Bulgarian Businesses | AR Studio'
      : 'Уеб дизайн в Пловдив | Изработка на сайтове за бизнеса | AR Studio',
    description: isEnglish
      ? 'AR Studio creates fast, bespoke websites for businesses in Plovdiv and Bulgaria. Explore web design, online store and SEO-ready website solutions, then request a free consultation.'
      : 'AR Studio създава бързи и персонализирани уебсайтове за бизнеси в Пловдив и цяла България. Разгледайте уеб дизайн, онлайн магазини и SEO-ready решения и заявете безплатна консултация.',
    keywords: isEnglish
      ? 'web design Plovdiv, website development Plovdiv, web design Bulgaria, custom website Bulgaria, AR Studio'
      : 'уеб дизайн Пловдив, изработка на сайтове Пловдив, уебсайт Пловдив, уеб дизайн България, онлайн магазин Пловдив, AR Studio',
    canonical,
    ogImage: 'https://www.ar-studio.site/assets/logo.png',
  });

  useStructuredData('web-design-plovdiv-service', {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${canonical}#service`,
    name: isEnglish ? 'Web Design and Website Development in Plovdiv' : 'Уеб дизайн и изработка на сайтове в Пловдив',
    description: isEnglish
      ? 'Custom web design, website development, online stores, and technical SEO foundations for businesses in Plovdiv and across Bulgaria.'
      : 'Персонализиран уеб дизайн, изработка на сайтове, онлайн магазини и техническа SEO основа за бизнеси в Пловдив и цяла България.',
    url: canonical,
    provider: {
      '@type': 'ProfessionalService',
      '@id': 'https://www.ar-studio.site/#business',
      name: 'AR Studio',
      url: 'https://www.ar-studio.site/',
      telephone: '+359888616641',
      email: 'designbyandrey@gmail.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Plovdiv',
        postalCode: '4000',
        addressCountry: 'BG',
      },
    },
    areaServed: [
      { '@type': 'City', name: 'Plovdiv' },
      { '@type': 'Country', name: 'Bulgaria' },
    ],
    serviceType: isEnglish ? 'Web Design and Website Development' : 'Уеб дизайн и изработка на сайтове',
  });

  const benefits = isEnglish
    ? [
        'A website shaped around your audience, offer and brand—not a generic template.',
        'Mobile-first layouts, accessible contact paths and clear actions for potential clients.',
        'Technical foundations for search visibility: page metadata, internal links and structured data.',
        'Direct communication with the people designing and building your project.',
      ]
    : [
        'Сайт, съобразен с Вашата аудитория, оферта и бранд — не шаблонно решение.',
        'Mobile-first оформление, лесен контакт и ясни следващи стъпки за потенциалните клиенти.',
        'Техническа основа за видимост: метаданни, вътрешни връзки и структурирани данни.',
        'Директна комуникация с хората, които проектират и изграждат Вашия сайт.',
      ];

  const suitableFor = isEnglish
    ? ['Professional service firms', 'Restaurants and hospitality', 'Retail and online stores', 'New ventures and established local brands']
    : ['Фирми за професионални услуги', 'Ресторанти, хотели и заведения', 'Търговци и онлайн магазини', 'Нови и утвърдени местни брандове'];

  const faqItems = isEnglish
    ? [
        {
          question: 'Do you work only with companies in Plovdiv?',
          answer: 'No. AR Studio is based in Plovdiv and works with businesses across Bulgaria. Local clients can benefit from direct, practical communication, while remote projects follow the same clear process.',
        },
        {
          question: 'What should a business prepare before requesting a website?',
          answer: 'A short description of your services, your target customers, examples you like, basic brand assets and the actions you want visitors to take are enough to begin a useful conversation.',
        },
        {
          question: 'Is SEO included in a new website?',
          answer: 'Every project can begin with sound technical SEO foundations, such as mobile-friendly design, page metadata, logical internal links and search-friendly content structure. Ongoing content, local profile work and measurement build on that foundation.',
        },
      ]
    : [
        {
          question: 'Работите ли само с фирми от Пловдив?',
          answer: 'Не. AR Studio е базирано в Пловдив и работи с бизнеси от цяла България. За местните клиенти предлагаме директна и практична комуникация, а дистанционните проекти следват същия ясен процес.',
        },
        {
          question: 'Какво трябва да подготви един бизнес преди запитване за сайт?',
          answer: 'Достатъчни са кратко описание на услугите, идеалните Ви клиенти, примери за сайтове, които харесвате, базови бранд материали и действията, които искате посетителите да предприемат.',
        },
        {
          question: 'Включва ли се SEO при изработката на нов сайт?',
          answer: 'Всеки проект може да започне със здрава техническа SEO основа: mobile-friendly дизайн, метаданни, логични вътрешни връзки и структура на съдържанието. След това съдържанието, локалният профил и измерването развиват тази основа.',
        },
      ];

  useStructuredData('web-design-plovdiv-faq', {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  });

  return (
    <PageTransition>
      <article className="bg-luxury-black text-white">
        <section className="relative overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-28 border-b border-white/5">
          <div className="absolute top-10 right-[-12%] w-[440px] h-[440px] rounded-full bg-blue-600/10 blur-[120px] pointer-events-none" />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-[11px] font-mono uppercase tracking-widest mb-7">
              <MapPin className="w-3.5 h-3.5" />
              {isEnglish ? 'Plovdiv, Bulgaria • Web Design Studio' : 'Пловдив, България • Студио за уеб дизайн'}
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight max-w-4xl">
              {isEnglish ? 'Web Design in Plovdiv Built for Real Business Growth' : 'Уеб дизайн в Пловдив, създаден за реален растеж на бизнеса'}
            </h1>
            <p className="mt-7 max-w-3xl text-base sm:text-xl leading-relaxed text-zinc-300">
              {isEnglish
                ? 'AR Studio designs and develops fast, distinctive websites for businesses that need a credible digital presence, clearer enquiries and a strong foundation for search visibility.'
                : 'AR Studio проектира и изработва бързи и отличителни уебсайтове за бизнеси, които искат надеждно дигитално присъствие, по-ясни запитвания и стабилна основа за видимост в търсачките.'}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => openQuoteModal('Web Design Plovdiv')}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 transition-colors font-semibold text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                {isEnglish ? 'Request a Free Consultation' : 'Заяви безплатна консултация'}
              </button>
              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-white/15 hover:border-blue-400/60 hover:bg-white/5 transition-colors font-semibold text-sm"
              >
                {isEnglish ? 'Explore our work' : 'Вижте нашите проекти'}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-start">
            <div>
              <p className="text-blue-400 font-mono text-xs tracking-[0.18em] uppercase mb-4">{isEnglish ? 'A practical local partner' : 'Практичен местен партньор'}</p>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight">{isEnglish ? 'A website should make your next step easier.' : 'Сайтът трябва да улеснява следващата стъпка на клиента.'}</h2>
              <p className="mt-6 text-zinc-400 leading-relaxed">
                {isEnglish
                  ? 'Whether you serve customers in central Plovdiv, elsewhere in Bulgaria or online, your website should quickly explain what you offer, why it matters and how to contact you. We combine visual identity, practical user journeys and dependable development so the site supports that work every day.'
                  : 'Независимо дали обслужвате клиенти в центъра на Пловдив, в цяла България или онлайн, Вашият сайт трябва бързо да обяснява какво предлагате, защо е важно и как клиентът да се свърже с Вас. Комбинираме визуална идентичност, практично потребителско изживяване и надеждна разработка, за да работи сайтът за този процес всеки ден.'}
              </p>
              <p className="mt-5 text-zinc-400 leading-relaxed">
                {isEnglish
                  ? 'Our approach starts with your business goal, then turns it into a clear page structure, responsive design and conversion path. Explore our transparent service options or send us a brief for a tailored recommendation.'
                  : 'Подхождаме от бизнес целта Ви, след което я превръщаме в ясна структура на страниците, responsive дизайн и път към запитване. Разгледайте прозрачните ни услуги или ни изпратете кратко задание за персонализирана препоръка.'}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/uslugi" className="text-sm font-semibold text-blue-300 hover:text-blue-200 inline-flex items-center gap-1">
                  {isEnglish ? 'Web design services and pricing' : 'Услуги и цени за уеб дизайн'} <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/blog/kak-da-izberem-uebdizain-agenciya-plovdiv" className="text-sm font-semibold text-blue-300 hover:text-blue-200 inline-flex items-center gap-1">
                  {isEnglish ? 'How to choose a web design agency' : 'Как да изберете уеб дизайн агенция'} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <aside className="rounded-2xl p-7 sm:p-8 bg-zinc-900/45 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="w-5 h-5 text-blue-400" />
                <h2 className="font-serif text-2xl font-bold">{isEnglish ? 'What your project can include' : 'Какво може да включва Вашият проект'}</h2>
              </div>
              <ul className="space-y-5">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-3 text-sm leading-relaxed text-zinc-300">
                    <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-400 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        <section className="py-20 sm:py-24 border-y border-white/5 bg-zinc-950/60">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-blue-400 font-mono text-xs tracking-[0.18em] uppercase mb-4">{isEnglish ? 'Services for Plovdiv and Bulgaria' : 'Услуги за Пловдив и България'}</p>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight">{isEnglish ? 'From a focused landing page to a full business platform.' : 'От фокусирана landing страница до цялостна бизнес платформа.'}</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-11">
              {[
                { icon: <Smartphone className="w-5 h-5" />, title: isEnglish ? 'Business websites' : 'Бизнес сайтове', text: isEnglish ? 'Clear services, proof of work and direct contact paths.' : 'Ясни услуги, реални проекти и директни начини за контакт.' },
                { icon: <Search className="w-5 h-5" />, title: isEnglish ? 'SEO foundations' : 'SEO основа', text: isEnglish ? 'Search-friendly page structure, metadata and internal linking.' : 'Структура, метаданни и вътрешни връзки, удобни за търсачките.' },
                { icon: <Sparkles className="w-5 h-5" />, title: isEnglish ? 'Brand-led design' : 'Дизайн за бранда', text: isEnglish ? 'A visual system that matches the level of your offer.' : 'Визуална система, която отговаря на нивото на Вашата услуга.' },
                { icon: <MessageCircle className="w-5 h-5" />, title: isEnglish ? 'Conversion paths' : 'Път към запитване', text: isEnglish ? 'Calls to action and contact flows that make it easy to enquire.' : 'Ясни призиви и контактни форми, които улесняват запитването.' },
              ].map((service) => (
                <div key={service.title} className="rounded-2xl p-6 border border-white/10 bg-luxury-black">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-300 flex items-center justify-center mb-5">{service.icon}</div>
                  <h3 className="font-bold text-lg mb-3">{service.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{service.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[0.8fr_1.2fr] gap-12 items-start">
            <div>
              <p className="text-blue-400 font-mono text-xs tracking-[0.18em] uppercase mb-4">{isEnglish ? 'Who we help' : 'За кого е подходящо'}</p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight">{isEnglish ? 'Designed for businesses ready to be clearer online.' : 'Създадено за бизнеси, готови да бъдат по-ясни онлайн.'}</h2>
              <p className="mt-5 text-zinc-400 leading-relaxed">
                {isEnglish
                  ? 'The strongest projects begin with a clear business problem and a useful action for the visitor. We can help shape that into a website with a practical scope.'
                  : 'Най-силните проекти започват с ясна бизнес нужда и полезно действие за посетителя. Помагаме да превърнете това в сайт с практичен обхват.'}
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {suitableFor.map((item) => (
                <div key={item} className="p-5 rounded-xl bg-zinc-900/40 border border-white/5 text-zinc-200 font-medium">{item}</div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-24 border-t border-white/5 bg-zinc-950/60">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-blue-400 font-mono text-xs tracking-[0.18em] uppercase mb-4">{isEnglish ? 'Questions before you start' : 'Въпроси преди старта'}</p>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight mb-10">{isEnglish ? 'Web design in Plovdiv: common questions' : 'Уеб дизайн в Пловдив: често задавани въпроси'}</h2>
            <div className="space-y-4">
              {faqItems.map((item) => (
                <details key={item.question} className="group rounded-xl border border-white/10 bg-luxury-black p-6">
                  <summary className="cursor-pointer list-none flex items-center justify-between gap-4 font-semibold text-white">
                    {item.question}
                    <span className="text-blue-400 group-open:rotate-45 transition-transform text-2xl leading-none">+</span>
                  </summary>
                  <p className="pt-4 text-sm leading-relaxed text-zinc-400">{item.answer}</p>
                </details>
              ))}
            </div>
            <div className="mt-12 rounded-2xl border border-blue-500/20 bg-blue-500/5 p-8 sm:p-10 text-center">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold">{isEnglish ? 'Ready to discuss your website?' : 'Готови ли сте да обсъдим Вашия сайт?'}</h2>
              <p className="mt-4 max-w-2xl mx-auto text-zinc-300 leading-relaxed">
                {isEnglish ? 'Tell us what your business needs and we will help you choose a sensible next step.' : 'Разкажете ни от какво има нужда Вашият бизнес и ще Ви помогнем да изберете разумната следваща стъпка.'}
              </p>
              <button
                onClick={() => openQuoteModal('Web Design Plovdiv')}
                className="mt-7 inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 transition-colors font-semibold text-sm"
              >
                {isEnglish ? 'Request a Free Consultation' : 'Заяви безплатна консултация'}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>
      </article>
    </PageTransition>
  );
}
