// src/components/HeaderSection.jsx
import React from 'react';
import profileImage from '../assets/profile.png'; // Ensure the path is correct for your image

const HeaderSection = () => {
  return (


    
    <div className="relative flex flex-col items-center text-center py-16 bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg">


      <div className="relative z-10 flex flex-col items-center">
        
        <h1 className="font-display text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl xl:text-6.5xl">
          I'm <span className="text-orange-500">Syah Reza</span>, Product Designer
        </h1>
        
        

        {/* Floating image */}
        <div className="relative z-10 mb-6">
        <img
          className="absolute bottom-0 right-0 lg:left-0 mx-auto h-5/6 object-cover"
          src={profileImage}
          alt=""
        />

          <div
            class="hidden lg:block absolute -bottom-1/4 right-0 left-0 mx-auto w-big h-big bg-indigo-900 rounded-full -z-10"
          ></div>
        </div>
        <p className="text-gray-600 mb-6 max-w-md">
          Passionate and skilled Product Designer, excellent at generating insights, structuring research, and leading teams to success.
        </p>
        <div className="flex items-center text-gray-900">
          <div className="flex items-center mr-2">
            <div className="text-orange-500 text-2xl">★★★★★</div>
          </div>
          <div className="text-xl">1 Years</div>
        </div>
        <div className="text-gray-500">Experience</div>
      </div>
    </div>
  );
};

export default HeaderSection;
