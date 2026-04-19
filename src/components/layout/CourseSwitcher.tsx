import { useCourse, COURSE_GROUPS } from '../../context/CourseContext';
import { useLang } from '../../context/LangContext';

export function CourseSwitcher() {
  const { course, setCourseId } = useCourse();
  const { lang } = useLang();

  return (
    <select
      value={course.id}
      onChange={(e) => setCourseId(e.target.value)}
      aria-label={lang === 'cy' ? 'Dewis cwrs' : 'Select course'}
      className="rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-sm text-slate-700 shadow-sm transition-colors hover:border-indigo-400 focus:border-indigo-500 focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-indigo-500"
    >
      {COURSE_GROUPS.map((group) => (
        <optgroup key={group.id} label={lang === 'cy' ? group.labelCy : group.labelEn}>
          {group.courses.map((c) => (
            <option key={c.id} value={c.id}>
              {lang === 'cy' ? c.titleCy : c.titleEn}
            </option>
          ))}
        </optgroup>
      ))}
    </select>
  );
}
