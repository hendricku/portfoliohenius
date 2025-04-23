'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 py-6 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="max-w-6xl mx-auto bg-white/90 backdrop-blur-md px-6 sm:px-8 py-3 sm:py-4 rounded-2xl shadow-lg"
      >
        <div className="flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 sm:w-12 sm:h-12 bg-[#FFD700] rounded-xl flex items-center justify-center font-bold text-xl sm:text-2xl text-[#2A2A2A] shadow-md cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
            title="Scroll to Top"
          >
            H
          </motion.div>

          <div className="hidden sm:flex gap-6 md:gap-8">
            {['Home', 'About', 'Services', 'Contact'].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="relative text-[#2A2A2A] font-medium text-base sm:text-lg hover:text-[#FFD700] transition-colors duration-200 group"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1 + 0.3,
                  type: 'spring',
                  stiffness: 300
                }}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FFD700] transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}
            <Link href="/projects" className="relative text-[#2A2A2A] font-medium text-base sm:text-lg hover:text-[#FFD700] transition-colors duration-200 group">
              <motion.span
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: 0.5,
                  type: 'spring',
                  stiffness: 300
                }}
              >
                Projects
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FFD700] transition-all duration-300 group-hover:w-full"></span>
              </motion.span>
            </Link>
          </div>

          <div className="sm:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#2A2A2A] focus:outline-none p-2 relative z-50"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-current transform transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`w-full h-0.5 bg-current transform transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isMobileMenuOpen ? 'auto' : 0,
            opacity: isMobileMenuOpen ? 1 : 0,
            scale: isMobileMenuOpen ? 1 : 0.95
          }}
          transition={{ duration: 0.3 }}
          className={`sm:hidden overflow-hidden mt-4 ${isMobileMenuOpen ? 'block' : 'hidden'}`}
        >
          <div className="py-2">
            {['Home', 'About', 'Services', 'Contact'].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block py-2 px-4 text-[#2A2A2A] hover:bg-[#FFD700]/10 rounded-lg transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item}
              </motion.a>
            ))}
            <Link 
              href="/projects"
              className="block py-2 px-4 text-[#2A2A2A] hover:bg-[#FFD700]/10 rounded-lg transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Projects
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </nav>
  );
}