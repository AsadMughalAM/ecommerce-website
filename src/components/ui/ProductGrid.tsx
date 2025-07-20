import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../types';
import ProductCard from './ProductCard';
import Modal from './Modal';

interface ProductGridProps {
  products: Product[];
  showQuickView?: boolean;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, showQuickView = true }) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleQuickView = (product: Product) => {
    setSelectedProduct(product);
  };

  const closeQuickView = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map(product => (
          <ProductCard 
            key={product.id} 
            product={product} 
            showQuickView={showQuickView}
            onQuickView={handleQuickView}
          />
        ))}
      </div>

      {/* Quick View Modal */}
      {selectedProduct && (
        <Modal
          isOpen={!!selectedProduct}
          onClose={closeQuickView}
          title="Quick View"
          size="lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
              <img 
                src={selectedProduct.image} 
                alt={selectedProduct.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-4">
              <div>
                <h2 className="text-2xl font-bold text-[#1A1A1A] mb-2">
                  {selectedProduct.name}
                </h2>
                <p className="text-gray-600 mb-4">
                  {selectedProduct.description}
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {selectedProduct.longDescription}
                </p>
              </div>
              <div className="flex space-x-3">
                <Link
                  to={`/product/${selectedProduct.id}`}
                  className="flex-1 bg-[#1A1A1A] text-white py-3 px-6 rounded-lg font-medium hover:bg-black transition-colors text-center"
                  onClick={closeQuickView}
                >
                  View Full Details
                </Link>
                <Link
                  to="/contact"
                  className="px-6 py-3 border border-[#1A1A1A] text-[#1A1A1A] rounded-lg font-medium hover:bg-[#F7F2EA] transition-colors text-center"
                  onClick={closeQuickView}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default ProductGrid;