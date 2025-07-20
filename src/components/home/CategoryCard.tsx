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
    <div className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
      <Link 
        to={link}
        className="group relative overflow-hidden rounded-2xl h-80 flex items-end transition-transform duration-500 hover:scale-[1.02] block"
        aria-label={`Shop ${title} collection`}
      >
        <ImageWithFallback
          src={image} 
          alt={title}
          width={400}
          height={400}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          priority={index < 4}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
        <div className="relative p-6 flex w-full justify-between items-center z-20">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <span className="p-3 rounded-full text-white bg-white/10 group-hover:bg-white/20 transition" aria-hidden="true">
            <ArrowRight size={18} />
          </span>
        </div>
      </Link>
    </div>
  );
});

export default CategoryCard;
