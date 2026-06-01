import React from 'react';
import { motion } from 'framer-motion';

const projectsData = [
  {
    id: "01",
    title: "MUSIKA AI",
    subtitle: "Acoustic Soul Matcher",
    description: "Musika AI is an intelligent, web-based music player designed to solve curation fatigue by bridging the gap between a user's soul and the melodies of a thousand years. Built as a digital grimoire, it uses AI to match music to your current mood through natural language processing.",
    tech: ["React", "Bootstrap", "NodeJS", "Supabase", "Render"],
    accentColor: "#FF3B30", // Cadmium Red
    colSpan: "md:col-span-2",
    link: "https://musika-ai-t7kz.vercel.app/login"
  },
  {
    id: "02",
    title: "BAUHAUS PHOTOBOOTH",
    subtitle: "Thermal Receipt Camera",
    description: "A photobooth software for businesses to use in either their phone, tablet, computer, and automatically print it as a receipt.",
    tech: ["React", "Framer", "Javascript"],
    accentColor: "#1E4DFF", // Cobalt Blue
    colSpan: "md:col-span-1",
    link: "https://bauhaus-photobooth.vercel.app/"
  },
  {
    id: "03",
    title: "CHROME-TYPE",
    subtitle: "Structural Typography Suite",
    description: "A sans-serif typeface scaling sandbox. Analyzes optical grid alignments and calculates micro-adjustments for asymmetric typesetting.",
    tech: ["TypeScript", "Canvas API", "PostgreSQL"],
    accentColor: "#FFD600", // Chrome Yellow
    colSpan: "md:col-span-1",
  },
  {
    id: "04",
    title: "MONO-LEDGER",
    subtitle: "Blueprint Pipeline Logger",
    description: "A high-performance immutable logging system. Translates microservice state transitions into a structural ledger ledger layout designed for continuous integration workflows.",
    tech: ["Node.js", "Supabase", "D3.js", "SQL"],
    accentColor: "#1E4DFF", // Cobalt Blue
    colSpan: "md:col-span-2",
  }
];

const Projects = ({ onBackClick, onHoverChange }) => {
  const triggerHover = (hovering) => {
    if (onHoverChange) onHoverChange(hovering);
  };

  return (
    <section
      id="projects-section"
      className="w-full min-h-screen border-t-[3px] border-black dark:border-tonedwhite flex flex-col bg-[#F2F0EA] dark:bg-[#2B2B2B] select-none justify-between"
    >




      {/* Main Content Layout */}
      <div className="flex flex-col flex-grow">
        {/* Red Header Block */}
        <div className="bg-[#FF3B30] border-b-[3px] border-black dark:border-tonedwhite px-6 md:px-10 py-6 flex items-end justify-between select-none">
          <h2 className="text-[2.2rem] font-bold uppercase tracking-tight leading-none text-white">
            Projects
          </h2>
          <small className="text-[10px] font-bold tracking-widest uppercase text-white/50 font-mono">
            FORM • FOLLOWS • FUNCTION
          </small>
        </div>



        {/* Asymmetrical Grid of Projects */}
        <div className="grid grid-cols-1 md:grid-cols-3 bg-black dark:bg-tonedwhite gap-[2px] w-full border-b-2 border-black dark:border-tonedwhite">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onHoverChange={triggerHover}
            />
          ))}
        </div>
      </div>

    </section>
  );
};

const ProjectCard = ({ project, onHoverChange }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    onHoverChange(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    onHoverChange(false);
  };

  const handleClick = () => {
    if (project.link) {
      window.open(project.link, '_blank', 'noopener,noreferrer');
    }
  }; return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      className={`bg-softwhite dark:bg-[#111111] min-h-[300px] flex flex-col justify-between p-6 relative overflow-hidden transition-colors duration-150 rounded-none cursor-none ${project.colSpan} ${project.link ? 'active:scale-[0.99] hover:border-black dark:hover:border-tonedwhite' : ''}`}
    >
      {/* Structural Accent Indicators on Hover */}
      <div
        className="absolute top-0 left-0 w-full h-[5px] bg-black opacity-0 transition-opacity duration-150"
        style={{
          backgroundColor: project.accentColor,
          opacity: isHovered ? 1 : 0
        }}
      />

      <div className="flex flex-col gap-4">
        {/* Top Ledger Meta details */}
        <div className="flex justify-between items-start font-mono">
          <span className="text-[11px] font-bold text-black dark:text-tonedwhite border-2 border-black dark:border-tonedwhite px-2 py-0.5 bg-[#F2F0EA] dark:bg-[#2B2B2B]">
            SYSID_{project.id}
          </span>
          <span className="text-[10px] font-bold tracking-widest text-[#aaa] dark:text-[#888] uppercase">
            {project.subtitle}
          </span>
        </div>

        {/* Project Title Block as Physical Box */}
        <motion.div
          animate={{ x: isHovered ? 6 : 0 }}
          transition={{ ease: "linear", duration: 0.12 }}
          className="mt-2 text-left"
        >
          <h3 className="text-2xl md:text-3xl font-extrabold tracking-tighter leading-none text-black dark:text-tonedwhite uppercase">
            {project.title}
          </h3>
        </motion.div>

        {/* Description block */}
        <p className="text-xs leading-relaxed text-black/75 dark:text-tonedwhite/75 text-left font-sans mt-1">
          {project.description}
        </p>
      </div>

      {/* Bottom Row containing Tech Tags & Interaction Arrow */}
      <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-end gap-4 mt-6">
        {/* Tech tags list */}
        <div className="flex flex-wrap gap-1">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-[9px] font-mono font-bold tracking-wider uppercase px-2 py-0.5 border-2 border-black dark:border-tonedwhite transition-colors duration-150 bg-[#F2F0EA] dark:bg-[#2B2B2B] text-black dark:text-tonedwhite"
              style={{
                backgroundColor: isHovered ? project.accentColor : '',
                color: isHovered ? '#ffffff' : ''
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Linear mechanical action button */}
        <motion.div
          animate={{
            backgroundColor: isHovered ? project.accentColor : "transparent",
            color: isHovered ? "#FFFFFF" : ""
          }}
          transition={{ ease: "linear", duration: 0.12 }}
          className="h-10 w-10 border-2 border-black dark:border-tonedwhite flex items-center justify-center font-bold text-base shrink-0 select-none cursor-none text-black dark:text-tonedwhite bg-softwhite dark:bg-[#111111]"
        >
          <motion.span
            animate={{
              x: isHovered ? [0, 4, 0] : 0,
              y: isHovered ? [0, -4, 0] : 0
            }}
            transition={{
              repeat: isHovered ? Infinity : 0,
              duration: 0.6,
              ease: "linear"
            }}
          >
            ↗
          </motion.span>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
