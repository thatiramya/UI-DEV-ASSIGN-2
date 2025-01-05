'use client';

import { motion } from 'framer-motion';
import { LogOut } from 'lucide-react';
import { Button } from './button';

interface AnimatedLogoutButtonProps {
  onClick: () => void;
}

export function AnimatedLogoutButton({ onClick }: AnimatedLogoutButtonProps) {
  const buttonVariants = {
    initial: { 
      background: 'linear-gradient(45deg, #ff69b4 0%, #ff1493 100%)',
      scale: 1 
    },
    hover: {
      background: [
        'linear-gradient(45deg, #ff69b4 0%, #ff1493 100%)',
        'linear-gradient(225deg, #ff69b4 0%, #ff1493 100%)',
        'linear-gradient(405deg, #ff69b4 0%, #ff1493 100%)'
      ],
      scale: 1.05,
      transition: {
        background: {
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse"
        },
        scale: {
          duration: 0.2
        }
      }
    },
    tap: {
      scale: 0.95
    }
  };

  const iconVariants = {
    initial: { x: 0, rotate: 0 },
    hover: {
      x: [0, 5, 0],
      rotate: [0, -10, 10, -10, 0],
      transition: {
        duration: 0.5,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };

  const glowVariants = {
    initial: { opacity: 0 },
    hover: {
      opacity: [0, 0.5, 0],
      scale: [1, 1.2, 1],
      transition: {
        duration: 1.5,
        repeat: Infinity
      }
    }
  };

  return (
    <div className="relative">
      <motion.div
        className="absolute inset-0 rounded-lg bg-pink-500/30 blur-lg"
        variants={glowVariants}
        initial="initial"
        whileHover="hover"
      />
      <motion.div
        className="relative"
        variants={buttonVariants}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
      >
        <Button 
          variant="ghost"
          onClick={onClick}
          className="w-full justify-start text-pink-100 hover:text-white hover:bg-transparent relative overflow-hidden group"
        >
          <motion.span
            className="flex items-center"
            variants={iconVariants}
          >
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </motion.span>
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
          />
        </Button>
      </motion.div>
    </div>
  );
}