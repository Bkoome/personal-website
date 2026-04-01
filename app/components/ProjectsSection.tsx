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
      title: "Dynamic STAC Platform on S3",
      description: "Complete STAC stack with Browser, API, TiTiler, TiPG, and live S3 ingestion",
      fullDescription: "Built a complete dynamic STAC implementation including STAC Browser, STAC API, TiTiler, and TiPG connected to S3 storage. Implemented automated watching and ingestion workflows so new incoming data is processed and published into catalog items for immediate discovery and visualization.",
      tags: ["STAC API", "STAC Browser", "TiTiler", "TiPG", "S3", "Automation"],
      image: "/stac.png",
      isFeatured: true
    },
    {
      id: 2,
      title: "EcoDashboard for Environmental Monitoring",
      description: "Operational monitoring dashboard powered directly by the STAC API",
      fullDescription: "Developed an eco-dashboard for environmental monitoring with STAC-powered data retrieval, temporal comparisons, and quick insights panels. The platform supports decadal and monthly map analytics workflows used for tracking vegetation and climate patterns.",
      tags: ["Web GIS", "STAC API", "Environmental Monitoring", "Dashboards"],
      image: "/Eco-dashboard.png"
    },
    {
      id: 3,
      title: "LULC Classification - Namukima Sub-Basin",
      description: "Land use/land cover mapping and change analysis for multiple years",
      fullDescription: "Delivered supervised LULC classification and multi-epoch change analysis for the Namukima Sub-Basin using remote sensing workflows. Produced 1994, 2000, 2012, 2018, and 2024 land cover outputs to support environmental planning and watershed analysis.",
      tags: ["LULC", "Remote Sensing", "Change Detection", "GIS Analysis"],
      image: "/lulc.png"
    },
    {
      id: 4,
      title: "Environmental Indicators Prediction",
      description: "Prediction workflows for NDVI, VCI, and SPI environmental indicators",
      fullDescription: "Built predictive workflows for environmental indicators including NDVI, VCI, and SPI using historical geospatial data and temporal modeling. Outputs were designed for monitoring drought and vegetation dynamics across seasons.",
      tags: ["NDVI", "VCI", "SPI", "Prediction Modeling"],
      image: "/project-indicators.svg"
    },
    {
      id: 5,
      title: "Burned Area Mapping with SAR",
      description: "Burn scar detection and mapping using SAR imagery and radar indices",
      fullDescription: "Implemented SAR-based burned area mapping workflows to detect and monitor post-fire footprints under variable weather and cloud conditions. Delivered spatial outputs suitable for rapid assessment and environmental response planning.",
      tags: ["SAR", "Burned Area Mapping", "Radar Processing", "Disaster Analytics"],
      image: "/project-burned-sar.svg"
    },
    {
      id: 6,
      title: "Deformation Monitoring with SAR (InSAR)",
      description: "Ground deformation analysis using SAR image time series",
      fullDescription: "Executed deformation monitoring studies using SAR time series to identify and quantify ground movement patterns. Applied interferometric workflows for spatially explicit deformation detection and interpretation.",
      tags: ["InSAR", "Deformation Monitoring", "SAR Time Series", "Geospatial Analytics"],
      image: "/project-deformation-sar.svg"
    },
    {
      id: 7,
      title: "CNN and Bayesian Earth Intelligence Models",
      description: "Applied CNN and Bayesian network approaches for spatial prediction",
      fullDescription: "Developed AI workflows combining convolutional neural networks and Bayesian networks for classification and probabilistic inference in environmental and agricultural geospatial tasks.",
      tags: ["CNN", "Bayesian Networks", "Spatial Prediction", "AI for EO"],
      image: "/project-cnn-bayesian.svg"
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
