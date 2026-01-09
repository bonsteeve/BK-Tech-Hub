import React, { useState } from 'react';
import ServiceCard from './ServiceCard';
import ServiceModal from './ServiceModal';
import PricingCard from './PricingCard';
import { services, pricingPackages } from '../mock';

const Services = () => {
  const [modalState, setModalState] = useState({
    isOpen: false,
    selectedService: null
  });

  const handleViewDetails = (serviceId) => {
    const service = services.find(s => s.id === serviceId);
    setModalState({
      isOpen: true,
      selectedService: service
    });
  };

  const handleCloseModal = () => {
    setModalState({
      isOpen: false,
      selectedService: null
    });
  };

  const handleGetQuote = (serviceId, packageName = null) => {
    const service = services.find(s => s.id === serviceId);
    // Scroll to contact section with service context
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      
      // Pre-populate contact form with service information
      setTimeout(() => {
        const messageTextarea = document.querySelector('textarea[name="message"]');
        if (messageTextarea && service) {
          const packageInfo = packageName ? ` - ${packageName} package` : '';
          messageTextarea.value = `Hi, I'm interested in getting a quote for ${service.title}${packageInfo}. Please provide more information about pricing and timeline.`;
          messageTextarea.focus();
        }
      }, 500);
    }
  };

  return (
    <section id="services" className="py-20 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium text-emerald-700 bg-emerald-50 rounded-full">
            <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
            Our Services
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Digital Solutions That 
            <span className="text-emerald-600"> Drive Results</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Professional services designed to elevate your business and deliver measurable outcomes.
          </p>
        </div>

        {/* Services List - Horizontal Layout */}
        <div className="space-y-16 mb-20">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className="opacity-0 animate-fade-in"
              style={{ 
                animationDelay: `${index * 200}ms`,
                animationFillMode: 'forwards'
              }}
            >
              <ServiceCard
                service={service}
                onGetQuote={handleGetQuote}
                onViewDetails={handleViewDetails}
                index={index}
              />
            </div>
          ))}
        </div>

        {/* Pricing Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium text-emerald-700 bg-emerald-50 rounded-full">
              <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
              Pricing Packages
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Choose Your 
              <span className="text-emerald-600"> Perfect Package</span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Transparent pricing with no hidden fees. Select the package that best fits your business needs.
            </p>
          </div>

          {/* Pricing Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingPackages.map((pkg, index) => (
              <div 
                key={pkg.id}
                className="opacity-0 animate-fade-in"
                style={{ 
                  animationDelay: `${(index + services.length) * 150}ms`,
                  animationFillMode: 'forwards'
                }}
              >
                <PricingCard
                  package={pkg}
                  onGetQuote={handleGetQuote}
                  onViewDetails={handleViewDetails}
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="text-center bg-white rounded-2xl p-12 lg:p-16 shadow-lg">
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            Need a Custom Solution?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            We also offer E-commerce Solutions, SEO Optimization, and Digital Marketing services tailored to your specific needs.
          </p>
          <button 
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="inline-flex items-center px-8 py-4 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            <span>Get Started Today</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
        
        {/* Service Modal */}
        <ServiceModal
          service={modalState.selectedService}
          isOpen={modalState.isOpen}
          onClose={handleCloseModal}
          onGetQuote={handleGetQuote}
        />
      </div>
    </section>
  );
};

export default Services;