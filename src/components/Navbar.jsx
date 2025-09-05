import React, { useState } from 'react';
import { Link } from 'react-scroll';
import ThemeSwitcher from './ThemeSwitcher';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = ['Features', 'Showcase', 'Pricing', 'Testimonials', 'Contact'];

  return (
    <>
      <nav className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-4 sticky top-0 z-50 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="hero" smooth={true} duration={500} className="cursor-pointer">
            <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-600">
              Artify AI
            </h1>
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <ul className="flex space-x-6">
              {navLinks.map((link) => (
                <li key={link}>
                  <Link
                    to={link.toLowerCase()}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    className="cursor-pointer hover:text-purple-500 dark:hover:text-purple-400 transition-colors duration-300"
                    activeClass="text-purple-500 dark:text-purple-400"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
            <ThemeSwitcher />
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300">
              Get Started
            </button>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-900 dark:text-white focus:outline-none">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900">
          <ul className="flex flex-col items-center space-y-4 p-4">
            {navLinks.map((link) => (
              <li key={link}>
                <Link
                  onClick={() => setIsMenuOpen(false)}
                  to={link.toLowerCase()}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="cursor-pointer text-gray-900 dark:text-white hover:text-purple-500 dark:hover:text-purple-400 transition-colors duration-300"
                  activeClass="text-purple-500 dark:text-purple-400"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
