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
  contentEn?: string;
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
    description: 'Пълен анализ на цените за изработка на уебсайтове в България. Разберете какво е справедливо ценообразуване и какво получавате за инвестицията си.',
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
    description: 'Открийте 5-те критични елемента, които трябва да има всеки успешен бизнес сайт — от бързо зареждане до SEO основа.',
    descriptionEn: 'Discover the 5 critical elements every successful business website must have. From fast loading to SEO optimization.',
    content: `
      <h2>Основни елементи на успешния бизнес сайт</h2>
      
      <h3>1. Бързо зареждане</h3>
      <p>Посетителите очакват страниците да се зареждат бързо. Проверете основните шаблони, изображенията и скриптовете, за да намалите ненужното забавяне.</p>

      <h3>2. Мобилна адаптивност</h3>
      <p>Много посетители ще отворят сайта от телефон. Мобилната версия трябва да е четлива, удобна и да води ясно към следващото действие.</p>

      <h3>3. Ясен Call-to-Action</h3>
      <p>Посетителите трябва да знаят точно какво да направят — да се обадят, да изпратят имейл или да попълнят форма.</p>

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
  },
  'sobstven-sait-sreshtu-socialni-mrezhi': {
    id: '6',
    slug: 'sobstven-sait-sreshtu-socialni-mrezhi',
    title: 'Само Instagram и Facebook или собствен сайт: какво е нужно на местния бизнес?',
    titleEn: 'Instagram and Facebook or Your Own Website: What Does a Local Business Need?',
    excerpt: 'Социалните мрежи са полезни, но собствената уеб страница дава на бизнеса място, структура и контакт, които той контролира.',
    excerptEn: 'Social media is useful, but an owned website gives a business a place, structure, and contact path it controls.',
    date: '2026-08-14',
    category: 'Практични решения',
    categoryEn: 'Practical Solutions',
    readTime: '7 мин',
    author: 'AR Studio',
    keywords: 'собствен сайт или социални мрежи, бизнес сайт Пловдив, Facebook Instagram бизнес, уебсайт за местен бизнес',
    keywordsEn: 'own website or social media, local business website, Facebook Instagram business, website for local business',
    description: 'Практично сравнение между социални мрежи и собствен сайт. Научете кога бизнесът има нужда от собствено място за услуги, контакти, резервации и запитвания.',
    descriptionEn: 'A practical comparison between social media and an owned website. Learn when a business needs its own place for services, contacts, bookings, and enquiries.',
    content: `
      <h2>Социалните мрежи са канал, а сайтът е собствената Ви база</h2>
      <p>Facebook и Instagram са добри места за внимание, снимки и бърза комуникация. Те обаче зависят от чужда платформа, променящи се правила и начин, по който алгоритъмът показва публикациите Ви. Собственият сайт дава на бизнеса ясна, постоянна и лесна за споделяне адресна точка.</p>
      <p>Това не означава да избирате само едното. Социалните мрежи могат да водят хората към сайта, а сайтът да им даде подредена информация и конкретна следваща стъпка.</p>

      <h3>1. Какво клиентът трябва да разбере за секунди</h3>
      <p>На началната страница трябва да е ясно какво предлагате, за кого е услугата и как човек да продължи. При ресторант това може да е меню и резервация. При салон - услуги и записване. При професионална услуга - обхват, доверие и контакт.</p>

      <h3>2. Как сайтът намалява излишните въпроси</h3>
      <p>Добрата страница предварително отговаря на основните въпроси: къде се намирате, какво включва услугата, какви са цените или начинът за оферта, кога работите и как се свързвате с Вас. Така разговорът започва с по-информиран клиент, вместо с повторение на една и съща базова информация.</p>

      <h3>3. Кога социалният профил не е достатъчен</h3>
      <ul>
        <li>Когато имате няколко услуги, цени или различни видове клиенти.</li>
        <li>Когато искате да се намирате по конкретни услуги и локации в Google.</li>
        <li>Когато клиентът трябва да резервира, да изпрати запитване или да направи поръчка.</li>
        <li>Когато искате да покажете портфолио, отзиви и процес на работа на едно място.</li>
      </ul>

      <h3>4. Минималната добра структура</h3>
      <p>За много местни бизнеси добрият старт не е огромен портал. Обикновено са достатъчни ясна начална страница, страници за услуги, портфолио или галерия, често задавани въпроси, контакти и удобен мобилен бутон за действие. Важното е всяка секция да помага на посетителя да вземе решение.</p>

      <h2>Практичен извод</h2>
      <p>Използвайте социалните мрежи, за да достигате до хора, а собствения сайт, за да им дадете надеждно място с пълната информация. Преди да започнете проект, запишете трите най-важни действия, които клиентът трябва да може да извърши, и подредете сайта около тях.</p>
      <p>Можете да разгледате <a href="/portfolio">реалните проекти на AR Studio</a> или <a href="/uslugi">услугите и цените</a>, за да сравните подхода с нуждите на Вашия бизнес.</p>
    `
  },
  'sait-za-agenciya-imoti-obqvi': {
    id: '7',
    slug: 'sait-za-agenciya-imoti-obqvi',
    title: 'Сайт за агенция за имоти: как собствените обяви превръщат интереса в запитвания',
    titleEn: 'A Real Estate Website: How Your Own Listings Turn Interest into Enquiries',
    excerpt: 'Практична структура за агенции за недвижими имоти: каталог, филтри, детайлна обява, контакт и следваща стъпка.',
    excerptEn: 'A practical structure for real estate agencies: catalogue, filters, property details, contact, and a clear next step.',
    date: '2026-08-14',
    category: 'Индустрия',
    categoryEn: 'Industry',
    readTime: '8 мин',
    author: 'AR Studio',
    keywords: 'сайт за агенция за имоти, сайт за недвижими имоти, обяви за имоти, каталог имоти, уебсайт Пловдив',
    keywordsEn: 'real estate agency website, property listings website, real estate catalogue, property website, Plovdiv website',
    description: 'Как да структурирате сайт за агенция за имоти със собствен каталог, филтри, детайлни обяви и лесен контакт за оглед или консултация.',
    descriptionEn: 'How to structure a real estate agency website with its own catalogue, filters, detailed listings, and an easy path to a viewing or consultation.',
    content: `
      <h2>Собственият каталог превръща сайта в работен инструмент</h2>
      <p>Сайтът на агенцията за имоти не трябва да бъде само визитка с телефон и няколко снимки. Когато обявите са подредени в собствен каталог, посетителят може да разглежда имотите в контекста на бранда, услугите и района, в който работите.</p>
      <p>Платените портали могат да бъдат допълнителен канал, но собствената платформа намалява зависимостта от едно място и Ви позволява да изграждате директна връзка с потенциалния клиент.</p>

      <h3>1. Каталог, който се използва лесно</h3>
      <p>Списъкът с имоти трябва да позволява бързо ориентиране по тип, локация, цена и ключови характеристики. Филтрите не са декоративна функция: те съкращават пътя между общия интерес и конкретния имот.</p>

      <h3>2. Детайлна страница на всяка обява</h3>
      <p>Добрата обява показва качествени снимки, основните параметри, описание на имота, предимства на района и ясна следваща стъпка. Ако липсва важна информация, клиентът най-често отлага контакта или задава въпрос, на който страницата е могла да отговори.</p>

      <h3>3. Контакт според намерението на посетителя</h3>
      <p>Не всеки посетител е готов да се обади веднага. Затова страницата може да предложи кратка форма за интерес, телефон, имейл и заявка за оглед. Формулировката трябва да е конкретна: „Попитайте за този имот“ или „Заявете оглед“, а не само общо „Свържете се с нас“.</p>

      <h3>4. Доверие и прозрачност</h3>
      <p>Клиентът избира не само имот, а и агенция, с която да работи. Представете екипа, процеса, районите, в които сте активни, и информацията, която помага на купувача или наемателя да вземе информирано решение. Актуалните контакти и ясната локация също са част от това доверие.</p>

      <h3>5. Как да започнете без излишна сложност</h3>
      <ul>
        <li>Опишете най-честите типове имоти и въпроси на клиентите.</li>
        <li>Изберете малък, но добре подреден стартов каталог.</li>
        <li>Подгответе единен формат за снимки, параметри и описания.</li>
        <li>Проверете мобилното разглеждане и формата за запитване.</li>
        <li>Добавете процес за обновяване или сваляне на неактуални обяви.</li>
      </ul>

      <h2>Сайтът трябва да помага на екипа, не само да изглежда добре</h2>
      <p>Най-полезният сайт за агенция за имоти е този, който улеснява едновременно посетителя и екипа: клиентът намира подходящ имот и прави запитване, а агенцията има собствено място за представяне и развитие на каталога си.</p>
      <p>Вижте <a href="/portfolio">проекта на AR Studio за BelEstateGroup</a> или разгледайте страницата за <a href="/uslugi/izrabotka-na-sait-plovdiv">изработка на сайт в Пловдив</a>.</p>
    `
  }
};

const englishContentBySlug: Record<string, string> = {
  'kolko-struva-izrabotka-na-sait': `<h2>Website pricing is a scope question</h2><p>A website price depends on what the business needs the site to do: present services, collect enquiries, support reservations, sell products, or connect to an existing system. Comparing only the first number usually hides the important details.</p><h3>What should be clear in a proposal?</h3><ul><li>The pages and purpose of each page</li><li>The content and images needed</li><li>The functions included</li><li>How launch and future support are handled</li></ul><p>A useful proposal explains the scope, decisions, and next steps without hidden assumptions.</p>`,
  '5-neshta-koito-vseki-nov-biznes-sait-trjabva-da-pritezava': `<h2>Five foundations for a useful business website</h2><h3>1. A clear next action</h3><p>Visitors should quickly understand whether to call, send an enquiry, reserve, or buy. The primary action must be visible on a phone too.</p><h3>2. Mobile-first information</h3><p>Services, prices, location, and contact details should remain readable and easy to use on a small screen.</p><h3>3. A structure search engines can understand</h3><p>Descriptive titles, useful headings, internal links, and a sitemap give people and search engines a clearer path through the site.</p><h3>4. Proof and context</h3><p>Real projects, permission-based reviews, and specific examples build more trust than generic claims.</p><h3>5. A maintainable path forward</h3><p>A site should be ready for updated content and future functions without needing to start over.</p>`,
  'restorant-plovdiv-digitalno-menu-i-sait': `<h2>A restaurant website should reduce friction before the visit</h2><p>Guests usually want the menu, current location, opening information, and a simple reservation path. If those details are difficult to find, the visitor often moves on.</p><h3>Make the menu comfortable on a phone</h3><p>A digital menu should open quickly, stay readable without zooming, and be practical to update. A QR code can point directly to it without requiring an app.</p><h3>Let guests choose how to contact you</h3><p>Some people prefer a call, others a form, booking tool, or map link. A useful restaurant website makes these routes visible without unnecessary steps.</p>`,
  'kak-da-izberem-uebdizain-agenciya-plovdiv': `<h2>Choose a partner, not only a visual style</h2><p>When comparing web design agencies, start with the business goal: who should the website reach and what should that person do next? A polished first screen is useful only when it supports that journey.</p><h3>Ask to see real work</h3><p>Open live projects. Check the mobile experience, the clarity of information, and whether it is easy to take the next action.</p><h3>Ask how the process works</h3><p>A reliable partner can explain how content, design, development, approval, testing, and launch fit together.</p><h3>Compare scope, not only price</h3><p>Look at page structure, contact paths, mobile work, technical SEO foundations, content guidance, and future support.</p>`,
  'kak-ai-i-ar-transformirat-biznesa-v-balgarija-2026': `<h2>Technology helps when it removes a real problem</h2><p>AI and AR are not automatically valuable because they are new. They matter when they make information easier to find, help a team respond faster, or let a customer understand an offer before contacting the business.</p><h3>Start with a narrow use case</h3><p>For a local business, that can mean a better product finder, clearer support information, an automated internal task, or an interactive way to show an item or space.</p><p>A fast, understandable website and direct contact path matter before advanced features. New technology should strengthen that foundation.</p>`,
  'sobstven-sait-sreshtu-socialni-mrezhi': `<h2>Social platforms and a website do different jobs</h2><p>Instagram and Facebook are useful for reach, updates, and conversation. A business website provides a controlled home for the full offer, services, contacts, proof, and the action a customer should take next.</p><h3>What a business controls on its own website</h3><ul><li>Its structure and messaging</li><li>Its enquiry, booking, or sales path</li><li>Its portfolio, reviews, and longer-term content</li><li>The connection between social profiles and contact details</li></ul><p>For many local businesses the sensible approach is not social media or a website. It is social channels for discovery and a website for clear information and conversion.</p>`,
  'sait-za-agenciya-imoti-obqvi': `<h2>Own listings give an agency a home it can develop</h2><p>Property portals can be useful channels, but an agency’s own website creates a place where listings, brand, contact paths, and future content can be organised without relying on a single external platform.</p><h3>Help the visitor find the right property</h3><p>Useful filters, clear listing cards, strong photos, price and location details, and an uncomplicated enquiry path help a visitor move from interest to a specific question.</p><h3>Help the team manage the conversation</h3><p>When each listing has a clear page and contact action, the agency can guide enquiries to the right person while keeping the presentation consistent with its own brand.</p>`,
};

for (const post of Object.values(blogPostsData)) {
  post.contentEn = englishContentBySlug[post.slug];
}

export function getBlogPostsList() {
  return Object.values(blogPostsData).sort((a, b) => b.date.localeCompare(a.date)).map(post => ({
    id: post.id,
    slug: post.slug,
    title: post.title,
    titleEn: post.titleEn,
    excerpt: post.excerpt,
    excerptEn: post.excerptEn,
    date: post.date,
    category: post.category,
    categoryEn: post.categoryEn,
    readTime: post.readTime
  }));
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  return blogPostsData[slug] || null;
}
