import React from 'react';
import instagram from '../assets/socmed/instagram-svgrepo-com.svg';
import github from '../assets/socmed/github-142-svgrepo-com.svg';
import linkedin from '../assets/socmed/linkedin-rounded-svgrepo-com.svg';
import medium from '../assets/socmed/medium-svgrepo-com.svg';

const Footer = () => {
  return (
    <footer className="bg-gray-200  pt-12 pb-6">
      <div className="container mx-auto p-4">
        <div className="flex justify-center mb-4 gap-4">
          <a href="https://www.instagram.com/syhrezz" target="_blank" rel="noopener noreferrer">
            <img src={instagram} alt="Instagram" className="w-6 h-6 text-pink-500 hover:text-pink-700 transition duration-300 ease-in-out" />
          </a>
          <a href="https://github.com/syhrezz" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="GitHub" className="w-6 h-6 text-gray-500 hover:text-gray-700 transition duration-300 ease-in-out" />
          </a>
          <a href="https://www.linkedin.com/in/syhrezz" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn" className="w-6 h-6 text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out" />
          </a>
          <a href="https://syhrezz.medium.com/" target="_blank" rel="noopener noreferrer">
            <img src={medium} alt="Medium" className="w-6 h-6 text-black hover:text-gray-700 transition duration-300 ease-in-out" />
          </a>
        </div>
        <p className="text-center text-gray-500 text-sm">
          &copy; 2024 Syah Reza. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;