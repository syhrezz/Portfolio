import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import profileImage from '../assets/profile.png';
import './index.css'; // Import specific styles for Intro

const roles = [
  'Product Designer',
  'Business Analyst',
  'System Analyst',
  'Product Manager',
  'UI/UX Designer',
  'Programmer'
];

const testimonials = [
  "Passionate and skilled Product Designer, excellent at generating insights, structuring research, and leading teams to success.",
  "A visionary with a knack for creating intuitive designs that solve complex problems efficiently.",
  "Highly dedicated professional who excels at transforming user needs into engaging digital experiences.",
  "An innovative thinker who consistently delivers top-notch solutions and brings a fresh perspective to every project.",
  "Detail-oriented and creative, with a proven track record of enhancing user experiences through thoughtful design.",
  "A collaborative team player who integrates user feedback seamlessly into the design process, ensuring outstanding results.",
  "Exceptional problem-solving skills combined with a strong understanding of current design trends and technologies.",
  "A results-driven designer with a focus on user-centered design and a passion for creating impactful digital solutions."
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
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

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

  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial(prevTestimonial => (prevTestimonial + 1) % testimonials.length);
    }, 7000); // Duration to show testimonial

    return () => clearInterval(testimonialInterval); // Clean up interval on component unmount
  }, []);

  return (
    <div className="relative flex flex-col items-center bg-white overflow-hidden" id='intro'>
      {/* Background Animation */}
      <motion.div
        className="absolute bottom-0 right-0 left-0 mx-auto w-96 h-80 bg-orange-400 rounded-t-full overflow-hidden z-0"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      />

      {/* Text Animation */}
      <motion.h1
        className="font-poppins text-5xl tracking-tight font-bold text-gray-700 sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl text-center mt-24 z-10"
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
        className="relative -mt-28 h-2/3 object-cover z-50"
        src={profileImage}
        alt="Syah Reza, Product Designer"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      />

      {/* Quote Animation */}
      <motion.div
        className="hidden mt-20 lg:flex absolute top-1/3 left-5 text-lg sm:left-10 sm:text-4xl md:left-1/4 md:text-6xl lg:left-5 xl:left-48 xl:text-7xl font-bold w-72"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <span className="text-gray-600">"</span>
        <motion.p
          key={currentTestimonial}
          className='text-sm text-gray-600 font-normal font-poppins -mt-4'
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {testimonials[currentTestimonial]}
        </motion.p>
      </motion.div>

      {/* Experience Badge Animation */}
      <motion.div
        className="hidden lg:flex flex-col gap-1 rounded-md absolute top-28 bottom-0 m-auto right-10 bg-white p-0 h-fit w-1/3"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.div
          className="text-orange-500 text-2xl text-center"
          animate={{
            scale: [1, 1.1, 1],
            textShadow: [
              '0 0 5px rgba(255, 165, 0, 0.7)',
              '0 0 15px rgba(255, 165, 0, 0.9)',
              '0 0 5px rgba(255, 165, 0, 0.7)'
            ]
          }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          ★★★★★
        </motion.div>
        <div className="text-3xl text-center font-semibold font-poppins">1 Year</div>
        <div className="text-gray-500 text-center font-medium font-poppins">Experience</div>
      </motion.div>
    </div>
  );
}

export default Intro;
