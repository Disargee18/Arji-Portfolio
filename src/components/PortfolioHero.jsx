import React from 'react';
import { motion } from 'framer-motion';
import ColorStrip from './ColorStrip';
import TickerStrip from './TickerStrip';
import Header from './Header';
import BouncingArrow from './BouncingArrow';
import PortfolioCard from './PortfolioCard';

const PortfolioHero = ({ onCardHoverChange, onAboutClick, onProjectsClick, onCredentialsClick }) => {
  const cardRowVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.15,
      }
    }
  };

  const handleCardClick = (section) => {
    if (section === 'About Me' && onAboutClick) {
      onAboutClick();
    } else if (section === 'Projects' && onProjectsClick) {
      onProjectsClick();
    } else if (section === 'Credentials' && onCredentialsClick) {
      onCredentialsClick();
    }
  };

  return (
    <>
      <ColorStrip />
      <TickerStrip />
      <Header />
      <BouncingArrow />

      <main className="flex-1 px-6 pb-6">
        <motion.div
          variants={cardRowVariants}
          initial="initial"
          animate="animate"
          className="flex flex-col md:flex-row gap-4 max-w-5xl mx-auto items-stretch"
        >
          <PortfolioCard
            label="ABOUT ME"
            bgColor="#FFD600"
            number="01"
            onClick={() => handleCardClick('About Me')}
            onHoverChange={onCardHoverChange}
            circleStyle={{
              width: 160,
              height: 160,
              top: -40,
              right: -40,
            }}
            circleBorderColor="border-black/15"
            arrowColor="text-black"
            accents={
              <>
                <div className="absolute bottom-[14px] left-[14px] w-[18px] h-[18px] bg-black dark:bg-tonedwhite rounded-full pointer-events-none" />
                <div className="absolute top-[14px] right-[14px] w-[14px] h-[14px] bg-black dark:bg-tonedwhite opacity-20 pointer-events-none" />
              </>
            }
          />

          <PortfolioCard
            label="PROJ ECTS"
            bgColor="#FF3B30"
            textColor="text-white"
            number="02"
            numColor="text-white/50"
            onClick={() => handleCardClick('Projects')}
            onHoverChange={onCardHoverChange}
            circleStyle={{
              width: 200,
              height: 200,
              bottom: -60,
              left: -60,
            }}
            circleBorderColor="border-white/20"
            arrowColor="text-white"
            accents={
              <>
                <div className="absolute top-[14px] right-[14px] w-[18px] h-[18px] bg-white opacity-40 rounded-full pointer-events-none" />
                <div className="absolute bottom-[14px] left-[14px] w-[14px] h-[14px] bg-white opacity-25 pointer-events-none" />
              </>
            }
          />

          <PortfolioCard
            label="CREDE NTIALS"
            bgColor="#1E4DFF"
            textColor="text-white"
            number="03"
            numColor="text-white/50"
            onClick={() => handleCardClick('Credentials')}
            onHoverChange={onCardHoverChange}
            circleStyle={{
              width: 140,
              height: 140,
              top: 20,
              left: '50%',
              x: '-50%',
            }}
            circleBorderColor="border-white/20"
            arrowColor="text-[#FFD600]"
            accents={
              <>
                <div className="absolute bottom-[14px] right-[14px] w-[18px] h-[18px] bg-[#FFD600] rounded-full pointer-events-none" />
                <div className="absolute top-[14px] left-[14px] w-[14px] h-[14px] bg-[#FF3B30] opacity-50 pointer-events-none" />
              </>
            }
          />
        </motion.div>
      </main>
    </>
  );
};

export default PortfolioHero;
