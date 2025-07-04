import React from 'react';
import { motion } from 'framer-motion';
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
    <section className="section-padding bg-gray-50 dark:bg-gray-800" data-scroll-section>
      <div className="container mx-auto px-4">
        <motion.div 
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Explore our diverse range of apparel, crafted with premium materials and care.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
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
