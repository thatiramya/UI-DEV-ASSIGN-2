'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { useAtom } from 'jotai';
import { projectsAtom } from '@/lib/store';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

const formVariants = {
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

export function ProjectUpload() {
  const [projects, setProjects] = useAtom(projectsAtom);
  const { toast } = useToast();
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    budget: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newProject = {
      id: (projects.length + 1).toString(),
      user: {
        name: 'Alex Churco',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      name: formData.name,
      description: formData.description,
      time: new Date().toLocaleTimeString('en-US', { 
        hour: 'numeric',
        minute: '2-digit',
        hour12: true 
      }),
      status: 'pending',
      budget: Number(formData.budget),
    };

    setProjects([...projects, newProject]);
    
    toast({
      title: "Project Created",
      description: "Your project has been successfully uploaded.",
    });

    setFormData({ name: '', description: '', budget: '' });
    
    setTimeout(() => {
      router.push('/');
    }, 1000);
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={formVariants}
    >
      <Card>
        <CardHeader>
          <CardTitle>Upload New AI Project</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-4">
              <motion.div 
                className="grid gap-2"
                whileFocus="focus"
                variants={inputVariants}
              >
                <Label htmlFor="name">Project Name</Label>
                <Input
                  id="name"
                  placeholder="Enter project name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </motion.div>
              <motion.div 
                className="grid gap-2"
                whileFocus="focus"
                variants={inputVariants}
              >
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe your AI project"
                  rows={4}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  required
                />
              </motion.div>
              <motion.div 
                className="grid gap-2"
                whileFocus="focus"
                variants={inputVariants}
              >
                <Label htmlFor="budget">Budget (in Indian Rupees)</Label>
                <Input
                  id="budget"
                  type="number"
                  placeholder="Enter project budget"
                  min="0"
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  required
                />
              </motion.div>
            </div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button type="submit">Upload Project</Button>
            </motion.div>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
}