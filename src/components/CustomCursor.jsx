import React from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = ({ mouseX, mouseY, isHoveredOverCard }) => {
  const springConfig = { damping: 30, stiffness: 350, mass: 0.4 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const cursorVariants = {
    default: {
      width: 18,
      height: 18,
      backgroundColor: 'var(--cursor-bg)',
      border: '0px solid transparent',
    },
    big: {
      width: 48,
      height: 48,
      backgroundColor: 'transparent',
      border: '3px solid var(--cursor-border)',
    }
  };

  return (
    <motion.div
      id="cursor"
      className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full -translate-x-1/2 -translate-y-1/2 hidden md:block"
      style={{
        x: cursorX,
        y: cursorY,
      }}
      variants={cursorVariants}
      animate={isHoveredOverCard ? 'big' : 'default'}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
    />
  );
};

export default CustomCursor;
