export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  rating: number;
  category: string;
};

export type Category = {
  id: string;
  name: string;
  icon: 'shirt' | 'laptop' | 'home' | 'sparkles' | 'fitness';
};

export const CATEGORIES: Category[] = [
  { id: '1', name: 'Fashion', icon: 'shirt' },
  { id: '2', name: 'Electronics', icon: 'laptop' },
  { id: '3', name: 'Home', icon: 'home' },
  { id: '4', name: 'Beauty', icon: 'sparkles' },
  { id: '5', name: 'Sports', icon: 'fitness' },
];

export const FEATURED_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Wireless Headphones',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
    rating: 4.8,
    category: 'Electronics',
  },
  {
    id: '2',
    name: 'Classic Sneakers',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
    rating: 4.6,
    category: 'Fashion',
  },
  {
    id: '3',
    name: 'Leather Backpack',
    price: 74.99,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop',
    rating: 4.5,
    category: 'Fashion',
  },
  {
    id: '4',
    name: 'Smart Watch',
    price: 249.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
    rating: 4.7,
    category: 'Electronics',
  },
];

export const NEW_ARRIVALS: Product[] = [
  {
    id: '5',
    name: 'Ceramic Vase',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=400&h=400&fit=crop',
    rating: 4.4,
    category: 'Home',
  },
  {
    id: '6',
    name: 'Face Serum',
    price: 28.99,
    image: 'https://images.unsplash.com/photo-1620916566395-044134e3e8c3?w=400&h=400&fit=crop',
    rating: 4.9,
    category: 'Beauty',
  },
  {
    id: '7',
    name: 'Yoga Mat',
    price: 45.99,
    image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&h=400&fit=crop',
    rating: 4.3,
    category: 'Sports',
  },
];

export const ALL_PRODUCTS: Product[] = [
  ...FEATURED_PRODUCTS,
  ...NEW_ARRIVALS,
  {
    id: '8',
    name: 'Denim Jacket',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=400&h=400&fit=crop',
    rating: 4.5,
    category: 'Fashion',
  },
  {
    id: '9',
    name: 'Bluetooth Speaker',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop',
    rating: 4.2,
    category: 'Electronics',
  },
  {
    id: '10',
    name: 'Table Lamp',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=400&fit=crop',
    rating: 4.6,
    category: 'Home',
  },
  {
    id: '11',
    name: 'Lipstick Set',
    price: 22.99,
    image: 'https://images.unsplash.com/photo-1586495777744-4413d210dafe?w=400&h=400&fit=crop',
    rating: 4.7,
    category: 'Beauty',
  },
  {
    id: '12',
    name: 'Running Shoes',
    price: 99.99,
    image: 'https://images.unsplash.com/photo-1606107557195-0fa42bd0398b?w=400&h=400&fit=crop',
    rating: 4.8,
    category: 'Sports',
  },
];

export type SortOption = 'default' | 'price-asc' | 'price-desc' | 'rating';

export const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: 'default', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low' },
  { value: 'price-desc', label: 'Price: High' },
  { value: 'rating', label: 'Top Rated' },
];
