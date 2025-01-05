'use client';

import { Sidebar } from '@/components/layout/sidebar';
import { ProjectUpload } from '@/components/manage/project-upload';
import { PageTransition } from '@/components/layout/page-transition';

export default function ManagePage() {
  return (
    <div className="flex h-screen">
      <Sidebar className="w-64 border-r" />
      <PageTransition>
        <div className="p-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">Manage AI Projects</h1>
            <ProjectUpload />
          </div>
        </div>
      </PageTransition>
    </div>
  );
}