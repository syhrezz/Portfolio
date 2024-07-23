import React from 'react';
import { motion } from 'framer-motion';
import cvFile from '../assets/Syah_CV.pdf';

const ContactMe = () => {
  return (
    <div className="container mx-auto px-4 py-12 flex justify-center items-center bg-white">
      <motion.div 
        className="w-full max-w-5xl px-8 py-12 bg-[#FF6B35] text-white rounded-2xl shadow-xl relative overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="absolute -top-10 -right-4 w-56 h-56 bg-white opacity-10 rounded-full"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 360, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.h1 
          className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Let's Connect!
        </motion.h1>
        <motion.p 
          className="text-base md:text-lg mb-8 leading-relaxed text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Have a question, a proposal, or just want to say hello? I’d love to hear from you. Reach out and let’s start a conversation.
        </motion.p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-80 mx-auto">
          <motion.a
            href={cvFile}
            download="Syah_CV.pdf"
            className="w-full sm:w-auto text-center py-3 px-4 bg-white text-[#FF6B35] font-bold rounded-full shadow-md hover:bg-[#F7C59F] hover:text-[#2B2D42] transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF6B35]"
            whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(0,0,0,0.1)" }}
            whileTap={{ scale: 0.95 }}
          >
            Download CV
          </motion.a>
          <motion.a
            href="mailto:exzzact@gmail.com"
            className="w-full sm:w-auto text-center py-3 px-4 bg-white text-[#FF6B35] font-bold rounded-full shadow-md hover:bg-[#F7C59F] hover:text-[#2B2D42] transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF6B35]"
            whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(0,0,0,0.1)" }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactMe;