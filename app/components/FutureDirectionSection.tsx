import { motion } from 'motion/react';
import { Sparkles, Cpu, Cloud, Activity, Box } from 'lucide-react';

export function FutureDirectionSection() {
  const directions = [
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "AI-native geospatial systems",
      color: "from-cyan-400 to-blue-500"
    },
    {
      icon: <Box className="w-6 h-6" />,
      title: "Digital twins and environmental simulations",
      color: "from-blue-400 to-purple-500"
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Real-time Earth observation pipelines",
      color: "from-purple-400 to-pink-500"
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Climate intelligence platforms",
      color: "from-green-400 to-cyan-500"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Autonomous spatial data processing systems",
      color: "from-pink-400 to-cyan-500"
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-[#0a1628] to-[#0B0F1A] overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(34, 211, 238, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 211, 238, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          animation: 'gridSlide 30s linear infinite'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-400/20 to-purple-400/20 border border-cyan-400/30 mb-6"
          >
            <Sparkles className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-400 font-semibold">Forward Thinking</span>
          </motion.div>

          <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent mb-4">
            Next-Generation Spatial Intelligence
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Pioneering the future of geospatial technology through innovation and emerging technologies
          </p>
        </motion.div>

        {/* Direction Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {directions.map((direction, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -10, 
                scale: 1.05,
                boxShadow: '0 20px 40px rgba(34, 211, 238, 0.3)'
              }}
              className="relative group rounded-2xl backdrop-blur-xl bg-gradient-to-br from-blue-500/5 to-cyan-500/5 border border-white/10 hover:border-cyan-400/50 p-6 transition-all cursor-pointer overflow-hidden"
            >
              {/* Hover Glow */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${direction.color} blur-2xl -z-10`} 
                   style={{ transform: 'scale(0.8)' }} />

              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${direction.color} bg-opacity-20 mb-4`}
              >
                <div className="text-white">
                  {direction.icon}
                </div>
              </motion.div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors leading-tight">
                {direction.title}
              </h3>

              {/* Decorative Corner */}
              <div className={`absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl ${direction.color} opacity-0 group-hover:opacity-10 rounded-tl-full transition-opacity duration-500`} />
            </motion.div>
          ))}
        </div>

        {/* Vision Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative rounded-3xl backdrop-blur-xl bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 border-2 border-cyan-400/30 p-8 md:p-12"
        >
          {/* Coordinate Labels */}
          <div className="absolute -top-3 left-8 bg-[#0B0F1A] px-3 text-cyan-400 text-sm font-mono">
            [VISION_2030]
          </div>
          <div className="absolute -bottom-3 right-8 bg-[#0B0F1A] px-3 text-purple-400 text-sm font-mono">
            [COMMIT]
          </div>

          <div className="text-center space-y-4">
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
              Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-bold">intelligent spatial systems</span> that autonomously process Earth observation data, predict environmental changes, and deliver <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 font-bold">actionable insights</span> at scale.
            </p>
            <p className="text-lg text-gray-400">
              The future of geospatial intelligence is automated, predictive, and AI-driven.
            </p>
          </div>

          {/* Animated Lines */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
            <motion.div
              animate={{
                x: ['-100%', '100%']
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute top-0 left-0 w-1/3 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
            />
            <motion.div
              animate={{
                x: ['100%', '-100%']
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute bottom-0 right-0 w-1/3 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"
            />
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes gridSlide {
          0% { transform: translate(0, 0); }
          100% { transform: translate(60px, 60px); }
        }
      `}</style>
    </section>
  );
}
