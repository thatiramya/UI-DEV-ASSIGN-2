import { atom } from 'jotai';

export interface Project {
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

export const projectsAtom = atom<Project[]>([
  {
    id: '1',
    user: {
      name: 'Alex Churco',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    name: 'Brain Tumor Detection with VGG19',
    description: 'Deep learning model using VGG19 architecture for accurate brain tumor detection and classification from MRI scans.',
    time: '3:07 PM',
    status: 'approved',
    budget: 7500,
  },
  {
    id: '2',
    user: {
      name: 'Alex Churco',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    name: 'Autism Detection System',
    description: 'AI-powered system for early autism detection using behavioral pattern analysis and machine learning algorithms.',
    time: '9:33 AM',
    status: 'rejected',
    budget: 6500,
  }
]);