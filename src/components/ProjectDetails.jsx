import React, { useState } from 'react';
import './ProjectDetails.css';

const ProjectDetails = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="project-details-overlay">
      <div className="project-details-container">
        <button className="close-button" onClick={onClose}>&times;</button>
        
        <h1 className="project-title">{project.title}</h1>
        
        <div className="project-tabs">
          <button 
            className={`tab ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </button>
          <button 
            className={`tab ${activeTab === 'gallery' ? 'active' : ''}`}
            onClick={() => setActiveTab('gallery')}
          >
            Gallery
          </button>
          <button 
            className={`tab ${activeTab === 'documentation' ? 'active' : ''}`}
            onClick={() => setActiveTab('documentation')}
          >
            Documentation
          </button>
          <button 
            className={`tab ${activeTab === 'responsibilities' ? 'active' : ''}`}
            onClick={() => setActiveTab('responsibilities')}
          >
            My Role
          </button>
        </div>
        
        <div className="tab-content">
          {activeTab === 'overview' && (
            <div className="overview">
              <p>{project.description}</p>
              <div className="tech-stack">
                <h3>Technologies Used:</h3>
                <ul>
                  {project.technologies.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
          
          {activeTab === 'gallery' && (
            <div className="gallery">
              {project.images.map((image, index) => (
                <img key={index} src={image} alt={`Project screenshot ${index + 1}`} />
              ))}
            </div>
          )}
          
          {activeTab === 'documentation' && (
            <div className="documentation">
              <h3>Project Documentation</h3>
              <p>{project.documentation}</p>
            </div>
          )}
          
          {activeTab === 'responsibilities' && (
            <div className="responsibilities">
              <h3>My Responsibilities</h3>
              <ul>
                {project.responsibilities.map((responsibility, index) => (
                  <li key={index}>{responsibility}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
        
        <div className="project-links">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="link">
              GitHub Repository
            </a>
          )}
          {project.liveDemo && (
            <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="link">
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;