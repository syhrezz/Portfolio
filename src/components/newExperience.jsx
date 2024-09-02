import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gitsImage from '../assets/company-pic/gits_ind.jpeg';
import binarImage from '../assets/company-pic/binar.png';
import rplImage from '../assets/company-pic/rpl.png';
import brImage from '../assets/company-pic/BR - Kiri Atas - OFF.png';
import './index.css';

const experiences = [
  {
    company: "Software Eng. Lab., UNEJ",
    period: "Aug 2021 - Aug 2023",
    role: "Research Assistant",
    description: "Applied user-centered design principles to develop innovative products. Used UX research methodologies to identify user needs and inform product designs.",
    icon: rplImage
  },
  {
    company: "Binar Academy, Online",
    period: "Aug 2022 - Dec 2022",
    role: "Product Management Bootcamp",
    description: "Developed product strategies, maintained roadmaps aligned with vision, and managed customer requirements. Conducted market research to identify customer needs.",
    icon: binarImage
  },
  {
    company: "GITS ID, Bandung",
    period: "Feb 2023 - June 2023",
    role: "Business Analyst",
    description: "Translated business requirements into user stories, wireframes, and acceptance criteria. Assisted in project estimation, timeline planning, and resource allocation.",
    icon: gitsImage
  },
  {
    company: "Burningroom, Surabaya",
    period: "Aug 2024 - present",
    role: "Business Analyst",
    description: "Translated business requirements into user stories, wireframes, and acceptance criteria. Assisted in project estimation, timeline planning, and resource allocation.",
    icon: brImage
  }
];

const NewExperience = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="experience" className="bg-gradient-to-b from-FFF4EB to-white py-20 font-poppins">
      <div className="container sm:ml-20 md:ml-20 px-4 ">
        <motion.h1
          className="text-4xl font-bold text-center text-gray-900 mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My <span className="text-orange-500">Experiences</span>
        </motion.h1>
        
        <div className="hidden lg:block relative mb-24 max-w-2xl mx-auto">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-orange-200 transform -translate-y-1/2"></div>
          
          <div className="flex justify-between items-center relative">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index} 
                className="relative flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <motion.div 
                  className="w-4 h-4 bg-white border-2 border-orange-500 rounded-full z-10 relative"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div 
                    className="absolute inset-0 bg-orange-500 rounded-full"
                    initial={{ scale: 0 }}
                    animate={{ scale: hoveredIndex === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
                <motion.div 
                  className="absolute top-6 text-xs font-medium text-gray-600 whitespace-nowrap"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.2 + 0.3 }}
                >
                  {exp.period}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="w-full"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="bg-white shadow-lg rounded-lg p-6 h-full border border-orange-100 hover:border-orange-300 transition-colors duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center mr-4 overflow-hidden">
                    <img 
                      src={exp.icon}
                      alt={`${exp.company} Icon`}
                      className="w-10 h-10 object-cover" 
                    />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800">{exp.company}</h2>
                    <p className="text-sm text-gray-600">{exp.period}</p>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-orange-500 mb-2">{exp.role}</h3>
                <p className="text-sm text-gray-700">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <AnimatePresence>
          {hoveredIndex !== null && (
            <motion.div
              className="hidden lg:block fixed bottom-4 right-4 bg-orange-500 text-white p-4 rounded-lg shadow-lg z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              {experiences[hoveredIndex].role} at {experiences[hoveredIndex].company}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default NewExperience;