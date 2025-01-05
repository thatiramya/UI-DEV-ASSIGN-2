'use client';

import { cn } from '@/lib/utils';
import { ScrollArea } from '@/components/ui/scroll-area';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  LayoutDashboard,
  Brain,
  CreditCard,
  Menu,
  X
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';
import { AnimatedLogoutButton } from '@/components/ui/animated-logout-button';

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const { toast } = useToast();
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const checkSize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsOpen(window.innerWidth >= 768);
    };
    
    checkSize();
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  const handleLogout = () => {
    toast({
      title: "Logged out successfully",
      description: "You have been logged out of your account.",
    });
    
    setTimeout(() => {
      router.push('/');
    }, 1000);
  };

  const routes = [
    {
      label: 'AI Overview',
      icon: LayoutDashboard,
      href: '/',
      color: 'text-sky-500',
    },
    {
      label: 'Manage',
      icon: Brain,
      href: '/manage',
      color: 'text-violet-500',
    },
    {
      label: 'Account & Payments',
      icon: CreditCard,
      href: '/account',
      color: 'text-pink-700',
    },
  ];

  const sidebarVariants = {
    open: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    closed: {
      x: "-100%",
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    }
  };

  const overlayVariants = {
    open: {
      opacity: 0.5,
      transition: {
        duration: 0.3
      }
    },
    closed: {
      opacity: 0,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <>
      {isMobile && (
        <Button
          variant="ghost"
          size="icon"
          className="fixed top-4 left-4 z-50 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      )}
      
      <AnimatePresence mode="wait">
        {isOpen && (
          <>
            <motion.div
              variants={sidebarVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className={cn(
                'fixed md:relative z-40 min-h-screen bg-background/95 backdrop-blur-lg border-r border-pink-500/20',
                isMobile ? 'w-[280px]' : 'w-64',
                className
              )}
            >
              <div className="flex flex-col h-full">
                <div className="flex-1 py-6">
                  <div className="px-3 mb-6">
                    <h2 className="px-4 text-lg font-semibold text-pink-300">AI Manager</h2>
                  </div>
                  <ScrollArea className="px-3">
                    <div className="space-y-1">
                      {routes.map((route) => (
                        <motion.div
                          key={route.href}
                          whileHover={{ x: 5 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Link
                            href={route.href}
                            onClick={() => isMobile && setIsOpen(false)}
                            className={cn(
                              'text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition',
                              pathname === route.href
                                ? 'text-pink-300 bg-pink-500/10'
                                : 'text-muted-foreground'
                            )}
                          >
                            <div className="flex items-center flex-1">
                              <route.icon className={cn('h-5 w-5 mr-3', route.color)} />
                              {route.label}
                            </div>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </div>
                <div className="p-4 border-t border-pink-500/20 mt-auto">
                  <div className="flex items-center gap-4 mb-4">
                    <Avatar>
                      <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
                      <AvatarFallback>AC</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-pink-300">Alex Churco</p>
                      <p className="text-xs text-pink-300/70">alex.churco@example.com</p>
                    </div>
                  </div>
                  <AnimatedLogoutButton onClick={handleLogout} />
                </div>
              </div>
            </motion.div>
            {isMobile && (
              <motion.div
                variants={overlayVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="fixed inset-0 bg-black z-30"
                onClick={() => setIsOpen(false)}
              />
            )}
          </>
        )}
      </AnimatePresence>
    </>
  );
}