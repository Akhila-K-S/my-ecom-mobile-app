export type UserProfile = {
  id: string;
  name: string;
  email: string;
  avatar: string;
  memberSince: string;
  orderCount: number;
  wishlistCount: number;
  followedShops: number;
};

export const USER_PROFILE: UserProfile = {
  id: '1',
  name: 'Alex Morgan',
  email: 'alex.morgan@email.com',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop',
  memberSince: 'Jan 2024',
  orderCount: 12,
  wishlistCount: 8,
  followedShops: 5,
};

export type ProfileMenuItem = {
  id: string;
  label: string;
  icon: string;
  badge?: string;
};

export const ACCOUNT_MENU: ProfileMenuItem[] = [
  { id: 'orders', label: 'My Orders', icon: 'receipt-outline', badge: '2 active' },
  { id: 'wishlist', label: 'Wishlist', icon: 'heart-outline' },
  { id: 'addresses', label: 'Saved Addresses', icon: 'location-outline' },
  { id: 'payments', label: 'Payment Methods', icon: 'card-outline' },
];

export const SHOPPING_MENU: ProfileMenuItem[] = [
  { id: 'shops', label: 'Followed Shops', icon: 'storefront-outline' },
  { id: 'recent', label: 'Recently Viewed', icon: 'time-outline' },
  { id: 'reviews', label: 'My Reviews', icon: 'star-outline' },
];

export const SETTINGS_MENU: ProfileMenuItem[] = [
  { id: 'notifications', label: 'Notifications', icon: 'notifications-outline' },
  { id: 'help', label: 'Help & Support', icon: 'help-circle-outline' },
  { id: 'about', label: 'About', icon: 'information-circle-outline' },
];
