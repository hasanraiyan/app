import React from 'react';
import { Check } from 'lucide-react';

const pricingData = [
  {
    plan: 'Free',
    price: '$0',
    features: ['10 generations/day', 'Basic quality', 'Personal use only'],
    buttonText: 'Start for Free',
    isFeatured: false,
  },
  {
    plan: 'Pro',
    price: '$15',
    features: ['Unlimited generations', 'High quality', 'Commercial license', 'Priority support'],
    buttonText: 'Go Pro',
    isFeatured: true,
  },
  {
    plan: 'Premium',
    price: '$50',
    features: ['All Pro features', 'API access', 'Team collaboration', 'Dedicated support'],
    buttonText: 'Contact Us',
    isFeatured: false,
  },
];

const Pricing = () => {
  return (
    <div className="container mx-auto text-center text-gray-900 dark:text-white">
      <h2 className="text-4xl font-bold mb-2">Pricing Plans</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-12">Choose the plan that's right for you.</p>
      <div className="grid md:grid-cols-3 gap-8">
        {pricingData.map((tier, index) => (
          <div
            key={index}
            className={`p-8 rounded-lg shadow-lg transform transition-transform duration-300 ${
              tier.isFeatured
                ? 'bg-purple-600 text-white scale-105'
                : 'bg-white dark:bg-gray-800 hover:scale-105'
            }`}
          >
            <h3 className="text-2xl font-bold mb-4">{tier.plan}</h3>
            <p className="text-4xl font-extrabold mb-6">
              {tier.price}
              <span className={`text-lg font-normal ${tier.isFeatured ? 'text-purple-200' : 'text-gray-500 dark:text-gray-400'}`}>
                /mo
              </span>
            </p>
            <ul className="text-left mb-8 space-y-2">
              {tier.features.map((feature, i) => (
                <li key={i} className="flex items-center">
                  <Check className="w-5 h-5 mr-2 text-green-400" />
                  {feature}
                </li>
              ))}
            </ul>
            <button
              className={`w-full py-3 px-6 rounded-full font-bold transition-colors duration-300 ${
                tier.isFeatured
                  ? 'bg-white text-purple-600 hover:bg-gray-200'
                  : 'bg-purple-600 text-white hover:bg-purple-700'
              }`}
            >
              {tier.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
