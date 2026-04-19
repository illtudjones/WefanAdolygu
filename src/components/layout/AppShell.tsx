import { useCallback, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import type { TopicMeta } from '../../types/topic';
import { useCourse } from '../../context/CourseContext';
import { MobileNav } from './MobileNav';
import { Sidebar } from './Sidebar';
import { TopBar } from './TopBar';

const BASE = import.meta.env.BASE_URL;

export function AppShell() {
  const [topics, setTopics] = useState<TopicMeta[]>([]);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { course } = useCourse();

  useEffect(() => {
    fetch(`${BASE}content/${course.basePath}/manifest.json`)
      .then((r) => r.json())
      .then(setTopics)
      .catch(console.error);
  }, [course.basePath]);

  const openMenu = useCallback(() => setMobileOpen(true), []);
  const closeMenu = useCallback(() => setMobileOpen(false), []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <TopBar onMenuClick={openMenu} />
      <div className="flex pt-14">
        {/* Desktop sidebar */}
        <aside className="hidden lg:fixed lg:bottom-0 lg:top-14 lg:flex lg:w-60 lg:flex-col lg:border-r lg:border-slate-200 lg:bg-white lg:dark:border-slate-700 lg:dark:bg-slate-900">
          <Sidebar topics={topics} />
        </aside>

        {/* Mobile drawer */}
        <MobileNav topics={topics} open={mobileOpen} onClose={closeMenu} />

        {/* Main content */}
        <main className="min-w-0 flex-1 lg:ml-60">
          <div className="mx-auto max-w-3xl px-4 py-6 sm:px-6 lg:px-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
