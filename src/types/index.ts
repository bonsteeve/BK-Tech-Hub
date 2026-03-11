export interface NavItem {
  name: string;
  href: string;
  description?: string;
  icon?: React.ComponentType<{ className?: string }>;
}

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: string;
  features: string[];
  benefits: Benefit[];
  process: ProcessStep[];
  faqs: FAQ[];
}

export interface Benefit {
  title: string;
  description: string;
  icon?: string;
}

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  industry: string;
  services: string[];
  challenge: string;
  solution: string;
  results: Result[];
  testimonial?: Testimonial;
  images: Image[];
  featured: boolean;
  publishedAt: string;
}

export interface Result {
  metric: string;
  value: string;
  description?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  image?: string;
  quote: string;
  rating?: number;
  featured: boolean;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: Author;
  category: string;
  tags: string[];
  featuredImage: string;
  publishedAt: string;
  readingTime: number;
}

export interface Author {
  name: string;
  role: string;
  image?: string;
  bio?: string;
}

export interface Image {
  url: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
  service?: string;
}

export interface AuditFormData {
  name: string;
  email: string;
  company?: string;
  website: string;
  goals?: string;
}

export interface SectionProps {
  className?: string;
  children: React.ReactNode;
  id?: string;
}

export interface CardProps {
  className?: string;
}
