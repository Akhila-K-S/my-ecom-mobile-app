export type Brand = {
  id: string;
  name: string;
  logo: string;
  category: string;
};

export type ShopOffer = {
  id: string;
  shopId: string;
  shopName: string;
  title: string;
  discount: string;
  image: string;
  expiresIn: string;
};

export type Shop = {
  id: string;
  name: string;
  logo: string;
  coverImage: string;
  category: string;
  rating: number;
  reviewCount: number;
  productCount: number;
  tagline: string;
  activeOffer?: string;
  isVerified: boolean;
};

export const BRANDS: Brand[] = [
  {
    id: '1',
    name: 'Nike',
    logo: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&h=200&fit=crop',
    category: 'Sports',
  },
  {
    id: '2',
    name: 'Apple',
    logo: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=200&fit=crop',
    category: 'Electronics',
  },
  {
    id: '3',
    name: 'Zara',
    logo: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=200&h=200&fit=crop',
    category: 'Fashion',
  },
  {
    id: '4',
    name: 'Sephora',
    logo: 'https://images.unsplash.com/photo-1620916566395-044134e3e8c3?w=200&h=200&fit=crop',
    category: 'Beauty',
  },
  {
    id: '5',
    name: 'IKEA',
    logo: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=200&h=200&fit=crop',
    category: 'Home',
  },
  {
    id: '6',
    name: 'Sony',
    logo: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop',
    category: 'Electronics',
  },
];

export const SHOP_OFFERS: ShopOffer[] = [
  {
    id: '1',
    shopId: '1',
    shopName: 'Urban Threads',
    title: 'Summer Collection Sale',
    discount: '40% OFF',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=300&fit=crop',
    expiresIn: '2 days left',
  },
  {
    id: '2',
    shopId: '2',
    shopName: 'TechHub Store',
    title: 'Gadgets Flash Deal',
    discount: '25% OFF',
    image: 'https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=600&h=300&fit=crop',
    expiresIn: '5 hours left',
  },
  {
    id: '3',
    shopId: '3',
    shopName: 'Glow Beauty',
    title: 'Skincare Bundle',
    discount: 'Buy 2 Get 1',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdd403348?w=600&h=300&fit=crop',
    expiresIn: '3 days left',
  },
  {
    id: '4',
    shopId: '4',
    shopName: 'FitLife Gear',
    title: 'New Season Drop',
    discount: '30% OFF',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=300&fit=crop',
    expiresIn: '1 day left',
  },
];

export const SHOPS: Shop[] = [
  {
    id: '1',
    name: 'Urban Threads',
    logo: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=200&h=200&fit=crop',
    coverImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=300&fit=crop',
    category: 'Fashion',
    rating: 4.8,
    reviewCount: 1240,
    productCount: 320,
    tagline: 'Trendy streetwear & casual wear',
    activeOffer: '40% OFF Summer Sale',
    isVerified: true,
  },
  {
    id: '2',
    name: 'TechHub Store',
    logo: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=200&fit=crop',
    coverImage: 'https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=600&h=300&fit=crop',
    category: 'Electronics',
    rating: 4.7,
    reviewCount: 2890,
    productCount: 185,
    tagline: 'Latest gadgets & accessories',
    activeOffer: '25% OFF Flash Deal',
    isVerified: true,
  },
  {
    id: '3',
    name: 'Glow Beauty',
    logo: 'https://images.unsplash.com/photo-1620916566395-044134e3e8c3?w=200&h=200&fit=crop',
    coverImage: 'https://images.unsplash.com/photo-1596462502278-27bfdd403348?w=600&h=300&fit=crop',
    category: 'Beauty',
    rating: 4.9,
    reviewCount: 980,
    productCount: 210,
    tagline: 'Premium skincare & cosmetics',
    activeOffer: 'Buy 2 Get 1 Free',
    isVerified: true,
  },
  {
    id: '4',
    name: 'FitLife Gear',
    logo: 'https://images.unsplash.com/photo-1606107557195-0fa42bd0398b?w=200&h=200&fit=crop',
    coverImage: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=300&fit=crop',
    category: 'Sports',
    rating: 4.6,
    reviewCount: 756,
    productCount: 145,
    tagline: 'Sports equipment & activewear',
    activeOffer: '30% OFF New Drop',
    isVerified: false,
  },
  {
    id: '5',
    name: 'Cozy Home',
    logo: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=200&h=200&fit=crop',
    coverImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=300&fit=crop',
    category: 'Home',
    rating: 4.5,
    reviewCount: 542,
    productCount: 278,
    tagline: 'Furniture & home decor',
    isVerified: true,
  },
  {
    id: '6',
    name: 'SoundWave Audio',
    logo: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop',
    coverImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=300&fit=crop',
    category: 'Electronics',
    rating: 4.4,
    reviewCount: 430,
    productCount: 92,
    tagline: 'Headphones, speakers & more',
    activeOffer: 'Free shipping over $50',
    isVerified: false,
  },
];

export const SHOP_CATEGORIES = ['All', 'Fashion', 'Electronics', 'Beauty', 'Sports', 'Home'];
