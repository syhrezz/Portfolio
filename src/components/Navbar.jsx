import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <nav
      className="fixed top-28 left-8 w-16 py-24 bg-white bg-opacity-80 flex flex-col items-center z-50 rounded-xl shadow-xl hidden lg:flex"
      style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)', backdropFilter: 'blur(10px)' }}
    >
      {/* Add logo or brand icon here */}

      <ul className="flex flex-col items-center flex-grow justify-center space-y-6">
        {['Intro', 'About Me', 'Experience', 'Projects', 'Technologies', 'Achievements'].map((item, index) => (
          <motion.li
            key={index}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <a
              className="hover:text-orange-500"
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              title={item}
            >
              <motion.svg
                className='w-6 h-6 fill-gray-700 hover:fill-orange-500'
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                whileHover={{ rotate: 10 }}
                transition={{ duration: 0.3 }}
              >
                {/* Insert appropriate paths based on the item */}
                {item === 'Intro' && (
                  <path d="M96 128a128 128 0 1 0 256 0A128 128 0 1 0 96 128zm94.5 200.2l18.6 31L175.8 483.1l-36-146.9c-2-8.1-9.8-13.4-17.9-11.3C51.9 342.4 0 405.8 0 481.3c0 17 13.8 30.7 30.7 30.7l131.7 0c0 0 0 0 .1 0l5.5 0 112 0 5.5 0c0 0 0 0 .1 0l131.7 0c17 0 30.7-13.8 30.7-30.7c0-75.5-51.9-138.9-121.9-156.4c-8.1-2-15.9 3.3-17.9 11.3l-36 146.9L238.9 359.2l18.6-31c6.4-10.7-1.3-24.2-13.7-24.2L224 304l-19.7 0c-12.4 0-20.1 13.6-13.7 24.2z"/>
                )}
                {item === 'About Me' && (
                  <path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm80 256l64 0c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16L80 384c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zm256-32l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/>
                )}
                {item === 'Experience' && (
                  <path d="M48 0C21.5 0 0 21.5 0 48L0 464c0 26.5 21.5 48 48 48l96 0 0-80c0-26.5 21.5-48 48-48s48 21.5 48 48l0 80 96 0c26.5 0 48-21.5 48-48l0-416c0-26.5-21.5-48-48-48L48 0zM64 240c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm112-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zM80 96l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zM272 96l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16z"/>
                )}
                {item === 'Projects' && (
                  <path d="M384 476.1L192 421.2l0-385.3L384 90.8l0 385.3zm32-1.2l0-386.5L543.1 37.5c15.8-6.3 32.9 5.3 32.9 22.3l0 334.8c0 9.8-6 18.6-15.1 22.3L416 474.8zM15.1 95.1L160 37.2l0 386.5L32.9 474.5c-9.1-3.7-15.1-12.5-15.1-22.3l0-334.8c0-17 17.1-28.6 32.9-22.3z"/>
                )}
                {item === 'Technologies' && (
                  <path d="M448 0H128c-17.7 0-32 14.3-32 32v448c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32zM128 32h320v448H128V32zm152 416l32-64 32 64h-64zm48-96h32v-96h-32v96zm0-128h32v-96h-32v96zm0-128h32V32h-32v96zm64 0h32V32h-32v96z"/>
                )}
                {item === 'Achievements' && (
                  <path d="M464 32c-8.5 0-16.5 3.4-22.6 9.4l-25.4 25.4l-61.5-18.3c-10.8-3.2-22.3-1.7-30.4 5.5l-43.6 33.1l-44.3-44.3l54.3-54.3c3.9-3.9 6-9.1 6-14.5v-0.2c0-6.1-4.9-11-11-11h-87c-6.1 0-11 4.9-11 11v87c0 6.1 4.9 11 11 11h22.5l-19.6 19.6c-19.1 19.1-19.1 50.2 0 69.3l26.6 26.6c6.3 6.3 14.7 9.8 23.6 9.8c1.8 0 3.5-0.2 5.3-0.4l0.2 0.1l24.1-24.1l47.5 47.5c19.1 19.1 50.2 19.1 69.3 0l19.6-19.6v22.5c0 6.1 4.9 11 11 11h87c6.1 0 11-4.9 11-11v-0.2c0-6.1-4.9-11-11-11h-22.5l19.6-19.6c19.1-19.1 19.1-50.2 0-69.3l-26.6-26.6c-6.3-6.3-14.7-9.8-23.6-9.8c-1.8 0-3.5 0.2-5.3 0.4l-0.2-0.1l-24.1 24.1l-47.5-47.5l-26.6-26.6c-6.3-6.3-14.7-9.8-23.6-9.8c-1.8 0-3.5 0.2-5.3 0.4l-0.2-0.1l-24.1 24.1l-47.5-47.5l-26.6-26.6c-6.3-6.3-14.7-9.8-23.6-9.8c-1.8 0-3.5 0.2-5.3 0.4l-0.2-0.1l-24.1 24.1l-26.6-26.6l-19.6 19.6c-6.4 6.4-6.4 16.8 0 23.2c6.4 6.4 16.8 6.4 23.2 0l26.6-26.6l19.6 19.6c6.4 6.4 16.8 6.4 23.2 0l26.6-26.6l19.6 19.6c6.4 6.4 16.8 6.4 23.2 0l26.6-26.6l19.6 19.6c6.4 6.4 16.8 6.4 23.2 0l26.6-26.6l19.6 19.6c6.4 6.4 16.8 6.4 23.2 0l26.6-26.6c6.4-6.4 6.4-16.8 0-23.2L464 68.6c-6.4-6.4-16.8-6.4-23.2 0l-26.6 26.6c-6.4 6.4-6.4 16.8 0 23.2c6.4 6.4 16.8 6.4 23.2 0l26.6-26.6l19.6 19.6c6.4 6.4 16.8 6.4 23.2 0l26.6-26.6c6.4-6.4 6.4-16.8 0-23.2L464 68.6c-6.4-6.4-16.8-6.4-23.2 0l-26.6 26.6c-6.4 6.4-6.4 16.8 0 23.2l26.6 26.6c6.4 6.4 16.8 6.4 23.2 0l26.6-26.6c6.4-6.4 6.4-16.8 0-23.2l-26.6-26.6c-6.4-6.4-16.8-6.4-23.2 0z"/>
                )}
              </motion.svg>
            </a>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
