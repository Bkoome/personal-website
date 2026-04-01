import { motion } from 'motion/react';
import { Briefcase, Calendar } from 'lucide-react';

export function ExperienceSection() {
  const experiences = [
    {
      role: "Internship",
      organization: "ICPAC (IGAD Climate Prediction and Applications Centre)",
      duration: "Sept 2025 - Present",
      contributions: [
        "Development of STAC APIs for spatiotemporal datasets",
        "Implementation of geospatial dashboards for climate analytics",
        "Integration of data pipelines for Earth observation workflows"
      ]
    },
    {
      role: "GIS Intern",
      organization: "National Water Storage and Harvesting Authority",
      duration: "Jan 2024 - April 2024",
      contributions: [
        "GIS-based water resource mapping and spatial analysis",
        "Conducted hydrological assessments using geospatial tools",
        "Created detailed mapping outputs for water infrastructure planning"
      ]
    },
    {
      role: "Internal Attachment",
      organization: "Dedan Kimathi University of Technology",
      duration: "Jan 2022 - April 2022",
      contributions: [
        "Field data acquisition using GPS and surveying equipment",
        "Spatial analysis and GIS workflows for university projects",
        "Data processing and cartographic visualization"
      ]
    }
  ];

  return (
    <section id="experience" className="relative py-24 bg-gradient-to-b from-[#0B0F1A] to-[#0a1628]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
            Experience
          </h2>
          <p className="text-gray-400 text-lg">
            Building expertise through hands-on geospatial projects
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400/50 via-blue-500/50 to-purple-500/50" />

          {/* Experience Items */}
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative mb-12 md:mb-16 flex flex-col md:flex-row items-start md:items-center ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Node */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 border-4 border-[#0B0F1A] shadow-lg shadow-cyan-500/50" />

              {/* Content Card */}
              <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                <motion.div
                  whileHover={{ scale: 1.03, y: -5 }}
                  className="p-6 rounded-2xl backdrop-blur-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-white/10 hover:border-cyan-400/30 transition-all shadow-lg"
                >
                  {/* Role and Organization */}
                  <div className="flex items-start gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-400/20 to-blue-500/20">
                      <Briefcase className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                      <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                      <p className="text-cyan-400 font-medium">{exp.organization}</p>
                    </div>
                  </div>

                  {/* Duration */}
                  <div className={`flex items-center gap-2 mb-4 text-gray-400 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{exp.duration}</span>
                  </div>

                  {/* Contributions */}
                  <ul className={`space-y-2 text-gray-300 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                    {exp.contributions.map((contribution, i) => (
                      <li key={i} className="text-sm leading-relaxed">
                        • {contribution}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block md:w-5/12" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
