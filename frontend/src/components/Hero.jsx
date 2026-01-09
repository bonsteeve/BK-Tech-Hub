import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-slate-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero.jpeg"
          alt="Modern workspace with technology"
          className="w-full h-full object-cover object-center brightness-110 contrast-110 saturate-110"
        />
        {/* Light overlay for text readability */}
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          {/* Tagline */}
          <p className="text-emerald-400 font-medium text-lg mb-4 tracking-wide">
            Give your Business a Digital Presence
          </p>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            BK Tech Hub
          </h1>

          {/* Description */}
          <p className="text-xl sm:text-2xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
            We create stunning, high-performance websites that transform businesses and drive measurable results.
          </p>

          {/* CTA Button */}
          <Button
            onClick={() => scrollToSection('contact')}
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white text-lg px-8 py-4 rounded-full shadow-2xl shadow-orange-500/30 transition-all duration-300 hover:scale-105"
          >
            Get a Free Quote
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>

      {/* Features Strip - At the very bottom edge of hero section */}
      <div className="absolute bottom-0 left-0 right-0 z-20 bg-black/30 backdrop-blur-sm border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 justify-center sm:justify-start">
            {['24/7 Support', 'Free SEO Setup', 'Mobile Responsive', 'Fast Delivery'].map((feature) => (
              <div key={feature} className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span className="text-white font-medium text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;