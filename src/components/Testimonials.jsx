import React from 'react';

const testimonialsData = [
  {
    quote: "Artify AI has completely transformed my creative workflow. I can generate incredible visuals in minutes, not hours.",
    name: 'Jane Doe',
    title: 'Digital Artist',
    image: 'https://i.pravatar.cc/150?img=1',
  },
  {
    quote: "As a marketer, creating compelling ad visuals is key. Artify AI gives me an endless supply of high-quality images.",
    name: 'John Smith',
    title: 'Marketing Manager',
    image: 'https://i.pravatar.cc/150?img=2',
  },
  {
    quote: "The quality and speed are unmatched. This tool is a game-changer for content creators.",
    name: 'Emily White',
    title: 'YouTuber & Blogger',
    image: 'https://i.pravatar.cc/150?img=3',
  },
];

const Testimonials = () => {
  return (
    <div className="container mx-auto text-center text-gray-900 dark:text-white">
      <h2 className="text-4xl font-bold mb-2">What Our Users Say</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-12">Real stories from real creators.</p>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg">
            <p className="italic text-gray-600 dark:text-gray-400 mb-6">"{testimonial.quote}"</p>
            <div className="flex items-center justify-center">
              <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full mr-4 border-2 border-purple-500 dark:border-purple-400" />
              <div>
                <h4 className="font-bold text-lg">{testimonial.name}</h4>
                <p className="text-purple-500 dark:text-purple-400">{testimonial.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
