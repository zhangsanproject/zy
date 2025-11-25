export interface ProductSpec {
  id: string;
  name: string;
  options: string[];
}

export interface ReviewStats {
  rating: number;
  count: number;
  soldCount: string;
}

export interface Merchant {
  name: string;
  isOfficial: boolean;
  badges: string[];
  ratings: {
    description: number;
    service: number;
    logistics: number;
  };
}

export interface Product {
  id: string;
  categoryPath: string[];
  title: string;
  description: string;
  price: number;
  originalPrice: number;
  discountTag?: string;
  images: string[];
  specs: ProductSpec[];
  stats: ReviewStats;
  merchant: Merchant;
  origin: string;
  harvestTime: string;
  stock: number;
}
