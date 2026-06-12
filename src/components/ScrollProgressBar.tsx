import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

export const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();

  // Create a spring configuration for perfect buttery-smooth reactive progress transitions
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001
  });

  return (
    <>
      {/* Background track indicator - highly luxurious subtle outline */}
      <div
        id="scroll-progress-track"
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-white/[0.03] z-[9999] pointer-events-none"
      />

      {/* Primary high-definition active status bar */}
      <motion.div
        id="scroll-progress-bar"
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 z-[9999] origin-left pointer-events-none"
        style={{ scaleX }}
      />

      {/* Custom light ambient visual overlay for a gorgeous glass-emitting subtle bloom */}
      <motion.div
        id="scroll-progress-glow"
        className="fixed top-0 left-0 right-0 h-[6px] bg-gradient-to-r from-blue-500/50 via-indigo-500/50 to-purple-500/50 z-[9998] origin-left opacity-70 blur-[4px] pointer-events-none"
        style={{ scaleX }}
      />
    </>
  );
};

export default ScrollProgressBar;
