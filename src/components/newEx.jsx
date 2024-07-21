import React, { useState } from 'react';
import { motion } from 'framer-motion';

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
    role: "PM Bootcamp",
    description: "Developed product strategies, maintained roadmaps aligned with vision, managed customer requirements, conducted market research, and ensured timely project delivery.",
    icon: "🚀"
  }
];

const NewExperience = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div id="experience" className="bg-gradient-to-b from-FFF4EB to-white py-20 font-poppins">
      <div className="container mx-auto px-2 md:px-4">
        <motion.h1 
          className="text-5xl font-bold text-center text-gray-900 mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My <span className="text-orange-500">Experiences</span>
        </motion.h1>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-orange-300" style={{ transform: 'translateX(-50%)' }}></div>
          
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              className={`flex flex-col md:flex-row items-center mb-16`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={`w-5/6 md:w-5/6 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                <h2 className="text-2xl font-semibold text-gray-800">{exp.company}</h2>
                <p className="text-gray-600 mb-2">{exp.period}</p>
                <h3 className="text-xl font-semibold text-orange-500 mb-2">{exp.role}</h3>
                <p className="text-gray-700">{exp.description}</p>
              </div>
              <div className="flex items-center justify-center w-16 h-16 bg-orange-500 rounded-full text-white text-2xl z-10 mx-4 my-0 md:my-0">
                {exp.icon}
              </div>
              <div className="hidden md:block w-1/12"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewExperience;
