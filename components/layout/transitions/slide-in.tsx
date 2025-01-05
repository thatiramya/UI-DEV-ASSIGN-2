'use client';

import { motion } from 'framer-motion';

const slideInVariants = {
  hidden: { 
    opacity: 0,
    x: -50,
    scale: 0.95
  },
  visible: { 
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      mass: 1
    }
  },
  exit: {
    opacity: 0,
    x: 50,
    scale: 0.95,
    transition: {
      duration: 0.3
    }
  }
};

export function SlideIn({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={slideInVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {children}
    </motion.div>
  );
}