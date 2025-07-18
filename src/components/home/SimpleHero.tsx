import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import apparel from "../../assets/apparel-vedio1.mp4";

const SimpleHero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          src={apparel}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-hidden="true"
          className="absolute top-0 left-0 w-full h-full object-cover"
          style={{
            filter: 'brightness(0.75) contrast(1.1)',
          }}
          onLoadStart={() => console.log('Video loading started')}
          onCanPlay={() => console.log('Video can play')}
          onError={(e) => console.error('Video error:', e)}
        />
        {/* Fallback image for when video fails to load */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.8
          }}
        />
      </div>

      {/* Gradient overlay for contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 opacity-50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-6xl mx-auto sm:mb-15 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-6 py-3 rounded-full text-sm font-semibold mb-8 border border-blue-200 dark:border-blue-800"
        >
          <Sparkles className="w-4 h-4 mr-2" />
          <span>Premium Fashion Collection 2025</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-3xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent dark:text-white mb-8 leading-tight"
        >
          TORTOCRAFT
          <br />
          <span className="text-white dark:bg-gradient-to-r dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 dark:bg-clip-text dark:text-transparent">
            YOUR STYLE
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Discover premium apparel that combines unmatched comfort with cutting-edge design. Where innovation meets fashion excellence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
        >
          <Link
            to="/categories"
            className="group bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-black dark:hover:bg-gray-100 dark:hover:text-gray-900 transition-all duration-300 flex items-center shadow-xl hover:shadow-2xl hover:scale-105"
          >
            Shop Collection
            <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/about"
            className="group border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-gray-900 transition-all duration-300 flex items-center"
          >
            Our Story
          </Link>
        </motion.div>
      </div>

      {/* Floating Blurs */}
      <motion.div
        className="absolute top-1/4 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl"
        animate={{ y: [0, -20, 0], scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-10 w-16 h-16 bg-purple-500/20 rounded-full blur-xl"
        animate={{ y: [0, 15, 0], x: [0, 10, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
};

export default SimpleHero;