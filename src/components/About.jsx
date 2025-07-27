import React from 'react';
import { FaVideo, FaBell, FaUsers } from 'react-icons/fa';

const About = () => {
  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        
        {/* Left Column - Image */}
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
          <div className="mb-20">
            <h2 className="text-5xl font-demi text-gray-900">
              <div className="space-y-2">
                <div>Where Every Click</div>
                <div>Sparks a Connection!</div>
              </div>
            </h2>

            <p className="mt-6 text-lg text-gray-600 max-w-xl text-left">
              A small act of kindness today can create a lifetime of impact for someone in need. 
              Give from the heart and change a life!
            </p>
          </div>

          {/* Three Vertical Cards */}
          <div className="flex flex-col gap-6 max-w-2xl translate-y-[-4rem]">

            {/* Card 1 - Web Development */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="text-blue-600">
                  <FaVideo className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Web Development</h3>
                  <p className="text-gray-600">
                    Custom websites and web applications built with modern technologies.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 - Mobile Apps */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="text-blue-600">
                  <FaBell className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Mobile Apps</h3>
                  <p className="text-gray-600">
                    Cross-platform mobile applications for iOS and Android.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 - Consulting */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="text-blue-600">
                  <FaUsers className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Consulting</h3>
                  <p className="text-gray-600">
                    Expert advice to optimize your digital strategy.
                  </p>
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
