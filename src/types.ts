/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Feature {
  id: string;
  title: string;
  description: string;
  iconName: string; // Dynamic icon rendering via lucide-react
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageUrl?: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period?: string;
  scope: string;
  features: string[];
  popular?: boolean;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  url?: string;
  imageUrl: string;
  highlights: string[];
  description: string;
  tags: string[];
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  text: string;
  rating: number;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

