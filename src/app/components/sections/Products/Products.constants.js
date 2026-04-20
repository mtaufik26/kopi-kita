import { FaS } from "react-icons/fa6";

export const PRODUCTS = [
  {
    id: 1,
    name: 'Latte Art Signature',
    origin: 'Aceh Arabica Blend',
    price: 85000,
    originalPrice: 120000,
    image: '/assets/1.png',
    roast: 'Medium Roast',
    rating: 4.8,
    isBestSeller: true,
    type: 'Espresso Based',
    description: 'Smooth latte with premium Aceh Arabica and silky milk foam art'
  },
  {
    id: 2,
    name: 'Latte Art Cappuccino',
    origin: 'House Blend Nusantara',
    price: 95000,
    originalPrice: 135000,
    image: '/assets/2.png',
    roast: 'Medium Roast',
    rating: 4.7,
    isBestSeller: false,
    type: 'Espresso Based',
    description: 'Balanced cappuccino with Indonesian house blend and rich foam'
  },
  { 
    id: 3, 
    name: 'Toraja Cappuccino', 
    origin: 'Toraja Arabica', 
    price: 90000, 
    originalPrice: 125000, 
    image: '/assets/3.png', 
    roast: 'Medium to Dark Roast', 
    rating: 4.6, 
    isBestSeller: false,
    type: 'Espresso Based',
    description: 'Bold cappuccino with earthy and chocolate notes from Toraja beans'
  },
  { 
    id: 4, 
    name: 'Bali Kintamani Latte', 
    origin: 'Bali Kintamani Arabica', 
    price: 95000, 
    originalPrice: 135000, 
    image: '/assets/4.png', 
    roast: 'Medium Roast', 
    rating: 4.8, 
    isBestSeller: false,
    type: 'Espresso Based',
    description: 'Smooth latte with fruity and citrus notes from Kintamani beans'
  }
];

export const formatPrice = (price) => {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(price);
};