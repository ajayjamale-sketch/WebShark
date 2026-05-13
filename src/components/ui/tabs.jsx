import * as TabsPrimitive from '@radix-ui/react-tabs'
import { cn } from '../../utils/cn'

const Tabs = TabsPrimitive.Root

const TabsList = ({ className, ...props }) => (
  <TabsPrimitive.List className={cn('inline-flex rounded-xl bg-slate-100 p-1 dark:bg-slate-800', className)} {...props} />
)

const TabsTrigger = ({ className, ...props }) => (
  <TabsPrimitive.Trigger
    className={cn(
      'inline-flex items-center justify-center rounded-lg px-3 py-1.5 text-sm font-medium text-slate-500 transition data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-sm dark:text-slate-300 dark:data-[state=active]:bg-slate-700 dark:data-[state=active]:text-white',
      className,
    )}
    {...props}
  />
)

const TabsContent = ({ className, ...props }) => <TabsPrimitive.Content className={cn('mt-4', className)} {...props} />

export { Tabs, TabsList, TabsTrigger, TabsContent }

