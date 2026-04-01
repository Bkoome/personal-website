import { motion } from 'motion/react';
import { Code, Database, MapPin, Globe } from 'lucide-react';

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Geospatial Tools",
      icon: <MapPin className="w-6 h-6" />,
      color: "from-cyan-400 to-blue-500",
      skills: [
        { name: "ArcGIS Pro", level: 95 },
        { name: "QGIS", level: 92 },
        { name: "Google Earth Engine", level: 88 },
        { name: "ENVI", level: 85 }
      ]
    },
    {
      title: "Programming & Full Stack",
      icon: <Code className="w-6 h-6" />,
      color: "from-blue-400 to-purple-500",
      skills: [
        { name: "HTML/CSS/JavaScript", level: 92 },
        { name: "Python", level: 92 },
        { name: "Django", level: 85 },
        { name: "Node.js", level: 85 },
        { name: "PostgreSQL", level: 90 },
        { name: "MongoDB", level: 84 }
      ]
    },
    {
      title: "Web GIS & APIs",
      icon: <Globe className="w-6 h-6" />,
      color: "from-purple-400 to-pink-500",
      skills: [
        { name: "Mapbox GL JS", level: 90 },
        { name: "Leaflet", level: 88 },
        { name: "OpenLayers", level: 82 },
        { name: "STAC APIs", level: 85 }
      ]
    },
    {
      title: "AI/ML & Data",
      icon: <Database className="w-6 h-6" />,
      color: "from-green-400 to-cyan-500",
      skills: [
        { name: "Convolutional Neural Networks", level: 88 },
        { name: "Bayesian Networks", level: 84 },
        { name: "TensorFlow", level: 85 },
        { name: "PostgreSQL/PostGIS", level: 90 },
        { name: "Computer Vision", level: 88 }
      ]
    }
  ];

  return (
    <section id="skills" className="relative py-24 bg-gradient-to-b from-[#0B0F1A] to-[#0a1628]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
            Technical Skills
          </h2>
          <p className="text-gray-400 text-lg">
            Comprehensive expertise across the geospatial technology stack
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="rounded-3xl backdrop-blur-xl bg-gradient-to-br from-blue-500/5 to-cyan-500/5 border border-white/10 hover:border-cyan-400/30 transition-all p-8"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-4 rounded-2xl bg-gradient-to-br ${category.color} bg-opacity-20`}>
                  <div className="text-white">
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-cyan-400 text-sm font-semibold">{skill.level}%</span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="h-3 rounded-full bg-white/5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1 + 0.3 }}
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full relative`}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 animate-shimmer" />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 rounded-3xl backdrop-blur-xl bg-gradient-to-br from-purple-500/5 to-blue-500/5 border border-white/10 p-8"
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "GDAL", "LiDAR", "Photogrammetry", "GPS/GNSS", "CAD", "Drone Mapping",
              "Spatial Databases", "Web Mapping", "3D Modeling", "Time Series Analysis",
              "Cloud Computing", "Git", "Docker", "API Development", "Data Visualization",
              "Linux Server Maintenance", "KoboToolbox Server Deployment", "Nginx", "Systemd",
              "S3 Data Pipelines", "ETL Automation", "Environmental Monitoring Dashboards"
            ].map((tech, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-cyan-300 border border-cyan-400/30 text-sm font-medium cursor-default hover:border-cyan-400/60 transition-all"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  );
}
