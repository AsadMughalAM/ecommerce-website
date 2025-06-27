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
          initial={{ opacity: 0, scale: 0.5, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 100 }}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className={`fixed bottom-6 right-6 z-[9999] p-3 rounded-full shadow-2xl transition-all duration-300 group border-2 backdrop-blur-sm ${
            theme === 'dark'
              ? 'bg-white/95 text-gray-900 border-white/20 hover:bg-white hover:shadow-white/30'
              : 'bg-gray-900/95 text-white border-gray-900/20 hover:bg-gray-900 hover:shadow-gray-900/30'
          }`}
          style={{ 
            position: 'fixed',
            zIndex: 9999,
            bottom: '24px',
            right: '24px'
          }}
          aria-label="Scroll to top"
        >
          <ArrowUp 
            size={20} 
            className="group-hover:-translate-y-1 transition-transform duration-300" 
          />
          
          {/* Pulse ring */}
          <motion.div 
            className={`absolute inset-0 rounded-full border-2 ${
              theme === 'dark' ? 'border-white/30' : 'border-gray-900/30'
            }`}
            animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;