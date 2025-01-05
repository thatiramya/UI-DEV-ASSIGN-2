'use client';

import { motion } from 'framer-motion';
import { FadeIn } from './transitions/fade-in';
import { SlideIn } from './transitions/slide-in';
import { ScaleIn } from './transitions/scale-in';
import { usePathname } from 'next/navigation';

const pageVariants = {
  initial: { 
    opacity: 0,
    y: 20,
    scale: 0.98
  },
  animate: { 
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }
  },
  exit: { 
    opacity: 0,
    y: -20,
    scale: 0.98,
    transition: {
      duration: 0.4
    }
  }
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  // Choose transition based on route
  const getTransitionComponent = () => {
    switch (pathname) {
      case '/':
        return <FadeIn>{children}</FadeIn>;
      case '/account':
        return <SlideIn>{children}</SlideIn>;
      case '/manage':
        return <ScaleIn>{children}</ScaleIn>;
      default:
        return <FadeIn>{children}</FadeIn>;
    }
  };

  return (
    <motion.main
      key={pathname}
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="flex-1 overflow-auto p-4 md:p-8"
    >
      <motion.div variants={staggerChildren}>
        {getTransitionComponent()}
      </motion.div>
    </motion.main>
  );
}