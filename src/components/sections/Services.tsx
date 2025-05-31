import React from 'react';
import { Layout, Server, Layers, Palette } from 'lucide-react';
import { services } from '../../data/services';

const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case 'layout':
      return <Layout className="w-6 h-6" />;
    case 'server':
      return <Server className="w-6 h-6" />;
    case 'layers':
      return <Layers className="w-6 h-6" />;
    case 'palette':
      return <Palette className="w-6 h-6" />;
    default:
      return <Layout className="w-6 h-6" />;
  }
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white dark:bg-dark-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-800 dark:text-white">
            My <span className="text-primary-600 dark:text-primary-400">Services</span>
          </h2>
          <p className="mt-4 text-dark-600 dark:text-gray-300 max-w-2xl mx-auto">
            I offer a range of web development services to help bring your ideas to life.
          </p>
          <div className="mt-3 mx-auto w-20 h-1 bg-primary-600 dark:bg-primary-400 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-gray-50 dark:bg-dark-700 rounded-xl p-8 transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="w-14 h-14 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 mb-6">
                {getIconComponent(service.icon)}
              </div>
              <h3 className="text-xl font-bold text-dark-800 dark:text-white mb-4">{service.title}</h3>
              <p className="text-dark-600 dark:text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-primary-600 dark:bg-primary-700 rounded-2xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to work together?</h3>
              <p className="text-primary-100 mb-8">
                Let's discuss your project and create something amazing together.
              </p>
              <a 
                href="#contact"
                className="inline-block px-6 py-3 bg-white text-primary-600 font-medium rounded-lg transition-colors duration-200 hover:bg-gray-100"
              >
                Get Started
              </a>
            </div>
            <div className="relative h-60 md:h-auto">
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Let's work together" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;