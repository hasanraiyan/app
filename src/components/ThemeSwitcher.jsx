import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { motion } from 'framer-motion';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      onClick={toggleTheme}
      className={`flex items-center w-14 h-8 rounded-full p-1 cursor-pointer ${
        theme === 'light' ? 'bg-gray-300 justify-start' : 'bg-purple-600 justify-end'
      }`}
      data-testid="theme-switcher"
    >
      <motion.div
        className="w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center text-sm"
        layout
        transition={{ type: 'spring', stiffness: 700, damping: 30 }}
      >
        {theme === 'light' ? '☀️' : '🌙'}
      </motion.div>
    </div>
  );
};

export default ThemeSwitcher;
