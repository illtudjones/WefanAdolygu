import { type ReactNode } from 'react';
import { clsx } from 'clsx';

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export function Card({ children, className, onClick }: CardProps) {
  return (
    <div
      className={clsx(
        'rounded-xl border border-slate-200 bg-white p-4 shadow-sm',
        'dark:border-slate-700 dark:bg-slate-800',
        onClick && 'cursor-pointer hover:shadow-md transition-shadow',
        className,
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
