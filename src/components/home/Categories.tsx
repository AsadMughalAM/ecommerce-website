import React from 'react';
import { categoryHeroImages } from '../../data/imageAssets';
import CategoryCard from './CategoryCard';

const Categories: React.FC = () => {
  const categories = [
    { title: "Hoodies", image: categoryHeroImages.hoodies, link: "/categories/hoodies" },
    { title: "Sweatpants", image: categoryHeroImages.sweatpants, link: "/categories/sweatpants" },
    { title: "Jackets", image: categoryHeroImages.jackets, link: "/categories/jackets" },
    { title: "Tracksuits", image: categoryHeroImages.tracksuits, link: "/categories/tracksuits" },
    { title: "Sweatshirts", image: categoryHeroImages.sweatshirts, link: "/categories/sweatshirts" },
    { title: "Footwear", image: categoryHeroImages.footwear, link: "/categories/footwear" },
    { title: "Vests", image: categoryHeroImages.vests, link: "/categories/vests" },
    { title: "T-Shirts", image: categoryHeroImages['t-shirts'], link: "/categories/t-shirts" },
    { title: "Pants", image: categoryHeroImages.pants, link: "/categories/pants" },
    { title: "Shorts", image: categoryHeroImages.shorts, link: "/categories/shorts" },
    { title: "Swimsuit", image: categoryHeroImages.swimsuit, link: "/categories/swimsuit" },
    { title: "Caps", image: categoryHeroImages.caps, link: "/categories/caps" },
    { title: "Socks", image: categoryHeroImages.socks, link: "/categories/socks" }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800" data-scroll-section>
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
            Shop by Category
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Explore our diverse range of apparel, crafted with premium materials and care.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {categories.map((category, index) => (
            <CategoryCard 
              key={index}
              title={category.title}
              image={category.image}
              link={category.link}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
