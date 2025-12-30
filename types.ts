
export interface Message {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
  groundingMetadata?: any;
}

export interface UserDetails {
  name: string;

  age: string;
  occupation: string;
  income: string;
  state: string;
  category: string;
}

export interface Scheme {
  id: string;
  name: string;
  category: 'Agriculture' | 'Health' | 'Pension' | 'Education';
  icon: string;
  shortDescription: string;
  overview: string;
  objectives: string[];
  benefits: { icon: string; text: string }[];
  eligibility: { icon: string; text: string }[];
  documents: string[];
  applicationProcess: { step: number; description: string }[];
  officialLink: string;
  faqs: { question: string; answer: string }[];
  eligibilityTags: string[];
}
