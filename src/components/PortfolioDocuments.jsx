import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Modal from './Modal'; // Import the Modal component
import BMCImage from '../assets/doc-pic/BMC.png';
import competitiorImage from '../assets/doc-pic/Competitor Analysis.jpg';
import flowImage from '../assets/doc-pic/Flow Chart.jpg';
import marketImage from '../assets/doc-pic/Market Size.png';
import pricingImage from '../assets/doc-pic/pricing-strategy.jpg';
import UTImage from '../assets/doc-pic/usability-testing.png';
import PRDImage from '../assets/doc-pic/PRD.png';
import roadmapImage from '../assets/doc-pic/roadmap.png';
import testcaseImage from '../assets/doc-pic/testcase.png';



const documents = [
  { title: 'Business Requirements Document (BRD)', link: '#', image: PRDImage, alt: 'Business Requirements Document' },
  { title: 'Product Requirements Document (PRD)', link: '#', image: PRDImage, alt: 'Product Requirements Document' },
  { title: 'User Stories', link: '#', image: 'placeholder-image.png', alt: 'User Stories' },
  { title: 'Acceptance Criteria', link: '#', image: 'placeholder-image.png', alt: 'Acceptance Criteria' },
  { title: 'Test Case Scenarios', link: '#', image: testcaseImage, alt: 'Test Case Scenarios' },
  { title: 'Project Timeline', link: '#', image: 'placeholder-image.png', alt: 'Project Timeline' },
  { title: 'Resource Allocation', link: '#', image: 'placeholder-image.png', alt: 'Resource Allocation' },
  { title: 'Product Roadmap', link: '#', image: roadmapImage, alt: 'Product Roadmap' },
  { title: 'User Journey Maps', link: '#', image: 'placeholder-image.png', alt: 'User Journey Maps' },
  { title: 'Wireframes', link: '#', image: 'placeholder-image.png', alt: 'Wireframes' },
  { title: 'Mockups', link: '#', image: 'placeholder-image.png', alt: 'Mockups' },
  { title: 'Prototypes', link: '#', image: 'placeholder-image.png', alt: 'Prototypes' },
  { title: 'Competitive Analysis', link: '#', image: competitiorImage, alt: 'Competitive Analysis' },
  { title: 'SWOT Analysis', link: '#', image: 'placeholder-image.png', alt: 'SWOT Analysis' },
  { title: 'Market Research', link: '#', image: marketImage, alt: 'Market Research' },
  { title: 'Business Model Canvas (BMC)', link: '#', image: BMCImage, alt: 'Business Model Canvas' },
  { title: 'Usability Testing', link: '#', image: UTImage, alt: 'Usability Testing' },
  { title: 'Prove of Concept (PoC)', link: '#', image: 'placeholder-image.png', alt: 'Prove of Concept (PoC)' },
  { title: 'Pricing Strategy', link: '#', image: pricingImage, alt: 'Pricing Strategy' },
  { title: 'User Persona', link: '#', image: 'placeholder-image.png', alt: 'User Persona' },
  { title: 'Customer Journey', link: '#', image: 'placeholder-image.png', alt: 'Customer Journey' },
  { title: 'Flowchart', link: '#', image: flowImage, alt: 'Flowchart' },
  { title: 'User Guide', link: '#', image: flowImage, alt: 'User Guide' },
];

const PortfolioDocuments = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');

  const handleCardClick = (image) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage('');
  };

  return (
    <section id="portfolio-documents" className="py-16 bg-white">
      <div className="container mx-auto px-1 lg:pl-28">
      <motion.h1
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-12 sm:mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My <span className="text-orange-500">Portofolio Documents</span>
        </motion.h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {documents.map((document, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-4 flex flex-col justify-between cursor-pointer"
              whileHover={{ scale: 1.05, y: -5, boxShadow: '0 0 15px rgba(0, 0, 0, 0.2)' }}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.1, delay: index * 0.1, ease: 'easeInOut' }}
              onClick={() => handleCardClick(document.image)}
            >
              <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-2 text-gray-800">
                {document.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal component */}
      {isModalOpen && (
        <Modal image={modalImage} onClose={closeModal} />
      )}
    </section>
  );
};

export default PortfolioDocuments;
