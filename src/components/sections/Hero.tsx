import React from 'react';
import { ChevronDown, Code, Award, Briefcase } from 'lucide-react';
import profilePhoto from "../../assets/profileImage.png"

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-gray-50 dark:bg-dark-900 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-8 h-8 rounded-full bg-accent-500/30 animate-float"></div>
      <div className="absolute bottom-20 left-10 w-12 h-12 rounded-full bg-primary-500/20 animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-40 left-1/4 w-6 h-6 rounded-full bg-secondary-500/20 animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <div className="relative">
              <div className="inline-block text-sm font-medium py-1 px-3 rounded-full bg-primary-100 dark:bg-primary-900/40 text-primary-800 dark:text-primary-300 mb-4">
                MERN Stack Developer
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-800 dark:text-white mb-6">
                Hi! I'm <span className="text-primary-600 dark:text-primary-400">Sujit Barnawal</span>
              </h1>
              <p className="text-lg text-dark-600 dark:text-gray-300 mb-8 max-w-lg">
                A passionate web developer specializing in the MERN stack with a strong focus on frontend development and creating beautiful, user-friendly websites.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#portfolio" className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors duration-200">
                  View My Work
                </a>
                <a target='_blank' href="" className="px-6 py-3 bg-white dark:bg-dark-700 hover:bg-gray-100 dark:hover:bg-dark-600 text-dark-800 dark:text-white font-medium rounded-lg border border-gray-200 dark:border-dark-600 transition-colors duration-200">
                  Download CV
                </a>
              </div>
              
              {/* Achievement Badges */}
              <div className="mt-12 flex flex-wrap gap-6">
                <div className="flex items-center">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/40 text-primary-600 dark:text-primary-400 mr-3">
                    <Code size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-dark-800 dark:text-white">MERN Stack</h3>
                    <p className="text-sm text-dark-500 dark:text-gray-400">Full Stack Development</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-accent-100 dark:bg-accent-900/40 text-accent-600 dark:text-accent-400 mr-3">
                    <Award size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-dark-800 dark:text-white">B.Sc. CSIT</h3>
                    <p className="text-sm text-dark-500 dark:text-gray-400">Student</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary-100 dark:bg-secondary-900/40 text-secondary-600 dark:text-secondary-400 mr-3">
                    <Briefcase size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-dark-800 dark:text-white">Web Design</h3>
                    <p className="text-sm text-dark-500 dark:text-gray-400">Professional Service</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center md:justify-end relative">
            <div className="relative">
              {/* Profile Image */}
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-dark-700 shadow-xl">
                <img 
                  src={profilePhoto}
                  alt="Sujit Barnawal" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-white dark:bg-dark-700 shadow-lg rounded-full p-3 border-2 border-primary-500 animate-float">
                <div className="text-primary-600 dark:text-primary-400">
                  <Award size={24} />
                </div>
              </div>
              
              {/* Experience Badge */}
              <div className="absolute bottom-4 -left-8 bg-white dark:bg-dark-700 shadow-lg rounded-xl p-3 animate-float" style={{ animationDelay: '1.5s' }}>
                <div className="flex items-center gap-2">
                  <div className="bg-primary-100 dark:bg-primary-900/50 p-2 rounded-lg">
                    <Code size={20} className="text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <p className="text-xs text-dark-500 dark:text-gray-400">Fresher</p>
                    <p className="text-sm font-medium text-dark-800 dark:text-white">Developer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center">
          <span className="text-dark-500 dark:text-gray-400 text-sm mb-2">Scroll Down</span>
          <ChevronDown size={20} className="text-primary-600 dark:text-primary-400 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;