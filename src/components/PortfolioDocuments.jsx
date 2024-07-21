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
    <section id="portfolio-documents" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-5xl font-bold text-center mb-16 text-gray-800"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-pink-500">
            My Portfolio Documents
          </span>
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {documents.map((document, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-3"
              whileHover={{ scale: 1.05, y: -10 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <h3 className="text-base font-semibold mb-2 text-gray-800">{document.title}</h3>
              <a
                href={document.link}
                className="inline-block py-1 px-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-xs"
              >
                View Document
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioDocuments;
