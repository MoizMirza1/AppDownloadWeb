import React from 'react';

const Impact = () => {
  return (
    <section className="relative pt-20 pb-20 px-4 sm:px-8 bg-brand">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row">
        {/* Text Content */}
        <div className="md:w-1/2 pr-8 mb-12 md:mb-0 flex flex-col justify-start -mt-6">
          <h1 className="whitespace-nowrap overflow-visible lg:text-6xl text-xl font-bold mb-12 leading-tight text-white">
            Be the Reason<br className="hidden md:block" />Someone Smiles Today!
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-6 max-w-lg">
            Your generosity can change lives. Every donation brings hope, support, and a brighter future. 
            Give today and make a difference!
          </p>
          <button className="px-8 py-4 bg-white text-black border-2 border-black rounded-lg hover:bg-gray-100 transition duration-300 text-lg font-medium w-fit">
            Donate Now
          </button>
        </div>

        {/* Images Container */}
        <div className="md:w-1/2 relative">
          <div className="absolute bottom-0 w-full flex gap-6 translate-y-20">
            {/* Small Image */}
            <div className="w-2/5 self-end">
              <img 
                src="/images/imp1.png" 
                alt="Happy person" 
                className="w-full rounded-t-lg shadow-xl"
                style={{ 
                  display: 'block',
                  verticalAlign: 'bottom'
                }}
              />
            </div>

            {/* Large Image */}
            <div className="w-2/5 self-end">
              <img 
                src="/images/imp2.png" 
                alt="Community helping" 
                className="w-full rounded-t-lg shadow-xl"
                style={{ 
                  display: 'block',
                  verticalAlign: 'bottom'
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
