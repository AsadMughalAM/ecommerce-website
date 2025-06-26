import React from 'react';
import { Package, Truck, Repeat, Heart, Headphones, Compass } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 hover:shadow-md transition-all duration-300 group border border-gray-200 dark:border-gray-700">
      <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 dark:group-hover:bg-blue-500 group-hover:text-white transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
};

const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: <Package size={24} />,
      title: "Premium Packaging",
      description: "All orders are shipped in premium, sustainable packaging to ensure your items arrive in perfect condition."
    },
    {
      icon: <Truck size={24} />,
      title: "Fast Shipping",
      description: "Enjoy free standard shipping on all orders over $75, with express options available for faster delivery."
    },
    {
      icon: <Repeat size={24} />,
      title: "Easy Returns",
      description: "Not satisfied? Return or exchange your items within 30 days of delivery, no questions asked."
    },
    {
      icon: <Heart size={24} />,
      title: "Loyalty Program",
      description: "Join our loyalty program to earn points with every purchase and unlock exclusive rewards and early access."
    },
    {
      icon: <Headphones size={24} />,
      title: "Customer Support",
      description: "Our dedicated support team is available 7 days a week to assist with any questions or concerns."
    },
    {
      icon: <Compass size={24} />,
      title: "Personal Styling",
      description: "Book a virtual styling consultation with our fashion experts to find the perfect pieces for your wardrobe."
    }
  ];

  return (
    <div className="py-10 md:py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Services</h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We're committed to providing an exceptional shopping experience from start to finish. Explore the premium services we offer to our customers.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
        
        {/* Additional Services */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 md:p-12 mb-16 border border-gray-200 dark:border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Custom Orders</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Looking for something special? We offer custom orders for special events, corporate gifting, or personalized items.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Our design team will work with you to create bespoke apparel that meets your specific requirements, whether it's customized embroidery, special sizing, or unique color options.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Contact our customer service team to discuss your custom order needs and get a personalized quote.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.pexels.com/photos/6567607/pexels-photo-6567607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Custom orders" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-4 max-w-3xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How long does shipping take?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Standard shipping typically takes 3-5 business days within the continental US. Express shipping is available for 1-2 business day delivery. International shipping times vary by location, generally taking 7-14 business days.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">What is your return policy?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We offer a 30-day return policy for unworn, unwashed items with original tags attached. Returns are free for exchanges or store credit. Refunds to the original payment method may incur a small processing fee.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Do you offer international shipping?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Yes, we ship to most countries worldwide. International customers may be responsible for customs duties and taxes as required by their country's regulations. Shipping rates and delivery times vary by location.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How do I care for my TORTOCRAFT apparel?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Most of our items can be machine washed cold on a gentle cycle and laid flat to dry. Specific care instructions are included on the product page and on the care label of each garment. Following these guidelines will help extend the life of your apparel.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How does the loyalty program work?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Our loyalty program awards 1 point for every dollar spent. Points can be redeemed for discounts, exclusive products, or early access to new collections. Members also receive special birthday offers and invitations to members-only events.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;