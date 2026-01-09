import React from 'react';
import { Award, Clock, Users, Target } from 'lucide-react';
import { stats } from '../mock';

const About = () => {
  const features = [
    {
      icon: Award,
      title: 'Quality Assured',
      description: 'We deliver premium quality websites that exceed expectations and industry standards.'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock support to ensure your website runs smoothly at all times.'
    },
    {
      icon: Users,
      title: 'Client-Focused',
      description: 'Your success is our priority. We work closely with you to bring your vision to life.'
    },
    {
      icon: Target,
      title: 'Results Driven',
      description: 'We focus on creating websites that drive real business results and ROI.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            About BKTech Digital Hub
          </h2>
          <p className="text-xl text-slate-600">
            Your trusted digital partner in Nairobi, Kenya
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Content */}
          <div>
            <h3 className="text-3xl font-bold text-slate-900 mb-6">
              Leading Web Development Agency in Kenya
            </h3>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              BKTech Digital Hub is a full-service digital agency based in Nairobi, Kenya. We specialize in creating stunning, high-performance websites and digital solutions that help businesses grow and succeed online.
            </p>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              We've established ourselves as one of the most reliable website designers in Kenya. Our team combines creativity, technical expertise, and business acumen to deliver solutions that drive real results.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Whether you're a startup, small business, or established corporation, we have the expertise and dedication to bring your digital vision to life. We're available 24/7 to support your business needs.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 text-center"
              >
                <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600 mb-2">
                  {stat.number}
                </p>
                <p className="text-slate-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8 text-emerald-600" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h4>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;