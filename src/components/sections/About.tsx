import React from 'react';
import { GraduationCap, Code } from 'lucide-react';
import { skills } from '../../data/skills';
import mernImage from '../../assets/mern-stack.png'

const About: React.FC = () => {
  // Group skills by category
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <section id="about" className="py-20 bg-white dark:bg-dark-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-800 dark:text-white">
            About <span className="text-primary-600 dark:text-primary-400">Me</span>
          </h2>
          <div className="mt-3 mx-auto w-20 h-1 bg-primary-600 dark:bg-primary-400 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <img 
                src={mernImage}
                alt="Sujit Barnawal Working" 
                className="rounded-lg shadow-lg w-full object-cover max-h-[450px]"
              />
              <div className="absolute -bottom-6 -right-3 bg-white dark:bg-dark-700 p-4 rounded-lg shadow-lg">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-xl font-bold text-primary-600 dark:text-primary-400">5+</div>
                    <div className="text-sm text-dark-500 dark:text-gray-400">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-primary-600 dark:text-primary-400">B.Sc.</div>
                    <div className="text-sm text-dark-500 dark:text-gray-400">CSIT</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-dark-800 dark:text-white mb-4">
              I'm Sujit Barnawal, a MERN Stack Developer
            </h3>
            <p className="text-dark-600 dark:text-gray-300 mb-6">
              As a passionate web developer with a strong focus on the MERN stack and frontend technologies, I'm dedicated to creating beautiful, functional websites that provide exceptional user experiences.
            </p>
            <p className="text-dark-600 dark:text-gray-300 mb-8">
              Currently pursuing my B.Sc. CSIT at Amrit Science Campus, I'm continuously expanding my knowledge and skills in the world of web development. I'm a fresher in the industry but eager to grow and contribute my skills to meaningful projects.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3 mt-1">
                  <GraduationCap className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h4 className="font-medium text-dark-800 dark:text-white">Education</h4>
                  <p className="text-dark-600 dark:text-gray-300">B.Sc. CSIT at Amrit Science Campus (2022-present)</p>
                  <p className="text-dark-600 dark:text-gray-300">12th grade at Hetauda School of Management (2019-2022)</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3 mt-1">
                  <Code className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h4 className="font-medium text-dark-800 dark:text-white">Specialization</h4>
                  <p className="text-dark-600 dark:text-gray-300">MERN Stack Development</p>
                  <p className="text-dark-600 dark:text-gray-300">Frontend Development</p>
                  <p className="text-dark-600 dark:text-gray-300">Web Design</p>
                </div>
              </div>
            </div>

            <a href="#contact" className="inline-block px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors duration-200">
              Contact Me
            </a>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-dark-800 dark:text-white text-center mb-12">
            My <span className="text-primary-600 dark:text-primary-400">Skills</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(groupedSkills).map(([category, skills]) => (
              <div key={category} className="bg-white dark:bg-dark-700 p-6 rounded-xl shadow-lg">
                <h4 className="text-lg font-semibold text-primary-600 dark:text-primary-400 mb-4 capitalize">
                  {category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="px-3 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;