import React from 'react';
import { motion } from 'framer-motion';

const educationData = [
  {
    year: "2023 - PRESENT",
    degree: "BS in Information Technology (BSIT)",
    institution: "University of Cebu - Lapu-Lapu and Mandaue (UCLM)",
    details: "Consistent Dean's Lister since college (3rd Year Student). Relevant Coursework:",
    bullets: [
      "Systems Analysis and Design",
      "Web Development",
      "Network Administration",
      "Application Development"
    ]
  },
  {
    year: "CERTIFIED",
    degree: "Cisco DevNet Associate",
    institution: "Cisco Systems",
    details: "Verified foundational competency in software development, APIs, Cisco platforms, and networking infrastructure."
  }
];

const awardsData = [
  {
    year: "04/2026",
    title: "3rd Place Winner",
    subtitle: "PSITE ICT Congress Lightning Pitch Competition",
    details: "Pitched rapid engineering solutions on software automation paradigms."
  },
  {
    year: "04/2026",
    title: "2nd Place Winner",
    subtitle: "12th UC ICT Congress Hackathon",
    details: "Collaborated in high-intensity software build sprint under strict architectural parameters."
  },
  {
    year: "03/2026",
    title: "Hackathon Champion & Best Pitcher",
    subtitle: "UCLM Hackathon Competition (Hustler Award)",
    details: "Won 1st place and recognized with the Hustler Award for outstanding technical pitching and rapid prototyping."
  },
  {
    year: "SCHOLAR",
    title: "Real Life Scholar & CHED CMSP",
    subtitle: "Real Life Foundation & Commission on Higher Education",
    details: "Consistently recognized with double academic scholarship grants (Real Life Scholar since 09/2023, CHED CMSP since 07/2023)."
  }
];

const skillsData = [
  {
    year: "FRONTEND",
    title: "Frontend Development",
    subtitle: "UI & Layout Paradigms",
    bullets: [
      "React, Tailwind CSS, Framer Motion, HTML5, CSS3, JavaScript (ES6+)"
    ]
  },
  {
    year: "EMERGENT",
    title: "Emergent Tech & AI",
    subtitle: "Agentic Systems Architect",
    bullets: [
      "Agentic AI Frameworks, Model Context Protocol (MCP), API Integrations",
      "Prompt Engineering, State Management, UI Customization"
    ]
  },
  {
    year: "INFRA",
    title: "Networking & DevOps",
    subtitle: "Systems Administration",
    bullets: [
      "Linux fundamentals, Git/GitHub, Cisco DevNet environment, RESTful APIs"
    ]
  },
  {
    year: "DYNAMICS",
    title: "Soft Skills",
    subtitle: "Project & Pitch Dynamics",
    bullets: [
      "Technical Pitching, Public Speaking, Project Leadership, Rapid Prototyping, Communication"
    ]
  }
];

const Credentials = ({ onBackClick, onHoverChange }) => {
  const triggerHover = (hovering) => {
    if (onHoverChange) onHoverChange(hovering);
  };

  return (
    <section
      id="credentials-section"
      className="w-full min-h-screen border-t-[3px] border-black dark:border-tonedwhite flex flex-col bg-[#F2F0EA] dark:bg-[#2B2B2B] select-none justify-between"
    >




      {/* Main Content Layout */}
      <div className="flex flex-col flex-grow">
        {/* Cobalt Blue Header Block */}
        <div className="bg-[#1E4DFF] border-b-[3px] border-black dark:border-tonedwhite px-6 md:px-10 py-6 flex items-end justify-between select-none">
          <h2 className="text-[2.2rem] font-bold uppercase tracking-tight leading-none text-white">
            Credentials
          </h2>
          <small className="text-[10px] font-bold tracking-widest uppercase text-white/50 font-mono">
            ARCHITECTURAL • BLUEPRINT
          </small>
        </div>



        {/* Industrial Ledger Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 bg-black dark:bg-tonedwhite gap-[2px] w-full border-b-2 border-black dark:border-tonedwhite">
          {/* Column A: Education & Certifications */}
          <div className="bg-softwhite dark:bg-[#111111] flex flex-col justify-start">
            {/* Column Label */}
            <div className="border-b-2 border-black dark:border-tonedwhite px-6 py-3 bg-[#F2F0EA] dark:bg-[#2B2B2B] flex justify-between items-center select-none font-mono">
              <span className="text-[11px] font-extrabold tracking-widest uppercase text-black dark:text-tonedwhite">
                01 / EDUCATION & TRAINING
              </span>
              <span className="text-[10px] text-black/45 dark:text-tonedwhite/45 font-bold">GRID_LOC [A]</span>
            </div>
            
            {/* Ledger Items Container */}
            <div className="flex flex-col divide-y-2 divide-black dark:divide-tonedwhite">
              {educationData.map((item, idx) => (
                <LedgerCard
                  key={idx}
                  loc={`A-${idx + 1}`}
                  time={item.year}
                  title={item.degree}
                  subtitle={item.institution}
                  description={item.details}
                  bullets={item.bullets}
                  onHoverChange={triggerHover}
                  accentColor="#FFD600" // Chrome Yellow accent for column A
                />
              ))}
            </div>
          </div>

          {/* Column B: Awards & Scholarships */}
          <div className="bg-softwhite dark:bg-[#111111] flex flex-col justify-start">
            {/* Column Label */}
            <div className="border-b-2 border-black dark:border-tonedwhite px-6 py-3 bg-[#F2F0EA] dark:bg-[#2B2B2B] flex justify-between items-center select-none font-mono">
              <span className="text-[11px] font-extrabold tracking-widest uppercase text-black dark:text-tonedwhite">
                02 / AWARDS & SCHOLARSHIPS
              </span>
              <span className="text-[10px] text-black/45 dark:text-tonedwhite/45 font-bold">GRID_LOC [B]</span>
            </div>

            {/* Ledger Items Container */}
            <div className="flex flex-col divide-y-2 divide-black dark:divide-tonedwhite">
              {awardsData.map((item, idx) => (
                <LedgerCard
                  key={idx}
                  loc={`B-${idx + 1}`}
                  time={item.year}
                  title={item.title}
                  subtitle={item.subtitle}
                  description={item.details}
                  onHoverChange={triggerHover}
                  accentColor="#FF3B30" // Cadmium Red accent for column B
                />
              ))}
            </div>
          </div>

          {/* Column C: Technical Skills */}
          <div className="bg-softwhite dark:bg-[#111111] flex flex-col justify-start">
            {/* Column Label */}
            <div className="border-b-2 border-black dark:border-tonedwhite px-6 py-3 bg-[#F2F0EA] dark:bg-[#2B2B2B] flex justify-between items-center select-none font-mono">
              <span className="text-[11px] font-extrabold tracking-widest uppercase text-black dark:text-tonedwhite">
                03 / SKILLS & BLUEPRINTS
              </span>
              <span className="text-[10px] text-black/45 dark:text-tonedwhite/45 font-bold">GRID_LOC [C]</span>
            </div>

            {/* Ledger Items Container */}
            <div className="flex flex-col divide-y-2 divide-black dark:divide-tonedwhite">
              {skillsData.map((item, idx) => (
                <LedgerCard
                  key={idx}
                  loc={`C-${idx + 1}`}
                  time={item.year}
                  title={item.title}
                  subtitle={item.subtitle}
                  bullets={item.bullets}
                  onHoverChange={triggerHover}
                  accentColor="#1E4DFF" // Cobalt Blue accent for column C
                />
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

const LedgerCard = ({ loc, time, title, subtitle, description, bullets, onHoverChange, accentColor }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    onHoverChange(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    onHoverChange(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="p-6 bg-softwhite dark:bg-[#111111] flex flex-col relative select-none cursor-none overflow-hidden transition-all duration-150 rounded-none border-l-[6px] border-l-transparent"
      style={{
        borderLeftColor: isHovered ? accentColor : 'transparent'
      }}
    >
      {/* Blueprint Coordinates */}
      <span className="absolute top-2.5 right-3 text-[9px] font-mono font-bold text-black/35 dark:text-tonedwhite/40">
        SPEC_{loc}
      </span>

      {/* Structured Time Ledger Block */}
      <div className="bg-black dark:bg-tonedwhite text-softwhite dark:text-black px-2 py-0.5 text-[9px] font-mono tracking-widest font-bold uppercase w-fit mb-3">
        {time}
      </div>

      {/* Major Titles */}
      <h4 className="text-[17px] font-extrabold tracking-tight leading-snug uppercase text-black dark:text-tonedwhite text-left">
        {title}
      </h4>
      
      <span className="text-[10px] font-bold tracking-wider text-black/45 dark:text-tonedwhite/45 uppercase mt-0.5 mb-3 text-left block">
        {subtitle}
      </span>

      {/* Decoupled structural description or bullets */}
      {description && (
        <p className="text-[11.5px] leading-relaxed text-black/75 dark:text-tonedwhite/75 text-left font-sans">
          {description}
        </p>
      )}

      {bullets && (
        <ul className="flex flex-col gap-2 text-[11px] leading-relaxed text-black/75 dark:text-tonedwhite/75 text-left font-sans mt-1">
          {bullets.map((bullet, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="inline-block w-1.5 h-1.5 bg-black dark:bg-tonedwhite shrink-0 mt-1.5 rounded-none" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Credentials;
