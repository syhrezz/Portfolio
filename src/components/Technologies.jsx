import React from 'react';
import { motion } from 'framer-motion';

const techStack = [
  // Development
  {
    name: "Python",
    icon: "path-to-python-svg.svg" // Replace with actual path to Python SVG
  },
  {
    name: "Node.js",
    icon: "path-to-nodejs-svg.svg" // Replace with actual path to Node.js SVG
  },
  {
    name: "VS Code",
    icon: "path-to-vs-code-svg.svg" // Replace with actual path to VS Code SVG
  },
  {
    name: "Postman",
    icon: "path-to-postman-svg.svg" // Replace with actual path to Postman SVG
  },
  {
    name: "Git",
    icon: "path-to-git-svg.svg" // Replace with actual path to Git SVG
  },
  {
    name: "Docker",
    icon: "path-to-docker-svg.svg" // Replace with actual path to Docker SVG
  },

  // Frontend
  {
    name: "HTML",
    icon: "path-to-html-svg.svg" // Replace with actual path to HTML SVG
  },
  {
    name: "CSS",
    icon: "path-to-css-svg.svg" // Replace with actual path to CSS SVG
  },
  {
    name: "Bootstrap",
    icon: "path-to-bootstrap-svg.svg" // Replace with actual path to Bootstrap SVG
  },
  {
    name: "Tailwind CSS",
    icon: "path-to-tailwind-svg.svg" // Replace with actual path to Tailwind CSS SVG
  },

  // Design
  {
    name: "Figma",
    icon: "path-to-figma-svg.svg" // Replace with actual path to Figma SVG
  },
  {
    name: "Balsamiq",
    icon: "path-to-balsamiq-svg.svg" // Replace with actual path to Balsamiq SVG
  },
  {
    name: "Maze",
    icon: "path-to-maze-svg.svg" // Replace with actual path to Maze SVG
  },
  {
    name: "Canva",
    icon: "path-to-canva-svg.svg" // Replace with actual path to Canva SVG
  },
  {
    name: "Corel Draw",
    icon: "path-to-corel-draw-svg.svg" // Replace with actual path to Corel Draw SVG
  },

  // Project Management
  {
    name: "Trello",
    icon: "path-to-trello-svg.svg" // Replace with actual path to Trello SVG
  },

  // Data Analysis
  {
    name: "Power BI",
    icon: "path-to-power-bi-svg.svg" // Replace with actual path to Power BI SVG
  },

  // Other
  {
    name: "Katalon",
    icon: "path-to-katalon-svg.svg" // Replace with actual path to Katalon SVG
  },
  {
    name: "Slack",
    icon: "path-to-slack-svg.svg" // Replace with actual path to Slack SVG
  },
  {
    name: "Google Suite",
    icon: "path-to-google-suite-svg.svg" // Replace with actual path to Google Suite SVG
  },
  {
    name: "Unity",
    icon: "path-to-unity-svg.svg" // Replace with actual path to Unity SVG
  },
  {
    name: "Filmora",
    icon: "path-to-filmora-svg.svg" // Replace with actual path to Filmora SVG
  },
];

const Technologies = () => {
  return (
    <section id="technologies" className="bg-FFF4EB py-20">
      <div className="container mx-auto px-4 md:px-8 lg:pl-28">
      <motion.h1
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-12 sm:mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Tech <span className="text-orange-500">& Tools</span>
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