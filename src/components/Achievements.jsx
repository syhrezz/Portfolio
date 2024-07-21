import React from 'react';
import { motion } from 'framer-motion';

const achievements = [
  {
    title: 'Project Management Award',
    description: 'Received for exceptional project management and leadership in the Lawtus app development.',
    date: 'June 2024',
    icon: '🏆', // You can use emoji or icons from a library like FontAwesome
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
    <section id="achievements" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-5xl font-bold text-center mb-16 text-gray-800"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
            Achievements
          </span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 relative"
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="text-4xl mb-4">{achievement.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{achievement.title}</h3>
              <p className="text-gray-600 mb-4">{achievement.description}</p>
              <p className="text-gray-500 text-sm">{achievement.date}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
