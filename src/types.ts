export type Language = 'en' | 'bg';

export interface Project {
  id: string;
  title: string;
  category: string;
  categoryBG: string;
  description: string;
  descriptionBG: string;
  results: string[];
  resultsBG: string[];
  tags: string[];
  highlightColor: string;
}

export interface Founder {
  name: string;
  role: string;
  roleBG: string;
  bio: string;
  bioBG: string;
  specialty: string;
  specialtyBG: string;
}

export interface FAQItem {
  question: string;
  questionBG: string;
  answer: string;
  answerBG: string;
}
