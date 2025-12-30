import React from 'react';
import { Globe, Palette, ShoppingCart, Code, TrendingUp, Megaphone } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from './ui/card';
import { services } from '../mock';

const iconMap = {
  Globe,
  Palette,
  ShoppingCart,
  Code,
  TrendingUp,
  Megaphone
};

const Services = () => {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-slate-600">
            Comprehensive digital solutions to elevate your business presence online
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <Card
                key={service.id}
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-none bg-white overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-teal-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                <CardHeader className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-emerald-600" />
                  </div>
                  <CardTitle className="text-2xl mb-3 text-slate-900 group-hover:text-emerald-600 transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-base text-slate-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;