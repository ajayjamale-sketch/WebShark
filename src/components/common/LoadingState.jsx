import { Skeleton } from '../ui/skeleton'

export function LoadingState({ rows = 5 }) {
  return (
    <div className='space-y-3'>
      {Array.from({ length: rows }).map((_, index) => (
        <Skeleton key={index} className='h-12 w-full rounded-xl' />
      ))}
    </div>
  )
}

