import React, { useRef, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Heart, Share2, Truck, Shield, RotateCcw, ChevronLeft, ChevronRight, CreditCard, Banknote, Smartphone, Globe } from 'lucide-react';
import { products } from '../data/products';
import Breadcrumb from '../components/ui/Breadcrumb';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import SEOHead from '../components/ui/SEOHead';
import ImageWithFallback from '../components/ui/ImageWithFallback';

const paymentMethods = [
  { 
    name: 'Payoneer', 
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Payoneer_logo.svg/512px-Payoneer_logo.svg.png',
    description: 'Global payment platform',
    icon: <Globe size={20} />
  },
  { 
    name: 'Remitly', 
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Remitly_logo.svg/512px-Remitly_logo.svg.png',
    description: 'International money transfer',
    icon: <Smartphone size={20} />
  },
  { 
    name: 'MoneyGram', 
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/MoneyGram_logo.svg/512px-MoneyGram_logo.svg.png',
    description: 'Money transfer services',
    icon: <Banknote size={20} />
  },
  { 
    name: 'Western Union', 
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Western_Union_logo.svg/512px-Western_Union_logo.svg.png',
    description: 'Global money transfer',
    icon: <CreditCard size={20} />
  },
  {
    name: 'Visa',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/512px-Visa_Inc._logo.svg.png',
    description: 'Credit & Debit Cards',
    icon: <CreditCard size={20} />
  },
  {
    name: 'Mastercard',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/512px-Mastercard-logo.svg.png',
    description: 'Credit & Debit Cards',
    icon: <CreditCard size={20} />
  },
  {
    name: 'PayPal',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/512px-PayPal.svg.png',
    description: 'Digital payments',
    icon: <Smartphone size={20} />
  },
  {
    name: 'Apple Pay',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Apple_Pay_logo.svg/512px-Apple_Pay_logo.svg.png',
    description: 'Mobile payments',
    icon: <Smartphone size={20} />
  }
];

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);
  const [isLiked, setIsLiked] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  // Auto Infinite Slider State
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [slidesToShow, setSlidesToShow] = useState(4);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Responsive slides calculation
  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth < 480) setSlidesToShow(1);
      else if (window.innerWidth < 640) setSlidesToShow(2);
      else if (window.innerWidth < 768) setSlidesToShow(2);
      else if (window.innerWidth < 1024) setSlidesToShow(3);
      else setSlidesToShow(4);
    };

    updateSlidesToShow();
    window.addEventListener('resize', updateSlidesToShow);
    return () => window.removeEventListener('resize', updateSlidesToShow);
  }, []);

  // Auto-play with true infinite scroll
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide(prev => {
        const next = prev + 1;
        // Reset to beginning when we've shown all original items
        if (next >= paymentMethods.length) {
          return 0;
        }
        return next;
      });
    }, 2500); // Faster auto-scroll

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Navigation functions
  const nextSlide = () => {
    if (isTransitioning) return;
    setCurrentSlide(prev => (prev + 1) % paymentMethods.length);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setCurrentSlide(prev => prev === 0 ? paymentMethods.length - 1 : prev - 1);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning) return;
    setCurrentSlide(index);
  };

  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement, Event>, method: any) => {
    // Hide the image and show the fallback icon instead
    e.currentTarget.style.display = 'none';
    const parent = e.currentTarget.parentElement;
    if (parent) {
      const fallback = parent.querySelector('.fallback-icon');
      if (fallback) {
        (fallback as HTMLElement).style.display = 'flex';
      }
    }
  };

  // Get visible payment methods for current slide with infinite effect
  const getVisibleMethods = () => {
    const visible = [];
    for (let i = 0; i < slidesToShow; i++) {
      const index = (currentSlide + i) % paymentMethods.length;
      visible.push({
        ...paymentMethods[index],
        key: `${paymentMethods[index].name}-${currentSlide}-${i}`
      });
    }
    return visible;
  };

  if (!product) {
    return (
      <div className="py-20 flex flex-col items-center justify-center min-h-[60vh]">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">Product Not Found</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">Sorry, we couldn't find this product.</p>
        <Link to="/categories" className="text-blue-600 dark:text-blue-400 underline hover:no-underline">
          Back to Categories
        </Link>
      </div>
    );
  }

  const breadcrumbItems = [
    { label: 'Categories', href: '/categories' },
    { label: product.category, href: `/categories/${product.category}` },
    { label: product.name }
  ];

  return (
    <div>
      <SEOHead 
        title={`${product.name} - Premium ${product.category} | TORTOCRAFT`}
        description={product.longDescription}
        keywords={`${product.name}, ${product.category}, premium apparel, comfortable clothing, TORTOCRAFT`}
        url={`https://tortocraft.com/product/${product.id}`}
        image={product.image}
        type="product"
      />
      <div className="min-h-screen bg-white dark:bg-gray-900 py-10">
        <div className="container mx-auto px-4">
          <Breadcrumb items={breadcrumbItems} />
        
          {/* Back Button */}
          <Link 
            to={`/categories/${product.category}`}
            className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-8 transition-colors"
            aria-label={`Back to ${product.category} category`}
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to {product.category}
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Product Images */}
            <div className="space-y-4 animate-slide-up">
              <div className="aspect-square bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden">
                <ImageWithFallback
                  src={product.image}
                  alt={`${product.name} - Main product image`}
                  width={600}
                  height={600}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  priority={true}
                />
              </div>
            
              {/* Thumbnail Images */}
              <div className="grid grid-cols-4 gap-2">
                {[...Array(4)].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImage === index ? 'border-gray-900 dark:border-white' : 'border-transparent'
                    }`}
                    aria-label={`View ${product.name} image ${index + 1}`}
                  >
                    <ImageWithFallback
                      src={product.image}
                      alt={`${product.name} view ${index + 1}`}
                      width={150}
                      height={150}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div>
                <Badge variant="secondary" className="mb-3">
                  {product.category}
                </Badge>
                
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  {product.name}
                </h1>
                
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {product.description}
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link to="/contact" className="flex-1">
                    <Button size="lg" className="w-full bg-gray-900 dark:bg-white hover:bg-black dark:hover:bg-gray-100">
                      Order Now
                    </Button>
                  </Link>
                  
                  <div className="flex gap-2">
                    <button
                      onClick={() => setIsLiked(!isLiked)}
                      aria-label={isLiked ? 'Remove from favorites' : 'Add to favorites'}
                      className={`p-3 rounded-lg border transition-colors ${
                        isLiked 
                          ? 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 text-red-600 dark:text-red-400' 
                          : 'border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                      }`}
                    >
                      <Heart size={20} fill={isLiked ? 'currentColor' : 'none'} />
                    </button>
                    
                    <button 
                      className="p-3 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                      aria-label="Share product"
                    >
                      <Share2 size={20} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-6 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
                    <Truck size={18} className="text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Free Shipping</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">On orders over $75</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
                    <RotateCcw size={18} className="text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Easy Returns</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">30-day policy</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
                    <Shield size={18} className="text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Quality Guarantee</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Premium materials</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="max-w-4xl mx-auto mb-16 animate-scale-in" style={{ animationDelay: '0.4s' }}>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Product Details</h2>
              <div className="prose prose-gray dark:prose-invert max-w-none">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                  {product.longDescription}
                </p>
              </div>
            </div>
          </div>

          {/* Auto Infinite Payment Methods Slider */}
          <div className="max-w-6xl mx-auto animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
                Guaranteed Safe Checkout
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Secure payment processing with trusted global payment partners
              </p>
            </div>

            {/* Slider Container */}
            <div 
              className="relative bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 border-2 border-gray-200 dark:border-gray-700 shadow-xl overflow-hidden"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20"></div>
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 bg-white dark:bg-gray-700 rounded-full shadow-lg border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:shadow-xl hover:scale-110 transition-all duration-300 group"
              >
                <ChevronLeft size={16} className="sm:w-5 sm:h-5 group-hover:-translate-x-1 transition-transform" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 bg-white dark:bg-gray-700 rounded-full shadow-lg border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:shadow-xl hover:scale-110 transition-all duration-300 group"
              >
                <ChevronRight size={16} className="sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Slider Content */}
              <div className="mx-8 sm:mx-12 lg:mx-16 relative">
                <div className={`grid gap-3 sm:gap-4 lg:gap-6 min-h-[120px] sm:min-h-[140px] ${
                  slidesToShow === 1 ? 'grid-cols-1' :
                  slidesToShow === 2 ? 'grid-cols-2' :
                  slidesToShow === 3 ? 'grid-cols-3' :
                  'grid-cols-4'
                }`}>
                  {getVisibleMethods().map((method, index) => (
                    <div
                      key={method.key}
                      className="bg-gray-50 dark:bg-gray-700 rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-6 border border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-500 hover:shadow-lg transition-all duration-300 group cursor-pointer transform hover:scale-105 animate-scale-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex flex-col items-center text-center space-y-2 sm:space-y-3">
                        {/* Icon and Image Container */}
                        <div className="w-16 h-8 sm:w-20 sm:h-10 lg:w-24 lg:h-12 flex items-center justify-center bg-white dark:bg-gray-600 rounded-md sm:rounded-lg group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 transition-all duration-300 p-1 sm:p-2 shadow-sm relative">
                          <img
                            src={method.img}
                            alt={method.name}
                            className="max-w-full max-h-full object-contain filter group-hover:scale-110 transition-transform duration-300 block"
                            loading="lazy"
                            onError={(e) => handleImgError(e, method)}
                            style={{ maxWidth: '60px', maxHeight: '24px' }}
                          />
                          {/* Fallback Icon - hidden by default */}
                          <div className="fallback-icon absolute inset-0 flex-col items-center justify-center text-blue-600 dark:text-blue-400 hidden">
                            {method.icon}
                            <span className="text-xs font-medium mt-1">{method.name}</span>
                          </div>
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 dark:text-white text-xs sm:text-sm mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {method.name}
                          </h3>
                          <p className="text-xs text-gray-500 dark:text-gray-400 leading-tight hidden sm:block">
                            {method.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Slide Indicators */}
              <div className="flex justify-center mt-4 sm:mt-6 space-x-2">
                {paymentMethods.slice(0, Math.ceil(paymentMethods.length / slidesToShow)).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index * slidesToShow)}
                    className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
                      Math.floor(currentSlide / slidesToShow) === index
                        ? 'bg-blue-600 dark:bg-blue-400 w-4 sm:w-6'
                        : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>
            </div>
            
            {/* Security Badges */}
            <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 lg:gap-6 mt-6 sm:mt-8">
              <div className="flex items-center space-x-1 sm:space-x-2 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 px-3 sm:px-4 py-2 rounded-full border border-green-200 dark:border-green-800">
                <Shield size={14} className="sm:w-4 sm:h-4" />
                <span className="text-xs sm:text-sm font-medium">SSL Secured</span>
              </div>
              <div className="flex items-center space-x-1 sm:space-x-2 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 px-3 sm:px-4 py-2 rounded-full border border-blue-200 dark:border-blue-800">
                <Shield size={14} className="sm:w-4 sm:h-4" />
                <span className="text-xs sm:text-sm font-medium">100% Safe</span>
              </div>
              <div className="flex items-center space-x-1 sm:space-x-2 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-400 px-3 sm:px-4 py-2 rounded-full border border-purple-200 dark:border-purple-800">
                <Shield size={14} className="sm:w-4 sm:h-4" />
                <span className="text-xs sm:text-sm font-medium">Verified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;