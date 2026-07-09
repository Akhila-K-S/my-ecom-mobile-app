import { ALL_PRODUCTS } from '@/constants/products';
import { SHOPS } from '@/constants/shops';

export type Order = {
  id: string;
  orderNumber: string;
  date: string;
  status: 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled';
  total: number;
  itemCount: number;
  shopName: string;
  image: string;
};

export type Address = {
  id: string;
  label: string;
  name: string;
  street: string;
  city: string;
  zip: string;
  isDefault: boolean;
};

export type PaymentMethod = {
  id: string;
  type: 'visa' | 'mastercard';
  last4: string;
  expiry: string;
  isDefault: boolean;
};

export type Review = {
  id: string;
  productName: string;
  productImage: string;
  rating: number;
  comment: string;
  date: string;
};

export const ORDERS: Order[] = [
  {
    id: '1',
    orderNumber: '#ORD-2841',
    date: 'Jul 5, 2026',
    status: 'Shipped',
    total: 219.98,
    itemCount: 2,
    shopName: 'Urban Threads',
    image: ALL_PRODUCTS[1].image,
  },
  {
    id: '2',
    orderNumber: '#ORD-2790',
    date: 'Jun 28, 2026',
    status: 'Delivered',
    total: 129.99,
    itemCount: 1,
    shopName: 'TechHub Store',
    image: ALL_PRODUCTS[0].image,
  },
  {
    id: '3',
    orderNumber: '#ORD-2755',
    date: 'Jun 20, 2026',
    status: 'Processing',
    total: 57.98,
    itemCount: 2,
    shopName: 'Glow Beauty',
    image: ALL_PRODUCTS[5].image,
  },
];

export const WISHLIST_PRODUCTS = [ALL_PRODUCTS[2], ALL_PRODUCTS[3], ALL_PRODUCTS[7], ALL_PRODUCTS[9]];

export const ADDRESSES: Address[] = [
  {
    id: '1',
    label: 'Home',
    name: 'Alex Morgan',
    street: '742 Evergreen Terrace',
    city: 'Springfield, IL',
    zip: '62704',
    isDefault: true,
  },
  {
    id: '2',
    label: 'Work',
    name: 'Alex Morgan',
    street: '100 Market Street, Suite 400',
    city: 'San Francisco, CA',
    zip: '94105',
    isDefault: false,
  },
];

export const PAYMENT_METHODS: PaymentMethod[] = [
  { id: '1', type: 'visa', last4: '4242', expiry: '08/27', isDefault: true },
  { id: '2', type: 'mastercard', last4: '8888', expiry: '03/28', isDefault: false },
];

export const FOLLOWED_SHOPS = SHOPS.slice(0, 5);

export const RECENTLY_VIEWED = [ALL_PRODUCTS[4], ALL_PRODUCTS[6], ALL_PRODUCTS[10], ALL_PRODUCTS[11]];

export const USER_REVIEWS: Review[] = [
  {
    id: '1',
    productName: 'Classic Sneakers',
    productImage: ALL_PRODUCTS[1].image,
    rating: 5,
    comment: 'Great quality and comfortable fit. Will buy again!',
    date: 'Jun 15, 2026',
  },
  {
    id: '2',
    productName: 'Wireless Headphones',
    productImage: ALL_PRODUCTS[0].image,
    rating: 4,
    comment: 'Good sound quality, battery lasts long.',
    date: 'May 30, 2026',
  },
];

export const FAQ_ITEMS = [
  { question: 'How do I track my order?', answer: 'Go to My Orders and tap on an order to see tracking details.' },
  { question: 'What is the return policy?', answer: 'Items can be returned within 30 days of delivery in original condition.' },
  { question: 'How do I contact a shop?', answer: 'Visit the shop page and use the message button to reach the seller.' },
];
