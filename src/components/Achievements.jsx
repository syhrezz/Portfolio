import React from 'react';
import { motion } from 'framer-motion';

const achievements = [
  {
    title: 'Project Management Award',
    description: 'Received for exceptional project management and leadership in the Lawtus app development.',
    date: 'June 2024',
    icon: '🏆',
  },
  {
    title: 'Best Thesis Award',
    description: 'Awarded for outstanding research and presentation on "Comparative Analysis of Hyperparameter Optimization Techniques in CatBoost and XGBoost Methods."',
    date: 'July 2024',
    icon: '📜',
  },
  {
    title: 'Hackathon Winner',
    description: 'Won 1st place at the annual tech hackathon for the Relazee platform.',
    date: 'May 2024',
    icon: '🏅',
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 ml-32 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-gray-800"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-600">
            Achievements
          </span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-orange-300 opacity-30"></div>
              <div className="relative z-10 flex items-center mb-4">
                <span className="text-4xl text-orange-500">{achievement.icon}</span>
                <h3 className="text-xl font-semibold ml-4 text-gray-800">{achievement.title}</h3>
              </div>
              <p className="text-gray-700 mb-4">{achievement.description}</p>
              <p className="text-gray-500 text-sm">{achievement.date}</p>
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
