/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Feature, TeamMember, PricingPlan, Project, Benefit, Testimonial } from './types';

export const agencyFeatures: Feature[] = [
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
];

export const founders: TeamMember[] = [
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
];

export const pricingPlans: PricingPlan[] = [
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
];

export const featuredProjects: Project[] = [
  {
    id: 'tomato-restaurant',
    title: 'Tomato Restaurant',
    category: 'Restaurant & QR Menu Website',
    url: 'https://www.tomatorestaurant.online/',
    imageUrl: 'tomato_restaurant_mockup', // We can generate this image or use beautiful styling representing this
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
];

export const benefits: Benefit[] = [
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
];

export const testimonials: Testimonial[] = [
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
];
