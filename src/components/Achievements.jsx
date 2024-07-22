import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const achievements = [
  {
    title: 'Second Place ISIC ICT Business Development Division',
    description: 'Achieved second place in the ICT Business Development Division of ISIC.',
    date: '2023',
    icon: '🥈',
  },
  {
    title: 'Finalist ISIC Software Development Division',
    description: 'Finalist in the Software Development Division of ISIC.',
    date: '2022',
    icon: '🏅',
  },
  {
    title: 'Finalist GEMASTIK Software Development Division',
    description: 'Finalist in the Software Development Division of GEMASTIK.',
    date: '2021',
    icon: '🏅',
  },
  {
    title: 'Second Place IT Convert Software Development Division',
    description: 'Achieved second place in the Software Development Division of IT Convert.',
    date: '2021',
    icon: '🥈',
  },
  {
    title: 'Third Place ISIC Software Development Division',
    description: 'Achieved third place in the Software Development Division of ISIC.',
    date: '2021',
    icon: '🥉',
  },
];

const Achievements = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="achievements" className="py-20 bg-FFF4EB">
      <div className="container mx-auto px-1 lg:pl-28">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-600">
            Achievements & Milestones
          </span>
        </motion.h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <div className="p-6 relative">
                <motion.div
                  className="text-4xl mb-4 text-orange-500"
                  initial={{ scale: 1 }}
                  animate={{ scale: hoveredIndex === index ? 1.2 : 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {achievement.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{achievement.title}</h3>
                <p className="text-gray-600 mb-4">{achievement.description}</p>
                <p className="text-sm text-gray-500">{achievement.date}</p>
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-600 opacity-20 rounded-xl"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.2 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </AnimatePresence>
              </div>
              <motion.div
                className="h-1 bg-gradient-to-r from-orange-400 to-red-600"
                initial={{ width: 0 }}
                animate={{ width: hoveredIndex === index ? '100%' : '0%' }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;