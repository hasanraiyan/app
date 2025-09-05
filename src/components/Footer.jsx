import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-white py-8">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-purple-500 dark:hover:text-purple-400 transition-colors duration-300">GitHub</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-purple-500 dark:hover:text-purple-400 transition-colors duration-300">Twitter</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-purple-500 dark:hover:text-purple-400 transition-colors duration-300">LinkedIn</a>
        </div>
        <p className="text-gray-500 dark:text-gray-400">&copy; {new Date().getFullYear()} Artify AI. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
