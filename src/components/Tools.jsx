import React from 'react';

const tools = [
  {
    name: 'Figma',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
        {/* Replace the path below with the actual Figma SVG path */}
        <path d="M...Z" />
      </svg>
    ),
  },
  {
    name: 'Canva',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
        {/* Replace the path below with the actual Canva SVG path */}
        <path d="M...Z" />
      </svg>
    ),
  },
  {
    name: 'Katalon',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
        {/* Replace the path below with the actual Katalon SVG path */}
        <path d="M...Z" />
      </svg>
    ),
  },
  {
    name: 'Draw.io',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
        {/* Replace the path below with the actual Draw.io SVG path */}
        <path d="M...Z" />
      </svg>
    ),
  },
  // Add more tools as needed
];

const Tools = () => {
  return (
    <div id="tools" className="bg-gray-100 py-20 font-poppins">
      <div className="container mx-auto px-4 md:px-8">
        <h1 className="text-5xl font-bold text-center text-gray-900 mb-16">
          My <span className="text-orange-500">Tools</span>
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {tools.map((tool, index) => (
            <div key={index} className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6">
              <div className="w-16 h-16 flex items-center justify-center mb-4">
                {tool.svg}
              </div>
              <h3 className="text-lg font-semibold text-gray-800">{tool.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tools;
