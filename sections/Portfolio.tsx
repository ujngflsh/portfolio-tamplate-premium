import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github } from 'lucide-react';
import { PROJECTS } from '../utils/data';
import { Project } from '../types';
import Button from '../components/ui/Button';

const categories = ["All", "Frontend", "Fullstack", "UI/UX"];

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = filter === "All" 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="py-24 bg-white dark:bg-dark-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-2">Portfolio</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
              Selected Work
            </h3>
          </div>
          
          <div className="flex gap-2 mt-6 md:mt-0 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                  filter === cat
                    ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-slate-800 dark:text-gray-300 dark:hover:bg-slate-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid md:grid-cols-2 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-2xl overflow-hidden cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-primary font-medium text-sm">{project.category}</span>
                    <h4 className="text-2xl font-bold text-white mt-1">{project.title}</h4>
                    <p className="text-gray-300 text-sm mt-2 line-clamp-2">{project.description}</p>
                    <div className="flex gap-2 mt-4">
                      {project.techStack.slice(0, 3).map((tech, i) => (
                         <span key={i} className="text-xs text-white/80 bg-white/10 px-2 py-1 rounded-md backdrop-blur-sm">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            />
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="relative w-full max-w-3xl bg-white dark:bg-dark-800 rounded-2xl shadow-2xl overflow-hidden"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-colors backdrop-blur-md"
              >
                <X size={20} />
              </button>
              
              <div className="aspect-video w-full">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                     <span className="text-primary font-medium text-sm">{selectedProject.category}</span>
                     <h3 className="text-3xl font-bold text-slate-900 dark:text-white mt-1">{selectedProject.title}</h3>
                  </div>
                  <div className="flex gap-3">
                    <a href={selectedProject.demoLink} className="p-2 rounded-full bg-gray-100 dark:bg-slate-700 hover:bg-primary hover:text-white dark:hover:bg-primary transition-colors text-slate-700 dark:text-white">
                       <ExternalLink size={20} />
                    </a>
                    <a href={selectedProject.repoLink} className="p-2 rounded-full bg-gray-100 dark:bg-slate-700 hover:bg-slate-800 hover:text-white transition-colors text-slate-700 dark:text-white">
                       <Github size={20} />
                    </a>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {selectedProject.description}
                </p>

                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-200 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100 dark:border-slate-700 flex justify-end">
                   <Button onClick={() => window.location.href = '#contact'}>
                      Discuss similar project
                   </Button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;