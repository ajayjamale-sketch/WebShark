import { NavLink, Link, useNavigate } from 'react-router-dom'
import { PanelLeftClose, PanelLeftOpen, ChevronRight, ShieldAlert, LogOut } from 'lucide-react'
import { appNavigation, adminNavigation, agencyNavigation, seoNavigation } from '../../constants/navigation'
import { cn } from '../../utils/cn'
import SharkLogo from '../common/SharkLogo'
import { motion } from 'framer-motion'
import { useAuth } from '../../context/AuthContext'

export function Sidebar({ collapsed, setCollapsed }) {
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

  return (
    <aside
      className={cn(
        'sticky top-0 hidden h-screen shrink-0 border-r border-border bg-background/80 p-4 backdrop-blur-3xl lg:flex lg:flex-col transition-all duration-500 ease-in-out z-30',
        collapsed ? 'w-24' : 'w-72',
      )}
    >
      <div className='mb-8 flex items-center justify-between px-2 relative z-10'>
        <Link to="/" className="flex items-center">
           <SharkLogo className={collapsed ? "h-10 w-10" : "h-10 w-44"} animated={false} />
        </Link>
        <button
          type='button'
          className='rounded-none p-2 bg-accent/10 border border-border hover:bg-accent/20 transition-all text-muted-foreground hover:text-foreground'
          onClick={() => setCollapsed((current) => !current)}
        >
          {collapsed ? <PanelLeftOpen className='h-5 w-5' /> : <PanelLeftClose className='h-5 w-5' />}
        </button>
      </div>

      <nav className='flex-1 space-y-2 px-2 overflow-y-auto scrollbar-none relative z-10'>
        {isAdmin && !collapsed && (
          <div className="mb-4 px-4 py-2 bg-primary-blue/10 border border-primary-blue/20 flex items-center gap-2">
            <ShieldAlert className="h-3 w-3 text-primary-blue" />
            <span className="text-[9px] font-bold text-primary-blue uppercase tracking-widest">Admin Authorization</span>
          </div>
        )}
        
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
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
                    layoutId="sidebar-active-app"
                    className="absolute inset-0 bg-primary-blue/5 z-[-1]"
                  />
                )}
                <item.icon className={cn(
                  'h-5 w-5 shrink-0 transition-all duration-300', 
                  isActive ? 'text-primary-blue scale-110' : 'text-muted-foreground group-hover:text-foreground'
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
      
      {!collapsed && (
        <div className="mt-6 mx-2 p-4 rounded-none border border-border bg-accent/5">
           <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-2">Storage Protocol</p>
           <div className="h-1 w-full bg-border rounded-none overflow-hidden">
              <div className="h-full w-3/4 bg-primary-blue"></div>
           </div>
           <p className="text-[10px] text-muted-foreground mt-2">74.2 GB / 100 GB</p>
        </div>
      )}

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
  )
}
