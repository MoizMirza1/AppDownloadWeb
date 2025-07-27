import React from 'react';

const About = () => {
  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        
        {/* Left Column - Image (full height) */}
        <div className="w-full h-full flex justify-center items-center">
          <img 
            src="/images/MobSkew.png" 
            alt="About Us"
            className="w-full h-full max-h-[600px] object-contain"
          />
        </div>

        {/* Right Column - Content */}
       <div className="w-full h-full bg-gray-50 p-12">
  {/* Heading and Paragraph */}
<h2 className="text-5xl font-bold text-gray-900 mb-20 ">
  <div className="space-y-2">
    <div>Where Every Click</div>
    <div>Sparks a Connection!</div>
  </div>
</h2>




  {/* Three Vertical Cards */}
  <div className="flex flex-col gap-6 max-w-2xl">
    {/* Card 1 */}
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-start gap-4">
        <div className="text-blue-600">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
          </svg>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Web Development</h3>
          <p className="text-gray-600">Custom websites and web applications built with modern technologies.</p>
        </div>
      </div>
    </div>

    {/* Card 2 */}
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-start gap-4">
        <div className="text-blue-600">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
          </svg>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Mobile Apps</h3>
          <p className="text-gray-600">Cross-platform mobile applications for iOS and Android.</p>
        </div>
      </div>
    </div>

    {/* Card 3 */}
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-start gap-4">
        <div className="text-blue-600">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v1h8v-1zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-1a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v1h-3zM4.75 12.094A5.973 5.973 0 004 15v1H1v-1a3 3 0 013.75-2.906z" />
          </svg>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Consulting</h3>
          <p className="text-gray-600">Expert advice to optimize your digital strategy.</p>
        </div>
      </div>
    </div>
  </div>
</div>
      </div>
    </section>
  );
};

export default About;