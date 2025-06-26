// Utility functions for image handling and optimization

export const getOptimizedImageUrl = (url: string, width?: number, height?: number, quality = 80) => {
  // For Unsplash images, add optimization parameters
  if (url.includes('unsplash.com')) {
    const params = new URLSearchParams();
    params.append('auto', 'format');
    params.append('fit', 'crop');
    if (width) params.append('w', width.toString());
    if (height) params.append('h', height.toString());
    params.append('q', quality.toString());
    
    return `${url}?${params.toString()}`;
  }
  
  return url;
};

export const generateImageSrcSet = (baseUrl: string, sizes: number[]) => {
  return sizes
    .map(size => `${getOptimizedImageUrl(baseUrl, size)} ${size}w`)
    .join(', ');
};

export const getImageAlt = (productName: string, category: string) => {
  return `${productName} - ${category} from ELEVATE collection`;
};

export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

export const getPlaceholderImage = (width = 400, height = 400) => {
  return `data:image/svg+xml;base64,${btoa(`
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f3f4f6"/>
      <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="14" fill="#9ca3af" text-anchor="middle" dy=".3em">
        Loading...
      </text>
    </svg>
  `)}`;
};