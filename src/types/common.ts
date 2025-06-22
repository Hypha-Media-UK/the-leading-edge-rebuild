// Common button interfaces
export interface Button {
  text: string;
  to?: string;
  href?: string;
  variant?: 'primary' | 'secondary' | 'light' | 'outline' | string;
  size?: 'small' | 'medium' | 'large' | string;
  icon?: string;
  external?: boolean;
  onClick?: () => void;
}

// Media interfaces
export interface Image {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
}

export interface Media extends Image {
  type: 'image' | 'video';
  videoUrl?: string;
  thumbnailUrl?: string;
}

// Content section interfaces
export interface Section {
  id?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  content?: string;
  image?: string | Image;
  backgroundImage?: string;
  backgroundColor?: string;
  buttons?: Button[];
}

// Generic item interface for grids
export interface GridItem {
  id: string | number;
  title: string;
  description?: string;
  image?: string | Image;
  link?: string;
  linkText?: string;
}

// Feature item
export interface Feature {
  icon: string;
  title: string;
  description: string;
  link?: string;
}

// Testimonial interface
export interface Testimonial {
  id: number | string;
  quote: string;
  name: string;
  role?: string;
  company?: string;
  image?: string;
  rating?: number;
}

// Social media item
export interface SocialMediaItem {
  platform: string;
  url: string;
  icon: string;
  username?: string;
}
