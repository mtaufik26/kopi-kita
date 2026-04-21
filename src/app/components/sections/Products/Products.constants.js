export const PRODUCTS = [
  {
    id: 1,
    name: 'Ice Latte Original',
    origin: 'Gayo Blend',
    price: 18000,
    originalPrice: 22000,
    image: '/assets/1.png',
    roast: 'Light & Smooth',
    rating: 4.8,
    isBestSeller: true,
    type: 'Ice Coffee',
    description: 'Ice latte creamy yang ringan dan paling aman buat semua orang'
  },
  {
    id: 2,
    name: 'Ice Cappuccino',
    origin: 'House Blend',
    price: 20000,
    originalPrice: 25000,
    image: '/assets/2.png',
    roast: 'Balanced',
    rating: 4.7,
    isBestSeller: false,
    type: 'Ice Coffee',
    description: 'Perpaduan kopi dan foam dingin yang lebih bold tapi tetap smooth'
  },
  { 
    id: 3, 
    name: 'Ice Kopi Toraja', 
    origin: 'Toraja Arabica', 
    price: 19000, 
    originalPrice: 24000, 
    image: '/assets/3.png', 
    roast: 'Bold & Chill', 
    rating: 4.6, 
    isBestSeller: false,
    type: 'Ice Coffee',
    description: 'Lebih strong, cocok buat yang suka kopi terasa tapi tetap dingin'
  },
  { 
    id: 4, 
    name: 'Ice Kintamani Latte', 
    origin: 'Bali Kintamani', 
    price: 20000, 
    originalPrice: 25000, 
    image: '/assets/4.png', 
    roast: 'Fresh & Fruity', 
    rating: 4.8, 
    isBestSeller: false,
    type: 'Ice Coffee',
    description: 'Segar dengan hint fruity, cocok diminum siang hari'
  }
];

export const formatPrice = (price) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  }).format(price);
};