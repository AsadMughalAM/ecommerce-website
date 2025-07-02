import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const toggleVisibility = () => {
      const scrolled = window.pageYOffset;
      
      if (isHomePage) {
        // On home page, show after hero section (100vh)
        setIsVisible(scrolled > window.innerHeight);
      } else {
        // On other pages, show after 300px scroll
        setIsVisible(scrolled > 300);
      }
    };

    // Check initial scroll position
    toggleVisibility();

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, [isHomePage]);

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
          initial={{ opacity: 0, scale: 0.5, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 100 }}
          transition={{ 
            duration: 0.3, 
            ease: "easeOut",
            type: "spring",
            stiffness: 260,
            damping: 20
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-[9999] p-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 group border-2 border-transparent hover:border-gray-300 dark:hover:border-gray-600"
          aria-label="Scroll to top"
          style={{ 
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)'
          }}
        >
          <ChevronUp 
            size={24} 
            className="group-hover:-translate-y-1 transition-transform duration-300" 
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;