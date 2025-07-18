import React, { useState, useCallback } from 'react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  loading?: 'lazy' | 'eager';
  onLoad?: () => void;
  onError?: () => void;
  sizes?: string;
  priority?: boolean;
  fallbackSrc?: string;
}

const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  loading = 'lazy',
  onLoad,
  onError,
  sizes,
  priority = false,
  fallbackSrc
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [imageSrc, setImageSrc] = useState(src);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
    onLoad?.();
  }, [onLoad]);

  const handleError = useCallback(() => {
    if (!hasError) {
      setHasError(true);
      
      // Try fallback image first
      if (fallbackSrc && imageSrc !== fallbackSrc) {
        setImageSrc(fallbackSrc);
        return;
      }
      
      // Generate SVG placeholder as last resort
      const placeholder = `data:image/svg+xml;base64,${btoa(`
        <svg width="${width || 400}" height="${height || 400}" xmlns="http://www.w3.org/2000/svg">
          <rect width="100%" height="100%" fill="#f3f4f6"/>
          <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="14" fill="#9ca3af" text-anchor="middle" dy=".3em">
            Image unavailable
          </text>
        </svg>
      `)}`;
      setImageSrc(placeholder);
    }
    onError?.();
  }, [width, height, onError, hasError, fallbackSrc, imageSrc]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Loading placeholder */}
      {!isLoaded && !hasError && (
        <div 
          className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse flex items-center justify-center"
          aria-hidden="true"
        >
          <div className="w-8 h-8 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      
      {/* Main Image */}
      <img
        src={imageSrc}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : loading}
        onLoad={handleLoad}
        onError={handleError}
        sizes={sizes}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        decoding="async"
        fetchPriority={priority ? 'high' : 'auto'}
      />
    </div>
  );
};

export default ImageWithFallback;