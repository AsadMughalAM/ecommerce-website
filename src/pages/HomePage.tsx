import React from 'react';
import SimpleHero from '../components/home/SimpleHero';
import FeaturedProducts from '../components/home/FeaturedProducts';
import Categories from '../components/home/Categories';

const HomePage: React.FC = () => {
  return (
    <div className="overflow-x-hidden">
      <SimpleHero />
      <FeaturedProducts />
      <Categories />
    </div>
  );
};

export default HomePage;