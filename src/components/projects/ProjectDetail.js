import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiExternalLink, FiGithub, FiArrowLeft, FiFileText } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import PdfViewer from './PdfViewer';

const ProjectDetail = ({ project }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  // Handle slideshow navigation
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === project.screenshots.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? project.screenshots.length - 1 : prev - 1));
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          onClick={() => navigate('/projects')}
          className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 mb-8 transition-colors duration-300"
        >
          <FiArrowLeft className="mr-2" /> Back to Projects
        </motion.button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Project Images/Screenshots or PDF Poster */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            {project.pdfPoster ? (
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Project Poster</h2>
                <PdfViewer pdfPath={project.pdfPoster} />
              </div>
            ) : project.screenshots && project.screenshots.length > 0 ? (
              <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                <div className="relative h-[500px]">
                  {project.screenshots.map((screenshot, index) => (
                    <div
                      key={index}
                      className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
                        index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
                      }`}
                    >
                      <img
                        src={screenshot.src}
                        alt={screenshot.alt || `${project.title} screenshot ${index + 1}`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ))}
                </div>
                
                {/* Slideshow controls */}
                {project.screenshots.length > 1 && (
                  <div className="absolute inset-0 flex items-center justify-between p-4">
                    <button
                      onClick={prevSlide}
                      className="p-2 rounded-full bg-white/80 dark:bg-gray-800/80 text-gray-800 dark:text-white hover:bg-white dark:hover:bg-gray-700 transition-colors duration-300"
                      aria-label="Previous slide"
                    >
                      <FiChevronLeft size={24} />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="p-2 rounded-full bg-white/80 dark:bg-gray-800/80 text-gray-800 dark:text-white hover:bg-white dark:hover:bg-gray-700 transition-colors duration-300"
                      aria-label="Next slide"
                    >
                      <FiChevronRight size={24} />
                    </button>
                  </div>
                )}
                
                {/* Slideshow indicators */}
                {project.screenshots.length > 1 && (
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                    {project.screenshots.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                          index === currentSlide
                            ? 'bg-blue-600 dark:bg-blue-400'
                            : 'bg-gray-300 dark:bg-gray-600'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                <div className="p-8">
                  {/* Project title and featured content for projects without screenshots */}
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-3">{project.title}</h2>
                    <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
                    <p className="text-lg text-gray-700 dark:text-gray-300">{project.description}</p>
                  </div>
                  
                  {/* Project Logo or Visual Representation */}
                  <div className="mb-8 flex justify-center">
                    <div className="w-40 h-40 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 dark:from-blue-600 dark:to-purple-800 flex items-center justify-center p-2 shadow-lg">
                      <div className="w-full h-full bg-white dark:bg-gray-800 rounded-md flex flex-col items-center justify-center">
                        <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-500 mb-2">
                          {project.title.split(' ').map(word => word[0]).join('')}
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-400 text-center px-2">
                          {project.category === 'ai' ? 'Artificial Intelligence' : 
                           project.category === 'mobile' ? 'Mobile Application' : 
                           project.category === 'web' ? 'Web Development' : 
                           project.category === 'robotics' ? 'Robotics & Automation' : 
                           'Project'}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Technologies */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 text-center">Technologies Used</h3>
                    <div className="flex flex-wrap justify-center gap-2 mb-4">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Links Section */}
                  <div className="flex justify-center space-x-4">
                    {project.links && project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
                      >
                        <FiGithub className="mr-2" /> GitHub
                      </a>
                    )}
                    {project.links && project.links.paper && (
                      <a
                        href={project.links.paper}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors duration-300"
                      >
                        <FiExternalLink className="mr-2" /> Research Paper
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )}
          </motion.div>

          {/* Project Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="card h-full flex flex-col">
              <div className="mb-6">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-2">
                  {project.title}
                </h1>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.links && (
                  <div className="flex space-x-4 mb-4">
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                      >
                        <FiGithub className="mr-1" /> GitHub
                      </a>
                    )}
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                      >
                        <FiExternalLink className="mr-1" /> Live Demo
                      </a>
                    )}
                  </div>
                )}
              </div>

              <div className="flex-grow">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                  Project Overview
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {project.description}
                </p>

                {project.highlights && project.highlights.length > 0 && (
                  <div className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                      Key Features
                    </h2>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start text-gray-600 dark:text-gray-400">
                          <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {project.challenges && (
                  <div className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                      Challenges & Solutions
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                      {project.challenges}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Detailed Project Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12"
        >
          {project.detailedDescription && (
            <div className="card mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                Technical Details
              </h2>
              <div className="prose prose-blue max-w-none dark:prose-invert text-gray-600 dark:text-gray-400">
                {project.detailedDescription.map((section, index) => (
                  <div key={index} className="mb-6">
                    {section.title && (
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                        {section.title}
                      </h3>
                    )}
                    <p className="mb-4">{section.content}</p>
                    {section.list && (
                      <ul className="space-y-2 pl-5 list-disc">
                        {section.list.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;
