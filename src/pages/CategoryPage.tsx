import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductGrid from '../components/ui/ProductGrid';
import Breadcrumb from '../components/ui/Breadcrumb';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import { getProductsByCategory } from '../data/products';
import { Product } from '../types';
import { Filter, SortAsc } from 'lucide-react';

const CategoryPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState<'name' | 'newest'>('name');

  useEffect(() => {
    if (category) {
      setLoading(true);
      setTimeout(() => {
        const categoryProducts = getProductsByCategory(category);
        setProducts(categoryProducts);
        setLoading(false);
      }, 500);
    }
  }, [category]);

  const getCategoryTitle = (slug: string): string => {
    return slug.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  const getCategoryDescription = (slug: string): string => {
    const descriptions: Record<string, string> = {
      'hoodies': 'Comfortable and stylish hoodies perfect for any casual occasion.',
      'sweatpants': 'Premium sweatpants designed for ultimate comfort and mobility.',
      'jackets': 'Versatile jackets that combine style with functionality.',
      'tracksuits': 'Complete tracksuit sets for active lifestyles.',
      'sweatshirts': 'Classic sweatshirts crafted from premium materials.',
      'footwear': 'Quality footwear designed for comfort and durability.',
      'vests': 'Lightweight vests perfect for layering.',
      't-shirts': 'Essential t-shirts made from premium cotton.',
      'pants': 'Comfortable pants suitable for various occasions.',
      'jeans': 'Classic denim jeans with modern fits.',
      'shorts': 'Comfortable shorts for warm weather.',
      'swimsuit': 'Stylish swimwear for beach and pool.',
      'caps': 'Trendy caps to complete your look.',
      'socks': 'Premium socks for all-day comfort.'
    };
    return descriptions[slug] || `Explore our collection of premium ${getCategoryTitle(slug).toLowerCase()}.`;
  };

  const sortedProducts = [...products].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    }
    return 0; // For 'newest', we'd need a date field
  });

  if (loading) {
    return (
      <div className="py-20 flex justify-center items-center min-h-[60vh]">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  if (!category || products.length === 0) {
    return (
      <div className="py-20 text-center min-h-[60vh] flex flex-col justify-center">
        <h2 className="text-2xl font-semibold text-[#1A1A1A] mb-2">Category Not Found</h2>
        <p className="text-gray-600">Sorry, we couldn't find any products in this category.</p>
      </div>
    );
  }

  const breadcrumbItems = [
    { label: 'Categories', href: '/categories' },
    { label: getCategoryTitle(category) }
  ];

  return (
    <div className="py-10 md:py-16 min-h-screen">
      <div className="container mx-auto px-4">
        <Breadcrumb items={breadcrumbItems} />
        
        {/* Header */}
        <div className="mb-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-2">
                {getCategoryTitle(category)}
              </h1>
              <p className="text-gray-600 max-w-3xl">
                {getCategoryDescription(category)}
              </p>
            </div>
            
            {/* Sort Controls */}
            <div className="flex items-center space-x-4 mt-6 md:mt-0">
              <div className="flex items-center space-x-2">
                <SortAsc size={18} className="text-gray-500" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as 'name' | 'newest')}
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm  focus:outline-none focus:ring-2 focus:ring-[#1A1A1A]"
                >
                  <option value="name">Sort by Name</option>
                  <option value="newest">Newest First</option>
                </select>
              </div>
              
              <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <Filter size={18} />
                <span className="text-sm">Filter</span>
              </button>
            </div>
          </div>
          
          {/* Product Count */}
          <div className="flex items-center justify-between py-4 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              Showing {sortedProducts.length} product{sortedProducts.length !== 1 ? 's' : ''}
            </p>
          </div>
        </div>
        
        {/* Products Grid */}
        <ProductGrid products={sortedProducts} />
        
        {/* Empty State */}
        {sortedProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Filter size={32} className="text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">No products found</h3>
            <p className="text-gray-600">Try adjusting your filters or check back later for new arrivals.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;