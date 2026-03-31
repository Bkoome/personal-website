import { motion } from 'motion/react';
import { Github, Star, GitFork, Code } from 'lucide-react';

export function GitHubSection() {
  // Mock repository data - in production, this would come from GitHub API
  const repositories = [
    {
      name: "groundwater-prediction-model",
      description: "SWAT + CA-Markov hydrological modeling system for groundwater dynamics prediction",
      stars: 24,
      forks: 8,
      language: "Python",
      languageColor: "#3572A5"
    },
    {
      name: "crop-health-ai",
      description: "Deep learning system for automated crop stress detection using computer vision",
      stars: 18,
      forks: 5,
      language: "Python",
      languageColor: "#3572A5"
    },
    {
      name: "stac-api-platform",
      description: "STAC-compliant API for spatiotemporal asset catalog and Earth observation data",
      stars: 32,
      forks: 12,
      language: "JavaScript",
      languageColor: "#f1e05a"
    },
    {
      name: "gis-dashboard-toolkit",
      description: "Reusable components for building interactive geospatial dashboards",
      stars: 15,
      forks: 6,
      language: "TypeScript",
      languageColor: "#2b7489"
    },
    {
      name: "spatial-analysis-toolkit",
      description: "Python toolkit for advanced spatial analysis and geoprocessing workflows",
      stars: 21,
      forks: 9,
      language: "Python",
      languageColor: "#3572A5"
    },
    {
      name: "drone-data-processor",
      description: "Automated UAV data processing pipeline for precision agriculture",
      stars: 12,
      forks: 4,
      language: "Python",
      languageColor: "#3572A5"
    }
  ];

  return (
    <section className="relative py-24 bg-[#0B0F1A]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-400/20 to-blue-400/20 border border-purple-400/30 mb-6"
          >
            <Github className="w-5 h-5 text-purple-400" />
            <span className="text-purple-400 font-semibold">Open Source</span>
          </motion.div>

          <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
            GitHub Repositories
          </h2>
          <p className="text-gray-400 text-lg mb-6">
            Building in public — Code, systems, and geospatial solutions
          </p>
          <motion.a
            href="https://github.com/Bkoome"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-400/30 text-purple-400 hover:border-purple-400/60 transition-all"
          >
            <Github className="w-5 h-5" />
            <span className="font-semibold">View GitHub Profile</span>
          </motion.a>
        </motion.div>

        {/* Repository Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repositories.map((repo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="group relative rounded-2xl backdrop-blur-xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 border border-white/10 hover:border-purple-400/30 transition-all p-6 cursor-pointer"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-purple-500/20 to-blue-500/20 blur-xl -z-10 rounded-2xl" />

              {/* Header */}
              <div className="flex items-start gap-3 mb-3">
                <div className="p-2 rounded-lg bg-gradient-to-br from-purple-400/20 to-blue-400/20 flex-shrink-0">
                  <Code className="w-5 h-5 text-purple-400" />
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors flex-1">
                  {repo.name}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-2">
                {repo.description}
              </p>

              {/* Stats and Language */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-gray-400 text-sm">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    <span>{repo.stars}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <GitFork className="w-4 h-4" />
                    <span>{repo.forks}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: repo.languageColor }}
                  />
                  <span className="text-gray-400 text-sm">{repo.language}</span>
                </div>
              </div>

              {/* Corner Decoration */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-purple-400/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>

        {/* Contribution Activity */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 rounded-3xl backdrop-blur-xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-400/30 p-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">Active Contributor</h3>
              <p className="text-gray-400">
                Building geospatial systems and tools that push the boundaries of spatial intelligence
              </p>
            </div>
            <div className="flex gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-1">
                  250+
                </div>
                <div className="text-gray-400 text-sm">Commits</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-1">
                  15+
                </div>
                <div className="text-gray-400 text-sm">Repositories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-1">
                  50+
                </div>
                <div className="text-gray-400 text-sm">Contributions</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
