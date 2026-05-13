import { cn } from '../../utils/cn'

export function Table({ className, ...props }) {
  return (
    <div className='w-full overflow-auto'>
      <table className={cn('w-full caption-bottom text-sm', className)} {...props} />
    </div>
  )
}

export function TableHeader({ className, ...props }) {
  return <thead className={cn('[&_tr]:border-b [&_tr]:border-slate-200 dark:[&_tr]:border-slate-700', className)} {...props} />
}

export function TableBody({ className, ...props }) {
  return <tbody className={cn('[&_tr:last-child]:border-0', className)} {...props} />
}

export function TableRow({ className, ...props }) {
  return <tr className={cn('border-b border-slate-200 transition-colors hover:bg-slate-50/70 dark:border-slate-700 dark:hover:bg-slate-800/50', className)} {...props} />
}

export function TableHead({ className, ...props }) {
  return <th className={cn('h-10 px-3 text-left align-middle text-xs font-semibold uppercase tracking-wide text-slate-500', className)} {...props} />
}

export function TableCell({ className, ...props }) {
  return <td className={cn('p-3 align-middle text-slate-700 dark:text-slate-200', className)} {...props} />
}

