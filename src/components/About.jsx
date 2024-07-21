import React from 'react';
import { motion } from 'framer-motion';
import ava from '../assets/ava.png';
import el1 from '../assets/element.svg';
import './index.css';

const About = () => {
  return (
    <div id="about" className="bg-FFF4EB py-32">
      <div className="container mx-auto px-4 lg:px-10 flex flex-col lg:flex-row items-center gap-16">
        <motion.div 
          className="relative w-full lg:w-1/2 flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.img 
            className="absolute h-full w-2/3 top-12 left-0 opacity-25" 
            src={el1} 
            alt="Decorative Element" 
            style={{ transform: 'scale(2)' }}
            animate={{ rotate: 360 }}
            transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          />
          <motion.div 
            className="w-2/4 lg:w-4/5 relative z-10 overflow-hidden rounded-lg shadow-xl"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img className="object-cover w-3/5 h-full" src={ava} alt="Portrait" />
          </motion.div>
        </motion.div>
        <motion.div 
          className="w-full lg:w-1/2 flex flex-col gap-6 px-4 lg:px-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-gray-900 font-bold text-4xl lg:text-5xl font-poppins">ABOUT ME</h1>
          <p className="text-gray-700 font-medium font-poppins text-lg leading-relaxed">
            An aspiring Product designer, now building a strong technical foundation and enhancing my problem-solving skills. Eager to make meaningful and delightful digital products that create an equilibrium between user needs and business goals.
          </p>
          <div className="mt-8 font-poppins space-y-6">
            <SkillBar skill="System & Business Analyst" level={85} />
            <SkillBar skill="Web Design" level={70} />
            <SkillBar skill="App Design" level={75} />
            <SkillBar skill="Programming" level={60} />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

const SkillBar = ({ skill, level }) => (
  <motion.div 
    className="space-y-4"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="flex justify-between items-center">
      <h2 className="text-gray-800 font-semibold">{skill}</h2>
      <span className="text-orange-600 font-semibold">{level}%</span>
    </div>
    <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
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