import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white h-screen flex items-center justify-center text-center">
      <div className="container mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
          Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-600">Artify AI</span>
        </h1>
        <p className="text-lg md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
          Transform your text into stunning visuals, instantly.
        </p>
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-transform transform hover:scale-105">
          Start Creating Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
