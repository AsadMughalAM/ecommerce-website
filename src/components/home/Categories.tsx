import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { categoryHeroImages } from '../../data/imageAssets';

interface CategoryCardProps {
  title: string;
  image: string;
  link: string;
  index: number;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, image, link, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      data-scroll
      data-scroll-speed="0.5"
    >
      <Link 
        to={link}
        className="group relative overflow-hidden rounded-2xl h-80 flex items-end transition-all duration-500 hover:scale-[1.02] card"
      >
        <img 
          src={image} 
          alt={title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent"></div>
        <div className="relative p-8 flex w-full justify-between items-center z-10">
          <h3 className="text-2xl font-black text-white drop-shadow-2xl">{title}</h3>
          <span className="glass p-4 rounded-full text-white group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110 border border-white/20">
            <ArrowRight size={20} />
          </span>
        </div>
      </Link>
    </motion.div>
  );
};

const Categories: React.FC = () => {
  const categories = [
    {
      title: "Hoodies",
      image: categoryHeroImages.hoodies,
      link: "/categories/hoodies"
    },
    {
      title: "Sweatpants",
      image: categoryHeroImages.sweatpants,
      link: "/categories/sweatpants"
    },
    {
      title: "Jackets",
      image: categoryHeroImages.jackets,
      link: "/categories/jackets"
    },
    {
      title: "Tracksuits",
      image: categoryHeroImages.tracksuits,
      link: "/categories/tracksuits"
    },
    {
      title: "Sweatshirts",
      image: categoryHeroImages.sweatshirts,
      link: "/categories/sweatshirts"
    },
    {
      title: "Footwear",
      image: categoryHeroImages.footwear,
      link: "/categories/footwear"
    },
    {
      title: "Vests",
      image: categoryHeroImages.vests,
      link: "/categories/vests"
    },
    {
      title: "T-Shirts",
      image: categoryHeroImages['t-shirts'],
      link: "/categories/t-shirts"
    },
    {
      title: "Pants",
      image: categoryHeroImages.pants,
      link: "/categories/pants"
    },
    {
      title: "Jeans",
      image: categoryHeroImages.jeans,
      link: "/categories/jeans"
    },
    {
      title: "Shorts",
      image: categoryHeroImages.shorts,
      link: "/categories/shorts"
    },
    {
      title: "Swimsuit",
      image: categoryHeroImages.swimsuit,
      link: "/categories/swimsuit"
    },
    {
      title: "Caps",
      image: categoryHeroImages.caps,
      link: "/categories/caps"
    },
    {
      title: "Socks",
      image: categoryHeroImages.socks,
      link: "/categories/socks"
    }
  ];

  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-800" data-scroll-section>
      <div className="container mx-auto px-4">
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          data-scroll
          data-scroll-speed="1"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
            Shop by Category
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-200 max-w-3xl mx-auto leading-relaxed font-medium">
            Explore our diverse range of apparel categories, each designed with premium materials and attention to detail.
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