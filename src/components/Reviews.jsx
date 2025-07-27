import React from 'react';

const Reviews = () => {
  // Sample review data with image URLs and countries
  const reviews = [
    {
      id: 1,
      name: "John Doe",
      country: "United States",
      rating: 5,
      review: "Excellent service! The team was very professional and delivered beyond my expectations.",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 2,
      name: "Jane Smith",
      country: "Canada",
      rating: 5,
      review: "Absolutely loved the product quality. Will definitely purchase again!",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      id: 3,
      name: "Mike Johnson",
      country: "United Kingdom",
      rating: 5,
      review: "Fast delivery and great customer support. Highly recommend!",
      image: "https://randomuser.me/api/portraits/men/22.jpg"
    },
    {
      id: 4,
      name: "Sarah Williams",
      country: "Australia",
      rating: 5,
      review: "The attention to detail is impressive. Worth every penny.",
      image: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    {
      id: 5,
      name: "David Brown",
      country: "Germany",
      rating: 5,
      review: "Exceptional experience from start to finish. Five stars!",
      image: "https://randomuser.me/api/portraits/men/75.jpg"
    },
    {
      id: 6,
      name: "Emily Davis",
      country: "France",
      rating: 5,
      review: "Perfect in every way. Couldn't be happier with my purchase.",
      image: "https://randomuser.me/api/portraits/women/63.jpg"
    }
  ];

  return (
    <section className="w-full max-w-6xl mx-auto px-5 py-12">
      <h2 className="text-3xl md:text-5xl font-demi text-center mb-10 text-gray-800">
        What Our Users Say
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {reviews.map((review) => (
          <div 
            key={review.id} 
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
          >
            {/* Star Rating (Top) */}
            <div className="text-yellow-400 text-xl mb-3">★★★★★</div>
            
            {/* Review Paragraph */}
            <p className="text-gray-600 leading-relaxed mb-4 flex-grow">
              {review.review}
            </p>
            
            {/* User Info */}
            <div className="flex items-center mt-auto">
              <img 
                src={review.image} 
                alt={review.name}
                className="w-10 h-10 rounded-full object-cover mr-3"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {review.name}
                </h3>
                <p className="text-sm text-gray-500 font-normal">
                  {review.country}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center">
        <button className="bg-white text-brand font-bold py-3 px-8 rounded-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
          See More
        </button>
      </div>
    </section>
  );
}

export default Reviews;