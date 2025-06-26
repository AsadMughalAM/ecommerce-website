import React, { useState } from 'react';
import { Product } from '../../types';
import { Link } from 'react-router-dom';
import { Heart, Eye } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProductCardProps {
  product: Product;
  showQuickView?: boolean;
  onQuickView?: (product: Product) => void;
  index?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  product, 
  showQuickView = false, 
  onQuickView,
  index = 0
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleQuickView = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onQuickView?.(product);
  };

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group card overflow-hidden transition-all duration-500 hover:shadow-2xl"
      data-scroll
      data-scroll-speed="0.3"
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative overflow-hidden bg-gray-100 dark:bg-gray-800">
          {/* Image */}
          <div className="aspect-square relative">
            {!imageLoaded && (
              <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse" />
            )}
            <img 
              src={product.image} 
              alt={product.name} 
              className={`w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => setImageLoaded(true)}
              loading="lazy"
            />
          </div>

          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="glass px-3 py-1 text-xs font-bold text-white rounded-full border border-white/20 backdrop-blur-sm">
              {product.category.toUpperCase()}
            </span>
          </div>

          {/* Action Buttons */}
          <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <button
              onClick={handleLike}
              className={`p-3 rounded-full backdrop-blur-sm transition-all duration-300 ${
                isLiked 
                  ? 'bg-red-500 text-white shadow-lg' 
                  : 'glass text-white hover:bg-white/20 border border-white/20'
              }`}
            >
              <Heart size={16} fill={isLiked ? 'currentColor' : 'none'} />
            </button>
            
            {showQuickView && onQuickView && (
              <button
                onClick={handleQuickView}
                className="p-3 rounded-full glass text-white hover:bg-white/20 backdrop-blur-sm transition-all duration-300 border border-white/20"
              >
                <Eye size={16} />
              </button>
            )}
          </div>

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {product.name}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
          
          {/* Action Button */}
          <div className="flex items-center justify-between">
            <span className="text-sm font-bold text-blue-600 dark:text-blue-400 tracking-wide">
              VIEW DETAILS
            </span>
            <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 group-hover:bg-gray-900 dark:group-hover:bg-white transition-all duration-300 flex items-center justify-center">
              <svg 
                className="w-4 h-4 text-gray-600 dark:text-gray-400 group-hover:text-white dark:group-hover:text-gray-900 transition-colors duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;