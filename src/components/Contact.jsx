import React, { useState } from 'react';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && /\S+@\S+\.\S+/.test(email)) {
      setMessage('Thank you for subscribing!');
      setIsError(false);
      setEmail('');
    } else {
      setMessage('Please enter a valid email address.');
      setIsError(true);
    }
  };

  return (
    <div className="container mx-auto text-center text-gray-900 dark:text-white">
      <h2 className="text-4xl font-bold mb-2">Join the Waitlist</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-8">Be the first to know when Artify AI launches.</p>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="flex items-center border dark:border-gray-600 rounded-full focus-within:ring-2 focus-within:ring-purple-500">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your-email@example.com"
            className="w-full px-4 py-3 bg-transparent text-gray-900 dark:text-white rounded-l-full focus:outline-none"
            required
          />
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-r-full transition-colors duration-300"
          >
            Subscribe
          </button>
        </div>
        {message && (
          <div
            className={`mt-4 text-sm p-3 rounded-lg ${
              isError
                ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300'
                : 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
            }`}
            aria-live="polite"
          >
            {message}
          </div>
        )}
      </form>
    </div>
  );
};

export default Contact;
