'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0F172A] to-[#1E293B] relative overflow-hidden">
      {/* Enhanced decorative elements */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[100px]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-full blur-[80px]"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-32 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block mb-4 px-6 py-2 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full backdrop-blur-sm border border-white/5"
          >
            <span className="text-indigo-300 font-medium">Let&apos;s Connect</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-200 to-white"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-indigo-100/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Have a project in mind? Let&apos;s create something extraordinary together.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          {/* Enhanced Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gradient-to-br from-white/[0.05] to-white/[0.1] backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.2)]"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-indigo-200 mb-2 text-sm font-medium">Full Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white
                    focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent
                    transition-all duration-300 placeholder:text-white/30"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-indigo-200 mb-2 text-sm font-medium">Email Address</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white
                    focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent
                    transition-all duration-300 placeholder:text-white/30"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-indigo-200 mb-2 text-sm font-medium">Your Message</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white
                    focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent
                    transition-all duration-300 resize-none placeholder:text-white/30"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(99, 102, 241, 0.4)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 bg-gradient-to-r from-indigo-600 to-indigo-500 rounded-xl
                  text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300
                  border border-indigo-400/20"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Enhanced Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-white/[0.05] to-white/[0.1] backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.2)]">
              <h2 className="text-2xl font-bold text-white mb-8">Direct Contact</h2>
              <div className="space-y-6">
                <motion.a
                  whileHover={{ x: 10 }}
                  href="mailto:your@email.com"
                  className="flex items-center gap-4 text-white/80 hover:text-white transition-colors duration-300 group"
                >
                  <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center group-hover:bg-indigo-500/30 transition-colors duration-300">
                    <FaEnvelope className="text-2xl text-indigo-400" />
                  </div>
                  <div>
                    <p className="font-medium text-indigo-200">Email</p>
                    <span className="text-white/60">your@email.com</span>
                  </div>
                </motion.a>
                <motion.a
                  whileHover={{ x: 10 }}
                  href="https://wa.me/yourwhatsapp"
                  className="flex items-center gap-4 text-white/80 hover:text-white transition-colors duration-300 group"
                >
                  <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center group-hover:bg-green-500/30 transition-colors duration-300">
                    <FaWhatsapp className="text-2xl text-green-400" />
                  </div>
                  <div>
                    <p className="font-medium text-indigo-200">WhatsApp</p>
                    <span className="text-white/60">+1234567890</span>
                  </div>
                </motion.a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white/[0.05] to-white/[0.1] backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.2)]">
              <h2 className="text-2xl font-bold text-white mb-8">Social Profiles</h2>
              <div className="flex gap-4">
                <motion.a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="flex-1 p-4 bg-white/5 rounded-xl text-white hover:bg-white/10 transition-colors duration-300 flex flex-col items-center gap-2 group"
                >
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                    <FaGithub className="text-2xl" />
                  </div>
                  <span className="text-sm font-medium text-white/60">GitHub</span>
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="flex-1 p-4 bg-white/5 rounded-xl text-white hover:bg-white/10 transition-colors duration-300 flex flex-col items-center gap-2 group"
                >
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                    <FaLinkedin className="text-2xl" />
                  </div>
                  <span className="text-sm font-medium text-white/60">LinkedIn</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-20"
        >
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(99, 102, 241, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-indigo-500 rounded-full font-semibold
                text-white transform hover:-translate-y-1 transition-all duration-300
                border border-indigo-400/20 shadow-lg hover:shadow-xl"
            >
              Back to Home
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </main>
  );
}