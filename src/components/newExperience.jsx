import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gitsImage from '../assets/company-pic/gits_ind.jpeg';
import binarImage from '../assets/company-pic/binar.png';
import rplImage from '../assets/company-pic/rpl.png';

const experiences = [
  {
    company: "GITS ID, Bandung",
    period: "Feb 2023 - June 2023",
    role: "Business Analyst",
    description: "Translated business requirements into user stories, wireframes, and acceptance criteria. Assisted in project planning, estimation, documentation, and designed a PoC.",
    icon: gitsImage
  },
  {
    company: "Software Eng. Lab., UNEJ",
    period: "Aug 2021 - Aug 2023",
    role: "Research Assistant",
    description: "Applied user-centered design and UX research to develop innovative products. Proficient in wireframing, prototyping, and UI design.",
    icon: rplImage
  },
  {
    company: "Binar Academy, Online",
    period: "Aug 2022 - Dec 2022",
    role: "Product Management Bootcamp",
    description: "Developed product strategies, maintained roadmaps aligned with vision, managed customer requirements, conducted market research, and ensured timely project delivery.",
    icon: binarImage
  }
];

const NewExperience = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="experience" className="bg-gradient-to-b from-FFF4EB to-white pt-8 sm:pt-20 pb-12 font-poppins">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-8 sm:mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My <span className="text-orange-500">Experiences</span>
        </motion.h1>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="flex flex-col sm:flex-row items-start max-w-full sm:max-w-2xl mx-auto"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="bg-white shadow-md rounded-lg p-8 sm:p-12 w-full">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                    <img 
                      src={exp.icon} // Use the icon value from the experiences array
                      alt={`${exp.company} Icon`} // Use the company name for alt text
                      className="w-10 h-10 object-cover" 
                    />
                  </div>
                  <div className="flex-grow">
                    {index === 1 ? (
                      <div className="text-left">
                        <motion.h2 
                          className="text-lg sm:text-xl font-semibold text-gray-800"
                          whileHover={{ scale: 1.05 }}
                        >
                          {exp.company}
                        </motion.h2>
                        <p className="text-sm sm:text-base text-gray-600 mb-2 text-left">{exp.period}</p>
                      </div>
                    ) : (
                      <div>
                        <motion.h2 
                          className="text-lg sm:text-xl font-semibold text-gray-800"
                          whileHover={{ scale: 1.05 }}
                        >
                          {exp.company}
                        </motion.h2>
                        <p className="text-sm sm:text-base text-gray-600 mb-2">{exp.period}</p>
                      </div>
                    )}
                  </div>
                </div>
                <motion.h3 
                  className="text-lg sm:text-xl font-semibold text-orange-500 mb-2"
                  whileHover={{ scale: 1.05 }}
                >
                  {exp.role}
                </motion.h3>
                <p className="text-sm sm:text-base text-gray-700">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <AnimatePresence>
          {hoveredIndex !== null && (
            <motion.div
              className="fixed bottom-4 right-4 bg-orange-500 text-white p-4 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              Hover effect active for {experiences[hoveredIndex].company}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default NewExperience;
