import * as SelectPrimitive from '@radix-ui/react-select'
import { Check, ChevronDown, ChevronUp } from 'lucide-react'
import { cn } from '../../utils/cn'

const Select = SelectPrimitive.Root

const SelectTrigger = ({ className, children, ...props }) => (
  <SelectPrimitive.Trigger
    className={cn(
      'flex h-10 w-full items-center justify-between rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-900',
      className,
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon>
      <ChevronDown className='h-4 w-4 opacity-70' />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
)

const SelectValue = SelectPrimitive.Value

const SelectContent = ({ className, children, ...props }) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      className={cn('z-50 max-h-72 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl dark:border-slate-700 dark:bg-slate-900', className)}
      {...props}
    >
      <SelectPrimitive.ScrollUpButton className='flex h-7 items-center justify-center'>
        <ChevronUp className='h-4 w-4' />
      </SelectPrimitive.ScrollUpButton>
      <SelectPrimitive.Viewport className='p-1'>{children}</SelectPrimitive.Viewport>
      <SelectPrimitive.ScrollDownButton className='flex h-7 items-center justify-center'>
        <ChevronDown className='h-4 w-4' />
      </SelectPrimitive.ScrollDownButton>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
)

const SelectItem = ({ className, children, ...props }) => (
  <SelectPrimitive.Item
    className={cn(
      'relative flex w-full cursor-default select-none items-center rounded-md py-2 pl-8 pr-2 text-sm outline-none hover:bg-slate-100 dark:hover:bg-slate-800',
      className,
    )}
    {...props}
  >
    <span className='absolute left-2 flex h-4 w-4 items-center justify-center'>
      <SelectPrimitive.ItemIndicator>
        <Check className='h-4 w-4' />
      </SelectPrimitive.ItemIndicator>
    </span>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
)

export { Select, SelectTrigger, SelectValue, SelectContent, SelectItem }

