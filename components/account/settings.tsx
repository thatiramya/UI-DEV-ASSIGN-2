'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Camera } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const inputVariants = {
  focus: {
    scale: 1.02,
    transition: {
      duration: 0.2
    }
  }
};

export function AccountSettings() {
  const { toast } = useToast();
  const [profileImage, setProfileImage] = useState("https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80");

  const handleImageChange = () => {
    toast({
      title: "Profile Picture",
      description: "Profile picture update functionality will be implemented soon.",
    });
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={cardVariants}
    >
      <Card>
        <CardHeader>
          <CardTitle>Profile Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <motion.div 
            className="flex items-center gap-4"
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative group">
              <Avatar className="h-20 w-20">
                <AvatarImage src={profileImage} alt="Profile picture" />
                <AvatarFallback>AC</AvatarFallback>
              </Avatar>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute bottom-0 right-0 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  onClick={handleImageChange}
                >
                  <Camera className="h-4 w-4" />
                </Button>
              </motion.div>
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-medium">Profile Picture</h3>
              <p className="text-sm text-muted-foreground">
                Click the camera icon to update your profile picture
              </p>
            </div>
          </motion.div>
          <div className="grid gap-4">
            <motion.div 
              className="grid gap-2"
              whileFocus="focus"
              variants={inputVariants}
            >
              <label htmlFor="name">Name</label>
              <Input id="name" defaultValue="Alex Churco" />
            </motion.div>
            <motion.div 
              className="grid gap-2"
              whileFocus="focus"
              variants={inputVariants}
            >
              <label htmlFor="email">Email</label>
              <Input id="email" type="email" defaultValue="alex.churco@example.com" />
            </motion.div>
          </div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button>Save Changes</Button>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
}