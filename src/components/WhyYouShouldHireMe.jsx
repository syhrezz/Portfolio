import React from 'react';
import { motion } from 'framer-motion';
import contactIllustration from '../assets/man.svg'; // Update with the correct path to your illustration

const WhyYouShouldHireMe = () => {
  return (
    <section id="why-hire-me" className="flex flex-col md:flex-row items-center py-16 px-4 bg-gray-100">
      <div className="md:w-1/2 flex justify-center md:justify-end">
        <motion.img
          src=''
          alt="Contact Illustration"
          className="w-2/4 h-auto max-w-md"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        />
      </div>
      <div className="md:w-1/2 lg:pl-16 text-center md:text-left">
        <motion.h2
          className="text-4xl font-bold mb-4 text-gray-800"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Why You Should Hire Me
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600 mb-8"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          I bring a unique combination of skills and experiences to the table. Here’s why I’d be a great addition to your team:
        </motion.p>
        <motion.ul
          className="list-disc list-inside mb-8 text-gray-600"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
        >
          <li>Proven track record of successful project management and delivery</li>
          <li>Strong background in both software development and product management</li>
          <li>Excellent problem-solving and communication skills</li>
          <li>Passionate about creating user-centered designs and solutions</li>
        </motion.ul>
        <motion.a
          href="mailto:exzzact@gmail.com" // Update with your contact email
          className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Get in Touch
        </motion.a>
      </div>
    </section>
  );
};

export default WhyYouShouldHireMe;
