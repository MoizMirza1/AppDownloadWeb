import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-brand rounded-t-[3rem] text-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-12 pt-12 pb-0"> {/* Removed bottom padding */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-end">
          
          {/* Left Content - unchanged */}
          <div className="space-y-6 z-10 mb-8 md:mb-0">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Join the Fun – <br className="hidden sm:block" />Download MyBindle Now!
            </h2>
            <p className="text-base md:text-lg text-indigo-100 max-w-md">
              Your Social Network, Your Way<br />
              Download MyBindle Now and Be a Part<br /> of a Community That's Always Evolving!
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

          {/* Right Images - Fixed bottom alignment */}
          <div className="relative h-auto min-h-[200px] md:min-h-[300px] w-full">
            {/* Left Phone */}
            <img 
              src="/images/body.png" 
              alt="App screen 1"
              className="absolute left-0 bottom-0 w-[45%] z-10 drop-shadow-lg"
              style={{ maxHeight: '80%' }}
            />
            
            {/* Right Phone */}
            <img 
              src="/images/img2.png" 
              alt="App screen 2"
              className="absolute right-0 bottom-0 w-[50%] z-20 drop-shadow-xl"
              style={{ maxHeight: '100%' }}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;