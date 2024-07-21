import React from 'react';
import { motion } from 'framer-motion';

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
  return (
    <section id="achievements" className="py-16 bg-gray-100">
      <div className="container mx-auto px-1 lg:pl-28">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 text-gray-800"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-600">
            Achievements
          </span>
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-orange-300 opacity-30"></div>
              <div className="relative z-10 flex items-start mb-4">
                <span className="text-3xl sm:text-4xl text-orange-500">{achievement.icon}</span>
                <div className="ml-4">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800">{achievement.title}</h3>
                  <p className="text-gray-700 text-sm sm:text-base mt-1">{achievement.description}</p>
                </div>
              </div>
              <p className="text-gray-500 text-sm sm:text-base">{achievement.date}</p>
              <div className="absolute inset-0 border-2 border-orange-400 rounded-lg transform rotate-2"></div>
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-orange-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.5, delay: 0.5, ease: 'easeInOut' }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
