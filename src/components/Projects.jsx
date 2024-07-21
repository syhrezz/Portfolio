import React, { useState } from 'react';
import { motion } from 'framer-motion';
import sirestoImage from '../assets/si-resto.png';
import lawtusImage from '../assets/profile.png'; // Update the path accordingly
import heartDiseaseImage from '../assets/profile.png'; // Update the path accordingly

const projects = [
  {
    title: 'Relazee',
    tags: ['React', 'Node.js', 'GraphQL', 'PostgreSQL'],
    description: 'A platform to connect college students for partner searching and competition collaboration.',
    link: '#relazee',
    color: 'from-purple-400 to-pink-500',
    image: sirestoImage,
  },
  {
    title: 'Lawtus',
    tags: ['React', 'Node.js', 'GraphQL', 'PostgreSQL'],
    description: 'A legaltech app to assist individuals with legal issues.',
    link: '#lawtus',
    color: 'from-green-400 to-blue-500',
    image: lawtusImage,
  },
  {
    title: 'Heart Disease Predictor',
    tags: ['React', 'Flask', 'CatBoost', 'XGBoost'],
    description: 'A web application to predict heart disease risk based on user input.',
    link: '#heart-disease-predictor',
    color: 'from-yellow-400 to-red-500',
    image: heartDiseaseImage,
  },
];

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="projects" className="py-32 bg-white">
      <div className="container mx-auto px-1 lg:pl-28"> {/* Adjust padding based on navbar width */}
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 text-gray-800"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="bg-clip-text text-transparent bg-gray-800">
            My Recent Works
          </span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden`}
              whileHover={{ scale: 1.05, y: -10 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
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
                <motion.a
                  href={project.link}
                  className={`inline-block py-2 px-4 bg-gradient-to-r ${project.color} text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 relative z-10`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Project
                </motion.a>
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
    </section>
  );
};

export default Projects;
