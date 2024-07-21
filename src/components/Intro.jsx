import React from 'react';
import profileImage from '../assets/profile.png';
import './index.css'; // Import specific styles for Intro

const Intro = () => {
  return (
    <div className="mt-24 bg-white relative overflow-hidden flex flex-col items-center" id='Intro'>
      <h1 className="font-poppins text-2xl tracking-tight font-bold text-gray-700 sm:text-5xl md:text-6xl xl:text-6xl text-center" >
        I'm <span className="text-orange-500">Syah Reza,</span>
        <div className='mt-4'>Product Designer</div>
      </h1>

      <img className="-mt-28 h-2/3 object-cover relative z-10" src={profileImage} alt="Syah Reza, Product Designer" />
      <div className="hidden lg:block absolute bottom-0 right-0 left-0 mx-auto w-96 h-80 bg-orange-400 rounded-t-full overflow-hidden"></div>
      <div className="absolute top-1/3 left-5 text-lg sm:left-10 sm:text-4xl md:left-1/4 md:text-6xl lg:left-5 xl:left-48 xl:text-7xl font-bold">
        <span className="text-gray-600">"</span>
        <p className='text-sm text-gray-600 font-normal font-poppins mt-0'>
        Passionate and skilled Product Designer,<br />
        excellent at generating insights, structuring<br />
        research, and leading teams to success.
        </p>
      </div>
      
      <div className="hidden lg:flex flex-col gap-1 rounded-md absolute -top-10 bottom-0 m-auto right-10 bg-white p-0 h-fit w-1/3">
        <div className="text-orange-500 text-2xl text-center">★★★★★</div>
        <div className="text-3xl text-center font-semibold font-poppins">1 Years</div>
        <div className="text-gray-500 text-center font-medium font-poppins">Experience</div>
      </div>
    </div>
  );
}

export default Intro;
