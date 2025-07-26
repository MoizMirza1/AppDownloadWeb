import React, { useState } from 'react';

const Installation = () => {
  const [steps, setSteps] = useState([
    { id: 1, active: true },
    { id: 2, active: false },
    { id: 3, active: false }
  ]);

  const features = [
    {
      title: "Easy Setup",
      description: "Get started in minutes with our intuitive installation process",
    
    },
    {
      title: "Reliable Performance",
      description: "Experience smooth operation with our optimized system",
      
    },
    {
      title: "24/7 Support",
      description: "Our team is always ready to help you with any issues",
    }
  ];

  const activateStep = (stepId) => {
    setSteps(steps.map(step => ({
      ...step,
      active: step.id <= stepId
    })));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">How to Install Our App</h2>
        <p className="text-lg text-black max-w-2xl mx-auto">
Getting started is quick and easy! Follow these simple steps to install and start using MyBindle today.        </p>
      </div>

      {/* Stepper - Numbers with connecting lines */}
      <div className="flex items-center justify-center my-12">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <div className="flex items-center">
              {/* Step Number - Bigger Font and Padding */}
              <div 
                className={`text-3xl font-semibold px-4 cursor-pointer transition-colors
                  ${step.active ? 'text-brand font-bold' : 'text-black'}`}
                onClick={() => activateStep(step.id)}
              >
                {String(step.id).padStart(2, '0')}
              </div>
              
              {/* Connecting Line - Increased Width and Thickness */}
              {index < steps.length - 1 && (
                <div className={`h-0.5 w-56 mx-2 transition-colors
                  ${steps[index + 1].active ? 'bg-blue-600' : 'bg-gray-300'}`}>
                </div>
              )}
            </div>
          </React.Fragment>
        ))}
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        {features.map((feature, index) => (
          <div key={index} className="text-center bg-gray-200 p-12 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Installation;
