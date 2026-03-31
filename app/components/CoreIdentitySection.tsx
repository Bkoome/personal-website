import { motion } from 'motion/react';
import { Database, Brain, Code, Globe } from 'lucide-react';

export function CoreIdentitySection() {
  const identityCards = [
    {
      icon: <Database className="w-8 h-8" />,
      title: "Geospatial Systems Engineering",
      description: "Designing STAC-compliant APIs, spatial data pipelines, and geospatial backends",
      color: "from-cyan-400 to-blue-500",
      glowColor: "shadow-cyan-500/50"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Spatial Data Analysis & Modeling",
      description: "Remote sensing workflows, hydrological modeling, land-use change analysis",
      color: "from-blue-400 to-purple-500",
      glowColor: "shadow-blue-500/50"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI for Earth Observation",
      description: "Deep learning for crop health detection, classification, and prediction",
      color: "from-purple-400 to-pink-500",
      glowColor: "shadow-purple-500/50"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Full Stack Geospatial Development",
      description: "Building Web GIS platforms, dashboards, and data-driven applications",
      color: "from-green-400 to-cyan-500",
      glowColor: "shadow-green-500/50"
    }
  ];

  return (
    <section id="about" className="relative py-24 bg-[#0B0F1A]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
            Core Identity
          </h2>
          <p className="text-gray-400 text-lg">
            Engineering spatial intelligence at the intersection of GIS, AI, and software development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {identityCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.03, 
                y: -10,
                boxShadow: '0 20px 40px rgba(34, 211, 238, 0.2)'
              }}
              className="group relative rounded-3xl backdrop-blur-xl bg-gradient-to-br from-blue-500/5 to-cyan-500/5 border border-white/10 hover:border-cyan-400/50 transition-all p-8 cursor-pointer overflow-hidden"
            >
              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${card.color} blur-3xl -z-10`} 
                   style={{ transform: 'scale(0.8)' }} />

              {/* Grid Pattern Overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity">
                <div className="absolute inset-0" style={{
                  backgroundImage: `
                    linear-gradient(rgba(34, 211, 238, 0.5) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(34, 211, 238, 0.5) 1px, transparent 1px)
                  `,
                  backgroundSize: '20px 20px'
                }} />
              </div>

              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${card.color} bg-opacity-20 mb-6`}
              >
                <div className="text-white">
                  {card.icon}
                </div>
              </motion.div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {card.title}
              </h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                {card.description}
              </p>

              {/* Corner Accent */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${card.color} opacity-0 group-hover:opacity-20 rounded-bl-full transition-opacity duration-500`} />
              
              {/* Bottom Accent Line */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${card.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
            </motion.div>
          ))}
        </div>

        {/* Bounding Box Decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 p-8 rounded-3xl border-2 border-dashed border-cyan-400/30 relative"
        >
          <div className="absolute -top-3 left-8 bg-[#0B0F1A] px-3 text-cyan-400 text-sm font-mono">
            [SYSTEMS_OVERVIEW]
          </div>
          <div className="absolute -bottom-3 right-8 bg-[#0B0F1A] px-3 text-cyan-400 text-sm font-mono">
            [END]
          </div>
          
          <p className="text-gray-300 text-center text-lg leading-relaxed">
            Specializing in production-grade geospatial systems that bridge the gap between 
            <span className="text-cyan-400 font-semibold"> raw Earth observation data</span> and 
            <span className="text-blue-400 font-semibold"> actionable spatial intelligence</span> through 
            <span className="text-purple-400 font-semibold"> AI-driven analytics</span> and 
            <span className="text-green-400 font-semibold"> scalable infrastructure</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
