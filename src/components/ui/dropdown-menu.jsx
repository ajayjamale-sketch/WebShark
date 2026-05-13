import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import { Check } from 'lucide-react'
import { cn } from '../../utils/cn'

const DropdownMenu = DropdownMenuPrimitive.Root
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger
const DropdownMenuContent = ({ className, sideOffset = 8, ...props }) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      sideOffset={sideOffset}
      className={cn(
        'z-50 min-w-44 rounded-xl border border-slate-200 bg-white p-1.5 shadow-xl dark:border-slate-700 dark:bg-slate-900',
        className,
      )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
)

const DropdownMenuItem = ({ className, inset, ...props }) => (
  <DropdownMenuPrimitive.Item
    className={cn(
      'relative flex cursor-pointer select-none items-center rounded-md px-3 py-2 text-sm text-slate-700 outline-none transition hover:bg-slate-100 focus:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800 dark:focus:bg-slate-800',
      inset && 'pl-8',
      className,
    )}
    {...props}
  />
)

const DropdownMenuLabel = ({ className, ...props }) => (
  <DropdownMenuPrimitive.Label className={cn('px-3 py-2 text-xs font-semibold uppercase tracking-wide text-slate-500', className)} {...props} />
)

const DropdownMenuSeparator = ({ className, ...props }) => (
  <DropdownMenuPrimitive.Separator className={cn('my-1 h-px bg-slate-200 dark:bg-slate-700', className)} {...props} />
)

const DropdownMenuCheckboxItem = ({ className, children, checked, ...props }) => (
  <DropdownMenuPrimitive.CheckboxItem
    checked={checked}
    className={cn(
      'relative flex cursor-pointer select-none items-center rounded-md px-3 py-2 pl-8 text-sm text-slate-700 outline-none transition hover:bg-slate-100 focus:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800 dark:focus:bg-slate-800',
      className,
    )}
    {...props}
  >
    <span className='absolute left-2 inline-flex h-4 w-4 items-center justify-center'>
      <DropdownMenuPrimitive.ItemIndicator>
        <Check className='h-4 w-4' />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
)

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
}

