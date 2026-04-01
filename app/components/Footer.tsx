import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative py-12 bg-gradient-to-b from-[#0a1628] to-[#0B0F1A] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
          {/* Logo/Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
              Kirimi Kooome Brian
            </h3>
            <p className="text-gray-400 text-sm">
              Geospatial Developer | Spatial Data Analyst
            </p>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap justify-center gap-6"
          >
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="text-gray-400 hover:text-cyan-400 transition-colors text-sm cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400"
        >
          <p className="flex items-center gap-2">
            (c) {currentYear} Kirimi Kooome Brian. All rights reserved.
          </p>
          
          <p className="flex items-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-400 fill-current" /> using React & Tailwind CSS
          </p>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-1/4 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-full blur-3xl" />
      </div>
    </footer>
  );
}

