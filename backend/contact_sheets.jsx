import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '../hooks/use-toast';
import { companyInfo } from '../mock';

// Google Apps Script Web App URL
const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbzpTlTmpggIaQy7EBwoD6A1HjB0yWm7sHY7SmSPfSG9R0J1g70fV9SWG5cd6SXAGZGB/exec";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Using fetch with 'no-cors' is the most reliable way to hit Google Scripts from a browser
      await fetch(GOOGLE_SHEET_URL, {
        method: 'POST',
        mode: 'no-cors', 
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Since 'no-cors' doesn't return a readable response, we assume success if no error is thrown
      toast({
        title: 'Message Sent!',
        description: 'Thank you! Your project details have been received.',
      });

      // Reset form
      setFormData({ name: '', email: '', phone: '', message: '' });

    } catch (error) {
      console.error("Submission Error:", error);
      toast({
        title: 'Error',
        description: 'Failed to send message. Please check your connection and try again.',
        variant: 'destructive'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappUrl = `https://wa.me/${companyInfo.phone.replace(/\+/g, '')}?text=Hello%2C%20I%27m%20interested%20in%20your%20web%20design%20services`;

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">Get In Touch</h2>
          <p className="text-xl text-slate-600">
            Ready to start your project? Contact us today for a free consultation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-slate-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Full Name *</label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="bg-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Email Address *</label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="bg-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+254 700 000 000"
                  className="bg-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Message *</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  rows={5}
                  required
                  className="bg-white"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-lg"
                size="lg"
                disabled={isSubmitting}
              >
                <Send className="w-5 h-5 mr-2" />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>

          {/* Contact Info Column */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h3>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Phone</p>
                  <a href={`tel:${companyInfo.phone}`} className="text-slate-600 hover:text-emerald-600">{companyInfo.phone}</a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Email</p>
                  <a href={`mailto:${companyInfo.email}`} className="text-slate-600 hover:text-emerald-600">{companyInfo.email}</a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Address</p>
                  <p className="text-slate-600">{companyInfo.address}</p>
                </div>
              </div>
            </div>

            {/* WhatsApp Box */}
            <div className="bg-gradient-to-br from-green-500 to-green-600 p-8 rounded-2xl text-white shadow-xl">
              <h4 className="text-2xl font-bold mb-2">WhatsApp Chat</h4>
              <p className="mb-6 text-green-50">Get instant responses to your queries and start your project discussion right away!</p>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="w-full bg-white text-green-600 hover:bg-green-50 font-bold">
                  Start WhatsApp Chat Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;