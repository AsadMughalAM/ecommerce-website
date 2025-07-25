import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 overflow-x-hidden">
      <Navbar />
      <main id="main-content" className="flex-grow pt-16 overflow-x-hidden">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;