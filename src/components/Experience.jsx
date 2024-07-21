import React from 'react';
import './index.css'; // Import specific styles if needed

const Experience = () => {
  return (
    <div id="experience"  className="bg-FFF4EB py-10 font-poppins">
      <div className="container mx-auto px-4 md:px-8">
        <h1 className="text-4xl font-bold text-center text-gray-900 font-poppins mb-12">
          My <span className="text-orange-500 mb-16">Experiences</span>
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-16">
          {/* Timeline Section */}
          <div className="col-span-1 flex flex-col gap-16 ml-20">
            <div className="mb-16">
              <h2 className="text-xl font-semibold text-gray-800">GITS ID, Bandung</h2>
              <p className="text-gray-600">Feb 2023 - June 2023</p>
            </div>
            <div className="mb-16">
              <h2 className="text-xl font-semibold text-gray-800">Software Eng. Lab., UNEJ</h2>
              <p className="text-gray-600">Aug 2021 - Aug 2023</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Binar Academy, Online</h2>
              <p className="text-gray-600">Aug 2022 - Dec 2022</p>
            </div>
          </div>
          
          {/* Timeline Line */}
          <div className="col-span-1 flex justify-center relative">
            <div className="absolute w-0.5 h-full bg-gray-300 border-dashed"></div>
            <div className="flex flex-col items-center justify-around h-full">
              <div className="flex flex-col items-center mb-16">
                <div className="w-8 h-8 bg-orange-500 border-2 border-white rounded-full flex items-center justify-center mb-2 z-10">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>
              <div className="flex flex-col items-center mb-16">
              <div className="w-8 h-8 bg-orange-500 border-2 border-white rounded-full flex items-center justify-center mb-2 z-10">
              <div className="w-4 h-4 bg-wh rounded-full"></div>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 bg-orange-500 border-2 border-white rounded-full flex items-center justify-center mb-2 z-10">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Experience Details Section */}
          <div className="col-span-1 flex flex-col justify-around">
            <div className="mb-16">
              <h2 className="text-xl font-semibold text-gray-800">Business Analyst</h2>
              <p className="text-gray-600">
                Translated business requirements into user stories, wireframes, and acceptance criteria. Assisted in project planning, estimation, documentation, and designed a PoC.
              </p>
            </div>
            <div className="mb-16">
              <h2 className="text-xl font-semibold text-gray-800">Research Assistant</h2>
              <p className="text-gray-600">
                Applied user-centered design and UX research to develop innovative products. Proficient in wireframing, prototyping, and UI design.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-800">PM Bootcamp</h2>
              <p className="text-gray-600">
                Developed product strategies, maintained roadmaps aligned with vision, managed customer requirements, conducted market research, and ensured timely project delivery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
