import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Showcase from './components/Showcase';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SectionWrapper from './components/SectionWrapper';
import './App.css';

function App() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <Navbar />
      <Hero />
      <SectionWrapper id="features" className="bg-gray-100 dark:bg-gray-800 py-20">
        <Features />
      </SectionWrapper>
      <SectionWrapper id="showcase" className="bg-white dark:bg-gray-900 py-20">
        <Showcase />
      </SectionWrapper>
      <SectionWrapper id="pricing" className="bg-gray-100 dark:bg-gray-800 py-20">
        <Pricing />
      </SectionWrapper>
      <SectionWrapper id="testimonials" className="bg-white dark:bg-gray-900 py-20">
        <Testimonials />
      </SectionWrapper>
      <SectionWrapper id="contact" className="bg-gray-100 dark:bg-gray-800 py-20">
        <Contact />
      </SectionWrapper>
      <Footer />
    </div>
  );
}

export default App;
