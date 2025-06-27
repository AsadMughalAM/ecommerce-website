import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../hooks/useTheme';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className={`
            fixed bottom-6 right-6 z-[9999] w-12 h-12 rounded-full 
            shadow-2xl transition-all duration-300 flex items-center justify-center
            border-2 backdrop-blur-sm hover:shadow-3xl
            ${theme === 'dark'
              ? 'bg-white text-gray-900 border-white/20 hover:bg-gray-100 hover:border-white/40'
              : 'bg-gray-900 text-white border-gray-900/20 hover:bg-black hover:border-gray-900/40'
            }
          `}
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            zIndex: 9999,
            width: '48px',
            height: '48px',
            borderRadius: '50%'
          }}
          aria-label="Scroll to top"
        >
          <ArrowUp 
            size={20} 
            className="transition-transform duration-300 group-hover:-translate-y-1" 
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;