import React from 'react';
import { FaFire, FaCamera, FaComments, FaLock, FaGlobe, FaBriefcase } from 'react-icons/fa';

const Featured = () => {
  const featuredItems = [
    {
      logo: <FaFire className="text-3xl text-red-500" />,
      title: 'Seamless Connections',
      description: 'Stay in touch with friends, family, and like-minded people with just a tap.'
    },
    {
      logo: <FaCamera className="text-3xl text-blue-500" />,
      title: 'Share Your Story',
      description: 'Upload photos, videos, and updates to let the world know what’s happening in your life.'
    },
    {
      logo: <FaComments className="text-3xl text-green-500" />,
      title: 'Real-Time Chat',
       description: "Whether it's a DM or a group conversation, connect instantly with smooth, lightning-fast messaging"
    },
    {
      logo: <FaLock className="text-3xl text-purple-500" />,
      title: 'Privacy First',
      description: 'Your data, your control. We prioritize your privacy with world-class security.'
    },
    {
      logo: <FaGlobe className="text-3xl text-yellow-500" />,
      title: 'Discover & Explore',
      description: 'Find trending content, join communities, and follow pages that match your interests.'
    },
    {
      logo: <FaBriefcase className="text-3xl text-pink-500" />,
      title: 'Grow Your Business',
      description: 'Use our platform to market your brand, connect with customers, and build meaningful relationships.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-demi mb-4">Features That Keep You Hooked!</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto font-demi">
          Meet, Chat, Share – Anytime, Anywhere!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredItems.map((item, index) => (
          <div key={index} className="bg-gray-200 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center gap-4 mb-3">
              {item.logo}
              <h3 className="text-xl font-semibold">{item.title}</h3>
            </div>
            <p className="text-gray-600 text-left">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
