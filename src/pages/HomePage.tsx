import React from 'react';
import SimpleHero from '../components/home/SimpleHero';
import FeaturedProducts from '../components/home/FeaturedProducts';
import Categories from '../components/home/Categories';

const HomePage: React.FC = () => {
  return (
    <main className="overflow-x-hidden">
      {/* SEO-friendly page structure */}
      <h1 className="sr-only">TORTOCRAFT - Premium Fashion Collection</h1>
      <SimpleHero />
      <FeaturedProducts />
      <Categories />
    </main>
  );
};

export default HomePage;