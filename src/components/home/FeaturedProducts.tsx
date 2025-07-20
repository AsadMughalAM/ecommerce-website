import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import ProductGrid from '../ui/ProductGrid';
import { getFeaturedProducts } from '../../data/products';

const FeaturedProducts: React.FC = () => {
  const featuredProducts = getFeaturedProducts();

  return (
    <section className="section-padding bg-white dark:bg-gray-900" data-scroll-section>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center glass px-6 py-3 rounded-full mb-6 border border-gray-200 dark:border-gray-700">
            <Star className="text-yellow-500 mr-2" size={16} />
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 tracking-wide">
              CUSTOMER FAVORITES
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
            Featured Products
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Discover our most popular items, carefully selected for their exceptional quality, 
            comfort, and timeless style that our customers love.
          </p>
        </div>

        {/* Product Grid */}
        <div className="animate-slide-up">
          <ProductGrid products={featuredProducts} />
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20 animate-scale-in">
          <div 
            className="relative rounded-3xl p-12 md:p-16 overflow-hidden"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            {/* Strong overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/80 to-black/90"></div>
            
            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-black text-white mb-6 drop-shadow-lg">
                Explore Our Full Collection
              </h3>
              <p className="text-xl text-gray-100 mb-10 max-w-2xl mx-auto drop-shadow-md leading-relaxed">
                From everyday essentials to statement pieces, find everything you need to elevate your wardrobe with our premium collection.
              </p>
              <Link to="/categories">
                <button className="btn btn-primary bg-white text-gray-900 hover:bg-gray-100 text-lg px-10 py-4 rounded-full font-bold shadow-2xl hover:shadow-white/25 transition-all duration-300 hover:scale-105">
                  View All Products 
                  <ArrowRight size={20} className="ml-3" />
                </button>
              </Link>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-6 right-6 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-6 left-6 w-20 h-20 bg-white/5 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;