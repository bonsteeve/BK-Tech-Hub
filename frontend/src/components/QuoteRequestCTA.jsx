import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const QuoteRequestCTA = ({ 
  serviceId, 
  serviceName, 
  onGetQuote, 
  variant = 'primary',
  className = '',
  size = 'default'
}) => {
  const handleClick = () => {
    if (onGetQuote) {
      onGetQuote(serviceId);
    } else {
      // Fallback: scroll to contact section with service context
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
        
        // Pre-populate contact form with service information
        setTimeout(() => {
          const messageTextarea = document.querySelector('textarea[name="message"]');
          if (messageTextarea && serviceName) {
            messageTextarea.value = `Hi, I'm interested in getting a quote for ${serviceName}. Please provide more information about pricing and timeline.`;
            messageTextarea.focus();
          }
        }, 500);
      }
    }
  };

  const buttonStyles = {
    primary: "bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/40 transform hover:scale-105 transition-all duration-200",
    secondary: "border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-500 hover:text-white transition-all duration-200"
  };

  return (
    <Button
      onClick={handleClick}
      className={`group ${buttonStyles[variant]} ${className}`}
      size={size}
      aria-label={`Request quote for ${serviceName}`}
    >
      <MessageCircle className="w-4 h-4" />
      Get Quote
      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
    </Button>
  );
};

export default QuoteRequestCTA;