'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function Projects() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#1A1A2E] to-[#16213E] relative overflow-hidden">
      <Navbar />
      {/* Enhanced decorative elements */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-32 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block mb-4 px-6 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full backdrop-blur-sm"
          >
            <span className="text-blue-300 font-medium">Portfolio Showcase</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200"
          >
            My Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-blue-100/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Explore my latest works where innovation meets design excellence
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Project cards - update the className for both cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="group relative bg-gradient-to-br from-white/5 to-white/10 p-1 rounded-3xl backdrop-blur-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative p-6 rounded-[22px] bg-gradient-to-br from-white/[0.02] to-white/[0.05] overflow-hidden">
              <div className="relative h-64 mb-8 rounded-2xl overflow-hidden">
                <Image
                  src="/jialu-preview.png"
                  alt="Jialu Global Preview"
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Jia Lu Global Church</h3>
              <p className="text-white/80 mb-6">
                A modern church website built with Next.js, featuring service times, ministries, and community events. 
                Designed with a focus on accessibility and user engagement.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-white/20 rounded-full text-white text-sm">Next.js</span>
                <span className="px-3 py-1 bg-white/20 rounded-full text-white text-sm">React</span>
                <span className="px-3 py-1 bg-white/20 rounded-full text-white text-sm">Tailwind CSS</span>
                <span className="px-3 py-1 bg-white/20 rounded-full text-white text-sm">Framer Motion</span>
              </div>
              <motion.a
                href="https://jialuglobal.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-6 py-3 bg-[#FFD700] text-black rounded-xl font-semibold
                  transform hover:-translate-y-1 transition-all duration-300
                  border-b-[4px] border-[#B8860B] hover:border-b-2
                  shadow-lg hover:shadow-xl"
              >
                Visit Website
              </motion.a>
            </div>
          </motion.div>

          {/* Add the second project card with the same structure */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="group relative bg-gradient-to-br from-white/5 to-white/10 p-1 rounded-3xl backdrop-blur-xl"
          >
            {/* Same structure as above for the Flappy Game Project */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative p-6 rounded-[22px] bg-gradient-to-br from-white/[0.02] to-white/[0.05] overflow-hidden">
              <div className="relative h-64 mb-8 rounded-2xl overflow-hidden">
                <Image
                  src="/flappy-preview.png"
                  alt="Flappy Game Preview"
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Crypto Flappy Frontend</h3>
              <p className="text-white/80 mb-6">
                A cryptocurrency-themed frontend interface combining gaming elements with crypto functionalities. 
                Built with modern web technologies for enhanced user experience.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-white/20 rounded-full text-white text-sm">Next.js</span>
                <span className="px-3 py-1 bg-white/20 rounded-full text-white text-sm">Tailwind CSS</span>
                <span className="px-3 py-1 bg-white/20 rounded-full text-white text-sm">TypeScript</span>
                <span className="px-3 py-1 bg-white/20 rounded-full text-white text-sm">Framer Motion</span>
              </div>
              <motion.a
                href="https://flappygamecrypto.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-6 py-3 bg-[#FFD700] text-black rounded-xl font-semibold
                  transform hover:-translate-y-1 transition-all duration-300
                  border-b-[4px] border-[#B8860B] hover:border-b-2
                  shadow-lg hover:shadow-xl"
              >
                Play Game
              </motion.a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-[#FFD700] text-black rounded-full font-semibold
                transform hover:-translate-y-1 transition-all duration-300
                border-b-[6px] border-[#B8860B] hover:border-b-4
                shadow-[0_8px_0_rgba(0,206,209,0.3)] hover:shadow-[0_6px_0_rgba(0,206,209,0.4)]
                active:border-b-0 active:translate-y-2 active:shadow-none"
            >
              Back to Home
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </main>
  );
}