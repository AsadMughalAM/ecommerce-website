// CategoryCard.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ImageWithFallback from '../ui/ImageWithFallback';

interface CategoryCardProps {
  title: string;
  image: string;
  link: string;
  index: number;
}

const CategoryCard: React.FC<CategoryCardProps> = React.memo(({ title, image, link, index }) => {
  return (
    <div className="animate-fade-in group" style={{ animationDelay: `${index * 0.05}s` }}>
      <Link 
        to={link}
        className="relative overflow-hidden rounded-2xl lg:rounded-3xl h-72 sm:h-80 lg:h-96 flex items-end transition-all duration-700 hover:scale-[1.03] hover:shadow-2xl block bg-gray-200 dark:bg-gray-700"
        aria-label={`Shop ${title} collection`}
      >
        {/* Image Container */}
        <div className="absolute inset-0 w-full h-full">
          <ImageWithFallback
            src={image} 
            alt={title}
            width={400}
            height={400}
            loading="lazy"
            className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-110"
            priority={index < 4}
          />
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-black/90 group-hover:via-black/40 transition-all duration-500"></div>
        
        {/* Content */}
        <div className="relative p-6 lg:p-8 flex w-full justify-between items-center z-30">
          <div className="flex-1">
            <h3 className="text-xl lg:text-2xl font-bold text-white mb-1 group-hover:text-blue-300 transition-colors duration-300">
              {title}
            </h3>
            <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              Explore Collection
            </p>
          </div>
          
          {/* Arrow Icon */}
          <div className="ml-4 p-3 lg:p-4 rounded-full bg-white/10 backdrop-blur-sm group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300 border border-white/20 group-hover:border-white/30">
            <ArrowRight 
              size={20} 
              className="text-white group-hover:translate-x-1 transition-transform duration-300" 
            />
          </div>
        </div>
        
        {/* Hover Effect Border */}
        <div className="absolute inset-0 rounded-2xl lg:rounded-3xl border-2 border-transparent group-hover:border-white/20 transition-all duration-500 pointer-events-none"></div>
      </Link>
    </div>
  );
});

export default CategoryCard;
