import { cn } from '../../utils/cn'

export function Progress({ value = 0, className, indicatorClassName }) {
  return (
    <div className={cn('h-2 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700', className)}>
      <div
        className={cn('h-full rounded-full bg-primary transition-all', indicatorClassName)}
        style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
      />
    </div>
  )
}

