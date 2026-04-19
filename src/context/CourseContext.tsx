import { createContext, useContext, useState, type ReactNode } from 'react';

export interface Course {
  id: string;
  title: string;
  subtitle: string;
  basePath: string;
}

export const COURSES: Course[] = [
  {
    id: 'wjec-gcse',
    title: 'WJEC GCSE Computer Science',
    subtitle: 'Unit 1 — Current',
    basePath: 'topics',
  },
  {
    id: 'year-11-2026',
    title: 'Year 11 2026',
    subtitle: 'Legacy Course',
    basePath: 'year-11-2026/topics',
  },
];

interface CourseContextValue {
  course: Course;
  setCourseId: (id: string) => void;
}

const CourseContext = createContext<CourseContextValue | null>(null);

export function CourseProvider({ children }: { children: ReactNode }) {
  const [courseId, setCourseIdState] = useState<string>(() => {
    return localStorage.getItem('courseId') ?? COURSES[0].id;
  });

  const course = COURSES.find((c) => c.id === courseId) ?? COURSES[0];

  function setCourseId(id: string) {
    localStorage.setItem('courseId', id);
    setCourseIdState(id);
  }

  return (
    <CourseContext.Provider value={{ course, setCourseId }}>
      {children}
    </CourseContext.Provider>
  );
}

export function useCourse(): CourseContextValue {
  const ctx = useContext(CourseContext);
  if (!ctx) throw new Error('useCourse must be used within CourseProvider');
  return ctx;
}
