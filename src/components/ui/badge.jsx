import { cva } from 'class-variance-authority'
import { cn } from '../../utils/cn'

const badgeVariants = cva('inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold', {
  variants: {
    variant: {
      default: 'bg-primary/10 text-primary dark:bg-primary/20',
      success: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300',
      warning: 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300',
      danger: 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300',
      muted: 'bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-200',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

export function Badge({ className, variant, ...props }) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />
}

