import { Product } from '../context/AppContext';

export const products: Product[] = [
  {
    id: 'w-001',
    name: 'The Obsidian Chronograph',
    price: 45000,
    originalPrice: 55000,
    description: 'A masterpiece of precision and elegance. The Obsidian Chronograph features a sleek black dial with gold accents, perfect for the modern professional.',
    images: [
      'https://images.unsplash.com/photo-1524592094714-a1f2e4b4cd70?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&q=80&w=800'
    ],
    category: 'Watches',
    features: ['Stainless Steel Case', 'Water Resistant 50m', 'Sapphire Crystal Glass', 'Genuine Leather Strap'],
    inStock: 12,
    rating: 4.8,
    reviews: 124
  },
  {
    id: 'w-002',
    name: 'Aura Gold Minimalist',
    price: 28000,
    description: 'Simplicity meets luxury. The Aura Gold Minimalist is designed for those who appreciate clean lines and timeless beauty.',
    images: [
      'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1508656936555-e4445307eea4?auto=format&fit=crop&q=80&w=800'
    ],
    category: 'Watches',
    features: ['Rose Gold Plated', 'Water Resistant 30m', 'Mesh Band', 'Japanese Quartz Movement'],
    inStock: 5,
    rating: 4.9,
    reviews: 89
  },
  {
    id: 'w-003',
    name: 'Midnight Prestige',
    price: 65000,
    originalPrice: 80000,
    description: 'Make a statement with the Midnight Prestige. A bold, all-black design with subtle gold detailing for the ultimate luxury feel.',
    images: [
      'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1548169874-53ce86f43365?auto=format&fit=crop&q=80&w=800'
    ],
    category: 'Watches',
    features: ['Automatic Movement', 'Water Resistant 100m', 'Ceramic Bezel', 'Luminous Hands'],
    inStock: 3,
    rating: 5.0,
    reviews: 42
  },
  {
    id: 'n-001',
    name: 'Eternity Diamond Pendant',
    price: 15000,
    originalPrice: 18000,
    description: 'A delicate gold chain featuring a stunning cubic zirconia pendant. Perfect for everyday elegance or special occasions.',
    images: [
      'https://images.unsplash.com/photo-1599643478524-fb66f70d00ea?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=800'
    ],
    category: 'Necklaces',
    features: ['18k Gold Plated', 'Hypoallergenic', 'Adjustable Chain (16"-18")', 'AAA Cubic Zirconia'],
    inStock: 25,
    rating: 4.7,
    reviews: 215
  },
  {
    id: 'b-001',
    name: 'Imperial Gold Cuff',
    price: 12000,
    description: 'A bold statement piece. The Imperial Gold Cuff adds instant glamour to any outfit.',
    images: [
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1573408301145-b98c46544405?auto=format&fit=crop&q=80&w=800'
    ],
    category: 'Bracelets',
    features: ['18k Gold Plated', 'Tarnish Resistant', 'One Size Fits Most', 'Premium Finish'],
    inStock: 18,
    rating: 4.6,
    reviews: 76
  },
  {
    id: 'r-001',
    name: 'Royal Sapphire Ring',
    price: 8500,
    originalPrice: 12000,
    description: 'A breathtaking simulated sapphire surrounded by a halo of sparkling crystals.',
    images: [
      'https://images.unsplash.com/photo-1605100804763-247f6612523e?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1605100804763-247f6612523e?auto=format&fit=crop&q=80&w=800'
    ],
    category: 'Rings',
    features: ['Sterling Silver Base', 'Simulated Sapphire', 'Available in Sizes 6-9', 'Includes Gift Box'],
    inStock: 8,
    rating: 4.9,
    reviews: 156
  },
  {
    id: 'w-004',
    name: 'Classic Silver Heritage',
    price: 22000,
    description: 'A timeless silver watch that pairs perfectly with both casual and formal attire.',
    images: [
      'https://images.unsplash.com/photo-1585123334904-845d60e97b29?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?auto=format&fit=crop&q=80&w=800'
    ],
    category: 'Watches',
    features: ['Stainless Steel', 'Water Resistant 30m', 'Date Display', 'Quartz Movement'],
    inStock: 15,
    rating: 4.5,
    reviews: 64
  },
  {
    id: 'n-002',
    name: 'Layered Pearl Choker',
    price: 9500,
    description: 'A modern twist on a classic. This layered necklace features delicate freshwater pearls.',
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1599643478524-fb66f70d00ea?auto=format&fit=crop&q=80&w=800'
    ],
    category: 'Necklaces',
    features: ['Freshwater Pearls', 'Gold Plated Brass', 'Adjustable Length', 'Lobster Clasp'],
    inStock: 20,
    rating: 4.8,
    reviews: 112
  }
];

export const categories = ['All', 'Watches', 'Necklaces', 'Bracelets', 'Rings'];
