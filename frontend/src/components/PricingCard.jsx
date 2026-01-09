import React from 'react';
import { Check, Star } from 'lucide-react';

const PricingCard = ({ package: pkg, onGetQuote, onViewDetails }) => {
  const handleGetQuote = () => {
    if (onGetQuote) {
      onGetQuote(pkg.serviceId, pkg.name);
    }
  };

  const handleViewDetails = () => {
    if (onViewDetails) {
      onViewDetails(pkg.serviceId);
    }
  };

  return (
    <div className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${
      pkg.popular ? 'ring-2 ring-emerald-500 scale-105' : ''
    }`}>
      {pkg.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
            <Star className="w-4 h-4 mr-1" />
            Most Popular
          </div>
        </div>
      )}
      
      <div className="p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
          <p className="text-gray-600 mb-4">{pkg.description}</p>
          <div className="text-4xl font-bold text-emerald-600 mb-2">
            {pkg.currency} {pkg.price}
          </div>
        </div>

        {/* Features */}
        <div className="mb-8">
          <ul className="space-y-3">
            {pkg.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <Check className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            onClick={handleGetQuote}
            className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-200 ${
              pkg.popular
                ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                : 'bg-emerald-50 text-emerald-600 hover:bg-emerald-100'
            }`}
          >
            Get Quote
          </button>
          
          <button
            onClick={handleViewDetails}
            className="w-full py-3 px-6 rounded-lg font-semibold text-gray-600 border border-gray-300 hover:bg-gray-50 transition-colors duration-200"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;