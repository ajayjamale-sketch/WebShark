import { NavLink, Link, useNavigate } from 'react-router-dom'
import { PanelLeftClose, PanelLeftOpen, ChevronRight, ShieldAlert, LogOut } from 'lucide-react'
import { appNavigation, adminNavigation, agencyNavigation, seoNavigation } from '../../constants/navigation'
import { cn } from '../../utils/cn'
import SharkLogo from '../common/SharkLogo'
import { motion, AnimatePresence } from 'framer-motion'
import { useAuth } from '../../context/AuthContext'

export function Sidebar() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  
  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  const getNavItems = () => {
    switch (user?.role) {
      case 'admin': return adminNavigation
      case 'agency': return agencyNavigation
      case 'seo': return seoNavigation
      default: return appNavigation
    }
  }

  const navItems = getNavItems()
  const isAdmin = user?.role === 'admin'
  const sidebarWidth = 288

  return (
    <motion.aside
      initial={false}
      animate={{ width: sidebarWidth }}
      transition={{ type: 'spring', stiffness: 400, damping: 40 }}
      className={cn(
        'sticky top-0 hidden h-screen shrink-0 border-r border-border bg-background/80 p-4 backdrop-blur-3xl lg:flex lg:flex-col z-30 overflow-hidden'
      )}
    >
      <div className='mb-8 flex items-center justify-between px-2 relative z-10 transition-all duration-300 shrink-0'>
        <Link to="/" className="flex items-center">
           <SharkLogo className="h-10 w-44" animated={false} hideText={false} />
        </Link>
      </div>

      <nav className='flex-1 space-y-1.5 px-2 overflow-y-auto scrollbar-none relative z-10'>
        {isAdmin && (
          <motion.div 
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 px-4 py-2 bg-primary-blue/10 border border-primary-blue/20 flex items-center gap-2"
          >
            <ShieldAlert className="h-3 w-3 text-primary-blue" />
            <span className="text-[9px] font-bold text-primary-blue uppercase tracking-widest">Admin Authorization</span>
          </motion.div>
        )}
        
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
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
                  isActive ? 'text-primary-blue scale-110' : 'text-muted-foreground group-hover:text-foreground'
                )} />
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className='tracking-wide flex-1 whitespace-nowrap'
                >
                  {item.label}
                </motion.span>
                {isActive && (
                  <ChevronRight className="h-4 w-4 text-accent-cyan opacity-50" />
                )}
              </>
            )}
          </NavLink>
        ))}
      </nav>
      
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-6 mx-2 p-4 rounded-none border border-border bg-accent/5 shrink-0"
      >
         <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-2">Storage Protocol</p>
         <div className="h-1 w-full bg-border rounded-none overflow-hidden">
            <div className="h-full w-3/4 bg-primary-blue"></div>
         </div>
         <p className="text-[10px] text-muted-foreground mt-2">74.2 GB / 100 GB</p>
      </motion.div>

      <div className='mt-auto pt-6 border-t border-border px-2 shrink-0'>
         <button 
           onClick={handleLogout}
           className="flex items-center gap-3 w-full rounded-none px-4 py-3 text-sm font-bold uppercase tracking-widest text-muted-foreground hover:text-rose-500 hover:bg-rose-500/5 transition-all"
         >
           <LogOut className="h-5 w-5" />
           <span className="whitespace-nowrap">Sign Out</span>
         </button>
      </div>
    </motion.aside>
  )
}
