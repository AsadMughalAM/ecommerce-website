import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  // Force scroll to top on every route change
  useEffect(() => {
    // Check if we're navigating to contact page and should scroll to bottom
    const shouldScrollToBottom = location.state?.scrollToBottom;
    
    if (shouldScrollToBottom) {
      // Small delay to ensure page is rendered, then scroll to bottom
      setTimeout(() => {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth'
        });
      }, 100);
    } else {
      // Force immediate scroll to top for all other navigation
      window.scrollTo(0, 0);
      // Also set scroll restoration to manual to prevent browser from restoring scroll position
      if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
      }
    }
    
    // Clear any location state after handling it
    if (location.state?.scrollToBottom) {
      window.history.replaceState({}, document.title);
    }
  }, [location.pathname, location.state]);

  // Additional effect to handle browser back/forward navigation
  useEffect(() => {
    const handlePopState = () => {
      // Force scroll to top on browser back/forward
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 0);
    };

    window.addEventListener('popstate', handlePopState);
    
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  useEffect(() => {
    // Prevent horizontal scroll and hide vertical scrollbar
    document.body.style.overflowX = 'hidden';
    document.documentElement.style.overflowX = 'hidden';
    
    // Hide scrollbars completely
    document.documentElement.style.scrollbarWidth = 'none';
    document.documentElement.style.msOverflowStyle = 'none';
    document.body.style.scrollbarWidth = 'none';
    document.body.style.msOverflowStyle = 'none';
    
    // Set scroll restoration to manual to prevent browser from restoring scroll position
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    
    // Add CSS to hide webkit scrollbars
    const style = document.createElement('style');
    style.textContent = `
      html::-webkit-scrollbar,
      body::-webkit-scrollbar,
      *::-webkit-scrollbar {
        display: none !important;
        width: 0 !important;
        height: 0 !important;
      }
      
      html, body, #root {
        scrollbar-width: none !important;
        -ms-overflow-style: none !important;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.body.style.overflowX = 'auto';
      document.documentElement.style.overflowX = 'auto';
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
      // Reset scroll restoration when component unmounts
      if ('scrollRestoration' in history) {
        history.scrollRestoration = 'auto';
      }
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 overflow-x-hidden">
      <Navbar />
      <main className="flex-grow pt-16 overflow-x-hidden">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;