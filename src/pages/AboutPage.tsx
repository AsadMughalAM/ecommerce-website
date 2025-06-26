import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="py-10 md:py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Story</h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Founded in 2020, TORTOCRAFT was born from a passion for creating premium apparel that combines comfort, style, and sustainability.
          </p>
        </div>
        
        {/* Mission and Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16 items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              At TORTOCRAFT, we believe that clothing should be more than just something you wear—it should enhance your lifestyle and reflect your values. Our mission is to create timeless, high-quality apparel that empowers individuals to look and feel their best while minimizing our environmental impact.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              We're committed to sustainable practices, ethical manufacturing, and creating products that stand the test of time in both quality and design.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-md">
            <img 
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Team collaborating" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Our Process */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-gray-900 dark:text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Design</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Our design process starts with inspiration from global trends, reimagined through our unique perspective on modern essentials.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-gray-900 dark:text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Materials</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We carefully select sustainable, high-quality materials that feel great on the skin and minimize environmental impact.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-gray-900 dark:text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Craftsmanship</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Each piece is crafted with attention to detail in ethical manufacturing facilities that prioritize worker wellbeing.
              </p>
            </div>
          </div>
        </div>
        
        {/* Team */}
        {/* <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="rounded-lg overflow-hidden mb-4 aspect-square">
                <img 
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Sarah Johnson" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Sarah Johnson</h3>
              <p className="text-blue-600 dark:text-blue-400">Founder & Creative Director</p>
            </div>
            <div className="text-center">
              <div className="rounded-lg overflow-hidden mb-4 aspect-square">
                <img 
                  src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Michael Chen" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Michael Chen</h3>
              <p className="text-blue-600 dark:text-blue-400">Head of Design</p>
            </div>
            <div className="text-center">
              <div className="rounded-lg overflow-hidden mb-4 aspect-square">
                <img 
                  src="https://images.pexels.com/photos/1036627/pexels-photo-1036627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Aisha Patel" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Aisha Patel</h3>
              <p className="text-blue-600 dark:text-blue-400">Sustainability Director</p>
            </div>
          </div>
        </div> */}
        
        {/* Values */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 md:p-12 border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Our Values</h2>
          <br />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Sustainability</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We're committed to reducing our environmental footprint through responsible material sourcing, minimal waste packaging, and ethical production practices.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Quality</h3>
              <p className="text-gray-700 dark:text-gray-300">
                We believe in creating products that last. Our commitment to quality means fewer replacements and less waste over time.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Community</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We value the relationships we build with our customers, suppliers, and manufacturing partners. Together, we're creating a more responsible fashion industry.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Transparency</h3>
              <p className="text-gray-700 dark:text-gray-300">
                We believe in being open about our processes, pricing, and impact. We're constantly learning and improving, and we bring our community along on that journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;