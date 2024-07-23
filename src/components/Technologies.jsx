import React from 'react';
import { motion } from 'framer-motion';
import bootstrapImage from '../assets/tech-icon/bootstrap-fill-svgrepo-com.svg';
import canvaImage from '../assets/tech-icon/canva-svgrepo-com.svg';
import corelImage from '../assets/tech-icon/corel-draw-svgrepo-com.svg';
import cssImage from '../assets/tech-icon/css3-02-svgrepo-com.svg';
import figmaImage from '../assets/tech-icon/figma-svgrepo-com.svg';
import flaskImage from '../assets/tech-icon/flask-svgrepo-com.svg';
import gitImage from '../assets/tech-icon/git-svgrepo-com.svg';
import googleImage from '../assets/tech-icon/google-drive-svgrepo-com.svg';
import htmlImage from '../assets/tech-icon/html5-02-svgrepo-com.svg';
import jsImage from '../assets/tech-icon/javascript-155-svgrepo-com.svg';
import mazeImage from '../assets/tech-icon/maze-svgrepo-com.svg';
import postmanImage from '../assets/tech-icon/postman-svgrepo-com.svg';
import pythonImage from '../assets/tech-icon/python-127-svgrepo-com.svg';
import slackImage from '../assets/tech-icon/slack-svgrepo-com.svg';
import tailwindImage from '../assets/tech-icon/tailwind-svgrepo-com.svg';
import trelloImage from '../assets/tech-icon/trello-svgrepo-com.svg';
import unityImage from '../assets/tech-icon/unity-svgrepo-com.svg';
import vsImage from '../assets/tech-icon/vs-code-logo-microsoft-svgrepo-com.svg';
import katalonImage from '../assets/tech-icon/katalon-icon-seeklogo.svg';
import powerImage from '../assets/tech-icon/power-bi-icon-seeklogo.svg';
import './index.css';
const techStack = [
  // Development
  {
    name: "Python",
    icon: pythonImage // Replace with actual path to Python SVG
  },
  {
    name: "Javascript",
    icon: jsImage // Replace with actual path to Node.js SVG
  },
  {
    name: "Flask",
    icon: flaskImage // Replace with actual path to Node.js SVG
  },
  {
    name: "VS Code",
    icon: vsImage// Replace with actual path to VS Code SVG
  },
  {
    name: "Postman",
    icon: postmanImage// Replace with actual path to Postman SVG
  },
  {
    name: "Git",
    icon: gitImage // Replace with actual path to Git SVG
  },

  // Frontend
  {
    name: "HTML",
    icon: htmlImage // Replace with actual path to HTML SVG
  },
  {
    name: "CSS",
    icon: cssImage // Replace with actual path to CSS SVG
  },
  {
    name: "Bootstrap",
    icon: bootstrapImage // Replace with actual path to Bootstrap SVG
  },
  {
    name: "Tailwind CSS",
    icon: tailwindImage // Replace with actual path to Tailwind CSS SVG
  },

  // Design
  {
    name: "Figma",
    icon: figmaImage // Replace with actual path to Figma SVG
  },
  {
    name: "Maze",
    icon: mazeImage // Replace with actual path to Maze SVG
  },
  {
    name: "Canva",
    icon: canvaImage // Replace with actual path to Canva SVG
  },
  {
    name: "Corel Draw",
    icon: corelImage // Replace with actual path to Corel Draw SVG
  },

  // Project Management
  {
    name: "Trello",
    icon: trelloImage // Replace with actual path to Trello SVG
  },

  // Data Analysis
  {
    name: "Power BI",
    icon: powerImage // Replace with actual path to Power BI SVG
  },

  // Other
  {
    name: "Katalon",
    icon: katalonImage // Replace with actual path to Katalon SVG
  },
  {
    name: "Slack",
    icon: slackImage// Replace with actual path to Slack SVG
  },
  {
    name: "Google Suite",
    icon: googleImage // Replace with actual path to Google Suite SVG
  },
  {
    name: "Unity",
    icon: unityImage // Replace with actual path to Unity SVG
  }
];

const Technologies = () => {
  return (
    <section id="technologies" className="bg-FFF4EB py-20">
      <div className="container mx-auto px-4 md:px-4 lg:pl-28">
        <motion.h1
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-12 sm:mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Tech <span className="text-orange-500">& Tools</span>
        </motion.h1>
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4"
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
                  className="w-16 h-16  fill-current text-orange-500 stroke-orange-500 icon-orange"
                />
              </motion.div>
              <h2 className="text-xl font-semibold text-gray-800 group-hover:text-orange-500 transition-colors duration-300">
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