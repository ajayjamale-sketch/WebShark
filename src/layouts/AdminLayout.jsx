import { NavLink, Outlet, Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { adminNavigation } from '../constants/navigation'
import { ThemeToggle } from '../components/common/ThemeToggle'
import { ProfileDropdown } from '../components/common/ProfileDropdown'
import SharkLogo from '../components/common/SharkLogo'
import { cn } from '../utils/cn'
import { 
  PanelLeftOpen, 
  PanelLeftClose, 
  ShieldCheck, 
  Search, 
  Bell,
  LogOut,
  ChevronRight
} from 'lucide-react'

import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

export function AdminLayout() {
  const { logout } = useAuth()
  const navigate = useNavigate()
  const [collapsed, setCollapsed] = useState(false)
  const location = useLocation()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <div className='min-h-screen lg:flex bg-background text-foreground selection:bg-primary-blue/30'>
      {/* Sidebar */}
      <aside
        className={cn(
          'sticky top-0 hidden h-screen shrink-0 border-r border-border bg-card/50 p-4 backdrop-blur-3xl lg:flex lg:flex-col transition-all duration-500 ease-in-out z-30',
          collapsed ? 'w-24' : 'w-72',
        )}
      >
        {/* Background glow in sidebar */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-primary-blue/5 to-transparent pointer-events-none" />
        
        <div className='mb-8 flex items-center justify-between px-2 relative z-10'>
          <Link to="/" className="flex items-center">
             <SharkLogo className={collapsed ? "h-10 w-10" : "h-10 w-44"} animated={true} />
          </Link>
          <button
            type='button'
            className='rounded-none p-2 bg-accent/10 border border-border hover:bg-accent/20 transition-all text-muted-foreground hover:text-foreground'
            onClick={() => setCollapsed((c) => !c)}
          >
            {collapsed ? <PanelLeftOpen className='h-5 w-5' /> : <PanelLeftClose className='h-5 w-5' />}
          </button>
        </div>

        {!collapsed && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className='mb-8 mx-2 p-3 rounded-none bg-accent/10 border border-border backdrop-blur-sm relative industrial-corner'
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
        )}

        <nav className='flex-1 space-y-2 px-2 overflow-y-auto scrollbar-none'>
          {adminNavigation.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/admin'}
              className={({ isActive }) =>
                cn(
                  'group relative flex items-center gap-3 rounded-none px-4 py-3.5 text-sm font-bold tracking-tight uppercase transition-all duration-300 overflow-hidden',
                  isActive 
                    ? 'text-foreground bg-accent border-l-4 border-l-primary-blue border-y border-r border-border' 
                    : 'text-muted-foreground hover:text-foreground hover:bg-accent border border-transparent'
                )
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <motion.div 
                      layoutId="sidebar-active"
                      className="absolute inset-0 bg-primary-blue/5 z-[-1]"
                    />
                  )}
                  <item.icon className={cn(
                    'h-5 w-5 shrink-0 transition-all duration-300', 
                    isActive ? 'text-accent-cyan scale-110 drop-shadow-[0_0_8px_rgba(6,182,212,0.6)]' : 'text-muted-foreground group-hover:text-foreground'
                  )} />
                  {!collapsed && (
                    <span className='tracking-wide flex-1'>{item.label}</span>
                  )}
                  {!collapsed && isActive && (
                    <ChevronRight className="h-4 w-4 text-accent-cyan opacity-50" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className='mt-auto pt-6 border-t border-border px-2'>
           <button 
             onClick={handleLogout}
             className={cn(
               "flex items-center gap-3 w-full rounded-none px-4 py-3 text-sm font-bold uppercase tracking-widest text-muted-foreground hover:text-rose-500 hover:bg-rose-500/5 transition-all",
               collapsed && "justify-center"
             )}
           >
             <LogOut className="h-5 w-5" />
             {!collapsed && <span>Sign Out</span>}
           </button>
        </div>
      </aside>

      <main className='flex-1 flex flex-col h-screen overflow-hidden'>
        {/* Top bar */}
        <header className='h-20 flex items-center justify-between border-b border-border bg-card/20 px-8 backdrop-blur-3xl transition-all relative z-20'>
          <div className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-primary-blue/30 to-transparent"></div>
          
          <div className="flex items-center gap-4">
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
            <button className="relative h-10 w-10 flex items-center justify-center rounded-none bg-accent/5 border border-border hover:bg-accent/10 transition-all group">
               <Bell className="h-5 w-5 text-muted-foreground group-hover:text-foreground" />
               <span className="absolute top-2.5 right-2.5 h-2 w-2 bg-primary-blue rounded-full shadow-neon-blue"></span>
            </button>
            <div className="h-8 w-[1px] bg-border mx-2"></div>
            <ThemeToggle />
            <ProfileDropdown />
          </div>
        </header>

        {/* Page Content */}
        <div className='flex-1 overflow-y-auto scrollbar-cyber p-6 lg:p-8 relative'>
           {/* Background decorative elements */}
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-blue/5 blur-[120px] rounded-full -z-10 pointer-events-none" />
           <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-cyan/5 blur-[120px] rounded-full -z-10 pointer-events-none" />
           
          <AnimatePresence mode='wait'>
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  )
}
