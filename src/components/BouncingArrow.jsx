import React from 'react';
import { motion } from 'framer-motion';

const BouncingArrow = ({ delay = 0 }) => {
  return (
    <div className="text-center py-4">
      <motion.span
        animate={{ y: [0, -12, 0] }}
        transition={{
          repeat: Infinity,
          duration: 1.4,
          ease: 'easeInOut',
          delay: delay,
        }}
        className="inline-block text-4xl font-bold text-black dark:text-tonedwhite select-none pointer-events-none"
      >
        ↓
      </motion.span>
    </div>
  );
};

export default BouncingArrow;
