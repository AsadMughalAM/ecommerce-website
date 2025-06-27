import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../hooks/useTheme';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 200) {
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

  // Force visibility for testing - remove this line after confirming it works
  const forceVisible = window.pageYOffset > 200 || true;

  return (
    <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 99999 }}>
      <AnimatePresence>
        {(isVisible || forceVisible) && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className={`
              w-12 h-12 rounded-full shadow-2xl transition-all duration-300 
              flex items-center justify-center border-2 backdrop-blur-sm
              ${theme === 'dark'
                ? 'bg-white text-gray-900 border-white/30 hover:bg-gray-100 hover:shadow-white/50'
                : 'bg-gray-900 text-white border-gray-900/30 hover:bg-black hover:shadow-gray-900/50'
              }
            `}
            style={{
              position: 'fixed',
              bottom: '20px',
              right: '20px',
              zIndex: 99999,
              width: '48px',
              height: '48px'
            }}
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ScrollToTop;