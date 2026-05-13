import { Inbox } from 'lucide-react'
import { Button } from '../ui/button'

export function EmptyState({ title = 'No data found', description = 'Try adjusting filters or add new items.', onAction, actionLabel = 'Refresh' }) {
  return (
    <div className='flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 px-6 py-16 text-center dark:border-slate-700'>
      <div className='mb-4 rounded-full bg-slate-100 p-3 dark:bg-slate-800'>
        <Inbox className='h-6 w-6 text-slate-500' />
      </div>
      <h3 className='font-display text-lg font-semibold'>{title}</h3>
      <p className='mt-1 max-w-md text-sm text-slate-500 dark:text-slate-400'>{description}</p>
      {onAction ? (
        <Button variant='outline' className='mt-4' onClick={onAction}>
          {actionLabel}
        </Button>
      ) : null}
    </div>
  )
}

