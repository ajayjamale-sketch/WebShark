import * as React from 'react'
import { cn } from '../../utils/cn'

const Input = React.forwardRef(({ className, type = 'text', ...props }, ref) => (
  <input
    type={type}
    className={cn(
      'flex h-10 w-full rounded-none border border-input bg-background px-3 py-2 text-sm text-foreground transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50 placeholder:text-muted-foreground hover:border-accent-cyan/50',
      className,
    )}
    ref={ref}
    {...props}
  />
))

Input.displayName = 'Input'

export { Input }

