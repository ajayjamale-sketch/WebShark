import { Button } from '../ui/button'
import { Plus } from 'lucide-react'

export function PageHeader({ title, subtitle, actions, onCreate }) {
  return (
    <div className='mb-8 flex flex-wrap items-end justify-between gap-6 border-b border-border pb-6'>
      <div className="space-y-1">
        <h1 className='font-display text-3xl font-bold text-foreground uppercase tracking-tight'>{title}</h1>
        {subtitle ? <p className='text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground'>{subtitle}</p> : null}
      </div>
      <div className='flex items-center gap-3'>
        {actions}
        {onCreate ? (
          <Button size='sm' className='gap-2 rounded-none bg-primary-blue text-white font-bold text-[10px] uppercase tracking-widest border border-primary-blue' onClick={onCreate}>
            <Plus className='h-3 w-3' />
            Initialize
          </Button>
        ) : null}
      </div>
    </div>
  )
}
