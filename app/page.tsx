'use client';

import { Sidebar } from '@/components/layout/sidebar';
import { ProjectTable } from '@/components/dashboard/project-table';
import { PageTransition } from '@/components/layout/page-transition';
import { useAtom } from 'jotai';
import { projectsAtom } from '@/lib/store';

export default function Home() {
  const [projects] = useAtom(projectsAtom);

  return (
    <div className="flex h-screen">
      <Sidebar className="w-64 border-r" />
      <PageTransition>
        <div className="p-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">AI Workflow Dashboard</h1>
            <ProjectTable projects={projects} />
          </div>
        </div>
      </PageTransition>
    </div>
  );
}