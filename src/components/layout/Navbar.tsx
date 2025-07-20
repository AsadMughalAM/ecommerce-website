import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import ThemeToggle from '../ui/ThemeToggle';
import MobileMenu from './MobileMenu';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'CATEGORIES', path: '/categories' },
    { name: 'SERVICES', path: '/services' },
    { name: 'ABOUT', path: '/about' },
    { name: 'CONTACT', path: '/contact' },
  ];

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);


  // Dark mode navbar styling to match reference image
  const navbarClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-gray-900 dark:bg-gray-900 border-b border-gray-800 dark:border-gray-800`;

  return (
    <>
      <nav className={`${navbarClasses} animate-slide-up`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link
                to="/"
                className="text-xl font-black tracking-tight hover:text-white text-white transition-all duration-300 hover:scale-105"
                aria-label="Go to homepage"
              >
                TORTOCRAFT
              </Link>
            </div>

            {/* Desktop Navigation - Centered */}
            <div className="hidden lg:flex items-center justify-center flex-1 mx-12">
              <nav className="flex items-center space-x-8" role="navigation" aria-label="Main navigation">
                {navLinks.map((link, index) => (
                  <div key={link.name} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <Link
                      to={link.path}
                      className={`text-sm font-medium tracking-wide transition-all duration-300 relative group py-2 ${
                        location.pathname === link.path
                          ? 'text-blue-400 font-semibold'
                          : 'text-gray-300 hover:text-white'
                      }`}
                      aria-current={location.pathname === link.path ? 'page' : undefined}
                    >
                      {link.name}
                      {/* Active indicator */}
                      {location.pathname === link.path && (
                        <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-400" />
                      )}
                    </Link>
                  </div>
                ))}
              </nav>
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-3">
              {/* Theme Toggle */}
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center space-x-2">
              <ThemeToggle />
              
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800 transition-all duration-300 hover:scale-105 active:scale-95"
                aria-label="Toggle mobile menu"
              >
                <Menu size={20} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={mobileMenuOpen} 
        onClose={() => setMobileMenuOpen(false)} 
      />
    </>
  );
};

export default Navbar;