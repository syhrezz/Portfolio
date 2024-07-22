import React from 'react';
import { motion } from 'framer-motion';
import ava from '../assets/ava.png';
import el1 from '../assets/element.svg';
import './index.css';

const About = () => {
  return (
    <section id="about-me" className="bg-FFF4EB py-16 sm:py-24 md:py-32">
      <div className="container mx-auto px-4 lg:px-10">
        <motion.div 
          className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="hidden pl-20 lg:flex  relative w-1/2 lg:w-1/2 justify-center lg:justify-end mb-2 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.img 
              className="absolute h-full w-2/3 top-12 left-0 opacity-25 hidden sm:block" 
              src={el1} 
              alt="Decorative Element" 
              style={{ transform: 'scale(2)' }}
              animate={{ rotate: 360 }}
              transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
            />
            <motion.div 
              className="w-3/4 sm:w-2/3 lg:w-4/5 relative z-10 overflow-hidden rounded-lg shadow-xl"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img className="object-cover w-full h-full" src={ava} alt="Portrait" />
            </motion.div>
          </motion.div>
          <motion.div 
            className="w-full lg:w-1/2 flex flex-col gap-2 px-2 lg:px-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-gray-900 font-bold text-1xl sm:text-2xl lg:text-3xl font-poppins"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              ABOUT ME
            </motion.h1>
            <motion.p 
              className="text-gray-700 font-medium font-poppins text-base sm:text-base leading-relaxed"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              An aspiring Product designer, now building a strong technical foundation and enhancing my problem-solving skills. Eager to make meaningful and delightful digital products that create an equilibrium between user needs and business goals.
            </motion.p>
            <motion.div 
              className="mt-8 font-poppins space-y-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <SkillBar skill="System & Business Analyst" level={85} />
              <SkillBar skill="Web Design" level={70} />
              <SkillBar skill="App Design" level={75} />
              <SkillBar skill="Programming" level={60} />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

const SkillBar = ({ skill, level }) => (
  <motion.div 
    className="space-y-2 sm:space-y-4"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="flex justify-between items-center">
      <h2 className="text-gray-800 font-semibold text-sm sm:text-base">{skill}</h2>
      <span className="text-orange-600 font-semibold text-sm sm:text-base">{level}%</span>
    </div>
    <div className="w-full bg-gray-200 h-2 sm:h-3 rounded-full overflow-hidden">
      <motion.div 
        className="bg-orange-600 h-full rounded-full"
        initial={{ width: 0 }}
        animate={{ width: `${level}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
    </div>
  </motion.div>
);

export default About;