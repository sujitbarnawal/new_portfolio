import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-dark-800 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-4">
              Sujit<span className="text-accent-500">Dev</span>
            </h3>
            <p className="text-dark-600 dark:text-gray-300 mb-4 max-w-md">
              A passionate MERN stack developer specializing in frontend development and creating beautiful, functional websites.
            </p>
            <div className="flex space-x-4">
              <a target='_blank' href="https://www.facebook.com/sujit.barnawal.skb" className="text-dark-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a target='_blank' href="https://x.com/csitsujit" className="text-dark-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a target='_blank' href="https://www.instagram.com/sujit_barnawalskb/" className="text-dark-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a target='_blank' href="https://www.linkedin.com/in/sujitbarnawal/" className="text-dark-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a target='_blank' href="https://github.com/sujitbarnawal" className="text-dark-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-dark-700 dark:text-gray-200 mb-4">Quick Links</h4>
            <nav className="grid grid-cols-2 gap-2">
              <a href="#home" className="text-dark-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Home</a>
              <a href="#about" className="text-dark-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">About</a>
              <a href="#portfolio" className="text-dark-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Portfolio</a>
              <a href="#services" className="text-dark-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Services</a>
              <a href="#contact" className="text-dark-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Contact</a>
            </nav>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-dark-700 pt-8">
          <p className="text-center text-dark-500 dark:text-gray-400">
            © {new Date().getFullYear()} Sujit Barnawal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;