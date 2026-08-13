/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useContext, useState, useEffect } from 'react';
import { staticTranslations, TranslationDictionary, dynamicTranslations } from '../translations';
import { alternateLanguagePath, languageFromPath } from '../lib/localizedRoutes';
import { Feature, TeamMember, PricingPlan, Project, Benefit, Testimonial, FaqItem } from '../types';

interface LanguageContextType {
  language: 'en' | 'bg';
  toggleLanguage: () => void;
  t: (key: keyof TranslationDictionary) => string;
  agencyFeatures: Feature[];
  founders: TeamMember[];
  pricingPlans: PricingPlan[];
  featuredProjects: Project[];
  benefits: Benefit[];
  testimonials: Testimonial[];
  faqItems: FaqItem[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // The URL is the source of truth for indexable language versions.
  // This keeps every existing Bulgarian route Bulgarian and every /en route English.
  const [language, setLanguage] = useState<'en' | 'bg'>(() => {
    if (typeof window === 'undefined') return 'bg';
    return languageFromPath(window.location.pathname);
  });

  useEffect(() => {
    localStorage.setItem('ar_studio_lang', language);
    document.documentElement.lang = language === 'bg' ? 'bg' : 'en';
  }, [language]);

  const toggleLanguage = () => {
    if (typeof window === 'undefined') return;
    const nextPath = alternateLanguagePath(window.location.pathname);
    window.location.assign(`${nextPath}${window.location.search}${window.location.hash}`);
  };

  const t = (key: keyof TranslationDictionary): string => {
    const dictionary = staticTranslations[language];
    return dictionary[key] || staticTranslations['en'][key] || String(key);
  };

  const dynamicData = dynamicTranslations[language];

  return (
    <LanguageContext.Provider
      value={{
        language,
        toggleLanguage,
        t,
        agencyFeatures: dynamicData.agencyFeatures as Feature[],
        founders: dynamicData.founders as TeamMember[],
        pricingPlans: dynamicData.pricingPlans as PricingPlan[],
        featuredProjects: dynamicData.featuredProjects as Project[],
        benefits: dynamicData.benefits as Benefit[],
        testimonials: dynamicData.testimonials as Testimonial[],
        faqItems: dynamicData.faqItems as FaqItem[],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
