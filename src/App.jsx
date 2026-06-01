import React, { useState, useEffect } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import CustomCursor from './components/CustomCursor';
import PortfolioHero from './components/PortfolioHero';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Credentials from './components/Credentials';

function App() {
  const [isHoveredOverCard, setIsHoveredOverCard] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const [activeSection, setActiveSection] = useState("01 — ABOUT ME");
  const [darkMode, setDarkMode] = useState(false);
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Toggle dark class on root document node and manage background
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.body.style.backgroundColor = '#111111';
    } else {
      document.documentElement.classList.remove('dark');
      document.body.style.backgroundColor = '#FAF9F5';
    }
  }, [darkMode]);

  // High-performance scroll listener to toggle sticky nav and track active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowNavbar(scrollY > window.innerHeight * 0.45);

      const sections = [
        { id: 'about-me-section', label: '01 — ABOUT ME' },
        { id: 'projects-section', label: '02 — PROJECTS' },
        { id: 'credentials-section', label: '03 — CREDENTIALS' }
      ];

      let active = '01 — ABOUT ME';
      for (const sec of sections) {
        const el = document.getElementById(sec.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140) {
            active = sec.label;
          }
        }
      }
      setActiveSection(active);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // High-performance global mouse listener to track coordinates
  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Smooth scrolling scroll functions
  const scrollToAboutMe = () => {
    document.getElementById('about-me-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    document.getElementById('projects-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToCredentials = () => {
    document.getElementById('credentials-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToHome = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="min-h-screen flex flex-col bg-softwhite dark:bg-[#111111] overflow-x-hidden relative select-none"
    >
      {/* High-performance custom cursor */}
      <CustomCursor mouseX={mouseX} mouseY={mouseY} isHoveredOverCard={isHoveredOverCard} />

      {/* Floating Geometric Dark Mode Toggle */}
      <div
        onClick={() => setDarkMode(!darkMode)}
        onMouseEnter={() => setIsHoveredOverCard(true)}
        onMouseLeave={() => setIsHoveredOverCard(false)}
        className="fixed bottom-6 right-6 md:bottom-8 md:right-10 h-10 px-4 border-2 border-black bg-softwhite text-black dark:border-tonedwhite dark:bg-[#111111] dark:text-tonedwhite flex items-center justify-center font-bold text-[11px] tracking-widest uppercase select-none cursor-none z-[1000] active:scale-95 transition-transform shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(234,232,225,1)]"
      >
        {darkMode ? 'LGT' : 'DRK'}
      </div>

      {/* Sticky Global Top Navigation Bar */}
      <motion.div
        initial={{ y: -80 }}
        animate={{ y: showNavbar ? 0 : -80 }}
        transition={{ ease: "linear", duration: 0.15 }}
        className="fixed top-0 left-0 w-full bg-softwhite dark:bg-[#111111] border-b-[3px] border-black dark:border-tonedwhite px-6 md:px-10 py-3 flex items-center justify-between z-[999] select-none"
      >
        <div
          onClick={scrollToHome}
          onMouseEnter={() => setIsHoveredOverCard(true)}
          onMouseLeave={() => setIsHoveredOverCard(false)}
          className="text-[11px] font-bold tracking-widest uppercase flex items-center gap-1.5 text-black dark:text-tonedwhite cursor-none"
        >
          <i className="ti ti-arrow-left text-[13px]" aria-hidden="true" /> Home
        </div>
        <span className="text-[11px] font-bold tracking-widest uppercase text-black dark:text-tonedwhite font-mono">
          {activeSection}
        </span>
      </motion.div>

      {/* Main Portfolio Hero Grid & Layout */}
      <PortfolioHero 
        onCardHoverChange={setIsHoveredOverCard} 
        onAboutClick={scrollToAboutMe}
        onProjectsClick={scrollToProjects}
        onCredentialsClick={scrollToCredentials}
      />

      {/* About Me Section Panel */}
      <div className="w-full mt-0 pb-0">
        <AboutMe onBackClick={scrollToHome} onHoverChange={setIsHoveredOverCard} />
      </div>

      {/* Projects Section Panel */}
      <div className="w-full mt-0 pb-0">
        <Projects onBackClick={scrollToHome} onHoverChange={setIsHoveredOverCard} />
      </div>

      {/* Credentials Section Panel */}
      <div className="w-full mt-0 pb-0">
        <Credentials onBackClick={scrollToHome} onHoverChange={setIsHoveredOverCard} />
      </div>
    </motion.div>
  );
}

export default App;

