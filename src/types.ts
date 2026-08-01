export interface Product {
  id: string;
  name: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  imageUrl: string;
  badges: string[];
  volumeOrDetails?: string;
  priceTag?: string;
  isHighlight?: boolean;
}

export interface Benefit {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface Differential {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface HowItWorksStep {
  stepNumber: number;
  title: string;
  description: string;
  detail: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: {
    label: string;
    value: string;
    categoryPreference: string;
  }[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
}
