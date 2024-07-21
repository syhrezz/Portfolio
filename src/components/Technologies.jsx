import React from 'react';

const techStack = [
  {
    name: "Python",
    icon: "path-to-python-svg.svg" // Replace with actual path to Python SVG
  },
  {
    name: "Figma",
    icon: "path-to-figma-svg.svg" // Replace with actual path to Figma SVG
  },
  {
    name: "React",
    icon: "path-to-react-svg.svg" // Replace with actual path to React SVG
  },
  {
    name: "Node.js",
    icon: "path-to-nodejs-svg.svg" // Replace with actual path to Node.js SVG
  },
  {
    name: "Git",
    icon: "path-to-git-svg.svg" // Replace with actual path to Git SVG
  },
  {
    name: "Docker",
    icon: "path-to-docker-svg.svg" // Replace with actual path to Docker SVG
  },
  // Add more tech stack items here
];

const Technologies = () => {
  return (
    <div id="technologies" className="bg-gray-100 py-20">
      <div className="container mx-auto px-4 md:px-8">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Technologies & Tools
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={tech.icon}
                alt={`${tech.name} icon`}
                className="w-16 h-16 mb-4"
              />
              <h2 className="text-xl font-semibold text-gray-800">{tech.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
