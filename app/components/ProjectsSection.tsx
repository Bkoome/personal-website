import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, X } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  tags: string[];
  image: string;
  isFeatured?: boolean;
}

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Groundwater Modeling & Prediction Engine",
      description: "SWAT + CA-Markov modeling for predictive simulation of groundwater dynamics",
      fullDescription: "Advanced hydrological modeling system combining SWAT (Soil and Water Assessment Tool) with CA-Markov cellular automata for predicting groundwater dynamics in the Namukima Sub-Basin (1994-2024). Implemented process interaction analysis to simulate future scenarios and support sustainable water resource management decisions.",
      tags: ["SWAT", "CA-Markov", "Hydrological Modeling", "Predictive Analytics"],
      image: "https://images.unsplash.com/photo-1574786577070-70b30e49c99c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXRlbGxpdGUlMjBpbWFnZXJ5JTIwYWVyaWFsJTIwdmlld3xlbnwxfHx8fDE3NzQ5NjU5MzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      isFeatured: true
    },
    {
      id: 2,
      title: "AI Crop Health Detection System",
      description: "Deep learning-based classification of crop stress using computer vision",
      fullDescription: "Production-grade AI system for automated crop health assessment using deep learning and computer vision. Trained convolutional neural networks on multispectral imagery to detect nutrient deficiencies, disease stress, and water stress patterns. Achieved 94% classification accuracy across multiple crop types.",
      tags: ["Deep Learning", "Computer Vision", "TensorFlow", "Remote Sensing"],
      image: "https://images.unsplash.com/photo-1574786577070-70b30e49c99c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXRlbGxpdGUlMjBpbWFnZXJ5JTIwYWVyaWFsJTIwdmlld3xlbnwxfHx8fDE3NzQ5NjU5MzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 3,
      title: "Smart Farming Drone Intelligence",
      description: "UAV-based spatial data acquisition and precision agriculture analytics",
      fullDescription: "Integrated drone data acquisition platform for precision agriculture. Developed automated flight planning, real-time data processing pipelines, and analytics dashboards for crop monitoring, yield estimation, and variable rate application mapping. Reduced field assessment time by 80%.",
      tags: ["UAV", "Precision Agriculture", "Data Processing", "Analytics"],
      image: "https://images.unsplash.com/photo-1717343824755-aa0bc935c47c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMHBsYW5uaW5nJTIwY2l0eSUyMG1hcHBpbmd8ZW58MXx8fHwxNzc0OTQwNDc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 4,
      title: "STAC-Based Geospatial Data Platform",
      description: "API-first architecture for spatiotemporal data access, cloud-ready and scalable",
      fullDescription: "Enterprise-grade geospatial data platform built on STAC (SpatioTemporal Asset Catalog) specification. Designed RESTful APIs for efficient discovery and access of Earth observation datasets. Implemented cloud-native architecture with PostgreSQL/PostGIS backend, supporting petabyte-scale imagery catalogs.",
      tags: ["STAC API", "Node.js", "PostGIS", "Cloud Architecture"],
      image: "https://images.unsplash.com/photo-1634743556192-d19f0c69ff3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnaXMlMjBtYXBwaW5nJTIwdGVjaG5vbG9neSUyMHNjcmVlbnxlbnwxfHx8fDE3NzQ5NjU5MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 5,
      title: "Interactive GIS Dashboards",
      description: "Real-time visualization of environmental and spatial datasets",
      fullDescription: "Production web GIS dashboards for real-time monitoring of environmental parameters. Built with Mapbox GL JS and React, featuring dynamic data layers, time-series visualization, and advanced spatial analytics. Deployed for climate monitoring and disaster response applications.",
      tags: ["Web GIS", "React", "Mapbox GL JS", "Real-time Data"],
      image: "https://images.unsplash.com/photo-1736117703416-f260ee174bac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW9zcGF0aWFsJTIwZGF0YSUyMHZpc3VhbGl6YXRpb24lMjBtYXB8ZW58MXx8fHwxNzc0OTY1OTM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 6,
      title: "Land Use Classification (Nyeri Town)",
      description: "Supervised classification with accuracy assessment and spatial validation",
      fullDescription: "High-resolution land use classification of Nyeri Town using supervised machine learning on Sentinel-2 imagery. Implemented Random Forest classifier with comprehensive accuracy assessment (overall accuracy: 92%). Generated detailed land use maps for urban planning and environmental monitoring.",
      tags: ["Machine Learning", "Supervised Classification", "Sentinel-2", "QGIS"],
      image: "https://images.unsplash.com/photo-1746470427686-4c3551f3d689?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwYWJzdHJhY3QlMjBibHVlJTIwbmV0d29ya3xlbnwxfHx8fDE3NzQ5NjU5MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  return (
    <section id="projects" className="relative py-24 bg-[#0B0F1A]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg">
            Innovative geospatial solutions that make an impact
          </p>
        </motion.div>

        {/* Featured Project */}
        {projects.filter(p => p.isFeatured).map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedProject(project)}
              className="relative rounded-3xl overflow-hidden backdrop-blur-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-cyan-400/30 cursor-pointer group"
            >
              <div className="grid md:grid-cols-2 gap-8 p-8">
                <div className="space-y-4 flex flex-col justify-center">
                  <div className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-500/20 text-cyan-400 text-sm font-medium w-fit">
                    Featured Project
                  </div>
                  <h3 className="text-3xl font-bold text-white">{project.title}</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm border border-blue-400/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-cyan-400 group-hover:gap-4 transition-all">
                    <span>View Details</span>
                    <ExternalLink size={20} />
                  </div>
                </div>
                <div className="relative h-64 md:h-auto rounded-2xl overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F1A]/50 to-transparent" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.filter(p => !p.isFeatured).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              onClick={() => setSelectedProject(project)}
              className="group relative rounded-2xl overflow-hidden backdrop-blur-xl bg-gradient-to-br from-blue-500/5 to-cyan-500/5 border border-white/10 hover:border-cyan-400/30 transition-all cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F1A] to-transparent opacity-60" />
              </div>
              
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm line-clamp-2">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 rounded-lg bg-blue-500/20 text-blue-300 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm">View Details</span>
                  <ExternalLink size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-3xl backdrop-blur-xl bg-gradient-to-br from-[#0B0F1A]/95 to-[#0a1628]/95 border border-cyan-400/30 shadow-2xl"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F1A] to-transparent" />
              </div>

              <div className="p-8 space-y-6">
                <h2 className="text-3xl font-bold text-white">{selectedProject.title}</h2>
                <p className="text-gray-300 leading-relaxed">{selectedProject.fullDescription}</p>
                
                <div>
                  <h3 className="text-lg font-semibold text-cyan-400 mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-cyan-300 border border-cyan-400/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}