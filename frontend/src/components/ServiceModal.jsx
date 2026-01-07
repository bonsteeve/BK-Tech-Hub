import React from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription 
} from './ui/dialog';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/tabs';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { 
  Clock, 
  CheckCircle, 
  Code, 
  Award, 
  Users, 
  Calendar,
  ExternalLink,
  Star
} from 'lucide-react';
import QuoteRequestCTA from './QuoteRequestCTA';

const ServiceModal = ({ service, isOpen, onClose, onGetQuote }) => {
  if (!service) {
    return null;
  }

  const handleGetQuote = () => {
    if (onGetQuote) {
      onGetQuote(service.id);
    }
    onClose();
  };

  // Simple modal for testing
  if (isOpen) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-8 rounded-lg max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">{service.title}</h2>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-2xl"
            >
              ×
            </button>
          </div>
          
          <div className="space-y-4">
            <p className="text-gray-600">{service.description}</p>
            
            {service.features && (
              <div>
                <h3 className="font-semibold mb-2">Features:</h3>
                <ul className="list-disc list-inside space-y-1">
                  {service.features.map((feature, index) => (
                    <li key={index} className="text-gray-600">{feature}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {service.deliverables && (
              <div>
                <h3 className="font-semibold mb-2">Deliverables:</h3>
                <ul className="list-disc list-inside space-y-1">
                  {service.deliverables.map((deliverable, index) => (
                    <li key={index} className="text-gray-600">{deliverable}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {service.timeline && (
              <div>
                <h3 className="font-semibold mb-2">Timeline:</h3>
                <p className="text-gray-600">{service.timeline}</p>
              </div>
            )}
            
            <div className="flex gap-4 mt-6">
              <button 
                onClick={handleGetQuote}
                className="bg-emerald-500 text-white px-6 py-2 rounded-lg hover:bg-emerald-600"
              >
                Get Quote
              </button>
              <button 
                onClick={onClose}
                className="border border-gray-300 px-6 py-2 rounded-lg hover:bg-gray-50"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  return null;
};

export default ServiceModal;