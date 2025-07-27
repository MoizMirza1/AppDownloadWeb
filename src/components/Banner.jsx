import React from "react";

const Banner = () => {
  return (
    <div className="min-h-screen w-full bg-brand flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 overflow-visible">
      <div className="w-full max-w-[90vw] sm:max-w-[85vw] md:max-w-[80vw] lg:max-w-[75vw] xl:max-w-[1400px] grid grid-cols-1 md:grid-cols-[55%_45%] gap-4 sm:gap-6 md:gap-8 lg:gap-10">
        <div className="text-white flex flex-col justify-center items-start space-y-3 sm:space-y-4 md:space-y-5">
          <div className="space-y-1 sm:space-y-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight font-demi">
              Stay Connected
            </h1>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight font-demi">
              Stay Social
            </h1>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight font-demi">
              Stay You!
            </h1>
          </div>
          <p className="text-sm sm:text-base md:text-[15px] lg:text-lg max-w-[90%] sm:max-w-md">
            A place where friendships grow, communities thrive, and moments turn
            into unforgettable experiences.
          </p>
          <button className="bg-white text-brand px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-md font-semibold hover:bg-gray-100 transition text-sm sm:text-base">
            Get Started
          </button>
        </div>

        <div className="relative h-full flex items-center justify-center md:justify-end pt-4 sm:pt-0">
          <div className="relative w-full max-w-[180px] xs:max-w-[200px] sm:max-w-[240px] md:max-w-[280px] lg:max-w-[320px] xl:max-w-sm -mb-10 sm:-mb-12 md:-mb-14 lg:-mb-16">
            <img
              src="/images/MobBanner.png"
              alt="Mobile App Mockup"
              className="w-full h-auto object-contain drop-shadow-md sm:drop-shadow-lg md:drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
