import React, { useState } from 'react';
import { portfolioProjects } from '../mock';
import { ExternalLink, X, Globe, Tag } from 'lucide-react';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleVisitWebsite = (url) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <>
      <section id="portfolio" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              Our Portfolio
            </h2>
            <p className="text-xl text-slate-600">
              Explore our collection of successful projects across various industries
            </p>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {portfolioProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 bg-white"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end">
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-white font-bold text-lg">{project.title}</h3>
                    <p className="text-slate-300 text-sm mt-1">Click to view details</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/20 backdrop-blur-sm hover:bg-black/40 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col md:flex-row">
              {/* Image Section */}
              <div className="md:w-1/2 relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 md:h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
                    {selectedProject.category}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="md:w-1/2 p-6 md:p-8 flex flex-col">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                  {selectedProject.title}
                </h2>
                
                <p className="text-slate-600 mb-6 flex-grow">
                  {selectedProject.description}
                </p>

                {/* Technologies */}
                {selectedProject.technologies && selectedProject.technologies.length > 0 && (
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Tag className="w-4 h-4 text-slate-500" />
                      <span className="text-sm font-semibold text-slate-700">Technologies Used</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                  {selectedProject.website && (
                    <button
                      onClick={() => handleVisitWebsite(selectedProject.website)}
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors"
                    >
                      <Globe className="w-5 h-5" />
                      Visit Website
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  )}
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="flex-1 px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl transition-colors"
                  >
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
