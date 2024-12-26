export interface PrdctList {
  id: number;
  name: string;
  description: string;
  brand: string;
  price: number;
  discountPrice?: number;
  priceToTray?: number;
  pricePerKg : number;
  tax: number;
  package: string;
  volume: string;
  image: string;
  quantity : number;
  stockQuantity: number;
  minimumStockLevel: number;
  reorderQuantity: number;
  expirationDate: string;
  isAvailable: boolean;
  sizes: string[];
  flavors: string[];
  allergens: string[];
  promotions?: string;
  newArrival?: boolean;
  bestseller?: boolean;
  ecoFriendly?: boolean;
  recyclingInfo: string;
}