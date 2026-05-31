import React from 'react';
import { motion } from 'framer-motion';
import FlipCard from './FlipCard';
import githubBadge from '../assets/github_badge.png';
import linkedinBadge from '../assets/linkedin_badge.png';
import gmailBadge from '../assets/gmail_badge.png';

const AboutMe = ({ onBackClick, onHoverChange }) => {
  const triggerHover = (hovering) => {
    if (onHoverChange) onHoverChange(hovering);
  };

  return (
    <section
      id="about-me-section"
      className="w-full min-h-screen border-t-[3px] border-b-[3px] border-black flex flex-col bg-white select-none justify-between"
    >
      {/* Top Bauhaus Color Strip */}
      <div className="flex h-2 w-full">
        <div className="flex-1 bg-[#FFD600]" />
        <div className="flex-1 bg-[#FF3B30]" />
        <div className="flex-1 bg-[#1E4DFF]" />
      </div>

      {/* Top Header Navigation Bar */}
      <div className="border-b-[3px] border-black px-6 md:px-10 py-3 flex items-center justify-between bg-white">
        <div
          onClick={onBackClick}
          onMouseEnter={() => triggerHover(true)}
          onMouseLeave={() => triggerHover(false)}
          className="text-[11px] font-bold tracking-widest uppercase flex items-center gap-1.5 text-black cursor-none"
        >
          <i className="ti ti-arrow-left text-[13px]" aria-hidden="true" /> Home
        </div>
        <span className="text-[11px] font-bold tracking-widest uppercase text-[#aaa]">
          01 — About Me
        </span>
      </div>

      {/* Main Content Layout */}
      <div className="flex flex-col flex-grow">
        {/* Yellow Left Header Block */}
        <div className="bg-[#FFD600] border-b-[3px] border-black px-6 md:px-10 py-6 flex items-end justify-between select-none">
          <h2 className="text-[2.2rem] font-bold uppercase tracking-tight leading-none text-black">
            About Me
          </h2>
          <small className="text-[10px] font-bold tracking-widest uppercase text-black/40">
            Argee / 2026
          </small>
        </div>

        {/* Interactive Help Hint */}
        <div className="px-6 md:px-10 py-2.5 text-[10px] font-bold tracking-widest uppercase text-[#aaa] border-b-2 border-black flex items-center gap-1.5 bg-white">
          <i className="ti ti-hand-click text-[13px]" aria-hidden="true" /> Tap a card to flip
        </div>

        {/* Flip Cards Grid (1 column on mobile, 2 columns on tablet, 3 columns on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full bg-white">
          {/* Card 1: Who I Am */}
          <FlipCard
            number="01"
            title="Who I Am"
            subtitle="Argee Paquibot"
            frontBg="bg-white"
            backBg="bg-black"
            textColor="text-black"
            backTextColor="text-white"
            onHoverChange={triggerHover}
            borderClass="border-b-2 border-black sm:border-r-2 sm:border-b-2"
            backContent={
              <p className="text-xs md:text-sm leading-relaxed text-left">
                I'm Argee Paquibot, a 3rd year BSIT student at the University of Cebu Lapu-lapu and Mandaue.
              </p>
            }
          />

          {/* Card 2: Aspiration */}
          <FlipCard
            number="02"
            title="Aspiration"
            subtitle="Full-Stack Dev"
            frontBg="bg-[#FF3B30]"
            backBg="bg-[#FF3B30]"
            textColor="text-white"
            backTextColor="text-white"
            numColor="text-white/50"
            flipHintColor="text-white/35"
            onHoverChange={triggerHover}
            borderClass="border-b-2 border-black sm:border-r-0 md:border-r-2 sm:border-b-2"
            backContent={
              <p className="text-xs md:text-sm leading-relaxed text-left">
                Become a full-stack developer that bridges the gap between technical logic and great ideas — translating vision into reality.
              </p>
            }
          />

          {/* Card 3: Mindset */}
          <FlipCard
            number="03"
            title="Mindset"
            subtitle="Always dreaming big"
            frontBg="bg-white"
            backBg="bg-black"
            textColor="text-black"
            backTextColor="text-white"
            onHoverChange={triggerHover}
            borderClass="border-b-2 border-black sm:border-r-2 md:border-r-0 sm:border-b-2"
            backContent={
              <p className="text-xs md:text-sm leading-relaxed text-left">
                Always daydreaming about the next big startup. Software is a lever for impact — and I'm building myself into the kind of developer who can pull it hard.
              </p>
            }
          />

          {/* Card 4: Tech Stack */}
          <FlipCard
            number="04"
            title="Tech Stack"
            subtitle="8 Technologies"
            frontBg="bg-[#FFD600]"
            backBg="bg-[#FFD600]"
            textColor="text-black"
            backTextColor="text-black"
            numColor="text-black/30"
            onHoverChange={triggerHover}
            borderClass="border-b-2 border-black sm:border-r-0 md:border-r-2 sm:border-b-2 md:border-b-0"
            backContent={
              <div className="flex flex-wrap gap-1.5 mt-1 justify-start">
                {['Java', 'JavaScript', 'React', 'Python', 'PHP', 'Node.js', 'Supabase', 'PostgreSQL'].map((tech) => (
                  <span
                    key={tech}
                    className="text-[9px] font-bold tracking-wider uppercase px-2 py-0.5 border-[2px] border-black bg-white/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            }
          />

          {/* Card 5: Hobbies */}
          <FlipCard
            number="05"
            title="Hobbies"
            subtitle="Beyond the screen"
            frontBg="bg-[#1E4DFF]"
            backBg="bg-[#1E4DFF]"
            textColor="text-white"
            backTextColor="text-white"
            numColor="text-white/50"
            flipHintColor="text-white/35"
            onHoverChange={triggerHover}
            borderClass="border-b-2 border-black sm:border-r-2 md:border-r-2 sm:border-b-0 md:border-b-0"
            backContent={
              <div className="flex flex-col gap-3.5 text-left justify-center h-full">
                <div className="flex items-center gap-2 text-xs md:text-sm">
                  <i className="ti ti-microphone text-base shrink-0" aria-hidden="true" />
                  <span className="leading-tight">Public speaking — making complex ideas land.</span>
                </div>
                <div className="flex items-center gap-2 text-xs md:text-sm">
                  <i className="ti ti-music text-base shrink-0" aria-hidden="true" />
                  <span className="leading-tight">Drums & bass guitar.</span>
                </div>
                <div className="flex items-center gap-2 text-xs md:text-sm">
                  <i className="ti ti-book text-base shrink-0" aria-hidden="true" />
                  <span className="leading-tight">Fiction & world-building.</span>
                </div>
              </div>
            }
          />

          {/* Slot 6: "You can reach me out here" Contact Card */}
          <div className="w-full h-[280px] bg-white flex flex-col justify-center items-center p-6 border-0 border-black sm:border-r-0 md:border-r-0 sm:border-b-0 md:border-b-0 select-none">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#aaa] mb-6 text-center select-none">
              you can reach me out here
            </h3>

            {/* Hyperlink Badges */}
            <div className="flex gap-4 items-center justify-center">
              {/* GitHub */}
              <a
                href="https://github.com/Disargee18"
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 md:w-16 md:h-16 border-2 border-black hover:scale-105 active:scale-95 transition-transform overflow-hidden cursor-none shadow-none bg-white"
                onMouseEnter={() => triggerHover(true)}
                onMouseLeave={() => triggerHover(false)}
              >
                <img src={githubBadge} alt="GitHub" className="w-full h-full object-cover" />
              </a>

              {/* Gmail */}
              <a
                href="mailto:argee@gmail.com"
                className="w-14 h-14 md:w-16 md:h-16 border-2 border-black hover:scale-105 active:scale-95 transition-transform overflow-hidden cursor-none shadow-none bg-white"
                onMouseEnter={() => triggerHover(true)}
                onMouseLeave={() => triggerHover(false)}
              >
                <img src={gmailBadge} alt="Gmail" className="w-full h-full object-cover" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 md:w-16 md:h-16 border-2 border-black hover:scale-105 active:scale-95 transition-transform overflow-hidden cursor-none shadow-none bg-white"
                onMouseEnter={() => triggerHover(true)}
                onMouseLeave={() => triggerHover(false)}
              >
                <img src={linkedinBadge} alt="LinkedIn" className="w-full h-full object-cover" />
              </a>
            </div>
          </div>
        </div>
      </div>



      {/* Bottom Color Strip */}
      <div className="flex h-2 w-full">
        <div className="flex-1 bg-[#1E4DFF]" />
        <div className="flex-1 bg-[#FF3B30]" />
        <div className="flex-1 bg-[#FFD600]" />
      </div>
    </section>
  );
};

export default AboutMe;
