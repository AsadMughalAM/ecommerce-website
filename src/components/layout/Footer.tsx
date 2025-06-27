import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Youtube, Mail, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const navigate = useNavigate();

  const handleNavClick = (path: string) => {
    window.scrollTo(0, 0);
    navigate(path);
  };

  const categories = [
    { name: 'Hoodies', path: '/categories/hoodies' },
    { name: 'Sweatpants', path: '/categories/sweatpants' },
    { name: 'Jackets', path: '/categories/jackets' },
    { name: 'Tracksuits', path: '/categories/tracksuits' },
    { name: 'Sweatshirts', path: '/categories/sweatshirts' },
    { name: 'Footwear', path: '/categories/footwear' },
    { name: 'Vests', path: '/categories/vests' },
    { name: 'T-Shirts', path: '/categories/t-shirts' },
    { name: 'Pants', path: '/categories/pants' },
    { name: 'Jeans', path: '/categories/jeans' },
    { name: 'Shorts', path: '/categories/shorts' },
    { name: 'Swimsuit', path: '/categories/swimsuit' },
    { name: 'Caps', path: '/categories/caps' },
    { name: 'Socks', path: '/categories/socks' }
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-white" data-scroll-section>
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-black mb-6 text-white">TORTOCRAFT</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Premium apparel designed for comfort and style. Elevate your wardrobe with our curated collection of modern essentials.
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: Instagram, href: "#" },
                  { icon: Twitter, href: "#" },
                  { icon: Facebook, href: "#" },
                  { icon: Youtube, href: "#" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="glass p-3 rounded-full text-gray-300 hover:text-white transition-all duration-300 border border-white/10"
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* All Categories - Professional Grid Layout */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-bold mb-6 text-white">Shop Categories</h4>
              <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                {categories.map((category, index) => (
                  <motion.button
                    key={index}
                    onClick={() => handleNavClick(category.path)}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                    className="text-left text-gray-300 hover:text-white transition-colors duration-300 font-medium text-sm py-1 hover:bg-gray-800/30 px-2 rounded-md"
                  >
                    {category.name}
                  </motion.button>
                ))}
              </div>
              
              {/* View All Categories Button */}
              <motion.button
                onClick={() => handleNavClick('/categories')}
                whileHover={{ scale: 1.02 }}
                className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 text-sm"
              >
                View All Categories →
              </motion.button>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-bold mb-6 text-white">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin size={18} className="mr-3 mt-1 flex-shrink-0 text-gray-400" />
                  <span className="text-gray-300 leading-relaxed">123 Fashion Street, New York, NY 10001</span>
                </li>
                <li className="flex items-center">
                  <Phone size={18} className="mr-3 flex-shrink-0 text-gray-400" />
                  <span className="text-gray-300">(123) 456-7890</span>
                </li>
                <li className="flex items-center">
                  <Mail size={18} className="mr-3 flex-shrink-0 text-gray-400" />
                  <span className="text-gray-300">contact@tortocraft.com</span>
                </li>
              </ul>

              {/* Quick Contact Button */}
              <motion.button
                onClick={() => handleNavClick('/contact')}
                whileHover={{ scale: 1.02 }}
                className="mt-6 w-full bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 text-sm border border-gray-700 hover:border-gray-600"
              >
                Get In Touch →
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p 
              className="text-gray-400 text-sm mb-4 md:mb-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              &copy; {new Date().getFullYear()} TORTOCRAFT. All rights reserved.
            </motion.p>
            <motion.div 
              className="flex space-x-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {['Privacy Policy', 'Terms of Service', 'Shipping', 'Returns'].map((item, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-sm font-medium"
                >
                  {item}
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;