import { NavLink, Outlet, Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { adminNavigation } from '../constants/navigation'
import { ThemeToggle } from '../components/common/ThemeToggle'
import { ProfileDropdown } from '../components/common/ProfileDropdown'
import SharkLogo from '../components/common/SharkLogo'
import { NotificationDrawer } from '../components/common/NotificationDrawer'
import { cn } from '../utils/cn'
import { 
  PanelLeftOpen, 
  PanelLeftClose, 
  ShieldCheck, 
  Search, 
  Bell,
  LogOut,
  ChevronRight,
  Menu
} from 'lucide-react'

import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

export function AdminLayout() {
  const { logout } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location.pathname])

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  // Sidebar is permanently expanded on desktop
  const sidebarWidth = 288

  return (
    <div className='min-h-screen lg:flex bg-background text-foreground selection:bg-primary-blue/30'>
      {/* Mobile Sidebar Backdrop */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{ 
          width: sidebarWidth,
          x: mobileMenuOpen ? 0 : (typeof window !== 'undefined' && window.innerWidth < 1024 ? -sidebarWidth : 0)
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 40 }}
        className={cn(
          "fixed lg:sticky top-0 inset-y-0 left-0 z-50 flex flex-col border-r border-border bg-card/50 backdrop-blur-3xl overflow-hidden h-screen shrink-0"
        )}
      >
        <div className='flex h-20 items-center justify-between px-6 border-b border-border shrink-0'>
          <Link to="/" className="flex items-center">
             <SharkLogo className="h-10 w-44" animated={true} hideText={false} />
          </Link>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className='mb-8 mx-4 mt-6 p-3 rounded-none bg-accent/10 border border-border backdrop-blur-sm relative industrial-corner shrink-0'
        >
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-none bg-primary-blue p-[1px]">
              <div className="h-full w-full rounded-none bg-card flex items-center justify-center overflow-hidden">
                 <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="Admin" className="h-8 w-8" />
              </div>
            </div>
            <div className="overflow-hidden">
              <p className="text-sm font-bold text-foreground truncate">Administrator</p>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="h-3 w-3 text-accent-cyan" />
                <span className="text-[10px] font-bold text-accent-cyan uppercase tracking-widest">Global Master</span>
              </div>
            </div>
          </div>
        </motion.div>

        <nav className='flex-1 space-y-1.5 p-2 overflow-y-auto scrollbar-none'>
          {adminNavigation.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/admin'}
              className={({ isActive }) =>
                cn(
                  'group relative flex items-center gap-3 rounded-none px-4 py-3.5 text-sm font-bold tracking-tight uppercase transition-all duration-300',
                  isActive 
                    ? 'text-foreground bg-accent border-l-4 border-l-primary-blue border-y border-r border-border' 
                    : 'text-muted-foreground hover:text-foreground hover:bg-accent border border-transparent'
                )
              }
            >
              {({ isActive }) => (
                <>
                  <item.icon className={cn(
                    'h-5 w-5 shrink-0 transition-all duration-300', 
                    isActive ? 'text-accent-cyan scale-110 drop-shadow-[0_0_8px_rgba(6,182,212,0.6)]' : 'text-muted-foreground group-hover:text-foreground'
                  )} />
                  <span className='tracking-wide flex-1 whitespace-nowrap'>
                    {item.label}
                  </span>
                  {isActive && (
                    <ChevronRight className="h-4 w-4 text-accent-cyan opacity-50" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className='mt-auto pt-6 border-t border-border px-2 mb-4 shrink-0'>
           <button 
             onClick={handleLogout}
             className="flex items-center gap-3 w-full rounded-none px-4 py-3 text-sm font-bold uppercase tracking-widest text-muted-foreground hover:text-rose-500 hover:bg-rose-500/5 transition-all"
           >
             <LogOut className="h-5 w-5" />
             <span className="whitespace-nowrap">Sign Out</span>
           </button>
        </div>
      </motion.aside>

      <main className='flex-1 flex flex-col h-screen overflow-hidden min-w-0'>
        {/* Top bar */}
        <header className='h-20 flex items-center justify-between border-b border-border bg-card/20 px-4 lg:px-8 backdrop-blur-3xl transition-all relative z-20 shrink-0'>
          <div className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-primary-blue/30 to-transparent"></div>
          
          <div className="flex items-center gap-4">
             <button
               type='button'
               className='lg:hidden rounded-none p-2 bg-accent/10 border border-border text-muted-foreground hover:text-foreground'
               onClick={() => setMobileMenuOpen(true)}
             >
               <PanelLeftOpen className='h-5 w-5' />
             </button>
             <Link to="/" className="lg:hidden block">
                <SharkLogo className="h-8 w-8" animated={true} />
             </Link>
             <div className="relative group hidden sm:block">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-accent-cyan transition-colors" />
                <input 
                  type="text" 
                  placeholder="Universal Search..." 
                  className="bg-accent/10 border border-border rounded-none pl-10 pr-4 py-2 text-sm w-64 focus:outline-none focus:ring-1 focus:ring-accent-cyan/50 focus:bg-accent/20 transition-all"
                />
             </div>
          </div>

          <div className='flex items-center gap-4'>
            <ThemeToggle />
            <NotificationDrawer />
            <ProfileDropdown />
          </div>
        </header>

        {/* Main Content Area */}
        <div className='flex-1 overflow-y-auto p-4 lg:p-8 scrollbar-cyber bg-background/50'>
          <AnimatePresence mode='wait'>
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  )
}
