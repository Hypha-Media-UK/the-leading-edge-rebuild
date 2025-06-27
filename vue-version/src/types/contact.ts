// Contact types for ContactUs view and related components

export interface FAQ {
  question: string;
  answer: string;
}

export interface ServiceOption {
  value: string;
  label: string;
}

export interface TimeOption {
  value: string;
  label: string;
}

export interface OpeningHour {
  day: string;
  time: string;
  closed?: boolean;
}

export interface ContactItem {
  icon: string;
  text: string;
  link: string;
}

export interface SocialLink {
  icon: string;
  url: string;
  label: string;
}

export interface FormData {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  date?: string;
  time?: string;
  message?: string;
  preferredStylist?: string;
  [key: string]: any;
}
