// News types for News view and related components

export interface NewsArticle {
  id: number;
  title: string;
  date: string;
  image: string;
  excerpt: string;
  content: string;
  category?: string;
  author?: string;
}

export interface NewsCategory {
  slug: string;
  name: string;
}
