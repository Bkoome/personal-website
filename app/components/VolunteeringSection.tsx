import { motion } from 'motion/react';
import { HandHeart } from 'lucide-react';

export function VolunteeringSection() {
  const items = [
    'Volunteer Geospatial Contributor - OpenStreetMap (OSM)',
    'Volunteer GIS Analyst - Humanitarian OpenStreetMap Team (HOT)',
    'Online Volunteer - United Nations Volunteers (UNV)',
    'Open Source Contributor - GitHub (Geospatial and Full Stack Development)',
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-[#0B0F1A] to-[#0a1628]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-cyan-500/20 border border-cyan-400/30 mb-6">
            <HandHeart className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-400 font-semibold">Community Impact</span>
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
            Volunteering and Open Source Contributions
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {items.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="rounded-xl border border-white/10 bg-white/5 p-5 text-gray-200"
            >
              - {item}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
