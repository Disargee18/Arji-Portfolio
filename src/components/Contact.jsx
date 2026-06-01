import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = ({ onHoverChange }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitHovered, setIsSubmitHovered] = useState(false);

  const triggerHover = (hovering) => {
    if (onHoverChange) onHoverChange(hovering);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    
    // Direct mailto link launcher
    window.location.href = `mailto:argeepaquibotprof@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact-section"
      className="w-full min-h-screen border-t-[3px] border-b-[3px] border-black dark:border-tonedwhite flex flex-col bg-[#F2F0EA] dark:bg-[#2B2B2B] select-none justify-between"
    >
      {/* Main Content Layout */}
      <div className="flex flex-col flex-grow">
        {/* Yellow Header Block */}
        <div className="bg-[#FFD600] border-b-[3px] border-black dark:border-tonedwhite px-6 md:px-10 py-6 flex items-end justify-between select-none">
          <h2 className="text-[2.2rem] font-bold uppercase tracking-tight leading-none text-black">
            Contact
          </h2>
          <small className="text-[10px] font-bold tracking-widest uppercase text-black/50 font-mono">
            SYS_TARGET • DIRECT_COMMS
          </small>
        </div>

        {/* Form and Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 bg-black dark:bg-tonedwhite gap-[2px] w-full border-b-2 border-black dark:border-tonedwhite flex-grow">
          {/* Column A: System Parameters */}
          <div className="bg-softwhite dark:bg-[#111111] p-8 flex flex-col justify-between font-mono md:col-span-1 border-b-2 md:border-b-0 border-black dark:border-tonedwhite">
            <div className="flex flex-col gap-6 text-left">
              <span className="text-[11px] font-extrabold tracking-widest uppercase text-black dark:text-tonedwhite border-b-2 border-black dark:border-tonedwhite pb-2">
                04 / COMMS_CHANNELS
              </span>
              
              <div className="flex flex-col gap-4 text-xs">
                <div>
                  <span className="text-black/45 dark:text-tonedwhite/40 block text-[9px] uppercase font-bold">RECIPIENT_ADDR</span>
                  <span className="text-black dark:text-tonedwhite font-bold break-all">argeepaquibotprof@gmail.com</span>
                </div>
                <div>
                  <span className="text-black/45 dark:text-tonedwhite/40 block text-[9px] uppercase font-bold">PROTOCOLS</span>
                  <span className="text-black dark:text-tonedwhite font-bold">SECURE • DIRECT • MAILTO</span>
                </div>
                <div>
                  <span className="text-black/45 dark:text-tonedwhite/40 block text-[9px] uppercase font-bold">ROUTING_METRIC</span>
                  <span className="text-black dark:text-tonedwhite font-bold">LOCAL_MAIL_CLIENT</span>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t-2 border-black dark:border-tonedwhite pt-4 text-[10px] text-black/60 dark:text-tonedwhite/65 leading-relaxed text-left">
              <p>
                * Form submissions are directly translated into standardized subject and body payloads and launched via local client socket systems.
              </p>
            </div>
          </div>

          {/* Columns B & C: Contact Input Form */}
          <div className="bg-softwhite dark:bg-[#111111] p-8 md:col-span-2 flex flex-col justify-center">
            <div className="max-w-xl w-full mx-auto text-left">
              <h3 className="text-3xl font-extrabold uppercase tracking-tighter text-black dark:text-tonedwhite leading-none mb-2">
                Let's <span className="italic text-[#1E4DFF] dark:text-[#FFD600]">connect</span>
              </h3>
              <p className="text-xs text-black/75 dark:text-tonedwhite/75 leading-relaxed mb-8 max-w-lg">
                Have a project in mind or just want to chat? Fill out the geometric ledger below, and the system will prefill your email client immediately.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                {/* Row: Name and Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-mono font-extrabold tracking-wider uppercase text-black dark:text-tonedwhite">
                      YOUR NAME • INPUT_01
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Argee Paquibot"
                      onMouseEnter={() => triggerHover(true)}
                      onMouseLeave={() => triggerHover(false)}
                      className="h-11 px-3 border-2 border-black dark:border-tonedwhite bg-softwhite dark:bg-[#111111] text-black dark:text-tonedwhite font-mono text-xs placeholder-black/30 dark:placeholder-tonedwhite/30 rounded-none focus:outline-none focus:border-[#1E4DFF] dark:focus:border-[#FFD600] transition-colors shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(234,232,225,1)] focus:shadow-[3px_3px_0px_0px_#1E4DFF] dark:focus:shadow-[3px_3px_0px_0px_#FFD600]"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-mono font-extrabold tracking-wider uppercase text-black dark:text-tonedwhite">
                      EMAIL ADDRESS • INPUT_02
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. client@domain.com"
                      onMouseEnter={() => triggerHover(true)}
                      onMouseLeave={() => triggerHover(false)}
                      className="h-11 px-3 border-2 border-black dark:border-tonedwhite bg-softwhite dark:bg-[#111111] text-black dark:text-tonedwhite font-mono text-xs placeholder-black/30 dark:placeholder-tonedwhite/30 rounded-none focus:outline-none focus:border-[#1E4DFF] dark:focus:border-[#FFD600] transition-colors shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(234,232,225,1)] focus:shadow-[3px_3px_0px_0px_#1E4DFF] dark:focus:shadow-[3px_3px_0px_0px_#FFD600]"
                    />
                  </div>
                </div>

                {/* Message block */}
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-mono font-extrabold tracking-wider uppercase text-black dark:text-tonedwhite">
                    MESSAGE BODY • INPUT_03
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Say hello or detail your project scope..."
                    onMouseEnter={() => triggerHover(true)}
                    onMouseLeave={() => triggerHover(false)}
                    className="p-3 border-2 border-black dark:border-tonedwhite bg-softwhite dark:bg-[#111111] text-black dark:text-tonedwhite font-mono text-xs placeholder-black/30 dark:placeholder-tonedwhite/30 rounded-none focus:outline-none focus:border-[#1E4DFF] dark:focus:border-[#FFD600] transition-colors shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(234,232,225,1)] focus:shadow-[3px_3px_0px_0px_#1E4DFF] dark:focus:shadow-[3px_3px_0px_0px_#FFD600] resize-none"
                  />
                </div>

                {/* Submit Action Button */}
                <button
                  type="submit"
                  onMouseEnter={() => {
                    triggerHover(true);
                    setIsSubmitHovered(true);
                  }}
                  onMouseLeave={() => {
                    triggerHover(false);
                    setIsSubmitHovered(false);
                  }}
                  className="h-12 w-full sm:w-fit px-8 mt-2 border-2 border-black bg-[#1E4DFF] text-white dark:border-tonedwhite dark:bg-[#FF3B30] flex items-center justify-center font-bold text-xs tracking-widest uppercase rounded-none cursor-none z-10 select-none active:scale-95 transition-transform shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(234,232,225,1)]"
                >
                  <motion.span
                    className="flex items-center gap-2"
                    animate={{ x: isSubmitHovered ? 4 : 0 }}
                  >
                    Send Message ↗
                  </motion.span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Color Strip */}
      <div className="flex h-4 w-full border-t-[3px] border-black dark:border-tonedwhite divide-x-[3px] divide-black dark:divide-tonedwhite select-none">
        <div className="flex-1 bg-[#FF3B30]" />
        <div className="flex-1 bg-[#FFD600]" />
        <div className="flex-1 bg-[#1E4DFF]" />
      </div>
    </section>
  );
};

export default Contact;
