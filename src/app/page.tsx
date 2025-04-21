'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
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
    // Example action: Open mail client
    // window.location.href = 'mailto:youremail@example.com?subject=Hiring Inquiry';
    // Or scroll to contact section:
    // document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadCV = () => {
    console.log('Download CV clicked!');
    // IMPORTANT: Replace '/your-cv-file.pdf' with the actual path to your CV
    // The file should be placed in the `public` folder of your Next.js project.
    const cvPath = '/your-cv-file.pdf'; // <--- CHANGE THIS TO YOUR CV FILE PATH (e.g., '/Henius_CV.pdf')
    const link = document.createElement('a');
    link.href = cvPath;
    // UPDATED: CV filename back to Henius
    link.setAttribute('download', 'Henius_CV.pdf'); // Suggested filename for the user
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  return (
    // Main container with yellow background and dark text
    <main className="min-h-screen bg-[#FFD700] text-[#2A2A2A]">

      {/* ===== Navigation ===== */}
      <nav className="fixed w-full top-0 z-50 py-6 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          // Blurred background navbar container
          className="max-w-6xl mx-auto bg-white/90 backdrop-blur-md px-6 sm:px-8 py-3 sm:py-4 rounded-2xl shadow-lg"
        >
          <div className="flex justify-between items-center">
             {/* Logo/Brand */}
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 sm:w-12 sm:h-12 bg-[#FFD700] rounded-xl flex items-center justify-center font-bold text-xl sm:text-2xl text-[#2A2A2A] shadow-md cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} // Scrolls to top smoothly
              title="Scroll to Top" // Tooltip for accessibility
            >
              A {/* UPDATED: Initial back to A */}
            </motion.div>

            {/* Navigation Links (Desktop) */}
            <div className="hidden sm:flex gap-6 md:gap-8">
              {['Home', 'About', 'Projects', 'Contact'].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`} // Links to section IDs
                  className="relative text-[#2A2A2A] font-medium text-base sm:text-lg hover:text-[#FFD700] transition-colors duration-200 group"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.1 + 0.3, // Staggered animation
                    type: 'spring',
                    stiffness: 300
                  }}
                >
                  {item}
                  {/* Animated underline effect on hover */}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FFD700] transition-all duration-300 group-hover:w-full"></span>
                </motion.a>
              ))}
            </div>

             {/* Basic Mobile Menu Button Placeholder (Needs functionality) */}
             <div className="sm:hidden">
               <button className="text-[#2A2A2A] focus:outline-none p-2" aria-label="Open menu">
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
               </button>
             </div>
          </div>
        </motion.div>
      </nav>
      {/* ===== END OF Navigation ===== */}


      {/* ===== Hero Section ===== */}
      <section id="home" className="pt-32 sm:pt-40 pb-20 px-4 sm:px-8 flex items-center min-h-screen"> {/* Added min-h-screen and flex align */}
        <div className="flex flex-col md:flex-row items-center justify-around gap-12 max-w-6xl mx-auto w-full"> {/* Added w-full */}
          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center md:text-left md:w-1/2 lg:w-5/12 z-10 order-2 md:order-1" // Adjusted width for balance
          >
            <div className={montserrat.className}>
              {/* ***** FIX ON LINE 116 ***** */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-3 leading-tight">
                Hello,<br />
                I'm Henius {/* Changed ' to ' */}
              </h1>
              <p className="text-lg font-medium mb-8 text-[#2A2A2A]/90">
                UI/UX Designer , Flutter developer {/* Updated roles */}
              </p>
            </div>
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0px 5px 15px rgba(42, 42, 42, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                onClick={handleHireMe}
                className="px-8 py-3 bg-[#2A2A2A] text-white rounded-lg font-semibold hover:bg-black transition-colors duration-300 shadow-md"
              >
                Hire me
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0px 5px 15px rgba(42, 42, 42, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownloadCV}
                className="px-8 py-3 bg-[#2A2A2A] text-white rounded-lg font-semibold hover:bg-black transition-colors duration-300 shadow-md"
              >
                Download CV
              </motion.button>
            </div>
          </motion.div>

          {/* Right Image Area */}
          <motion.div
             initial={{ opacity: 0, scale: 0.5 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 120 }}
             // Responsive sizing for the image container
             className="relative w-[280px] h-[320px] sm:w-[320px] sm:h-[360px] md:w-[350px] md:h-[400px] lg:w-[400px] lg:h-[450px] mt-8 md:mt-0 order-1 md:order-2"
           >
            {/* Background shape with slight rotation */}
            <div className="absolute inset-0 bg-[#00CED1] rounded-2xl shadow-lg transform -rotate-3"></div>
             {/* Image container with white background */}
             <div className="absolute inset-4 sm:inset-5 bg-white rounded-xl overflow-hidden shadow-inner">
                {/* Next.js Image Component */}
                <Image
                  // Ensure 'avatar.png' is in the /public folder
                  src="/avatar.png"
                  alt="Henius Avatar" // UPDATED: Alt text
                  layout="fill" // Fills the parent container
                  objectFit="cover" // Covers the container, may crop
                  priority // Prioritize loading this image (LCP)
                  className="transform scale-105" // Slight zoom effect
                />
             </div>
             {/* Optional: VDC overlay */}
             <div className="absolute bottom-[25%] left-[50%] transform -translate-x-1/2 text-[#FFD700] font-black text-3xl z-10 opacity-80 pointer-events-none drop-shadow-md">
               VDC
             </div>
          </motion.div>
        </div>
      </section>
      {/* ===== END OF Hero Section ===== */}


      {/* ===== UPDATED ABOUT SECTION ===== */}
      <section id="about" className="py-20 px-4 md:px-8 bg-gray-50"> {/* Added a subtle background color */}
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }} // Animate when section scrolls into view
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }} // Trigger animation once, when 20% visible
            // Main blue card styling
            className="bg-blue-600 p-8 md:p-12 rounded-3xl flex flex-col md:flex-row items-center gap-8 md:gap-12 shadow-xl overflow-hidden"
          >
            {/* === Image Container === */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, amount: 0.5 }}
              // Container for the image - keeps background, padding, rounded corners, size constraints
              className="bg-[#00CED1] p-3 rounded-2xl w-full max-w-[250px] md:max-w-[280px] lg:max-w-[300px] flex-shrink-0 shadow-md relative"
            >
              {/* === Image FIX === */}
              <Image
                // Ensure 'avatar.png' is in the /public folder
                src="/avatar.png"
                alt="Henius Avatar About Section" // UPDATED: Alt text
                layout="responsive" // Responsive layout based on width/height ratio
                width={300}         // Base width for aspect ratio (e.g., 1:1)
                height={300}        // Base height for aspect ratio
                objectFit="cover"   // Covers the container
                className="rounded-xl" // Rounded corners on the image itself
              />
              {/* VDC overlay for About section image */}
              <div className="absolute bottom-[25%] left-[50%] transform -translate-x-1/2 text-yellow-400 font-black text-2xl z-10 opacity-80 pointer-events-none drop-shadow-sm">
                VD<br/>C
              </div>
            </motion.div> {/* End of Image Container */}


            {/* === Text Content Container === */}
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

              {/* === Subtitle Layout FIX === */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true, amount: 0.5 }}
                // Flexbox for horizontal layout, center on mobile, start on md+, wrap if needed
                className="mb-5 flex flex-wrap items-center justify-center md:justify-start gap-x-3 gap-y-1"
              >
                <p className="text-lg font-semibold text-[#FFD700]">UI/UX Designer</p>
                {/* Separator */}
                <span className="text-yellow-300 opacity-80">•</span>
                <p className="text-lg font-semibold text-[#FFD700]">Flutter Developer</p>
              </motion.div> {/* End of Subtitle Container */}

               {/* ***** FIX ON LINE 244 ***** */}
              <motion.p
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true, amount: 0.5 }}
                className="text-base text-white/90 mb-6 leading-relaxed" // Slightly less opaque text
              >
                Hello! I'm a passionate UI/UX designer and skilled Flutter developer. {/* Changed ' to ' */}
                My portfolio showcases a blend of elegant, user-centric design and
                smooth, functional Flutter applications. Explore my work where
                creativity meets technology!
              </motion.p>

              {/* Button Container */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true, amount: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              >
                 {/* Consistent button styling */}
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0px 0px 12px rgba(0, 206, 209, 0.6)" }} // Use accent color for shadow
                  whileTap={{ scale: 0.95 }}
                  onClick={handleHireMe}
                  className="px-8 py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-300 shadow-md"
                >
                  Hire me
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0px 0px 12px rgba(0, 206, 209, 0.6)" }} // Use accent color for shadow
                  whileTap={{ scale: 0.95 }}
                  onClick={handleDownloadCV}
                  className="px-8 py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-300 shadow-md"
                >
                  Download CV
                </motion.button>
              </motion.div> {/* End of Button Container */}

            </div> {/* End of Text Content Container */}
          </motion.div> {/* End of Main Blue Card */}
        </div> {/* End of Max Width Container */}
      </section>
      {/* ===== END OF UPDATED ABOUT SECTION ===== */}


      {/* ===== Placeholder for Projects Section ===== */}
      <section id="projects" className="min-h-screen bg-gray-100 flex items-center justify-center py-20 px-4 md:px-8">
          <h2 className="text-4xl font-bold text-gray-700 text-center">Projects Section<br/>Coming Soon...</h2>
      </section>

      {/* ===== Placeholder for Contact Section ===== */}
      <section id="contact" className="min-h-screen bg-[#FFD700] flex items-center justify-center py-20 px-4 md:px-8">
           <h2 className="text-4xl font-bold text-[#2A2A2A] text-center">Contact Section<br/>Coming Soon...</h2>
      </section>


      {/* ===== Floating Social Media Bar ===== */}
      <div className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-40">
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }} // Delayed entrance animation
          className="flex flex-col gap-3 md:gap-4" // Spacing between icons
        >
          {[
            // Define social media links here
            // IMPORTANT: Replace '#' with your actual profile URLs
            { icon: <FaInstagram className="text-xl" />, color: '#E1306C', label: 'Instagram', url: '#' },
            { icon: <FaFacebookF className="text-xl" />, color: '#1877F2', label: 'Facebook', url: '#' },
            { icon: <FaTwitter className="text-xl" />, color: '#1DA1F2', label: 'Twitter', url: '#' },
            { icon: <FaYoutube className="text-xl" />, color: '#FF0000', label: 'YouTube', url: '#' }
          ].map((item, idx) => (
            <motion.a
              key={idx}
              href={item.url} // Use the actual URL
              target="_blank" // Open in new tab
              rel="noopener noreferrer" // Security best practice
              title={item.label} // Tooltip for accessibility
              whileHover={{
                scale: 1.15,
                x: -8, // Move left slightly on hover
                backgroundColor: item.color, // Change background to brand color
                color: '#FFFFFF' // Change icon color to white
               }}
              whileTap={{ scale: 0.95 }}
              // Styling for each icon button
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