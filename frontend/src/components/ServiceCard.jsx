import React, { useState } from 'react';
import { Globe, Palette, ShoppingCart, Code, TrendingUp, Megaphone, ArrowRight } from 'lucide-react';

const iconMap = {
  Globe,
  Palette,
  ShoppingCart,
  Code,
  TrendingUp,
  Megaphone
};

const ServiceCard = ({ service, onGetQuote, onViewDetails, index }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const Icon = iconMap[service.icon];
  
  const handleViewDetails = () => {
    if (onViewDetails) {
      onViewDetails(service.id);
    }
  };

  const handleGetQuote = () => {
    if (onGetQuote) {
      onGetQuote(service.id);
    }
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  // Generate gradient based on service ID for consistent fallbacks
  const gradients = [
    'from-emerald-500 to-teal-500',
    'from-purple-500 to-pink-500', 
    'from-blue-500 to-indigo-500',
  ];
  
  const gradientClass = gradients[(service.id - 1) % gradients.length];
  
  // Alternate layout: even index = image left, odd index = image right
  const isImageLeft = index % 2 === 0;

  return (
    <div className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className={`flex flex-col ${isImageLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center`}>
        {/* Image Section */}
        <div className="w-full lg:w-1/2 relative">
          <div className="relative h-80 lg:h-96 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
            {service.image && !imageError ? (
              <img 
                src={service.image} 
                alt={`${service.title} illustration`}
                className={`w-full h-full object-cover transition-all duration-500 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={handleImageLoad}
                onError={handleImageError}
                loading="lazy"
              />
            ) : (
              <div className={`w-32 h-32 rounded-3xl bg-gradient-to-br ${gradientClass} flex items-center justify-center shadow-2xl`}>
                <Icon className="w-16 h-16 text-white" />
              </div>
            )}
            
            {/* Loading skeleton */}
            {!imageLoaded && !imageError && service.image && (
              <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
            )}
          </div>
        </div>
        
        {/* Content Section */}
        <div className="w-full lg:w-1/2 p-8 lg:p-12">
          <div className="max-w-lg">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              {service.title}
            </h3>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {service.shortDescription || service.description}
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleGetQuote}
                className="px-8 py-4 bg-emerald-600 text-white font-semibold rounded-xl hover:bg-emerald-700 transition-colors duration-200 shadow-lg hover:shadow-xl flex-1 sm:flex-none"
              >
                Get Quote
              </button>
              
              <button
                onClick={handleViewDetails}
                className="px-8 py-4 flex items-center justify-center text-emerald-600 font-semibold rounded-xl border-2 border-emerald-200 hover:bg-emerald-50 transition-colors duration-200 group flex-1 sm:flex-none"
              >
                <span>View Details</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;