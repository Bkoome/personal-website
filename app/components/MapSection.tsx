import { motion } from 'motion/react';
import { MapPin, Map, Layers, Navigation } from 'lucide-react';

export function MapSection() {
  const projectMarkers = [
    { id: 1, name: "Urban Classification", lat: "1.29° S", lon: "36.82° E", status: "Completed" },
    { id: 2, name: "Flood Risk Mapping", lat: "0.52° S", lon: "37.15° E", status: "In Progress" },
    { id: 3, name: "Agricultural Monitoring", lat: "1.08° S", lon: "37.09° E", status: "Completed" }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-[#0a1628] to-[#0B0F1A]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
            Project Locations
          </h2>
          <p className="text-gray-400 text-lg">
            Geographic distribution of my geospatial projects
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Map Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <div className="relative rounded-3xl overflow-hidden backdrop-blur-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-white/10 p-6 h-[500px]">
              {/* Map Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Map className="w-5 h-5 text-cyan-400" />
                  <span className="text-white font-semibold">Interactive Project Map</span>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                    <Layers className="w-4 h-4 text-gray-400" />
                  </button>
                  <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                    <Navigation className="w-4 h-4 text-gray-400" />
                  </button>
                </div>
              </div>

              {/* Map Canvas */}
              <div className="relative h-full rounded-2xl bg-gradient-to-br from-[#0B0F1A] to-[#0a1628] border border-white/5 overflow-hidden">
                {/* Grid Background */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `
                      linear-gradient(rgba(34, 211, 238, 0.3) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(34, 211, 238, 0.3) 1px, transparent 1px)
                    `,
                    backgroundSize: '40px 40px'
                  }} />
                </div>

                {/* Mock Map Markers */}
                <div className="relative h-full">
                  {projectMarkers.map((marker, index) => (
                    <motion.div
                      key={marker.id}
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2, duration: 0.5 }}
                      whileHover={{ scale: 1.2 }}
                      className="absolute cursor-pointer"
                      style={{
                        top: `${30 + index * 25}%`,
                        left: `${35 + index * 15}%`
                      }}
                    >
                      <div className="relative">
                        <MapPin className="w-8 h-8 text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]" fill="currentColor" />
                        <div className="absolute w-12 h-12 -top-2 -left-2 bg-cyan-400/20 rounded-full animate-ping" />
                      </div>
                    </motion.div>
                  ))}

                  {/* Decorative Lines */}
                  <svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgba(34, 211, 238, 0)" />
                        <stop offset="50%" stopColor="rgba(34, 211, 238, 0.5)" />
                        <stop offset="100%" stopColor="rgba(34, 211, 238, 0)" />
                      </linearGradient>
                    </defs>
                    <motion.path
                      d="M 35 30 Q 50 50, 50 55"
                      stroke="url(#lineGradient)"
                      strokeWidth="2"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                    />
                    <motion.path
                      d="M 50 55 Q 60 70, 65 80"
                      stroke="url(#lineGradient)"
                      strokeWidth="2"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.8 }}
                    />
                  </svg>
                </div>

                {/* Map Controls */}
                <div className="absolute bottom-4 right-4 flex flex-col gap-2">
                  <button className="p-2 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors text-white">
                    +
                  </button>
                  <button className="p-2 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors text-white">
                    -
                  </button>
                </div>

                {/* Coordinates Display */}
                <div className="absolute bottom-4 left-4 px-3 py-2 rounded-lg bg-black/50 backdrop-blur-sm border border-white/10">
                  <span className="text-cyan-400 text-xs font-mono">1.2921° S, 36.8219° E</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Project Details Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <div className="rounded-2xl backdrop-blur-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-white/10 p-6">
              <h3 className="text-xl font-bold text-white mb-4">Project Markers</h3>
              
              <div className="space-y-4">
                {projectMarkers.map((marker, index) => (
                  <motion.div
                    key={marker.id}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    whileHover={{ x: 5 }}
                    className="p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all cursor-pointer border border-white/5 hover:border-cyan-400/30"
                  >
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-white font-semibold mb-1">{marker.name}</h4>
                        <p className="text-xs text-gray-400 font-mono mb-2">
                          {marker.lat}, {marker.lon}
                        </p>
                        <span className={`inline-block px-2 py-1 rounded-full text-xs ${
                          marker.status === 'Completed' 
                            ? 'bg-green-500/20 text-green-400 border border-green-400/30' 
                            : 'bg-yellow-500/20 text-yellow-400 border border-yellow-400/30'
                        }`}>
                          {marker.status}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Stats Card */}
            <div className="rounded-2xl backdrop-blur-xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-white/10 p-6">
              <h3 className="text-lg font-bold text-white mb-4">Coverage Statistics</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-400">Total Area Mapped</span>
                    <span className="text-cyan-400 font-semibold">2,450 km²</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '75%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-gradient-to-r from-cyan-400 to-blue-500"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-400">Data Processed</span>
                    <span className="text-cyan-400 font-semibold">18.5 TB</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '85%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.7 }}
                      className="h-full bg-gradient-to-r from-blue-400 to-purple-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
