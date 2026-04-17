import { clsx } from 'clsx';

type Variant = 'default' | 'beginner' | 'intermediate' | 'advanced' | 'success' | 'warning' | 'danger';

interface BadgeProps {
  children: string;
  variant?: Variant;
  className?: string;
}

const variantClasses: Record<Variant, string> = {
  default: 'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300',
  beginner: 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-400',
  intermediate: 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-400',
  advanced: 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-400',
  success: 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-400',
  warning: 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-400',
  danger: 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-400',
};

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
        variantClasses[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
