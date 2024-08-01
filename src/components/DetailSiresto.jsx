import React, { useState, useEffect, useCallback } from 'react';
import projectImage1 from '../assets/si-resto.png';
import projectImage2 from '../assets/siresto-pic/Mockup 1.png';
import projectImage3 from '../assets/siresto-pic/Mockup 10.png';
import relatedDocument from '../assets/Syah_CV.pdf';

const DetailedSiresto = () => {
    const Siresto = {
        title: "SiResto Point of Sales App",
        overview: "Led the design and analysis for a point of sales application tailored for restaurants, commissioned by a government instance in Banyuwangi Regency. The project aimed to streamline restaurant operations and improve customer service.",
        roleAndResponsibilities: [
          "Conducted comprehensive analysis of restaurant operations and POS requirements",
          "Designed intuitive user interfaces for both staff and customer-facing components",
          "Created detailed user stories and product specifications",
          "Collaborated closely with backend and mobile developers to ensure proper implementation",
          "Facilitated communication between the development team and the client",
          "Conducted user testing and iterative improvements based on feedback"
        ],
        problemStatement: "Local restaurants in Banyuwangi were struggling with inefficient order management and billing processes, leading to longer wait times and reduced customer satisfaction. The local government sought a modern POS solution to boost the hospitality sector's efficiency.",
        solutionApproach: [
          "Conducted on-site research at various local restaurants to understand their workflows",
          "Developed user personas for both restaurant staff and customers",
          "Created wireframes and prototypes for an intuitive, easy-to-use POS interface",
          "Designed a mobile app component for customer self-ordering and feedback"
        ],
        technicalDetails: {
          frontEnd: ["Flutter"],
          backEnd: ["Laravel", "MySql"],
          tools: ["Figma"]
        },
        challenges: [
          "Designing a system simple enough for staff with varying levels of tech-savviness",
          "Balancing feature richness with performance on lower-end mobile devices",
          "Coordinating between team members and client stakeholders with different priorities"
        ],
        keyAchievements: [
          "Reduced average order processing time by 40%",
          "Achieved a 75% satisfaction rate among restaurant staff using the new system",
          "Successfully get 70 playstore downloader during alpa-test soft-launch"
        ],
        lessonLearned: "This project highlighted the importance of user-centered design in creating efficient business tools. It also reinforced the value of continuous stakeholder communication and the need for flexible.",
        duration: "2 months",
        teamSize: "3 members (backend, mobile, analyst/designer)",
        client: "Government instance",
        images: [projectImage1, projectImage2, projectImage3],
        demoLink: "https://www.figma.com/proto/doKR027CB8dipO7VppI4wJ/SiResto?node-id=1526-2241&t=uT0l2QMAyWnvlk1G-1&scaling=min-zoom&content-scaling=fixed&page-id=1481%3A13651&starting-point-node-id=1526%3A2263",
        relatedDocuments: [
          { title: "SiResto App specification", link: relatedDocument },
          { title: "User Guide", link: "#" },
          { title: "Usability Testing", link: "#" }
        ]
      };

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === Siresto.images.length - 1 ? 0 : prevIndex + 1
    );
  }, [Siresto.images.length]);

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? Siresto.images.length - 1 : prevIndex - 1
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
            <p className="text-gray-700 mb-4">{Siresto.overview}</p>
            <h3 className="text-lg font-semibold mb-2">Role & Responsibilities</h3>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              {Siresto.roleAndResponsibilities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </>
        );
      case 'problem':
        return (
          <>
            <h3 className="text-lg font-semibold mb-2">Problem Statement</h3>
            <p className="text-gray-700 mb-4">{Siresto.problemStatement}</p>
            <h3 className="text-lg font-semibold mb-2">Solution Approach</h3>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              {Siresto.solutionApproach.map((item, index) => (
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
                  {Siresto.technicalDetails.frontEnd.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold">Back-End</h4>
                <ul className="list-disc list-inside text-gray-700">
                  {Siresto.technicalDetails.backEnd.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <h4 className="font-semibold mb-2">Tools Used</h4>
            <div className="flex flex-wrap gap-2 mb-4">
              {Siresto.technicalDetails.tools.map((tool, index) => (
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
              {Siresto.keyAchievements.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            {/* Challenges */}
            <div className="mt-4">
                <h3 className="text-lg font-semibold mb-2">Challenges</h3>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                {Siresto.challenges.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
                </ul>
            </div>
            <h3 className="text-lg font-semibold mb-2">Lessons Learned</h3>
            <p className="text-gray-700 mb-4">{Siresto.lessonLearned}</p>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      
      <h1 className="text-3xl font-bold text-center mb-6">{Siresto.title}</h1>
      
      {/* Gallery */}
      <div className="mb-8 relative">
        <img 
          src={Siresto.images[currentImageIndex]} 
          alt={`Siresto ${currentImageIndex + 1}`} 
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
          {Siresto.images.map((_, index) => (
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

      {/* Siresto Meta Information */}
      <div className="grid grid-cols-2 gap-4 mb-8 text-sm text-gray-600">
        <div>
          <strong>Duration:</strong> {Siresto.duration}
        </div>
        <div>
          <strong>Team Size:</strong> {Siresto.teamSize}
        </div>
        <div>
          <strong>Client:</strong> {Siresto.client}
        </div>
      </div>

      {/* Related Documents and Demo Link */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold mb-2">Related Documents</h2>
          <ul className="list-none text-orange-500">
            {Siresto.relatedDocuments.map((doc, index) => (
              <li key={index}>
                <a href={doc.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {doc.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        <a href={Siresto.demoLink} target="_blank" rel="noopener noreferrer" className="bg-orange-500 text-white py-2 px-4 rounded-lg shadow hover:bg-orange-600 transition-colors">
          View Demo
        </a>
      </div>
    </div>
  );
};

export default DetailedSiresto;