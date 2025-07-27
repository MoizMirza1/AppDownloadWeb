import React from 'react';

const Impact = () => {
  return (
    <section className="relative rounded-[1rem] pt-12 md:pt-20 pb-20 md:pb-40 px-4 sm:px-8 bg-brand overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row">
        {/* Text Content - Responsive adjustments */}
        <div className="md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0 flex flex-col justify-start z-10">
          <h1 className="whitespace-normal md:whitespace-nowrap overflow-visible text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 md:mb-12 leading-tight text-white">
            Be the Reason<br className="hidden md:block" />Someone Smiles Today!
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-200 mb-6 max-w-lg whitespace-normal">
            Your generosity can change lives. Every donation brings hope, support, and a brighter future. 
            Give today and make a difference!
          </p>
          <button className="px-6 py-3 md:px-8 md:py-4 bg-white text-brand border-2 rounded-lg text-base md:text-lg font-medium w-fit">
            Donate Now
          </button>
        </div>

        {/* Images Container - Responsive adjustments */}
        <div className="md:w-1/2 relative mt-12 md:mt-0 h-[300px] sm:h-[400px] md:h-auto">
          <div className="absolute bottom-0 w-full flex gap-4 md:gap-6 md:translate-x-20 translate-y-20 md:translate-y-40">
            {/* Small Image */}
            <div className="w-2/5 md:w-2/5">
              <img 
                src="/images/imp1.png" 
                alt="Happy person" 
                className="w-full h-auto rounded-t-lg shadow-lg md:shadow-xl translate-y-44"
                style={{ 
                  display: 'block',
                  verticalAlign: 'bottom',
                  maxHeight: '300px'
                }}
              />
            </div>

            {/* Large Image */}
            <div className="w-3/5 md:w-2/4">
              <img 
                src="/images/imp2.png" 
                alt="Community helping" 
                className="w-full h-auto rounded-t-lg shadow-lg md:shadow-xl"
                style={{ 
                  display: 'block',
                  verticalAlign: 'bottom',
                  maxHeight: '400px'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;