'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

// SVG paths for the doodles
const drawVariants: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: { 
    pathLength: 1, 
    opacity: 1,
    transition: { 
      pathLength: { duration: 0.6, ease: "easeInOut" },
      opacity: { duration: 0.1 }
    }
  }
};

const SmileyCircle = () => (
  <svg className="absolute -inset-2 w-[140%] h-[140%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" viewBox="0 0 40 40">
    <motion.path
      d="M 20 4 C 30 4 36 10 36 20 C 36 30 30 35 20 35 C 10 35 4 30 4 20 C 4 10 10 5 20 4 Z"
      fill="none"
      stroke="#3f3f2e"
      strokeWidth="2.5"
      strokeLinecap="round"
      variants={drawVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    />
  </svg>
);

const LinkDoodles = () => (
  <svg className="absolute w-[200%] h-[300%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" viewBox="0 0 100 100">
    {/* Ellipse */}
    <motion.path
      d="M 15 50 C 30 30 70 30 85 50 C 100 70 70 85 50 85 C 20 85 0 70 15 50 Z"
      fill="none"
      stroke="#3f3f2e"
      strokeWidth="2"
      strokeLinecap="round"
      variants={drawVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    />
    {/* Star (Top Left) */}
    <motion.path
      d="M 10 25 Q 15 25 15 20 Q 15 25 20 25 Q 15 25 15 30 Q 15 25 10 25 Z"
      fill="none"
      stroke="#3f3f2e"
      strokeWidth="2"
      strokeLinecap="round"
      variants={drawVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={{ delay: 0.2 }}
    />
    {/* Face (Top Center) */}
    <g transform="translate(40, 10)">
      <motion.path
        d="M 5 15 C 5 25 15 25 15 15"
        fill="none"
        stroke="#3f3f2e"
        strokeWidth="1.5"
        strokeLinecap="round"
        variants={drawVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        transition={{ delay: 0.3 }}
      />
      {/* Hair spikes */}
      <motion.path
        d="M 3 10 L 6 5 L 10 8 L 14 5 L 17 10"
        fill="none"
        stroke="#3f3f2e"
        strokeWidth="1.5"
        strokeLinejoin="round"
        variants={drawVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        transition={{ delay: 0.4 }}
      />
      {/* Eyes and Mouth */}
      <motion.circle cx="7" cy="15" r="0.5" fill="#3f3f2e" variants={drawVariants} initial="hidden" animate="visible" exit="hidden" />
      <motion.circle cx="13" cy="15" r="0.5" fill="#3f3f2e" variants={drawVariants} initial="hidden" animate="visible" exit="hidden" />
      <motion.path d="M 8 18 Q 10 20 12 18" fill="none" stroke="#3f3f2e" strokeWidth="1" strokeLinecap="round" variants={drawVariants} initial="hidden" animate="visible" exit="hidden" />
    </g>
    {/* Squiggle (Top Right) */}
    <motion.path
      d="M 85 15 C 95 5 80 25 95 30"
      fill="none"
      stroke="#3f3f2e"
      strokeWidth="2"
      strokeLinecap="round"
      variants={drawVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={{ delay: 0.1 }}
    />
    {/* Sunburst lines (Bottom Left) */}
    <motion.path d="M 12 75 L 5 82 M 20 82 L 15 90 M 30 85 L 28 95" fill="none" stroke="#3f3f2e" strokeWidth="2" strokeLinecap="round" variants={drawVariants} initial="hidden" animate="visible" exit="hidden" transition={{ delay: 0.3 }} />
  </svg>
);

const NavItem = ({ label, targetId, isSmiley = false }: { label: string, targetId: string, isSmiley?: boolean }) => {
  const [isHovered, setIsHovered] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div 
      className="relative flex items-center justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence>
        {isHovered && (
          isSmiley ? <SmileyCircle /> : <LinkDoodles />
        )}
      </AnimatePresence>
      <button 
        onClick={() => scrollTo(targetId)}
        className={`text-[#3f3f2e] font-kalam ${isSmiley ? 'text-[22px] md:text-[26px] font-bold' : 'text-[16px] md:text-[20px]'} hover:text-[#df7a3e] transition-colors cursor-pointer bg-transparent border-none relative z-10`}
      >
        {label}
      </button>
    </div>
  );
};

export function Navbar() {
  const [isAtTop, setIsAtTop] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isNavHovered, setIsNavHovered] = useState(false);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY < 50);
      setIsScrolling(true);

      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      
      scrollTimeout.current = setTimeout(() => {
        setIsScrolling(false);
      }, 1500); // Navbar hides after 1.5 seconds of not scrolling
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, []);

  return (
    <motion.nav 
      className="fixed top-0 left-0 w-full z-50 pointer-events-auto"
      initial={{ y: 0, backgroundColor: 'rgba(244, 239, 221, 0)' }}
      animate={{ 
        y: (!isAtTop && !isScrolling && !isNavHovered) ? "-100%" : 0,
        backgroundColor: isAtTop ? 'rgba(244, 239, 221, 0)' : 'rgba(207, 96, 247, 0.85)',
        backdropFilter: isAtTop ? 'blur(0px)' : 'blur(8px)'
      }}
      transition={{ duration: 0.3 }}
      onMouseEnter={() => setIsNavHovered(true)}
      onMouseLeave={() => setIsNavHovered(false)}
      style={{ borderBottom: (!isAtTop && (isScrolling || isNavHovered)) ? '1px solid rgba(201, 194, 163, 0.4)' : '1px solid transparent' }}
    >
      <div className={`flex items-center justify-center gap-[40px] md:gap-[60px] transition-all duration-300 ${isAtTop ? 'py-[30px] md:py-[50px]' : 'py-[15px] md:py-[20px]'}`}>
        <NavItem label=":)" targetId="hero-section" isSmiley={true} />
        <NavItem label="about" targetId="profile-section" />
        <NavItem label="work" targetId="works-section" />
        <NavItem label="projects" targetId="projects-section" />
        <NavItem label="connect" targetId="contact-section" />
      </div>
    </motion.nav>
  );
}
