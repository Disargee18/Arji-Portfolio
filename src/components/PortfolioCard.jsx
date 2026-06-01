import React, { useState } from 'react';
import { motion } from 'framer-motion';

const PortfolioCard = ({ 
  label, 
  bgColor, 
  textColor = 'text-black', 
  number, 
  numColor = 'text-black/40', 
  arrowColor = 'text-black',
  circleStyle = {},
  circleBorderColor = 'border-black/15',
  accents, 
  onClick,
  onHoverChange 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const labelLines = label.split(' ');

  const arrowVariants = {
    initial: {
      opacity: 0,
      scale: 0.4,
      y: 10,
    },
    hover: {
      opacity: 1,
      scale: 1,
      y: [0, -6, 0],
      transition: {
        y: {
          repeat: Infinity,
          duration: 0.8,
          ease: 'easeInOut',
        },
        opacity: { type: 'spring', stiffness: 350, damping: 15 },
        scale: { type: 'spring', stiffness: 350, damping: 15 },
      }
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (onHoverChange) onHoverChange(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (onHoverChange) onHoverChange(false);
  };

  const cardVariants = {
    initial: {
      opacity: 0,
      y: 60,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.22, 1, 0.36, 1],
        duration: 0.6,
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ scale: 1.04 }}
      transition={{ type: 'spring', stiffness: 300, damping: 18 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className="portfolio-card flex-1 min-h-[340px] border-4 border-black dark:border-tonedwhite relative overflow-hidden flex flex-col items-center justify-center select-none"
      style={{ backgroundColor: bgColor }}
    >
      <motion.div
        className={`absolute rounded-full border-4 ${circleBorderColor} dark:border-tonedwhite/20 pointer-events-none`}
        style={circleStyle}
        animate={{
          rotate: isHovered ? 45 : 0,
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      />

      {accents}

      <span className={`absolute top-[14px] left-[18px] text-[0.8rem] font-bold tracking-widest ${numColor}`}>
        {number}
      </span>

      <span className={`text-5xl md:text-7xl font-bold uppercase tracking-tight text-center px-4 leading-none z-10 ${textColor}`}>
        {labelLines.map((line, idx) => (
          <React.Fragment key={idx}>
            {line}
            {idx < labelLines.length - 1 && <br />}
          </React.Fragment>
        ))}
      </span>

      <motion.span
        variants={arrowVariants}
        initial="initial"
        animate={isHovered ? 'hover' : 'initial'}
        className={`absolute bottom-[20px] right-[24px] text-5xl font-bold select-none z-10 ${arrowColor}`}
      >
        ↗
      </motion.span>
    </motion.div>
  );
};

export default PortfolioCard;
