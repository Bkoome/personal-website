import { motion } from 'motion/react';
import { Award } from 'lucide-react';

export function CertificationsSection() {
  const certifications = [
    'Meta Front-End Developer - Coursera (Self-paced)',
    'Meta Back-End Developer - Coursera (Self-paced)',
    'Responsive Web Design - freeCodeCamp',
    'JavaScript Algorithms and Data Structures - freeCodeCamp',
    'APIs and Microservices - freeCodeCamp',
    'Python Web Development (Flask/Django) - Self-paced',
    'SQL and PostgreSQL for Data Management - Self-paced',
    'PostGIS for Geospatial Analysis - Self-paced',
    'RESTful API Development and Integration - Self-paced',
    'Full Stack Development with Cloud (AWS/Firebase) - Self-paced',
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-cyan-400/30 mb-6">
            <Award className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-400 font-semibold">Professional Growth</span>
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
            Certifications and Technical Development
          </h2>
          <p className="text-gray-400 text-lg">
            Continuous upskilling across full stack engineering, APIs, databases, and cloud
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {certifications.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
              className="rounded-xl border border-white/10 bg-white/5 p-4 text-gray-200"
            >
              - {item}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
