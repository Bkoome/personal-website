import { motion } from 'motion/react';
import { GraduationCap } from 'lucide-react';

type YearBlock = {
  year: string;
  courses: string[];
};

export function AcademicTrainingSection() {
  const blocks: YearBlock[] = [
    {
      year: 'Year 1 (2021/2022)',
      courses: [
        'Introduction to Geospatial Science',
        'Geographic Information Systems I',
        'Surveying I',
        'Cartographic Drawing',
        'Introduction to Computer Science',
        'Introduction to Programming',
        'Communication Skills',
        'Algebra, Geometry and Linear Algebra',
        'Calculus I and II',
        'Physics I',
      ],
    },
    {
      year: 'Year 2 (2022/2023)',
      courses: [
        'Geodesy I',
        'Surveying II and III',
        'Photogrammetry I',
        'GIS Database Systems',
        'Remote Sensing I and II',
        'Geographic Data Projections',
        'Geographic Information Systems II',
        'Cartography and Visualization I and II',
        'Calculus III and IV',
        'Probability and Statistics',
        'Practical Attachment (Internal)',
      ],
    },
    {
      year: 'Year 3 (2023/2024)',
      courses: [
        'Photogrammetry II',
        'Digital Mapping',
        'Microwave Remote Sensing',
        'GIS Programming',
        'Spatial Analysis',
        'Digital Image Analysis I and II',
        'Spatial Planning',
        'Engineering Surveying I',
        'Web Mapping',
        'GIS and Remote Sensing Applications',
        'Partial Differential Equations and Numerical Methods',
      ],
    },
    {
      year: 'Year 4 (2024/2025)',
      courses: [
        'Engineering Surveying II',
        'Geodesy II',
        'Adjustment Theory I and II',
        'Real Property Law and Surveying',
        'Land Information Systems',
        'Geospatial Data Infrastructure',
        'Environmental Impact Assessment and Audit',
        'Satellite Positioning and Mobile GIS',
        'Satellite Geodesy',
        'Hydrographic Surveying',
        'Research Methodology',
        'Capstone Communication Modules',
        'Practical Attachment (External)',
      ],
    },
    {
      year: 'Year 5 (2025/2026) - Final Year',
      courses: [
        'Geodesy III',
        'Topographical Mapping',
        'Precise Engineering Surveying',
        'Land Tenure Systems and Management',
        'Adjustment Theory III',
        'Navigation Systems and Applications',
        'Mining Surveying',
        'Project Management',
        'Research Project (Final Year Project)',
        'Entrepreneurship Skills',
        'Transportation Planning and Development',
      ],
    },
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-500/20 border border-cyan-400/30 mb-6">
            <GraduationCap className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-400 font-semibold">Academic Foundation</span>
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
            University Training
          </h2>
          <p className="text-gray-400 text-lg">
            Geomatics Engineering coursework from foundational science to advanced geospatial systems
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          {blocks.map((block, index) => (
            <motion.div
              key={block.year}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="rounded-2xl backdrop-blur-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-white/10 p-6"
            >
              <h3 className="text-xl font-bold text-white mb-4">{block.year}</h3>
              <ul className="space-y-2">
                {block.courses.map((course) => (
                  <li key={course} className="text-gray-300 text-sm leading-relaxed">
                    - {course}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
