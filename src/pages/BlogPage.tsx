/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import { useLanguage } from '../context/LanguageContext';
import { usePageMeta } from '../hooks/usePageMeta';
import { getBlogPostsList } from '../data/blogData';
import { Calendar, ArrowRight } from 'lucide-react';

const blogPosts = getBlogPostsList();

export default function BlogPage() {
  const { language } = useLanguage();

  usePageMeta({
    title: language === 'en'
      ? 'Web Design, SEO & Business Growth Blog | AR Studio Plovdiv'
      : 'Блог за уеб дизайн, SEO и растеж на бизнеса | AR Studio Пловдив',
    description: language === 'en'
      ? 'Practical articles on web design, website development, local SEO, pricing, and digital growth for businesses in Plovdiv and Bulgaria.'
      : 'Практични статии за уеб дизайн, изработка на сайтове, локално SEO, цени и дигитален растеж за бизнеси в Пловдив и България.',
    keywords: language === 'en'
      ? 'web design Plovdiv blog, local SEO Bulgaria, website development, business website advice'
      : 'блог уеб дизайн Пловдив, локално SEO България, изработка на сайтове, съвети за бизнес сайт',
    canonical: 'https://www.ar-studio.site/blog'
  });

  return (
    <PageTransition>
      <div className="min-h-screen bg-luxury-black pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {language === 'en' ? 'Our Blog' : 'Нашия блог'}
            </h1>
            <p className="text-lg text-zinc-400">
              {language === 'en' 
                ? 'Tips, insights, and industry knowledge for Bulgarian businesses'
                : 'Съвети, инсайти и индустриално знание за българския бизнес'}
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                className="group bg-zinc-900/50 border border-white/5 rounded-xl p-8 hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs font-semibold text-blue-400 mb-3">
                      {post.category}
                    </span>
                    <h2 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors mb-3">
                      {post.title}
                    </h2>
                  </div>
                  <ArrowRight className="w-5 h-5 text-zinc-500 group-hover:text-blue-400 transition-colors mt-1" />
                </div>

                <p className="text-zinc-400 mb-4">
                  {post.excerpt}
                </p>

                <div className="flex items-center gap-4 text-sm text-zinc-500">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString('bg-BG')}</span>
                  </div>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
              </Link>
            ))}
          </div>

          {/* Coming Soon */}
          <div className="mt-16 p-8 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-xl text-center">
            <p className="text-zinc-400">
              {language === 'en' 
                ? 'More articles coming soon. Subscribe for updates!'
                : 'Още статии идват скоро. Следете за обновления!'}
            </p>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
