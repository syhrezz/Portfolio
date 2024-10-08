import React from 'react';
import { motion } from 'framer-motion';
import contactIllustration from '../assets/man.svg'; // Update with the correct path to your illustration

const WhyYouShouldHireMe = () => {
  return (
    <section id="why-hire-me" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between gap-8">
          <motion.img
            src={contactIllustration}
            alt="Contact Illustration"
            className="hidden lg:block w-full max-w-md lg:max-w-lg xl:max-w-xl h-auto"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          />
          <div className="w-full lg:w-2/3">
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-800 text-center lg:text-left"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              Why You Should Hire Me
            </motion.h2>
            <motion.p
              className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 text-center lg:text-left"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              I bring a unique combination of skills and experiences to the table. Here’s why I’d be a great addition to your team:
            </motion.p>
            <motion.ul
              className="list-none mb-8 text-gray-600"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
            >
              <li className="flex items-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5 -3l2 2 4-4"
                  />
                </svg>
                <span className="ml-4">Proven track record of successful project management and delivery</span>
              </li>
              <li className="flex items-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5 -3l2 2 4-4"
                  />
                </svg>
                <span className="ml-4">Strong background in both software development and product management</span>
              </li>
              <li className="flex items-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5 -3l2 2 4-4"
                  />
                </svg>
                <span className="ml-4">Excellent problem-solving and communication skills</span>
              </li>
              <li className="flex items-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5 -3l2 2 4-4"
                  />
                </svg>
                <span className="ml-4">Passionate about creating user-centered designs and solutions</span>
              </li>
              <div className="flex justify-center my-8">
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
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyYouShouldHireMe;
