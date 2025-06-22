// Service types for Services view and related components

export interface ServiceTab {
  id: string;
  label: string;
  icon: string;
}

export interface ServiceItem {
  title: string;
  description?: string;
  price: string;
}

export interface ServicePackage {
  title: string;
  price: string;
  description: string;
  includes: string[];
  duration: string;
}

export interface SubTab {
  id: string;
  label: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
}
