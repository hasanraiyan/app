import React from 'react';
import { Zap, Wand2, Diamond } from 'lucide-react';

const featuresData = [
  {
    icon: <Zap size={48} className="mb-4 text-purple-500 dark:text-purple-400" />,
    title: 'Instant Creations',
    description: 'Go from text prompt to stunning image in seconds. Our powerful AI is optimized for speed.',
  },
  {
    icon: <Wand2 size={48} className="mb-4 text-purple-500 dark:text-purple-400" />,
    title: 'Limitless Creativity',
    description: 'Explore diverse artistic styles and generate unique visuals that match your creative vision.',
  },
  {
    icon: <Diamond size={48} className="mb-4 text-purple-500 dark:text-purple-400" />,
    title: 'High-Quality Output',
    description: 'Download high-resolution images suitable for any project, from social media to print.',
  },
];

const Features = () => {
  return (
    <div className="container mx-auto text-center text-gray-900 dark:text-white">
      <h2 className="text-4xl font-bold mb-2">Features</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-12">Everything you need to bring your ideas to life.</p>
      <div className="grid md:grid-cols-3 gap-8">
        {featuresData.map((feature, index) => (
          <div key={index} className="bg-white dark:bg-gray-900 p-8 rounded-lg transform hover:scale-105 transition-transform duration-300 shadow-lg dark:ring-1 dark:ring-white/10">
            {feature.icon}
            <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
            <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
