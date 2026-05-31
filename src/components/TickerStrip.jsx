import React from 'react';
import { motion } from 'framer-motion';

const TickerStrip = () => {
  const items = ['ARJI', 'PORTFOLIO', 'COMMUNICATOR', 'DEVELOPER', 'CREATIVE'];
  const repeatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className="overflow-hidden whitespace-nowrap border-t-2 border-b-2 border-black py-2.5 bg-white select-none">
      <motion.div
        animate={{ x: [0, '-50%'] }}
        transition={{
          ease: 'linear',
          duration: 14,
          repeat: Infinity,
        }}
        className="inline-flex gap-8 text-xs font-bold tracking-widest uppercase text-black"
      >
        {repeatedItems.map((item, idx) => (
          <React.Fragment key={idx}>
            <span className="mx-4">{item}</span>
            <span>✦</span>
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

export default TickerStrip;
