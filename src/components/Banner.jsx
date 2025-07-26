import React from 'react';

const Banner = () => {
  return (
    <div className="min-h-screen w-full bg-brand grid grid-cols-1 md:grid-cols-[60%_40%] px-6 md:px-16 overflow-hidden">
      {/* Left Side (60%) - Now centered */}
      <div className="text-white flex flex-col justify-center items-start space-y-4 md:space-y-6">
        <div className="space-y-2">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Stay Connected
          </h1>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Stay Social
          </h1>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Stay You!
          </h1>
        </div>
        <p className="text-base md:text-lg max-w-2xl">
          A place where friendships grow, communities thrive, and moments turn into unforgettable experiences. Whether you're looking to reconnect with old friends, build new relationships, or share what matters most to you – MyBindle is your home on the internet.
        </p>
        <button className="bg-white text-brand px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition">
          Get Started
        </button>
      </div>

      {/* Right Side (40%) */}
      <div className="flex justify-center md:justify-end items-center h-full relative py-12 md:py-24">
        <div className="relative bg-gradient-to-br from-gray-700 to-black w-72 h-[500px] rounded-3xl shadow-2xl border border-gray-300 flex flex-col items-center p-4 mx-auto">
          {/* Circular notch */}
          <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-black rounded-full border-2 border-gray-500"></div>

          <div className="flex-1 w-full rounded-lg overflow-hidden mt-4">
            <img
              src="/images/imge.png"
              alt="Mobile Wallpaper"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute top-24 -left-16 md:-left-20 w-40 md:w-44 bg-gray-800 text-white p-3 rounded-lg shadow-lg text-sm z-10">
            Seamless Connection
          </div>

          <div className="absolute bottom-20 -right-16 md:-right-20 w-40 md:w-44 bg-gray-700 text-white p-3 rounded-lg shadow-lg text-sm z-10">
            Discover and Explore
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;