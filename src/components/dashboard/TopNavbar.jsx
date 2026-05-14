import { CalendarRange, Command, Menu, Search, FileDown } from 'lucide-react'
import { useAppContext } from '../../context/AppContext'
import { toast } from 'sonner'
import { Input } from '../ui/input'
import { ThemeToggle } from '../common/ThemeToggle'
import { WorkspaceSwitcher } from '../common/WorkspaceSwitcher'
import { NotificationDrawer } from '../common/NotificationDrawer'
import { ProfileDropdown } from '../common/ProfileDropdown'

export function TopNavbar({ onMobileMenu }) {
  const { setIsCommandOpen } = useAppContext()

  return (
    <header className='h-20 sticky top-0 z-20 border-b border-border bg-background/80 backdrop-blur-md transition-all'>
      <div className='h-full flex items-center gap-4 px-6 relative'>
        <div className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-primary-blue/20 to-transparent"></div>
        
        <button className='lg:hidden text-muted-foreground hover:text-foreground p-2' onClick={onMobileMenu}>
          <Menu className='h-5 w-5' />
        </button>

        <WorkspaceSwitcher />

        <div className='relative hidden xl:block flex-1 max-w-md ml-4'>
           <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary-blue transition-colors" />
              <Input 
                placeholder='Search nodes...' 
                className='pl-10 py-5 bg-background border-border rounded-none focus:ring-0 focus:border-primary-blue transition-all placeholder:text-muted-foreground/30' 
              />
           </div>
        </div>

        <div className="flex-1 lg:hidden"></div>

        <div className="flex items-center gap-3">
          <button 
            onClick={() => setIsCommandOpen(true)}
            className="hidden sm:flex items-center gap-3 px-4 py-2.5 rounded-none bg-accent/20 border border-border text-muted-foreground hover:text-foreground hover:bg-accent/40 transition-all group"
          >
            <Command className='h-4 w-4' />
            <span className='text-xs font-bold uppercase tracking-widest'>Command</span>
            <span className="text-[10px] bg-background px-1.5 py-0.5 rounded-none border border-border">⌘K</span>
          </button>

          <button 
            onClick={() => toast.info('WINDOW_SYNCED', { description: 'Syncing tactical timeline with global HQ...' })}
            className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-none bg-accent/20 border border-border text-muted-foreground hover:text-foreground hover:bg-accent/40 transition-all"
          >
            <CalendarRange className='h-4 w-4' />
            <span className='text-xs font-bold uppercase tracking-widest'>Operational Window</span>
          </button>

          <button 
            onClick={() => toast.success('INTEL_GENERATED', { description: 'Operational brief compiled and ready for deployment.' })}
            className="flex items-center gap-2 px-4 py-2.5 rounded-none bg-primary-blue text-white text-xs font-bold uppercase tracking-widest hover:bg-primary-blue/90 transition-all shadow-sm"
          >
            <FileDown className='h-4 w-4' />
            <span className="hidden md:inline">Generate Intel</span>
          </button>

          <div className="h-8 w-[1px] bg-border mx-2 hidden sm:block"></div>
          
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <NotificationDrawer />
            <ProfileDropdown />
          </div>
        </div>
      </div>
    </header>
  )
}
