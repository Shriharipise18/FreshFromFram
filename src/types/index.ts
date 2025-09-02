// export interface Product {
//   id: string;
//   name: string;
//   category: string;
//   season: string;
//   price: number;
//   unit: string;
//   minOrder: number;
//   farmer: {
//     name: string;
//     location: string;
//     phone: string;
//     email: string;
//   };
//   image: string;
//   description: string;
//   inStock: boolean;
//   harvestDate?: string;
// }

// export interface ContactInfo {
//   customerName: string;
//   customerEmail: string;
//   customerPhone: number;
//   message: string;
//   productId: string;
// }

// export interface OrderDetails {
//   customerName: string;
//   customerEmail: string;
//   customerPhone: number;
//   customerAddress: string;
//   quantity: number;
//   productId: string;
//   totalAmount: number;
// }
// -------------------
//  PhoneNumber Module
// -------------------

import { z } from "zod";

// Branded type so only validated values can be PhoneNumber
export type PhoneNumber = string & { __brand: "PhoneNumber" };

// Zod schema for runtime validation
export const phoneSchema = z.string().regex(/^\d{10}$/, {
  message: "Phone number must be exactly 10 digits",
});

// Factory function for validation at runtime
export function createPhoneNumber(value: string): PhoneNumber {
  return phoneSchema.parse(value) as PhoneNumber;
}

// -------------------
//  Core Interfaces
// -------------------

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
    phone: PhoneNumber;
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
  customerPhone: PhoneNumber;
  message: string;
  productId: string;
}

export interface OrderDetails {
  customerName: string;
  customerEmail: string;
  customerPhone: PhoneNumber; 
  customerAddress: string;
  quantity: number;
  productId: string;
  totalAmount: number;
}

