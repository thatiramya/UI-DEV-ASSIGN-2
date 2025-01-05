'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { IndianRupee, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface Project {
  id: string;
  user: {
    name: string;
    avatar: string;
  };
  name: string;
  description: string;
  time: string;
  status: 'approved' | 'rejected' | 'pending';
  budget: number;
}

const tableRowVariants = {
  hidden: { 
    opacity: 0,
    x: -20,
  },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }
  }),
  hover: {
    scale: 1.01,
    backgroundColor: "rgba(var(--muted) / 0.5)",
    transition: {
      duration: 0.2
    }
  }
};

export function ProjectTable({ projects }: { projects: Project[] }) {
  const formatIndianCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="overflow-hidden rounded-lg border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="min-w-[200px]">User</TableHead>
            <TableHead className="min-w-[200px]">Name</TableHead>
            <TableHead className="hidden md:table-cell">Description</TableHead>
            <TableHead className="min-w-[100px]">Time</TableHead>
            <TableHead className="hidden sm:table-cell">AI Performance</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Budget</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {projects.map((project, index) => (
            <motion.tr
              key={project.id}
              variants={tableRowVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              custom={index}
              className="group"
            >
              <TableCell>
                <motion.div 
                  className="flex items-center gap-2"
                  whileHover={{ x: 5 }}
                >
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={project.user.avatar} />
                    <AvatarFallback>AC</AvatarFallback>
                  </Avatar>
                  <span className="font-medium">{project.user.name}</span>
                </motion.div>
              </TableCell>
              <TableCell className="font-medium">{project.name}</TableCell>
              <TableCell className="hidden md:table-cell max-w-[300px] truncate">
                {project.description}
              </TableCell>
              <TableCell>{project.time}</TableCell>
              <TableCell className="hidden sm:table-cell">
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Link
                    href={`/insights/${project.id}`}
                    className="text-blue-500 hover:underline flex items-center"
                  >
                    Insights
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </motion.div>
              </TableCell>
              <TableCell>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Badge 
                    variant={project.status === 'approved' ? 'default' : 
                            project.status === 'rejected' ? 'destructive' : 'secondary'}
                    className={project.status === 'approved' ? 'bg-green-500 hover:bg-green-600' : ''}
                  >
                    {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                  </Badge>
                </motion.div>
              </TableCell>
              <TableCell>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Badge variant="outline" className="flex items-center w-fit gap-1">
                    <IndianRupee className="h-4 w-4" />
                    {formatIndianCurrency(project.budget * 83)}
                  </Badge>
                </motion.div>
              </TableCell>
            </motion.tr>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}