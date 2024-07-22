import React from 'react';
import { motion } from 'framer-motion';

const techStack = [
  {
    name: "Python",
    icon: "path-to-python-svg.svg" // Replace with actual path to Python SVG
  },
  {
    name: "Figma",
    icon: "path-to-figma-svg.svg" // Replace with actual path to Figma SVG
  },
  {
    name: "React",
    icon: "path-to-react-svg.svg" // Replace with actual path to React SVG
  },
  {
    name: "Node.js",
    icon: "path-to-nodejs-svg.svg" // Replace with actual path to Node.js SVG
  },
  {
    name: "Git",
    icon: "path-to-git-svg.svg" // Replace with actual path to Git SVG
  },
  {
    name: "Docker",
    icon: "path-to-docker-svg.svg" // Replace with actual path to Docker SVG
  },
  // Add more tech stack items here
];
const Technologies = () => {
  return (
    <section id="technologies" className="bg-gradient-to-b from-gray-100 to-white py-20">
      <div className="container mx-auto px-4 md:px-8">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
            Technologies & Tools
          </span>
        </motion.h1>
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              className="group flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="relative mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={tech.icon}
                  alt={`${tech.name} icon`}
                  className="w-16 h-16 object-contain"
                />
              </motion.div>
              <h2 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                {tech.name}
              </h2>
              <motion.div
                className="w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600 mt-4"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies;