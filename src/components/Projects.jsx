import React, { useState } from 'react';
import { motion } from 'framer-motion';
import sirestoImage from '../assets/si-resto.png';
import lawtusImage from '../assets/lawtus.png'; // Update the path accordingly
import heartDiseaseImage from '../assets/heart.jpg'; // Update the path accordingly
import speedsideImage from '../assets/speedside.png'; // Add the correct path for the image
import relazeeImage from '../assets/relazee.png'; // Add the correct path for the image
import anvidImage from '../assets/anvid.png'; // Add the correct path for the image
import Modal from './Modal'; // Import the Modal component

const projects = [
  {
    title: 'Relazee',
    tags: ['System Analyst', 'UIUX Designer', 'Figma'],
    description: 'A platform to connect college students for partner searching and competition collaboration.',
    link: '#relazee',
    color: 'from-purple-400 to-pink-500',
    image: relazeeImage,
  },
  {
    title: 'Lawtus',
    tags: ['Product Manager', 'System Analyst'],
    description: 'A legaltech app to assist individuals with legal issues.',
    link: '#lawtus',
    color: 'from-green-400 to-blue-500',
    image: lawtusImage,
  },
  {
    title: 'Heart Disease Predictor',
    tags: ['Python', 'Flask', 'CatBoost', 'XGBoost'],
    description: 'A web application to predict heart disease risk based on user input.',
    link: '#heart-disease-predictor',
    color: 'from-yellow-400 to-red-500',
    image: heartDiseaseImage,
  },
  {
    title: 'Speedside - Software Services',
    tags: ['UIUX Designer', 'Figma'],
    description: 'A software services platform providing a range of solutions for businesses.',
    link: '#speedside',
    color: 'from-blue-400 to-indigo-500',
    image: speedsideImage,
  },
  {
    title: 'Siresto Point of Sale App',
    tags: ['System Analyst','UIUX Designer', 'Figma'],
    description: 'A point of sale application designed for restaurants and retail businesses.',
    link: '#siresto-pos',
    color: 'from-teal-400 to-cyan-500',
    image: sirestoImage,
  },
  {
    title: 'Anvid App for Early Diagnosis of COVID-19 Using AI',
    tags: ['System Analyst','UIUX Designer', 'Figma'],
    description: 'An application using machine learning to assist in the early diagnosis of COVID-19.',
    link: '#anvid',
    color: 'from-orange-400 to-red-500',
    image: anvidImage,
  },
];

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const showExploreButton = false; // Set this to true to show the button

  const openProjectDetails = (project) => {
    setSelectedProject(project);
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-32 bg-white">
      <div className="container mx-auto px-1 lg:pl-28">
      <motion.h1
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-12 sm:mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My <span className="text-orange-500">Recent Works</span>
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden`}
              whileHover={{ scale: 1.05, y: -10 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              onClick={() => openProjectDetails(project)} // Open modal on click
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`}></div>
              <div className="relative h-48 overflow-hidden">
                <motion.img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 relative z-10">{project.title}</h3>
                <p className="text-gray-600 mb-6 relative z-10">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6 relative z-10">
                  {project.tags.map((tag, i) => (
                    <motion.span
                      key={i}
                      className="bg-gray-200 text-gray-800 text-xs font-semibold px-2.5 py-1 rounded-full"
                      whileHover={{ scale: 1.1 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
                {showExploreButton && (
                  <motion.button
                    onClick={() => openProjectDetails(project)}
                    className={`inline-block py-2 px-4 bg-gradient-to-r ${project.color} text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 relative z-10`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Explore Project
                  </motion.button>
                )}
              </div>
              {hoveredIndex === index && (
                <motion.div
                  className="absolute top-2 right-2 text-4xl"
                  initial={{ opacity: 0, rotate: -45 }}
                  animate={{ opacity: 1, rotate: 0 }}
                >
                  🚀
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
      
      {selectedProject && (
        <Modal
          image={selectedProject.image}
          onClose={closeProjectDetails}
        />
      )}
    </section>
  );
};

export default Projects;
