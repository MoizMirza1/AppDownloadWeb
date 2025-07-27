import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-brand rounded-t-[3rem] text-white relative">
      <div className="max-w-6xl mx-auto px-6 sm:px-12 pt-12"> {/* Added pt-12 for top padding */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-end"> {/* Removed gap-8 */}
          
          {/* Left Section - Adjusted spacing */}
          <div className="space-y-6 z-10 mb-0"> {/* Removed pb-4, added mb-0 */}
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

          {/* Right Section - Tightly aligned */}
          <div className="relative h-[320px] w-full">
            {/* Left Phone (bottom-aligned) */}
            <img 
              src="/images/body.png" 
              alt="App screen 1"
              className="absolute left-0 bottom-0 w-[48%] z-10 drop-shadow-lg"
            />

            {/* Right Phone (bottom-aligned with gap) */}
            <img 
              src="/images/img2.png" 
              alt="App screen 2"
              className="absolute bottom-0 w-[48%] z-20 drop-shadow-xl"
              style={{ left: '52%' }}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;