import React from 'react';
import { motion } from 'framer-motion';

const documents = [
  { title: 'Business Requirements Document (BRD)', link: '#' },
  { title: 'Product Requirements Document (PRD)', link: '#' },
  { title: 'User Stories', link: '#' },
  { title: 'Acceptance Criteria', link: '#' },
  { title: 'Test Case Scenarios', link: '#' },
  { title: 'Project Timeline', link: '#' },
  { title: 'Resource Allocation', link: '#' },
  { title: 'Product Roadmap', link: '#' },
  { title: 'User Journey Maps', link: '#' },
  { title: 'Wireframes', link: '#' },
  { title: 'Mockups', link: '#' },
  { title: 'Prototypes', link: '#' },
  { title: 'Competitive Analysis', link: '#' },
  { title: 'SWOT Analysis', link: '#' },
  { title: 'Market Research', link: '#' },
  { title: 'Go-to-Market Strategy', link: '#' },
  { title: 'Release Notes', link: '#' },
  { title: 'Customer Feedback Reports', link: '#' },
  { title: 'KPI Dashboards', link: '#' },
];

const PortfolioDocuments = () => {
  return (
    <section id="portfolio-documents" className="py-16 bg-white">
      <div className="container mx-auto px-1 lg:pl-28">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 text-gray-800"
          initial={{ opacity: 0, y: -50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-pink-500">
            My Portfolio Documents
          </span>
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {documents.map((document, index) => (
            <motion.a
              key={index}
              href={document.link}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-4 flex flex-col justify-between"
              whileHover={{ scale: 1.05, y: -5, boxShadow: '0 0 15px rgba(0, 0, 0, 0.2)' }}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1, ease: 'easeInOut' }}
            >
              <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-2 text-gray-800">
                {document.title}
              </h3>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioDocuments;
