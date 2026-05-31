import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className="relative text-center pt-12 pb-6 px-6 overflow-hidden">
      {/* Bauhaus vertical lines */}
      <div className="absolute top-0 bottom-0 left-[10%] w-[2px] bg-black opacity-[0.06] pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-[10%] w-[2px] bg-black opacity-[0.06] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-none mb-6 font-sans text-black">
          Yo, this is Arji.<br />Check this out, ey!
        </h1>
        <div className="w-[120px] h-1 bg-black mx-auto" />
      </motion.div>
    </header>
  );
};

export default Header;
