export interface PrdctList {
  id: number;
  name: string;
  price: number;
  pricePerKg: number;
  package: string;
  image: string;
  quantity: number;
  stockQuantity: number; // Korrigierte Eigenschaft
  inStock: boolean;
}