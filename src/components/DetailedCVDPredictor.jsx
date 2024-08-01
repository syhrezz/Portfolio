import React, { useState, useEffect, useCallback } from 'react';
import predictorImage1 from '../assets/heart.jpg';
import predictorImage2 from '../assets/heart.jpg';
import predictorImage3 from '../assets/heart.jpg';
import relatedDocument from '../assets/Syah_CV.pdf';

const DetailedCVDPredictor = () => {
  const CVDPredictor = {
    title: "CVD Predictor - Cardiovascular Disease Classification",
    overview: "This project is based on my thesis titled 'Comparative Analysis of Hyperparameter Optimization Techniques in the CatBoost and XGBoost Methods for Cardiovascular Disease Classification'. The website predicts heart disease based on several factors, using the best model from my research: CatBoost with Bayesian Optimization. The website was built using Flask.",
    roleAndResponsibilities: [
      "Conducted extensive research on hyperparameter optimization techniques",
      "Developed and trained the CatBoost model using Bayesian Optimization",
      "Designed and implemented the web application using Flask",
      "Created a user-friendly interface for inputting patient data"
    ],
    problemStatement: "Cardiovascular disease is a leading cause of death globally. Early detection and classification of heart disease can significantly improve patient outcomes. This project aims to develop an accurate prediction model to assist healthcare providers in identifying high-risk patients.",
    solutionApproach: [
      "Compared different machine learning models and hyperparameter optimization techniques",
      "Selected CatBoost with Bayesian Optimization as the best-performing model",
      "Built a Flask web application to host the prediction model",
      "Implemented features for easy data input and result interpretation",
      "Ensured the application  can handle real-world usage"
    ],
    technicalDetails: {
      frontEnd: ["HTML", "CSS", "JavaScript"],
      backEnd: ["Flask", "Python"],
      model: ["CatBoost", "Bayesian Optimization"],
      tools: ["Jupyter Notebook", "Pandas", "NumPy", "Scikit-learn"]
    },
    challenges: [
      "Finding the optimal hyperparameters for the CatBoost model",
      "Ensuring the web application is responsive and user-friendly",
      "Handling large datasets and ensuring efficient data processing",
      "Integrating the trained model with the Flask application"
    ],
    keyAchievements: [
      "Achieved high accuracy in predicting cardiovascular disease",
      "Successfully integrated the machine learning model with the web application",
      "Received positive feedback from users during testing",
      "Highlighted the importance of hyperparameter optimization in improving model performance",
      "Published the findings in a well-received thesis"
    ],
    lessonLearned: "This project emphasized the value of rigorous research and experimentation in machine learning. It also showcased the importance of user-friendly design in application development.",
    duration: "4 months",
    teamSize: "1 member (solo project)",
    client: "Personal Research",
    images: [predictorImage1, predictorImage2, predictorImage3],
    demoLink: "https://example.com/cvd-predictor-demo",
    relatedDocuments: [
      { title: "Thesis Document", link: relatedDocument },
      { title: "Model Training Notebook", link: "#" },
      { title: "Web Application Code", link: "#" }
    ]
  };

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === CVDPredictor.images.length - 1 ? 0 : prevIndex + 1
    );
  }, [CVDPredictor.images.length]);

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? CVDPredictor.images.length - 1 : prevIndex - 1
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
            <p className="text-gray-700 mb-4">{CVDPredictor.overview}</p>
            <h3 className="text-lg font-semibold mb-2">Role & Responsibilities</h3>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              {CVDPredictor.roleAndResponsibilities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </>
        );
      case 'problem':
        return (
          <>
            <h3 className="text-lg font-semibold mb-2">Problem Statement</h3>
            <p className="text-gray-700 mb-4">{CVDPredictor.problemStatement}</p>
            <h3 className="text-lg font-semibold mb-2">Solution Approach</h3>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              {CVDPredictor.solutionApproach.map((item, index) => (
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
                  {CVDPredictor.technicalDetails.frontEnd.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold">Back-End</h4>
                <ul className="list-disc list-inside text-gray-700">
                  {CVDPredictor.technicalDetails.backEnd.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <h4 className="font-semibold mb-2">Model</h4>
            <div className="flex flex-wrap gap-2 mb-4">
              {CVDPredictor.technicalDetails.model.map((model, index) => (
                <span key={index} className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm">{model}</span>
              ))}
            </div>
            <h4 className="font-semibold mb-2">Tools Used</h4>
            <div className="flex flex-wrap gap-2 mb-4">
              {CVDPredictor.technicalDetails.tools.map((tool, index) => (
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
              {CVDPredictor.keyAchievements.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            {/* Challenges */}
            <div className="mt-4">
                <h3 className="text-lg font-semibold mb-2">Challenges</h3>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                {CVDPredictor.challenges.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
                </ul>
            </div>
            <h3 className="text-lg font-semibold mb-2">Lessons Learned</h3>
            <p className="text-gray-700 mb-4">{CVDPredictor.lessonLearned}</p>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      
      <h1 className="text-3xl font-bold text-center mb-6">{CVDPredictor.title}</h1>
      
      {/* Gallery */}
      <div className="mb-8 relative">
        <img 
          src={CVDPredictor.images[currentImageIndex]} 
          alt={`CVD Predictor ${currentImageIndex + 1}`} 
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
          {CVDPredictor.images.map((_, index) => (
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
      <div>{renderTabContent()}</div>


      {/* Project Details */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        <div>
          <strong>Duration:</strong> {CVDPredictor.duration}
        </div>
        <div>
          <strong>Team Size:</strong> {CVDPredictor.teamSize}
        </div>
        <div>
          <strong>Client:</strong> {CVDPredictor.client}
        </div>
      </div>

      {/* Related Documents and Demo Link */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold mb-2">Related Documents</h2>
          <ul className="list-none text-orange-500">
            {CVDPredictor.relatedDocuments.map((doc, index) => (
              <li key={index}>
                <a href={doc.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {doc.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        <a href={CVDPredictor.demoLink} target="_blank" rel="noopener noreferrer" className="bg-orange-500 text-white py-2 px-4 rounded-lg shadow hover:bg-orange-600 transition-colors">
          View Demo
        </a>
      </div>
    </div>
  );
};

export default DetailedCVDPredictor;
