/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import { useLanguage } from '../context/LanguageContext';
import { usePageMeta } from '../hooks/usePageMeta';
import { Calendar, ArrowLeft } from 'lucide-react';

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  readTime: string;
  author: string;
  content: string;
  excerpt: string;
}

const blogPostsData: { [key: string]: BlogPost } = {
  'kolko-struva-izrabotka-na-sait': {
    slug: 'kolko-struva-izrabotka-na-sait',
    title: 'Колко струва изработката на уебсайт в България през 2026?',
    date: '2026-08-08',
    category: 'Ценообразуване',
    readTime: '5 мин',
    author: 'Андрей',
    excerpt: 'Разберете реалните цени за професионална изработка на сайт.',
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
    slug: '5-neshta-koito-vseki-nov-biznes-sait-trjabva-da-pritezava',
    title: '5 неща, които всеки нов бизнес сайт трябва да притежава',
    date: '2026-08-07',
    category: 'Ръководства',
    readTime: '7 мин',
    author: 'Румен',
    excerpt: 'Ключови функции, които трябва да има вашия сайт.',
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
    slug: 'restorant-plovdiv-digitalno-menu-i-sait',
    title: 'Защо вашият ресторант в Пловдив се нуждае от дигитално меню и собствен сайт?',
    date: '2026-08-06',
    category: 'Индустрия',
    readTime: '6 мин',
    author: 'Андрей',
    excerpt: 'Как модерният ресторант привлича клиенти онлайн.',
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
  }
};

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const { language } = useLanguage();
  const post = slug ? blogPostsData[slug] : null;

  usePageMeta({
    title: post ? `${post.title} | AR Studio Blog` : 'Blog | AR Studio',
    description: post ? post.excerpt : 'Прочетете нашите статии за уеб дизайн и дигитален маркетинг.',
    keywords: post ? post.category : 'блог',
    canonical: post ? `https://ar-studio.site/blog/${slug}` : 'https://ar-studio.site/blog'
  })

  if (!post) {
    return (
      <PageTransition>
        <div className="min-h-screen bg-luxury-black pt-32 pb-20 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white mb-4">
              {language === 'en' ? 'Post not found' : 'Статията не е намерена'}
            </h1>
            <Link to="/blog" className="text-blue-400 hover:text-blue-300">
              {language === 'en' ? 'Back to blog' : 'Назад към блога'}
            </Link>
          </div>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="min-h-screen bg-luxury-black pt-32 pb-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Back Link */}
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {language === 'en' ? 'Back to blog' : 'Назад към блога'}
          </Link>

          {/* Article Header */}
          <article>
            <header className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs font-semibold text-blue-400">
                  {post.category}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {post.title}
              </h1>

              <div className="flex items-center gap-4 text-sm text-zinc-400 pb-8 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(post.date).toLocaleDateString('bg-BG')}</span>
                </div>
                <span>•</span>
                <span>{post.readTime}</span>
                <span>•</span>
                <span>{language === 'en' ? 'By' : 'От'} {post.author}</span>
              </div>
            </header>

            {/* Article Content */}
            <div className="prose prose-invert max-w-none mb-12">
              <div 
                className="text-zinc-300 space-y-4"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>

            {/* CTA */}
            <div className="mt-12 p-8 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-xl text-center">
              <h3 className="text-xl font-bold text-white mb-2">
                {language === 'en' 
                  ? 'Ready to build your website?'
                  : 'Готови ли сте да изградите вашия сайт?'}
              </h3>
              <p className="text-zinc-400 mb-4">
                {language === 'en'
                  ? 'Contact us for a free consultation.'
                  : 'Свържете се с нас за безплатна консултация.'}
              </p>
              <Link
                to="/kontakti"
                className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
              >
                {language === 'en' ? 'Get in touch' : 'Свържете се'}
              </Link>
            </div>
          </article>
        </div>
      </div>
    </PageTransition>
  );
}
