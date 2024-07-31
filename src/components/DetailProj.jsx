import React, { useState, useEffect, useCallback } from 'react';
import projectImage1 from '../assets/si-resto.png';
import projectImage2 from '../assets/relazee.png';
import projectImage3 from '../assets/speedside.png';
import relatedDocument from '../assets/Syah_CV.pdf';

const DetailedProject = () => {
  const project = {
    title: "E-Commerce Platform Optimization",
    overview: "Led a cross-functional team to redesign and optimize the user experience of a high-traffic e-commerce platform, resulting in increased conversion rates and customer satisfaction.",
    roleAndResponsibilities: [
      "Conducted comprehensive market research and competitor analysis",
      "Developed and maintained product roadmap and backlog",
      "Facilitated stakeholder meetings and gathered requirements",
      "Created detailed user stories, wireframes, and product specifications",
      "Collaborated with UX/UI designers to create intuitive user interfaces",
      "Worked closely with development team to ensure proper implementation",
      "Conducted user testing and iterative improvements based on feedback",
      "Analyzed key metrics and presented results to senior management"
    ],
    problemStatement: "The existing e-commerce platform was experiencing high cart abandonment rates (45%) and low mobile conversion rates (1.2%). User feedback indicated frustration with the checkout process and difficulty finding products on mobile devices.",
    solutionApproach: [
      "Conducted in-depth user research including surveys, interviews, and usability testing",
      "Developed user personas and journey maps to identify pain points and opportunities",
      "Implemented A/B testing to validate design changes and optimize user flows",
      "Redesigned the mobile interface with a focus on responsive design and touch-friendly navigation",
      "Streamlined the checkout process, reducing steps from 5 to 3",
      "Integrated an AI-powered recommendation engine to improve product discovery",
      "Implemented real-time inventory updates to prevent out-of-stock purchases"
    ],
    technicalDetails: {
      frontEnd: ["React", "Redux", "Tailwind CSS"],
      backEnd: ["Node.js", "Express", "MongoDB"],
      tools: ["Jira", "Figma", "Google Analytics", "Hotjar"]
    },
    challenges: [
      "Balancing stakeholder requests with user needs and technical constraints",
      "Coordinating with multiple teams across different time zones",
      "Ensuring seamless integration of new features without disrupting existing functionality",
      "Optimizing performance for users with slower internet connections"
    ],
    keyAchievements: [
      "Reduced cart abandonment rate from 45% to 28%",
      "Increased mobile conversion rate from 1.2% to 3.5%",
      "Improved overall customer satisfaction score from 6.8 to 8.9 out of 10",
      "Launched new features 2 weeks ahead of schedule and 5% under budget"
    ],
    lessonLearned: "This project reinforced the importance of data-driven decision making and continuous user feedback. It also highlighted the value of cross-functional collaboration in solving complex problems.",
    duration: "8 months (March 2023 - October 2023)",
    teamSize: "12 members (3 developers, 2 designers, 1 QA, 1 data analyst, 1 product owner, 4 stakeholders)",
    images: [projectImage1, projectImage2, projectImage3],
    demoLink: "https://example.com/demo",
    relatedDocuments: [
      { title: "Project Case Study", link: relatedDocument },
      { title: "User Research Findings", link: "#" },
      { title: "Technical Architecture", link: "#" }
    ]
  };

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
    );
  }, [project.images.length]);

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
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
            <p className="text-gray-700 mb-4">{project.overview}</p>
            <h3 className="text-lg font-semibold mb-2">Role & Responsibilities</h3>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              {project.roleAndResponsibilities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </>
        );
      case 'problem':
        return (
          <>
            <h3 className="text-lg font-semibold mb-2">Problem Statement</h3>
            <p className="text-gray-700 mb-4">{project.problemStatement}</p>
            <h3 className="text-lg font-semibold mb-2">Solution Approach</h3>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              {project.solutionApproach.map((item, index) => (
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
                  {project.technicalDetails.frontEnd.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold">Back-End</h4>
                <ul className="list-disc list-inside text-gray-700">
                  {project.technicalDetails.backEnd.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <h4 className="font-semibold mb-2">Tools Used</h4>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technicalDetails.tools.map((tool, index) => (
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
              {project.keyAchievements.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <h3 className="text-lg font-semibold mb-2">Lessons Learned</h3>
            <p className="text-gray-700 mb-4">{project.lessonLearned}</p>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      
      <h1 className="text-3xl font-bold text-center mb-6">{project.title}</h1>
      
      {/* Gallery */}
      <div className="mb-8 relative">
        <img 
          src={project.images[currentImageIndex]} 
          alt={`Project ${currentImageIndex + 1}`} 
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
          {project.images.map((_, index) => (
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

      {/* Project Meta Information */}
      <div className="grid grid-cols-2 gap-4 mb-8 text-sm text-gray-600">
        <div>
          <strong>Duration:</strong> {project.duration}
        </div>
        <div>
          <strong>Team Size:</strong> {project.teamSize}
        </div>
      </div>

      {/* Related Documents and Demo Link */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold mb-2">Related Documents</h2>
          <ul className="list-none text-orange-500">
            {project.relatedDocuments.map((doc, index) => (
              <li key={index}>
                <a href={doc.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {doc.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="bg-orange-500 text-white py-2 px-4 rounded-lg shadow hover:bg-orange-600 transition-colors">
          View Demo
        </a>
      </div>
    </div>
  );
};

export default DetailedProject;