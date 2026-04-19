import { useCourse, COURSES } from '../../context/CourseContext';

export function CourseSwitcher() {
  const { course, setCourseId } = useCourse();

  return (
    <div className="px-3 pb-3">
      <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
        Course
      </label>
      <select
        value={course.id}
        onChange={(e) => setCourseId(e.target.value)}
        className="w-full rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-sm text-slate-700 shadow-sm transition-colors hover:border-indigo-400 focus:border-indigo-500 focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-indigo-500"
      >
        {COURSES.map((c) => (
          <option key={c.id} value={c.id}>
            {c.title}
          </option>
        ))}
      </select>
      <p className="mt-1 text-xs text-slate-400 dark:text-slate-500">{course.subtitle}</p>
    </div>
  );
}
