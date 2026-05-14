import { useEffect, useState } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { appNavigation, adminNavigation, agencyNavigation, seoNavigation } from '../constants/navigation'
import { useAuth } from '../context/AuthContext'
import { useAppContext } from '../context/AppContext'
import { CommandPalette } from '../components/common/CommandPalette'
import { AIChatWidget } from '../components/common/AIChatWidget'
import { OnboardingTour } from '../components/common/OnboardingTour'
import { Sidebar } from '../components/dashboard/Sidebar'
import { TopNavbar } from '../components/dashboard/TopNavbar'
import { Button } from '../components/ui/button'
import SharkLogo from '../components/common/SharkLogo'
import { cn } from '../utils/cn'

export function AppLayout() {
  const { user } = useAuth()
  const [mobileOpen, setMobileOpen] = useState(false)
  const { setIsCommandOpen } = useAppContext()
  const location = useLocation()

  const getNavItems = () => {
    switch (user?.role) {
      case 'admin': return adminNavigation
      case 'agency': return agencyNavigation
      case 'seo': return seoNavigation
      default: return appNavigation
    }
  }

  const navItems = getNavItems()

  useEffect(() => {
    const onKeyDown = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        setIsCommandOpen(true)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [setIsCommandOpen])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  return (
    <div className='min-h-screen lg:flex bg-background text-foreground selection:bg-primary-blue/30'>
      <Sidebar />

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className='fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden'
            />
            <motion.aside
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className='fixed left-0 top-0 z-50 h-full w-[280px] border-r border-border bg-card/95 backdrop-blur-3xl p-6 lg:hidden shadow-2xl'
            >
              <div className='mb-10 flex items-center justify-between'>
                <SharkLogo className="h-8 w-36" hideText={false} />
                <Button 
                  size='icon' 
                  variant='ghost' 
                  className="h-8 w-8 p-0 hover:bg-accent/10" 
                  onClick={() => setMobileOpen(false)}
                >
                   <span className="text-xl">×</span>
                </Button>
              </div>
              <nav className='space-y-1'>
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) => cn(
                      'flex items-center gap-3 rounded-none px-4 py-3 text-sm transition-all font-bold uppercase tracking-widest',
                      isActive ? 'bg-primary-blue/10 text-primary-blue border-l-4 border-primary-blue' : 'hover:bg-accent/10'
                    )}
                    onClick={() => setMobileOpen(false)}
                  >
                    <item.icon className='h-4 w-4' />
                    {item.label}
                  </NavLink>
                ))}
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      <main className='min-w-0 flex-1 h-screen flex flex-col overflow-hidden'>
        <TopNavbar onMobileMenu={() => setMobileOpen(true)} />
        <div className='flex-1 overflow-y-auto p-4 lg:p-8 bg-background/50 scrollbar-cyber'>
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

      <CommandPalette />
      <OnboardingTour />
      <AIChatWidget />
    </div>
  )
}


