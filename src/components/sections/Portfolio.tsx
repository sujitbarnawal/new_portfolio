import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../../data/projects';

const Portfolio: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="portfolio" className="py-20 bg-gray-50 dark:bg-dark-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-800 dark:text-white">
            My <span className="text-primary-600 dark:text-primary-400">Portfolio</span>
          </h2>
          <p className="mt-4 text-dark-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and expertise in web development.
          </p>
          <div className="mt-3 mx-auto w-20 h-1 bg-primary-600 dark:bg-primary-400 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-white dark:bg-dark-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden h-56">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
                  style={{
                    transform: hoveredProject === project.id ? 'scale(1.05)' : 'scale(1)'
                  }}
                />
                <div 
                  className={`absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent flex items-end transition-opacity duration-300 ${
                    hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div className="p-4 w-full flex justify-between items-center">
                    <h4 className="text-white font-medium">{project.title}</h4>
                    <div className="flex space-x-2">
                      {project.demoUrl && (
                        <a 
                          href={project.demoUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                        >
                          <ExternalLink size={16} className="text-white" />
                        </a>
                      )}
                      {project.repoUrl && (
                        <a 
                          href={project.repoUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                        >
                          <Github size={16} className="text-white" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-dark-800 dark:text-white mb-2">{project.title}</h3>
                <p className="text-dark-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-primary-100 dark:bg-primary-900/40 text-primary-800 dark:text-primary-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="#contact"
            className="inline-block px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors duration-200"
          >
            Interested in working together? Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;