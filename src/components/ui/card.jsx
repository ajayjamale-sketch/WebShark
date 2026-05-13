import { cn } from '../../utils/cn'

export function Card({ className, ...props }) {
  return (
    <div
      className={cn(
        'rounded-none border border-border bg-card text-card-foreground shadow-sm transition-all hover:bg-accent/5 relative overflow-hidden',
        className,
      )}
      {...props}
    />
  )
}

export function CardHeader({ className, ...props }) {
  return <div className={cn('mb-4 flex flex-col gap-1', className)} {...props} />
}

export function CardTitle({ className, ...props }) {
  return <h3 className={cn('font-display text-lg font-bold text-foreground', className)} {...props} />
}

export function CardDescription({ className, ...props }) {
  return <p className={cn('text-sm text-muted-foreground', className)} {...props} />
}

export function CardContent({ className, ...props }) {
  return <div className={cn('', className)} {...props} />
}

export function CardFooter({ className, ...props }) {
  return <div className={cn('mt-4', className)} {...props} />
}

