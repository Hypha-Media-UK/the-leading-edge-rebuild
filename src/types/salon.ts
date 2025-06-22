// Salon types for OurSalon view and related components

export interface PhilosophyItem {
  title: string;
  description: string;
  icon: string;
}

export interface InteriorImage {
  src: string;
  alt: string;
}

export interface Product {
  image: string;
  alt: string;
  name?: string;
  description?: string;
  price?: string;
  link?: string;
}
