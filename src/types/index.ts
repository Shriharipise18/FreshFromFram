export interface Product {
  id: string;
  name: string;
  category: string;
  season: string;
  price: number;
  unit: string;
  minOrder: number;
  farmer: {
    name: string;
    location: string;
    phone: string;
    email: string;
  };
  image: string;
  description: string;
  inStock: boolean;
  harvestDate?: string;
}

export interface ContactInfo {
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  message: string;
  productId: string;
}

export interface OrderDetails {
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  customerAddress: string;
  quantity: number;
  productId: string;
  totalAmount: number;
}