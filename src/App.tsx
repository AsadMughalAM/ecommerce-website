import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Layout from './components/layout/Layout';
import ToastContainer from './components/ui/ToastContainer';
import ErrorBoundary from './components/ui/ErrorBoundary';
import LoadingSpinner from './components/ui/LoadingSpinner';
import { useToast } from './hooks/useToast';
import { analytics, trackWebVitals } from './utils/analytics';
import { useEffect } from 'react';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/HomePage'));
const CategoriesPage = lazy(() => import('./pages/CategoriesPage'));
const CategoryPage = lazy(() => import('./pages/CategoryPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ProductDetailPage = lazy(() => import('./pages/ProductDetailPage'));

// Loading component for Suspense
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
    <LoadingSpinner size="lg" />
  </div>
);

function App() {
  const { toasts } = useToast();

  useEffect(() => {
    // Set scroll restoration to manual globally
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    
    // Scroll to top on initial load
    window.scrollTo(0, 0);
    
    // Initialize analytics and performance tracking
    trackWebVitals();
    analytics.trackPageView(window.location.pathname);
  }, []);

  return (
    <div className="overflow-x-hidden" id="app-root">
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50"
      >
        Skip to main content
      </a>
      <ErrorBoundary>
        <Router>
          <Layout>
            <main id="main-content">
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/categories" element={<CategoriesPage />} />
                  <Route path="/categories/:category" element={<CategoryPage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/product/:id" element={<ProductDetailPage />} />
                </Routes>
              </Suspense>
            </main>
          </Layout>
          <ToastContainer toasts={toasts} />
        </Router>
      </ErrorBoundary>
    </div>
  );
}

export default App;