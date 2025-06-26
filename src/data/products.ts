import { Product } from '../types';
import { getImagesByCategory, getRandomImageFromCategory } from './imageAssets';

export const products: Product[] = [
  // Hoodies
  {
    id: '1',
    name: 'Urban Explorer Hoodie',
    description: 'A modern hoodie with a sleek fit, perfect for city adventures.',
    category: 'hoodies',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80',
    longDescription: 'The Urban Explorer Hoodie is crafted from a premium cotton blend, offering both warmth and breathability. Its minimalist design and adjustable drawstring hood make it ideal for layering in any season. Machine washable and available in multiple colors, this hoodie is your go-to for both style and comfort.'
  },
  {
    id: '2',
    name: 'Classic Comfort Hoodie',
    description: 'Timeless comfort with a soft fleece lining and kangaroo pocket.',
    category: 'hoodies',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&q=80',
    longDescription: 'Experience unmatched coziness with the Classic Comfort Hoodie. Featuring a plush fleece interior, ribbed cuffs, and a spacious front pocket, it\'s designed for everyday wear. Whether you\'re lounging at home or heading out, this hoodie keeps you warm and stylish.'
  },
  {
    id: '3',
    name: 'Pullover Hoodie',
    description: 'Heavy-weight pullover hoodie with fleece lining for extra warmth.',
    category: 'hoodies',
    image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80',
    longDescription: 'This heavyweight pullover hoodie features a premium fleece lining that provides exceptional warmth without bulk. The classic fit and durable construction make it perfect for outdoor activities or casual wear.',
  },
  {
    id: '4',
    name: 'Sporty Hoodie',
    description: 'Athletic-inspired hoodie designed for active lifestyles.',
    category: 'hoodies',
    image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800&q=80',
    longDescription: 'Engineered for performance and style, this sporty hoodie features moisture-wicking fabric and a streamlined fit. Perfect for workouts or casual wear.',
  },
  {
    id: '5',
    name: 'Urban Hoodie',
    description: 'Trendy urban hoodie with contemporary street style.',
    category: 'hoodies',
    image: 'https://images.unsplash.com/photo-1571945153237-4929e783af4a?auto=format&fit=crop&w=800&q=80',
    longDescription: 'This urban-inspired hoodie combines street style with premium comfort. Features include a modern cut, quality materials, and attention to detail.',
  },
  {
    id: '6',
    name: 'Minimal Hoodie',
    description: 'Clean, minimal design hoodie for everyday versatility.',
    category: 'hoodies',
    image: 'https://images.unsplash.com/photo-1620799139834-6b8f844fbe61?auto=format&fit=crop&w=800&q=80',
    longDescription: 'Embrace simplicity with this minimal hoodie. Clean lines, premium materials, and versatile styling make it a wardrobe essential.',
  },
  {
    id: '7',
    name: 'Graphic Hoodie',
    description: 'Eye-catching hoodie with unique graphic design elements.',
    category: 'hoodies',
    image: 'https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?auto=format&fit=crop&w=800&q=80',
    longDescription: 'Stand out with this graphic hoodie featuring original artwork and premium printing techniques. Comfortable fit with artistic flair.',
  },
  {
    id: '8',
    name: 'Fleece Hoodie',
    description: 'Ultra-soft fleece hoodie for maximum comfort.',
    category: 'hoodies',
    image: 'https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?auto=format&fit=crop&w=800&q=80',
    longDescription: 'Indulge in luxury comfort with this fleece hoodie. Super soft materials and cozy fit make it perfect for relaxation.',
  },
  {
    id: '9',
    name: 'Cropped Hoodie',
    description: 'Modern cropped hoodie with a fashionable silhouette.',
    category: 'hoodies',
    image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80',
    longDescription: 'This cropped hoodie offers a contemporary twist on the classic design. Perfect for layering and creating modern looks.',
  },
  {
    id: '10',
    name: 'Eco Hoodie',
    description: 'Sustainable hoodie made from eco-friendly materials.',
    category: 'hoodies',
    image: 'https://images.unsplash.com/photo-1620799139834-6b8f844fbe61?auto=format&fit=crop&w=800&q=80',
    longDescription: 'Made from sustainable materials, this eco-friendly hoodie proves that style and environmental consciousness can go hand in hand.',
  },

  // Sweatpants
  {
    id: 'sp1',
    name: 'Essential Sweatpants',
    description: 'Soft, relaxed-fit sweatpants for daily comfort.',
    category: 'sweatpants',
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=80',
    longDescription: 'Our Essential Sweatpants are made from a premium cotton-poly blend, featuring an elastic waistband and adjustable drawstring. Perfect for workouts or lounging, these sweatpants offer both style and comfort.'
  },
  {
    id: 'sp2',
    name: 'Athletic Tapered Sweatpants',
    description: 'Tapered sweatpants with zip pockets and sporty style.',
    category: 'sweatpants',
    image: 'https://images.unsplash.com/photo-1506629905607-d9c8e3b8e0e5?auto=format&fit=crop&w=800&q=80',
    longDescription: 'Designed for movement, these sweatpants feature a modern tapered fit, zippered pockets, and moisture-wicking fabric. Ideal for active days or casual outings.'
  },

  // Jackets
  {
    id: 'j1',
    name: 'All-Weather Jacket',
    description: 'Water-resistant jacket for year-round protection.',
    category: 'jackets',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80',
    longDescription: 'Stay dry and comfortable with our All-Weather Jacket. Features a lightweight shell, adjustable hood, and breathable lining for versatile wear.'
  },
  {
    id: 'j2',
    name: 'Classic Denim Jacket',
    description: 'Timeless denim jacket with a modern fit.',
    category: 'jackets',
    image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?auto=format&fit=crop&w=800&q=80',
    longDescription: 'A wardrobe staple, this denim jacket offers a tailored fit, durable construction, and classic styling. Perfect for layering in any season.'
  },

  // Tracksuits
  {
    id: 'ts1',
    name: 'Performance Tracksuit',
    description: 'Breathable tracksuit for sports and leisure.',
    category: 'tracksuits',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80',
    longDescription: 'Our Performance Tracksuit is made from lightweight, moisture-wicking fabric. The jacket and pants combo is perfect for warm-ups, workouts, or casual wear.'
  },
  {
    id: 'ts2',
    name: 'Retro Stripe Tracksuit',
    description: 'Tracksuit with vintage-inspired stripes and modern comfort.',
    category: 'tracksuits',
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=80',
    longDescription: 'This tracksuit features bold stripes, a zip-up jacket, and tapered pants. Soft, stretchy, and stylish for any occasion.'
  },

  // Sweatshirts
  {
    id: 'ss1',
    name: 'Cozy Crewneck Sweatshirt',
    description: 'Classic crewneck with ultra-soft fleece.',
    category: 'sweatshirts',
    image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80',
    longDescription: 'Our Cozy Crewneck Sweatshirt is made from plush fleece, offering warmth and comfort. Ribbed cuffs and hem ensure a snug fit.'
  },
  {
    id: 'ss2',
    name: 'Oversized Pullover Sweatshirt',
    description: 'Relaxed-fit pullover for a laid-back look.',
    category: 'sweatshirts',
    image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800&q=80',
    longDescription: 'This oversized pullover is perfect for layering. Features a drop-shoulder design and soft, brushed interior.'
  },

  // Footwear
  {
    id: 'fw1',
    name: 'Lightweight Running Shoes',
    description: 'Breathable running shoes for all-day comfort.',
    category: 'footwear',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80',
    longDescription: 'Engineered for performance, these running shoes feature a cushioned sole, mesh upper, and lightweight design.'
  },
  {
    id: 'fw2',
    name: 'Classic White Sneakers',
    description: 'Timeless sneakers with a clean, versatile look.',
    category: 'footwear',
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80',
    longDescription: 'These sneakers offer a minimalist design, durable rubber sole, and comfortable fit for everyday wear.'
  },

  // Vests
  {
    id: 'v1',
    name: 'Puffer Vest',
    description: 'Insulated puffer vest for extra warmth.',
    category: 'vests',
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=80',
    longDescription: 'Stay warm without the bulk. This puffer vest features lightweight insulation and a water-resistant shell.'
  },
  {
    id: 'v2',
    name: 'Classic Denim Vest',
    description: 'Denim vest with a rugged, timeless look.',
    category: 'vests',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80',
    longDescription: 'A versatile layering piece, this denim vest is durable and stylish for any season.'
  },

  // T-Shirts
  {
    id: 'tsh1',
    name: 'Premium Cotton T-Shirt',
    description: 'Soft, breathable t-shirt for everyday wear.',
    category: 't-shirts',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80',
    longDescription: 'Made from 100% premium cotton, this t-shirt offers a classic fit and all-day comfort.'
  },
  {
    id: 'tsh2',
    name: 'Graphic Print T-Shirt',
    description: 'T-shirt with bold, eye-catching graphics.',
    category: 't-shirts',
    image: 'https://images.unsplash.com/photo-1583743814966-8936f37f4678?auto=format&fit=crop&w=800&q=80',
    longDescription: 'Express your style with this graphic print tee. Features a soft feel and durable print.'
  },

  // Pants
  {
    id: 'p1',
    name: 'Slim Fit Chinos',
    description: 'Modern chinos with a tailored fit.',
    category: 'pants',
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=80',
    longDescription: 'These slim fit chinos are made from stretch cotton for comfort and mobility. Perfect for work or weekends.'
  },
  {
    id: 'p2',
    name: 'Classic Dress Pants',
    description: 'Professional dress pants for formal occasions.',
    category: 'pants',
    image: 'https://images.unsplash.com/photo-1506629905607-d9c8e3b8e0e5?auto=format&fit=crop&w=800&q=80',
    longDescription: 'Elegant dress pants with a classic cut and premium fabric. Perfect for business or formal events.'
  },

  // Jeans
  {
    id: 'jns1',
    name: 'Vintage Wash Jeans',
    description: 'Jeans with a vintage wash and relaxed fit.',
    category: 'jeans',
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=800&q=80',
    longDescription: 'These jeans feature a vintage-inspired wash, five-pocket styling, and a comfortable fit.'
  },
  {
    id: 'jns2',
    name: 'Skinny Fit Jeans',
    description: 'Modern skinny jeans with stretch fabric.',
    category: 'jeans',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80',
    longDescription: 'Designed for a sleek look, these skinny jeans offer flexibility and style.'
  },

  // Shorts
  {
    id: 'sh1',
    name: 'Casual Summer Shorts',
    description: 'Lightweight shorts for warm weather.',
    category: 'shorts',
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=80',
    longDescription: 'Stay cool and comfortable with these breathable summer shorts. Elastic waistband for a perfect fit.'
  },
  {
    id: 'sh2',
    name: 'Athletic Mesh Shorts',
    description: 'Mesh shorts designed for sports and training.',
    category: 'shorts',
    image: 'https://images.unsplash.com/photo-1506629905607-d9c8e3b8e0e5?auto=format&fit=crop&w=800&q=80',
    longDescription: 'These athletic shorts feature moisture-wicking mesh and a relaxed fit for maximum performance.'
  },

  // Swimsuit
  {
    id: 'sw1',
    name: 'Classic Swim Trunks',
    description: 'Quick-dry swim trunks with drawstring waist.',
    category: 'swimsuit',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80',
    longDescription: 'Enjoy the water in these classic swim trunks. Quick-drying fabric and mesh lining for comfort.'
  },
  {
    id: 'sw2',
    name: 'Sporty One-Piece Swimsuit',
    description: 'One-piece swimsuit with sporty design and support.',
    category: 'swimsuit',
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=80',
    longDescription: 'This one-piece swimsuit offers a flattering fit, supportive straps, and chlorine-resistant fabric.'
  },

  // Caps
  {
    id: 'c1',
    name: 'Classic Baseball Cap',
    description: 'Adjustable baseball cap with embroidered logo.',
    category: 'caps',
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800&q=80',
    longDescription: 'A timeless accessory, this cap features a curved brim and adjustable strap for a custom fit.'
  },
  {
    id: 'c2',
    name: 'Flat Brim Snapback',
    description: 'Modern snapback cap with flat brim.',
    category: 'caps',
    image: 'https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=800&q=80',
    longDescription: 'This snapback cap offers a structured fit and bold style for any outfit.'
  },

  // Socks
  {
    id: 's1',
    name: 'Everyday Crew Socks',
    description: 'Soft, breathable crew socks for daily wear.',
    category: 'socks',
    image: 'https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=800&q=80',
    longDescription: 'Our crew socks are made from a cotton-rich blend, providing comfort and durability all day long.'
  },
  {
    id: 's2',
    name: 'Athletic Ankle Socks',
    description: 'Low-cut ankle socks with arch support.',
    category: 'socks',
    image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?auto=format&fit=crop&w=800&q=80',
    longDescription: 'Designed for performance, these ankle socks feature moisture-wicking fabric and cushioned soles.'
  },
];

export const getProductsByCategory = (category: string) => {
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = () => {
  return products.slice(0, 8);
};