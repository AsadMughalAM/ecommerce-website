// CategoryCard.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface CategoryCardProps {
  title: string;
  image: string;
  link: string;
  index: number;
}

const CategoryCard: React.FC<CategoryCardProps> = React.memo(({ title, image, link, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <Link 
        to={link}
        className="group relative overflow-hidden rounded-2xl h-80 flex items-end transition-transform duration-500 hover:scale-[1.02]"
      >
        <img 
          src={image} 
          alt={title}
          width={400}
          height={400}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
        <div className="relative p-6 flex w-full justify-between items-center z-10">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <span className="p-3 rounded-full text-white bg-white/10 group-hover:bg-white/20 transition">
            <ArrowRight size={18} />
          </span>
        </div>
      </Link>
    </motion.div>
  );
});

export default CategoryCard;
