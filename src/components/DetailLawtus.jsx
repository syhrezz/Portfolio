import React, { useState, useEffect, useCallback } from 'react';
import projectImage1 from '../assets/lawtus.png';
import projectImage2 from '../assets/lawtus.png';
import projectImage3 from '../assets/lawtus.png';
import relatedDocument from '../assets/Syah_CV.pdf';

const DetailedLawtus = () => {
  const Lawtus = {
    title: "Lawtus - LegalTech Solution",
    overview: "Final project during the Product Management Bootcamp at Binar Academy, focusing on providing a comprehensive LegalTech solution. As the PM Lead, I worked with two other PMs and three UI/UX designers to develop this project.",
    roleAndResponsibilities: [
      "Led the product management efforts and coordinated with team members",
      "Gathered user feedback to understand the market needs",
      "Developed high-fidelity designs and prototypes",
      "Ensured smooth communication between the PM and UI/UX teams",
      "Conducted user testing and iterative design improvements"
    ],
    problemStatement: "The project aimed to solve the inefficiencies and complexities in accessing legal services. Users often faced challenges in finding reliable legal assistance, understanding legal procedures, and managing legal documents.",
    solutionApproach: [
      "Conducted market research and user interviews to identify pain points",
      "Developed user personas and customer journey maps",
      "Designed an intuitive interface for easy navigation and accessibility",
      "Integrated features for legal document management and lawyer-client communication",
      "Created a scalable architecture to accommodate future enhancements"
    ],
    technicalDetails: {
      frontEnd: ["React"],
      backEnd: ["Node.js", "Express", "MongoDB"],
      tools: ["Figma", "Jira", "Git", "Postman"]
    },
    challenges: [
      "Balancing simplicity and functionality in the user interface",
      "Ensuring data privacy and security for sensitive legal information",
      "Integrating various features into a cohesive platform",
      "Coordinating efforts across a distributed team"
    ],
    keyAchievements: [
      "Successfully developed a prototype within the bootcamp timeline",
      "Received positive feedback from users during testing",
      "Identified key market needs and tailored the solution accordingly",
      "Established a strong foundation for future development and scalability"
    ],
    lessonLearned: "This project highlighted the importance of thorough user research and iterative design. It reinforced the value of teamwork and effective communication in delivering a successful product.",
    duration: "3 months",
    teamSize: "6 members (3 PMs, 3 UI/UX designers)",
    client: "Binar Academy - Final Project",
    images: [projectImage1, projectImage2, projectImage3],
    demoLink: "https://example.com/lawtus-demo",
    relatedDocuments: [
      { title: "Lawtus Case Study", link: relatedDocument },
      { title: "User Research Findings", link: "#" },
      { title: "System Architecture", link: "#" }
    ]
  };

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === Lawtus.images.length - 1 ? 0 : prevIndex + 1
    );
  }, [Lawtus.images.length]);

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? Lawtus.images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(nextImage, 5000);
    return () => clearInterval(timer);
  }, [nextImage]);

  const renderTabContent = () => {
    switch(activeTab) {
      case 'overview':
        return (
          <>
            <p className="text-gray-700 mb-4">{Lawtus.overview}</p>
            <h3 className="text-lg font-semibold mb-2">Role & Responsibilities</h3>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              {Lawtus.roleAndResponsibilities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </>
        );
      case 'problem':
        return (
          <>
            <h3 className="text-lg font-semibold mb-2">Problem Statement</h3>
            <p className="text-gray-700 mb-4">{Lawtus.problemStatement}</p>
            <h3 className="text-lg font-semibold mb-2">Solution Approach</h3>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              {Lawtus.solutionApproach.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </>
        );
      case 'technical':
        return (
          <>
            <h3 className="text-lg font-semibold mb-2">Technical Details</h3>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <h4 className="font-semibold">Front-End</h4>
                <ul className="list-disc list-inside text-gray-700">
                  {Lawtus.technicalDetails.frontEnd.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold">Back-End</h4>
                <ul className="list-disc list-inside text-gray-700">
                  {Lawtus.technicalDetails.backEnd.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <h4 className="font-semibold mb-2">Tools Used</h4>
            <div className="flex flex-wrap gap-2 mb-4">
              {Lawtus.technicalDetails.tools.map((tool, index) => (
                <span key={index} className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm">{tool}</span>
              ))}
            </div>
          </>
        );
      case 'results':
        return (
          <>
            <h3 className="text-lg font-semibold mb-2">Key Achievements</h3>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              {Lawtus.keyAchievements.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            {/* Challenges */}
            <div className="mt-4">
                <h3 className="text-lg font-semibold mb-2">Challenges</h3>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                {Lawtus.challenges.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
                </ul>
            </div>
            <h3 className="text-lg font-semibold mb-2">Lessons Learned</h3>
            <p className="text-gray-700 mb-4">{Lawtus.lessonLearned}</p>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      
      <h1 className="text-3xl font-bold text-center mb-6">{Lawtus.title}</h1>
      
      {/* Gallery */}
      <div className="mb-8 relative">
        <img 
          src={Lawtus.images[currentImageIndex]} 
          alt={`Lawtus ${currentImageIndex + 1}`} 
          className="w-full h-96 object-cover rounded-lg shadow-lg"
        />
        <div className="absolute top-1/2 left-0 right-0 flex justify-between transform -translate-y-1/2">
          <button 
            onClick={prevImage} 
            className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-opacity"
          >
            &#10094;
          </button>
          <button 
            onClick={nextImage} 
            className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-opacity"
          >
            &#10095;
          </button>
        </div>
        <div className="absolute bottom-2 left-0 right-0 flex justify-center">
          {Lawtus.images.map((_, index) => (
            <span 
              key={index} 
              className={`h-2 w-2 mx-1 rounded-full ${
                index === currentImageIndex ? 'bg-white' : 'bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-6">
        <div className="flex border-b">
          {['overview', 'problem', 'technical', 'results'].map((tab) => (
            <button
              key={tab}
              className={`py-2 px-4 font-medium ${activeTab === tab ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-500'}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="mb-8">
        {renderTabContent()}
      </div>

      {/* Lawtus Meta Information */}
      <div className="grid grid-cols-2 gap-4 mb-8 text-sm text-gray-600">
        <div>
          <strong>Duration:</strong> {Lawtus.duration}
        </div>
        
        <div>
          <strong>Team Size:</strong> {Lawtus.teamSize}
        </div>
        <div>
          <strong>Client:</strong> {Lawtus.client}
        </div>
        
      </div>

      {/* Related Documents and Demo Link */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold mb-2">Related Documents</h2>
          <ul className="list-none text-orange-500">
            {Lawtus.relatedDocuments.map((doc, index) => (
              <li key={index}>
                <a href={doc.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {doc.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        <a href={Lawtus.demoLink} target="_blank" rel="noopener noreferrer" className="bg-orange-500 text-white py-2 px-4 rounded-lg shadow hover:bg-orange-600 transition-colors">
          View Demo
        </a>
      </div>
    </div>
  );
};

export default DetailedLawtus;
