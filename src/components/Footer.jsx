import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-brand rounded-t-[3rem] py-12 px-6 sm:px-12 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Section - Content remains unchanged */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Join the Fun – Download MyBindle Now!</h2>
            <p className="text-lg text-indigo-100">
              Your Social Network, Your Way<br />
              Download MyBindle Now and Be a Part of a Community That's Always Evolving!
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-black rounded-full px-6 py-1 flex items-center gap-2">
                <img 
                  src="https://images.squarespace-cdn.com/content/v1/55af15f6e4b040ddf4a701c3/1568734560913-98XU9QT6GGLHZX9N9LE7/apple.png" 
                  alt="Apple Logo" 
                  className="h-6 w-6"
                />
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-lg font-semibold">App Store</div>
                </div>
              </button>
              
              <button className="bg-white text-black rounded-full px-6 py-3 flex items-center gap-2">
                <img 
                  src="https://pluspng.com/img-png/play-store-logo-png-google-play-store-logo-png-transparent-amp-svg-vector-pluspng-2400x2746.png" 
                  alt="Play Store Logo" 
                  className="h-6 w-6"
                />
                <div className="text-left">
                  <div className="text-xs">Get it on</div>
                  <div className="text-lg font-semibold">Google Play</div>
                </div>
              </button>
            </div>
          </div>

          {/* Right Section - Adjusted phone mockups */}
          <div className="relative h-[400px] w-full">
            {/* Left phone (half showing) */}
            <div className="absolute left-0 top-32   w-[45%] h-[80%] overflow-hidden">
              <img 
                src="/images/img1.png" 
                alt="App screen 1"
                className="absolute right-0 top-32   object-contain"
              />
            </div>
            
            {/* Right phone (slightly lower) */}
            <div className="absolute right-0 top-1/2 transform -translate-y-1/3 w-[45%] h-[80%] overflow-hidden">
              <img 
                src="/images/imge.png" 
                alt="App screen 2"
                className="absolute left-0 h-full w-auto max-w-none object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;