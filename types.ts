export interface Course {
  id: string;
  level: string;
  title: string;
  price: number;
  description: string;
  duration: string;
  targetAudience: string;
  skills: string[];
  color: string;
  features: string[];
}

export interface SyllabusTopic {
  id: number;
  title: string;
  description: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}