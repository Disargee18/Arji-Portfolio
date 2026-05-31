import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FlipCard = ({
  number,
  title,
  subtitle,
  frontBg = 'bg-white',
  backBg = 'bg-black',
  textColor = 'text-black',
  backTextColor = 'text-white',
  numColor = 'opacity-[0.35]',
  flipHintColor = 'opacity-[0.35]',
  backContent,
  className = '',
  borderClass = 'border-r-2 border-b-2 border-black',
  heightClass = 'h-[280px]',
  style = {},
  onHoverChange
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={`perspective-900 overflow-hidden cursor-none ${borderClass} ${className}`}
      style={style}
      onClick={() => setIsFlipped(!isFlipped)}
      onMouseEnter={() => onHoverChange && onHoverChange(true)}
      onMouseLeave={() => onHoverChange && onHoverChange(false)}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.55, ease: [0.34, 1.2, 0.64, 1] }}
        className={`relative w-full preserve-3d ${heightClass}`}
      >
        {/* Front Face */}
        <div className={`absolute inset-0 backface-hidden flex flex-col justify-center p-[18px] select-none ${frontBg} ${textColor}`}>
          <div className={`text-[10px] font-bold tracking-widest uppercase mb-1.5 ${numColor}`}>
            {number}
          </div>
          <div className="text-lg md:text-xl font-bold uppercase tracking-wider mb-1 leading-none">
            {title}
          </div>
          <div className="text-[10px] font-medium tracking-wider uppercase opacity-50">
            {subtitle}
          </div>
          <span className={`text-[9px] font-bold tracking-widest uppercase absolute bottom-2.5 right-3.5 ${flipHintColor}`}>
            Flip →
          </span>
        </div>

        {/* Back Face */}
        <div className={`absolute inset-0 backface-hidden rotate-y-180 flex flex-col justify-center p-[18px] select-none ${backBg} ${backTextColor}`}>
          {backContent}
        </div>
      </motion.div>
    </div>
  );
};

export default FlipCard;
