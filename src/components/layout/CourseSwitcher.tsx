import { useEffect, useRef, useState } from 'react';
import { useCourse, COURSE_GROUPS, type CourseGroup } from '../../context/CourseContext';
import { useLang } from '../../context/LangContext';

function GroupButton({ group }: { group: CourseGroup }) {
  const { course, setCourseId } = useCourse();
  const { lang } = useLang();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onMouseDown(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', onMouseDown);
    return () => document.removeEventListener('mousedown', onMouseDown);
  }, []);

  const label = lang === 'cy' ? group.labelCy : group.labelEn;

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1 rounded-lg px-3 py-1.5 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-700"
      >
        {label}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`transition-transform duration-150 ${open ? 'rotate-180' : ''}`}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {open && (
        <div className="absolute left-0 top-full z-50 pt-2 min-w-52">
          <div className="rounded-xl border border-slate-200 bg-white py-1 shadow-lg dark:border-slate-700 dark:bg-slate-800">
          {group.courses.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => { setCourseId(c.id); setOpen(false); }}
              className={[
                'w-full px-3 py-2 text-left text-sm transition-colors',
                c.id === course.id
                  ? 'bg-indigo-50 font-medium text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400'
                  : 'text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-700',
              ].join(' ')}
            >
              {lang === 'cy' ? c.titleCy : c.titleEn}
            </button>
          ))}
          </div>
        </div>
      )}
    </div>
  );
}

export function CourseSwitcher() {
  return (
    <>
      {COURSE_GROUPS.map((group, i) => (
        <div key={group.id} className="flex items-center gap-2">
          {i > 0 && <div className="h-4 w-px bg-slate-200 dark:bg-slate-700" />}
          <GroupButton group={group} />
        </div>
      ))}
    </>
  );
}
