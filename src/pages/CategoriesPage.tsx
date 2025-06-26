import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { categoryHeroImages } from '../data/imageAssets';

interface CategoryItemProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ title, description, image, link }) => {
  return (
    <div className="group bg-white dark:bg-gray-800 overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700">
      <div className="relative h-80 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">{description}</p>
        <Link 
          to={link}
          className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors group"
        >
          Shop Collection 
          <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

const CategoriesPage: React.FC = () => {
 const categories = [
  {
    title: "Hoodies",
    description: "Cozy up in our stylish and versatile hoodie collection for all seasons.",
    image: categoryHeroImages.hoodies,
    link: "/categories/hoodies"
  },
  {
    title: "Sweatpants",
    description: "Relax or stay active in sweatpants that blend comfort and function.",
    image: categoryHeroImages.sweatpants,
    link: "/categories/sweatpants"
  },
  {
    title: "Jackets",
    description: "Explore our outerwear selection crafted for warmth and style.",
    image: categoryHeroImages.jackets,
    link: "/categories/jackets"
  },
  {
    title: "Tracksuits",
    description: "Stylish tracksuits that offer comfort and athletic performance.",
    image: categoryHeroImages.tracksuits,
    link: "/categories/tracksuits"
  },
  {
    title: "Sweatshirts",
    description: "Classic and comfy sweatshirts for your casual everyday look.",
    image: categoryHeroImages.sweatshirts,
    link: "/categories/sweatshirts"
  },
  {
    title: "Footwear",
    description: "Step up your style with our premium footwear collection.",
    image: categoryHeroImages.footwear,
    link: "/categories/footwear"
  },
  {
    title: "Vests",
    description: "Lightweight and fashionable vests for layering and style.",
    image: categoryHeroImages.vests,
    link: "/categories/vests"
  },
  {
    title: "T-Shirts",
    description: "Everyday essentials—premium T-shirts in every style you need.",
    image: categoryHeroImages['t-shirts'],
    link: "/categories/t-shirts"
  },
  {
    title: "Pants",
    description: "Smart, casual, or rugged – find the perfect pants for any occasion.",
    image: categoryHeroImages.pants,
    link: "/categories/pants"
  },
  {
    title: "Jeans",
    description: "Durable and stylish denim jeans for a timeless wardrobe staple.",
    image: categoryHeroImages.jeans,
    link: "/categories/jeans"
  },
  {
    title: "Shorts",
    description: "Breathe easy and stay cool with our versatile shorts collection.",
    image: categoryHeroImages.shorts,
    link: "/categories/shorts"
  },
  {
    title: "Swimsuit",
    description: "Make a splash with swimsuits that combine comfort and trend.",
    image: categoryHeroImages.swimsuit,
    link: "/categories/swimsuit"
  },
  {
    title: "Caps",
    description: "Complete your look with our trendy and functional caps.",
    image: categoryHeroImages.caps,
    link: "/categories/caps"
  },
  {
    title: "Socks",
    description: "Soft, breathable socks that provide all-day comfort.",
    image: categoryHeroImages.socks,
    link: "/categories/socks"
  }
];

  return (
    <div className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">Our Collections</h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
            Explore our diverse range of apparel categories, crafted with premium materials and attention to detail. 
            Each collection is designed to bring comfort, style, and confidence to your everyday wardrobe.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <CategoryItem 
              key={index}
              title={category.title}
              description={category.description}
              image={category.image}
              link={category.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;