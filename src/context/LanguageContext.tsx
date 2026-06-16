/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useContext, useState, useEffect } from 'react';
import { staticTranslations, TranslationDictionary, dynamicTranslations } from '../translations';
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
  // Use localStorage to persist the user's language selection if available
  const [language, setLanguage] = useState<'en' | 'bg'>(() => {
    const saved = localStorage.getItem('ar_studio_lang');
    return (saved === 'en' || saved === 'bg') ? saved : 'bg'; // Default to Bulgarian since local target is local businesses
  });

  useEffect(() => {
    localStorage.setItem('ar_studio_lang', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'bg' : 'en'));
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
