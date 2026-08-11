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
  'kak-ai-i-ar-transformirat-biznesa-v-balgarija-2026': {
    id: '4',
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
      <p>Изкуственият интелект вече не е само чатбот. Съвременните AI системи в сайтовете на AR Studio анализират поведението на потребителите и предлагат персонализирани решения в реално време, което увеличава конверсиите с над 40%.</p>

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
