import React from 'react';
import ava from '../assets/ava.png';
import el1 from '../assets/element.svg';
import './index.css'; // Import specific styles for About

const About = () => {
  return (
    <div id="about" className="bg-FFF4EB py-32">
      <div className="container mx-auto px-10 flex flex-col lg:flex-row items-center gap-8">
        <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-end">
          <img className="absolute h-full w-2/3 top-12 left-0 opacity-25" src={el1} alt="Decorative Element" style={{ transform: 'scale(2)' }} />
          <div className="w-3/4 lg:w-2/3 h-full relative z-10">
            <img className="object-cover" src={ava} alt="Portrait" />
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-4 mx-32 lg:ml-[-50px]">  {/* Added negative margin here */}
          <h1 className="text-gray-900 font-semibold text-4xl font-poppins">ABOUT ME</h1>
          <p className="text-gray-900 font-medium font-poppins text-base leading-relaxed">
            An aspiring Product designer, now building a strong technical foundation and enhancing my problem-solving skills. Eager to make meaningful and delightful digital products that create an equilibrium between user needs and business goals.
          </p>
          <div className="mt-4 font-poppins gap-16">
            <SkillBar skill="System & Business Analyst" level="w-5/6" />
            <SkillBar skill="Web Design" level="w-8/12" />
            <SkillBar skill="App Design" level="w-9/12" />
            <SkillBar skill="Programming" level="w-7/12" />
          </div>
        </div>
      </div>
    </div>
  );
}

const SkillBar = ({ skill, level }) => (
  <div className="my-4 items-center gap-4">
    <h2 className="text-gray-700 font-medium">{skill}</h2>
    <div className="w-full bg-gray-200 h-2 rounded-md">
      <div className={`bg-orange-600 h-2 rounded-md ${level}`}></div>
    </div>
  </div>
);

export default About;
