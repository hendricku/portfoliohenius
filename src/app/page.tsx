'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaYoutube
} from 'react-icons/fa';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

export default function Home() {

  const handleHireMe = () => {
    console.log('Hire Me clicked!');
  };

  const handleDownloadCV = () => {
    console.log('Download CV clicked!');
    const cvPath = '/your-cv-file.pdf';
    const link = document.createElement('a');
    link.href = cvPath;
    link.setAttribute('download', 'Henius_CV.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main className="min-h-screen bg-[#FFD700] text-[#2A2A2A]">
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
               <button className="text-[#2A2A2A] focus:outline-none p-2" aria-label="Open menu">
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
               </button>
             </div>
          </div>
        </motion.div>
      </nav>
 
      <section id="home" className="pt-32 sm:pt-40 pb-20 px-4 sm:px-8 flex items-center min-h-screen"> 
        <div className="flex flex-col md:flex-row items-center justify-around gap-12 max-w-6xl mx-auto w-full"> 
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center md:text-left md:w-1/2 lg:w-5/12 z-10 order-2 md:order-1" 
          >
            <div className={montserrat.className}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-3 leading-tight">
                Hello,<br />
                I&apos;m Henius
              </h1>
              <p className="text-lg font-medium mb-8 text-[#2A2A2A]/90">
                UI/UX Designer , Frontend developer
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleHireMe}
                className="px-8 py-3 bg-[#2A2A2A] text-white rounded-full font-semibold
                  transform hover:-translate-y-1 transition-all duration-300
                  border-b-[6px] border-black/50 hover:border-b-4
                  shadow-[0_8px_0_rgba(0,206,209,0.3)] hover:shadow-[0_6px_0_rgba(0,206,209,0.4)]
                  active:border-b-0 active:translate-y-2 active:shadow-none"
              >
                Hire me
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownloadCV}
                className="px-8 py-3 bg-[#2A2A2A] text-white rounded-full font-semibold
                  transform hover:-translate-y-1 transition-all duration-300
                  border-b-[6px] border-black/50 hover:border-b-4
                  shadow-[0_8px_0_rgba(0,206,209,0.3)] hover:shadow-[0_6px_0_rgba(0,206,209,0.4)]
                  active:border-b-0 active:translate-y-2 active:shadow-none"
              >
                Download CV
              </motion.button>
            </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, scale: 0.5 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 120 }}
             className="relative w-[280px] h-[320px] sm:w-[320px] sm:h-[360px] md:w-[350px] md:h-[400px] lg:w-[400px] lg:h-[450px] mt-8 md:mt-0 order-1 md:order-2"
           >
            <div className="absolute inset-0 bg-[#00CED1] rounded-2xl shadow-lg transform -rotate-3"></div>
             <div className="absolute inset-4 sm:inset-5 bg-white rounded-xl overflow-hidden shadow-inner">
                <Image
                  src="/avatar.png"
                  alt="Henius Avatar"
                  layout="fill"
                  objectFit="cover"
                  priority
                  className="transform scale-105"
                />
             </div>
             <div className="absolute bottom-[25%] left-[50%] transform -translate-x-1/2 text-[#FFD700] font-black text-3xl z-10 opacity-80 pointer-events-none drop-shadow-md">
               VDC
             </div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 md:px-8 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
            className="bg-blue-600 p-8 md:p-12 rounded-3xl flex flex-col md:flex-row items-center gap-8 md:gap-12 shadow-2xl overflow-hidden
            relative before:absolute before:inset-0 before:bg-[url('/path-pattern.svg')] before:opacity-10 before:z-0"
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, amount: 0.5 }}
              className="bg-[#00CED1] p-3 rounded-2xl w-full max-w-[250px] md:max-w-[280px] lg:max-w-[300px] flex-shrink-0 shadow-md relative"
            >
              <Image
                src="/avatar.png"
                alt="Henius Avatar About Section"
                layout="responsive"
                width={300}
                height={300}
                objectFit="cover"
                className="rounded-xl"
              />
              <div className="absolute bottom-[25%] left-[50%] transform -translate-x-1/2 text-yellow-400 font-black text-2xl z-10 opacity-80 pointer-events-none drop-shadow-sm">
                VD<br/>C
              </div>
            </motion.div>

            <div className="flex flex-col text-center md:text-left w-full">
              <motion.h2
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true, amount: 0.5 }}
                className="text-4xl md:text-5xl font-bold text-white mb-3"
              >
                About me
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true, amount: 0.5 }}
                className="mb-5 flex flex-wrap items-center justify-center md:justify-start gap-x-3 gap-y-1"
              >
                <p className="text-lg font-semibold text-[#FFD700]">UI/UX Designer</p>
                <span className="text-yellow-300 opacity-80">•</span>
                <p className="text-lg font-semibold text-[#FFD700]">Frontend Developer</p>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true, amount: 0.5 }}
                className="text-base text-white/90 mb-6 leading-relaxed"
              >
                Hello! I&apos;m a passionate UI/UX designer and skilled Frontend developer.
                My portfolio showcases a blend of elegant, user-centric design and
                smooth, functional applications. Explore my work where
                creativity meets technology!
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true, amount: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              >
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0px 0px 12px rgba(0, 206, 209, 0.6)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleHireMe}
                  className="px-8 py-3 bg-[#FFD700] text-black rounded-full font-semibold
                    transform hover:-translate-y-1 transition-all duration-300
                    border-b-[6px] border-[#B8860B] hover:border-b-4
                    shadow-[0_8px_0_rgba(0,206,209,0.3)] hover:shadow-[0_6px_0_rgba(0,206,209,0.4)]
                    active:border-b-0 active:translate-y-2 active:shadow-none
                    hover:bg-[#FFDF33]"
                >
                  Hire me
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0px 0px 12px rgba(0, 206, 209, 0.6)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleDownloadCV}
                  className="px-8 py-3 bg-[#FFD700] text-black rounded-full font-semibold
                    transform hover:-translate-y-1 transition-all duration-300
                    border-b-[6px] border-[#B8860B] hover:border-b-4
                    shadow-[0_8px_0_rgba(0,206,209,0.3)] hover:shadow-[0_6px_0_rgba(0,206,209,0.4)]
                    active:border-b-0 active:translate-y-2 active:shadow-none
                    hover:bg-[#FFDF33]"
                >
                  Download CV
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-gradient-to-br from-[#FF6B00] via-[#FF8533] to-[#FFA500]  py-20 px-4 md:px-8 relative overflow-hidden">
        {/* Add decorative elements */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-yellow-300 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-500 rounded-full blur-3xl opacity-20"></div>

        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              Services
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-white/90 mt-2 text-lg max-w-2xl mx-auto"
            >
              Embark on a journey of digital transformation with services that blend design
              innovation with cutting-edge development expertise.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* UI/UX Design Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#8A2BE2] to-[#9945FF] p-8 rounded-3xl shadow-2xl relative overflow-hidden
                group hover:shadow-[0_20px_40px_rgba(138,43,226,0.3)] transition-all duration-500"
            >
              <div className="absolute top-0 left-0 w-full h-full bg-[url('/circuit-pattern.svg')] opacity-5 group-hover:opacity-10 transition-opacity"></div>
              <div className="absolute top-6 left-6 w-12 h-12 bg-gradient-to-br from-[#32CD32] to-[#228B22] rounded-2xl flex items-center justify-center text-2xl font-bold text-white transform -rotate-6">
                1
              </div>
              <div className="pt-20">
                <h3 className="text-3xl font-bold text-white mb-4">UI/UX Designer</h3>
                <p className="text-white/90 mb-6 text-lg">
                  Crafting user-centric interfaces. From wireframes to high-fidelity mockups, 
                  I bring your vision to life with elegant design solutions.
                </p>
                <div className="flex gap-3 mb-8">
                  <span className="px-4 py-2 bg-white/10 rounded-xl text-white backdrop-blur-sm">Figma</span>
                  <span className="px-4 py-2 bg-white/10 rounded-xl text-white backdrop-blur-sm">Framer</span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(255, 215, 0, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-[#FFD700] text-black rounded-xl font-semibold
                    transform hover:-translate-y-1 transition-all duration-300
                    border-b-[6px] border-[#B8860B] hover:border-b-4
                    shadow-lg hover:shadow-xl active:border-b-0 active:translate-y-2"
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>

            {/* Frontend Development Card - Apply similar styles */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#8A2BE2] to-[#9945FF] p-8 rounded-3xl shadow-2xl relative overflow-hidden
                group hover:shadow-[0_20px_40px_rgba(138,43,226,0.3)] transition-all duration-500"
            >
              {/* Similar structure as above with updated content */}
              <div className="absolute top-0 left-0 w-full h-full bg-[url('/code-pattern.svg')] opacity-5 group-hover:opacity-10 transition-opacity"></div>
              <div className="absolute top-6 left-6 w-12 h-12 bg-gradient-to-br from-[#32CD32] to-[#228B22] rounded-2xl flex items-center justify-center text-2xl font-bold text-white transform -rotate-6">
                2
              </div>
              <div className="pt-20">
                <h3 className="text-3xl font-bold text-white mb-4">Frontend Developer</h3>
                <p className="text-white/90 mb-6 text-lg">
                  Building web apps with Frontend tech. Seamless user experiences, 
                  responsive designs, and clean code are my specialties.
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {['HTML', 'CSS', 'JavaScript', 'Next.js', 'Laravel', 'React'].map((tech, index) => (
                    <span key={index} className="px-4 py-2 bg-white/10 rounded-xl text-white backdrop-blur-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(255, 215, 0, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-[#FFD700] text-black rounded-xl font-semibold
                    transform hover:-translate-y-1 transition-all duration-300
                    border-b-[6px] border-[#B8860B] hover:border-b-4
                    shadow-lg hover:shadow-xl active:border-b-0 active:translate-y-2"
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="contact" className="min-h-screen bg-[#00FF7F] flex flex-col items-center justify-center py-20 px-4 md:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-black text-center mb-10 max-w-4xl"
        >
          If You have any Query or Project ideas feel free to
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative mt-8"
        >
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-16 py-6 bg-[#FFD700] text-black text-3xl md:text-4xl font-bold rounded-full
                transform hover:-translate-y-1 transition-all duration-300
                border-b-[8px] border-[#B8860B] hover:border-b-6
                shadow-[0_12px_0_rgb(0,0,0,0.3)] hover:shadow-[0_8px_0_rgb(0,0,0,0.3)]
                active:border-b-0 active:translate-y-3 active:shadow-none"
            >
              Contact me
            </motion.button>
          </Link>
          {/* Larger shadow overlay */}
          <div className="absolute -bottom-4 left-0 right-0 h-6 bg-black/20 rounded-full blur-md -z-10"></div>
        </motion.div>
      </section>

      <div className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-40">
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex flex-col gap-3 md:gap-4"
        >
          {[
            { icon: <FaInstagram className="text-xl" />, color: '#E1306C', label: 'Instagram', url: '#' },
            { icon: <FaFacebookF className="text-xl" />, color: '#1877F2', label: 'Facebook', url: '#' },
            { icon: <FaTwitter className="text-xl" />, color: '#1DA1F2', label: 'Twitter', url: '#' },
            { icon: <FaYoutube className="text-xl" />, color: '#FF0000', label: 'YouTube', url: '#' }
          ].map((item, idx) => (
            <motion.a
              key={idx}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              title={item.label}
              whileHover={{
                scale: 1.15,
                x: -8,
                backgroundColor: item.color,
                color: '#FFFFFF'
               }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 md:w-12 md:h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-[#2A2A2A] transition-all duration-300 ease-in-out cursor-pointer"
            >
              {item.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </main>
  );
}