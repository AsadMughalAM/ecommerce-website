// Application constants
export const APP_CONFIG = {
  name: 'TORTOCRAFT',
  description: 'Premium fashion collection featuring hoodies, tracksuits, sweatshirts, and more.',
  url: 'https://tortocraft.com',
  email: 'tortocraft415@gmail.com',
  phone: '+92 303 5648603',
  address: '7901 4th ST N STE 7236, Florida City, Florida 33702',
  social: {
    instagram: 'https://instagram.com/tortocraft',
    twitter: 'https://twitter.com/tortocraft',
    facebook: 'https://facebook.com/tortocraft',
    youtube: 'https://youtube.com/tortocraft'
  }
};

export const SEO_DEFAULTS = {
  title: 'TORTOCRAFT - Premium Fashion Collection',
  description: 'Discover premium apparel that combines unmatched comfort with cutting-edge design. Where innovation meets fashion excellence.',
  keywords: 'fashion, apparel, hoodies, tracksuits, sweatshirts, premium clothing, streetwear',
  image: 'https://tortocraft.com/og-image.jpg',
  type: 'website'
};

export const PERFORMANCE_CONFIG = {
  imageQuality: 80,
  lazyLoadOffset: '50px',
  debounceDelay: 300,
  cacheTimeout: 5 * 60 * 1000, // 5 minutes
};

export const ACCESSIBILITY_CONFIG = {
  focusRingColor: 'ring-blue-500',
  skipLinkTarget: '#main-content',
  announceRouteChanges: true,
};

export const SECURITY_CONFIG = {
  maxFileSize: 5 * 1024 * 1024, // 5MB
  allowedImageTypes: ['image/jpeg', 'image/png', 'image/webp'],
  rateLimitWindow: 15 * 60 * 1000, // 15 minutes
  maxRequestsPerWindow: 100,
};