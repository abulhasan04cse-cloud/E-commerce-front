import {
  Headphones, Smartphone, Shirt, Watch, Footprints,
  Sparkles, Home as HomeIcon, ShoppingBasket, Glasses,
  Dumbbell, Laptop, Camera, Backpack,
} from 'lucide-react';

export const categories = [
  { id: 'electronics', name: 'Electronics', icon: Smartphone, color: 'from-blue-500 to-cyan-400', href: '/category/electronics' },
  { id: 'fashion', name: 'Fashion', icon: Shirt, color: 'from-rose-500 to-pink-400', href: '/category/fashion' },
  { id: 'mens-fashion', name: "Men's Fashion", icon: Footprints, color: 'from-slate-600 to-slate-400', href: '/category/mens-fashion' },
  { id: 'womens-fashion', name: "Women's Fashion", icon: Shirt, color: 'from-fuchsia-500 to-purple-400', href: '/category/womens-fashion' },
  { id: 'shoes', name: 'Shoes', icon: Footprints, color: 'from-amber-500 to-orange-400', href: '/category/shoes' },
  { id: 'beauty', name: 'Beauty', icon: Sparkles, color: 'from-pink-500 to-rose-400', href: '/category/beauty' },
  { id: 'home', name: 'Home', icon: HomeIcon, color: 'from-teal-500 to-emerald-400', href: '/category/home' },
  { id: 'grocery', name: 'Grocery', icon: ShoppingBasket, color: 'from-lime-500 to-green-400', href: '/category/grocery' },
  { id: 'accessories', name: 'Accessories', icon: Glasses, color: 'from-indigo-500 to-blue-400', href: '/category/accessories' },
  { id: 'sports', name: 'Sports', icon: Dumbbell, color: 'from-orange-500 to-red-400', href: '/category/sports' },
];

export const productIcons = {
  Headphones, Smartphone, Shirt, Watch, Footprints,
  Sparkles, Home: HomeIcon, ShoppingBasket, Glasses,
  Dumbbell, Laptop, Camera, Backpack,
};
