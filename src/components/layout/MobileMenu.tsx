import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, Home, Grid3X3, Briefcase, User, Phone, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from '../ui/ThemeToggle';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Categories', path: '/categories', icon: Grid3X3 },
    { name: 'Services', path: '/services', icon: Briefcase },
    { name: 'About', path: '/about', icon: User },
    { name: 'Contact', path: '/contact', icon: Phone },
  ];

  const categories = [
    { title: "Hoodies", link: "/categories/hoodies" },
    { title: "Sweatpants", link: "/categories/sweatpants" },
    { title: "Jackets", link: "/categories/jackets" },
    { title: "Tracksuits", link: "/categories/tracksuits" },
    { title: "Sweatshirts", link: "/categories/sweatshirts" },
    { title: "Footwear", link: "/categories/footwear" },
    { title: "T-Shirts", link: "/categories/t-shirts" },
    { title: "Jeans", link: "/categories/jeans" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 lg:hidden"
            onClick={onClose}
          />
          
          {/* Menu */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 left-0 h-full w-80 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl z-50 lg:hidden overflow-y-auto border-r border-gray-200/20 dark:border-gray-700/20 shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200/20 dark:border-gray-700/20">
              <Link
                to="/"
                onClick={onClose}
                className="text-2xl font-black text-gray-900 dark:text-white"
              >
                TORTOCRAFT
              </Link>
              <div className="flex items-center space-x-2">
                <ThemeToggle />
                <button
                  onClick={onClose}
                  className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* Search */}
            <div className="p-6 border-b border-gray-200/20 dark:border-gray-700/20">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full pl-10 pr-4 py-3 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 border border-gray-200 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Navigation Links */}
            <div className="p-6 space-y-2">
              <h3 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
                Navigation
              </h3>
              {navLinks.map((link, index) => {
                const Icon = link.icon;
                const isActive = location.pathname === link.path;
                
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      onClick={onClose}
                      className={`flex items-center space-x-3 p-4 rounded-xl transition-all duration-300 ${
                        isActive
                          ? 'bg-blue-600 text-white shadow-lg'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'
                      }`}
                    >
                      <Icon size={20} />
                      <span className="font-semibold">{link.name}</span>
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* Quick Categories */}
            <div className="p-6 border-t border-gray-200/20 dark:border-gray-700/20">
              <h3 className="text-xs font-bold text-gray-500 dark:text-gray-400 mb-4 uppercase tracking-wider">
                Quick Categories
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {categories.map((category, index) => (
                  <motion.div
                    key={category.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.05 }}
                  >
                    <Link
                      to={category.link}
                      onClick={onClose}
                      className="block text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 font-medium"
                    >
                      {category.title}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-gray-200/20 dark:border-gray-700/20 mt-auto">
              <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                © 2024 TORTOCRAFT. All rights reserved.
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;