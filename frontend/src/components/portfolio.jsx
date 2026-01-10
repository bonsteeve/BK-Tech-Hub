import React, { useState, useMemo } from 'react';
import { portfolioProjects } from '../mock';
import { ExternalLink, X, Globe, Tag, ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  // Categories for filtering
  const categories = useMemo(() => {
    return ['All', 'Website Development', 'Branding'];
  }, []);

  // Filter projects based on active filter
  const filteredProjects = useMemo(() => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  if (activeFilter === 'All') return portfolioProjects;
  return portfolioProjects.filter(project => project.category === activeFilter);
}, [activeFilter]);


  // Mock logo designs data - replace with your actual logo designs
  const logoDesigns = [
    { id: 1, title: 'Logo Design 1', image: '/images/logo1.jpg' },
    { id: 2, title: 'Logo Design 2', image: '/images/logo2.jpg' },
    { id: 3, title: 'Logo Design 3', image: '/images/logo3.jpg' },
    { id: 4, title: 'Logo Design 4', image: '/images/logo4.png' },
    { id: 5, title: 'Logo Design 5', image: '/images/logo1.jpg' },
    { id: 6, title: 'Logo Design 6', image: '/images/logo2.jpg' },
    { id: 7, title: 'Logo Design 7', image: '/images/logo3.jpg' },
    { id: 8, title: 'Logo Design 8', image: '/images/logo4.png' },
  ];

  // Check filter states
  const isBranding = activeFilter === 'Branding';
  const isAll = activeFilter === 'All';

  const handleVisitWebsite = (url) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  // Function to get gradient class based on project index
  const getGradientClass = (index) => {
    const gradients = [
      'from-orange-500/10 to-red-500/20',
      'from-emerald-500/10 to-emerald-900/20',
      'from-orange-500/10 to-red-500/20',
      'from-emerald-500/10 to-emerald-900/20',
      'from-orange-500/10 to-red-500/20',
      'from-emerald-500/10 to-emerald-900/20',
    ];
    return gradients[index % gradients.length];
  };

  // Function to get border color based on project index
  const getBorderColor = (index) => {
    const colors = [
      'hover:border-orange-500/50',
      'hover:border-emerald-500/50',
      'hover:border-orange-500/50',
      'hover:border-emerald-500/50',
      'hover:border-orange-500/50',
      'hover:border-emerald-500/50',
    ];
    return colors[index % colors.length];
  };

  // Function to get badge color based on category
  const getBadgeColor = (category) => {
    const colorMap = {
      'Website Development': 'bg-orange-500/10 text-orange-400 border-orange-500/20',
      'Branding': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
      'E-commerce': 'bg-orange-500/10 text-orange-400 border-orange-500/20',
      'Web Application': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
      'SEO': 'bg-orange-500/10 text-orange-400 border-orange-500/20',
      'Digital Marketing': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
      'default': 'bg-slate-800/50 text-slate-300 border-slate-700',
    };
    return colorMap[category] || colorMap.default;
  };

  return (
    <>
      <section id="portfolio" className="py-16 lg:py-24 bg-slate-100 dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="text-blue-500 font-bold tracking-wider text-sm uppercase mb-4 inline-block">
              Our Masterpieces
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-slate-900 dark:text-white">
              Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Works</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg max-w-3xl mx-auto">
              We don't just build websites; we engineer digital experiences. Explore how we help businesses like <span className="text-slate-900 dark:text-white font-semibold">Bicifu Technologies</span> scale online.
            </p>
          </div>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === category
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg shadow-orange-500/30 hover:from-orange-600 hover:to-red-600'
                    : 'bg-slate-100 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          {isAll ? (
            <div className="space-y-8">
              {/* Website Development Section */}
              <div className="relative rounded-2xl overflow-hidden group">
                <div className="absolute inset-0">
                  <img 
                    src="/images/bici.png" 
                    alt="Bici Website"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/60" />
                </div>
                <div className="relative z-10 p-8 md:p-12 lg:p-16">
                  <div className="max-w-2xl">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                      Website Development
                    </h3>
                    <p className="text-slate-300 mb-6">
                      We build fast, responsive, and SEO-optimized websites that drive results. Our custom web solutions are tailored to your business needs.
                    </p>
                    <div className="flex flex-wrap gap-3 mb-6">
                      <span className="px-3 py-1 bg-white/10 backdrop-blur-sm text-white text-xs font-medium rounded-full border border-white/20">
                        React
                      </span>
                      <span className="px-3 py-1 bg-white/10 backdrop-blur-sm text-white text-xs font-medium rounded-full border border-white/20">
                        Next.js
                      </span>
                      <span className="px-3 py-1 bg-white/10 backdrop-blur-sm text-white text-xs font-medium rounded-full border border-white/20">
                        Tailwind CSS
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-4 mt-6">
                      <button 
                        onClick={() => setActiveFilter('Website Development')}
                        className="px-6 py-2.5 bg-white text-slate-900 rounded-full font-medium hover:bg-opacity-90 transition-all flex items-center gap-2 group"
                      >
                        View Project
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                      <button 
                        onClick={() => handleVisitWebsite('https://www.bicifutechnologies.com')}
                        className="px-6 py-2.5 bg-transparent text-white border-2 border-white rounded-full font-medium hover:bg-white/10 transition-all flex items-center gap-2 group"
                      >
                        <Globe className="w-4 h-4" />
                        Visit Website
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Logo & Branding Section */}
              <div className="flex flex-col md:flex-row items-center gap-8 bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg">
                {/* Text Content */}
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                    Logo & Brand Identity
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-6">
                    We create memorable logos and brand identities that stand out and make a lasting impression. Our designs are crafted to perfectly represent your brand's personality and values.
                  </p>
                  <button 
                    onClick={() => setActiveFilter('Branding')}
                    className="px-6 py-2 bg-gradient-to-r from-blue-500 to-emerald-500 text-white rounded-full font-medium hover:opacity-90 transition-opacity"
                  >
                    View All Works
                  </button>
                </div>
                
                {/* Logo Grid */}
                <div className="grid grid-cols-2 gap-4 md:grid-cols-2 md:w-1/2">
                  {[1, 2, 3, 4].map((num) => (
                    <div 
                      key={num} 
                      className="bg-white dark:bg-slate-700 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow flex items-center justify-center h-32"
                    >
                      <img 
                        src={`/images/logo${num}.${num === 4 ? 'png' : 'jpg'}`} 
                        alt={`Logo ${num}`}
                        className="max-h-16 max-w-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : isBranding ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {logoDesigns.map((logo) => (
                <div 
                  key={logo.id}
                  className="group relative bg-white dark:bg-slate-800 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="aspect-square flex items-center justify-center p-4">
                    <img 
                      src={logo.image} 
                      alt={logo.title}
                      className="w-full h-auto max-h-32 object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-3 border-t border-slate-100 dark:border-slate-700">
                    <h3 className="text-sm font-medium text-slate-900 dark:text-white text-center">
                      {logo.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <div 
                  key={project.id}
                  className="group relative rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 overflow-hidden transition-all duration-200 ease-in-out hover:shadow-xl hover:-translate-y-1"
                >
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    {project.image && (
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    )}
                    {/* Overlay - Always present but hidden by default */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out p-6 flex flex-col justify-end pointer-events-none">
                      <div className="w-full">
                        <div className="transform transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                          <div className="flex flex-wrap gap-2 mb-3">
                            <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${getBadgeColor(project.category)}`}>
                              {project.category}
                            </span>
                            {project.website && (
                              <span className="px-3 py-1 rounded-full bg-gradient-to-r from-orange-500/10 to-red-500/10 text-orange-400 text-xs font-bold uppercase tracking-wider border border-orange-500/20">
                                Live Project
                              </span>
                            )}
                          </div>
                          <h3 className="text-xl font-bold text-white mb-2">
                            {project.title}
                          </h3>
                          <p className="text-slate-200 text-sm line-clamp-2 mb-4">
                            {project.description}
                          </p>
                        </div>
                      </div>
                      
                      {/* View Details Button - Now part of the overlay content */}
                      <div className="w-full mt-4 pointer-events-auto">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedProject(project);
                          }}
                          className="w-full px-4 py-2.5 bg-white/95 text-slate-900 rounded-lg font-medium hover:bg-white transition-colors duration-150 flex items-center justify-center gap-2 shadow-lg transform group-hover:scale-[0.98] group-hover:opacity-100 opacity-0 group-hover:translate-y-0 translate-y-2"
                        >
                          View Details
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Card Content - Always visible on mobile, hidden on desktop hover */}
                  <div className="p-6 group-hover:hidden md:block">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-2 mb-4">
                      {project.description}
                    </p>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                      className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1"
                    >
                      View Details
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
          
        </div>
      </section>

      {/* Project Details Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-white dark:bg-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>
              
              {selectedProject.image && (
                <div className="h-64 md:h-80 overflow-hidden">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              
              <div className="p-6 md:p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${getBadgeColor(selectedProject.category)}`}>
                    {selectedProject.category}
                  </span>
                  {selectedProject.website && (
                    <button
                      onClick={() => handleVisitWebsite(selectedProject.website)}
                      className="px-3 py-1 rounded-full bg-gradient-to-r from-orange-500/10 to-red-500/10 text-orange-400 text-xs font-bold uppercase tracking-wider border border-orange-500/20 hover:bg-orange-500/20 transition-colors flex items-center gap-1"
                    >
                      <Globe className="w-3 h-3" />
                      Visit Website
                    </button>
                  )}
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
                  {selectedProject.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  {selectedProject.description}
                </p>
                
                {selectedProject.details && (
                  <div className="prose dark:prose-invert max-w-none mb-6">
                    {selectedProject.details}
                  </div>
                )}
                
                {selectedProject.technologies && selectedProject.technologies.length > 0 && (
                  <div className="mt-6">
                    <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-slate-100 dark:bg-slate-700/50 text-slate-700 dark:text-slate-300 text-xs font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row gap-3">
                  {selectedProject.website && (
                    <button
                      onClick={() => handleVisitWebsite(selectedProject.website)}
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-emerald-500 text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
                    >
                      <Globe className="w-4 h-4" />
                      Visit Website
                    </button>
                  )}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(null);
                    }}
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium rounded-lg transition-colors"
                  >
                    <X className="w-4 h-4" />
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Portfolio;
