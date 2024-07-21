// src/components/Services.js
import React from 'react';

const servicesData = [
  {
    title: 'Data Analysis',
    description: 'Analyze data to provide insights and actionable recommendations.',
    icon: '📊',
  },
  {
    title: 'Web Development',
    description: 'Create and maintain websites to ensure optimal user experience.',
    icon: '💻',
  },
  {
    title: 'Machine Learning',
    description: 'Develop machine learning models to predict and analyze trends.',
    icon: '🤖',
  },
  {
    title: 'Consulting',
    description: 'Offer expert advice to help businesses improve their strategies.',
    icon: '🗣️',
  },
];

const Services = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="flex flex-wrap -m-4">
          {servicesData.map((service, index) => (
            <div key={index} className="p-4 md:w-1/2 lg:w-1/4">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
