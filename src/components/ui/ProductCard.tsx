import React from 'react';
import { Link } from 'react-router-dom';
import { Eye, ShoppingCart } from 'lucide-react';
import { Product } from '../../types';
import Button from './Button';
import ImageWithFallback from './ImageWithFallback';

interface ProductCardProps {
  product: Product;
  showQuickView?: boolean;
  onQuickView?: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  product, 
  showQuickView = true, 
  onQuickView 
}) => {
  return (
    <div className="group bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-gray-100 dark:bg-gray-700">
        <Link to={`/product/${product.id}`}>
          <ImageWithFallback
            src={product.image}
            alt={product.name}
            width={300}
            height={300}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </Link>
        
        {/* Quick Actions Overlay */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-2">
          {showQuickView && onQuickView && (
            <button
              onClick={() => onQuickView(product)}
              className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors shadow-lg"
              aria-label={`Quick view ${product.name}`}
            >
              <Eye size={18} />
            </button>
          )}
          <Link
            to={`/product/${product.id}`}
            className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors shadow-lg"
            aria-label={`View details for ${product.name}`}
          >
            <ShoppingCart size={18} />
          </Link>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <div className="mb-2">
          <span className="text-xs font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wide">
            {product.category}
          </span>
        </div>
        
        <Link to={`/product/${product.id}`}>
          <h3 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>
        
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Action Button */}
        <Link to="/contact" className="block">
          <Button 
            variant="outline" 
            size="sm" 
            className="w-full group-hover:bg-gray-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-gray-900 transition-colors"
          >
            Order Now
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;