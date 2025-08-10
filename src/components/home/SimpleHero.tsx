import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import apparel from "../../assets/apparel-vedio1.mp4";
import { useState } from "react";


const SimpleHero: React.FC = () => {
  const [videoError, setVideoError] = useState(false);
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden w-full">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        {!videoError && (
          <video
            src={apparel}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            aria-label="Background video showing premium apparel"
            className="absolute top-0 left-0 w-full h-full object-cover"
            style={{
              filter: 'brightness(0.75) contrast(1.1)',
            }}
            onLoadStart={() => setVideoError(false)}
            onCanPlay={() => setVideoError(false)}
            onError={() => setVideoError(true)}
          />
        )}
        {/* Fallback overlay only if video fails to load */}
        {videoError && (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 z-20">
            <span className="text-white text-lg font-semibold bg-black/60 px-6 py-3 rounded-lg">Video unavailable. Please check your connection or try again later.</span>
          </div>
        )}
      </div>

      {/* Gradient overlay for contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/20 to-black/40 z-10 pointer-events-none"></div>

  {/* Content */}
  <div className="relative z-20 text-center px-2 py-6 max-w-6xl mx-auto sm:px-4 sm:py-10 sm:mb-15 mb-6">
  <div className="inline-flex items-center bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-4 py-2 sm:px-6 sm:py-3 rounded-full text-sm font-semibold mb-6 sm:mb-8 border border-blue-200 dark:border-blue-800 animate-fade-in">
          <Sparkles className="w-4 h-4 mr-2" />
          <span>Premium Fashion Collection 2025</span>
        </div>

  <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent dark:text-white mb-6 sm:mb-8 leading-tight animate-slide-up">
          TORTOCRAFT
          <br />
          <span className="text-white dark:bg-gradient-to-r dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 dark:bg-clip-text dark:text-transparent">
            YOUR STYLE
          </span>
        </h1>

  <p className="text-base sm:text-xl md:text-2xl text-gray-300 dark:text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in">
          Discover premium apparel that combines unmatched comfort with cutting-edge design. Where innovation meets fashion excellence.
        </p>

  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-10 sm:mb-16 animate-scale-in">
          <Link
            to="/categories"
            className="group bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-black dark:hover:bg-gray-100 dark:hover:text-gray-900 transition-all duration-300 flex items-center shadow-xl hover:shadow-2xl hover:scale-105"
            aria-label="Shop our premium fashion collection"
          >
            Shop Collection
            <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/about"
            className="group border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-gray-900 transition-all duration-300 flex items-center"
            aria-label="Learn about TORTOCRAFT's story"
          >
            Our Story
          </Link>
        </div>
      </div>

  {/* Floating Blurs - hidden on mobile */}
  <div className="hidden sm:block absolute top-1/4 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-float" />
  <div className="hidden sm:block absolute bottom-1/4 right-10 w-16 h-16 bg-purple-500/20 rounded-full blur-xl animate-float" />
    </section>
  );
};

export default SimpleHero;