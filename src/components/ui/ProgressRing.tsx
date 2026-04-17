interface ProgressRingProps {
  value: number;
  size?: number;
  stroke?: number;
  className?: string;
}

export function ProgressRing({ value, size = 56, stroke = 5, className }: ProgressRingProps) {
  const r = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ - (value / 100) * circ;

  return (
    <svg width={size} height={size} className={className} aria-label={`${value}% complete`}>
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="currentColor" strokeWidth={stroke} className="text-slate-200 dark:text-slate-700" />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke="currentColor"
        strokeWidth={stroke}
        strokeDasharray={circ}
        strokeDashoffset={offset}
        strokeLinecap="round"
        className="text-indigo-500 transition-all duration-700"
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
      />
      <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize={size * 0.22} fontWeight="600" fill="currentColor" className="text-slate-700 dark:text-slate-200">
        {value}%
      </text>
    </svg>
  );
}
