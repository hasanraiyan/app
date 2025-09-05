import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const showcaseImages = [
  'https://picsum.photos/seed/artify1/800/600',
  'https://picsum.photos/seed/artify2/800/600',
  'https://picsum.photos/seed/artify3/800/600',
  'https://picsum.photos/seed/artify4/800/600',
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
    <div className="container mx-auto text-center">
      <h2 className="text-4xl font-bold mb-2">Product Showcase</h2>
      <p className="text-gray-400 mb-12">A glimpse of what Artify AI can create.</p>
      <div className="relative w-full max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={showcaseImages[currentIndex]}
            alt={`Showcase ${currentIndex + 1}`}
            className="rounded-lg shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
        >
          &#10094;
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Showcase;
