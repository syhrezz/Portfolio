import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const experiences = [
  {
    company: "GITS ID, Bandung",
    period: "Feb 2023 - June 2023",
    role: "Business Analyst",
    description: "Translated business requirements into user stories, wireframes, and acceptance criteria. Assisted in project planning, estimation, documentation, and designed a PoC.",
    icon: "💼" // You can replace this with an actual icon component or image
  },
  {
    company: "Software Eng. Lab., UNEJ",
    period: "Aug 2021 - Aug 2023",
    role: "Research Assistant",
    description: "Applied user-centered design and UX research to develop innovative products. Proficient in wireframing, prototyping, and UI design.",
    icon: "🔬"
  },
  {
    company: "Binar Academy, Online",
    period: "Aug 2022 - Dec 2022",
    role: "Product Management Bootcamp",
    description: "Developed product strategies, maintained roadmaps aligned with vision, managed customer requirements, conducted market research, and ensured timely project delivery.",
    icon: "🚀"
  }
];


const NewExperience = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="experience" className="bg-gradient-to-b from-FFF4EB to-white pt-2 sm:pt-20 font-poppins">
      <div className="container w-1/2 mx-auto px-auto pt-16">
        <motion.h1
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-12 sm:mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My <span className="text-orange-500">Experiences</span>
        </motion.h1>
        <div className="relative">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`flex flex-col sm:flex-row items-center mb-12 sm:mb-16`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={`w-full sm:w-5/12 ${index % 2 === 0 ? 'sm:pr-8 sm:text-right' : 'sm:pl-8 sm:order-last'}`}>
                <motion.h2 
                  className="text-xl sm:text-2xl font-semibold text-gray-800"
                  whileHover={{ scale: 1.05 }}
                >
                  {exp.company}
                </motion.h2>
                <p className="text-sm sm:text-base text-gray-600 mb-2">{exp.period}</p>
                <motion.h3 
                  className="text-lg sm:text-xl font-semibold text-orange-500 mb-2"
                  whileHover={{ scale: 1.05 }}
                >
                  {exp.role}
                </motion.h3>
                <p className="text-sm sm:text-base text-gray-700">{exp.description}</p>
              </div>
              <div className="hidden sm:block sm:w-5/12"></div>
            </motion.div>
          ))}
        </div>
        <AnimatePresence>
          {hoveredIndex !== null && (
            <motion.div
              className="hidden lg:flex fixed bottom-4 right-4 bg-orange-500 text-white p-4 rounded-lg shadow-lg"
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