import React, { useState } from 'react';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic email validation
    if (email && /\S+@\S+\.\S+/.test(email)) {
      setMessage('Thank you for subscribing!');
      setEmail('');
    } else {
      setMessage('Please enter a valid email address.');
    }
  };

  return (
    <div className="container mx-auto text-center text-gray-900 dark:text-white">
      <h2 className="text-4xl font-bold mb-2">Join the Waitlist</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-8">Be the first to know when Artify AI launches.</p>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="flex items-center">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your-email@example.com"
            className="w-full px-4 py-3 text-gray-900 rounded-l-full focus:outline-none"
            required
          />
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-r-full transition-colors duration-300"
          >
            Subscribe
          </button>
        </div>
        {message && <p className="mt-4 text-sm">{message}</p>}
      </form>
    </div>
  );
};

export default Contact;
