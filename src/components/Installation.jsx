import React, { useState } from 'react';

const Installation = () => {
  const [steps, setSteps] = useState([
    { id: 1, active: true },
    { id: 2, active: false },
    { id: 3, active: false }
  ]);

  const features = [
    {
      title: "Download",
      description: "Open Play Store or App Store",
    },
    {
      title: "Install App",
      description: "The app will install automatically.",
    },
    {
      title: "Ready to Use",
      description: "Sign up or log in to start exploring!",
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
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">How to Install Our App</h2>
        <p className="text-base md:text-lg text-black max-w-2xl mx-auto">
          Getting started is quick and easy! Follow these simple steps to install and start using MyBindle today.
        </p>
      </div>

      {/* Responsive Stepper */}
      <div className="flex flex-col md:flex-row items-center justify-between my-12 relative">
        {/* Mobile - Vertical Stepper */}
        <div className="md:hidden w-full">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-start mb-8 last:mb-0">
              {/* Vertical Line */}
              {index < steps.length - 1 && (
                <div className={`w-0.5 h-16 ml-5 -mt-2 absolute transition-colors
                  ${steps[index + 1].active ? 'bg-blue-600' : 'bg-gray-300'}`}
                  style={{ left: '2.25rem', top: `${index * 5 + 2}rem` }}>
                </div>
              )}
              
              {/* Step Number */}
              <div 
                className={`text-2xl font-semibold px-4 cursor-pointer transition-colors z-10
                  ${step.active ? 'text-brand font-bold' : 'text-black'}`}
                onClick={() => activateStep(step.id)}
              >
                {String(step.id).padStart(2, '0')}
              </div>
              
              {/* Step Content */}
              <div className="ml-4">
                <h3 className="text-lg font-semibold">{features[index].title}</h3>
                <p className="text-gray-600">{features[index].description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop - Horizontal Stepper */}
        <div className="hidden md:flex items-center justify-center w-full">
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              <div className="flex items-center">
                {/* Step Number */}
                <div 
                  className={`text-2xl lg:text-3xl font-semibold px-3 lg:px-4 cursor-pointer transition-colors
                    ${step.active ? 'text-brand font-bold' : 'text-black'}`}
                  onClick={() => activateStep(step.id)}
                >
                  {String(step.id).padStart(2, '0')}
                </div>
                
                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <div className={`h-0.5 w-16 lg:w-24 xl:w-32 mx-1 lg:mx-2 transition-colors
                    ${steps[index + 1].active ? 'bg-blue-600' : 'bg-gray-300'}`}>
                  </div>
                )}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Feature Cards - Hidden on mobile since content is in stepper */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        {features.map((feature, index) => (
          <div key={index} className="text-center bg-gray-200 p-8 lg:p-12 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Installation;