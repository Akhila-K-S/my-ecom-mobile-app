import type { Product } from '@/constants/products';
import { ALL_PRODUCTS } from '@/constants/products';

export type CartItem = {
  id: string;
  product: Product;
  quantity: number;
  shopName: string;
  size?: string;
  color?: string;
};

export const INITIAL_CART_ITEMS: CartItem[] = [
  {
    id: 'cart-1',
    product: ALL_PRODUCTS[1],
    quantity: 1,
    shopName: 'Urban Threads',
    size: 'US 9',
    color: 'Red',
  },
  {
    id: 'cart-2',
    product: ALL_PRODUCTS[0],
    quantity: 1,
    shopName: 'TechHub Store',
    color: 'Black',
  },
  {
    id: 'cart-3',
    product: ALL_PRODUCTS[5],
    quantity: 2,
    shopName: 'Glow Beauty',
  },
];

export const SHIPPING_FEE = 5.99;
export const FREE_SHIPPING_THRESHOLD = 100;
