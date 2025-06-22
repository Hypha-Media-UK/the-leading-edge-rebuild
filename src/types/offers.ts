// Offers and Gift Vouchers types for the OffersGiftVouchers view

export interface Promotion {
  id: string;
  title: string;
  icon: string;
  highlight?: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  cardClass: string;
  terms: string[];
}
