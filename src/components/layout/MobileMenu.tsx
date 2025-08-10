import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { X, Home, Grid3X3, Briefcase, User, Phone } from 'lucide-react';
import ThemeToggle from '../ui/ThemeToggle';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const location = useLocation();
  const navigate = useNavigate();

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

  const handleNavClick = (path: string) => {
    window.scrollTo(0, 0);
    navigate(path);
    onClose();
  };

  return (
    <>
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 lg:hidden animate-fade-in"
            onClick={onClose}
          />
          
          {/* Menu */}
          <div
            className="fixed top-0 left-0 h-full w-80 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl z-50 lg:hidden overflow-y-auto border-r border-gray-200/20 dark:border-gray-700/20 shadow-2xl animate-slide-in-left"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200/20 dark:border-gray-700/20">
              <button
                onClick={() => handleNavClick('/')}
                className="text-2xl font-black text-gray-900 dark:text-white"
              >
                TORTOCRAFT
              </button>
              <div className="flex items-center space-x-2">
                <ThemeToggle />
                <button
                  onClick={onClose}
                  className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                  aria-label="Close mobile menu"
                >
                  <X size={24} />
                </button>
              </div>
            </div>


            {/* Navigation Links */}
            <nav className="p-6 space-y-2" role="navigation" aria-label="Mobile navigation">
              <h3 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
                Navigation
              </h3>
              {navLinks.map((link, index) => {
                const Icon = link.icon;
                const isActive = location.pathname === link.path;
                
                return (
                  <div key={link.name} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <button
                      onClick={() => handleNavClick(link.path)}
                      className={`flex items-center space-x-3 p-4 rounded-xl transition-all duration-300 w-full text-left ${
                        isActive
                          ? 'bg-blue-600 text-white shadow-lg'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'
                      }`}
                    >
                      <Icon size={20} />
                      <span className="font-semibold">{link.name}</span>
                    </button>
                  </div>
                );
              })}
            </nav>

            {/* Quick Categories */}
            <div className="p-6 border-t border-gray-200/20 dark:border-gray-700/20">
              <h3 className="text-xs font-bold text-gray-500 dark:text-gray-400 mb-4 uppercase tracking-wider">
                Quick Categories
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {categories.map((category, index) => (
                  <div key={category.title} className="animate-fade-in" style={{ animationDelay: `${0.5 + index * 0.05}s` }}>
                    <button
                      onClick={() => handleNavClick(category.link)}
                      className="block text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 font-medium w-full text-left"
                    >
                      {category.title}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-gray-200/20 dark:border-gray-700/20 mt-auto">
              <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                © 2024 TORTOCRAFT. All rights reserved.
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MobileMenu;