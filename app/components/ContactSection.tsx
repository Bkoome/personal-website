import { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Linkedin, Github, Mail, MapPin, Phone, FileText } from 'lucide-react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent(`New portfolio message from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:koomebrian285@gmail.com?subject=${subject}&body=${body}`;
    setSubmitMessage('Email draft opened. Please click Send in your mail app.');
  };

  return (
    <section id="contact" className="relative py-24 bg-[#0a1628]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
            Let's Connect
          </h2>
          <p className="text-gray-400 text-xl">
            Let's build scalable geospatial intelligence systems
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="rounded-3xl backdrop-blur-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-white/10 p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-cyan-400/50 outline-none text-white transition-all placeholder-gray-500"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-cyan-400/50 outline-none text-white transition-all placeholder-gray-500"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-cyan-400/50 outline-none text-white transition-all placeholder-gray-500 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(34, 211, 238, 0.5)' }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all"
                >
                  Send Message
                  <Send className="w-5 h-5" />
                </motion.button>
                {submitMessage && (
                  <p className="text-sm text-cyan-300">{submitMessage}</p>
                )}
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Info Card */}
            <div className="rounded-3xl backdrop-blur-xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-white/10 p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
              
              <div className="space-y-4">
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4"
                >
                  <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20">
                    <Mail className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Email</p>
                    <p className="text-white font-medium">koomebrian285@gmail.com</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4"
                >
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-400/20 to-purple-500/20">
                    <Phone className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Phone</p>
                    <p className="text-white font-medium">0705078418</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4"
                >
                  <div className="p-3 rounded-xl bg-gradient-to-br from-purple-400/20 to-pink-500/20">
                    <MapPin className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Location</p>
                    <p className="text-white font-medium">Nairobi, Kenya</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Social Links */}
            <div className="rounded-3xl backdrop-blur-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-white/10 p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Connect With Me</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <motion.a
                  href="https://www.linkedin.com/in/kirimi-brian-18b272265/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-4 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-400/30 hover:border-blue-400/60 transition-all flex items-center justify-center gap-2 text-blue-400 hover:text-cyan-400"
                >
                  <Linkedin className="w-6 h-6" />
                  <span className="font-medium">LinkedIn</span>
                </motion.a>

                <motion.a
                  href="https://github.com/Bkoome"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-4 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-400/30 hover:border-purple-400/60 transition-all flex items-center justify-center gap-2 text-purple-400 hover:text-cyan-400"
                >
                  <Github className="w-6 h-6" />
                  <span className="font-medium">GitHub</span>
                </motion.a>

                <motion.a
                  href="https://medium.com/me/following-feed/writers/ce68b4cf6745"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-4 rounded-xl bg-gradient-to-br from-cyan-500/20 to-teal-500/20 border border-cyan-400/30 hover:border-cyan-400/60 transition-all flex items-center justify-center gap-2 text-cyan-300 hover:text-cyan-200"
                >
                  <FileText className="w-6 h-6" />
                  <span className="font-medium">Medium</span>
                </motion.a>
              </div>
            </div>

            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="rounded-2xl backdrop-blur-xl bg-gradient-to-r from-green-500/10 to-cyan-500/10 border border-green-400/30 p-6"
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <div className="absolute inset-0 w-3 h-3 rounded-full bg-green-400 animate-ping" />
                </div>
                <div>
                  <p className="text-white font-semibold">Available for Projects</p>
                  <p className="text-gray-400 text-sm">Open to freelance and full-time opportunities</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
