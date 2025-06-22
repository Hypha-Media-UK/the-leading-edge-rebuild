// Careers types for Careers view and related components

export interface Job {
  id: number;
  title: string;
  jobType: string;
  location: string;
  excerpt: string;
  description: string;
  requirements: string[];
  benefits: string[];
}

export interface Benefit {
  icon: string;
  title: string;
  description: string;
}

export interface ApplicationStep {
  title: string;
  description: string;
  icon?: string;
}
