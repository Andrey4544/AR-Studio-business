/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  titleEn?: string;
  excerpt: string;
  excerptEn?: string;
  date: string;
  category: string;
  categoryEn?: string;
  readTime: string;
  author: string;
  content: string;
  keywords: string;
  keywordsEn?: string;
  description: string;
  descriptionEn?: string;
  ogImage?: string;
}

export const blogPostsData: { [key: string]: BlogPost } = {
  'kolko-struva-izrabotka-na-sait': {
    id: '1',
    slug: 'kolko-struva-izrabotka-na-sait',
    title: 'Колко струва изработката на уебсайт в България през 2026?',
    titleEn: 'How Much Does Website Development Cost in Bulgaria in 2026?',
    excerpt: 'Разберете реалните цени за професионална изработка на сайт. Анализ на пазара и какво получавате за парите си.',
    excerptEn: 'Discover real prices for professional website development. Market analysis and what you get for your money.',
    date: '2026-08-08',
    category: 'Ценообразуване',
    categoryEn: 'Pricing',
    readTime: '5 мин',
    author: 'Андрей',
    keywords: 'изработка на сайтове, цена на сайт, уеб дизайн цена, уебсайт България, разработка на сайт, SEO оптимизация цена',
    keywordsEn: 'website development cost, web design price, website pricing Bulgaria, website development, SEO optimization cost',
    description: 'Полен анализ на цените за изработка на уебсайтове в България. Разберете какво е справедливо ценообразуване и какво получавате за инвестицията си.',
    descriptionEn: 'Complete analysis of website development prices in Bulgaria. Understand fair pricing and what you get for your investment.',
    content: `
      <h2>Реалните цени на пазара</h2>
      <p>Когато търсите уебсайт за вашия бизнес, един от първите въпроси е "Колко ще струва?". Отговорът зависи от много фактори, но ние ще ви помогнем да разберете какво е справедливо.</p>
      
      <h3>Ценови диапазони в България</h3>
      <ul>
        <li><strong>Лендинг страница:</strong> €200-500 - Идеално за стартъпи и малки бизнеси</li>
        <li><strong>Бизнес сайт (5-10 страници):</strong> €400-1000 - За ресторанти, хотели, адвокати</li>
        <li><strong>Онлайн магазин:</strong> €800-2000 - За е-комерс и продажби</li>
        <li><strong>Персонализирана система:</strong> €2000+ - За комплексни решения</li>
      </ul>

      <h3>Какво влияе на цената?</h3>
      <p>Дизайнът, функционалността, SEO оптимизацията и поддръжката - всичко това влияе на крайната цена. В AR Studio ние предлагаме прозрачно ценообразуване без скрити разходи.</p>

      <h3>Инвестиция или разход?</h3>
      <p>Помислете за сайта като инвестиция, която ще генерира нови клиенти. Добър сайт може да се окупи в първите 3-6 месеца чрез нови запитвания и продажби.</p>
    `
  },
  '5-neshta-koito-vseki-nov-biznes-sait-trjabva-da-pritezava': {
    id: '2',
    slug: '5-neshta-koito-vseki-nov-biznes-sait-trjabva-da-pritezava',
    title: '5 неща, които всеки нов бизнес сайт трябва да притежава',
    titleEn: '5 Things Every New Business Website Must Have',
    excerpt: 'Ключови функции, които трябва да има вашия сайт, за да привлече клиенти и да конвертира посетители.',
    excerptEn: 'Essential features your website must have to attract clients and convert visitors.',
    date: '2026-08-07',
    category: 'Ръководства',
    categoryEn: 'Guides',
    readTime: '7 мин',
    author: 'Румен',
    keywords: 'бизнес сайт, уеб дизайн, SEO, мобилна адаптивност, call-to-action, контактна форма, уебсайт функции',
    keywordsEn: 'business website, web design, SEO, mobile responsive, call-to-action, contact form, website features',
    description: 'Откройте 5-те критични елемента, които трябва да има всеки успешен бизнес сайт. От бързо зареждане до SEO оптимизация.',
    descriptionEn: 'Discover the 5 critical elements every successful business website must have. From fast loading to SEO optimization.',
    content: `
      <h2>Основни елементи на успешния бизнес сайт</h2>
      
      <h3>1. Бързо зареждане</h3>
      <p>Посетителите напускат сайтовете, които се зареждат повече от 3 секунди. Убедете се, че вашия сайт е оптимизиран за скорост.</p>

      <h3>2. Мобилна адаптивност</h3>
      <p>70% от трафика идва от мобилни устройства. Вашия сайт трябва да изглежда перфектно на телефон.</p>

      <h3>3. Ясен Call-to-Action</h3>
      <p>Посетителите трябва да знаят точно какво да направят - да позвонят, да напишат имейл или да попълнят форма.</p>

      <h3>4. SEO оптимизация</h3>
      <p>Без SEO, никой няма да намери вашия сайт в Google. Включете релевантни ключови думи и оптимизирайте метаданните.</p>

      <h3>5. Контактна информация</h3>
      <p>Направете лесно за клиентите да се свържат с вас - телефон, имейл, форма за контакт.</p>
    `
  },
  'restorant-plovdiv-digitalno-menu-i-sait': {
    id: '3',
    slug: 'restorant-plovdiv-digitalno-menu-i-sait',
    title: 'Защо вашият ресторант в Пловдив се нуждае от дигитално меню и собствен сайт?',
    titleEn: 'Why Your Plovdiv Restaurant Needs a Digital Menu and Website',
    excerpt: 'Как модерният ресторант привлича клиенти онлайн. Практически съвети за хотели и заведения.',
    excerptEn: 'How modern restaurants attract customers online. Practical tips for hotels and establishments.',
    date: '2026-08-06',
    category: 'Индустрия',
    categoryEn: 'Industry',
    readTime: '6 мин',
    author: 'Андрей',
    keywords: 'ресторант Пловдив, дигитално меню, уебсайт ресторант, онлайн резервации, Google отзиви, хотел сайт',
    keywordsEn: 'Plovdiv restaurant, digital menu, restaurant website, online reservations, Google reviews, hotel website',
    description: 'Научете защо вашият ресторант или хотел в Пловдив се нуждае от модерен сайт и дигитално меню за привличане на повече клиенти.',
    descriptionEn: 'Learn why your Plovdiv restaurant or hotel needs a modern website and digital menu to attract more customers.',
    content: `
      <h2>Дигиталната трансформация на ресторантите</h2>
      
      <h3>Защо е важно дигиталното меню?</h3>
      <p>Гостите могат да видят вашето меню преди да дойдат. Това означава повече резервации и по-добра подготовка.</p>

      <h3>Собствен сайт срещу Facebook страница</h3>
      <p>Facebook е добро начало, но собствен сайт ви дава пълен контрол и по-добра видимост в Google.</p>

      <h3>Онлайн резервации</h3>
      <p>Позволете на клиентите да резервират маса директно от вашия сайт. Това увеличава броя на гостите.</p>

      <h3>Отзиви и рейтинги</h3>
      <p>Добрите отзиви в Google привличат нови клиенти. Насърчавайте гостите да оставят мнение.</p>

      <h3>Примери от Пловдив</h3>
      <p>Ресторант Tomato и други успешни заведения в Пловдив вече имат модерни сайтове и дигитални менюта, което им помага да привличат повече клиенти.</p>
    `
  },
  'kak-da-izberem-uebdizain-agenciya-plovdiv': {
    id: '4',
    slug: 'kak-da-izberem-uebdizain-agenciya-plovdiv',
    title: 'Как да изберете уеб дизайн агенция в Пловдив: практичен наръчник за бизнеса',
    titleEn: 'How to Choose a Web Design Agency in Plovdiv: A Practical Business Guide',
    excerpt: 'Практичен списък с въпроси, критерии и очаквани резултати, когато избирате партньор за нов сайт в Пловдив.',
    excerptEn: 'A practical framework of questions, criteria, and outcomes to consider when choosing a partner for a new website in Plovdiv.',
    date: '2026-08-11',
    category: 'Ръководства',
    categoryEn: 'Guides',
    readTime: '8 мин',
    author: 'AR Studio',
    keywords: 'уеб дизайн агенция Пловдив, уеб дизайн Пловдив, изработка на сайтове Пловдив, избор на уеб дизайн, сайт за бизнес',
    keywordsEn: 'web design agency Plovdiv, web design Plovdiv, website development Plovdiv, choosing a web design agency, business website',
    description: 'Практичен наръчник за избор на уеб дизайн агенция в Пловдив. Научете как да сравнявате портфолио, процес, SEO основа и комуникация преди новия си сайт.',
    descriptionEn: 'A practical guide to choosing a web design agency in Plovdiv. Learn how to compare portfolios, process, SEO foundations, and communication before starting a new website.',
    content: `
      <h2>Новият сайт е бизнес решение, не просто визуален проект</h2>
      <p>Когато търсите уеб дизайн агенция в Пловдив, лесно е да сравните само цената или първата визия. По-полезният въпрос е дали партньорът разбира как сайтът ще помогне на Вашия бизнес: да обяснява услугите Ви, да спечели доверие и да направи запитването лесно.</p>
      <p>Добрият избор започва с ясен разговор за аудиторията, офертата и действията, които искате посетителят да предприеме. Следващите критерии помагат да сравните предложенията по смисъл, а не само по брой страници.</p>

      <h3>1. Вижте релевантно портфолио, а не само красиви снимки</h3>
      <p>Потърсете примери, близки до Вашия тип бизнес: услуги, ресторант, хотел, магазин или B2B компания. Преценете дали страниците ясно показват какво предлага клиентът, дали са удобни на телефон и дали контактът е лесен за намиране. Попитайте каква е била задачата на всеки проект и как е решена.</p>

      <h3>2. Поискайте ясен процес и реалистичен обхват</h3>
      <p>Надеждният процес включва откриване на нуждите, структура на съдържанието, дизайн, разработка, проверка и публикуване. В началото трябва да е ясно кой подготвя текстове и снимки, как се одобряват етапите и какво включва поддръжката. Така избягвате неясните срокове и допълнителните изненади.</p>

      <h3>3. Проверете основата за видимост в Google</h3>
      <p>Никой коректен партньор не може да обещае първо място в Google. Той обаче трябва да може да обясни как ще бъдат подготвени страниците за търсене: ясни заглавия и описания, удобни за хората URL адреси, вътрешни връзки, mobile-first дизайн, бързи и оптимизирани изображения и полезно съдържание за услугите Ви.</p>
      <p>За локален бизнес в Пловдив сайтът е само една част от картината. Точната информация в Google Business Profile, истинските клиентски отзиви и реалните местни споменавания подкрепят видимостта във времето.</p>

      <h3>4. Изберете директна и разбираема комуникация</h3>
      <p>Преди да подпишете, проверете кой ще работи по проекта и как ще общувате. Получавате по-добър резултат, когато можете да обсъждате идеи с хората, които вземат дизайнерските и техническите решения. Кратките регулярни проверки са по-ценни от дълги списъци с неясни обещания.</p>

      <h3>5. Сравнявайте очакваната стойност, не само началната цена</h3>
      <p>Най-евтината оферта често изключва стратегия, съдържание, техническа поддръжка или време за качествена проверка. Сравнете какво реално ще получите: брой и цел на страниците, форма за запитване, основна SEO подготовка, мобилно изживяване, инструкции за управление и възможност сайтът да се развива.</p>

      <h2>Въпроси, които да зададете преди да започнете</h2>
      <ul>
        <li>Кой е идеалният посетител на сайта и кое действие е най-важно за него?</li>
        <li>Как ще изглежда структурата на началната страница и услугите?</li>
        <li>Кои технически SEO елементи са включени при публикуване?</li>
        <li>Как ще работи сайтът на телефон и как ще се тества?</li>
        <li>Какво се случва след публикуването и кой притежава готовия сайт?</li>
      </ul>

      <h2>Следващата разумна стъпка</h2>
      <p>Подгответе кратко описание на услугите си, какъв клиент искате да привлечете, примери за сайтове, които харесвате, и целта на новия проект. След това можете да <a href="/web-design-plovdiv">разгледате как AR Studio работи с бизнеси в Пловдив</a> или да сравните <a href="/uslugi">услугите и цените</a>, преди да заявите консултация.</p>
    `
  },
  'kak-ai-i-ar-transformirat-biznesa-v-balgarija-2026': {
    id: '5',
    slug: 'kak-ai-i-ar-transformirat-biznesa-v-balgarija-2026',
    title: 'Как AI и AR трансформират бизнеса в България през 2026?',
    titleEn: 'How AI and AR are Transforming Business in Bulgaria in 2026?',
    excerpt: 'Научете как изкуственият интелект и добавената реалност помагат на българските фирми да печелят повече клиенти.',
    excerptEn: 'Learn how AI and Augmented Reality are helping Bulgarian companies win more clients.',
    date: '2026-08-11',
    category: 'Технологии',
    categoryEn: 'Technology',
    readTime: '8 мин',
    author: 'Андрей',
    keywords: 'AI бизнес България, добавена реалност, AR Studio, дигитална трансформация, изкуствен интелект маркетинг, бъдеще на бизнеса',
    keywordsEn: 'AI business Bulgaria, augmented reality, AR Studio, digital transformation, AI marketing, future of business',
    description: 'Анализ на най-новите технологични тенденции в България. Как AI и AR променят начина, по който привличаме клиенти и продаваме.',
    descriptionEn: 'Analysis of the latest tech trends in Bulgaria. How AI and AR are changing the way we attract clients and sell.',
    content: `
      <h2>Новата ера на българския бизнес</h2>
      <p>През 2026 година технологичната сцена в България претърпява революция. Вече не е достатъчно просто да имате уебсайт - трябва да имате интелигентна платформа, която работи за вас денонощно.</p>
      
      <h3>1. AI Асистенти за продажби</h3>
      <p>Изкуственият интелект вече не е само чатбот. Когато е приложен с ясна цел и внимателно тестване, той може да помогне на бизнеса да отговаря по-бързо на често задавани въпроси и да насочва посетителите към полезна следваща стъпка.</p>

      <h3>2. AR Визуализация на продукти</h3>
      <p>Добавената реалност (AR) позволява на клиентите ви да "пробват" продуктите или да видят услугите ви в собствената си среда преди да купят. Това е критично за мебелни магазини, интериорен дизайн и дори ресторанти.</p>

      <h3>3. Автоматизиран маркетинг</h3>
      <p>Интеграцията на AI позволява автоматизиране на събирането на отзиви и управлението на репутацията, точно както новата система, която внедрихме в AR Studio.</p>

      <h3>Защо да изберете AR Studio?</h3>
      <p>Ние не просто правим сайтове - ние изграждаме технологично бъдеще за вашия бизнес в Пловдив и цяла България. Нашите решения са проектирани да ви донесат максимален брой клиенти чрез най-новите SEO и AI техники.</p>
    `
  }
};

export function getBlogPostsList() {
  return Object.values(blogPostsData).map(post => ({
    id: post.id,
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    date: post.date,
    category: post.category,
    readTime: post.readTime
  }));
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  return blogPostsData[slug] || null;
}
