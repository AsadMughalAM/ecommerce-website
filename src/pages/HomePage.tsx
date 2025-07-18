import React from 'react';
import SimpleHero from '../components/home/SimpleHero';
import FeaturedProducts from '../components/home/FeaturedProducts';
import Categories from '../components/home/Categories';
import SEOHead from '../components/ui/SEOHead';

const HomePage: React.FC = () => {
  return (
    <>
      <SEOHead 
        title="TORTOCRAFT - Premium Fashion Collection | Hoodies, Tracksuits & More"
        description="Discover premium apparel that combines unmatched comfort with cutting-edge design. Shop hoodies, tracksuits, sweatshirts, and more from TORTOCRAFT."
        keywords="premium fashion, hoodies, tracksuits, sweatshirts, streetwear, comfortable clothing, modern apparel"
        url="https://tortocraft.com"
      />
      <main className="overflow-x-hidden">
        {/* SEO-friendly page structure */}
        <h1 className="sr-only">TORTOCRAFT - Premium Fashion Collection</h1>
        <SimpleHero />
        <FeaturedProducts />
        <Categories />
      </main>
    </>
  );
};

export default HomePage;