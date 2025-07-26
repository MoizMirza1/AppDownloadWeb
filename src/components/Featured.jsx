import React from 'react';

const Featured = () => {
  const featuredItems = [
    {
      logo: '⭐',
      title: 'Premium Quality',
      description: 'Our products meet the highest industry standards for quality and durability.'
    },
    {
      logo: '🚀', 
      title: 'Fast Delivery',
      description: 'Get your orders delivered to your doorstep in record time.'
    },
    {
      logo: '💯', 
      title: 'Satisfaction Guaranteed',
      description: 'We stand behind our products with a 100% satisfaction guarantee.'
    },
    {
      logo: '🌱', 
      title: 'Eco-Friendly',
      description: 'Sustainable materials that are kind to the environment.'
    },
    {
      logo: '🛡️', 
      title: 'Secure Payments',
      description: 'Your transactions are protected with advanced security measures.'
    },
    {
      logo: '👥', 
      title: '24/7 Support',
      description: 'Our customer service team is always ready to assist you.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Features That Keep You Hooked!</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Meet, Chat, Share – Anytime, Anywhere!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredItems.map((item, index) => (
          <div key={index} className="bg-gray-200 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center gap-4 mb-3">
              <div className="text-3xl">{item.logo}</div>
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