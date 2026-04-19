import { createContext, useContext, useState, type ReactNode } from 'react';

export interface Course {
  id: string;
  titleEn: string;
  titleCy: string;
  basePath: string;
}

export interface CourseGroup {
  id: string;
  labelEn: string;
  labelCy: string;
  courses: Course[];
}

export const COURSE_GROUPS: CourseGroup[] = [
  {
    id: 'gcse',
    labelEn: 'GCSE',
    labelCy: 'TGAU',
    courses: [
      {
        id: 'wjec-gcse',
        titleEn: 'Computer Science 2025+',
        titleCy: 'Cyfrifiadureg 2025+',
        basePath: 'topics',
      },
      {
        id: 'year-11-2026',
        titleEn: 'Computer Science 2019–2026',
        titleCy: 'Cyfrifiadureg 2019–2026',
        basePath: 'year-11-2026/topics',
      },
    ],
  },
];

export const ALL_COURSES: Course[] = COURSE_GROUPS.flatMap((g) => g.courses);

interface CourseContextValue {
  course: Course;
  setCourseId: (id: string) => void;
}

const CourseContext = createContext<CourseContextValue | null>(null);

export function CourseProvider({ children }: { children: ReactNode }) {
  const [courseId, setCourseIdState] = useState<string>(() => {
    return localStorage.getItem('courseId') ?? ALL_COURSES[0].id;
  });

  const course = ALL_COURSES.find((c) => c.id === courseId) ?? ALL_COURSES[0];

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
