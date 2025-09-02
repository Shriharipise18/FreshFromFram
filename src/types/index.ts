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

// -------------------
// Phone Number Schema
// -------------------
export const phoneSchema = z.string().regex(/^\d{10}$/, {
  message: "Phone number must be exactly 10 digits",
});

// -------------------
// Product Schema
// -------------------
export const productSchema = z.object({
  id: z.string(),
  name: z.string(),
  category: z.string(),
  season: z.string(),
  price: z.number(),
  unit: z.string(),
  minOrder: z.number(),
  farmer: z.object({
    name: z.string(),
    location: z.string(),
    phone: phoneSchema, // ✅ phone constraint
    email: z.string().email(),
  }),
  image: z.string(),
  description: z.string(),
  inStock: z.boolean(),
  harvestDate: z.string().optional(),
});

// -------------------
// ContactInfo Schema
// -------------------
export const contactInfoSchema = z.object({
  customerName: z.string(),
  customerEmail: z.string().email(),
  customerPhone: phoneSchema, // ✅ phone constraint
  message: z.string(),
  productId: z.string(),
});

// -------------------
// OrderDetails Schema
// -------------------
export const orderDetailsSchema = z.object({
  customerName: z.string(),
  customerEmail: z.string().email(),
  customerPhone: phoneSchema, // ✅ phone constraint
  customerAddress: z.string(),
  quantity: z.number().positive(),
  productId: z.string(),
  totalAmount: z.number().nonnegative(),
});

// -------------------
// Types from Schemas
// -------------------
export type Product = z.infer<typeof productSchema>;
export type ContactInfo = z.infer<typeof contactInfoSchema>;
export type OrderDetails = z.infer<typeof orderDetailsSchema>;
