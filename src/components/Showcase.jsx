import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const showcaseImages = [
  { src: 'https://picsum.photos/seed/artify1/800/600', alt: 'Abstract AI-generated art with flowing blue and purple colors' },
  { src: 'https://picsum.photos/seed/artify2/800/600', alt: 'AI-generated image of a futuristic city skyline' },
  { src: 'https://picsum.photos/seed/artify3/800/600', alt: 'Abstract geometric pattern created by AI' },
  { src: 'https://picsum.photos/seed/artify4/800/600', alt: 'AI art depicting a surreal landscape with floating islands' },
];

const Showcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % showcaseImages.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + showcaseImages.length) % showcaseImages.length);
  };

  return (
    <div className="container mx-auto text-center text-gray-900 dark:text-white">
      <h2 className="text-4xl font-bold mb-2">Product Showcase</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-12">A glimpse of what Artify AI can create.</p>
      <div className="relative w-full max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={showcaseImages[currentIndex].src}
            alt={showcaseImages[currentIndex].alt}
            className="rounded-lg shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all focus:outline-none focus:ring-2 focus:ring-purple-500"
          aria-label="Previous image"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all focus:outline-none focus:ring-2 focus:ring-purple-500"
          aria-label="Next image"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default Showcase;
