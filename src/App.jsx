import React, { useState, useEffect } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import CustomCursor from './components/CustomCursor';
import PortfolioHero from './components/PortfolioHero';
import AboutMe from './components/AboutMe';

function App() {
  const [isHoveredOverCard, setIsHoveredOverCard] = useState(false);
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

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

  const scrollToHome = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="min-h-screen flex flex-col bg-white overflow-x-hidden relative select-none"
    >
      {/* High-performance custom cursor */}
      <CustomCursor mouseX={mouseX} mouseY={mouseY} isHoveredOverCard={isHoveredOverCard} />

      {/* Main Portfolio Hero Grid & Layout */}
      <PortfolioHero onCardHoverChange={setIsHoveredOverCard} onAboutClick={scrollToAboutMe} />

      {/* About Me Section Panel */}
      <div className="w-full mt-0 pb-0">
        <AboutMe onBackClick={scrollToHome} onHoverChange={setIsHoveredOverCard} />
      </div>
    </motion.div>
  );
}

export default App;
