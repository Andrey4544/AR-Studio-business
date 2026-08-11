/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import { useLanguage } from '../context/LanguageContext';
import { usePageMeta } from '../hooks/usePageMeta';
import { getBlogPostBySlug } from '../data/blogData';
import { Calendar, ArrowLeft } from 'lucide-react';

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const { language } = useLanguage();
  const post = slug ? getBlogPostBySlug(slug) : null;

  // Generate SEO meta tags
  usePageMeta({
    title: post ? `${post.title} | AR Studio Blog` : 'Blog | AR Studio',
    description: post ? (language === 'en' ? post.descriptionEn : post.description) : 'Прочетете нашите статии за уеб дизайн и дигитален маркетинг.',
    keywords: post ? (language === 'en' ? post.keywordsEn : post.keywords) : 'блог',
    canonical: post ? `https://www.ar-studio.site/blog/${slug}` : 'https://www.ar-studio.site/blog',
    ogType: post ? 'article' : 'website'
  });

  // Add Article schema for SEO
  React.useEffect(() => {
    if (post) {
      const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        'headline': post.title,
        'description': language === 'en' ? post.descriptionEn : post.description,
        'image': post.ogImage || 'https://www.ar-studio.site/assets/logo.png',
        'datePublished': post.date,
        'author': {
          '@type': 'Person',
          'name': post.author
        },
        'publisher': {
          '@type': 'Organization',
          'name': 'AR Studio',
          'logo': {
            '@type': 'ImageObject',
            'url': 'https://www.ar-studio.site/assets/logo.png'
          }
        },
        'mainEntityOfPage': {
          '@type': 'WebPage',
          '@id': `https://www.ar-studio.site/blog/${post.slug}`
        }
      };

      let script = document.querySelector('script[data-article-schema]');
      if (!script) {
        script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        script.setAttribute('data-article-schema', 'true');
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(articleSchema);
    }
  }, [post, language]);

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
