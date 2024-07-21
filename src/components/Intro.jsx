import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import profileImage from '../assets/profile.png';
import './index.css'; // Import specific styles for Intro

const roles = [
  'Product Designer',
  'Business Analyst',
  'System Analyst',
  'Product Manager',
  'UI/UX Designer'
];

const TypingEffect = ({ text, isDeleting, speed }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setDisplayedText(prev => {
        if (isDeleting) {
          return prev.slice(0, -1);
        } else {
          return text.slice(0, prev.length + 1);
        }
      });

      setIndex(prev => prev + 1);

      if (isDeleting && displayedText.length === 0) {
        setIndex(0);
      } else if (!isDeleting && displayedText.length === text.length) {
        setTimeout(() => {
          setIndex(0);
        }, 2000); // Pause before deleting
      }
    }, speed);

    return () => clearInterval(typingInterval);
  }, [displayedText, isDeleting, text, speed]);

  return (
    <motion.span
      className="text-gray-700"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {displayedText}
    </motion.span>
  );
};

const Intro = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const roleInterval = setInterval(() => {
      setIsDeleting(true);
      setTimeout(() => {
        setIsDeleting(false);
        setCurrentRole(prevRole => (prevRole + 1) % roles.length);
      }, 1000); // Duration to delete text
    }, 5000); // Duration to show text (includes typing and deletion)

    return () => clearInterval(roleInterval); // Clean up interval on component unmount
  }, []);

  return (
    <div className="relative flex flex-col items-center bg-white overflow-hidden" id='Intro'>
      {/* Background Animation */}
      <motion.div
        className="absolute bottom-0 right-0 left-0 mx-auto w-96 h-80 bg-orange-400 rounded-t-full overflow-hidden"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      />

      {/* Text Animation */}
      <motion.h1
        className="font-poppins text-2xl tracking-tight font-bold text-gray-700 sm:text-5xl md:text-6xl xl:text-6xl text-center mt-24"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        I'm <span className="text-orange-500">Syah Reza,</span>
        <div className='mt-4'>
          <TypingEffect
            text={roles[currentRole]}
            isDeleting={isDeleting}
            speed={110} // Adjust typing speed here
          />
        </div>
      </motion.h1>

      {/* Profile Image Animation */}
      <motion.img
        className="relative -mt-28 h-2/3 object-cover z-10"
        src={profileImage}
        alt="Syah Reza, Product Designer"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      />

      {/* Quote Animation */}
      <motion.div
        className="absolute top-1/3 left-5 text-lg sm:left-10 sm:text-4xl md:left-1/4 md:text-6xl lg:left-5 xl:left-48 xl:text-7xl font-bold"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <span className="text-gray-600">"</span>
        <p className='text-sm text-gray-600 font-normal font-poppins mt-0'>
          Passionate and skilled Product Designer,<br />
          excellent at generating insights, structuring<br />
          research, and leading teams to success.
        </p>
      </motion.div>

      {/* Experience Badge Animation */}
      <motion.div
        className="hidden lg:flex flex-col gap-1 rounded-md absolute -top-10 bottom-0 m-auto right-10 bg-white p-0 h-fit w-1/3"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="text-orange-500 text-2xl text-center">★★★★★</div>
        <div className="text-3xl text-center font-semibold font-poppins">1 Year</div>
        <div className="text-gray-500 text-center font-medium font-poppins">Experience</div>
      </motion.div>
    </div>
  );
}

export default Intro;
